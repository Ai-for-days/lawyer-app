/* ============================================
   Remain Silent PWA — Search Engine
   ============================================ */

(function () {
  'use strict';

  var searchIndex = [];
  var debounceTimer = null;

  function buildIndex() {
    searchIndex = APP_CONTENT.sections.map(function (section) {
      var plainText = section.content
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .trim();

      return {
        id: section.id,
        number: section.number,
        title: section.title.toLowerCase(),
        titleOriginal: section.title,
        subtitle: (section.subtitle || '').toLowerCase(),
        keywords: section.keywords.map(function (k) { return k.toLowerCase(); }),
        text: plainText,
        icon: section.icon
      };
    });
  }

  function search(query) {
    if (!query || query.length < 2) return [];

    var terms = query.toLowerCase().trim().split(/\s+/);
    var results = [];

    for (var i = 0; i < searchIndex.length; i++) {
      var entry = searchIndex[i];
      var score = 0;

      for (var t = 0; t < terms.length; t++) {
        var term = terms[t];

        if (entry.title.includes(term)) score += 100;

        for (var k = 0; k < entry.keywords.length; k++) {
          if (entry.keywords[k].includes(term)) {
            score += 50;
            break;
          }
        }

        if (entry.subtitle.includes(term)) score += 30;

        if (entry.text.includes(term)) {
          score += 10;
          var escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          var regex = new RegExp(escaped, 'g');
          var matches = entry.text.match(regex);
          if (matches) score += Math.min(matches.length, 5);
        }
      }

      if (score > 0) {
        results.push({
          id: entry.id,
          number: entry.number,
          title: entry.titleOriginal,
          icon: entry.icon,
          score: score,
          snippet: extractSnippet(entry.text, terms[0])
        });
      }
    }

    results.sort(function (a, b) { return b.score - a.score; });
    return results.slice(0, 10);
  }

  function extractSnippet(text, term) {
    var idx = text.indexOf(term);
    if (idx === -1) return '';
    var start = Math.max(0, idx - 40);
    var end = Math.min(text.length, idx + term.length + 80);
    var snippet = text.slice(start, end).trim();
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet += '...';
    return snippet;
  }

  function highlightMatch(text, query) {
    var terms = query.toLowerCase().split(/\s+/);
    var result = text;
    for (var i = 0; i < terms.length; i++) {
      var escaped = terms[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var regex = new RegExp('(' + escaped + ')', 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    }
    return result;
  }

  function renderResults(results, query) {
    var container = document.getElementById('searchResults');
    if (!container) return;

    if (!results.length) {
      container.innerHTML = query.length >= 2
        ? '<div class="search-no-results">No results found</div>'
        : '';
      return;
    }

    // Access icon system from app.js
    var getIcon = function (name) {
      var iconEl = document.createElement('div');
      iconEl.className = 'toc-card-icon';
      // Reuse the icon SVGs from the sidebar
      var sidebarItem = document.querySelector('.sidebar-item[data-section="' + results[0].id + '"] .sidebar-item-icon');
      return '';
    };

    container.innerHTML = results.map(function (r) {
      return '<a href="#' + r.id + '" class="search-result-item" role="option">' +
        '<div class="search-result-icon">' +
          '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>' +
        '</div>' +
        '<div class="search-result-text">' +
          '<span class="search-result-title">Section ' + r.number + ': ' + highlightMatch(r.title, query) + '</span>' +
          (r.snippet ? '<span class="search-result-snippet">' + highlightMatch(r.snippet, query) + '</span>' : '') +
        '</div>' +
      '</a>';
    }).join('');
  }

  function handleInput(e) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      var query = e.target.value;
      var results = search(query);
      renderResults(results, query);
    }, 200);
  }

  window.SearchEngine = {
    init: buildIndex,
    search: search,
    handleInput: handleInput
  };

})();
