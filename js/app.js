/* ============================================
   Remain Silent PWA — App Controller
   ============================================ */

(function () {
  'use strict';

  // --- STATE ---
  var state = {
    currentView: 'home',
    currentSectionId: null,
    sidebarOpen: false,
    searchOpen: false,
    scrollPositions: {}
  };

  // --- DOM REFS ---
  var refs = {};

  function cacheRefs() {
    refs.header = document.getElementById('appHeader');
    refs.headerTitle = document.querySelector('.header-title-text');
    refs.menuToggle = document.getElementById('menuToggle');
    refs.searchToggle = document.getElementById('searchToggle');
    refs.searchBar = document.getElementById('searchBar');
    refs.searchInput = document.getElementById('searchInput');
    refs.searchClear = document.getElementById('searchClear');
    refs.searchResults = document.getElementById('searchResults');
    refs.sidebar = document.getElementById('sidebar');
    refs.sidebarOverlay = document.getElementById('sidebarOverlay');
    refs.sidebarClose = document.getElementById('sidebarClose');
    refs.sidebarNavList = document.getElementById('sidebarNavList');
    refs.mainContent = document.getElementById('mainContent');
    refs.viewHome = document.getElementById('viewHome');
    refs.viewSection = document.getElementById('viewSection');
    refs.featuredSection = document.getElementById('featuredSection');
    refs.tocGrid = document.getElementById('tocGrid');
    refs.sectionHeader = document.getElementById('sectionHeader');
    refs.sectionBody = document.getElementById('sectionBody');
    refs.sectionNav = document.getElementById('sectionNav');
    refs.installPrompt = document.getElementById('installPrompt');
    refs.installBtn = document.getElementById('installBtn');
    refs.installDismiss = document.getElementById('installDismiss');
  }

  // --- ICON SYSTEM ---
  var icons = {
    'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    'info': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    'book': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    'walking': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"></circle><path d="M15 22l-3-5-3 5"></path><path d="M9 12l3-3 3 3"></path><line x1="12" y1="9" x2="12" y2="17"></line></svg>',
    'car': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17v2m14-2v2"></path><circle cx="7.5" cy="13" r="1.5"></circle><circle cx="16.5" cy="13" r="1.5"></circle></svg>',
    'home': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    'alert-triangle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    'sign': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="12" rx="2"></rect><line x1="12" y1="15" x2="12" y2="21"></line><line x1="8" y1="21" x2="16" y2="21"></line></svg>',
    'globe': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    'users': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    'school': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"></path></svg>',
    'alert-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
    'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    'link': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
    'eye': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    'check-square': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
    'smartphone': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
    'clipboard': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>',
    'flag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
    'people': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    'heart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    'credit-card': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>',
    'chevron-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    'chevron-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
    'arrow-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    'grid': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>'
  };

  function getIcon(name) {
    return icons[name] || icons['info'];
  }

  // --- INITIALIZATION ---
  function init() {
    cacheRefs();
    renderTOC();
    renderSidebar();
    bindEvents();
    handleRoute();
    registerServiceWorker();
    setupInstallPrompt();

    if (window.SearchEngine) {
      window.SearchEngine.init();
    }
  }

  // --- ROUTING ---
  function handleRoute() {
    var hash = window.location.hash.slice(1);
    if (hash && hash !== 'home') {
      var section = findSection(hash);
      if (section) {
        showSection(section.id);
        return;
      }
    }
    showHome();
  }

  function findSection(id) {
    return APP_CONTENT.sections.find(function (s) { return s.id === id; });
  }

  // --- VIEWS ---
  function showHome() {
    state.currentView = 'home';
    state.currentSectionId = null;
    refs.viewHome.hidden = false;
    refs.viewSection.hidden = true;
    refs.headerTitle.textContent = 'Remain Silent';
    document.title = 'Remain Silent - Know Your Rights | McGuire Law';
    closeSidebar();
    closeSearch();
    window.scrollTo(0, 0);
  }

  function showSection(sectionId) {
    var section = findSection(sectionId);
    if (!section) return;

    if (state.currentSectionId) {
      state.scrollPositions[state.currentSectionId] = window.scrollY;
    }

    state.currentView = 'section';
    state.currentSectionId = sectionId;

    refs.sectionHeader.innerHTML = buildSectionHeader(section);
    refs.sectionBody.innerHTML = section.content;
    refs.sectionNav.innerHTML = buildSectionNav(section);

    refs.viewHome.hidden = true;
    refs.viewSection.hidden = false;
    refs.headerTitle.textContent = section.title;
    document.title = section.title + ' | Remain Silent - McGuire Law';

    closeSidebar();
    closeSearch();
    updateSidebarActive(sectionId);

    var saved = state.scrollPositions[sectionId];
    window.scrollTo(0, saved || 0);
  }

  // --- RENDERING ---
  function renderTOC() {
    var featured = APP_CONTENT.sections.find(function (s) { return s.isFeatured; });
    if (featured) {
      refs.featuredSection.innerHTML =
        '<a href="#' + featured.id + '" class="featured-card">' +
          '<span class="featured-card-badge">The Most Important Rule</span>' +
          '<div class="featured-card-desc">Never talk to law enforcement without a lawyer. Learn the SILENT method and key phrases to protect your rights.</div>' +
        '</a>';
    }

    var others = APP_CONTENT.sections.filter(function (s) { return !s.isFeatured; });
    refs.tocGrid.innerHTML = others.map(function (s) {
      return '<a href="#' + s.id + '" class="toc-card">' +
        '<div class="toc-card-icon">' + getIcon(s.icon) + '</div>' +
        '<div class="toc-card-text">' +
          '<span class="toc-card-number">Section ' + s.number + '</span>' +
          '<span class="toc-card-title">' + s.title + '</span>' +
          (s.subtitle ? '<span class="toc-card-subtitle">' + s.subtitle + '</span>' : '') +
        '</div>' +
        '<div class="toc-card-arrow">' + getIcon('chevron-right') + '</div>' +
      '</a>';
    }).join('');
  }

  function renderSidebar() {
    refs.sidebarNavList.innerHTML =
      '<a href="#home" class="sidebar-item" data-section="home">' +
        '<span class="sidebar-item-icon">' + getIcon('grid') + '</span>' +
        '<span class="sidebar-item-text">Table of Contents</span>' +
      '</a>' +
      APP_CONTENT.sections.map(function (s) {
        return '<a href="#' + s.id + '" class="sidebar-item" data-section="' + s.id + '">' +
          '<span class="sidebar-item-icon">' + getIcon(s.icon) + '</span>' +
          '<span class="sidebar-item-text">' + s.title + '</span>' +
        '</a>';
      }).join('');
  }

  function buildSectionHeader(section) {
    return '<a href="#home" class="section-back">' +
        getIcon('arrow-left') + ' All Sections' +
      '</a>' +
      '<div class="section-number">Section ' + section.number + '</div>' +
      '<h2 class="section-title">' + section.title + '</h2>' +
      (section.subtitle ? '<div class="section-subtitle">' + section.subtitle + '</div>' : '');
  }

  function buildSectionNav(section) {
    var idx = APP_CONTENT.sections.indexOf(section);
    var prev = idx > 0 ? APP_CONTENT.sections[idx - 1] : null;
    var next = idx < APP_CONTENT.sections.length - 1 ? APP_CONTENT.sections[idx + 1] : null;

    var html = '<div class="section-nav-inner">';

    if (prev) {
      html += '<a href="#' + prev.id + '" class="nav-btn">' +
        getIcon('chevron-left') +
        '<div><span class="nav-btn-label">Previous</span><span class="nav-btn-title">' + prev.title + '</span></div>' +
      '</a>';
    } else {
      html += '<span></span>';
    }

    html += '<a href="#home" class="nav-home">' + getIcon('grid') + ' All Sections</a>';

    if (next) {
      html += '<a href="#' + next.id + '" class="nav-btn" style="text-align:right">' +
        '<div><span class="nav-btn-label">Next</span><span class="nav-btn-title">' + next.title + '</span></div>' +
        getIcon('chevron-right') +
      '</a>';
    } else {
      html += '<span></span>';
    }

    html += '</div>';
    return html;
  }

  // --- SIDEBAR ---
  function toggleSidebar() {
    if (state.sidebarOpen) closeSidebar();
    else openSidebar();
  }

  function openSidebar() {
    state.sidebarOpen = true;
    refs.sidebar.classList.add('open');
    refs.sidebarOverlay.classList.add('active');
    refs.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    state.sidebarOpen = false;
    refs.sidebar.classList.remove('open');
    refs.sidebarOverlay.classList.remove('active');
    refs.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function updateSidebarActive(sectionId) {
    var items = refs.sidebarNavList.querySelectorAll('.sidebar-item');
    items.forEach(function (item) {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });
  }

  // --- SEARCH ---
  function toggleSearch() {
    if (state.searchOpen) closeSearch();
    else openSearch();
  }

  function openSearch() {
    state.searchOpen = true;
    refs.searchBar.hidden = false;
    refs.searchInput.focus();
  }

  function closeSearch() {
    state.searchOpen = false;
    refs.searchBar.hidden = true;
    refs.searchInput.value = '';
    refs.searchResults.innerHTML = '';
    refs.searchClear.hidden = true;
  }

  function handleSearchInput() {
    var val = refs.searchInput.value;
    refs.searchClear.hidden = val.length === 0;

    if (window.SearchEngine) {
      window.SearchEngine.handleInput({ target: refs.searchInput });
    }
  }

  // --- EVENTS ---
  function bindEvents() {
    refs.menuToggle.addEventListener('click', toggleSidebar);
    refs.sidebarClose.addEventListener('click', closeSidebar);
    refs.sidebarOverlay.addEventListener('click', closeSidebar);
    refs.searchToggle.addEventListener('click', toggleSearch);
    refs.searchInput.addEventListener('input', handleSearchInput);
    refs.searchClear.addEventListener('click', function () {
      refs.searchInput.value = '';
      refs.searchResults.innerHTML = '';
      refs.searchClear.hidden = true;
      refs.searchInput.focus();
    });

    window.addEventListener('hashchange', handleRoute);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (state.searchOpen) closeSearch();
        else if (state.sidebarOpen) closeSidebar();
      }
    });

    // Swipe gesture for sidebar
    var touchStartX = 0;
    var touchStartY = 0;
    document.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < Math.abs(dy)) return; // Vertical swipe
      if (touchStartX < 30 && dx > 80) openSidebar();
      if (state.sidebarOpen && dx < -80) closeSidebar();
    }, { passive: true });

    // Close search on click outside
    document.addEventListener('click', function (e) {
      if (state.searchOpen &&
          !refs.searchBar.contains(e.target) &&
          !refs.searchToggle.contains(e.target)) {
        closeSearch();
      }
    });
  }

  // --- SERVICE WORKER ---
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(function (reg) {
          console.log('Service Worker registered:', reg.scope);
        })
        .catch(function (err) {
          console.warn('Service Worker registration failed:', err);
        });
    }
  }

  // --- INSTALL PROMPT ---
  var deferredPrompt = null;

  function setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
    });

    if (refs.installBtn) {
      refs.installBtn.addEventListener('click', function () {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(function () {
            deferredPrompt = null;
            refs.installPrompt.hidden = true;
          });
        } else {
          refs.installPrompt.hidden = true;
          window.location.hash = 'install';
        }
      });
    }

    if (refs.installDismiss) {
      refs.installDismiss.addEventListener('click', function () {
        refs.installPrompt.hidden = true;
        localStorage.setItem('installDismissed', 'true');
      });
    }
  }

  // --- BOOT ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
