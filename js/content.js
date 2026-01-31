/* ============================================
   Remain Silent PWA — Content Data
   All 22 sections from the Know Your Rights guide
   ============================================ */

const APP_CONTENT = {
  meta: {
    title: "Remain Silent",
    subtitle: "Know Your Rights When Interacting with Law Enforcement",
    publisher: "McGuire Law",
    phone: "(888) 499-5738",
    phoneLink: "tel:+18884995738",
    website: "https://McGuireLawSC.com",
    tagline: "A Guide for South Carolina Residents \u2014 Citizens and Non-Citizens"
  },
  sections: [
    {
      id: "most-important-rule",
      number: 1,
      title: "The Most Important Rule",
      subtitle: "The SILENT Method",
      icon: "shield",
      isFeatured: true,
      keywords: ["silent", "method", "important", "rule", "rights", "lawyer", "remain silent", "fifth amendment"],
      content: `
        <div class="callout callout-critical">
          <h4>The #1 Thing to Remember</h4>
          <p><strong>Never talk to law enforcement without a lawyer.</strong></p>
          <p>It does NOT matter if:</p>
          <ul>
            <li>You didn't do anything wrong</li>
            <li>You think you can explain everything</li>
            <li>The officers seem nice</li>
            <li>You just want to help</li>
          </ul>
          <p><strong>Always ask for a lawyer first if being questioned by law enforcement.</strong></p>
          <p>Call McGuire Law right away at <a href="tel:+18884995738">(888) 499-5738</a> if law enforcement wants to question you.</p>
        </div>

        <h3>Key Phrases to Use</h3>
        <p>If you learn nothing else from this guide, learn these phrases:</p>
        <p>Press the play button for law enforcement, if needed.</p>
        <ul class="key-phrases">
          <li><button class="phrase-play" data-audio="audio/i-want-to-speak-to-a-lawyer.mp3" aria-label="Play audio: I want to speak to a lawyer.">&#9654;</button> I want to speak to a lawyer.</li>
          <li><button class="phrase-play" data-audio="audio/am-i-free-to-go.mp3" aria-label="Play audio: Am I free to go?">&#9654;</button> Am I free to go?</li>
          <li><button class="phrase-play" data-audio="audio/i-do-not-consent-to-any-searches.mp3" aria-label="Play audio: I do not consent to any searches.">&#9654;</button> I do not consent to any searches.</li>
          <li><button class="phrase-play" data-audio="audio/i-am-exercising-my-right-to-remain-silent.mp3" aria-label="Play audio: I am exercising my right to remain silent.">&#9654;</button> I am exercising my right to remain silent.</li>
          <li><button class="phrase-play" data-audio="audio/i-do-not-wish-to-answer-questions.mp3" aria-label="Play audio: I do not wish to answer questions.">&#9654;</button> I do not wish to answer questions.</li>
        </ul>

        <h3>The SILENT Method</h3>
        <p>The first few seconds of any law enforcement encounter are crucial. Use the SILENT method to remember what to do:</p>
        <div class="method-grid">
          <div class="method-item">
            <span class="method-letter">S</span>
            <div class="method-item-content">
              <strong>Stay calm and stay still</strong>
              <p>Take a deep breath. Do not make sudden movements.</p>
            </div>
          </div>
          <div class="method-item">
            <span class="method-letter">I</span>
            <div class="method-item-content">
              <strong>Invoke your rights immediately</strong>
              <p>Say: "I am exercising my right to remain silent. I want a lawyer."</p>
            </div>
          </div>
          <div class="method-item">
            <span class="method-letter">L</span>
            <div class="method-item-content">
              <strong>Listen without responding</strong>
              <p>Let officers speak, but do not feel obligated to answer.</p>
            </div>
          </div>
          <div class="method-item">
            <span class="method-letter">E</span>
            <div class="method-item-content">
              <strong>Exercise self-control</strong>
              <p>Breathe deeply. Do not argue, yell, or physically resist.</p>
            </div>
          </div>
          <div class="method-item">
            <span class="method-letter">N</span>
            <div class="method-item-content">
              <strong>Never volunteer information</strong>
              <p>Even innocent details can be misinterpreted or used against you.</p>
            </div>
          </div>
          <div class="method-item">
            <span class="method-letter">T</span>
            <div class="method-item-content">
              <strong>Think before doing anything</strong>
              <p>Remember details for later\u2014badge numbers, names, what was said.</p>
            </div>
          </div>
        </div>

        <div class="callout callout-info">
          <h4>Memorize important numbers and download Alert Assist.</h4>
          <p>We suggest installing the Alert Assist app on your phone. This app can help you quickly notify trusted contacts and record encounters with law enforcement.</p>
          <p><a href="https://play.google.com/store/apps/details?id=com.andromedays.mobile.panic" target="_blank" rel="noopener">Download for Android</a></p>
          <p><a href="https://apps.apple.com/no/app/alertassist/id6752760356" target="_blank" rel="noopener">Download for iPhone</a></p>
        </div>
      `
    },
    {
      id: "introduction",
      number: 2,
      title: "Introduction",
      subtitle: "Types of Police Encounters",
      icon: "info",
      keywords: ["introduction", "encounter", "consensual", "detention", "arrest", "types", "body camera", "local ordinances"],
      content: `
        <p>This guide addresses your rights when stopped, questioned, arrested, or searched by law enforcement officers in South Carolina. It applies to both citizens and non-citizens, with additional information for non-citizens.</p>
        <p>This guide provides information about your basic rights and is not a substitute for legal advice. You should contact an attorney if you have been arrested or believe your rights have been violated.</p>

        <div class="callout callout-warning">
          <h4>At the Outset, Remember</h4>
          <ul>
            <li><strong>Stay calm.</strong> Do not run, argue, or physically resist.</li>
            <li><strong>Keep your hands visible.</strong> Do not make sudden movements.</li>
            <li><strong>Do not obstruct the officer.</strong> You can assert your rights without interfering.</li>
            <li><strong>Do not lie or provide false documents.</strong> This can result in additional charges.</li>
            <li><strong>Document everything.</strong> Write down officer names, badge numbers, and details after the encounter.</li>
            <li><strong>Do not rely on lawsuits.</strong> Lawsuits are costly, time-consuming, and often unsuccessful. Focus on protecting yourself in the moment.</li>
          </ul>
        </div>

        <h3>Understanding Types of Police Encounters</h3>
        <p>Not all police encounters are the same. Understanding the difference is critical to knowing your rights:</p>

        <div class="qa-item">
          <div class="qa-question">Consensual Encounter</div>
          <div class="qa-answer">
            <p>A voluntary conversation where you are free to leave at any time. No suspicion is required. You have no obligation to answer questions or stay. Simply ask: <strong>"Am I free to go?"</strong> If yes, you may leave.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Detention (Terry Stop)</div>
          <div class="qa-answer">
            <p>A brief, involuntary stop requiring reasonable suspicion of criminal activity. You are not free to leave, but you are not under arrest. You still have the right to remain silent.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Arrest</div>
          <div class="qa-answer">
            <p>Formal custody requiring probable cause or a warrant. You are not free to leave. Miranda rights apply during custodial interrogation.</p>
          </div>
        </div>

        <h3>Body-Worn Cameras &amp; Public Records</h3>
        <p>Many South Carolina law enforcement officers now wear body-worn cameras. If you are involved in an encounter, you can request body camera footage through a Freedom of Information Act (FOIA) request to the relevant law enforcement agency. Note that some footage may be redacted or withheld for ongoing investigations. Having your own recording is still important.</p>

        <div class="callout callout-tip">
          <h4>Local Ordinances Vary</h4>
          <p>Local ordinances can vary significantly across South Carolina cities and counties. Rules about loitering, noise, curfews, open containers, panhandling, and other activities may differ from one municipality to another. What is legal in one area may be prohibited in another. When in doubt, research local ordinances or consult with an attorney familiar with laws in your specific area.</p>
        </div>
      `
    },
    {
      id: "legal-definitions",
      number: 3,
      title: "Legal Definitions",
      subtitle: "Glossary A\u2013W",
      icon: "book",
      keywords: ["glossary", "definitions", "legal terms", "probable cause", "reasonable suspicion", "warrant", "felony", "misdemeanor", "miranda", "arraignment"],
      content: `
        <p>Source: United States Department of Justice</p>

        <div class="glossary-letter">A</div>
        <dl class="glossary-list">
          <dt>Acquittal</dt>
          <dd>Judgment that a criminal defendant has not been proven guilty beyond a reasonable doubt.</dd>
          <dt>Affidavit</dt>
          <dd>A written statement of facts confirmed by the oath of the party making it. Affidavits must be notarized or administered by an officer of the court with such authority.</dd>
          <dt>Affirmed</dt>
          <dd>Judgment by appellate courts where the decree or order is declared valid and will stand as decided in the lower court.</dd>
          <dt>Alford Plea</dt>
          <dd>A defendant's plea that allows him to assert his innocence but allows the court to sentence the defendant without conducting a trial. Essentially, the defendant is admitting that the evidence is sufficient to show guilt.</dd>
          <dt>Allegation</dt>
          <dd>Something that someone says happened.</dd>
          <dt>Appeal</dt>
          <dd>A request made after a trial, asking another court (usually the court of appeals) to decide whether the trial was conducted properly.</dd>
          <dt>Arraignment</dt>
          <dd>A proceeding in which an individual who is accused of committing a crime is brought into court, told of the charges, and asked to plead guilty or not guilty.</dd>
          <dt>Arrest Warrant</dt>
          <dd>A written order directing the arrest of a party. Arrest warrants are issued by a judge after a showing of probable cause.</dd>
        </dl>

        <div class="glossary-letter">B</div>
        <dl class="glossary-list">
          <dt>Bail</dt>
          <dd>Security given for the release of a criminal defendant or witness from legal custody (usually in the form of money) to secure his/her appearance on the day and time appointed.</dd>
          <dt>Bench Trial</dt>
          <dd>Trial without a jury in which a judge decides the facts.</dd>
          <dt>Beyond a Reasonable Doubt</dt>
          <dd>Standard required to convict a criminal defendant of a crime. The prosecution must prove the guilt so that there is no reasonable doubt to the jury that the defendant is guilty.</dd>
        </dl>

        <div class="glossary-letter">C</div>
        <dl class="glossary-list">
          <dt>Capital Offense</dt>
          <dd>A crime punishable by death.</dd>
          <dt>Charge</dt>
          <dd>The law that the police believe the defendant has broken.</dd>
          <dt>Circumstantial Evidence</dt>
          <dd>All evidence that is not direct evidence (such as eyewitness testimony).</dd>
          <dt>Continuance</dt>
          <dd>Decision by a judge to postpone trial until a later date.</dd>
          <dt>Conviction</dt>
          <dd>A judgment of guilt against a criminal defendant.</dd>
          <dt>Counsel</dt>
          <dd>Legal advice; a term used to refer to lawyers in a case.</dd>
          <dt>Cross-Examine</dt>
          <dd>Questioning of a witness by the attorney for the other side.</dd>
        </dl>

        <div class="glossary-letter">D</div>
        <dl class="glossary-list">
          <dt>Damages</dt>
          <dd>Money paid by defendants to successful plaintiffs in civil cases to compensate the plaintiffs for their injuries.</dd>
          <dt>Defendant</dt>
          <dd>In a civil suit, the person complained against; in a criminal case, the person accused of the crime.</dd>
          <dt>Deposition</dt>
          <dd>An oral statement made before an officer authorized by law to administer oaths. Such statements are often taken to examine potential witnesses, to obtain discovery, or to be used later in trial.</dd>
          <dt>Direct Evidence</dt>
          <dd>Evidence that supports a fact without an inference.</dd>
          <dt>Discovery</dt>
          <dd>Lawyers' examination, before trial, of facts and documents in possession of the opponents to help the lawyers prepare for trial.</dd>
        </dl>

        <div class="glossary-letter">E</div>
        <dl class="glossary-list">
          <dt>Evidence</dt>
          <dd>Information presented in testimony or in documents that is used to persuade the fact finder (judge or jury) to decide the case for one side or the other.</dd>
          <dt>Exculpatory Evidence</dt>
          <dd>Evidence which tends to show the defendant's innocence.</dd>
          <dt>Exhibit</dt>
          <dd>Physical evidence or documents that are presented in a court proceeding.</dd>
        </dl>

        <div class="glossary-letter">F</div>
        <dl class="glossary-list">
          <dt>Felony</dt>
          <dd>A crime carrying a penalty of more than a year in prison.</dd>
        </dl>

        <div class="glossary-letter">G</div>
        <dl class="glossary-list">
          <dt>Grand Jury</dt>
          <dd>A body of citizens who listen to evidence of criminal allegations, which are presented by the government, and determines whether there is probable cause to believe the offense was committed.</dd>
        </dl>

        <div class="glossary-letter">H</div>
        <dl class="glossary-list">
          <dt>Habeas Corpus</dt>
          <dd>A writ that is often used to bring a prisoner before the court to determine the legality of his imprisonment.</dd>
          <dt>Hearsay</dt>
          <dd>Statements by a witness who did not see or hear the incident in question but learned about it through secondhand information. Hearsay is usually not admissible as evidence in court, but there are many exceptions.</dd>
        </dl>

        <div class="glossary-letter">I</div>
        <dl class="glossary-list">
          <dt>Inculpatory Evidence</dt>
          <dd>Evidence which tends to show the defendant's guilt.</dd>
          <dt>Indictment</dt>
          <dd>The formal charge issued by a grand jury stating that there is enough evidence that the defendant committed the crime to justify having a trial.</dd>
          <dt>Initial Hearing</dt>
          <dd>Court proceeding in which the defendant learns of his rights and the charges against him and the judge decides bail.</dd>
          <dt>Injunction</dt>
          <dd>An order of the court prohibiting (or compelling) the performance of a specific act to prevent irreparable damage or injury.</dd>
          <dt>Interview</dt>
          <dd>A meeting with the police or prosecutor.</dd>
        </dl>

        <div class="glossary-letter">J</div>
        <dl class="glossary-list">
          <dt>Judge</dt>
          <dd>Government official with authority to decide lawsuits brought before courts.</dd>
          <dt>Judgment</dt>
          <dd>The official decision of a court finally determining the respective rights and claims of the parties to a suit.</dd>
          <dt>Jurisdiction</dt>
          <dd>The legal authority of a court to hear and decide a case.</dd>
          <dt>Jury</dt>
          <dd>Persons selected according to law and sworn to inquire into and declare a verdict on matters of fact.</dd>
          <dt>Jury Instructions</dt>
          <dd>A judge's explanation to the jury before it begins deliberations of the questions it must answer and the law governing the case.</dd>
        </dl>

        <div class="glossary-letter">M</div>
        <dl class="glossary-list">
          <dt>Misdemeanor</dt>
          <dd>Usually a petty offense, a less serious crime than a felony, punishable by less than a year of confinement.</dd>
          <dt>Mistrial</dt>
          <dd>An invalid trial caused by fundamental error. When a mistrial is declared, the trial must start again, beginning with the selection of a new jury.</dd>
          <dt>Motion</dt>
          <dd>Attempt to have a limited issue heard by the court. Motions can be filed before, during, and after trial.</dd>
        </dl>

        <div class="glossary-letter">N</div>
        <dl class="glossary-list">
          <dt>Nolo Contendere</dt>
          <dd>No contest. Has the same effect as a plea of guilty as far as the criminal sentence is concerned, but the plea may not be considered an admission of guilt for any other purpose.</dd>
        </dl>

        <div class="glossary-letter">O</div>
        <dl class="glossary-list">
          <dt>Oath</dt>
          <dd>A promise to tell the truth.</dd>
          <dt>Objection</dt>
          <dd>A protest by an attorney, challenging a statement or question made at trial.</dd>
        </dl>

        <div class="glossary-letter">P</div>
        <dl class="glossary-list">
          <dt>Petit Jury (Trial Jury)</dt>
          <dd>A group of citizens who hear the evidence presented by both sides at trial and determine the facts in dispute.</dd>
          <dt>Plaintiff</dt>
          <dd>The person who files the complaint in a civil lawsuit.</dd>
          <dt>Plea</dt>
          <dd>In a criminal case, the defendant's statement pleading "guilty" or "not guilty" in answer to the charges in open court.</dd>
          <dt>Plea Deal (Plea Bargain)</dt>
          <dd>Agreement between the defendant and prosecutor where the defendant pleads guilty in exchange for a concession by the prosecutor.</dd>
          <dt>Preliminary Hearing</dt>
          <dd>A hearing where the judge decides whether there is enough evidence to require the defendant to go to trial.</dd>
          <dt>Probable Cause</dt>
          <dd>An amount of suspicion leading one to believe certain facts are probably true. The Fourth Amendment requires probable cause for the issuance of an arrest or search warrant.</dd>
          <dt>Probation</dt>
          <dd>A sentencing alternative to imprisonment in which the court releases convicted defendants under supervision as long as certain conditions are observed.</dd>
          <dt>Pro Se</dt>
          <dd>A Latin term meaning "on one's own behalf"; in courts, it refers to persons who present their own cases without lawyers.</dd>
          <dt>Prosecute</dt>
          <dd>To charge someone with a crime. A prosecutor tries a criminal case on behalf of the government.</dd>
          <dt>Public Defenders</dt>
          <dd>Represent defendants who can't afford an attorney in criminal matters.</dd>
        </dl>

        <div class="glossary-letter">R</div>
        <dl class="glossary-list">
          <dt>Remand</dt>
          <dd>When an appellate court sends a case back to a lower court for further proceedings.</dd>
          <dt>Reverse</dt>
          <dd>When an appellate court sets aside the decision of a lower court because of an error.</dd>
        </dl>

        <div class="glossary-letter">S</div>
        <dl class="glossary-list">
          <dt>Search Warrant</dt>
          <dd>Orders that a specific location be searched for items, which if found, can be used in court as evidence. Search warrants require probable cause in order to be issued.</dd>
          <dt>Sentence</dt>
          <dd>The punishment ordered by a court for a defendant convicted of a crime.</dd>
          <dt>Settlement</dt>
          <dd>Parties to a lawsuit resolve their difference without having a trial.</dd>
          <dt>Statement</dt>
          <dd>A description that a witness gives to the police and that the police write down.</dd>
          <dt>Statute of Limitations</dt>
          <dd>A law that sets the time within which parties must take action to enforce their rights.</dd>
          <dt>Subpoena</dt>
          <dd>A command to a witness to appear and give testimony.</dd>
        </dl>

        <div class="glossary-letter">T</div>
        <dl class="glossary-list">
          <dt>Testify</dt>
          <dd>Answer questions in court.</dd>
          <dt>Testimony</dt>
          <dd>Evidence presented orally by witnesses during trials or before grand juries.</dd>
          <dt>Transcript</dt>
          <dd>A written, word-for-word record of what was said, either in a proceeding such as a trial or during some other conversation.</dd>
          <dt>Trial</dt>
          <dd>A hearing that takes place when the defendant pleads "not guilty," and the parties are required to come to court to present evidence.</dd>
        </dl>

        <div class="glossary-letter">V</div>
        <dl class="glossary-list">
          <dt>Verdict</dt>
          <dd>The decision of a petit jury or a judge.</dd>
          <dt>Voir Dire</dt>
          <dd>The process by which judges and lawyers select a petit jury by questioning them to determine knowledge of the facts of the case and a willingness to decide the case only on the evidence presented in court.</dd>
        </dl>

        <div class="glossary-letter">W</div>
        <dl class="glossary-list">
          <dt>Warrant</dt>
          <dd>A written order directing the arrest of a party or orders that a specific location be searched for items which can be used in court as evidence.</dd>
          <dt>Witness</dt>
          <dd>A person called upon by either side in a lawsuit to give testimony before the court or jury.</dd>
          <dt>Writ of Certiorari</dt>
          <dd>An order issued by the Supreme Court directing the lower court to transmit records for a case for which it will hear on appeal.</dd>
        </dl>
      `
    },
    {
      id: "encounters-street",
      number: 4,
      title: "Encounters on the Street",
      subtitle: null,
      icon: "walking",
      keywords: ["street", "pedestrian", "stop", "identify", "detained", "pat down", "frisk", "recording", "sidewalk"],
      content: `
        <div class="qa-item">
          <div class="qa-question">What if an officer stops me on the street?</div>
          <div class="qa-answer">
            <p>South Carolina is <strong>NOT</strong> a "stop and identify" state. You are not legally required to identify yourself to police during a routine stop. You have the right to remain silent and can politely decline to answer questions.</p>
            <p>However, providing identification <strong>IS</strong> required when:</p>
            <ul>
              <li>You are operating a motor vehicle (driver's license, registration, insurance)</li>
              <li>You have been lawfully arrested</li>
              <li>A specific statute applies (e.g., certain regulated activities like purchasing alcohol or firearms)</li>
            </ul>
            <p>If an officer approaches you, you can ask: <strong>"Am I free to go?"</strong> If yes, calmly walk away. If no, you are being detained.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What if I am detained?</div>
          <div class="qa-answer">
            <p>Being detained is not the same as being arrested. You may still be released after brief questioning.</p>
            <h4>Pat-Downs</h4>
            <p>Police can only pat down the outside of your clothing if they have reasonable suspicion you are armed and dangerous. They cannot reach into pockets unless they feel something that could be a weapon. Say clearly: <strong>"I do not consent to a search."</strong> If they search anyway, do not physically resist.</p>
            <h4>Questions and Identification</h4>
            <p>You are not required to answer questions. However, it is generally best practice to provide your name and ID if requested. If you do not want to answer additional questions, say: <strong>"I do not want to speak without a lawyer present."</strong></p>
            <h4>"Match the Description"</h4>
            <p>If officers say you match the description of a suspect, ask: <strong>"Am I free to go?"</strong> If no, you are being detained. Follow the above directions.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">How long can I be detained?</div>
          <div class="qa-answer">
            <p>There is no fixed time limit. A stop may last as long as reasonably necessary to complete its purpose. However, officers cannot unreasonably prolong a stop beyond its original purpose without developing new reasonable suspicion.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Can I record the encounter?</div>
          <div class="qa-answer">
            <p><strong>Yes.</strong> South Carolina is a one-party consent state. You have the legal right to record police officers performing their duties in public spaces. However:</p>
            <ul>
              <li>Do not interfere with police activity</li>
              <li>Maintain a safe distance</li>
              <li>Hold your phone/camera openly, not concealed</li>
              <li>Police cannot confiscate or view your photos/videos without a warrant</li>
              <li>Police may NOT delete your recordings under any circumstances</li>
            </ul>
            <p>If ordered to stop recording, you can politely refuse\u2014but be aware some officers may not know this is your right.</p>
            <p><strong>Body-worn cameras:</strong> Many officers wear body cameras. You can request this footage through a FOIA request after the encounter.</p>
          </div>
        </div>
      `
    },
    {
      id: "encounters-vehicle",
      number: 5,
      title: "Encounters in a Vehicle",
      subtitle: null,
      icon: "car",
      keywords: ["vehicle", "car", "traffic stop", "pulled over", "driver", "passenger", "K-9", "drug dog", "search", "concealed weapon"],
      content: `
        <div class="qa-item">
          <div class="qa-question">What if I am pulled over?</div>
          <div class="qa-answer">
            <p>Pull over safely and promptly. Keep your hands visible on the steering wheel. Wait for the officer to approach before reaching for documents.</p>
            <p><strong>You MUST provide:</strong> Driver's license, vehicle registration, and proof of insurance when requested. Failure to do so can result in additional charges.</p>
            <p><strong>Passengers:</strong> Passengers in South Carolina are generally not required to show identification during a routine traffic stop unless the officer has reasonable suspicion of criminal activity.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What questions do I have to answer?</div>
          <div class="qa-answer">
            <p>Beyond providing your documents, you are not required to answer questions like "Where are you coming from?" or "Have you been drinking?" You can politely say: <strong>"I prefer not to answer questions."</strong> However, if you have a gun in the car, it is advisable to alert the officer.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What about K-9 (drug dog) searches?</div>
          <div class="qa-answer">
            <p>Police can have a dog sniff the outside of your vehicle, but only if it does not extend the traffic stop beyond its original purpose. If you feel the stop is lasting longer than necessary, you can ask: <strong>"Am I free to go?"</strong></p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Can an officer order me out of the vehicle?</div>
          <div class="qa-answer">
            <p><strong>Yes.</strong> Under <em>Pennsylvania v. Mimms</em>, officers can order drivers and passengers out of a vehicle during a lawful traffic stop for safety reasons. You must comply, but this does not mean you consent to a search.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Can an officer search my vehicle?</div>
          <div class="qa-answer">
            <p>An officer can search your vehicle if they have:</p>
            <ul>
              <li>A warrant</li>
              <li>Your consent (which you can refuse)</li>
              <li>Probable cause (e.g., smell of marijuana, visible contraband)</li>
              <li>You are arrested and they believe evidence is in the car</li>
              <li>The vehicle is impounded (inventory search)</li>
            </ul>
            <p>If you do not consent, say clearly: <strong>"I do not consent to a search."</strong> This protects your rights even if the officer searches anyway.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What about concealed weapons?</div>
          <div class="qa-answer">
            <p>If you have a concealed weapons permit (CWP) in South Carolina, you must carry your permit with you. If an officer asks to see it, you are required to provide it. It is advisable to inform the officer that you have a weapon in the vehicle.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What if I live in my vehicle?</div>
          <div class="qa-answer">
            <p>Unfortunately, under U.S. Supreme Court precedent, vehicles\u2014even if used as a home\u2014are treated like any other vehicle for search purposes. Vehicles used as homes do not receive the heightened protection of a traditional home. The same rules above apply.</p>
          </div>
        </div>
      `
    },
    {
      id: "encounters-home",
      number: 6,
      title: "Encounters at Home",
      subtitle: null,
      icon: "home",
      keywords: ["home", "house", "apartment", "door", "warrant", "search", "knock", "fourth amendment", "roommate", "office"],
      content: `
        <p>Your home receives the <strong>strongest protection</strong> under the Fourth Amendment. This includes your house, apartment, hotel room, porch, and garden. Under both the U.S. Constitution and Article I, Section 10 of the South Carolina Constitution, your home cannot be searched without a warrant except in limited circumstances.</p>

        <div class="qa-item">
          <div class="qa-question">Can police search my home?</div>
          <div class="qa-answer">
            <p>Police can search your home if they have:</p>
            <ul>
              <li>A valid search warrant</li>
              <li>Your voluntary consent (or consent from someone with authority over the premises, like a roommate)</li>
              <li>Exigent circumstances (emergency situations, evidence being destroyed)</li>
              <li>Hot pursuit (chasing a fleeing suspect)</li>
              <li>Plain view (evidence visible from a lawful vantage point)</li>
            </ul>
            <div class="callout callout-tip">
              <h4>Note on Roommates</h4>
              <p>In your absence, police can search based on consent from your roommate or guest if police reasonably believe that person has the authority to consent.</p>
            </div>
            <div class="callout callout-tip">
              <h4>Note on Offices</h4>
              <p>Police can search your office with the employer's consent. If your employer consents, officers can search your workspace whether you consent or not.</p>
            </div>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What should I do if officers come to my door?</div>
          <div class="qa-answer">
            <h4>If they DO NOT have a warrant:</h4>
            <ul>
              <li>You do not have to let them in</li>
              <li>You do not have to answer questions</li>
              <li>If you choose to speak, you can step outside and close the door behind you</li>
              <li>Politely state: <strong>"I do not consent to a search."</strong></li>
            </ul>
            <h4>If they HAVE a warrant:</h4>
            <ul>
              <li>Ask to see the warrant through a window or cracked door</li>
              <li>Verify it lists your correct address and describes what is being searched for</li>
              <li>You must allow them to enter</li>
              <li>You still have the right to remain silent</li>
              <li>Ask to observe the search and take notes</li>
              <li>Contact a lawyer as soon as possible</li>
            </ul>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What if they threaten to get a warrant?</div>
          <div class="qa-answer">
            <p>You can still decline consent. If they go to get a warrant, a judge may not grant it. But if you give consent, they will definitely be able to search.</p>
          </div>
        </div>
      `
    },
    {
      id: "arrested",
      number: 7,
      title: "If You Are Arrested",
      subtitle: null,
      icon: "alert-triangle",
      keywords: ["arrested", "arrest", "custody", "miranda", "rights", "booking", "jail", "bond", "bail", "silent", "lawyer", "attorney"],
      content: `
        <h3>Your Miranda Rights</h3>
        <p>If you are taken into custody and interrogated, officers must inform you of your Miranda rights before questioning:</p>
        <ul>
          <li>You have the right to remain silent</li>
          <li>Anything you say can and will be used against you in court</li>
          <li>You have the right to an attorney</li>
          <li>If you cannot afford an attorney, one will be provided</li>
        </ul>

        <div class="callout callout-critical">
          <h4>Miranda vs. Salinas Distinction</h4>
          <p>Miranda rights only apply during <strong>custodial interrogation</strong> (when you are not free to leave). However, under <em>Salinas v. Texas</em> (2013), during non-custodial questioning (voluntary conversations), <strong>your silence can be used against you</strong> unless you affirmatively invoke your Fifth Amendment rights by saying: <strong>"I am exercising my right to remain silent."</strong></p>
          <p>Officers can ask basic booking questions without reading your rights. For DUI arrests in South Carolina, Miranda warnings must be given on video (S.C. Code \u00A756-5-2953).</p>
        </div>

        <h3>Your Right to Know the Reason</h3>
        <p>Under South Carolina law (S.C. Code \u00A717-13-50), if police take you into custody, they must tell you the reason why. It is unlawful for an officer to refuse to answer when you ask why you are being detained, or to refuse to state a lawful basis for the detention.</p>

        <h3>What should I do if arrested?</h3>
        <p>The U.S. Supreme Court has ruled (<em>Salinas v. Texas</em>, 2013) that you must <strong>verbally invoke</strong> your right to remain silent. Simply staying quiet may not be enough. Say these words clearly and repeat to every officer:</p>
        <ul class="key-phrases">
          <li>I invoke my privilege against self-incrimination.</li>
          <li>I am exercising my right to remain silent.</li>
          <li>I want a lawyer.</li>
          <li>I will not answer questions without my lawyer present.</li>
        </ul>

        <div class="qa-item">
          <div class="qa-question">Can police arrest me without a warrant?</div>
          <div class="qa-answer">
            <p><strong>Yes.</strong> Under S.C. Code \u00A717-13-30, South Carolina sheriffs and deputies may arrest without a warrant anyone they believe has committed a crime. This can be done in the city or county where the act was committed or in a neighboring county.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Do I have to answer questions if I have been arrested?</div>
          <div class="qa-answer">
            <p><strong>No.</strong> You have the right to remain silent. You only need to provide basic identifying information (name, address) during booking.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What if the police did not read me my rights?</div>
          <div class="qa-answer">
            <p>An arrest without Miranda warnings is still valid. However, any statements you made during a custodial interrogation may be inadmissible in court. This means the arrest stands, but the prosecution may not be able to use what you said as evidence against you.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">How long can I be held?</div>
          <div class="qa-answer">
            <p>In South Carolina, you have the right to be brought before the court in a timely manner. For bailable offenses, this should be within <strong>24 hours</strong>. Once the bond is granted, you must be released within <strong>4 hours</strong> of the bond being delivered to the jail.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What if I am mistreated?</div>
          <div class="qa-answer">
            <p>Document everything:</p>
            <ul>
              <li>Officer names and badge numbers</li>
              <li>Time, date, and location</li>
              <li>Witness names and contact information</li>
              <li>If injured, seek medical attention and photograph injuries</li>
            </ul>
            <p>Contact a lawyer and file a complaint with the law enforcement agency.</p>
          </div>
        </div>
      `
    },
    {
      id: "trespassing-loitering",
      number: 8,
      title: "Trespassing & Loitering",
      subtitle: null,
      icon: "sign",
      keywords: ["trespassing", "loitering", "property", "warning", "notice", "misdemeanor", "signs"],
      content: `
        <div class="qa-item">
          <div class="qa-question">What is trespassing in South Carolina?</div>
          <div class="qa-answer">
            <p>Under South Carolina Code 16-11-620, trespassing is a misdemeanor that occurs when you enter or remain on property after being warned not to do so. The law requires "notice" before criminal trespass applies\u2014either verbal warning, written notice, or posted signs.</p>
            <h4>Penalties</h4>
            <ul>
              <li><strong>General trespassing:</strong> Up to $1,000 fine and/or up to 30 days in jail</li>
              <li><strong>Entry into enclosed places (6 PM - 6 AM):</strong> $25-$200 fine and/or up to 30 days</li>
              <li><strong>Trespassing at correctional facilities:</strong> Felony with up to 5 years imprisonment</li>
            </ul>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What about loitering?</div>
          <div class="qa-answer">
            <p>South Carolina does not have a statewide loitering law. However, many municipalities have local ordinances. Common prohibited activities include loitering near schools, loitering for drug-related activity, and loitering after being asked to leave.</p>
            <p>Be aware of local ordinances in your area.</p>
          </div>
        </div>
      `
    },
    {
      id: "non-citizens",
      number: 9,
      title: "Additional Info for Non-Citizens",
      subtitle: null,
      icon: "globe",
      keywords: ["non-citizen", "immigrant", "immigration", "ICE", "visa", "deportation", "consulate", "287g", "documents"],
      content: `
        <p>Non-citizens in the United States generally have the same constitutional rights as citizens during encounters with law enforcement. However, there are special considerations.</p>

        <div class="callout callout-warning">
          <h4>South Carolina has 287(g) Agreements</h4>
          <p>Several South Carolina counties have 287(g) agreements with ICE, allowing certain deputies to enforce federal immigration laws. Most jurisdictions also participate in Secure Communities, which shares fingerprints with federal immigration databases. This means if you are arrested and taken to jail, your immigration status will likely be checked.</p>
        </div>

        <div class="qa-item">
          <div class="qa-question">Do I have to answer questions about my immigration status?</div>
          <div class="qa-answer">
            <p>You have the right to remain silent. You do not have to answer questions about where you were born, your immigration status, or your citizenship. However, <strong>never falsely claim to be a U.S. citizen.</strong></p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Do I have to show immigration documents?</div>
          <div class="qa-answer">
            <p>Federal law requires non-citizens 18 and older to carry valid immigration documents at all times. If you have valid documents and are asked for them, showing them may prevent arrest. <strong>Never carry or show false documents.</strong></p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">What if immigration officers arrest me?</div>
          <div class="qa-answer">
            <ul>
              <li>Assert your rights\u2014you do not have to answer questions</li>
              <li>Tell the officer you want to speak with a lawyer</li>
              <li>Do not sign anything without understanding it</li>
              <li>You can request to contact your consulate</li>
            </ul>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Can I contact my consulate?</div>
          <div class="qa-answer">
            <p><strong>Yes.</strong> Non-citizens arrested in the U.S. can request to contact their consulate during arrest or detention. Law enforcement must allow your consulate to visit or speak with you if consular officials decide to do so. Your consulate may help you find a lawyer or offer other assistance.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Do I have the right to an attorney?</div>
          <div class="qa-answer">
            <ul>
              <li><strong>In criminal proceedings:</strong> Yes, you have the right to an attorney</li>
              <li><strong>In immigration proceedings:</strong> You have the right to hire an attorney, but one will not be provided for you</li>
              <li>You have the right to call family or a lawyer if detained</li>
            </ul>
          </div>
        </div>

        <div class="callout callout-critical">
          <h4>Important Advice</h4>
          <ul>
            <li>Do NOT drive without a valid South Carolina license. Even minor traffic violations can lead to arrest and deportation proceedings.</li>
            <li>Memorize important phone numbers (family, lawyer)</li>
            <li>Have an emergency plan for childcare</li>
            <li>Keep copies of important documents in a safe place</li>
          </ul>
        </div>

        <div class="callout">
          <h4>Related Resources</h4>
          <ul>
            <li><a href="#non-english-speakers"><strong>Non-English Speakers</strong></a> — Red Cards and rights information in 55 languages</li>
            <li><a href="#aclu-immigrants-rights"><strong>Immigrants' Rights</strong></a> — ACLU Know Your Rights guide</li>
            <li><a href="#derechos-inmigrantes"><strong>Derechos de los Inmigrantes</strong></a> — Conozca Sus Derechos (en Español)</li>
            <li><a href="#immigration-legal-services"><strong>Immigration Legal Services Directory</strong></a> — South Carolina legal resources</li>
          </ul>
        </div>
      `
    },
    {
      id: "juveniles",
      number: 10,
      title: "Special Rules for Juveniles",
      subtitle: "Persons Under 17/18",
      icon: "users",
      keywords: ["juvenile", "minor", "child", "teen", "underage", "parent", "family court", "custody", "confession"],
      content: `
        <p>In South Carolina, juveniles (persons under 17, or under 18 for some purposes) have the same constitutional rights as adults (<em>In re Gault</em>, 1967). However, there are some special procedures.</p>

        <h3>"Taken into Custody" vs. "Arrest"</h3>
        <p>South Carolina uses the term "taken into custody" instead of "arrest" for juveniles. Unlike adults, juveniles are not served with arrest warrants. Instead, a "petition" is filed in family court alleging the juvenile committed an offense.</p>

        <h3>Notification Requirements</h3>
        <p>If you are under 18 and taken into custody:</p>
        <ul>
          <li>Police must inform your parent, guardian, or custodian as soon as possible</li>
          <li>If not released to a responsible adult, the Department of Juvenile Justice must be notified and respond within one hour</li>
          <li>If charged with an offense that would be a misdemeanor or felony for an adult, your school principal will also be informed</li>
          <li>If not released, a court hearing must be held within 48 hours (not counting weekends or holidays)</li>
        </ul>

        <h3>Right to a Lawyer</h3>
        <p>You have the right to a lawyer at your hearing. The court will appoint one if you cannot afford one. A family court judge will typically require that you at least speak with a lawyer before deciding you don't want one.</p>

        <div class="callout callout-critical">
          <h4>Confessions</h4>
          <p>Even as a juvenile, you are considered capable of making a voluntary confession. If you waive your Miranda rights and make a statement, it can be used against you in court\u2014even without your lawyer present. <strong>It is strongly advised NOT to speak to police before meeting with a lawyer.</strong></p>
        </div>
      `
    },
    {
      id: "encounters-school",
      number: 11,
      title: "Encounters at School",
      subtitle: null,
      icon: "school",
      keywords: ["school", "student", "teacher", "principal", "campus", "locker", "search", "strip search"],
      content: `
        <p>School searches have different rules:</p>
        <ul>
          <li>In South Carolina, anyone who enters school property is generally deemed to have consented to a search. However, this implied consent applies only to limited, reasonable school-related searches necessary to maintain safety and order\u2014not unlimited or invasive searches.</li>
          <li>School administrators may conduct a reasonable search of your locker, desk, vehicle, purse, book bag, and wallet.</li>
          <li><strong>You may NOT be strip-searched</strong> \u2014 police and school employees are never allowed to strip search you.</li>
          <li>You still have the right to remain silent.</li>
          <li>Your parent/guardian does not have to be present for police to ask you questions at school.</li>
        </ul>
      `
    },
    {
      id: "police-can-lie",
      number: 12,
      title: "Police Can Lie to You",
      subtitle: null,
      icon: "alert-circle",
      keywords: ["lie", "deception", "tactics", "interrogation", "false", "evidence", "confession", "trick"],
      content: `
        <div class="callout callout-critical">
          <h4>This Is Legal</h4>
          <p>Police officers are legally permitted to lie to you during an investigation. The U.S. Supreme Court has allowed police to use deception, including falsely claiming that a co-defendant confessed or that they have evidence (like fingerprints or DNA) when they do not.</p>
        </div>

        <h3>Police may lie about:</h3>
        <ul>
          <li>The strength of the case against you</li>
          <li>Evidence they claim to have</li>
          <li>What witnesses or co-defendants have said</li>
          <li>Making emotional appeals to get you to talk</li>
        </ul>

        <h3>However, police are NOT allowed to:</h3>
        <p>Refuse to tell you why you have been taken into custody, or lie about the reason for your detention.</p>

        <div class="callout callout-warning">
          <h4>Remember</h4>
          <p>If you say something that incriminates yourself, it can be used against you in court\u2014even if the police lied to get you to say it. When in doubt, remain silent and ask for a lawyer.</p>
        </div>
      `
    },
    {
      id: "rights-violated",
      number: 13,
      title: "If Your Rights Are Violated",
      subtitle: null,
      icon: "file-text",
      keywords: ["violated", "complaint", "report", "misconduct", "lawsuit", "internal affairs", "SLED", "civil rights", "suppress"],
      content: `
        <h3>Document Everything</h3>
        <ul>
          <li>Write down everything you remember as soon as possible</li>
          <li>Record officer names, badge numbers, and patrol car numbers</li>
          <li>Note which agency the officers were from</li>
          <li>Get contact information for any witnesses</li>
          <li>If injured, photograph your injuries and seek medical attention</li>
        </ul>

        <h3>Filing a Complaint Against Law Enforcement</h3>
        <p>There are multiple avenues for filing complaints against law enforcement officers in South Carolina. You may file complaints with more than one agency.</p>

        <h4>Step 1: File with the Local Agency's Internal Affairs Division</h4>
        <p>Every law enforcement agency has an internal affairs or professional standards unit. Contact the police department or sheriff's office where the officer works and ask to file a complaint with their internal affairs division. You can usually file:</p>
        <ul>
          <li>In person at the agency headquarters</li>
          <li>By phone</li>
          <li>In writing by mail</li>
          <li>Online (many agencies have complaint forms on their websites)</li>
        </ul>

        <h4>Step 2: Escalate to the County Sheriff</h4>
        <p>If you are dissatisfied with the response from a local police department, you may escalate your complaint to the county sheriff's office.</p>

        <h4>Step 3: Contact SLED (State Law Enforcement Division)</h4>
        <p>SLED may investigate a law enforcement agency depending on the nature of the complaint. SLED investigates all officer-involved shootings statewide.</p>
        <ul>
          <li>Phone: (803) 737-9000</li>
          <li>Website: <a href="https://www.sled.sc.gov" target="_blank" rel="noopener">www.sled.sc.gov</a></li>
          <li>Mail: SLED Office of Professional Responsibility, P.O. Box 21398, Columbia, SC 29221</li>
        </ul>

        <h4>Officer Decertification</h4>
        <p>The SC Criminal Justice Academy and Law Enforcement Training Council can revoke an officer's certification for misconduct. While misconduct reports must be filed by law enforcement agencies, your complaint to the local agency can trigger this process. Serious misconduct can result in permanent decertification.</p>

        <h4>Federal Civil Rights Complaints</h4>
        <p>If you believe your civil rights were violated, you can file a complaint with federal authorities:</p>
        <ul>
          <li><strong>U.S. Attorney's Office, District of South Carolina</strong><br>Attn: Civil Rights Program<br>1441 Main Street, Suite 500<br>Columbia, SC 29201<br>Phone: (803) 929-3000</li>
          <li><strong>U.S. Department of Justice \u2014 Civil Rights Division</strong><br>950 Pennsylvania Avenue, NW<br>Washington, D.C. 20530-0001<br>Website: <a href="https://www.justice.gov/crt" target="_blank" rel="noopener">www.justice.gov/crt</a></li>
        </ul>

        <div class="callout callout-info">
          <h4>Improper Searches</h4>
          <p>You may be able to challenge an improper search if:</p>
          <ul>
            <li>Police searched or seized your body, home, papers, or belongings</li>
            <li>You had a reasonable expectation of privacy in what was searched</li>
            <li>It was YOUR rights that were violated (not someone else's)</li>
            <li>The police did not have a proper warrant or valid exception</li>
          </ul>
          <p>Your attorney may be able to file a motion to suppress evidence obtained through an illegal search. Contact a lawyer to discuss your options.</p>
        </div>
      `
    },
    {
      id: "police-tactics",
      number: 15,
      title: "Common Police Tactics",
      subtitle: null,
      icon: "eye",
      keywords: ["tactics", "interrogation", "good cop", "bad cop", "pressure", "fake evidence", "minimizing", "deal"],
      content: `
        <p>Remember: Police can legally lie during investigations. Be prepared for these common tactics:</p>

        <div class="qa-item">
          <div class="qa-question">Acting Friendly</div>
          <div class="qa-answer"><p>Being your "buddy" to get information.</p></div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Pressure</div>
          <div class="qa-answer"><p>Making you feel like you have to answer questions.</p></div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Fake Evidence</div>
          <div class="qa-answer"><p>Claiming they have proof (fingerprints, DNA, witnesses) when they do not.</p></div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Making Deals</div>
          <div class="qa-answer"><p>Promising to help if you talk (they usually cannot deliver).</p></div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Good Cop / Bad Cop</div>
          <div class="qa-answer"><p>One officer is nice, another is mean\u2014both want you to talk.</p></div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Splitting Groups</div>
          <div class="qa-answer"><p>Separating friends to compare stories.</p></div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Minimizing</div>
          <div class="qa-answer"><p>Making the crime seem small so you will admit to it.</p></div>
        </div>

        <div class="callout callout-critical">
          <h4>Your Only Response</h4>
          <p><strong>"I want my lawyer present."</strong></p>
        </div>
      `
    },
    {
      id: "dui-checkpoints",
      number: 16,
      title: "DUI Checkpoints",
      subtitle: null,
      icon: "check-square",
      keywords: ["DUI", "checkpoint", "sobriety", "breathalyzer", "roadblock", "alcohol", "implied consent", "license suspension"],
      content: `
        <p>DUI checkpoints are generally legal in South Carolina if set up correctly by law enforcement. Here is what you should know:</p>
        <ul>
          <li>You must stop when directed</li>
          <li>You must provide license, registration, and insurance</li>
          <li>You can refuse to answer questions beyond providing documents</li>
          <li>Field sobriety tests (walk a line, stand on one leg) are usually optional</li>
        </ul>

        <div class="callout callout-warning">
          <h4>Implied Consent</h4>
          <p>Refusing breath or blood tests in South Carolina can result in automatic license suspension under implied consent laws. Important clarifications:</p>
          <ul>
            <li>Refusal penalties are administrative (license suspension), not criminal</li>
            <li>Blood tests generally require a warrant unless exigent circumstances exist (e.g., unconscious driver, accident investigation)</li>
          </ul>
        </div>
      `
    },
    {
      id: "digital-rights",
      number: 17,
      title: "Phone and Digital Rights",
      subtitle: null,
      icon: "smartphone",
      keywords: ["phone", "digital", "unlock", "search", "password", "recording", "camera", "device", "biometric", "border"],
      content: `
        <p>Your devices contain your whole life. Here is how to protect your digital privacy.</p>

        <h3>Device Searches</h3>
        <div class="qa-item">
          <div class="qa-question">During Arrest (Riley v. California)</div>
          <div class="qa-answer">
            <p>Police <strong>cannot</strong> search the digital contents of your phone\u2014locked or unlocked\u2014without a warrant, absent true exigent circumstances (e.g., imminent threat to life, active destruction of evidence). This applies to all phones and digital devices.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">Device Seizure</div>
          <div class="qa-answer">
            <p>Police may seize a device as evidence, but they generally may not access or delete its contents without a warrant.</p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">With Consent</div>
          <div class="qa-answer">
            <p>Never consent to device searches. Say: <strong>"I do not consent to a search of my phone."</strong></p>
          </div>
        </div>

        <div class="qa-item">
          <div class="qa-question">At the Border</div>
          <div class="qa-answer">
            <p>Different rules apply. Searches are generally allowed, but you cannot be forced to unlock your device (though it may be held).</p>
          </div>
        </div>

        <h3>Password Protection</h3>
        <ul>
          <li>You generally cannot be forced to give passwords</li>
          <li>Biometrics (fingerprint, face unlock) may have less protection than passwords</li>
          <li>Use strong passwords instead of fingerprint/face for sensitive situations</li>
          <li>Enable auto-lock so your phone locks quickly</li>
        </ul>

        <h3>If Your Device Is Seized</h3>
        <ul>
          <li>Document the serial number beforehand</li>
          <li>Do not unlock it unless legally required</li>
          <li>State: <strong>"I do not consent to any searches"</strong></li>
          <li>Get a receipt for seized items</li>
          <li>Contact your attorney immediately</li>
        </ul>
      `
    },
    {
      id: "after-encounter",
      number: 18,
      title: "After a Police Encounter",
      subtitle: null,
      icon: "clipboard",
      keywords: ["after", "document", "notes", "evidence", "follow up", "trauma", "mental health", "24 hours"],
      content: `
        <p>What you do after dealing with law enforcement can be just as important as during the encounter.</p>

        <h3>First 24 Hours</h3>

        <h4>Hours 1\u20132: Safety First</h4>
        <ul>
          <li>Get somewhere safe</li>
          <li>Get medical help if needed and document any injuries</li>
          <li>Call your lawyer, even if not arrested</li>
          <li>Let family know you are okay</li>
          <li>Start writing down details while your memory is fresh</li>
        </ul>

        <h4>Hours 2\u20136: Document Everything</h4>
        <ul>
          <li>Time and location of the encounter</li>
          <li>Officer names and badge numbers</li>
          <li>Patrol car numbers</li>
          <li>Witness names and contact information</li>
          <li>Exact words spoken by officers and by you</li>
          <li>Physical descriptions</li>
          <li>Any use of force</li>
        </ul>

        <h4>Hours 6\u201324: Preserve Evidence</h4>
        <ul>
          <li>Photograph any injuries or property damage</li>
          <li>Save any recordings to multiple locations</li>
          <li>Keep clothing if relevant to the encounter</li>
          <li>Keep all related documents and receipts</li>
          <li>Get copies of medical records</li>
        </ul>

        <h3>Dealing with Trauma</h3>
        <p>Police encounters can be traumatic. Common reactions include anxiety, trouble sleeping, being extra watchful, anger, and depression. Healthy coping strategies:</p>
        <ul>
          <li>Talk to a counselor or trusted person</li>
          <li>Stay connected with friends and family</li>
          <li>Maintain normal routines</li>
          <li>Take care of yourself\u2014exercise, eat well, sleep</li>
          <li>Limit media exposure that may retraumatize you</li>
        </ul>
      `
    },
    {
      id: "special-situations",
      number: 19,
      title: "Special Situations",
      subtitle: null,
      icon: "flag",
      keywords: ["disability", "non-english", "interpreter", "protest", "homeless", "first amendment", "accommodation"],
      content: `
        <p>Some people face unique challenges with law enforcement. Here are special considerations.</p>

        <h3>People with Disabilities</h3>
        <ul>
          <li>Ask for accommodations you need</li>
          <li>Request an interpreter if needed</li>
          <li>Explain physical limitations clearly</li>
          <li>Carry medical documentation if appropriate</li>
          <li>Document any rough treatment or failure to accommodate</li>
        </ul>

        <h3>Non-English Speakers</h3>
        <ul>
          <li>You have the right to an interpreter</li>
          <li>Do not sign documents you cannot read or understand</li>
          <li>You can remain silent in any language</li>
          <li>Family members cannot be forced to interpret for police</li>
          <li>Have a rights card in your language</li>
        </ul>

        <h3>Protesters and Activists</h3>
        <ul>
          <li>The First Amendment protects your right to peacefully protest</li>
          <li>Know permit requirements for your area</li>
          <li>Get legal observer contacts before protesting</li>
          <li>Have emergency contacts and bail fund information</li>
          <li>Understand the consequences of civil disobedience before engaging</li>
        </ul>

        <h3>Homeless Individuals</h3>
        <ul>
          <li>Know local ordinances about camping and loitering</li>
          <li>Document your property\u2014police cannot destroy your belongings without notice</li>
          <li>Understand shelter rights</li>
          <li>Keep important documents safe</li>
          <li>Know legal aid resources in your area</li>
        </ul>
      `
    },
    {
      id: "support-team",
      number: 20,
      title: "Building Your Support Team",
      subtitle: null,
      icon: "people",
      keywords: ["support", "team", "lawyer", "attorney", "family", "bail", "emergency", "plan"],
      content: `
        <p>Do not wait for trouble to find help. Build your support team now.</p>

        <h3>Finding an Attorney</h3>
        <ul>
          <li>SC Bar Lawyer Referral Service: <a href="tel:+18037997100">(803) 799-7100</a></li>
          <li>Civil rights organizations</li>
          <li>Community recommendations</li>
          <li>Legal aid societies</li>
          <li>Public defender offices</li>
        </ul>

        <h3>Questions to Ask a Lawyer</h3>
        <ul>
          <li>Do you have experience with cases like mine?</li>
          <li>What is your fee structure?</li>
          <li>How will you communicate with me?</li>
          <li>Do you have after-hours emergency contact?</li>
          <li>What is your approach to cases like mine?</li>
        </ul>

        <h3>Family Emergency Plan</h3>
        <p>Discuss with your family:</p>
        <ul>
          <li>Emergency contacts and who to call first</li>
          <li>Access to emergency funds</li>
          <li>Childcare plans if a parent is detained</li>
          <li>How to notify employer or school</li>
          <li>Location of important documents</li>
          <li>Power of attorney and childcare authorization forms</li>
        </ul>
      `
    },
    {
      id: "teaching-family",
      number: 21,
      title: "Teaching Your Family",
      subtitle: null,
      icon: "heart",
      keywords: ["family", "teach", "children", "kids", "prepare", "practice", "teens"],
      content: `
        <p>Your family's safety depends on everyone knowing their rights. Hold regular family meetings to review rights and practice scenarios.</p>

        <h3>For Young Children (5\u201310)</h3>
        <ul>
          <li>It is okay to be quiet if scared</li>
          <li>Always ask for mom or dad</li>
          <li>Memorize important phone numbers</li>
          <li>Stay calm and safe</li>
        </ul>

        <h3>For Teens (15\u201318)</h3>
        <ul>
          <li>Complete rights overview\u2014share this guide with them</li>
          <li>Traffic stop procedures</li>
          <li>Party and gathering safety</li>
          <li>Digital privacy basics</li>
          <li>Understanding consequences</li>
        </ul>
      `
    },
    {
      id: "non-english-speakers",
      number: 23,
      title: "Non-English Speakers",
      subtitle: "Multilingual Rights Information",
      icon: "globe",
      keywords: ["language", "non-english", "spanish", "chinese", "vietnamese", "korean", "arabic", "french", "portuguese", "interpreter", "translation", "multilingual", "foreign"],
      content: `
        <img src="images/country-flags.png" alt="Flags of 40 Countries" style="width:100%;border-radius:8px;margin-bottom:var(--space-lg);">

        <div class="callout" style="direction: auto;">
          <p><strong>Do not say anything to the immigration agent if they try to talk to you.</strong><br>
          Huwag magsalita kung ikaw ay gustong kausapin ng mga Ahente.<br>
          \u2018Oua teke lea kihe kau \u2018ofisa \u2018Imikuleisoni kapau te nau feinga atu ke mou talanoa.<br>
          \u5982\u79FB\u6C11\u5C40\u4EBA\u54E1\u5617\u8A66\u548C\u4F60\u4EA4\u8AC7\uFF0C\u4E0D\u8981\u8AAA\u4EC0\u9EBC\u3002<br>
          NO LE DIGA NADA AL AGENTE DEL SERVICIO DE INMIGRACION SI TRATA DE HABLAR CON USTED.</p>

          <p><strong>Do not open the door if there is an immigration agent knocking at your door.</strong><br>
          Huwag mong buksan ang pinto kung mayroong mga ahente na mula sa Serbisyong Imigrasyon na kumakatok.<br>
          \u2018Oua teke fakaava e matapaa \u2018oka Tukituki atu ha \u2018ofisa mei he Potungaue \u2018Imikuleisoni.<br>
          \u5982\u79FB\u6C11\u5C40\u4EBA\u54E1\u6572\u4F60\u7684\u9580\uFF0C\u4E0D\u8981\u6253\u958B\u9580\u3002<br>
          NO ABRA LA PUERTA SI UN AGENTE DEL SERVICIO DE INMIGRACION ESTA TOCANDO A LA PUERTA.</p>

          <p><strong>Give your red card to the agent without opening the door.</strong><br>
          Ibigay itong tarheta sa mga Ahente.<br>
          \u2018Oange \u2018ae kaati ko eni kihe \u2018ofisa \u2018Imikuleisoni.<br>
          \u4E0D\u8981\u6253\u958B\u9580\u7D66\u7D05\u5361\u8B93\u4ED6\u5011\u770B\u3002<br>
          ENTREGUE SU TARJETA ROJA AL AGENTE SIN ABRIR LA PUERTA.</p>
        </div>

        <div class="callout callout-critical">
          <h4>You have constitutional rights:</h4>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p><em>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</em></p>
          <p><em>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</em></p>
          <p><em>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</em></p>
          <p><em>I choose to exercise my constitutional rights.</em></p>
        </div>

        <h3>Key Phrases to Use</h3>
        <p>If you learn nothing else from this guide, learn these phrases:</p>
        <p>Press the play button for law enforcement, if needed.</p>
        <ul class="key-phrases">
          <li><button class="phrase-play" data-audio="audio/i-want-to-speak-to-a-lawyer.mp3" aria-label="Play audio: I want to speak to a lawyer.">&#9654;</button> I want to speak to a lawyer.</li>
          <li><button class="phrase-play" data-audio="audio/am-i-free-to-go.mp3" aria-label="Play audio: Am I free to go?">&#9654;</button> Am I free to go?</li>
          <li><button class="phrase-play" data-audio="audio/i-do-not-consent-to-any-searches.mp3" aria-label="Play audio: I do not consent to any searches.">&#9654;</button> I do not consent to any searches.</li>
          <li><button class="phrase-play" data-audio="audio/i-am-exercising-my-right-to-remain-silent.mp3" aria-label="Play audio: I am exercising my right to remain silent.">&#9654;</button> I am exercising my right to remain silent.</li>
          <li><button class="phrase-play" data-audio="audio/i-do-not-wish-to-answer-questions.mp3" aria-label="Play audio: I do not wish to answer questions.">&#9654;</button> I do not wish to answer questions.</li>
        </ul>

        <h3>Red Cards in Other Languages</h3>
        <p>Select a language below to view the Red Card in that language:</p>
        <ul>
          <li><a href="#red-card-amharic"><strong>Amharic (አማርኛ)</strong></a></li>
          <li><a href="#red-card-arabic"><strong>Arabic (العربية)</strong></a></li>
          <li><a href="#red-card-armenian"><strong>Armenian (Հայերեն)</strong></a></li>
          <li><a href="#red-card-bangla"><strong>Bangla</strong></a></li>
          <li><a href="#red-card-bosnian"><strong>Bosnian</strong></a></li>
          <li><a href="#red-card-burmese"><strong>Burmese</strong></a></li>
          <li><a href="#red-card-cantonese"><strong>Cantonese</strong></a></li>
          <li><a href="#red-card-cape-verdean-creole"><strong>Cape Verdean Creole</strong></a></li>
          <li><a href="#red-card-cebuano"><strong>Cebuano</strong></a></li>
          <li><a href="#red-card-chinese-simplified"><strong>Chinese (Simplified) (中文(简体))</strong></a></li>
          <li><a href="#red-card-chinese-traditional"><strong>Chinese (中文(繁體))</strong></a></li>
          <li><a href="#red-card-dari"><strong>Dari</strong></a></li>
          <li><a href="#red-card-french"><strong>French (Français)</strong></a></li>
          <li><a href="#red-card-georgian"><strong>Georgian</strong></a></li>
          <li><a href="#red-card-greek"><strong>Greek</strong></a></li>
          <li><a href="#red-card-haitian-creole"><strong>Haitian Creole (Kreyòl Ayisyen)</strong></a></li>
          <li><a href="#red-card-hausa"><strong>Hausa</strong></a></li>
          <li><a href="#red-card-hebrew"><strong>Hebrew</strong></a></li>
          <li><a href="#red-card-hindi"><strong>Hindi</strong></a></li>
          <li><a href="#red-card-hmong"><strong>Hmong</strong></a></li>
          <li><a href="#red-card-igbo"><strong>Igbo</strong></a></li>
          <li><a href="#red-card-ilocano"><strong>Ilocano</strong></a></li>
          <li><a href="#red-card-japanese"><strong>Japanese (日本語)</strong></a></li>
          <li><a href="#red-card-karen"><strong>Karen</strong></a></li>
          <li><a href="#red-card-khmer"><strong>Khmer (ភាសាខ្មែ)</strong></a></li>
          <li><a href="#red-card-kinyarwanda"><strong>Kinyarwanda</strong></a></li>
          <li><a href="#red-card-korean"><strong>Korean (한국어)</strong></a></li>
          <li><a href="#red-card-lao"><strong>Lao</strong></a></li>
          <li><a href="#red-card-lingala"><strong>Lingala</strong></a></li>
          <li><a href="#red-card-marshallese"><strong>Marshallese</strong></a></li>
          <li><a href="#red-card-mongolian"><strong>Mongolian</strong></a></li>
          <li><a href="#red-card-nahuatl"><strong>Nahuatl</strong></a></li>
          <li><a href="#red-card-nepali"><strong>Nepali</strong></a></li>
          <li><a href="#red-card-oromo"><strong>Oromo</strong></a></li>
          <li><a href="#red-card-pashto"><strong>Pashto</strong></a></li>
          <li><a href="#red-card-polish"><strong>Polish</strong></a></li>
          <li><a href="#red-card-portuguese"><strong>Portuguese (Português)</strong></a></li>
          <li><a href="#red-card-punjabi"><strong>Punjabi (ਪੰਜਾਬੀ)</strong></a></li>
          <li><a href="#red-card-romanian"><strong>Romanian</strong></a></li>
          <li><a href="#red-card-russian"><strong>Russian (Русский)</strong></a></li>
          <li><a href="#red-card-samoan"><strong>Samoan</strong></a></li>
          <li><a href="#red-card-somali"><strong>Somali</strong></a></li>
          <li><a href="#red-card-spanish"><strong>Spanish (Español)</strong></a></li>
          <li><a href="#red-card-swahili"><strong>Swahili</strong></a></li>
          <li><a href="#red-card-tagalog"><strong>Tagalog</strong></a></li>
          <li><a href="#red-card-tamil"><strong>Tamil</strong></a></li>
          <li><a href="#red-card-thai"><strong>Thai (ภาษาไทย)</strong></a></li>
          <li><a href="#red-card-tigrinya"><strong>Tigrinya</strong></a></li>
          <li><a href="#red-card-tsotsil"><strong>Tsotsil</strong></a></li>
          <li><a href="#red-card-turkish"><strong>Turkish</strong></a></li>
          <li><a href="#red-card-ukrainian"><strong>Ukrainian</strong></a></li>
          <li><a href="#red-card-urdu"><strong>Urdu (اردو)</strong></a></li>
          <li><a href="#red-card-vietnamese"><strong>Vietnamese (Tiếng-Việt)</strong></a></li>
          <li><a href="#red-card-yoruba"><strong>Yoruba</strong></a></li>
          <li><a href="#red-card-farsi"><strong>فارسی / Farsi</strong></a></li>
        </ul>
      `
    },
    {
      id: "aclu-immigrants-rights",
      number: 24,
      title: "Immigrants' Rights",
      subtitle: "ACLU Know Your Rights",
      icon: "globe",
      keywords: ["ACLU", "immigrants", "immigration", "ICE", "border patrol", "deportation", "detained", "visa", "citizenship", "rights", "non-citizen", "arrest", "lawyer", "warrant", "search"],
      content: `
        <p>Regardless of your immigration status, you have guaranteed rights under the Constitution. Learn more here about your rights as an immigrant, and how to express them.</p>

        <h3>Law enforcement asks about my immigration status</h3>

        <h4>How to reduce risk to yourself</h4>
        <ul>
          <li>Stay calm. Don\u2019t run, argue, resist, or obstruct the officer, even if you believe your rights are being violated. Keep your hands where police can see them.</li>
          <li>Don\u2019t lie about your status or provide false documents.</li>
        </ul>

        <h4>Your rights</h4>
        <ul>
          <li>You have the right to remain silent and do not have to discuss your immigration or citizenship status with police, immigration agents, or other officials. Anything you tell an officer can later be used against you in immigration court.</li>
          <li>If you are not a U.S. citizen and an immigration agent requests your immigration papers, you must show them if you have them with you.</li>
          <li>If an immigration agent asks if they can search you, you have the right to say no. Agents do not have the right to search you or your belongings without your consent or probable cause.</li>
          <li>If you\u2019re over 18, carry your papers with you at all times. If you don\u2019t have them, tell the officer that you want to remain silent, or that you want to consult a lawyer before answering any questions.</li>
        </ul>

        <h4>What to do in such an encounter</h4>
        <ul>
          <li>In some states, you must provide your name to law enforcement if you are stopped and told to identify yourself. But even if you give your name, you don\u2019t have to answer other questions.</li>
          <li>If you are driving and are pulled over, the officer can require you to show your license, vehicle registration and proof of insurance, but you don\u2019t have to answer questions about your immigration status.</li>
          <li>Customs officers can ask about your immigration status when entering or leaving the country. If you are a lawful permanent resident (LPR) who has maintained your status, you only have to answer questions establishing your identity and permanent residency. Refusal to answer other questions will likely cause delay, but officials may not deny you entry into the United States for failure to answer other questions. If you are a non-citizen visa holder, you may be denied entry into the U.S. if you refuse to answer officers\u2019 questions.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
          <li>ACLU VIDEO: What to do if stopped by police or ICE</li>
        </ul>

        <h4>In other languages</h4>
        <ul>
          <li>\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (Arabic)</li>
          <li>\u4E2D\u6587(\u7B80) (Chinese)</li>
          <li>Creole</li>
          <li>\u0641\u0627\u0631\u0633\u06CC (Farsi)</li>
          <li>Fran\u00E7ais (French)</li>
          <li>Bahasa Indonesia (Indonesian)</li>
          <li>\uD55C\uAD6D\uC5B4 (Korean)</li>
          <li>Portugu\u00EAs (Portuguese)</li>
          <li>Soomaali (Somali)</li>
          <li>Espa\u00F1ol (Spanish)</li>
          <li>Tagalog</li>
          <li>\u0627\u064F\u0631\u062F\u064F\u0648 (Urdu)</li>
          <li>Ti\u1EBFng Vi\u1EC7t (Vietnamese)</li>
          <li>\u0939\u093F\u0902\u0926\u0940 (Hindi)</li>
          <li>\u7E41\u9AD4\u4E2D\u6587 (Traditional Chinese)</li>
          <li>\u7B80\u4F53\u4E2D\u6587 (Simplified Chinese)</li>
        </ul>

        <h3>I\u2019ve been stopped by police or ICE</h3>

        <h4>How to reduce risk to yourself</h4>
        <ul>
          <li>Stay calm and do not resist or obstruct the agents or officers.</li>
          <li>Do not lie or give false documents.</li>
          <li>Prepare yourself and your family in case you are arrested. Memorize the phone numbers of your family and your lawyer. Make emergency plans if you have children or take medication.</li>
        </ul>

        <h4>Your rights</h4>
        <ul>
          <li>You have the right to remain silent. If you wish to exercise that right, say so out loud. (In some states, you may be required to provide your name if asked to identify yourself.)</li>
          <li>You do not have to consent to a search of yourself or your belongings, but police may pat down your clothing if they suspect a weapon.</li>
          <li>If you are arrested by police, you have the right to a government-appointed lawyer.</li>
          <li>If you are detained by ICE, you have the right to consult with a lawyer, but the government is not required to provide one for you. You can ask for a list of free or low-cost alternatives.</li>
          <li>You do not have to answer questions about where you were born, whether you are a U.S. citizen, or how you entered the country. (Separate rules apply at international borders and airports, and for individuals on certain nonimmigrant visas, including tourists and business travelers.)</li>
        </ul>

        <h4>What to do if you are arrested or detained</h4>
        <ul>
          <li>Say you wish to remain silent and ask for a lawyer immediately. Don\u2019t give any explanations or excuses. Don\u2019t say anything, sign anything, or make any decisions without a lawyer.</li>
          <li>If you have been arrested by police, you have the right to make a local phone call. The police cannot listen if you call a lawyer.</li>
          <li>If you have been detained by ICE, you have the right to contact your consulate or have an officer inform the consulate of your detention.</li>
          <li>Remember your immigration number (\u201CA\u201D number) and give it to your family. It will help family members locate you.</li>
          <li>Keep a copy of your immigration documents with someone you trust.</li>
          <li><strong>If you are a non-citizen:</strong> Ask your lawyer about the effect of a criminal conviction or plea on your immigration status. Don\u2019t discuss your immigration status with anyone but your lawyer. While you are in jail, an immigration agent may visit you. Do not answer questions or sign anything before talking to a lawyer. Read all papers fully. If you do not understand or cannot read the papers, tell the officer you need an interpreter.</li>
        </ul>

        <h4>If you believe your rights were violated</h4>
        <ul>
          <li>Write down everything you remember, including officers\u2019 badges and patrol car numbers, which agency the officers were from, and any other details. Get contact information for witnesses.</li>
          <li>If you\u2019re injured, seek medical attention immediately and take photographs of your injuries.</li>
          <li>File a written complaint with the agency\u2019s internal affairs division or civilian complaint board. In most cases, you can file a complaint anonymously if you wish.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
          <li>ACLU VIDEO: What to do if stopped by police or ICE</li>
        </ul>

        <h4>In other languages</h4>
        <ul>
          <li>\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (Arabic)</li>
          <li>\u0641\u0627\u0631\u0633\u06CC (Farsi)</li>
          <li>Espa\u00F1ol (Spanish)</li>
          <li>\u0627\u064F\u0631\u062F\u064F\u0648 (Urdu)</li>
        </ul>

        <h3>Police or ICE are at my home</h3>

        <h4>How to reduce risk to yourself</h4>
        <ul>
          <li>Stay calm and keep the door closed. Opening the door does not give them permission to come inside, but it is safer to speak to ICE through the door.</li>
        </ul>

        <h4>Your rights</h4>
        <ul>
          <li>You have the right to remain silent, even if officer has a warrant.</li>
          <li>You do not have to let police or immigration agents into your home unless they have certain kinds of warrants.</li>
          <li>If police have an arrest warrant, they are legally allowed to enter the home of the person on the warrant if they believe that person is inside. But a warrant of removal/deportation (Form I-205) does not allow officers to enter a home without consent.</li>
        </ul>

        <h4>What to do when the police or ICE arrive</h4>
        <ul>
          <li>Ask if they are immigration agents and what they are there for.</li>
          <li>Ask the agent or officer to show you a badge or identification through the window or peephole.</li>
          <li>Ask if they have a warrant signed by a judge. If they say they do, ask them to slide it under the door or hold it up to a window so you can inspect it.</li>
          <li>Don\u2019t lie or produce any false documents. Don\u2019t sign anything without speaking with a lawyer first.</li>
          <li>Do not open your door unless ICE shows you a judicial search or arrest warrant naming a person in your residence and/or areas to be searched at your address. If they don\u2019t produce a warrant, keep the door closed. State: \u201CI do not consent to your entry.\u201D</li>
          <li>If agents force their way in, do not resist. If you wish to exercise your rights, state: \u201CI do not consent to your entry or to your search of these premises. I am exercising my right to remain silent. I wish to speak with a lawyer as soon as possible.\u201D</li>
          <li>If you are on probation with a search condition, law enforcement is allowed to enter your home.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
        </ul>

        <h3>I need a lawyer</h3>

        <h4>Your rights</h4>
        <ul>
          <li>If you are arrested by the police, you have the right to a government-appointed lawyer, and should ask for one immediately.</li>
          <li>If arrested, you have the right to a private phone call within a reasonable time of your arrest, and police may not listen to the call if it is made to a lawyer.</li>
          <li>If you are detained by ICE or Border Patrol, you have the right to hire a lawyer, but the government does not have to provide one for you. Ask for a list of free or low-cost alternatives.</li>
          <li>If you are detained, you have the right to call a lawyer or your family, and you have the right to be visited by a lawyer in detention. You have the right to have your attorney with you at any hearing before an immigration judge.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>Here is a list of contact information for legal organizations that assist immigrants.</li>
        </ul>

        <h3>I\u2019ve been detained near the border by Border Patrol</h3>

        <h4>How to reduce risk to yourself</h4>
        <ul>
          <li>Stay calm when interacting with immigration officials. Do not lie or provide false documents.</li>
          <li>Never flee from an immigration checkpoint.</li>
        </ul>

        <h4>Your rights</h4>
        <ul>
          <li>You have the right to remain silent. You can also tell the agent that you\u2019ll only answer questions in the presence of an attorney, no matter your citizenship or immigration status.</li>
          <li>You do not have to answer questions about your immigration status. A limited exception exists for people who have permission to be in the U.S. for a specific reason and for a limited amount of time (a \u201Cnonimmigrant\u201D on a visa, for example). These individuals are required to provide information about their immigration status if asked.</li>
          <li>Generally, a Border Patrol agent cannot detain you unless they have \u201Creasonable suspicion\u201D that you are committing or committed a violation of immigration law or federal law.</li>
          <li>An immigration officer cannot arrest you without \u201Cprobable cause.\u201D That means the agent must have facts about you that make it probable that you are committing, or committed, a violation of immigration law or federal law.</li>
          <li>At immigration checkpoints, agents do not need any suspicion to stop you and ask you questions, but their questions should be brief and related to verifying immigration status. They can also visually inspect your vehicle.</li>
        </ul>

        <h4>What to expect</h4>
        <ul>
          <li>People who have entered the U.S. without inspection by an immigration official may be subject to expedited removal from the U.S. based on certain criteria. If you are told that you are subject to expedited removal, ask for the stated reason. Also, if you fear persecution if returned to your country of origin, you should immediately inform the agents of your fear.</li>
          <li>At border crossings, federal authorities do not need a warrant or even suspicion of wrongdoing to justify conducting what courts have called a \u201Croutine search,\u201D such as searching luggage or a vehicle.</li>
          <li>If an agent asks you for documents, what you need to provide differs depending on your immigration status. U.S. citizens do not have to carry proof of citizenship if they are in the U.S. If you have valid immigration documents and are over the age of 18, the law requires that you carry those documents with you. If you are asked by an immigration agent to produce them, show them to the agent. If you are an immigrant without documents, you can decline the officer\u2019s request, although an agent may then ask you more questions.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
        </ul>

        <h3>I was stopped by police, ICE, or Border Patrol while in transit</h3>

        <h4>How to reduce risk to yourself</h4>
        <ul>
          <li>Stay calm. Don\u2019t run, argue, or obstruct the officer or agent. Keep your hands raised where they can see them.</li>
          <li>If you are in a car, pull over in a safe place as quickly as possible. Turn off the engine, turn on the internal light, open the window part way and place your hands on the wheel. Upon request, show police your driver\u2019s license, registration, and proof of insurance.</li>
          <li>If you are not a U.S. citizen and an immigration agent requests your papers, you must show them if you have them with you. If you are over 18, carry your immigration documents with you at all times. If you do not have immigration papers, say you want to remain silent.</li>
        </ul>

        <h4>Your rights</h4>
        <p><strong>In a car:</strong></p>
        <ul>
          <li>Drivers and passengers have the right to remain silent. If you are a passenger, you can ask if you are free to leave. If the officer says yes, calmly leave.</li>
          <li>If an officer or immigration agent asks to look inside your car, you can refuse to consent to the search. But if police generally believe that your car contains evidence of a crime, your car can be searched without your consent.</li>
          <li>In addition to police, Border Patrol conduct \u201Croving patrols\u201D around the interior of the U.S., pulling over motorists. Border Patrol must have reasonable suspicion that the driver or passengers in the car committed an immigration violation or a federal crime.</li>
          <li>Any arrest or prolonged stop by Border Patrol requires probable cause. You may ask the agents about the basis for probable cause, and they should tell you. In this situation, both the driver and any passengers have the right to remain silent and not answer questions about their immigration status.</li>
        </ul>

        <p><strong>On an airplane:</strong></p>
        <ul>
          <li>A pilot may refuse to fly a passenger if he or she reasonably believes that the passenger is a threat to flight safety. A pilot may not, however, question you or refuse to allow you on a flight because of bias based on your religion, race, national origin, gender, ethnicity, or political beliefs.</li>
          <li>If you believe you are mistakenly on a \u201Cno-fly\u201D list, you should review the ACLU\u2019s guidance on No-Fly lists.</li>
        </ul>

        <p><strong>On buses and trains:</strong></p>
        <ul>
          <li>Border Patrol agents may board buses and trains in the 100-mile border region either at the station or while the bus is on its journey. More than one officer usually boards the bus, and they will ask passengers questions about their immigration status, ask passengers to show them immigration documents, or both.</li>
          <li>These questions should be brief and related to verifying one\u2019s lawful presence in the U.S. You are not required to answer and can simply say you do not wish to do so. As always, you have the right to remain silent.</li>
        </ul>

        <h4>If you believe your rights were violated</h4>
        <ul>
          <li>Write down everything you remember, including officers\u2019 badges and patrol car numbers, which agency the officers were from, and any other details. Get contact information from witnesses.</li>
          <li>If you\u2019re injured, seek medical attention immediately and take photographs of your injuries.</li>
          <li>File a written complaint with the agency\u2019s internal affairs division or civilian complaint board. In most cases, you can file a complaint anonymously.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
        </ul>

        <h3>I am detained while my immigration case is underway</h3>

        <h4>Your rights</h4>
        <ul>
          <li>Most people who are detained while their case is underway are eligible to be released on bond or with other reporting conditions.</li>
          <li>You have the right to call a lawyer or your family if you are detained, and you have the right to be visited by a lawyer in detention.</li>
          <li>You have the right to have your attorney with you at any hearing before an immigration judge.</li>
        </ul>

        <h4>What to do if you are detained</h4>
        <ul>
          <li>If you are denied release after being arrested for an immigration violation, ask for a bond hearing before an immigration judge. In many cases, an immigration judge can order that you be released or that your bond be lowered.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
        </ul>

        <h3>I\u2019ve been arrested and need to challenge a deportation order</h3>

        <h4>Your rights</h4>
        <ul>
          <li>You have the right to a hearing to challenge a deportation order, unless you waive your right to a hearing, sign something called a \u201CStipulated Removal Order,\u201D or take \u201Cvoluntary departure.\u201D</li>
          <li>You have the right to an attorney, but the government does not have to provide one for you. Ask for a list of free or low-cost alternatives. If you have no lawyer, ask the court to allow you time to find one.</li>
        </ul>

        <h4>What to do if you are arrested</h4>
        <ul>
          <li>If you are told that you do not have the right to see an immigration judge, you should speak with a lawyer immediately. There are some cases in which a person might not have a right to see an immigration judge. But even if you are told that is your situation, you should ask to speak to a lawyer immediately because Immigration officers will not always know or tell you about exceptions that might apply to you.</li>
          <li>If you fear persecution or torture in your home country, tell an officer and contact a lawyer immediately. You have additional rights if you have this fear.</li>
        </ul>

        <h4>Additional resources</h4>
        <ul>
          <li>If you need more information, contact your local ACLU affiliate.</li>
          <li>National Immigration Law Center: Know Your Rights</li>
          <li>A Toolkit for Organizations Responding to Mass Worksite Immigration Raids</li>
          <li>Immigrant Legal Resource Center</li>
          <li>American Immigration Lawyers Association</li>
        </ul>

        <h3>I want to share this information on social media</h3>
        <p>If you want to share this information with others, we\u2019ve created graphics outlining your rights that you can download and share on social media. We\u2019ve also created graphics that you can download to your phone and save it as your lockscreen background \u2014 so you can easily see your rights if you\u2019re stopped by police or ICE without unlocking your phone.</p>

        <p><em>Courtesy of the ACLU</em></p>
      `
    },
    {
      id: 'derechos-inmigrantes',
      number: 25,
      title: 'Derechos de los Inmigrantes',
      subtitle: 'Conozca Sus Derechos (ACLU en Espa\u00f1ol)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
      keywords: ['spanish', 'espa\u00f1ol', 'derechos', 'inmigrantes', 'immigrants rights', 'ICE', 'deportaci\u00f3n', 'ACLU', 'patrulla fronteriza', 'abogado'],
      content: `
        <h2>Derechos de los Inmigrantes</h2>
        <h3>Conozca Sus Derechos</h3>

        <p>Independientemente de su estatus migratorio, usted tiene derechos garantizados por la Constituci\u00f3n. Aprenda m\u00e1s aqu\u00ed sobre sus derechos y c\u00f3mo expresarlos.</p>
        <p><strong>OJO: ESTA NO ES ASESOR\u00cdA LEGAL Y NO SUBSTITUYE UNA CONSULTA CON UN ABOGADO.</strong></p>

        <h3>Agentes policiales preguntan sobre su estatus migratorio dentro de los Estados Unidos</h3>

        <h4>C\u00f3mo reducir el riesgo para usted mismo</h4>
        <ul>
          <li>Mantenga la calma. No corra, discuta, resista, u obstruya al oficial, incluso si cree que est\u00e1n violando sus derechos. Mantenga sus manos donde la polic\u00eda pueda verlas.</li>
          <li>No mienta sobre su estatus migratorio ni proporcione documentos falsos.</li>
        </ul>

        <h4>Sus derechos</h4>
        <ul>
          <li>Usted tiene el derecho de permanecer callado y no tiene que compartir su estatus migratorio, donde naci\u00f3, si es ciudadano, ni c\u00f3mo entr\u00f3 al pa\u00eds con la polic\u00eda, los agentes de inmigraci\u00f3n, u otros funcionarios. Cualquier cosa que le diga a un oficial puede luego ser usada en su contra en la corte de inmigraci\u00f3n.</li>
          <li>Si no es ciudadano de los EE.UU. y un agente de inmigraci\u00f3n le pide sus documentos de inmigraci\u00f3n, usted debe mostr\u00e1rselos.</li>
          <li>Si un agente de inmigraci\u00f3n pregunta si pueden registrarlo, usted tiene el derecho a decir que no. Los agentes no tienen el derecho a registrarlo o a registrar sus cosas sin obtener su consentimiento o sin tener una causa probable. Esto significa que el agente debe poseer hechos sobre usted que hagan probable que est\u00e9 cometiendo o haya cometido una violaci\u00f3n de la ley migratoria o federal.</li>
          <li>Si es mayor de 18 a\u00f1os, lleve sus documentos de inmigraci\u00f3n v\u00e1lidos consigo en todo momento. Si no tiene documentos de inmigraci\u00f3n v\u00e1lidos, tiene el derecho a permanecer callado y a pedir hablar con un abogado/a antes de responder a cualquier pregunta.</li>
        </ul>

        <h4>Qu\u00e9 hacer en un encuentro con agentes policiales</h4>
        <ul>
          <li>Si desea ejercer su derecho a permanecer callado, diga en voz alta: \u201cEstoy ejerciendo mi derecho de guardar silencio.\u201d No es necesario dar ninguna explicaci\u00f3n.</li>
          <li>En ciertos estados, es requerido proveer su nombre a los agentes policiales si lo para la polic\u00eda y le piden que se identifique. Pero, aunque de su nombre, no necesita responder a ninguna otra pregunta.</li>
          <li>Si est\u00e1 manejando y lo paran, el oficial puede requerir que ense\u00f1e su licencia de conducir, registro y prueba de seguro, sin embargo, no necesita responder a preguntas sobre su estatus migratorio.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
        </ul>

        <h3>Me ha detenido la polic\u00eda o ICE dentro de los Estados Unidos</h3>

        <h4>C\u00f3mo reducir el riesgo para ti mismo</h4>
        <ul>
          <li>Mantenga la calma, no se resista ni obstruya las actividades de los agentes u oficiales.</li>
          <li>No dirija la mano a la cintura cuando se acerque un agente u oficial.</li>
          <li>No mienta ni de documentos falsos.</li>
          <li>Prep\u00e1rese y prepare a su familia en caso de que lo arresten. Apr\u00e9ndase de memoria los n\u00fameros de tel\u00e9fono de su familia y su abogado/a. Haga planes de emergencia.</li>
          <li>Diga a los oficiales si tiene una condici\u00f3n m\u00e9dica o necesita coordinar cuidado para sus ni\u00f1os.</li>
          <li>Tenga consigo prueba de que ha vivido en los Estados Unidos por m\u00e1s de dos a\u00f1os (por ejemplo: documentos fechados como recibos de pago, cheques, documentos m\u00e9dicos, documentos escolares, estados de cuenta de las tarjetas de cr\u00e9dito, etc.)</li>
          <li>Consulte con un abogado de inmigraci\u00f3n para ver si tiene alguna opci\u00f3n de arreglar su estatus migratorio.</li>
          <li>Si la tiene, lleve consigo evidencia de entrada o su estatus legales en los Estados Unidos. Si tiene una solicitud de asilo pendiente u otro caso o apelaci\u00f3n en un tribunal de inmigraci\u00f3n, lleve consigo evidencia de ello.</li>
        </ul>

        <h4>Sus Derechos</h4>
        <ul>
          <li>Usted tiene derecho a permanecer callado.</li>
          <li>En algunos estados, es requerido proporcionar su nombre si se le pide que se identifique.</li>
          <li>Tiene derecho a no dar su consentimiento para que lo registren o que registren sus pertenencias. Sin embargo, la polic\u00eda puede palpar su ropa si sospechan que usted carga un arma consigo.</li>
          <li>Si es arrestado por la polic\u00eda, tiene derecho a un abogado/a dado por el gobierno.</li>
          <li>Si es detenido por ICE, tiene derecho a consultar con un abogado/a, pero el gobierno no est\u00e1 obligado a darle un abogado. Puede solicitar una lista de abogados gratuitos o a bajo costo.</li>
          <li>Usted tiene derecho a permanecer callado. No tiene que responder a preguntas acerca de donde naci\u00f3, si es ciudadano de los EE.UU., ni c\u00f3mo ingres\u00f3 al pa\u00eds.</li>
          <li><strong>Ojo:</strong> Aplican reglas distintas en los cruces fronterizos internacionales y aeropuertos. Tambi\u00e9n aplican reglas distintas a individuos con ciertas visas de noinmigrantes, incluyendo a los turistas y a las personas en viajes de negocios.</li>
        </ul>

        <h4>\u00bfQu\u00e9 hacer si eres arrestado o detenido?</h4>
        <ul>
          <li>Tiene derecho a permanecer callado y solicitar un abogado/a de inmediato. No es necesario dar ninguna explicaci\u00f3n. Si desea ejercer sus derechos, diga: \u201cEstoy ejerciendo mi derecho de guardar silencio. Deseo hablar con un abogado/a tan pronto como sea posible.\u201d Tiene derecho a no firmar ni tomar decisiones sin un abogado/a.</li>
          <li>Si ha sido arrestado por la polic\u00eda, tiene derecho a hacer una llamada local. Si la llamada es con un abogado, la polic\u00eda debe brindarle privacidad y no escuchar su conversaci\u00f3n.</li>
          <li>Si usted no es ciudadano: preg\u00fantele a su abogado/a sobre el efecto que una condena penal puede tener en su estatus migratorio. No comparta su estatus migratorio con nadie m\u00e1s que con su abogado/a. Mientras est\u00e9 en la c\u00e1rcel, un agente de inmigraci\u00f3n puede visitarlo. Tiene derecho a no responder ninguna pregunta ni firmar nada antes de hablar con un abogado/a. Lea todos los papeles completamente. Si no entiende o no puede leer los documentos, tiene derecho a pedir un int\u00e9rprete.</li>
          <li>Si ha sido detenido por ICE, tiene derecho a una llamada gratis. Tambi\u00e9n puede comunicarse con su consulado de forma gratuita o pedirle a un oficial que informe a su consulado sobre su detenci\u00f3n.</li>
          <li>Apr\u00e9ndase el n\u00famero que le asigne inmigraci\u00f3n (n\u00famero \u201cA\u201d) y comp\u00e1rtalo con su familia o su contacto de emergencia. Esto ayudar\u00e1 a localizarlo si es detenido por inmigraci\u00f3n.</li>
          <li>Guarde una copia de sus documentos de inmigraci\u00f3n con alguien de confianza.</li>
        </ul>

        <h4>Si crees que tus derechos fueron violados</h4>
        <ul>
          <li>Apunte todo lo que pueda recordar, incluyendo los n\u00fameros de las placas de los agentes y las placas de los veh\u00edculos de patrulla, de qu\u00e9 agencia eran los oficiales y cualquier otro detalle. Obtenga informaci\u00f3n para poder contactar a personas que hayan sido testigos de los hechos.</li>
          <li>Si resulta lesionado, busque atenci\u00f3n m\u00e9dica de inmediato y tome fotograf\u00edas de sus lesiones.</li>
          <li>Av\u00edsele a su abogado ya que esta informaci\u00f3n podr\u00eda ayudar a su caso de inmigraci\u00f3n.</li>
          <li>Presente una denuncia por escrito ante la divisi\u00f3n de asuntos internos o la junta civil de quejas de la agencia que haya violado sus derechos. En la mayor\u00eda de los casos, puede presentar una denuncia de forma an\u00f3nima si as\u00ed lo desea.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
        </ul>

        <h3>Agentes de ICE llegan a mi lugar de trabajo</h3>

        <h4>Sus derechos</h4>
        <ul>
          <li>Los agentes de inmigraci\u00f3n pueden acceder a las zonas p\u00fablicas de su lugar de trabajo. Para entrar en zonas privadas, los agentes de inmigraci\u00f3n deben tener permiso del propietario o gerente para llevar a cabo una redada en un lugar de trabajo (f\u00e1brica, restaurante, granja, etc.).</li>
          <li>Si los agentes no tienen permiso, deben contar con una orden de registro firmada por un juez o magistrado federal.</li>
          <li>Tiene derecho a no permitir ser registrado. Diga en voz alta que no permite que registren sus pertenencias.</li>
          <li>Tiene derecho a permanecer callado. No tiene que compartir su estatus migratorio con nadie, ni incluyendo donde naci\u00f3, si es ciudadano, ni c\u00f3mo entr\u00f3 al pa\u00eds.</li>
          <li>Tiene el derecho a grabar su interacci\u00f3n con los agentes de inmigraci\u00f3n siempre y cuando no interfiera con las actividades de los agentes.</li>
        </ul>

        <h4>\u00bfQu\u00e9 hacer cuando llega la polic\u00eda o ICE?</h4>
        <ul>
          <li>Pregunte si se puede marchar. De ser as\u00ed, v\u00e1yase tranquilamente. Si los agentes de inmigraci\u00f3n tienen permiso para registrar su lugar de trabajo, pueden impedir que los empleados se marchen.</li>
          <li>Si tiene documentos de inmigraci\u00f3n v\u00e1lidos, deber\u00eda mostrarlos. Nunca presente documentos falsos.</li>
          <li>Si es arrestado, puede decir que quiere permanecer en silencio hasta que hable con un abogado.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
        </ul>

        <h3>La polic\u00eda o ICE est\u00e1n en mi casa</h3>

        <h4>C\u00f3mo reducir el riesgo para usted mismo</h4>
        <ul>
          <li>Mantenga la calma y mantenga su puerta cerrada. El abrir la puerta no les da permiso de entrar, pero es m\u00e1s seguro hablar con ICE a trav\u00e9s de la puerta con la puerta cerrada.</li>
          <li>Si se aleja de la puerta en cualquier momento o si hace ciertos gestos pueden ser interpretados como autorizaci\u00f3n de entrar. Si ellos logran entrar sin permiso, diga, \u201cNo concedo que entren en mi casa.\u201d</li>
          <li>D\u00edgales si: Hay ni\u00f1os o personas mayores presentes; Est\u00e1 enfermo, recibiendo tratamiento o medicinas, o est\u00e1 amamantando o embarazada; Un ser querido est\u00e1 a su cargo y tiene que coordinar su cuidado</li>
        </ul>

        <h4>Sus derechos</h4>
        <ul>
          <li>Tiene derecho a permanecer callado, incluso si el oficial tiene una orden judicial.</li>
          <li>Tiene derecho a no permitir que la polic\u00eda o los agentes de inmigraci\u00f3n entren a su hogar a menos que tengan ciertos tipos de \u00f3rdenes judiciales como una orden judicial de registro o una orden de arresto.</li>
          <li>Si la polic\u00eda tiene una orden de arresto, se les permite legalmente ingresar a la casa de la persona especificada en la orden si creen que esa persona est\u00e1 adentro. Por lo contrario, si solo tienen una orden de expulsi\u00f3n / deportaci\u00f3n (el formulario I-205) los agentes no tienen el derecho a ingresar a su casa sin su consentimiento.</li>
          <li>Tiene el derecho a grabar su interacci\u00f3n con los agentes de inmigraci\u00f3n siempre y cuando no interfiera con las actividades de los agentes.</li>
        </ul>

        <h4>\u00bfQu\u00e9 hacer cuando llega la polic\u00eda o ICE?</h4>
        <ul>
          <li>Pregunte si son agentes de inmigraci\u00f3n y por qu\u00e9 est\u00e1n ah\u00ed.</li>
          <li>P\u00eddale al agente o al oficial que le muestre su identificaci\u00f3n a trav\u00e9s de la ventana o la mirilla.</li>
          <li>Pregunte si tienen una orden firmada por un juez. Si responden que s\u00ed, p\u00eddales que pasen la orden por debajo de la puerta o que la pongan contra la ventana para que pueda inspeccionarla.</li>
          <li>Aseg\u00farese de que la orden tenga la direcci\u00f3n del domicilio correcto.</li>
          <li>La orden debe decir el nombre de la corte y el nombre del juez, con una firma al lado del nombre del juez. Solo los jueces estatales o federales pueden firmar una orden de registro. Los jueces de inmigraci\u00f3n no tienen esa autoridad.</li>
          <li>Si no est\u00e1 seguro, pida tiempo para llamar a un abogado.</li>
          <li>No abra la puerta a menos que ICE le muestre una orden judicial de registro o una orden de arresto que nombre a una persona en su residencia y / o especifique el \u00e1rea autorizada a ser registrada en su direcci\u00f3n.</li>
          <li>Si no muestran una de esas \u00f3rdenes, mantenga la puerta cerrada. Diga: \u201cNo doy consentimiento a que entren.\u201d</li>
          <li>No mienta ni produzca ning\u00fan documento falso. No firme ning\u00fan documento sin hablar primero con un abogado/a.</li>
          <li>Si ICE busca a un ser querido, no mienta sobre su paradero. Puede decir: \u201cNo quiero contestar ninguna pregunta,\u201d y puede pedir a los agentes que dejen sus datos de contacto. No es requerido decirles c\u00f3mo pueden localizar a la persona que buscan.</li>
          <li>Solicite un int\u00e9rprete si el ingl\u00e9s no es el idioma con el que se siente m\u00e1s c\u00f3modo.</li>
          <li>Si los agentes entran a la fuerza, no trate de resistirse, no interrumpa un arresto. Si desea ejercer sus derechos, diga: \u201cNo consiento a su entrada o su registro de este lugar. Estoy ejerciendo mi derecho de guardar silencio. Deseo hablar con un abogado/a tan pronto como sea posible.\u201d No es necesario dar ninguna explicaci\u00f3n.</li>
          <li><strong>Ojo:</strong> Si est\u00e1 en libertad condicional con una condici\u00f3n de b\u00fasqueda, las autoridades policiales pueden ingresar a su hogar.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
          <li>Immigrant Defense Project (Proyecto de Defensa de los Inmigrantes)</li>
        </ul>

        <h3>Necesito un abogado/a</h3>

        <h4>Sus derechos</h4>
        <ul>
          <li>Si es arrestado por la polic\u00eda, tiene el derecho a un abogado/a dado por el gobierno, y debe pedir uno de inmediato. Tambi\u00e9n tiene el derecho a una llamada telef\u00f3nica local y privada dentro de un periodo razonable de tiempo desde su arresto. La polic\u00eda debe brindarle privacidad y no debe escuchar su conversaci\u00f3n si es a un abogado/a.</li>
          <li>Si lo detiene ICE o la Oficina de Aduanas y Protecci\u00f3n Fronteriza (CBP), tiene el derecho de contratar a un abogado/a, pero el gobierno no est\u00e1 requerido a darle uno. Puede pedir que le den una lista de proveedores de servicios de asesor\u00eda legal gratuitos o a bajo costo.</li>
          <li>Si es detenido por ICE, tiene el derecho de llamar a un abogado/a o su familia, y tiene el derecho de ser visitado por un abogado/a en detenci\u00f3n. Tambi\u00e9n tiene el derecho de que su abogado/a le acompa\u00f1e en cualquier audiencia ante un juez de inmigraci\u00f3n. Y tiene derecho de comunicarse con su consulado o pedirle a un oficial que le informe a su consulado sobre su detenci\u00f3n.</li>
          <li>Tiene el derecho de no hablar con un polic\u00eda o un agente de ICE, de no firmar ning\u00fan documento y de no tomar decisiones sin un abogado/a.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
          <li>Immigration Advocates Network (Directorio Nacional de Servicios Legales de Inmigraci\u00f3n)</li>
          <li>Una lista de la informaci\u00f3n de contacto de organizaciones legales que ayudan a las personas inmigrantes</li>
        </ul>

        <h3>He sido detenido cerca de la frontera por la Patrulla Fronteriza</h3>

        <h4>C\u00f3mo reducir el riesgo para usted mismo</h4>
        <ul>
          <li>Mantenga la calma cuando interact\u00fae con oficiales de inmigraci\u00f3n. No mienta ni provea documentos falsos.</li>
          <li>Nunca huya de un puesto de control migratorio.</li>
        </ul>

        <h4>Sus derechos</h4>
        <ul>
          <li>Tiene el derecho a permanecer callado. Tambi\u00e9n puede decirle al agente que solo responder\u00e1 a preguntas en presencia de un abogado/a, sin importar su ciudadan\u00eda o su estatus migratorio.</li>
          <li>No es requerido que conteste preguntas acerca de su estatus migratorio. Una excepci\u00f3n limitada existe para las personas que tienen permiso de estar en los EE.UU. por una raz\u00f3n especial y por un periodo limitado de tiempo (por ejemplo, una persona \u201cno inmigrante\u201d con una visa). Dichas personas deben proveer informaci\u00f3n sobre su estatus migratorio si se les pregunta.</li>
          <li>Por lo general, un agente de la Patrulla Fronteriza no puede detenerlo/la a menos que tenga una \u201csospecha razonable\u201d de que est\u00e9 cometiendo o haya cometido una violaci\u00f3n de la ley migratoria o federal.</li>
          <li>Un agente de inmigraci\u00f3n no puede arrestarlo/la sin \u201ccausa probable.\u201d Esto significa que el agente debe poseer hechos sobre usted que hagan probable que est\u00e9 cometiendo o haya cometido una violaci\u00f3n de la ley migratoria o federal.</li>
          <li>En puestos de control migratorio, los agentes no necesitan ninguna sospecha para detenerlo/la y hacerle preguntas, pero sus preguntas deben ser breves y relacionadas a verificar su estatus migratorio. Tambi\u00e9n pueden inspeccionar visualmente su veh\u00edculo.</li>
        </ul>

        <h4>Qu\u00e9 esperar</h4>
        <ul>
          <li>Las personas que hayan entrado a los EE.UU. sin ser inspeccionados por un oficial de inmigraci\u00f3n pueden estar sujetas a deportaciones aceleradas conforme a ciertos criterios. Si teme a una persecuci\u00f3n de ser regresado a su pa\u00eds de origen, debe informarle inmediatamente a los agentes de inmigraci\u00f3n de su miedo.</li>
          <li>En controles fronterizos, las autoridades federales no necesitan una orden judicial ni siquiera una sospecha de un delito para llevar a cabo lo que las cortes han llamado una \u201crevisi\u00f3n rutinaria,\u201d como registrar equipaje o un veh\u00edculo.</li>
          <li>Si un agente le pide documentos, lo que necesita proporcionar difiere dependiendo de su estatus migratorio. Los ciudadanos estadounidenses no tienen que llevar pruebas de ciudadan\u00eda si est\u00e1n dentro de los EE.UU. Si usted no es ciudadano y tiene documentos migratorios v\u00e1lidos y es mayor de los 18 a\u00f1os de edad, la ley requiere que usted lleve esos documentos consigo. Si un agente de inmigraci\u00f3n le pide que se los muestre, debe ense\u00f1\u00e1rselos. Si usted es una persona inmigrante sin documentos, puede rehusar la petici\u00f3n del agente, aunque el agente podr\u00eda entonces hacerle m\u00e1s preguntas.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
        </ul>

        <h3>Fui detenido por la polic\u00eda, ICE, o la Oficina de Aduanas y Protecci\u00f3n Fronteriza (CBP) en tr\u00e1nsito</h3>

        <h4>C\u00f3mo reducir el riesgo para usted mismo</h4>
        <ul>
          <li>Mantenga la calma. No corra, discuta ni obstruya al oficial o agente. Mantenga las manos alzadas donde puedan verse.</li>
          <li>Si est\u00e1 manejando un auto, encienda las luces intermitentes de emergencia, reduzca la velocidad y estaci\u00f3nese la carretera en un lugar seguro tan pronto sea posible. Apague el motor, prenda la luz interna, abra la ventana parcialmente y ponga las manos en el volante. Si se lo piden, mu\u00e9strele a la polic\u00eda su licencia de manejar, registro y prueba de seguro.</li>
          <li>Si usted no es un ciudadano estadounidense y un agente de inmigraci\u00f3n pide sus documentos, usted debe mostr\u00e1rselos si los tiene consigo. Si usted es mayor de 18 a\u00f1os de edad, lleve sus documentos migratorios v\u00e1lidos consigo en todo momento. Si no tiene documentos migratorios, tiene derecho a permanecer callado.</li>
        </ul>

        <h4>Sus derechos</h4>

        <h5>En un auto:</h5>
        <ul>
          <li>Los conductores y pasajeros tienen el derecho a permanecer callados. Si usted es un pasajero, puede preguntar si puede irse. Si el agente dice que s\u00ed, m\u00e1rchese con calma.</li>
          <li>Si un polic\u00eda o agente de inmigraci\u00f3n pide revisar el interior de su auto, usted puede negarse a la revisi\u00f3n. Pero si la polic\u00eda cree que su auto contiene evidencia de un crimen, su auto puede ser registrado sin su consentimiento.</li>
          <li>La polic\u00eda puede ordenarle a usted y a sus pasajeros a que salgan del veh\u00edculo por seguridad. Obedezca y salga tranquilamente si se lo piden.</li>
          <li>Adem\u00e1s de la polic\u00eda, la Oficina de Aduanas y Protecci\u00f3n Fronteriza (CBP) lleva a cabo \u201cpatrullas ambulantes\u201d en el interior de los EE.UU. parando a motoristas. CBP debe tener una sospecha razonable que el conductor o los pasajeros en el carro han cometido una violaci\u00f3n migratoria o un crimen federal.</li>
          <li>Cualquier arresto o detenci\u00f3n prolongada por parte de CBP requiere que el agente tenga causa probable. Esto significa que el agente debe poseer hechos sobre usted que hagan probable que est\u00e9 cometiendo o haya cometido una violaci\u00f3n de la ley migratoria o federal. Usted puede preguntarle a los agentes en qu\u00e9 basan su causa probable y deben dec\u00edrselo. En esta situaci\u00f3n, tanto el conductor como los pasajeros tienen el derecho a permanecer callados y no contestar preguntas sobre sus estatus migratorio.</li>
        </ul>

        <h5>En un avi\u00f3n:</h5>
        <ul>
          <li>Un piloto puede negarse a transportar a un pasajero si el piloto cree de forma razonable que el pasajero es una amenaza para la seguridad del vuelo. Un piloto no puede, sin embargo, interrogarlo/la ni negarse a permitirlo/la a bordo del vuelo por prejuicios basados en su religi\u00f3n, raza, origen nacional, g\u00e9nero, etnicidad, o creencias pol\u00edticas.</li>
          <li>Si usted cree que est\u00e1 por error en una lista de exclusi\u00f3n a\u00e9rea, debe comunicarse con la TSA y someter una petici\u00f3n usando el Traveler Redress Inquiry Program.</li>
        </ul>

        <h5>En autobuses y trenes:</h5>
        <ul>
          <li>Agentes de CBP pueden abordar autobuses y trenes, en la estaci\u00f3n o durante el viaje, en los Estados Unidos en la regi\u00f3n que se encuentra dentro de 100 millas de la frontera. M\u00e1s de un agente t\u00edpicamente aborda. Los agentes hacen preguntas a los pasajeros sobre su estatus migratorio, les piden muestren sus documentos migratorios, o ambos.</li>
          <li>Estas preguntas deben ser breves y relacionadas a verificar la presencia legal del pasajero en los EE.UU. Usted no est\u00e1 obligado a responder y puede decir simplemente que no desea hacerlo. Como siempre, tiene el derecho a permanecer callado.</li>
        </ul>

        <h4>Si cree que sus derechos han sido violados</h4>
        <ul>
          <li>Apunte todo lo que pueda recordar incluyendo los n\u00fameros de las placas de los agentes y las placas de los veh\u00edculos de patrulla, de qu\u00e9 agencia eran los oficiales y cualquier otro detalle. Obtenga informaci\u00f3n para poder contactar a personas hayan sido testigo de los hechos.</li>
          <li>Si resulta lesionado, busque atenci\u00f3n m\u00e9dica de inmediato y tome fotograf\u00edas de sus lesiones.</li>
          <li>Av\u00edsele a su abogado ya que esta informaci\u00f3n podr\u00eda ayudar a su caso de inmigraci\u00f3n.</li>
          <li>Presente una denuncia por escrito ante la divisi\u00f3n de asuntos internos o la junta civil que examina quejas de la agencia que haya violado sus derechos. En la mayor\u00eda de los casos, puede presentar una denuncia de forma an\u00f3nima si as\u00ed lo desea.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
        </ul>

        <h3>Estoy detenido mientras mi caso de inmigraci\u00f3n est\u00e1 en proceso</h3>

        <h4>Sus derechos</h4>
        <ul>
          <li>Algunas personas que est\u00e1n detenidas mientras su caso est\u00e1 en proceso son elegibles a ser puestos en libertad bajo fianza o con otras condiciones de comparecencia.</li>
          <li>Usted tiene el derecho de llamar a un abogado/a o a su familia, y tiene el derecho de ser visitado por un abogado/a mientras est\u00e1 en detenci\u00f3n.</li>
        </ul>

        <h4>\u00bfQu\u00e9 hacer si est\u00e1 detenido?</h4>
        <ul>
          <li>Si se le niega ponerlo en libertad despu\u00e9s de ser arrestado por una violaci\u00f3n migratoria, puede pedir una audiencia de fianza ante un juez de inmigraci\u00f3n. En muchos casos, un juez de inmigraci\u00f3n puede ordenar que se le ponga en libertad o que se reduzca su fianza.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
          <li>Immigrant Defense Project (Proyecto de Defensa de los Inmigrantes)</li>
        </ul>

        <h3>He sido arrestado y necesito impugnar una orden de deportaci\u00f3n</h3>

        <h4>Sus derechos</h4>
        <ul>
          <li>Usted tiene el derecho a una audiencia para impugnar una orden de deportaci\u00f3n a menos que usted renuncie a su derecho a una audiencia, firme algo llamado un \u201cStipulated Removal Order,\u201d o acepte una \u201csalida voluntaria.\u201d</li>
          <li>Usted tiene derecho a un abogado/a, pero el gobierno no tiene que proveerle uno. Si usted no tiene abogado/a, puede pedir una lista de proveedores de servicios de asesor\u00eda legal gratuitos o a bajo costo. Tambi\u00e9n puede pedir a la corte que le den tiempo para conseguir a un abogado.</li>
        </ul>

        <h4>Qu\u00e9 hacer si lo arrestan</h4>
        <ul>
          <li>Si se le dice que no tiene el derecho de ver un juez de inmigraci\u00f3n, debe hablar con un abogado/a inmediatamente. Hay ciertos casos en los que una persona puede no tener el derecho a presentar su caso ante un juez de inmigraci\u00f3n. Pero aun si se le dice que esta es su situaci\u00f3n, puede pedir hablar con un abogado/a de inmediato porque los oficiales de inmigraci\u00f3n no siempre conocen o informan de las excepciones que pueden aplicar en cada caso.</li>
          <li>Si teme a una persecuci\u00f3n o tortura en su pa\u00eds de origen, d\u00edgaselo a un agente de inmigraci\u00f3n y contacte a un abogado/a inmediatamente. Tiene derechos adicionales si tiene este temor.</li>
        </ul>

        <h4>Recursos adicionales</h4>
        <ul>
          <li>Si necesita m\u00e1s informaci\u00f3n, puede contactar a su afiliado local de la ACLU</li>
          <li>National Immigration Law Center (El Centro Nacional de la Ley de Inmigraci\u00f3n)</li>
          <li>Immigrant Legal Resource Center (El Centro de Recursos Legales para Inmigrantes)</li>
          <li>American Immigration Lawyers Association (Asociaci\u00f3n Americana de Abogados de Inmigraci\u00f3n)</li>
          <li>Immigrant Defense Project (Proyecto de Defensa de los Inmigrantes)</li>
        </ul>

        <h4>\u00bfC\u00f3mo localizar a un ser querido en detenci\u00f3n?</h4>
        <ul>
          <li>Puede buscar en: https://locator.ice.gov</li>
          <li>Tambi\u00e9n puede encontrar el n\u00famero telef\u00f3nico de cada centro de detenci\u00f3n en: https://www.ice.gov/detention-facilities</li>
        </ul>

        <h4>\u00bfC\u00f3mo saber si hay una cita en la corte?</h4>
        <ul>
          <li>Puede llamar al 1-800-898-7180, necesitar\u00e1 el n\u00famero \u201cA\u201d de la persona</li>
          <li>Puede buscar por internet en: https://acis.eoir.justice.gov/es/</li>
          <li>Puede tardar algunos d\u00edas para que el n\u00famero A sea incluido en el sistema</li>
        </ul>

        <h3>Quiero compartir esta informaci\u00f3n en las redes sociales</h3>
        <p>Si desea compartir esta informaci\u00f3n con otros, hemos creado material visual que puede descargar y compartir en las redes sociales. Tambi\u00e9n hemos creado im\u00e1genes que puede descargar a su tel\u00e9fono y poner como fondo de pantalla (lock screen) para que sin tener que desbloquear su tel\u00e9fono pueda ver f\u00e1cilmente sus derechos si la polic\u00eda o ICE lo detienen.</p>

        <p><em>Cortes\u00eda de la ACLU</em></p>
      `
    }
    ,{
      id: "immigration-legal-services",
      number: 26,
      title: "Immigration Legal Services Directory",
      subtitle: "South Carolina Legal Resources",
      icon: "people",
      keywords: ["immigration", "legal services", "directory", "lawyer", "attorney", "help", "DACA", "TPS", "asylum", "catholic charities", "legal aid", "south carolina"],
      content: `
        <p>The following organizations provide immigration legal services in South Carolina. This directory is provided as a resource and does not constitute an endorsement or recommendation by McGuire Law.</p>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Carolina Immigrant Alliance</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Family-based petitions, Naturalization/Citizenship, Temporary Protected Status (TPS)</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 1067 Oakland Avenue, Rock Hill, SC 29732</p>
          <p><strong>Contact:</strong> <a href="tel:+18036195012">(803) 619-5012</a> | <a href="https://carolinaimmigrantalliance.org/" target="_blank" rel="noopener">https://carolinaimmigrantalliance.org/</a> | <a href="mailto:judy@carolinaimmigrantalliance.org">judy@carolinaimmigrantalliance.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Catholic Charities Immigration Services (Greenville Office)</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Employment-based immigrant and non-immigrant petitions, Family-based petitions, NACARA, Naturalization/Citizenship, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 2300 Old Buncombe Rd. , Greenville, SC 29609</p>
          <p><strong>Contact:</strong> <a href="tel:+18642740141">(864) 274-0141</a> | <a href="http://charitiessc.org/immigration-legal-services" target="_blank" rel="noopener">http://charitiessc.org/immigration-legal-services</a> | <a href="mailto:vgarcia@charlestondiocese.org">vgarcia@charlestondiocese.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Catholic Charities Immigration Services (Mt. Pleasant Office)</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Family-based petitions, NACARA, Naturalization/Citizenship, Special Immigrant Juvenile Status, T visas, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS, Representation at Asylum Interviews (Credible Fear Interviews, Reasonable Fear Interviews)</p>
          <p><strong>Location:</strong> 127 St Philip Street, Charleston, SC 29403</p>
          <p><strong>Contact:</strong> <a href="tel:+18433880089">(843) 388-0089</a> | <a href="https://charitiessc.org/immigration-legal-services" target="_blank" rel="noopener">https://charitiessc.org/immigration-legal-services</a> | <a href="mailto:eguerrero@charlestondiocese.org">eguerrero@charlestondiocese.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Catholic Charities Immigration Services-Rock Hill Office</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Employment-based immigrant and non-immigrant petitions, Family-based petitions, Habeas Corpus, Humanitarian Parole, NACARA, Naturalization/Citizenship, Removal hearings, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS, Representation before the Immigration Court, Representation before the Board of Immigration Appeals (BIA), Federal court appeals</p>
          <p><strong>Location:</strong> 524 Charlotte Ave , Rock Hill, SC 29730</p>
          <p><strong>Contact:</strong> <a href="tel:+18033277144">8033277144</a> | <a href="http://charitiessc.org/immigration-legal-services" target="_blank" rel="noopener">http://charitiessc.org/immigration-legal-services</a> | <a href="mailto:rturner@charlestondiocese.org">rturner@charlestondiocese.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Charleston Legal Access</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Asylum applications, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Employment-based immigrant and non-immigrant petitions, Family-based petitions, Naturalization/Citizenship, Removal hearings, Special Immigrant Juvenile Status, T visas, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS, Representation at Asylum Interviews (Credible Fear Interviews, Reasonable Fear Interviews), Representation before the Immigration Court</p>
          <p><strong>Location:</strong> 1816 Success St building A unit 102,, North Charleston, SC 29405</p>
          <p><strong>Contact:</strong> <a href="tel:+18436405980">843-640-5980</a> | <a href="https://www.charlestonlegalaccess.org/" target="_blank" rel="noopener">https://www.charlestonlegalaccess.org/</a> | <a href="mailto:info@charlestonlegalaccess.org">info@charlestonlegalaccess.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Immigrant Connection - Greenville Multicultural Church</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Family-based petitions, Humanitarian Parole, Naturalization/Citizenship, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 103 S. Texas Ave, Greenville, SC 29611</p>
          <p><strong>Contact:</strong> <a href="tel:+18642950945">(864) 295-0945</a> | <a href="https://greenvillemulticultural.com/IC" target="_blank" rel="noopener">https://greenvillemulticultural.com/IC</a> | <a href="mailto:immigrantconnectiongm@gmail.com">immigrantconnectiongm@gmail.com</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Immigrant Connection - Spartanburg</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Family-based petitions, Humanitarian Parole, Naturalization/Citizenship, Temporary Protected Status (TPS), Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 203 South Main Street, Ducan, SC 29334</p>
          <p><strong>Contact:</strong> <a href="tel:+18643103109">(864) 310-3109</a> | <a href="https://www.nuevagduncan.com/immigration-connection" target="_blank" rel="noopener">https://www.nuevagduncan.com/immigration-connection</a> | <a href="mailto:immigrantconnectionsw@gmail.com">immigrantconnectionsw@gmail.com</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>Immigrant Connection at El Camino</h4>
          <p><strong>Areas of legal assistance:</strong> Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Family-based petitions, Naturalization/Citizenship, T visas, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS, Representation before the Board of Immigration Appeals (BIA)</p>
          <p><strong>Location:</strong> 103 Crescent Ridge Drive, Greenville, SC 29615-2118</p>
          <p><strong>Contact:</strong> <a href="tel:+18643979283">(864) 397-9283</a> | <a href="http://www.elcamin.webs.com" target="_blank" rel="noopener">http://www.elcamin.webs.com</a> | <a href="mailto:immigrantconnection@scwesleyan.com">immigrantconnection@scwesleyan.com</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>SCVAN</h4>
          <p><strong>Areas of legal assistance:</strong> U visas</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> PO , Spartanburg, SC 29301</p>
          <p><strong>Contact:</strong> <a href="tel:+18643126453">8643126453</a> | <a href="http://www.scvan.org" target="_blank" rel="noopener">http://www.scvan.org</a> | <a href="mailto:lauren@scvan.org">lauren@scvan.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Charleston Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 2803 Carner Ave, Charleston, SC 29405</p>
          <p><strong>Contact:</strong> <a href="tel:+18437207044">(843) 720-7044</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Columbia Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 2109 Bull St, Columbia, SC 29201</p>
          <p><strong>Contact:</strong> <a href="tel:+18037999668">(803) 799-9668</a> | <a href="https://www.sclegal.org" target="_blank" rel="noopener">https://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Conway Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Location:</strong> 1201 B Creel Street, Wing A-1, Conway, SC 29527</p>
          <p><strong>Contact:</strong> <a href="tel:+18433818182">(843) 381-8182</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Florence Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 320 S. Coit St, Florence, SC 29501</p>
          <p><strong>Contact:</strong> <a href="tel:+18434139500">(843) 413-9500</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Greenville Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 701 S. Main St., Greenville, SC 29601</p>
          <p><strong>Contact:</strong> <a href="tel:+18646793232">(864) 679-3232</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Greenwood Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 316 W. Cambridge Ave, Greenwood, SC 29646</p>
          <p><strong>Contact:</strong> <a href="tel:+18642234879">(864) 223-4879</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Orangeburg Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Location:</strong> 126 Associate Pkwy, PO Box 1646, Orangeburg, SC 29116</p>
          <p><strong>Contact:</strong> <a href="tel:+18035330116">(803) 533-0116</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Pee Dee Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 320 South Coit St., Florence, SC 29501</p>
          <p><strong>Contact:</strong> <a href="tel:+18434139500">(843) 413-9500</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Rock Hill Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 214 Johnston St, Rock Hill, SC 29731</p>
          <p><strong>Contact:</strong> <a href="tel:+18033279001">(803) 327-9001</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Legal Services (Spartanburg Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas, U visas, Violence Against Women Act (VAWA) petitions</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms, Filings with USCIS</p>
          <p><strong>Location:</strong> 148 E. Main St, Spartanburg, SC 29306</p>
          <p><strong>Contact:</strong> <a href="tel:+18645820369">(864) 582-0369</a> | <a href="http://www.sclegal.org" target="_blank" rel="noopener">http://www.sclegal.org</a></p>
        </div>

        <div class="callout" style="margin-bottom: var(--space-md);">
          <h4>South Carolina Victim Assistance Network - Immigrant Victim Program (Columbia Office)</h4>
          <p><strong>Areas of legal assistance:</strong> T visas</p>
          <p><strong>Types of legal assistance:</strong> Help completing forms</p>
          <p><strong>Location:</strong> PO Box 212863, Columbia, SC 29221</p>
          <p><strong>Contact:</strong> <a href="tel:+18037501200">(803) 750-1200</a> | <a href="http://www.scvan.org" target="_blank" rel="noopener">http://www.scvan.org</a> | <a href="mailto:lauren@scvan.org">lauren@scvan.org</a></p>
        </div>
      `
    }
    ,{
      id: "resources",
      number: 14,
      title: "Resources",
      subtitle: null,
      icon: "link",
      keywords: ["resources", "help", "organizations", "hotline", "legal aid", "ACLU", "bar association", "lawyer referral"],
      content: `
        <div class="resource-group">
          <h3 class="resource-group-title">McGuire Law</h3>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">McGuire Law</div>
              <div class="resource-link-detail">Phone: <a href="tel:+18884995738">(888) 499-5738</a> \u2014 Free 24/7/365</div>
              <div class="resource-link-detail">Website: <a href="https://McGuireLawSC.com" target="_blank" rel="noopener">McGuireLawSC.com</a></div>
            </div>
          </div>
        </div>

        <div class="resource-group">
          <h3 class="resource-group-title">ACLU of South Carolina</h3>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">ACLU of South Carolina</div>
              <div class="resource-link-detail">Website: <a href="https://www.aclusc.org" target="_blank" rel="noopener">www.aclusc.org</a></div>
              <div class="resource-link-detail">Mobile Justice App: Download from App Store or Google Play to record encounters</div>
            </div>
          </div>
        </div>

        <div class="resource-group">
          <h3 class="resource-group-title">Legal Resources</h3>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">SC Legal Resource Finder</div>
              <div class="resource-link-detail"><a href="https://sclegalservices.org" target="_blank" rel="noopener">sclegalservices.org</a></div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">South Carolina Appleseed Legal Justice Center</div>
              <div class="resource-link-detail"><a href="https://www.scjustice.org" target="_blank" rel="noopener">www.scjustice.org</a></div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">Charleston Legal Access</div>
              <div class="resource-link-detail"><a href="https://www.charlestonlegalaccess.org" target="_blank" rel="noopener">www.charlestonlegalaccess.org</a></div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">SC Bar Lawyer Referral</div>
              <div class="resource-link-detail">Phone: (803) 799-7100</div>
              <div class="resource-link-detail">Website: <a href="https://www.scbar.org" target="_blank" rel="noopener">www.scbar.org</a></div>
            </div>
          </div>
        </div>

        <div class="resource-group">
          <h3 class="resource-group-title">Immigration Resources</h3>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">AILA Lawyer Search</div>
              <div class="resource-link-detail"><a href="https://www.aila.org" target="_blank" rel="noopener">www.aila.org</a></div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">National Immigration Law Center</div>
              <div class="resource-link-detail"><a href="https://www.nilc.org" target="_blank" rel="noopener">www.nilc.org</a></div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">American Immigration Lawyers Association</div>
              <div class="resource-link-detail">Phone: (800) 954-0254</div>
            </div>
          </div>
        </div>

        <div class="callout" style="text-align:center; margin: var(--space-lg) 0;">
          <p><strong>Full immigration directory <a href="#immigration-legal-services">HERE</a></strong></p>
          <ul style="list-style:none; padding:0;">
            <li><a href="#derechos-inmigrantes"><strong>Derechos de los Inmigrantes</strong></a> — Conozca Sus Derechos (en Español)</li>
            <li><a href="#immigration-legal-services"><strong>Immigration Legal Services Directory</strong></a> — South Carolina legal resources</li>
          </ul>
        </div>

        <div class="resource-group">
          <h3 class="resource-group-title">National Resources</h3>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">National Lawyers Guild</div>
              <div class="resource-link-detail">Phone: (212) 679-5100</div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">U.S. Commission on Civil Rights</div>
              <div class="resource-link-detail">Phone: (800) 552-6843</div>
            </div>
          </div>
          <div class="resource-link">
            <div>
              <div class="resource-link-name">ACLU National</div>
              <div class="resource-link-detail"><a href="https://www.aclu.org" target="_blank" rel="noopener">www.aclu.org</a></div>
            </div>
          </div>
        </div>
      `
    }
    ,{
      id: "red-card-amharic",
      number: 26,
      title: "Amharic (አማርኛ)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["amharic", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Amharic (አማርኛ)</h4>        <p>ሕገ መንግሥታዊ መብት አሎት፡-</p>
        <p>የኢሚግሬሽን ወኪሎች  በሮን ሲያንኳኩ በሩ ን አይክፈቱ።</p>
        <p>የኢሚግሬሽን ወኪሎች እርስዎን ለማነጋገር ከሞከሩ ምንም ዓይነት ጥያቄ አይመልሱላቸው</p>
        <p>። ዝም የማለት መብት አሎት።</p>
        <p>መጀመሪያ ጠበቃን ሳያናግሩ ምንም ነገር አይፈርሙ። ከጠበቃ ጋር የመነጋገር መብት</p>
        <p>አሎት።</p>
        <p>ከቤትዎ ውጭ ከሆኑ፣ ለመሄድ ነፃ እ ንደሆኑ የኢሚግሬሽን ወኪሎቹን ይጠይቁ እና አዎ ካሉ፣</p>
        <p>በእርጋታ ይሂዱ።</p>
        <p>ይህንን ካርድ ለወኪሉ ይስጡት። በቤትዎ ውስጥ ከሆኑ, ካርዱን በመስኮቱ በኩል ያሳዩ</p>
        <p>ወይም በበሩ ስር ያንሸራትቱ.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-arabic",
      number: 27,
      title: "Arabic (العربية)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["arabic", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Arabic (العربية)</h4>
        <p>لديك حقوق دستورية</p>
        <p>لا تفتح الباب إذا كان شرطي الهجرة يطرق الباب. •</p>
        <p>لا تجيب على أي أسئلة يسئلها شرطة الهجرة إذا حاولوا التحدث إليك. لديك الحق •</p>
        <p>في التزام الصمت.</p>
        <p>لا توقع أي شيء دون التحدث  أولا إلى محامي. لك الحق في التحدث الى محامي.•</p>
        <p>إذا کنت خارج بیتك، اسأل الشرطي إذا کان لدیك حریة المغادرة، وإذا قال نعم، •</p>
        <p>غادر بهدوء.</p>
        <p>أعطي هذه البطاقة للشرطي. إذا كنت داخل منزلك، اعرض البطاقة من خلال •</p>
        <p>النافذة أو مررها من تحت الباب.</p>
        <p>لديك حقوق دستورية:</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-armenian",
      number: 28,
      title: "Armenian (Հայերեն)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["armenian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Armenian (Հայերեն)</h4>        <p>Դուք սահմանադրական իրավունքներ ունեք։</p>
        <p>ՄԻ՛ ԲԱՑԵՔ ԴՈՒՌԸ եթե ներգաղթի գործակալը թակում է ձեր դուռը։</p>
        <p>ՄԻ՛ ՊԱՏԱՍԽԱՆԵՔ ներգաղթի գործակալի ՈՉ ՄԻ ՀԱՐՑԻ եթե նրանք</p>
        <p>փորձեն խոսել ձեզ հետ։ Դուք իրավունք ունեք լուռ մնալու։</p>
        <p>ՄԻ՛ ՍՏՈՐԱԳՐԵՔ ՈՉ ՄԻ ԲԱՆ առանց նախապես խոսելու ձեր</p>
        <p>իրավաբանի հետ։ Դուք իրավունք ունեք իրավաբանի հետ խոսելու։</p>
        <p>Եթե դուք ձեր տնից դուրս եք, հարցրե՛ք ներգաղթի գործակալին եթե</p>
        <p>ազատ եք հեռանալու. եթե նրանք ասեն «այո», հանդարտ կերպով</p>
        <p>հեռացե՛ք։</p>
        <p>ՏՎԵ՛Ք ԱՅՍ ԹՈՒՂԹԸ ԳՈՐԾԱԿԱԼԻՆ։ Եթե ձեր տան ներսում եք, նրանց</p>
        <p>ցույց տվե՛ք այս թուղթը պատուհանից կամ սահեցրե՛ք դռան ներքեվից։</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-bangla",
      number: 29,
      title: "Bangla",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["bangla", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Bangla</h4>        <p>আপনার যে সকল সাংবিধাবনক অবধকার আছে:</p>
        <p>েবি যকাছনা অবিিাসন এছেন্্ট িরোয় কড়া নাছড় তাহছল দরজা খুলবেন না।</p>
        <p>অবিিাসন এছেন্্ট েবি আপনার সাছে কো িলার যেষ্্টা কছরন তাহছল তাছির</p>
        <p>কো�াবনা প্্রব্ননর উত্তর কোদবেন না। আপনার নীরি োকার অবধকার আছে।</p>
        <p>প্রেছে আইনেীিীর সাছে কো না িছল কো�াবনা ক�ছুবে স্্বাক্ষর �রবেন না।</p>
        <p>আপনার একেন আইনেীিীর সাছে কো িলার অবধকার আছে।</p>
        <p>আপবন েবি আপনার িাবড়র বিতছর োছকন, তাহছল এছেন্্টছক জেজ্াসা করুন যে,</p>
        <p>আপবন যেছত পারছিন বকনা; েবি তারা হ্যযাা িছল, তাহছল শান্তিাছি েছল োন।</p>
        <p>এবজন্্টব� এই �ার্ ্ড টি কদন। েবি আপবন আপনার িাবড়র বিতছর োছকন তছি</p>
        <p>কার্ ্ড টি োনালা বিছয় যিখান এিং িরোর বনে বিছয় িাইছর বিন।</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-bosnian",
      number: 30,
      title: "Bosnian",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["bosnian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Bosnian</h4>
        <p>Imate ustavna prava:</p>
        <ul>
          <li>NEMOJTE OTVARATI VRATA ako Vam imigracijski službenik kuca</li>
        </ul>
        <p>na vrata.</p>
        <ul>
          <li>NEMOJTE ODGOVARATI NI NA JEDNO PITANJE imigracijskog</li>
        </ul>
        <p>službenika ako pokušava da razgovara s Vama. Imate pravo da</p>
        <p>ćutite.</p>
        <ul>
          <li>NEMOJTE NIŠTA POTPISIVATI prije nego što razgovarate sa</li>
        </ul>
        <p>advokatom. Imate pravo da razgovarate sa advokatom.</p>
        <ul>
          <li>Ako ste van svog doma, pitajte službenika da li smijete da odete.</li>
        </ul>
        <p>Ako kaže da smijete, udaljite se mirno.</p>
        <ul>
          <li>DAJTE OVU KARTICU SLUŽBENIKU. Ako ste u svom domu,</li>
        </ul>
        <p>pokažite karticu kroz prozor ili je provucite ispod vrata.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-burmese",
      number: 31,
      title: "Burmese",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["burmese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Burmese</h4>        <p>သင့််�တွွင့်� ဖွဲ့့�စည်း��ပုံံ�အခြေ�ေေံဥပုံခြေ�ဆိုု�င့်�ရာာ အေွင့််�အခြေရာ�များ�ာ� ရှိိုပုံါသည်း�</p>
        <p>လူူဝင့်�များုကြီး�း�ကြ�ပုံ�ခြေရာ� အရာာရှိို� တွ ံေါ�လူာခြေေါ��လူှင့်� များဖွဲ့ွင့််�ခြေပုံ�ပုံါနှိင့််�။</p>
        <p>သင့််�� ု� စ�ာ�ခြေ�ပုံာဆိုု�ရာန်�ကြီး�ု��ပုံများ��လူာပုံါ� များည်း�သည်း်�ခြေများ�ေွန်��� ု�များှ �ပုံန်�လူည်း�ခြေ�ဖွဲ့ကြ�ာ��ေင့်�� များ</p>
        <p>�ပုံ�လူ�ပုံ�ပုံါနှိင့််�။ သင့််�တွွင့်� နှိ�တွ�ဆိုုတွ�ခြေန်ပုံု�င့်�ေွင့််�ရှိိုပုံါသည်း�။</p>
        <p>ခြေရှိိ�ခြေန်တွစ�ဦး�တွစ�ခြေ�ာ��နှိင့််� ဦး�စွာတွု�င့်�ပုံင့်��ေင့်��များရှိိုဘဲ� များည်း�သည်း်�အရာာ�ု�များှ လူ��များိတွ�များထိုးု��ပုံါ</p>
        <p>နှိင့််�။ သင့််�တွွင့်� ခြေရှိိ�ခြေန်တွစ�ဦး�တွစ�ခြေ�ာ��နှိင့််� ခြေ�ပုံာဆိုု�တွု�င့်�ပုံင့်�ပုံု�င့်�ေွင့််� ရှိိုပုံါသည်း�။</p>
        <p>ခြေန်အုများ��ပုံင့်�ပုံသု�ခြေရာာ��ရှိိုခြေန်ပုံါ� အရာာရှိိုအာ� သင့်� လူွပုံ�လူပုံ�စွာထိုးွ��ေွာသွာ�ေ ွင့််� ရှိိုများရှိို ခြေများ��များန်��</p>
        <p>ပုံါ။ ထိုးွ��ေွာသွာ�ေ ွင့််�ရှိိုပုံါ� ခြေအ�ခြေဆို�စွာ ထိုးွ��ေွာသွာ�ပုံါ။</p>
        <p>ဤ����ပုံာ�အာ� အရာာရှိို� ု� �ပုံသပုံါ။ အ��� ၍ သင့်�သည်း� အုများ�ထိုး�တွွင့်�ရှိိုခြေန်ပုံါ� ဤ����ပုံာ�</p>
        <p>အာ� �ပုံူတွင့်��ခြေပုံါ��များိတွစ�ဆိုင့််��ပုံသပုံါ၊ သု�များဟု�တွ� တွံေါ�ခြေအာ��များိတွစ�ဆိုင့််� ထိုး�တွ�ခြေပုံ�၍ �ပုံသ</p>
        <p>ပုံါ။</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-cantonese",
      number: 32,
      title: "Cantonese",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["cantonese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Cantonese</h4>        <p>你享有憲法所賦予的權利：</p>
        <p>如果移民官員喺門外敲門，請唔好開門。</p>
        <p>如果移民官員試圖和你交談，請唔好回答任何問題。 你有權保持沉默。</p>
        <p>喺未諮詢律師嘅情況下，請唔好簽署任何文件。 你有權同律師溝通。</p>
        <p>如果你喺屋企以外嘅地方， 請詢問移民官員你係咪可以離開， 如果佢哋回答</p>
        <p>「可以」 ， 請冷靜離開。</p>
        <p>請將此卡片交畀移民官員。 如果你喺屋企入面， 你可以通過窗口展示卡片，</p>
        <p>或由門下遞出卡片。</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-cape-verdean-creole",
      number: 33,
      title: "Cape Verdean Creole",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["cape verdean creole", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Cape Verdean Creole</h4>
        <p>Bu ten direitu konstitusional:</p>
        <ul>
          <li>KA BU ABRI PORTA si ajenti di imigrason konkôu na pórta .</li>
          <li>KA BU RUSPONDI NINHUN PURGUNTA di ajenti di</li>
        </ul>
        <p>imigrason ses tenta pâpia ku bo. Bu ten direitu di fika en</p>
        <p>silénsiu.</p>
        <ul>
          <li>KA BU SINA NADA sen prumeru antis pâpia ku un</li>
        </ul>
        <p>adivogadu. Bu ten direitu di pâpia ku un adivogadu.</p>
        <ul>
          <li>Si bu sta fora di bu kasa, purgunta ajenti si bu sta livri pa</li>
        </ul>
        <p>bu bai si é fla sin, bai na mansu.</p>
        <ul>
          <li>DA AJENTI KEL KARTON LI. Si bu sta dentu di bu kasa,</li>
        </ul>
        <p>mostral karton pa janela ô pasal pa baxu porta.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-cebuano",
      number: 34,
      title: "Cebuano",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["cebuano", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Cebuano</h4>        <p>Ang Konstitusyon naghatag kanimo ug mga katungod:</p>
        <p>AYAW ABRIHI ANG PULTAHAN kon ang usa ka ahente sa imigrasyon magtuktok sa</p>
        <p>pultahan.</p>
        <p>AYAW TUBAGA ANG BISAN UNSANG MGA PANGUTANA gikan sa ahente sa</p>
        <p>imigrasyon kon sila mosulay sa pagpakigsulti kanimo. Aduna kay katungod nga</p>
        <p>magpabilin nga hilom.</p>
        <p>AYAW PAGPIRMA SA BISAN UNSANG DOKUMENTO nga wala una makig-estorya</p>
        <p>sa usa ka abogado. Ikaw adunay katungod sa pagkonsulta sa usa ka abogado.</p>
        <p>Kon ikaw anaa sa gawas sa imong balay, pangutan-a ang ahente kon mahimo ka na</p>
        <p>ba nga mobiya, ug kon sila moingon nga oo, mobiya ka nga malinawon.</p>
        <p>IHATAG KINI NGA KARD NGADTO SA AHENTE. Kon anaa ka sa sulod sa imong</p>
        <p>balay, ipakita ang kard diha sa bintana o isuksok kini sa ilawom sa pultahan.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-chinese-simplified",
      number: 35,
      title: "Chinese (Simplified) (中文(简体))",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["chinese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Chinese (Simplified) (中文(简体))</h4>        <p>您拥有宪法赋予的权力：</p>
        <p>如果移民调查员敲门，不要开门。</p>
        <p>如果移民调查员试图与您交谈，不要回答任何问题。</p>
        <p>您有权保持沉默。</p>
        <p>在跟律师沟通前，不要签署任何文件。 您有权要求跟</p>
        <p>律师谈话。</p>
        <p>如果您在户外， 询问调查员您是否可以离开。 如果他</p>
        <p>们说可以， 请冷静离开。</p>
        <p>将此卡片交给调查员。 如果您在家中， 请通过窗户展</p>
        <p>示这张卡片或将其从门缝下递出。</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-chinese-traditional",
      number: 36,
      title: "Chinese (中文(繁體))",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["chinese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Chinese (中文(繁體))</h4>
        <p>你有以下憲法賦與的權利：</p>
        <ul>
          <li>如移民局人員敲門，不要開門。</li>
          <li>如移民局人員想和你交談，不要回答任何問題。你有</li>
        </ul>
        <p>權保持緘默。</p>
        <ul>
          <li>未和律師諮詢之前，不要簽署任何文件。你有權和一</li>
        </ul>
        <p>名律師交談。</p>
        <ul>
          <li>如你在家外面，問移民局人員你是否可以離開，如他</li>
        </ul>
        <p>們答可以,請鎮靜地離開。</p>
        <ul>
          <li>出示此卡給移民局人員看。如你在家裡。可在窗口或</li>
        </ul>
        <p>門下面遞出去給他們看。</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-dari",
      number: 37,
      title: "Dari",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["dari", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Dari</h4>        <p>:شما حقوق قانونی دارید</p>
        <p>. یک مأمور مهاجرت بر دروازه شما می کوبد دروازه را باز نکنید اگر</p>
        <p>. اگر یک مأمور مهاجرت تلاش کند با شما صحبت کند. شما حقبه هیچ سوالی پاسخ ندهید دارید که سکوت کنید</p>
        <p>. بدون این که ابتدا با یک وکیل صحبت کنید. شما حق دارید که با یک هیچ چیزی را امضا نکنید وکیل مشورت کنید</p>
        <p>.اگر بیرون از خانه خود هستید، از مأمور بپرسید که آیا شما آزاد هستید که بروید. اگر بگوید بلی،  آرام محل را ترک کنید</p>
        <p>. اگر در داخل خانه خود هستید، کارت را از طریق کلکین نشاناین کارت را به مأمور بدهید. دهید یا آنرا از زیر دروازه بفرستید</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-french",
      number: 38,
      title: "French (Français)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["french", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>French (Français)</h4>
        <p>La constitution des États-Unis vous donne des droits :</p>
        <ul>
          <li>Si un agent d’immigration frappe chez vous, N’OUVREZ</li>
        </ul>
        <p>PAS LA PORTE.</p>
        <ul>
          <li>Si un agent d’immigration essaie de vous parler, NE</li>
        </ul>
        <p>REPONDEZ PAS A SES QUESTIONS. Vous avez le droit</p>
        <p>de garder le silence.</p>
        <ul>
          <li>NE SIGNEZ RIEN sans avoir d’abord consulté un avocat.</li>
        </ul>
        <p>Vous avez le droit de parler à un avocat.</p>
        <ul>
          <li>Si vous êtes à l’extérieur, demandez à l’agent d’immigration</li>
        </ul>
        <p>si vous pouvez partir librement, et si l’agent vous dit oui,</p>
        <p>partez calmement.</p>
        <ul>
          <li>DONNEZ CETTE CARTE À L’AGENT. Si vous êtes chez</li>
        </ul>
        <p>vous, montrez-lui la carte à la fenêtre ou glissez-la sous la</p>
        <p>porte.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-georgian",
      number: 39,
      title: "Georgian",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["georgian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Georgian</h4>        <p>თქვენ გაქვთ კონსტიტუციური უფლებები:</p>
        <p>არ გააღოთ კარები თუკი საიმიგრაციო აგენტი კარებზე</p>
        <p>აკაკუნებს.</p>
        <p>არ უპასუხოთ შეკითხვებზე საიმიგრაციო აგენტს, თუკი ის</p>
        <p>თქვენთან საუბარს ცდილობს. თქვენ გაქვთ დუმილის უფლება.</p>
        <p>იურისტთან გასაუბრებამდე არ მოაწეროთ ხელი არაფერს.</p>
        <p>თქვენ გაქვთ იურისტთან საუბრის უფლება.</p>
        <p>თუ სახლში არ იმყოფებით, ჰკითხეთ აგენტს თუკი შეგიძლიათ</p>
        <p>წასვლა და თუ გეტყვიან რომ შეგიძლიათ, მშვიდად დატოვეთ</p>
        <p>ადგილი.</p>
        <p>მიეცით ეს ბარათი აგენტს. თუ სახლში იმყოფებით, აჩვენეთ ეს</p>
        <p>ბარათი მას ფანჯრიდან ან გააცურეთ კარების ქვეშ.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-greek",
      number: 40,
      title: "Greek",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["greek", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Greek</h4>        <p>Έχετε συνταγματικά δικαιώματα:</p>
        <p>ΜΗΝ ΑΝΟΙΞΕΤΕ ΤΗΝ ΠΟΡΤΑ εάν ένας πράκτορας μετανάστευσης χτυπήσει την πόρτα.</p>
        <p>ΜΗΝ ΑΠΑΝΤΗΣΕΤΕ ΣΕ ΟΠΟΙΑΔΗΠΟΤΕ ΕΡΩΤΗΣΗ ενός πράκτορα μετανάστευσης εάν προσπαθήσει να σας μιλήσει. Έχετε το δικαίωμα να παραμείνετε σιωπηλοί.</p>
        <p>ΜΗΝ ΥΠΟΓΡΆΨΕΤΕ ΤΙΠΟΤΑ χωρίς να μιλήσετε πρώτα σε δικηγόρο. Έχετε το δικαίωμα να μιλήσετε με δικηγόρο.</p>
        <p>Εάν βρίσκεστε έξω από το σπίτι σας, ρωτήστε τον πράκτορα αν είστε ελεύθεροι να φύγετε, και αν σας πουν ναι, φύγετε ήρεμα.</p>
        <p>ΔΩΣΤΕ ΑΥΤΗ ΤΗΝ ΚΑΡΤΑ ΣΤΟΝ ΠΡΑΚΤΟΡΑ. Εάν βρίσκεστε μέσα στο σπίτι σας, δείξτε την κάρτα από το παράθυρο ή περάστε την κάτω από την πόρτα.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-haitian-creole",
      number: 41,
      title: "Haitian Creole (Kreyòl Ayisyen)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["haitian creole", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Haitian Creole (Kreyòl Ayisyen)</h4>
        <p>Ou gen dwa konstitisyonèl:</p>
        <ul>
          <li>PA LOUVRI PÒT la si yon ajan imigrasyon frape pòt la.</li>
          <li>PA REPONN OKENN KEKSYON yon ofisye imigrasyon</li>
        </ul>
        <p>si yo eseye pale avèk ou. Ou gen dwa pou rete an silans.</p>
        <ul>
          <li>PA SIYEN ANYEN san w’ pa pale anvan avèk yon</li>
        </ul>
        <p>avoka. Ou gen dwa pale ak yon avoka.</p>
        <ul>
          <li>Si w’ deyò lakay ou, mande ajan an si w’ lib pou ale epi</li>
        </ul>
        <p>si yo di wi, ale avèk kalm.</p>
        <ul>
          <li>BAY AJAN KAT SA. Si ou anndan lakay ou, montre kat</li>
        </ul>
        <p>la nan fenèt la oswa glise li anba pòt la.1</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-hausa",
      number: 42,
      title: "Hausa",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["hausa", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Hausa</h4>
        <p>Kana da haƙƙin tsarin mulki:</p>
        <ul>
          <li>KADA KA BUDE KOFAR idan wakilin shige da fice yana buga kofa.</li>
          <li>KADA KA AMSA KOWANE TAMBAYOYI daga wakilin shige da fice</li>
        </ul>
        <p>idan sun yi ƙoƙarin yin magana da kai. Kana da damar yin shiru.</p>
        <ul>
          <li>KADA KA SA HANNU A KOMAI ba tare da fara magana da lauya</li>
        </ul>
        <p>ba. Kana da damar yin magana da lauya.</p>
        <ul>
          <li>Idan kana waje da gidan ka, tambayi wakilin idan kana da ‘yancin</li>
        </ul>
        <p>tafiya kuma idan sun ce eh, ka tafi a cikin nutsuwa.</p>
        <ul>
          <li>BADA WANNAN KATIN GA WAKILI. Idan kana cikin gidanka, nuna</li>
        </ul>
        <p>katin ta taga ko ka tura shi ta ƙarƙashin ƙofar.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-hebrew",
      number: 43,
      title: "Hebrew",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["hebrew", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Hebrew</h4>        <p>:יש לך זכויות חוקתיות</p>
        <p>.אם סוכן מטעם רשות ההגירה נוקש על דלתך, אל תפתח את הדלת</p>
        <p>אם סוכן מטעם רשות ההגירה מנסה לשוחח איתך, אל תענה על אף</p>
        <p>.שאלה. שמורה לך הזכות לשמור על שתיקה</p>
        <p>אל תחתום על דבר לפני שיתאפשר לך לשוחח עם עורך דין. שמורה לך</p>
        <p>.הזכות לשיחה עם עורך דין</p>
        <p>אם הנך מחוץ לביתך, תשאל את סוכן רשות ההגירה אם הנך חופשי/ה</p>
        <p>.לעזוב, ואם כן, פשוט עזוב/י את הבית בשלווה</p>
        <p>תנ/י כרטיס זה לסוכן ההגירה. אם הנך בתוך ביתך, באפשרותך להציג</p>
        <p>.כרטיס זה מבעד לחלון הבית או להעביר אותו מתחת לדלת הבית</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-hindi",
      number: 44,
      title: "Hindi",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["hindi", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Hindi</h4>        <p>आपके े  पास संवैैधाानि�के अनिधाकेार हैंं:</p>
        <p>अगर कोोई इमि�ग्रेेशन एजेंंट दरवााज़ाा खटखटा रहाा हाै तोो दरवााज़ाा न खोलेंं।</p>
        <p>अगर कोोई इमि�ग्रेेशन एजेंंट आपसेे बाातो कोरने कोी कोोशिशश कोरतोा हाै तोो उसेकोे  किकोसेी भीी</p>
        <p>सेवाालेंकोा जेंवााबा न दं। आपकोो चुुप रहाने कोा अमि�कोार हाै।</p>
        <p>वाकोीलें सेे बाातो किकोए किबाना किकोसेी भीी दस्तोावाेज़ा पर हास्तोाक्षर न कोरं। आपकोो वाकोीलें सेे बाातो</p>
        <p>कोरने कोा अमि�कोार हाै।</p>
        <p>अगर आप अपने घरसेे बााहार हां, तोो एजेंंट सेे पूछेंं किको क्याा आप बााहार जेंाने कोे  शिलेंए स्वातोंत्र हां</p>
        <p>और अगर वाे हाा� कोहातोे हां, तोो शांकितो सेे बााहार किनकोलेंं।</p>
        <p>याहा कोार्डड एजेंंट कोो दं। अगर आप अपने घर कोे  अंदर हां, तोो कोार्डड कोो खिखड़कोी सेे दिदखाए� याा</p>
        <p>दरवााज़ाे कोे  नीचुे सेरकोा दं।</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-hmong",
      number: 45,
      title: "Hmong",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["hmong", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Hmong</h4>
        <p>Koj muaj cai los ntawm tug txhooj lij choj:</p>
        <ul>
          <li>TSIS TXHOB QHIB QHOV ROOJ li yog thaum muaj ib tus tib neeg</li>
        </ul>
        <p>sawv cev tsoom fwv immigration tuaj khob qhov rooj.</p>
        <ul>
          <li>TSIS TXHOB TEB IB NQI LUS NUG LI yog muaj ib tus tib neeg sawv</li>
        </ul>
        <p>cev tsoom fwv immigration xav nrog koj tham. Koj yeej muaj cai nyob</p>
        <p>twb ywm tsis hais lus.</p>
        <ul>
          <li>TSIS TXHOB KOS NPE RAU DAB TSI LI yog thaum koj tseem tsis</li>
        </ul>
        <p>tau nrog ib tug kws lij choj tham. Koj yeej muaj cai nrog ib tug kws lij</p>
        <p>choj hais lus.</p>
        <ul>
          <li>Yog tias koj nyob nraum zoov ntawm koj lub tsev, koj yuav tau nug tus</li>
        </ul>
        <p>tib neeg sawv cev tsoom fwv immigration ntawd seb koj mus puas tau.</p>
        <p>Yog lawv teb tias mus tau, ces maj mam mus.</p>
        <ul>
          <li>MUAB DAIM NPAV (DAIM PHIAJ) RAU TUS TIB NEEG SAWV CEV</li>
        </ul>
        <p>TSOOM FWV. Yog tias koj nyob hauv tsev, tes muab daim npav tsa ntawm</p>
        <p>lub qhov rais kom nws pom los yog muab ntxig hauv qab qhov rooj mus.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-igbo",
      number: 46,
      title: "Igbo",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["igbo", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Igbo</h4>        <p>Ị nwere ikike iwu obodo</p>
        <p>EMEGHELA ỤZỌ ma ọ bụrụ na onye ọrụ mbata na ọpụpụ na-akụ aka</p>
        <p>n’ ọnụ ụzọ.</p>
        <p>AZALA AJỤJỤ Ọ BỤLA: sitere n’ aka onye ọrụ mbata na ọpụpụ ma ọ</p>
        <p>bụrụ na ha nwaa ịgwa gị okwu. Ị nwere ikike ịgbachi nkịtị.</p>
        <p>ABỊANYELA AKA N’ IHE na-ebughị ụzọ gwa onye ọka iwu okwu. Ị</p>
        <p>nwere ikike ịgwa onye ọka iwu okwu.</p>
        <p>Ọ bụrụ na ịnọ n’ èzí ụlọ gị, jụọ onye ọrụ ahụ ma ị nweere onwe gị ịpụ</p>
        <p>ma ọ bụrụ na ha asị ee, pụ nwayọọ.</p>
        <p>ENYE KAADỊ ONYE NNỌCHI ANYA. Ọ bụrụ na ị nọ n’ ime ụlọ gị, gosi</p>
        <p>kaadị ahụ site na windo ma ọ bụ s’ ite n’ okpuru ọnụ ụzọ</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-ilocano",
      number: 47,
      title: "Ilocano",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["ilocano", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Ilocano</h4>        <p>Addaanka kadagiti konstitusional a karbengan:</p>
        <p>SAAN A LUKTAN TI RIDAW no adda ahente ti imigrasion nga agtuktok</p>
        <p>iti ridaw.</p>
        <p>SAAN A SUNGBATAN TI ANYAMAN A SALUDSOD manipud iti ahente ti</p>
        <p>imigrasion no padasendaka a kasarita. Karbengam ti agulimek.</p>
        <p>SAAN NGA AGPIRMA ITI ANYAMAN a dikay umuna a makisarita iti</p>
        <p>abogado. Adda karbengam a makisarita iti abogado.</p>
        <p>No addaka iti ruar ti pagtaengam, damagem iti ahente no nawayaka a</p>
        <p>pumanaw ket no kunada a wen, kalmado a pumanawka.</p>
        <p>ITED DAYTOY A CARD ITI AHENTE. No addaka iti uneg ti pagtaengam,</p>
        <p>ipakitam ti kard babaen ti tawa wenno i-slide-mo iti sirok ti ridaw.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-japanese",
      number: 48,
      title: "Japanese (日本語)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["japanese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Japanese (日本語)</h4>        <p>あなたには憲法で保障された権利があり ます 。</p>
        <p>もし、 移 民 局 の 職 員 がドアをノ ックしても、 ドアを開 け ないでください。</p>
        <p>移民局の職員が話しかけても、 質問には答えないで く ださい。</p>
        <p>なぜなら、 あなたには黙秘権があるから です 。</p>
        <p>そ し て、 弁護士と相談する前に、 何も署名しないで く ださい。</p>
        <p>弁護士と話す権利があり ます 。</p>
        <p>自宅にいない場合は、 あなたが職員に自由に行 っ てもいいかど う かを</p>
        <p>確認し て、 職員が許可するなら、 冷静なまま場を離れま し ょ う 。</p>
        <p>このカー ドを職員に渡し て く ださい。 家にいる場合は、 窓辺から職員</p>
        <p>に 見 せ てくだ さ い 。 あ る い は 、 カ ードをドア の 下 か ら 滑 り込 ま せ てくだ</p>
        <p>さい。</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-karen",
      number: 49,
      title: "Karen",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["karen", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Karen</h4>        <p>နအိၣ်ဒီးသဲစးတၢ်ဘျၢမိၢ်ပှၢ်ခွဲးယာ်-</p>
        <p>တၢ်နုာ်လီၤအိၣ်ကီၢ်ပၢၤကီၢ်ပှၤဘၣ်မူဘၣ်ဒါမ့ၢ်ဟဲဒိတကျိာ်နပဲတြီန့ၣ်တဘၣ်တူၢ်လိာ်</p>
        <p>တဂ့ၤႋ</p>
        <p>တၢ်နုာ်လီၤအိၣ်ကီၢ်ပၢၤကီၢ်ပှၤဘၣ်မူဘၣ်ဒါ မ့ၢ်ကျဲးစၢးကတိၤတၢ်ဒီးနၤ တဘၣ်စံးဆၢ</p>
        <p>တၢ်သံကွၢ်နီတမံၤတဂ့ၤႋ နခွဲးယာ် အိၣ်လၢတဘၣ်စံးဆၢတၢ်န့ၣ်လီၤႋ</p>
        <p>မ့ၢ်တတၢၣ်ပီၣ်ဘၣ်ဆိတၢ်ဒီးပီၢ်ရီန့ၣ်တဘၣ်စံးတၢ်နီတမံၤတဂ့ၤႋ နတၢ်ခွဲးတၢ်ယာ်အိၣ်</p>
        <p>လၢကတၢၣ်ပီၣ်တၢ်ဒီးပီၢ်ရီ န့ၣ်လီၤႋ</p>
        <p>နမ့ၢ်အိၣ်လၢတၢ်ချၢ သံကွၢ်ပှၤဘၣ်မူဘၣ်ဒါလၢမ့ၢ်နလဲၤသဒၣ်ကွံာ်သ့ဧါ ဒီးအ၀ဲသ့ၣ်မ့ၢ်</p>
        <p>ပျဲနၤ ဟးသဒၣ်ကွံာ်ဃိဒိ တက့ၢ်ႋ</p>
        <p>ဟ့ၣ်ခးအံၤဆူပှၤဘၣ်မူဘၣ်ဒါတက့ၢ်ႋ နမ့ၢ်အိၣ်လၢနဟံၣ်ပူၤ ဒုးနဲၣ်ပာ်ဖျါခးခီဖျိပဲတြီဖိ</p>
        <p>မ့တမ့ၢ် ဂိာ်လီၤလၢပဲတြီဖီလာ်တက့ၢ်ႋ</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-khmer",
      number: 50,
      title: "Khmer (ភាសាខ្មែ)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["khmer", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Khmer (ភាសាខ្មែ)</h4>        <ul>
          <li></li>
        </ul>
        <p>អ្នកមបនសិទ្ធិពីរដ្ឋធម្មនុញ្ញ៖</p>
        <p>្របសិនេបើភា)*ក់ងារអេនា1*្របេវសន៍េគាះទា7*រសូមកុំេបើកទា7*រឲ*=ពួកេគឲ*=េសាះ។</p>
        <p>្របសិនេបើភា)*ក់ងារអេនា1*្របេវសន៍ព*Cយាមនិយាយជាមួយេលាកអ្នកសូមកុំេឆ្លើយសំណLរពី ពួ</p>
        <p>កគាត់ឲ*=េសាះ។ េលាកអ្នកមានសិទ្ធិេនៅ េស្ងTមមិននិយាយ។</p>
        <p>សូមកុំចុះហត្ថេលខាេលើអ្វីេដាយមិនទាន់និយាយជាមុនជាមួយេមធាវ]។ េលាកអ្នក មានស</p>
        <p>ិទ្ធិនិយាយជាមួយេមធាវ]។</p>
        <p>្របសិនេបើេលាកអ្នកេនៅខាងេ្រកៅផ្ទះ របស់ េលាកអ្នក សូមសួរភា)*ក់ងារថា េតើេលាកអ្នក អាចចា</p>
        <p>កេចញបានេទ ្របសិនេបើពួកេគ និយាយថាបាន សូមចាកេចញតាមស្រមhល។</p>
        <p>ផ្តល់កាតេនះេទៅឲ*=ភា)*ក់ងារ។ ្របសិនេបើ េលាកអ្នកេនៅខាងក្នlងផ្ទះរបស់ េលាកអ្នក សូមបងា</p>
        <p>m*ញកាតេនះតាមបង្អoច ឬរុញវាេទៅ</p>
        <ul>
          <li>្របសិនេបើភា)*ក់ងារអេនា1*្របេវសន៍េគាះទា7*រសូមកុំេបើកទា7*រឲ*=ពួកេគឲ*=េសាះ។</li>
          <li>្របសិនេបើភា)*ក់ងារអេនា1*្របេវសន៍ព*Cយាមនិយាយជាមួយេលាកអ្នកសូមកុំេឆ្លើយសំណLរពី ពួ</li>
          <li>សូមកុំចុះហត្ថេលខាេលើអ្វីេដាយមិនទាន់និយាយជាមុនជាមួយេមធាវ]។ េលាកអ្នក មានស</li>
          <li>្របសិនេបើេលាកអ្នកេនៅខាងេ្រកៅផ្ទះ របស់ េលាកអ្នក សូមសួរភា)*ក់ងារថា េតើេលាកអ្នក អាចចា</li>
          <li>ផ្តល់កាតេនះេទៅឲ*=ភា)*ក់ងារ។ ្របសិនេបើ េលាកអ្នកេនៅខាងក្នlងផ្ទះរបស់ េលាកអ្នក សូមបងា</li>
        </ul>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-kinyarwanda",
      number: 51,
      title: "Kinyarwanda",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["kinyarwanda", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Kinyarwanda</h4>
        <p>Ufite uburenganzira  uhabwa n’Itegeko Nshinga:</p>
        <ul>
          <li>NTUGAFUNGURE UMURYANGO igihe umukozi ushinzwe abinjira</li>
        </ul>
        <p>n’abasohoka akomanze.</p>
        <ul>
          <li>NTUGASUBIZE IBIBAZO by’umukozi w’abinjira n’abasohoka n’iyo</li>
        </ul>
        <p>yaba agerageje kukuganiriza. Ufite uburenganzira bwo kuguma</p>
        <p>ucecetse.</p>
        <ul>
          <li>NTUZASINYE IKINTU NA KIMWE utabanje kuganira</li>
        </ul>
        <p>n’umunyamategeko. Ufite uburenganzira bwo kuvugana</p>
        <p>n’umunyamategeko.</p>
        <ul>
          <li>Niba uri hanze y’urugo rwawe, baza uwo mukozi niba wemerewe</li>
        </ul>
        <p>kugenda, navuga yego, wigendere witonze.</p>
        <ul>
          <li>HA UWO MUKOZI IYI KARITA. Niba uri mu nzu, uzerekanire ikarita</li>
        </ul>
        <p>mu idirishya cyangwa uyinyuze munsi y’urugi.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-korean",
      number: 52,
      title: "Korean (한국어)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["korean", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Korean (한국어)</h4>
        <p>귀하에게는 헌법이 부여한 권리가 있습니다.</p>
        <ul>
          <li>이민국 요원이 문을 두드릴 경우 문을 열어주지 마십시요.</li>
          <li>이민국 요원이 검문을 할 때 어 떤 질문에도 대답하지</li>
        </ul>
        <p>마십시요. 귀하에게는 묵비권을 행사할 권리가 있습니다.</p>
        <ul>
          <li>변호사와 만나기 전에는 어떠한 서명도 하지 마십시요.</li>
        </ul>
        <p>귀하에게는 변호사와 상담할 권리가 있습니다.</p>
        <ul>
          <li>집 밖에 있을 경우, 이민국 요원에게 귀하가 그 자리를 떠날</li>
        </ul>
        <p>수 있는 자유가 있는지 여부를 묻고 이민국 요원이 ‘예’</p>
        <p>라고 답변을 한다면 침착하게 자리를 떠나십시요.</p>
        <ul>
          <li>이 카드를 이민국 요원에게 주십시요. 만약 귀하가 집안에</li>
        </ul>
        <p>머물고 있다면, 이 카드를 창문이나 문 아래로 밀 어 넣어</p>
        <p>전달하십시요.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-lao",
      number: 53,
      title: "Lao",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["lao", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Lao</h4>        <p>ທ່ານມີສິດຕາມລັດຖະທຳມະນູນໃນການ::</p>
        <p>ບໍ່ເປີດປະຕູ, ຖ້າຫາກໜ່ວຍງານກວດຄົນເຂົ້າເມືອງມາເຄາະປະຕູ.</p>
        <p>ບໍ່ຕອບຄຳຖາມໃດໆຈາກໜ່ວຍງານກວດຄົນເຂົ້າເມືອງ, ຖ້າພວກເຂົາ</p>
        <p>ພະຍາຍາມຖາມທ່ານ. ທ່ານມີສິດທີ່ຈະບໍ່ອອກສຽງໄດ້.</p>
        <p>ບໍ່ຕ້ອງເຊັນເອກະສານໃດໆໂດຍທີ່ບໍ່ໄດ້ປຶກສາກັບນັກກົດໝາຍກ່ອນ. ທ່ານມີ</p>
        <p>ສິດທີ່ຈະປຶກສາກັບນັກກົດໝາຍ.</p>
        <p>ຖ້າຫາກທ່ານຢູ່ນອກເຮືອນຂອງທ່ານ, ຖາມໜ໋ວຍງານນັ້ນວ່າທ່ານສາມາດ</p>
        <p>ອອກໄປໄດ້ບໍ ແລະ ຖ້າພວກເຂົາບອກໃຫ້ໄປໄດ້, ອອກໄປຢ່າງໃຈເຢັນ.</p>
        <p>ເອົາບັດນີ້ໃຫ້ໜ່ວຍງານ. ຖ້າຫາກທ່ານຢູ່ໃນເຮືອນຂອງທ່ານ, ສະແດງບັດນີ້</p>
        <p>ຜ່ານປ່ອງຢ້ຽມ ຫຼື ສອດມັນໄປທາງດ້ານລຸ່ມປະຕູ.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-lingala",
      number: 54,
      title: "Lingala",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["lingala", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Lingala</h4>
        <p>Ufite uburenganzira  uhabwa n’Itegeko Nshinga:</p>
        <ul>
          <li>NTUGAFUNGURE UMURYANGO igihe umukozi ushinzwe abinjira</li>
        </ul>
        <p>n’abasohoka akomanze.</p>
        <ul>
          <li>NTUGASUBIZE IBIBAZO by’umukozi w’abinjira n’abasohoka n’iyo</li>
        </ul>
        <p>yaba agerageje kukuganiriza. Ufite uburenganzira bwo kuguma</p>
        <p>ucecetse.</p>
        <ul>
          <li>NTUZASINYE IKINTU NA KIMWE utabanje kuganira</li>
        </ul>
        <p>n’umunyamategeko. Ufite uburenganzira bwo kuvugana</p>
        <p>n’umunyamategeko.</p>
        <ul>
          <li>Niba uri hanze y’urugo rwawe, baza uwo mukozi niba wemerewe</li>
        </ul>
        <p>kugenda, navuga yego, wigendere witonze.</p>
        <ul>
          <li>HA UWO MUKOZI IYI KARITA. Niba uri mu nzu, uzerekanire ikarita</li>
        </ul>
        <p>mu idirishya cyangwa uyinyuze munsi y’urugi.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-marshallese",
      number: 55,
      title: "Marshallese",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["marshallese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Marshallese</h4>        <p>Ewōr am maroñ ñan jet jimwe ko an kien:</p>
        <p>Elañe juon opiija in immigration ej kōjan̄ jan̄  ilo kōjām eo am, JAMIN</p>
        <p>KŌMMAN E.</p>
        <p>Ñe juon opiija in immigration ej kajeoñ in konono ippaṃ, JAMIN UAK</p>
        <p>JABREWŌT KAJITŌK KO. Jimwe eo ñan jab konono ej am.</p>
        <p>Juon lawyer ej aikuj in kajitok mokta JEN AM SIGN E JABDREWOT</p>
        <p>PEBA. Kwoj maroñ in bwebwenato ibben juon lawyer.</p>
        <p>Kajjitōk ippān rijerbal eo eļan̄ n̄ e kwoj anemkwoj in etal eļan̄ n̄ e kwojjab</p>
        <p>pād ilo m̧weo, im eļan̄ n̄ e rej uwaak bwe kwoj, innām etal ilo jidimkij.</p>
        <p>KWŌJ KŌMMAN RI-JERBAL EO KAAR IN. Likūt kaat eo ium̧win kōjām</p>
        <p>eo ak kwaļo̧ ke ilo wintō eo eļan̄ n̄ e kwoj pād ilowaan m̧weo im̧ōm̧.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-mongolian",
      number: 56,
      title: "Mongolian",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["mongolian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Mongolian</h4>        <p>Та үндсэн хуулиар танд олгогдсон зохих эрхтэй:</p>
        <p>Цагаачлалын албаны ажилтан хаалга тогшиж байвал, ХААЛГАА</p>
        <p>ОНГОЙЛГОХГҮЙ БАЙНА.</p>
        <p>Хэрвээ цагаачлалын ажилтан тантай ярихыг хүсэж байвал, та</p>
        <p>АСУУЛТАНД ХАРИУЛАХГҮЙ БАЙХ ЭРХТЭЙ. Та үг дуугарахгүй ба</p>
        <p>чимээгүй байх эрхтэй.</p>
        <p>Эхлээд хуульч буюу хуулийн ажилтантай хэлэлцээгүй байж ЮУНД</p>
        <p>Ч БҮҮ ГАРЫН ҮСЭГ ЗУРААРАЙ. Та хуулийн ажилтан ба хуульчтай</p>
        <p>ярилцах эрхтэй.</p>
        <p>Хэрвээ та гэрээсээ гадуур байвал, ажилтнаас та гарч явах эрхтэй юу</p>
        <p>гэж асуугаад, хэрвээ тэр тийм гэвэл, тайван гараад яваарай.</p>
        <p>ЭНЭ КАРТЫГ АГЕНТ БУЮУ АЖИЛТАНД ӨГӨӨРЭЙ. Хэрвээ та</p>
        <p>гэртээ байвал, картыг цонхоороо үзүүлнэ эсвэл хаалганы доогуур</p>
        <p>гулгуулж үзүүлээрэй.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-nahuatl",
      number: 57,
      title: "Nahuatl",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["nahuatl", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Nahuatl</h4>        <p>Tikpiya in derechos ka timopalehuis:</p>
        <p>MAKA XTLAPO MOKAL tla se agente de inmigración kimaj otlamo</p>
        <p>kakalatza tlatzacuilotl.</p>
        <p>MAKA XNALKILI TLEN MISTLATOLTIYA on Agente de inmigración tla</p>
        <p>kineki mohua tlaketsas. Tikpiya se derecho ka tehuelis ka xtitlatos.</p>
        <p>MAKA XTLALI MOFIRMA kaxtopa ti tlatos ka se uan mis palehuis. Tikpi-</p>
        <p>ya se derecho ka titlaketzas ka uan se uan mispalehuis.</p>
        <p>Tla tika kiyahuak mocha, xtlatolti on agente tla ti huelis tiyas, tla mitsiliya</p>
        <p>kema, xiya ka kuali xka amantli.</p>
        <p>XMAKA IN AMATLAKUILOLI ON AGENTE. Tla tika pan mocha, xkititi in</p>
        <p>amatlakuloli pan ventana otlamo xmaka ka tlatsintla pan tlatzacuilotl.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-nepali",
      number: 58,
      title: "Nepali",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["nepali", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Nepali</h4>        <p>तपााईँँसँँग सँं वैैधाानि�क अधिधाकारहरू हुन्छ�्:</p>
        <p>यदि� आप्रवैासँ� एजेेण्टलेे ढोोका ढोकढोकाएका छ�् भ�े ढोोकाा नखोोल्नुहोोस्् ।</p>
        <p>यदि� आप्रवैासँ� एजेेण्टलेे तपााईंसँँग कुरा ग�न खोोजेे भ�े उनिनहोरुलेे स्ोधेेकाो काुनै पनिन प्रश्नकाो जवााफ नदि�नुहोोस्् । तपााईंलेाईँ मौौ� बस्नेे अधिधाकार छ।</p>
        <p>वैदिकलेसँँग कुरा �गरेसँम्म काुनै पनिन काु राामाा स्हिहो ( होस्तााक्षरा ) नगनु�होोस््, तपााईंलेाईँ वैदिकलेसँँग कुरा ग�े अधिधाकार छ।</p>
        <p>यदि� तपााईं आफ्�ो घर बादिहर हु�ुहुन्छ भ�े,जेा� मिमौल्छ दिक मिमौल्दैै� भ�ेर एजेेण्टसँँग सँोध्नुुहोसँ्, यदि� उ�ीहरूलेे मिमौल्छ भ�े भ�े शाान्ति�पाूवैनक जेा�ुहोसँ्।</p>
        <p>योो काार्ड� एज ेण्टलेाई दि�नुहोोस््। यदि� तपााईं घर भिभत्र हु�ुहुन्छ भ�े झ्याालेबाट कार्डन �ेखोाउ�ुहोसँ् या ढोोकामौुनि�बाट छिछराउ�ुहोसँ् ।</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-oromo",
      number: 59,
      title: "Oromo",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["oromo", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Oromo</h4>        <p>Mirga seera mootummaatiin kenname ni qabdu:</p>
        <p>Yoo bakka bu’aan immigireeshinii balbala keessan rukutan BALBALA</p>
        <p>KEESSAN HIN BANINA.</p>
        <p>Yoo isaan si haasofsiisuuf yaalan GAAFII bakka bu’aa immigireeshinii</p>
        <p>irraa GAAFATAMTTAN  KAMIYYUU HIN DEEBISINA. Callisuuf mirga ni</p>
        <p>qabdu.</p>
        <p>Dursa abukaatoo waliin osoo hin mari’atin  WAAN TOKKOYYU HIN</p>
        <p>MALLATTEESSINAA. Abbaa seeraa waliin dubbachuuf mirga ni qabdu.</p>
        <p>Yeroo bakka bu’aa immigireeshinii waliin wal agartanitti yoo mana kees-</p>
        <p>saniin ala jirtu ta’e, bakka bu’aa sana bilisa ta’uu keessan  gaafadha, yoo</p>
        <p>isaan eeyyee jedhan tasgabbiidhaan deema.</p>
        <p>KAARDII KANA BAKKA BU’ AA IMMIGIREESHININIITTI KENNAA. Y oo mana</p>
        <p>keessan keessa jirtu ta’ e, kaardii sana karaa foddaatiin agarsiisi ykn balbala jalatti siqsa</p>
        <p>agarsiisa.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-pashto",
      number: 60,
      title: "Pashto",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["pashto", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Pashto</h4>
        <p>تاسو دا لاندی فانونی حقوق لری جی:</p>
        <p>که د مهاجرینو نماینده مقسو د کور دروازه ونکوی، تاسو کولی شی دروازه ورته خلاصه پ واره نکری.</p>
        <p>که د مهاجرینو نماینده کوشش کولو له تاسو پوښتنی وکری تاسو کولی شی خواب ورنکری یه بلکل سکوت اختیار کری.</p>
        <p>د خپل وکیل سره د مشوره مرینه هیچ اسنده مه امضاء کری. تاسو حق لری نه خپل وکیل سره خبری وکری.</p>
        <p>که نه خپل بیرون باست نه نماینده خخه پوښتنه وکری جی کوم ههه جای خخه لار شی که ههه ووی بلی نو ههه جای په ارامی سره پریودی.</p>
        <p>دا کارت د مهاجرینو نماینده نه و سیاست، که تاسو د ننه یه کور باست نو د کارت دروازه له لاندی ورته ورکری او بینی د کرکی له ښنه ورته وښایاست.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-polish",
      number: 61,
      title: "Polish",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["polish", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Polish</h4>        <p>Masz konstytucyjne prawa:</p>
        <p>NIE OTWIERAJ DRZWI jeśli puka agent imigracyjny.</p>
        <p>NIE ODPOWIADAJ NA ŻADNE PYTANIA agenta imigracyjnego</p>
        <p>jeśli będzie próbował z Tobą rozmawiać. Masz prawo zachować</p>
        <p>milczenie.</p>
        <p>NIC NIE PODPISUJ bez uprzedniej konsultacji z prawnikiem.</p>
        <p>Masz prawo do rozmowy z prawnikiem.</p>
        <p>Jeśli jesteś poza domem, zapytaj agenta czy masz prawo się</p>
        <p>oddalić. Jeśli powie, że tak, spokojnie odejdź.</p>
        <p>DAJ TĘ KARTĘ AGENTOWI. Jeśli jesteś w domu, pokaż tę</p>
        <p>kartę przez okno lub wsuń ją pod drzwi.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-portuguese",
      number: 62,
      title: "Portuguese (Português)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["portuguese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Portuguese (Português)</h4>        <ul>
          <li>NÃO ABRA A PORTA se um agente de imigração estiver a bater à</li>
        </ul>
        <p>porta.</p>
        <ul>
          <li>NÃO RESPONDA A NENHUMA PERGUNTA de um agente de</li>
        </ul>
        <p>imigração se este tentar falar consigo. Tem o direito de permanecer em</p>
        <p>silêncio.</p>
        <ul>
          <li>NÃO ASSINE NADA sem falar primeiro com um advogado. Você tem</li>
        </ul>
        <p>o direito de falar com um advogado.</p>
        <ul>
          <li>Se estiver fora da sua casa, pergunte ao agente se tem autorização</li>
        </ul>
        <p>para ir embora, e, se ele disser que sim, retire-se calmamente</p>
        <p>.</p>
        <ul>
          <li>ENTREGUE ESTE CARTÃO AO AGENTE. Se estiver dentro da</li>
        </ul>
        <p>sua casa, mostre o cartão através da janela ou passe-o por baixo da</p>
        <p>porta</p>
        <p>Você tem direitos constitucionais:</p>
        <p>para ir embora, e, se ele disser que sim, retire-se calmamente.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-punjabi",
      number: 63,
      title: "Punjabi (ਪੰਜਾਬੀ)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["punjabi", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Punjabi (ਪੰਜਾਬੀ)</h4>
        <p>ਤ�ਹਾਡ� ਕ�ਲ ਸ�ਿਵਧਾਨਕ ਅਿਧਕਾਰ ਹਨ:</p>
        <p>ਦਰਵਾਜ਼ਾ ਨਾ ਖ�ਲਹ੍ੋ ਜ�ਕਰ ਇ�ਕ ਇਮੀਗਰ੍ੇਸ਼ਨ ਏਜ</p>
        <p>�ਟ ਤ�ਹਾਡ� ਦਰਵਾਜ਼� 'ਤੇ ਖਟਖਟਾ</p>
        <p>ਿਰਹਾ ਹੈ।</p>
        <p>ਕ�ਈ ਵੀ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਨਾ ਿਦਓ ਜ�ਕਰ ਇ</p>
        <p>�ਕ ਇਮੀਗਰ੍ੇਸ਼ਨ ਏਜ�ਟ ਤ�ਹਾਨੂੰ ਗ�ਲ</p>
        <p>ਕਰਨੀ ਚਾਹ��ਦਾ ਹੈ। ਤ�ਹਾਡ� ਕ�ਲ ਚ��ਪ ਰਿਹਣ ਦਾ ਅਿਧਕਾਰ ਹੈ।</p>
        <p>ਿਕਸ� ਵੀ ਦਸਤਾਵ�ਜ਼ 'ਤੇ ਹਸਤਾਖਰ ਨਾ ਕਰ� ਿਬਨਾਂ</p>
        <p>ਵਕੀਲ ਨਾਲ ਪਿਹਲਾਂ ਗ�ਲਬਾਤ ਕੀਤੇ।</p>
        <p>ਤ�ਹਾਨੂੰ ਵਕੀਲ ਨਾਲ ਗ�ਲ ਕਰਨ ਦਾ ਅਿਧਕਾਰ ਹੈ।</p>
        <p>ਜ�ਕਰ ਤ</p>
        <p>�ਸੀਂ ਆਪਣ� ਘਰ ਤੋਂ ਬਾਹਰ ਹ</p>
        <p>�, ਤਾਂ ਏਜ�ਟ ਤੋਂ ਪ��ਛ� ਿਕ ਕੀ ਤ�ਸੀਂ ਜਾਣ ਲਈ ਆਜ਼ਾਦ</p>
        <p>ਹ�। ਜ�ਕਰ ਉਹ "ਹਾਂ" ਕਿਹ�ਦੇ ਹਨ, ਤਾਂ ਸ਼ਾਂਤੀ ਨਾਲ ਚਲ</p>
        <p>� ਜਾਓ।</p>
        <p>ਚੁੱਪ-ਚਾਪ ਉਥੋਂ ਚਲੇ ਜਾਓ ।</p>
        <p>ਇਹ ਕਾਰਡ ਏਜ�ਟ ਨੂੰ ਿਦਓ। ਜ�ਕਰ ਤ�ਸੀਂ ਆਪਣ� ਘਰ ਦੇ ਅ�ਦਰ ਹ�, ਤਾਂ ਇਹ ਕਾਰਡ</p>
        <p>ਿਖੜਕੀ ਰਾਹੀਂ ਿਦਖਾਓ ਜਾਂ ਦਰਵਾਜ਼� ਹ�ਠਾਂ ਸ��ਟ�।</p>        <p>ਦਰਵਾਜ਼ਾ ਨਾ ਖ�ਲਹ੍ੋ ਜ�ਕਰ ਇ�ਕ ਇਮੀਗਰ੍ੇਸ਼ਨ ਏਜ�ਟ ਤ�ਹਾਡ� ਦਰਵਾਜ਼� 'ਤੇ ਖਟਖਟਾ</p>
        <p>ਕ�ਈ ਵੀ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਨਾ ਿਦਓ ਜ�ਕਰ ਇ�ਕ ਇਮੀਗਰ੍ੇਸ਼ਨ ਏਜ�ਟ ਤ�ਹਾਨੂੰ ਗ�ਲ</p>
        <p>ਿਕ</p>
        <p>ਸ� ਵੀ ਦਸਤਾਵ�ਜ਼ 'ਤੇ ਹਸਤਾਖਰ ਨਾ ਕਰ� ਿਬਨਾਂ ਵਕੀਲ ਨਾਲ ਪਿਹਲ ਾਂ ਗ�ਲਬਾਤ ਕੀਤੇ।</p>
        <p>ਜ�ਕਰ ਤ�ਸੀਂ ਆਪਣ� ਘਰ ਤੋਂ</p>
        <p>ਬਾਹਰ ਹ�, ਤਾਂ ਏਜ�ਟ ਤੋਂ ਪ��ਛ� ਿਕ ਕੀ ਤ�ਸੀਂ ਜਾਣ ਲਈ ਆਜ਼ਾਦ</p>
        <p>ਹ�। ਜ�ਕਰ ਉਹ "ਹਾਂ" ਕਿਹ�ਦੇ ਹਨ, ਤਾਂ ਸ਼ਾਂਤੀ ਨਾਲ ਚਲ� ਜਾਓ।</p>
        <p>ਦਰਵਾਜ਼ਾ ਨਾ ਖ�ਲਹ੍ੋ ਜ�ਕਰ ਇ �ਕ ਇਮੀਗਰ੍ੇਸ਼ਨ ਏਜ�ਟ ਤ�ਹਾਡ� ਦਰਵਾਜ਼� 'ਤੇ ਖਟਖਟਾ</p>
        <p>ਿਕਸ� ਵੀ ਦਸਤਾਵ�ਜ਼ 'ਤੇ ਹਸਤਾਖਰ ਨਾ ਕਰ� ਿਬਨਾਂ ਵਕੀਲ ਨਾਲ ਪਿਹਲਾਂ ਗ�ਲਬਾਤ ਕੀਤੇ।</p>
        <p>ਜ�ਕਰ ਤ�ਸੀਂ ਆਪਣ� ਘਰ ਤੋਂ ਬਾਹਰ ਹ�, ਤਾਂ ਏਜ�ਟ ਤੋਂ ਪ��ਛ� ਿਕ ਕੀ ਤ�ਸੀਂ ਜਾਣ ਲਈ ਆਜ਼ਾਦ</p>
        <p>ਇਹ ਕਾਰਡ ਏਜ</p>
        <p>�ਟ ਨੂੰ ਿਦਓ। ਜ�ਕਰ ਤ�ਸੀਂ ਆਪਣ� ਘਰ ਦੇ ਅ�ਦਰ ਹ�, ਤਾਂ ਇਹ ਕਾਰਡ</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-romanian",
      number: 64,
      title: "Romanian",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["romanian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Romanian</h4>        <p>Aveți drepturi constituționale:</p>
        <p>NU DESCHIDEȚI UȘA dacă un ofițer de imigrare sună la ușă.</p>
        <p>NU RĂSPUNDEȚI LA NICIO ÎNTREBARE a unui ofițer de imigrare dacă încearcă să vorbească cu dumneavoastră. Aveți dreptul să păstrați tăcerea.</p>
        <p>NU SEMNAȚI NIMIC înainte de a vorbi cu un avocat. Aveți dreptul de a consulta un avocat.</p>
        <p>Dacă sunteți în afara casei, întrebați ofițerul dacă sunteți liber să plecați, iar dacă spune „da”, plecați calm.</p>
        <p>DAȚI ACEST CARD OFIȚERULUI. Dacă vă aflați în casă, arătați cardul prin fereastră sau pe sub ușă.</p>
        <p>NU RĂSPUNDEȚI LA NICIO ÎNTREBARE a unui ofițer de</p>
        <p>imigrare dacă încearcă să vorbească cu dumneavoastră. Aveți</p>
        <p>dreptul să păstrați tăcerea.</p>
        <p>NU SEMNAȚI NIMIC înainte de a vorbi cu un avocat. Aveți</p>
        <p>dreptul de a consulta un avocat.</p>
        <p>Dacă sunteți în afara casei, întrebați ofițerul dacă sunteți liber</p>
        <p>să plecați, iar dacă spune „da”, plecați calm.</p>
        <p>DAȚI ACEST CARD OFIȚERULUI. Dacă vă aflați în casă,</p>
        <p>arătați cardul prin fereastră sau pe sub ușă.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-russian",
      number: 65,
      title: "Russian (Русский)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["russian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Russian (Русский)</h4>
        <p>У вас есть конституционные права:</p>
        <p>НЕ ОТКРЫВАЙТЕ ДВЕРЬ , если в дверь стучится иммиграционный</p>
        <p>агент.</p>
        <p>НЕ ОТВЕЧАЙТЕ НА ВОПРОСЫ  иммиграционного агента, если</p>
        <p>они попытаются с вами поговорить. Вы имеете право хранить</p>
        <p>молчание.</p>
        <p>НЕ ПОДПИСЫВАЙТЕ НИЧЕГО , не посоветовавшись</p>
        <p>предварительно с юристом. У вас есть право поговорить с юристом.</p>
        <p>Если вы находитесь вне дома, спросите агента, можете ли вы уйти, и</p>
        <p>если он скажет «да», спокойно уйдите.</p>
        <p>ОТ ДАЙТЕ ЭТУ КАРТУ АГЕНТУ.  Если вы находитесь в своем доме,</p>
        <p>покажите карточку через окно или просуньте ее под дверь.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-samoan",
      number: 66,
      title: "Samoan",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["samoan", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Samoan</h4>        <p>E i ai au aia tau le faavae:</p>
        <p>‘AUA NE’I TATALAINA LE FAITOTO’A pe a tu’itu’i mai se tagata o le ofisa</p>
        <p>o femalagaiga.</p>
        <p>‘AUA NE’I TALIINA SOO SE FESILI mai se tagata ofisa o femalagaiga pe</p>
        <p>a taumafai e talanoa atu ia te oe. E i ai lau aia tatau e te fifilemu ai.</p>
        <p>‘AUA NE’I E SAINIA SOO SE MEA e aunoa ma le talanoa muamua i se</p>
        <p>loia. E i ai lau aia tatau e te talanoa ai i se loia.</p>
        <p>Afai o e i tua atu o lou fale, fesili i le tagata ofisa pe ua e sa’oloto e te alu</p>
        <p>ese ma afai e fai mai ua lelei, alu ese lemu.</p>
        <p>TUU ATU LE CARD LEA I LE TAGATA O LE OFISA. Afai o e i ai i totonu</p>
        <p>o lou fale, fa’aali atu i ai le card i le faamalama pe faasee atu i lalo o le</p>
        <p>faitoto’a.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-somali",
      number: 67,
      title: "Somali",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["somali", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Somali</h4>        <p>Dastuurka wuxu ku siinaya xaq:</p>
        <p>Hadii wakiil ka socda hay’adda laanta socdaalka albaabkaaga kugu soo garaaco, waxaad xaq u leedahay inaadan ka furin</p>
        <p>Hadii wakiilkaas su’aalo ku weydiiyo, waxaas xaq u leedahay inaadan hadlin oo su’aalo aadan ka jawaabin</p>
        <p>Waxaad xaq u leedahay qareen. Adigoo qareen la hadlin, wax-bana ha saxiixin.</p>
        <p>Hadii wakiilku gurigaaga banaankiisa kugu qabto waxaad weydiisa hadii aad xaq u leedahay in aad ka dhaqaaqdid. Hadii u yiraahdo haa, si tartiib ah uga dhaqaaq.</p>
        <p>Wakiilka kaarkaan tus. Hadii aad guriga ku jirtid, darishada ka sii ama albaabka hoostiista.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-spanish",
      number: 68,
      title: "Spanish (Español)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["spanish", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Spanish (Español)</h4>
        <p>Usted tiene derechos constitucionales:</p>
        <ul>
          <li>NO ABRA LA PUERTA si un agente de inmigración está tocando</li>
        </ul>
        <p>la puerta.</p>
        <ul>
          <li>NO CONTESTE NINGUNA PREGUNTA de un agente de</li>
        </ul>
        <p>inmigración si trata de hablar con usted. Usted tiene el derecho a</p>
        <p>guardar silencio.</p>
        <ul>
          <li>NO FIRME</li>
        </ul>
        <p>NADA sin antes hablar con un abogado. Usted tiene</p>
        <p>el derecho de hablar con un abogado.</p>
        <ul>
          <li>Si usted está fuera de su casa, pregúntele al agente s</li>
        </ul>
        <p>i tiene la</p>
        <p>libertad de irse y si le dice que sí, váyase con tranquilidad.</p>
        <ul>
          <li>ENTRÉGUELE ESTA TARJETA EL AGENTE. Si usted está</li>
        </ul>
        <p>dentro de su casa, muestre la tarjeta por la ventana o pásela</p>
        <p>debajo de la puerta.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-swahili",
      number: 69,
      title: "Swahili",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["swahili", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Swahili</h4>        <p>Una haki ya kisheria.</p>
        <p>USIFUNGULIE MLANGO afisa wa uhamiaji atakapobisha mlango wako</p>
        <p>USIJIBU SWALI LOLOTE kutoka afisa wa uhamiaji(Immigration agent) watakapo jaribu kukuongelesha. Una haki ya kukaa kimya</p>
        <p>USITIE SAINI POPOTE bila kuongea na wakili. Una haki ya kuongea na wakili.</p>
        <p>Utakapo kuwa mbali na kwako, uliza afisa kama unaweza ondo-ka na wakikubali ujiondoe kipolepole</p>
        <p>PEANA KADI HII KWA AFISA. Ukiwa nyumbani kwako, waonye-she kupitia dirisha ama wapitishie na chini ya mlangp</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-tagalog",
      number: 70,
      title: "Tagalog",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["tagalog", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Tagalog</h4>        <ul>
          <li>HUWAG BUKSAN ANG PINTO kung may ahente ng imigrasyon na</li>
        </ul>
        <p>kumakatok.</p>
        <ul>
          <li>HUWAG SAGUTIN ANG ANUMANG MGA TANONG mula sa isang</li>
        </ul>
        <p>ahente ng imigrasyon kung sinusubukan nilang makipag-usap sa iyo. May</p>
        <p>karapatan kang manahimik.</p>
        <ul>
          <li>HUWAG PUMIRMA NG KAHIT ANO nang hindi muna nakikipag-usap sa</li>
        </ul>
        <p>isang abogado. Mayroon kang karapatan na makipag-usap sa isang</p>
        <p>abogado.</p>
        <ul>
          <li>Kung ikaw ay nasa labas ng iyong bahay, tanungin ang ahente kung ikaw</li>
        </ul>
        <p>ay maari</p>
        <p>ng umalis at kung sabihin nila na pwede, umalis ka nang kalmado.</p>
        <ul>
          <li>IPAKITA ANG CARD NA ITO SA AHENTE. Kung nasa loob ka ng iyong</li>
        </ul>
        <p>bahay, ipakita ang card sa bintana o ilusot sa ilalim ng pinto.</p>
        <p>ay maari ng umalis at kung sabihin nila na pwede, umalis ka nang kalmado.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-tamil",
      number: 71,
      title: "Tamil",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["tamil", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Tamil</h4>        <p>உங்களுக்கு அரசி யலமைை ப்பு அளி த்துள்ள உரி மைை கள் உள்ளன:</p>
        <p>ஒரு குடிவரவு முகவர் கதமைவ த் தட்டினா ல் கதமைவ த் தி றக்க வேவ ண்டாா ம்.</p>
        <p>குடிவரவு முகவர் ஒருவர் உங்களுடான் வேே ச முயற்சி த்தா ல் அவர்களி ன் எந்தக்வேக</p>
        <p>ள்வி களுக்கும் ேதி லளி க்க வேவ ண்டாா ம். நீங்கள் அமைை தி யா க இருக்க உரி மைை</p>
        <p>உண்டு.</p>
        <p>முதலில் ஒரு வழக்கறி ஞரி டாம் வேே சா ைல் எதி லும் மைக யெய ழுத்தி டா வேவ ண்டாா ம்.</p>
        <p>ஒருவழக்கறி ஞருடான் வேே சுவதற்கு உங்களுக்கு உரி மைை உண்டு.</p>
        <p>நீங்கள் உங்கள் வீட்டிற்கு யெவ ளி யி ல் இருந்தா ல், நீங்கள் யெவ ளி வேய ற</p>
        <p>தமைடா யி ல்மைல யா என்று முகவரி டாம் வேக ளுங்கள், அவர்கள் ஆம் என்று</p>
        <p>யெசா ன்னா ல், அமைை தி யா க யெவ ளி வேய றுங்கள்.</p>
        <p>இந்த அட்மைடாமைய முகவரி டாம் யெகா டுங்கள். நீங்கள் உங்கள் வீட்டிற்குள் இருந்தா</p>
        <p>ல்,அட்மைடா மைய ஜன்னல் வழி யா க கா ட்டாவும் அல்லது அமைத கதவுக்குக் கீவேழ</p>
        <p>நழுவவி டாவும்.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-thai",
      number: 72,
      title: "Thai (ภาษาไทย)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["thai", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Thai (ภาษาไทย)</h4>        <p>คุณมีสิทธิตามรัฐธรรมนูญ:</p>
        <p>ห้ามเปิดประต ูหากเจ้าหน้าที่ตรวจคนเข้าเมืองมาเคาะหน้าประตูบ้าน</p>
        <p>ห้ามตอบคำาถามใด ๆ  กับเจ้าหน้าที่ตรวจคนเข้าเมือง หากเจ้าหน้าที่เหล่านั้นต้องการพูดคุยกับท่าน ท่านมีสิทธิที่จะไม่พูด</p>
        <p>ห้ามเซ็นเอกสารใด ๆ  หากท่านยังไม่ได้พูดคุยกับทนายความ ท่านมีสิทธิในการพบทนายความ</p>
        <p>หากท่านอยู่นอกบ้าน โปรดถามเจ้าหน้าที่ว่าท่านสามารถออกไปจากสถานการณ์ตรงนี้ได้หรือไม่ หากเจ้าหน้าที่อนุญาต โปรดออกมาอย่างไม่ตื่นตระหนก โปรดยื่นบัตรนี้ให้แก่เจ้าหน้าที่ หากท่านอยู่ภายในบ้านของท่าน โปรดแสดงบัตรผ่านทางหน้าต่าง หรือสอดผ่านใต้ประตู</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-tigrinya",
      number: 73,
      title: "Tigrinya",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["tigrinya", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Tigrinya</h4>
        <p>አብ ኮርፑ ብናይም ንዝተጠቅሱ ቆዋምዳ [ሕገ.መንግስታዊ] መሰላት ከምዛለም ይገልጹ።</p>
        <p>ወኪላት ኢሚግረሽን ማዕጻ ናይ ቤትኩም እንተ ኸሕኩሞም ማዕጻ ከይተከፍቲ።</p>
        <p>ብወኪላት ኢምግረሽን ዝኾን ሕጦ አንተቀሪብልኩም ንቲ ሕጦ ናይ ዘይምምላስ ወይ ብቆ ናይ ምባል መስልልኩም ሕሱውዩ።</p>
        <p>ምስ ናይ ሕጊ ጠበቃ ከይተዛረብኩም ዝኾን ነገር ከይትፍርሙ። ምስ ጠበቃ ናይ ምምዛር መስልዑን አልኩም።</p>
        <p>ካብ መንበሪ ቤት ወጺእ ከለኁም ብወኪላት ኢምግረሽን ሕጦ እንተ ተሓቲትኩም ካብቲ ቦታ ክትከዱ ከምእትንኽእለ ፍቃድ ሓቲትኩም ምስተፍቁዳልኩም ካብቲ ቦታ ኪዱ።</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-tsotsil",
      number: 74,
      title: "Tsotsil",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["tsotsil", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Tsotsil</h4>        <p>Stak’ jech cha pas lie:</p>
        <p>MU XA JAM LI STI’ A NAE ti mi tal stij sti’ a na ti yaj amteltak</p>
        <p>yu-un ti ajbalile.</p>
        <p>MU XA TA’K’BE TI K’USI TA SJAK’BOT  ti yaj amteltak yu-un</p>
        <p>ajbalile ti mi ta xa sk’oponoxuké. St’ak tsijil ta xa com.</p>
        <p>MU XA BAK’ A FIRMA ti mi ch’ab’al a chi’noj ta loil tu bu’chu ta</p>
        <p>sk’oltaote. Xu’ cha chi-in ta lo’il junuk ti b’uch’u ta xa sk’oltaote.</p>
        <p>ti mi la lok’ batel ta nae, Jak’bo, ti yaj amteltak yu-un ajbalile mi</p>
        <p>xu’ ta xa b’at mi laj yal ti xu’e, b’atan mu xa bul a bonton.</p>
        <p>AK’BO LI TARGETA LI’E TI YAJ AMTELTAK YU-UN AJBALI-</p>
        <p>LE. Ti mi te oyot ta nae, ak’bo yil li tarjetae ti b’uy xu’ ta sta ta</p>
        <p>sk’elelé mi mo’oje ak’bo lok’el ta yolon ti’ná</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-turkish",
      number: 75,
      title: "Turkish",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["turkish", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Turkish</h4>        <p>Anayasal haklarınız bulunmaktadır:</p>
        <p>Bir göçmenlik görevlisi kapıyı çalıyorsa KAPIYI AÇMAYIN.</p>
        <p>Bir göçmenlik görevlisi sizinle konuşmaya çalışırsa HİÇBİR</p>
        <p>SORUYA CEVAP VERMEYİN. Sessiz kalma hakkına sahipsiniz.</p>
        <p>Bir avukatla konuşmadan önce HİÇBİR ŞEY İMZALAMAYIN. Bir</p>
        <p>avukatla konuşma hakkına sahipsiniz.</p>
        <p>Evinizin dışındaysanız, görevliye ayrılmakta serbest olup ol-</p>
        <p>madığınızı sorun ve evet derlerse sakince ayrılın.</p>
        <p>BU KARTI GÖREVLİYE VERİN. Evinizin içindeyseniz, karW</p>
        <p>pencereden gösterin veya kapının alWndan geçirin.</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-ukrainian",
      number: 76,
      title: "Ukrainian",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["ukrainian", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Ukrainian</h4>
        <p>Ви маєте конституційні права:</p>
        <p>НЕ ВІДКРИВАЙТЕ ДВЕРЕЙ, якщо імміграційний агент стукає у двері.</p>
        <p>НЕ ВІДПОВІДАЙТЕ НА ЯКІ НЕБУДЬ ЗАПИТАННЯ від імміграційного</p>
        <p>агента, якщо вони намагаються поговорити з вами. Ви маєте право</p>
        <p>мовчати.</p>
        <p>НІЧОГО НЕ ПІДПИСУЙТЕ, не звернувшись до адвоката. Ви маєте</p>
        <p>право поговорити з адвокатом.</p>
        <p>Якщо ви знаходитесь за межами свого будинку, попросіть агента, чи</p>
        <p>можете ви вільні іти, і якщо вони скажуть “так”, ви можете іти спокійно.</p>
        <p>ДАЙТЕ ЦЮ КАРТКУ АГЕНТУ. Якщо ви перебуваєте всередині свого</p>
        <p>будинку, покажіть картку через вікно або посуньте її під двері.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-urdu",
      number: 77,
      title: "Urdu (اردو)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["urdu", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Urdu (اردو)</h4>        <p>:آپ کے آئینی حقوق ہیں</p>
        <p>اگر امیگریشن ایجنٹ دروازہ کھٹکھٹا رہا ہو۔دروازہ مت کھولیں</p>
        <p>اگر امیگریشن ایجنٹ آپ سے بات کرنے کی کوشش کرے۔ آپ کوکسی بھی سوال کا جواب نہ دیں</p>
        <p>خاموش رہنے کا حق حاصل ہے۔</p>
        <p>بغیر کسی وکیل سے مشورہ کیے۔ آپ کو وکیل سے بات کرنے کا حقکسی بھی چیز پر دستخط نہ کریں</p>
        <p>حاصل ہے۔</p>
        <p>اگر آپ اپنے گھر کے باہر ہیں، تو ایجنٹ سے پوچھیں کہ کیا آپ جانے کے لیے آزاد ہیں، اور اگر وہ</p>
        <p>ہاں کہیں، تو پرسکون انداز میں وہاں سے چلے جائیں۔</p>
        <p>اگر آپ گھر کے اندر ہیں، تو کارڈ کھڑکی سے دکھائیں یا دروازے کے نیچےیہ کارڈ ایجنٹ کو دیں۔</p>
        <p>سے سرکا دیں۔</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-vietnamese",
      number: 78,
      title: "Vietnamese (Tiếng-Việt)",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["vietnamese", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Vietnamese (Tiếng-Việt)</h4>
        <p>Ông/Bà có quyền lợi theo Hiến Pháp Hoa Kỳ:</p>
        <ul>
          <li>Không mở cửa khi nhân viên di trú gõ cửa.</li>
          <li>Không trả lời câu hỏi nào của nhân viên di trú nếu họ muổn nói</li>
        </ul>
        <p>chuyện với Ông/Bà. Ông/Bà có quyền giữ im lặng.</p>
        <ul>
          <li>Không ký một tờ giấy nào trước khi gặp luật sư. Ông/Bà có quyền</li>
        </ul>
        <p>nói chuyện với luật sư.</p>
        <ul>
          <li>Nếu Ông/Bà đang đứng bên ngoài nhà mình, hãy hỏi nhân viên</li>
        </ul>
        <p>di trú xem Ông/Bà có quyền rời chỗ đó hay không, và nếu có, hãy</p>
        <p>bình tĩnh rời đi.</p>
        <ul>
          <li>Đưa thẻ này cho nhân viên di trú. Nếu đang ở trong nhà, đưa cho</li>
        </ul>
        <p>họ coi qua cửa kiểng hoặc luồn thẻ dưới cửa ra vào.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-yoruba",
      number: 79,
      title: "Yoruba",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["yoruba", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>Yoruba</h4>
        <p>O ní ẹ̀ tọ́ lábẹ́ òfin orílẹ̀ -èdè:</p>
        <ul>
          <li>Maṣe ṣi ìlẹ̀ kùn ti asojú ìjọba fun ìwọlé-wọdé orílẹ̀ -èdè (ọlọpa</li>
        </ul>
        <p>imigiréṣàn) ba n kan ìlẹ̀ kùn.</p>
        <ul>
          <li>Maṣe dahun ibeere lati ọdọ aṣojú ìjọba fun ìwọlé-wọdé orílẹ̀ -èdè ti</li>
        </ul>
        <p>won ba n gbiyanju lati ba ọ sọrọ. O ni ẹ̀ tọ́ lati dakẹ́.</p>
        <ul>
          <li>Ma fi ọwọ́ si iwe kankan lai bá agbẹjọ́rò (lọ́yà) sọrọ. O ni ẹ̀ tọ́ lati ba</li>
        </ul>
        <p>agbẹjọ́rò re sọrọ.</p>
        <ul>
          <li>Ti won bá ba ọ ni ìta ilé rẹ, beère lowo aṣojú ìjọba ti o ba le maa lọ?</li>
        </ul>
        <p>Ti wọn ba dahun wipe, bẹẹni, rọra kuro niwaju wọn.</p>
        <ul>
          <li>Fun aṣojú ìjọba fun ìwọlé-wọdé orílẹ̀ -èdè ni iwe pélébé yii.Ti o ba</li>
        </ul>
        <p>wa ninu ile, fi iwe pélébé naa han lati oju fèrèsé tabi ki o rọra nãa</p>
        <p>lati abẹ ìlẹ̀ kùn si wọn.</p>        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
    ,{
      id: "red-card-farsi",
      number: 80,
      title: "فارسی / Farsi",
      subtitle: "Red Card Translation",
      icon: "globe",
      keywords: ["فارسی / farsi", "red card", "translation", "non-english"],
      content: `
        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>

        <div class="callout callout-critical" style="direction: auto;">
          <h4>فارسی / Farsi</h4>        <p>:هستید  قانونی  حقوق  دارای  شما</p>
        <p>. می کوبد  را  خانه  درِ  مهاجرت  مأمور  اگر  نکنید  باز  را  در.</p>
        <p>شما . کند  صحبت   شما  با  کرد  تلاش  اگر  ندهید  پاسخ  مهاجرت  مأمور  از  پرسشی  هیچ  به .</p>
        <p>. کنید  سکوت   دارید  حق</p>
        <p>حق   شما . باشید  کرده  صحبت   وکیل  یک   با  ابتدا  آنکه  بدون  نکنید  امضا  را  چیز  هیچ .</p>
        <p>. کنید  مشورت  وکیل  با  دارید</p>
        <p>هستید  خانه  از  بیرون  اگر، گفت   اگر  .خیر  یا  بروید  هستید  آزاد  آیا  که  بپرسید  مأمور  از</p>
        <p>بله ،. کنید  ترک   را  آنجا  آرام</p>
        <p>هستید  خونه  داخل  اگر . بدهید  مأمور  به  را  کارت  این، نشان  پنجره  پشت   از  را  کارت</p>
        <p>. بدهید  سر  در  زیر  از  یا  دهید</p>
        <p>هستید  قانونی  حقوق  دارای  شما</p>
        
          <hr style="margin: var(--space-md) 0; border-color: rgba(255,255,255,0.3);">
          <p><strong>You have constitutional rights:</strong></p>
          <ul>
            <li><strong>DO NOT OPEN THE DOOR</strong> if an immigration agent is knocking on the door.</li>
            <li><strong>DO NOT ANSWER ANY QUESTIONS</strong> from an immigration agent if they try to talk to you. You have the right to remain silent.</li>
            <li><strong>DO NOT SIGN ANYTHING</strong> without first speaking to a lawyer. You have the right to speak with a lawyer.</li>
            <li>If you are outside of your home, ask the agent if you are free to leave and if they say yes, leave calmly.</li>
            <li><strong>GIVE THIS CARD TO THE AGENT.</strong> If you are inside of your home, show the card through the window or slide it under the door.</li>
          </ul>
        </div>

        <div class="phrase-card" style="margin: var(--space-md) 0;">
          <button class="phrase-play" data-audio="audio/red-card-rights-english.mp3" aria-label="Play statement of rights in English">&#9654;</button>
          <span class="phrase-text">Listen to the statement of rights in English. You can play this during law enforcement encounters. Write or print this out to slide under the door, if needed.</span>
        </div>

        <div class="callout">
          <p>I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.</p>
          <p>I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.</p>
          <p>I do not give you permission to search any of my belongings based on my 4th Amendment rights.</p>
          <p>I choose to exercise my constitutional rights.</p>
        </div>

        <p><a href="#non-english-speakers">\u2190 Back to All Languages</a></p>
      `
    }
  ]
};
