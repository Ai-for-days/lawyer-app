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
        <ul class="key-phrases">
          <li>Am I free to go?</li>
          <li>I do not consent to any searches.</li>
          <li>I am exercising my right to remain silent.</li>
          <li>I want to speak to a lawyer.</li>
          <li>I do not wish to answer questions.</li>
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
      id: "wallet-cards",
      number: 22,
      title: "Wallet Cards",
      subtitle: null,
      icon: "credit-card",
      keywords: ["wallet", "card", "print", "carry", "reference", "pocket", "rights card", "traffic stop card", "immigration card"],
      content: `
        <p>Wallet cards help you remember your rights when you are stressed. Keep them with you always. Reading is easier than remembering when you are nervous.</p>
        <p><button class="btn-print" onclick="window.print()">Print Wallet Cards</button></p>

        <div class="wallet-card">
          <div class="wallet-card-title">Constitutional Rights Card</div>
          <p>I am exercising my constitutional rights:</p>
          <ul>
            <li>I remain silent (5th Amendment)</li>
            <li>I do not consent to searches (4th Amendment)</li>
            <li>I want to speak with a lawyer (6th Amendment)</li>
          </ul>
          <p><em>Please respect my decision to use these rights.</em></p>
        </div>

        <div class="wallet-card">
          <div class="wallet-card-title">Traffic Stop Rights</div>
          <p>Officer, I will cooperate with lawful orders.</p>
          <ul>
            <li>I will provide required documents</li>
            <li>I prefer to remain silent beyond that</li>
            <li>I do not consent to vehicle searches</li>
            <li>I prefer not to answer questions</li>
          </ul>
          <p><em>Thank you for respecting my rights.</em></p>
        </div>

        <div class="wallet-card">
          <div class="wallet-card-title">Immigration Rights Card</div>
          <p>I am exercising my rights:</p>
          <ul>
            <li>I choose to remain silent</li>
            <li>I do not consent to entry without a judicial warrant</li>
            <li>I want to speak with my attorney</li>
            <li>I do not wish to sign anything</li>
          </ul>
          <p><em>Please slide any warrant under the door. DO NOT OPEN DOOR without warrant signed by a JUDGE.</em></p>
        </div>
      `
    },
    {
      id: "install",
      number: 23,
      title: "Install This App",
      subtitle: "Get it on your phone",
      icon: "smartphone",
      keywords: ["install", "download", "app", "phone", "home screen", "offline", "android", "iphone"],
      content: `
        <p>Install the <strong>LAWYER</strong> app on your phone so you can access your rights guide anytime — even without internet.</p>

        <h3>Android (Chrome)</h3>
        <ol>
          <li>Open <strong>Google Chrome</strong> (not the LAWYER app if already installed)</li>
          <li>Go to the address bar and visit this site</li>
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
          <li>Go to the address bar and visit this site</li>
          <li>Tap the <strong>Share button</strong> at the bottom of the screen (the square with an arrow pointing up)</li>
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
    }
  ]
};
