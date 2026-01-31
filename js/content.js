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
          <li><button class="phrase-play" data-audio="audio/am-i-free-to-go.m4a" aria-label="Play audio: Am I free to go?">&#9654;</button> Am I free to go?</li>
          <li><button class="phrase-play" data-audio="audio/i-do-not-consent-to-any-searches.m4a" aria-label="Play audio: I do not consent to any searches.">&#9654;</button> I do not consent to any searches.</li>
          <li><button class="phrase-play" data-audio="audio/i-am-exercising-my-right-to-remain-silent.m4a" aria-label="Play audio: I am exercising my right to remain silent.">&#9654;</button> I am exercising my right to remain silent.</li>
          <li><button class="phrase-play" data-audio="audio/i-want-to-speak-to-a-lawyer.m4a" aria-label="Play audio: I want to speak to a lawyer.">&#9654;</button> I want to speak to a lawyer.</li>
          <li><button class="phrase-play" data-audio="audio/i-do-not-wish-to-answer-questions.m4a" aria-label="Play audio: I do not wish to answer questions.">&#9654;</button> I do not wish to answer questions.</li>
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
          <h4>Download Alert Assist</h4>
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
      id: "install",
      number: 22,
      title: "Install This App",
      subtitle: "Get it on your phone",
      icon: "smartphone",
      keywords: ["install", "download", "app", "phone", "home screen", "offline", "android", "iphone"],
      content: `
        <p>Install the <strong>LAWYER</strong> app on your phone so you can access your rights guide anytime — even without internet.</p>
        <div class="callout callout-info">
          <h4>App Link</h4>
          <p><strong><a href="https://rb.gy/nckotl">https://rb.gy/nckotl</a></strong></p>
        </div>

        <h3>Android (Chrome)</h3>
        <ol>
          <li>Open <strong>Google Chrome</strong> (not the LAWYER app if already installed)</li>
          <li>Go to <strong>https://rb.gy/nckotl</strong></li>
          <li>Look for an <strong>install icon</strong> in the address bar (a phone with a down arrow), or tap the <strong>three-dot menu (\u22EE)</strong> in the top-right corner of Chrome</li>
          <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong></li>
          <li>Tap <strong>"Install"</strong> or <strong>"Add"</strong> to confirm</li>
        </ol>
        <div class="callout callout-warning">
          <h4>Don't see the three-dot menu?</h4>
          <p>If you only see a search icon in the top right, you are viewing the <strong>installed app</strong>, not Chrome. Close the app and open <strong>Google Chrome</strong> from your home screen or app drawer, then type in the website address.</p>
        </div>
        <div class="callout callout-tip">
          <h4>Can't find the app after installing?</h4>
          <p>On some Android phones, newly installed apps appear in your <strong>app drawer</strong> (swipe up from the bottom of your home screen) rather than directly on the home screen. Look for the gold McGuire Law "M" icon labeled <strong>LAWYER</strong>.</p>
          <p>To move it to your home screen: <strong>long-press</strong> the app icon in the drawer and drag it to your home screen.</p>
        </div>

        <h3>iPhone (Safari)</h3>
        <ol>
          <li>Open <strong>Safari</strong> (the compass icon — not Chrome or other browsers)</li>
          <li>Go to <strong>https://rb.gy/nckotl</strong></li>
          <li>Tap the <strong>three dots (\u2026)</strong> at the bottom center of the screen to open the menu</li>
          <li>Tap the <strong>Share button</strong> (the square with an arrow pointing up)</li>
          <li>Scroll down and tap <strong>"Add to Home Screen"</strong></li>
          <li>Tap <strong>"Add"</strong> in the top-right corner</li>
        </ol>
        <div class="callout callout-info">
          <h4>Why Safari?</h4>
          <p>On iPhone, only Safari supports installing web apps to the home screen. Chrome and other browsers will not show this option.</p>
        </div>

        <h3>What you get</h3>
        <ul>
          <li><strong>Works offline</strong> — access all 22 sections without internet</li>
          <li><strong>One-tap call</strong> — call McGuire Law instantly from the app</li>
          <li><strong>No app store needed</strong> — no download fees, no account required</li>
          <li><strong>Always up to date</strong> — the app updates automatically when you're online</li>
          <li><strong>Private</strong> — no tracking, no data collection, no ads</li>
        </ul>
      `
    },
    {
      id: "non-english-speakers",
      number: 23,
      title: "Non-English Speakers",
      subtitle: "Multilingual Rights Information",
      icon: "globe",
      keywords: ["language", "non-english", "spanish", "chinese", "vietnamese", "korean", "arabic", "french", "portuguese", "interpreter", "translation", "multilingual", "foreign", "fijian", "bengali", "abkhaz", "fiji", "bangladesh", "abkhazia"],
      content: `
        <img src="images/country-flags.png" alt="Flags of 40 Countries" style="width:100%;border-radius:8px;margin-bottom:var(--space-lg);">

        <p>This section is for individuals in South Carolina who speak a language other than English. Your rights are the same regardless of what language you speak. You have the right to an interpreter during any law enforcement encounter.</p>

        <div class="callout callout-critical">
          <h4>Remember</h4>
          <p>You have the right to an interpreter. Do not sign any documents you cannot read or understand. You can remain silent in any language. If you need legal help, call McGuire Law at <a href="tel:+18884995738">(888) 499-5738</a>.</p>
        </div>

        <h3>Languages by Country of Origin</h3>
        <p>The following languages are spoken by immigrants from countries commonly represented in South Carolina:</p>
        <ul>
          <li><strong>Spanish</strong> \u2014 Mexico, Cuba, Dominican Republic, El Salvador, Colombia, Venezuela, Honduras, Spain</li>
          <li><strong>Portuguese</strong> \u2014 Brazil</li>
          <li><strong>French</strong> \u2014 France, Haiti, Canada</li>
          <li><strong>Haitian Creole</strong> \u2014 Haiti</li>
          <li><strong>Hindi</strong> \u2014 India</li>
          <li><strong>Bengali</strong> \u2014 India</li>
          <li><strong>Telugu</strong> \u2014 India</li>
          <li><strong>Tamil</strong> \u2014 India</li>
          <li><strong>Gujarati</strong> \u2014 India</li>
          <li><strong>Urdu</strong> \u2014 Pakistan, India</li>
          <li><strong>Punjabi</strong> \u2014 Pakistan, India</li>
          <li><strong>Sindhi</strong> \u2014 Pakistan</li>
          <li><strong>Mandarin Chinese</strong> \u2014 China, Taiwan</li>
          <li><strong>Cantonese</strong> \u2014 Hong Kong, China</li>
          <li><strong>Taiwanese Hokkien</strong> \u2014 Taiwan</li>
          <li><strong>Filipino (Tagalog)</strong> \u2014 Philippines</li>
          <li><strong>Vietnamese</strong> \u2014 Vietnam</li>
          <li><strong>Dari (Afghan Persian)</strong> \u2014 Afghanistan</li>
          <li><strong>Pashto</strong> \u2014 Afghanistan, Pakistan</li>
          <li><strong>Jamaican Patois</strong> \u2014 Jamaica</li>
          <li><strong>Hausa</strong> \u2014 Nigeria</li>
          <li><strong>Yoruba</strong> \u2014 Nigeria</li>
          <li><strong>Igbo</strong> \u2014 Nigeria</li>
          <li><strong>Korean</strong> \u2014 South Korea</li>
          <li><strong>Russian</strong> \u2014 Russia</li>
          <li><strong>Persian (Farsi)</strong> \u2014 Iran</li>
          <li><strong>Ukrainian</strong> \u2014 Ukraine</li>
          <li><strong>Arabic</strong> \u2014 Egypt, Iraq, Saudi Arabia, United Arab Emirates</li>
          <li><strong>Turkish</strong> \u2014 Turkey</li>
          <li><strong>Japanese</strong> \u2014 Japan</li>
          <li><strong>Hebrew</strong> \u2014 Israel</li>
          <li><strong>Polish</strong> \u2014 Poland</li>
          <li><strong>Romanian</strong> \u2014 Romania</li>
          <li><strong>Swedish</strong> \u2014 Sweden</li>
          <li><strong>Palauan</strong> \u2014 Palau</li>
          <li><strong>Kurdish</strong> \u2014 Iraq</li>
          <li><strong>Catalan</strong> \u2014 Spain</li>
          <li><strong>Fijian</strong> \u2014 Fiji</li>
          <li><strong>Bengali</strong> \u2014 Bangladesh</li>
          <li><strong>Abkhaz</strong> \u2014 Abkhazia</li>
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
  ]
};
