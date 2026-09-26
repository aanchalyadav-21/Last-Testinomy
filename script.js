const CASES = [
  {
    id: "CASE_01",
    title: "The Vanishing Manuscript",
    crime: "A rare handwritten manuscript disappears from a locked university archive hours before an exhibition.",
    suspects: [
      ["Dr. Arjun Mehta", "History Professor", "Calm, confident and highly familiar with the archive."],
      ["Riya Shah", "Archive Assistant", "Nervous, responsible for cataloguing the manuscript."],
      ["Kabir Rao", "Security Officer", "Defensive and responsible for the access-control system."],
      ["Neil Kapoor", "Research Student", "Frustrated after being denied access to the manuscript."]
    ],
    culprit: 1,
    motive: "Riya feared that a cataloguing mistake she had made would be exposed. She removed the manuscript during a brief security interruption, intending to fix the record, then panicked and hid it.",
    how: "She used her legitimate access card during the 47-second security interruption and removed the manuscript without forcing the door.",
    clues: [
      ["Manuscript last logged at 9:18 PM", "critical"],
      ["Security interruption lasted 47 seconds", "critical"],
      ["Riya was seen near the archive corridor around 9:40 PM", "critical"],
      ["Riya's statement conflicts with the access record", "critical"],
      ["The cataloguing record contains the error Riya feared", "critical"],
      ["Arjun remained near the archive later than he first claimed", "support"],
      ["Kabir manually restarted the access system", "support"],
      ["The archive door had no forced-entry damage", "support"],
      ["Neil had already left campus at 8:45 PM", "support"]
    ],
    reds: [
      "Neil wanted access to the manuscript",
      "Arjun lied about his departure time",
      "Kabir manually restarted the security system"
    ],
    questions: [
      ["What exactly were you cataloguing?", "logical", "It was the manuscript's cataloguing record, including a correction she had been worried about.", 1],
      ["Were you near the archive after nine?", "analytical", "She admits she passed the archive corridor around 9:40 PM.", 1],
      ["You seem nervous. Is there something you're worried about?", "empathetic", "She reveals she feared a cataloguing error would be discovered.", 1],
      ["The access record shows activity at 9:42. Explain that.", "analytical", "She gives a vague answer and says she cannot remember exactly where she was.", 1],
      ["Stop hiding things. You were in the corridor, weren't you?", "aggressive", "She becomes defensive and repeats that she was working late.", 1],
      ["Did you take the manuscript?", "logical", "She denies taking it directly.", 1]
    ]
  },
  {
    id: "CASE_02",
    title: "The Midnight Blackout",
    crime: "During a private technology showcase, the building's security system goes offline for exactly 11 minutes and a prototype device disappears.",
    suspects: [
      ["Maya Desai", "Event Manager", "Organized the showcase and knew the event schedule."],
      ["Dev Malhotra", "Technician", "Maintained the building's network and security equipment."],
      ["Sameer Khan", "Security Officer", "Monitored the control room during the event."],
      ["Ira Sen", "Investor Guest", "Had a strong interest in the prototype."]
    ],
    culprit: 1,
    motive: "Dev wanted to sell the prototype design to a competing startup after being passed over for a permanent technical role.",
    how: "He scheduled a maintenance script to disable the local security network and used the blackout window to remove the prototype from its display cabinet.",
    clues: [
      ["The blackout began 12 minutes before the scheduled maintenance window", "critical"],
      ["The maintenance script was edited from Dev's workstation", "critical"],
      ["The display cabinet was opened with an authorized technician credential", "critical"],
      ["Dev initially says he never touched the security console", "critical"],
      ["The prototype was removed during the 11-minute blackout", "critical"],
      ["Maya had the event schedule but no cabinet credential", "support"],
      ["Sameer was at the control room during the outage", "support"],
      ["Ira asked many questions about the prototype", "support"]
    ],
    reds: [
      "Ira strongly wanted the prototype",
      "Maya knew exactly when the showcase would be busiest",
      "Sameer was responsible for the security room"
    ],
    questions: [
      ["What maintenance was planned tonight?", "logical", "Dev says a routine network check was planned later than the actual outage.", 1],
      ["Why did the blackout start early?", "analytical", "Dev claims it may have been an automatic fault.", 1],
      ["You seem concerned about your job. Want to explain?", "empathetic", "He admits he was frustrated about his employment situation.", 1],
      ["Who had technician-level credentials?", "analytical", "He says only the technical team normally had them.", 1],
      ["Did you access the security console?", "logical", "He initially denies it.", 1],
      ["The cabinet was opened with a technician credential. Explain that.", "analytical", "He becomes evasive and changes his wording.", 1]
    ]
  },
  {
    id: "CASE_03",
    title: "The Missing Prototype",
    crime: "A startup's demonstration prototype disappears from a locked laboratory the night before an important investor presentation.",
    suspects: [
      ["Anika Rao", "Lead Developer", "Created most of the prototype and is under deadline pressure."],
      ["Rohan Mehta", "Intern", "Had limited lab access and wanted to prove himself."],
      ["Priya Nair", "Lab Technician", "Maintains equipment and access logs."],
      ["Vikram Shah", "Investor", "Had been pressuring the company about delays."]
    ],
    culprit: 2,
    motive: "Priya discovered a safety defect in the prototype and feared the company would demonstrate it without fixing the problem. She removed it to force a delay and planned to return it after the defect was addressed.",
    how: "She used a maintenance access window to move the prototype into a secured equipment cabinet rather than stealing it from the building.",
    clues: [
      ["The lab access log shows a maintenance entry after closing", "critical"],
      ["The prototype was moved, not carried out of the building", "critical"],
      ["A safety warning was added to the equipment log", "critical"],
      ["Priya knew about the warning before anyone else", "critical"],
      ["The equipment cabinet was opened with a maintenance key", "critical"],
      ["Rohan's access was limited to the outer lab", "support"],
      ["Vikram had a motive to pressure the team but no maintenance access", "support"],
      ["Anika stayed late working on presentation slides", "support"]
    ],
    reds: [
      "Rohan wanted recognition",
      "Vikram wanted the presentation to succeed",
      "Anika was under severe deadline pressure"
    ],
    questions: [
      ["Why was the lab accessed after closing?", "logical", "Priya says it was a routine maintenance check.", 2],
      ["What did you find during maintenance?", "analytical", "She reluctantly mentions an unusual safety reading.", 2],
      ["Were you worried someone would use the prototype?", "empathetic", "She admits she was concerned about the safety issue.", 2],
      ["Did you move anything?", "analytical", "She says no, then hesitates.", 2],
      ["Who could open the equipment cabinet?", "logical", "She says maintenance staff could.", 2],
      ["Where is the prototype now?", "analytical", "She finally admits she moved it to the secured equipment cabinet.", 2]
    ]
  },
  {
    id: "CASE_04",
    title: "The Altered Evidence",
    crime: "Digital evidence from an old investigation is discovered to have been altered shortly before a formal case review.",
    suspects: [
      ["Leena Joshi", "Digital Archivist", "Responsible for preserving old case records."],
      ["Aman Verma", "Former Investigator", "Worked on the original investigation."],
      ["Sara Kulkarni", "Legal Assistant", "Prepared documents for the upcoming review."],
      ["Nikhil Rao", "Journalist", "Had been researching the old case."]
    ],
    culprit: 0,
    motive: "Leena altered a timestamp in an archived file to conceal an earlier preservation mistake that could have exposed a breach in the archive process.",
    how: "She replaced one archived copy with an edited version while performing a routine migration, assuming the change would not be noticed before the review.",
    clues: [
      ["The file hash differs from the original archive index", "critical"],
      ["The alteration occurred during a scheduled migration", "critical"],
      ["Leena had migration access during that window", "critical"],
      ["The metadata timestamp conflicts with the archive log", "critical"],
      ["Leena initially says no files were replaced", "critical"],
      ["Aman had a reason to defend the original investigation", "support"],
      ["Sara handled review documents but lacked archive-write permission", "support"],
      ["Nikhil had requested public records", "support"]
    ],
    reds: [
      "Aman wanted the old investigation defended",
      "Nikhil was searching for inconsistencies",
      "Sara handled the review paperwork"
    ],
    questions: [
      ["What happens during an archive migration?", "logical", "Leena explains that files are copied and verified.", 0],
      ["Who can replace an archived file?", "analytical", "She says only authorized archive staff can write to the repository.", 0],
      ["Did any file fail verification?", "analytical", "She says one file required manual attention.", 0],
      ["Why does the timestamp differ?", "logical", "She suggests it may be a metadata problem.", 0],
      ["Were you the person who handled the migration?", "analytical", "She confirms she supervised it.", 0],
      ["Was the file replaced?", "empathetic", "She admits that she replaced the archived copy after finding a preservation error.", 0]
    ]
  },
  {
    id: "CASE_05",
    title: "The Silent Witness",
    crime: "A key witness suddenly changes their testimony before a major case review, while the original recording of their first statement cannot be found.",
    suspects: [
      ["Meera Shah", "Witness", "Originally gave a detailed statement but now remembers events differently."],
      ["Aditya Rao", "Lawyer", "Prepared the witness for the upcoming review."],
      ["Karan Joshi", "Investigator", "Maintained the original interview records."],
      ["Tanya Sen", "Recording Technician", "Handled the interview equipment and storage."]
    ],
    culprit: 3,
    motive: "Tanya accidentally overwrote the original recording while reorganizing storage and then altered her explanation because she feared losing her job.",
    how: "She replaced the missing recording with an incomplete backup and claimed the original file had never been saved.",
    clues: [
      ["The original recording has a gap in the storage index", "critical"],
      ["A backup file was created on the same day", "critical"],
      ["The backup was created from Tanya's workstation", "critical"],
      ["Tanya initially says the system failed automatically", "critical"],
      ["Meera's written statement still matches the missing recording's summary", "support"],
      ["Aditya had access to the witness but not the recording system", "support"],
      ["Karan kept paper notes of the interview", "support"]
    ],
    reds: [
      "Aditya had frequent private meetings with the witness",
      "Karan controlled the investigation records",
      "Meera changed her testimony"
    ],
    questions: [
      ["What happened to the original recording?", "logical", "Tanya says the storage system may have failed.", 3],
      ["Who handled the recording files that day?", "analytical", "She says the technical team did.", 3],
      ["Were you worried about the storage system?", "empathetic", "She admits there had been storage problems that week.", 3],
      ["Why was a backup created from your workstation?", "analytical", "She says it was part of routine maintenance.", 3],
      ["Did you overwrite anything?", "logical", "She denies intentionally changing the recording.", 3],
      ["Can you explain the missing index entry?", "analytical", "She finally admits she overwrote the original while reorganizing files.", 3]
    ]
  }
];
/* =========================
   GAME STATE
========================= */
let state = {
  player: "",
  case: null,
  suspect: 0,
  qIndex: 0,
  messages: [],
  discovered: new Set(),
asked: new Set(),
questionSets: [],
evidenceAtStart: new Set(),
  styles: {
    logical: 0,
    analytical: 0,
    empathetic: 0,
    aggressive: 0
  },
  contradictions: 0
};
const app = document.getElementById("app");
/* =========================
   BASIC HELPERS
========================= */
function esc(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}
function shell(content) {
  app.innerHTML = `
    <section class="screen">
      <div class="panel">
        ${content}
      </div>
    </section>
  `;
}
/* =========================
   START SCREEN
========================= */
function start() {
  shell(`
    <span class="badge">PROMPT & PLAY • BROWSER MYSTERY</span>
    <h1>THE LAST TESTIMONY</h1>
    <p class="subtitle">
      Every case hides a different truth.
      Interrogate suspects, discover evidence,
      catch contradictions, and see what your
      investigation style says about you.
    </p>
    <input
      id="name"
      maxlength="24"
      placeholder="Detective name"
      style="
        width:100%;
        padding:14px;
        border-radius:12px;
        border:1px solid #354153;
        background:#0f141c;
        color:white;
        margin:16px 0
      "
    >
    <button class="primary" onclick="beginCase()">
      Start Investigation
    </button>
    <p class="small" style="margin-top:18px">
      5 cases • 4 suspects • interrogation • evidence deduction • detective analytics
    </p>
  `);
}
/* =========================
   CREATE QUESTION SETS
========================= */
function buildQuestionSets() {

  const sets = [];

  // CASE 1 — THE VANISHING MANUSCRIPT
  if (state.case.id === "CASE_01") {

    sets.push([
      {
        text: "What time did you leave the archive area?",
        style: "logical",
        response: "Arjun says he left earlier in the evening, but later admits he remained near the archive longer than he first remembered.",
        clue: 5
      },
      {
        text: "Why did you need to remain near the archive?",
        style: "analytical",
        response: "He says he was checking material related to the upcoming exhibition.",
        clue: null
      },
      {
        text: "Did you notice anything unusual with the security system?",
        style: "logical",
        response: "Arjun says he noticed the archive system briefly stopped responding.",
        clue: 1
      },
      {
        text: "Who else was working in the archive that evening?",
        style: "analytical",
        response: "He mentions Riya and says several people had legitimate reasons to be there.",
        clue: null
      },
      {
        text: "Did you see Riya after 9:30 PM?",
        style: "analytical",
        response: "Arjun admits he saw Riya somewhere near the archive corridor.",
        clue: 2
      },
      {
        text: "Why did your initial departure time differ from the access records?",
        style: "logical",
        response: "Arjun becomes uncomfortable and admits he stayed longer than he originally stated.",
        clue: 5
      }
    ]);

    sets.push([
      {
        text: "What work were you completing before the exhibition?",
        style: "logical",
        response: "Riya says she was checking and correcting the manuscript's catalogue record.",
        clue: 4
      },
      {
        text: "Why did the manuscript's catalogue entry require correction?",
        style: "analytical",
        response: "She explains that she had noticed an error in the catalogue information.",
        clue: 4
      },
      {
        text: "Where were you when the security interruption occurred?",
        style: "logical",
        response: "Riya initially says she was working elsewhere, but becomes uncertain when asked about the exact time.",
        clue: null
      },
      {
        text: "Did you return to the archive corridor around 9:40 PM?",
        style: "analytical",
        response: "Riya eventually admits that she passed through the corridor around that time.",
        clue: 2
      },
      {
        text: "Who normally has access to the archive?",
        style: "logical",
        response: "She explains that authorized staff, including herself, could enter the archive.",
        clue: 7
      },
      {
        text: "Can you explain the access-card activity recorded at 9:42 PM?",
        style: "analytical",
        response: "Riya gives an unclear explanation and cannot confidently account for the access record.",
        clue: 3
      }
    ]);

    sets.push([
      {
        text: "What caused the security system interruption?",
        style: "logical",
        response: "Kabir says the access system temporarily stopped responding and required a manual restart.",
        clue: 6
      },
      {
        text: "How long was the system unavailable?",
        style: "analytical",
        response: "He says the interruption lasted approximately 47 seconds.",
        clue: 1
      },
      {
        text: "What did you do when the system went offline?",
        style: "logical",
        response: "Kabir says he went to the control system and restarted it manually.",
        clue: 6
      },
      {
        text: "Who could enter the archive during the interruption?",
        style: "analytical",
        response: "He explains that someone with a valid access card could potentially enter.",
        clue: 7
      },
      {
        text: "Did you personally restart the access system?",
        style: "logical",
        response: "Kabir confirms that he manually restarted the system.",
        clue: 6
      },
      {
        text: "Did you notice anything unusual in the access records afterward?",
        style: "analytical",
        response: "Kabir says there was an access event during the interruption, but he did not immediately investigate it.",
        clue: 3
      }
    ]);

    sets.push([
      {
        text: "Why were you trying to access the manuscript?",
        style: "logical",
        response: "Neil says he wanted to study the manuscript for his research.",
        clue: 8
      },
      {
        text: "When were you last inside the archive?",
        style: "analytical",
        response: "Neil says he left the archive well before the manuscript disappeared.",
        clue: 8
      },
      {
        text: "Why did you leave campus at 8:45 PM?",
        style: "logical",
        response: "Neil explains that he had finished his research work and left campus.",
        clue: 8
      },
      {
        text: "Did you speak to Riya before leaving?",
        style: "empathetic",
        response: "Neil says he briefly spoke with Riya about his request to view the manuscript.",
        clue: null
      },
      {
        text: "Did you know about the manuscript's catalogue problem?",
        style: "analytical",
        response: "Neil says he had noticed some catalogue information looked incomplete but did not know the details.",
        clue: 4
      },
      {
        text: "Did you return anywhere near the archive later that night?",
        style: "logical",
        response: "Neil firmly says he did not return after leaving campus.",
        clue: 8
      }
    ]);
  }

  // CASE 2 — THE MIDNIGHT BLACKOUT
  else if (state.case.id === "CASE_02") {

    sets.push([
      {
        text: "What was your schedule for the technology showcase?",
        style: "logical",
        response: "Maya explains the planned event schedule and the time at which maintenance was supposed to occur.",
        clue: 5
      },
      {
        text: "When was the security maintenance originally scheduled?",
        style: "analytical",
        response: "She says the maintenance was scheduled later than the actual blackout.",
        clue: 0
      },
      {
        text: "Who knew about the maintenance schedule?",
        style: "logical",
        response: "Maya says the event and technical teams were aware of the planned maintenance.",
        clue: null
      },
      {
        text: "Did you have access to the prototype cabinet?",
        style: "analytical",
        response: "Maya says she managed the event but did not have technician-level cabinet credentials.",
        clue: 5
      },
      {
        text: "Where were you when the blackout began?",
        style: "logical",
        response: "Maya says she was coordinating the showcase and noticed the outage when the security system stopped responding.",
        clue: null
      },
      {
        text: "Did you notice anything unusual before the outage?",
        style: "empathetic",
        response: "She remembers that the technical team appeared to be preparing for maintenance earlier than expected.",
        clue: 0
      }
    ]);

    sets.push([
      {
        text: "What maintenance was planned tonight?",
        style: "logical",
        response: "Dev says a routine network check was planned later than the actual outage.",
        clue: 0
      },
      {
        text: "Why did the blackout start early?",
        style: "analytical",
        response: "Dev claims it may have been caused by an automatic system fault.",
        clue: 0
      },
      {
        text: "Were you frustrated about your position at the company?",
        style: "empathetic",
        response: "Dev admits he was disappointed about not receiving a permanent technical role.",
        clue: null
      },
      {
        text: "Who had technician-level credentials?",
        style: "analytical",
        response: "Dev says the technical team normally had access to those credentials.",
        clue: 2
      },
      {
        text: "Did you access the security console?",
        style: "logical",
        response: "Dev initially denies accessing the console.",
        clue: 3
      },
      {
        text: "The cabinet was opened with a technician credential. Explain that.",
        style: "analytical",
        response: "Dev becomes evasive and changes his explanation about how the security system was accessed.",
        clue: 2
      }
    ]);

    sets.push([
      {
        text: "What did you observe from the control room?",
        style: "logical",
        response: "Sameer says the security system suddenly went offline during the showcase.",
        clue: 4
      },
      {
        text: "How long did the security system remain offline?",
        style: "analytical",
        response: "Sameer confirms that the outage lasted approximately 11 minutes.",
        clue: 4
      },
      {
        text: "Did anyone contact you before the blackout?",
        style: "empathetic",
        response: "Sameer says nobody officially notified him that the system would go offline early.",
        clue: 0
      },
      {
        text: "Who normally controls the security console?",
        style: "logical",
        response: "He explains that technical staff can perform maintenance-level actions on the system.",
        clue: 2
      },
      {
        text: "Did you leave the control room during the outage?",
        style: "analytical",
        response: "Sameer says he remained in the control room while trying to restore the system.",
        clue: 6
      },
      {
        text: "Did you see who accessed the prototype area?",
        style: "logical",
        response: "Sameer says the outage prevented him from seeing normal security activity.",
        clue: 4
      }
    ]);

    sets.push([
      {
        text: "Why were you so interested in the prototype?",
        style: "logical",
        response: "Ira says the prototype had significant commercial potential and she wanted to understand its technology.",
        clue: 7
      },
      {
        text: "Did you know when the security maintenance was scheduled?",
        style: "analytical",
        response: "Ira says she knew there was maintenance planned but did not know the exact technical procedure.",
        clue: null
      },
      {
        text: "Did you have access to the display cabinet?",
        style: "logical",
        response: "Ira says she was only an invited investor and had no technician credentials.",
        clue: 2
      },
      {
        text: "Where were you when the blackout started?",
        style: "analytical",
        response: "Ira says she was speaking with other guests when the lights and security systems changed.",
        clue: null
      },
      {
        text: "Did you ask anyone about the prototype after the outage?",
        style: "empathetic",
        response: "She admits she asked whether the prototype was safe because she was concerned about the demonstration.",
        clue: 7
      },
      {
        text: "Did you take the prototype?",
        style: "logical",
        response: "Ira firmly denies taking it and points out that she had no cabinet credentials.",
        clue: 2
      }
    ]);
  }

  // CASE 3 — THE MISSING PROTOTYPE
  else if (state.case.id === "CASE_03") {

    sets.push([
      {
        text: "What were you working on before the presentation?",
        style: "logical",
        response: "Anika says she was preparing the presentation and checking the prototype's development status.",
        clue: 7
      },
      {
        text: "Why were you still at the lab late?",
        style: "analytical",
        response: "She says the presentation deadline required her to work late.",
        clue: 7
      },
      {
        text: "Did you notice anything wrong with the prototype?",
        style: "logical",
        response: "Anika says she had not received a formal report about a serious safety problem.",
        clue: 2
      },
      {
        text: "Who had maintenance access to the lab?",
        style: "analytical",
        response: "She explains that the lab technician normally handled maintenance access.",
        clue: 4
      },
      {
        text: "Did you see Priya working after closing?",
        style: "logical",
        response: "Anika says she noticed Priya performing what appeared to be routine maintenance.",
        clue: 0
      },
      {
        text: "Did you move the prototype yourself?",
        style: "analytical",
        response: "Anika denies moving it and says she was focused on presentation preparation.",
        clue: 7
      }
    ]);

    sets.push([
      {
        text: "What were you allowed to access as an intern?",
        style: "logical",
        response: "Rohan explains that his access was limited to the outer laboratory area.",
        clue: 5
      },
      {
        text: "Why were you still interested in the prototype?",
        style: "empathetic",
        response: "Rohan says he wanted to learn from the project and prove himself to the team.",
        clue: null
      },
      {
        text: "Could you enter the equipment cabinet?",
        style: "logical",
        response: "Rohan says he did not have the maintenance key needed to open it.",
        clue: 4
      },
      {
        text: "Did you see anyone enter the lab after closing?",
        style: "analytical",
        response: "Rohan remembers seeing maintenance activity after normal working hours.",
        clue: 0
      },
      {
        text: "Did you know about the safety warning?",
        style: "analytical",
        response: "Rohan says he had only heard that there might be a technical problem but did not know the details.",
        clue: 2
      },
      {
        text: "Did you take the prototype?",
        style: "logical",
        response: "Rohan denies taking it and says his access would not have allowed him to move it into the secured cabinet.",
        clue: 5
      }
    ]);

    sets.push([
      {
        text: "Why was the lab accessed after closing?",
        style: "logical",
        response: "Priya says she was carrying out what she describes as a routine maintenance check.",
        clue: 0
      },
      {
        text: "What did you find during maintenance?",
        style: "analytical",
        response: "She reluctantly mentions an unusual safety reading associated with the prototype.",
        clue: 2
      },
      {
        text: "Were you worried someone would use the prototype?",
        style: "empathetic",
        response: "Priya admits she was concerned that the prototype might be demonstrated before the safety issue was addressed.",
        clue: 2
      },
      {
        text: "Did you move anything?",
        style: "analytical",
        response: "Priya initially says no, but hesitates when asked about the equipment cabinet.",
        clue: 1
      },
      {
        text: "Who could open the equipment cabinet?",
        style: "logical",
        response: "She explains that maintenance staff had the required key.",
        clue: 4
      },
      {
        text: "Where is the prototype now?",
        style: "analytical",
        response: "Priya finally admits that she moved the prototype into the secured equipment cabinet.",
        clue: 1
      }
    ]);

    sets.push([
      {
        text: "Why were you pressuring the company about the presentation?",
        style: "logical",
        response: "Vikram says the presentation was important for the company's investment plans.",
        clue: 6
      },
      {
        text: "Did you have access to the laboratory after closing?",
        style: "analytical",
        response: "Vikram says he did not have maintenance access to the laboratory.",
        clue: 6
      },
      {
        text: "Did you know the prototype had a safety problem?",
        style: "empathetic",
        response: "Vikram says he had heard nothing specific about a safety defect.",
        clue: null
      },
      {
        text: "Who normally handled laboratory maintenance?",
        style: "logical",
        response: "He identifies Priya as the person responsible for maintaining the laboratory equipment.",
        clue: 4
      },
      {
        text: "Did you see Priya after the lab officially closed?",
        style: "analytical",
        response: "Vikram says he noticed Priya still working in the facility.",
        clue: 0
      },
      {
        text: "Did you remove the prototype?",
        style: "logical",
        response: "Vikram denies removing it and points out that he lacked maintenance access.",
        clue: 6
      }
    ]);
  }

  // CASE 4 — THE ALTERED EVIDENCE
  else if (state.case.id === "CASE_04") {

    sets.push([
      {
        text: "What happens during an archive migration?",
        style: "logical",
        response: "Leena explains that archived files are copied, checked and verified during migration.",
        clue: 1
      },
      {
        text: "Who can replace an archived file?",
        style: "analytical",
        response: "She says only authorized archive staff can write changes to the repository.",
        clue: 2
      },
      {
        text: "Did any file fail verification?",
        style: "analytical",
        response: "Leena says one file required manual attention during the migration.",
        clue: 1
      },
      {
        text: "Why does the timestamp differ?",
        style: "logical",
        response: "She suggests that the difference could be caused by a metadata problem.",
        clue: 3
      },
      {
        text: "Were you the person who handled the migration?",
        style: "analytical",
        response: "Leena confirms that she supervised the migration process.",
        clue: 2
      },
      {
        text: "Was the file replaced?",
        style: "empathetic",
        response: "Leena eventually admits that she replaced the archived copy after discovering a preservation error.",
        clue: 4
      }
    ]);

    sets.push([
      {
        text: "Why did you want the original investigation records preserved?",
        style: "logical",
        response: "Aman says the original investigation contained conclusions he still believed were important.",
        clue: 5
      },
      {
        text: "Did you have permission to alter the archive?",
        style: "analytical",
        response: "Aman says he no longer had authority to modify archived digital evidence.",
        clue: 6
      },
      {
        text: "Did you notice anything unusual in the old evidence?",
        style: "empathetic",
        response: "He says some records looked inconsistent but he did not modify them.",
        clue: 3
      },
      {
        text: "When did you last access the archive?",
        style: "logical",
        response: "Aman says he reviewed documents but did not have archive-write permission.",
        clue: 6
      },
      {
        text: "Did you replace the digital evidence?",
        style: "analytical",
        response: "Aman denies replacing any archived file.",
        clue: 6
      },
      {
        text: "Who would normally have permission to replace an archived file?",
        style: "logical",
        response: "Aman says the digital archive staff would normally control that process.",
        clue: 2
      }
    ]);

    sets.push([
      {
        text: "What documents were you preparing for the review?",
        style: "logical",
        response: "Sara says she was preparing legal documents and review materials.",
        clue: 6
      },
      {
        text: "Did you have permission to modify archived evidence?",
        style: "analytical",
        response: "Sara says she could view documents but could not write changes to the archive.",
        clue: 6
      },
      {
        text: "Did you notice the timestamp problem?",
        style: "analytical",
        response: "Sara says she noticed a discrepancy while preparing the review paperwork.",
        clue: 3
      },
      {
        text: "Who did you contact about the discrepancy?",
        style: "empathetic",
        response: "She says she expected the archive staff to verify the file before the review.",
        clue: 1
      },
      {
        text: "Did you replace any file?",
        style: "logical",
        response: "Sara denies changing any archived evidence.",
        clue: 6
      },
      {
        text: "Who had archive-write access?",
        style: "analytical",
        response: "Sara identifies the authorized digital archive staff as the people with write permission.",
        clue: 2
      }
    ]);

    sets.push([
      {
        text: "Why were you researching this old case?",
        style: "logical",
        response: "Nikhil says he was investigating the case for a story and had requested public records.",
        clue: 7
      },
      {
        text: "Did you have access to the internal archive?",
        style: "analytical",
        response: "Nikhil says he could request public records but did not have internal archive access.",
        clue: 7
      },
      {
        text: "What inconsistency were you looking for?",
        style: "empathetic",
        response: "He says he was comparing publicly available records with the information from the original investigation.",
        clue: null
      },
      {
        text: "Did you alter any of the evidence?",
        style: "logical",
        response: "Nikhil denies modifying any internal file.",
        clue: 7
      },
      {
        text: "When did you last communicate with the archive staff?",
        style: "analytical",
        response: "He says he contacted the archive while requesting records.",
        clue: 7
      },
      {
        text: "Who would have been able to replace an archived file?",
        style: "logical",
        response: "Nikhil says only authorized archive personnel would have that level of access.",
        clue: 2
      }
    ]);
  }

  // CASE 5 — THE SILENT WITNESS
  else if (state.case.id === "CASE_05") {

    sets.push([
      {
        text: "What do you remember about your original statement?",
        style: "logical",
        response: "Meera says her first statement contained details that she now remembers differently.",
        clue: 4
      },
      {
        text: "Why did your testimony change?",
        style: "empathetic",
        response: "Meera says the passage of time and pressure surrounding the review affected how she remembered the events.",
        clue: 4
      },
      {
        text: "Did anyone ask you to change your statement?",
        style: "analytical",
        response: "Meera says nobody directly instructed her to change it.",
        clue: null
      },
      {
        text: "Who was present during your original interview?",
        style: "logical",
        response: "She remembers the investigator, recording staff and legal representatives being involved at different points.",
        clue: null
      },
      {
        text: "Did you hear the original recording after the interview?",
        style: "analytical",
        response: "Meera says she expected the recording to be preserved as part of the case file.",
        clue: 0
      },
      {
        text: "Does your written statement match what you originally said?",
        style: "logical",
        response: "Meera's written statement still matches the summary of the missing original recording.",
        clue: 4
      }
    ]);

    sets.push([
      {
        text: "How did you prepare Meera for the review?",
        style: "logical",
        response: "Aditya says he reviewed the case documents and helped Meera understand the review process.",
        clue: 5
      },
      {
        text: "Did you have access to the original recording?",
        style: "analytical",
        response: "Aditya says he could discuss the witness statement but did not control the recording system.",
        clue: 5
      },
      {
        text: "Did you ask for the original recording?",
        style: "logical",
        response: "He says he expected the recording to be available for the review.",
        clue: 0
      },
      {
        text: "Did you tell Meera to change her testimony?",
        style: "empathetic",
        response: "Aditya denies asking her to deliberately change her testimony.",
        clue: 5
      },
      {
        text: "Who handled the recording equipment?",
        style: "analytical",
        response: "Aditya says the recording technician was responsible for the equipment and storage.",
        clue: 2
      },
      {
        text: "Did you delete or replace the recording?",
        style: "logical",
        response: "Aditya denies having the technical access needed to modify the recording.",
        clue: 5
      }
    ]);

    sets.push([
      {
        text: "What records did you maintain from the interview?",
        style: "logical",
        response: "Karan says he maintained investigation notes and paper records from the interview.",
        clue: 6
      },
      {
        text: "Did you control the digital recording system?",
        style: "analytical",
        response: "Karan says he maintained investigation records but did not operate the recording storage system.",
        clue: 6
      },
      {
        text: "What did your notes say about Meera's original statement?",
        style: "logical",
        response: "His notes are consistent with the details contained in the missing recording's summary.",
        clue: 4
      },
      {
        text: "When did you first learn the recording was missing?",
        style: "analytical",
        response: "Karan says he learned about the missing file when the review team requested it.",
        clue: 0
      },
      {
        text: "Who normally handled recording storage?",
        style: "logical",
        response: "Karan identifies the recording technician as the person responsible for storage and technical handling.",
        clue: 2
      },
      {
        text: "Did you remove the original recording?",
        style: "analytical",
        response: "Karan denies removing or altering the recording.",
        clue: 6
      }
    ]);

    sets.push([
      {
        text: "What happened to the original recording?",
        style: "logical",
        response: "Tanya says the storage system may have failed and that the original file could not be found.",
        clue: 0
      },
      {
        text: "Who handled the recording files that day?",
        style: "analytical",
        response: "She says the technical team handled the files and routine storage work.",
        clue: 2
      },
      {
        text: "Were you worried about the storage system?",
        style: "empathetic",
        response: "Tanya admits there had been storage problems that week.",
        clue: null
      },
      {
        text: "Why was a backup created from your workstation?",
        style: "analytical",
        response: "Tanya says it was part of routine maintenance.",
        clue: 2
      },
      {
        text: "Did you overwrite anything?",
        style: "logical",
        response: "Tanya initially denies intentionally changing the recording.",
        clue: 3
      },
      {
        text: "Can you explain the missing index entry?",
        style: "analytical",
        response: "Tanya finally admits that she overwrote the original while reorganizing the files.",
        clue: 3
      }
    ]);
  }
  // Make the sixth question an aggressive challenge
  const aggressiveQuestions = {
    CASE_01: [
      "Your departure time doesn't match the records. Explain that.",
      "The access log places you near the archive. Why did you leave that out?",
      "You restarted the system yourself. Why didn't you report the access event?",
      "You wanted access to the manuscript. Are you hiding anything about that?"
    ],

    CASE_02: [
      "The blackout began early. Why didn't you report the schedule change?",
      "The maintenance script came from your workstation. Explain that.",
      "You were responsible for security. Why couldn't you account for the outage?",
      "You wanted the prototype. How do you explain your interest in it?"
    ],

    CASE_03: [
      "You were working late. Explain why the prototype was moved.",
      "Your access was limited. How do you know what happened inside the lab?",
      "You knew about the safety issue. Why didn't you report it sooner?",
      "You were pressuring the team. What are you leaving out?"
    ],

    CASE_04: [
      "You supervised the migration. Explain why the archived file changed.",
      "You wanted the original investigation defended. Did you alter the records?",
      "You noticed the timestamp discrepancy. Why didn't you report it immediately?",
      "You were investigating the case. Did you access files you weren't authorized to change?"
    ],

    CASE_05: [
      "Your testimony changed. Explain exactly what caused the difference.",
      "You prepared the witness. Did you pressure her to change her statement?",
      "You maintained the case records. Why is the original recording missing?",
      "The backup came from your workstation. Explain how that happened."
    ]
  };

  const prompts = aggressiveQuestions[state.case.id];

  if (prompts) {
    sets.forEach((questions, suspectIndex) => {
      const lastQuestion = questions[questions.length - 1];

      lastQuestion.text = prompts[suspectIndex];
      lastQuestion.style = "aggressive";
    });
  }

  return sets;
}
/* =========================
   BEGIN RANDOM CASE
========================= */
function beginCase() {
  state.player =
    document.getElementById("name").value.trim() || "Detective";
  state.case =
    CASES[Math.floor(Math.random() * CASES.length)];
  state.suspect = 0;
  state.qIndex = 0;
  state.messages = [];
  state.discovered = new Set();
  state.asked = new Set();
  state.styles = {
    logical: 0,
    analytical: 0,
    empathetic: 0,
    aggressive: 0
  };
  state.contradictions = 0;
  // IMPORTANT FIX:
  // Create questions for every suspect.
  state.questionSets = buildQuestionSets();
  showBrief();
}
/* =========================
   CASE INTRODUCTION
========================= */
function showBrief() {
  const c = state.case;
  shell(`
    <span class="badge">${esc(c.id)}</span>
    <h2>${esc(c.title)}</h2>
    <p class="crime">
      ${esc(c.crime)}
    </p>
    <div class="notice">
      <b>Your mission:</b>
      identify the culprit, understand how the crime happened,
      and support your accusation with evidence.
    </div>
    <h3>Suspects</h3>
    <div class="suspects">
      ${c.suspects.map((s, i) => `
        <div class="card">
          <h3>${esc(s[0])}</h3>
          <div class="muted">
            ${esc(s[1])}
          </div>
          <p>
            ${esc(s[2])}
          </p>
        </div>
      `).join("")}
    </div>
    <button class="primary" onclick="investigate()">
      Begin Interrogation
    </button>
  `);
}
/* =========================
   START INTERROGATING
========================= */
function investigate() {
  if (state.suspect >= state.case.suspects.length) {
    return finalAccusation();
  }
  state.qIndex = 0;
  // Reset only questions for the current suspect.
  state.asked = new Set();
  state.evidenceAtStart = new Set(state.discovered);
  const s = state.case.suspects[state.suspect];
  state.messages = [
    {
      who: "suspect",
      text: `${s[0]}: "${openingLine(state.suspect)}"`
    }
  ];
  renderChat();
}
/* =========================
   OPENING LINES
========================= */
function openingLine(i) {
  const openings = {
    CASE_01: [
      "The exhibition is tomorrow. I was checking the manuscript arrangements, but I didn't remove anything.",
      "I've been correcting catalogue entries all evening. I know the manuscript is important, and I know people will ask me about the records.",
      "I was monitoring the archive access system. There was a brief interruption, but I restored the system.",
      "I requested access to the manuscript for my research and was refused. I left campus before the incident."
    ],

    CASE_02: [
      "The showcase schedule was carefully planned. I was coordinating guests when the security system went offline.",
      "I was responsible for the technical maintenance. The network outage wasn't supposed to happen at that time.",
      "I was in the security control room when the system stopped reporting. I focused on getting it back online.",
      "I came to see the prototype demonstration. I was interested in the technology, not in taking anything."
    ],

    CASE_03: [
      "I was preparing the investor presentation. The prototype was supposed to be ready for tomorrow's demonstration.",
      "I was helping with tasks around the lab, but my access was limited. I didn't have permission to enter every area.",
      "I was carrying out equipment checks. There was a safety concern, but I followed the usual maintenance process.",
      "I expected the prototype to be demonstrated. I was pressing the team for progress, not asking anyone to hide it."
    ],

    CASE_04: [
      "I was responsible for preserving the archived files. The migration was routine, and the records should have remained intact.",
      "I worked on the original investigation. I want the review to use accurate records, but I no longer manage the archive.",
      "I was preparing documents for the review. My role was to organize the paperwork, not modify archived evidence.",
      "I requested public records while researching the old case. I had no reason or access to alter the archive."
    ],

    CASE_05: [
      "I gave a statement earlier, but some details are harder to remember now. I understand why the review team wants to compare the records.",
      "I helped prepare Meera for the review. I explained the process, but her testimony has to be her own account.",
      "I maintained the investigation notes. The interview recording should also have been stored, but the technical system wasn't under my control.",
      "I handled the interview recording equipment and storage. I was told the original file could not be located."
    ]
  };

  return openings[state.case.id]?.[i] ||
    "I will answer what I can about this investigation.";
}
/* =========================
   RENDER INTERROGATION
========================= */
function renderChat() {
  const s =
    state.case.suspects[state.suspect];
  const questions =
    state.questionSets[state.suspect];
  const availableQuestions =
    questions
      .map((q, index) => ({ q, index }))
      .filter(item => !state.asked.has(item.index));
  shell(`
    <div style="
      display:flex;
      justify-content:space-between;
      gap:10px;
      flex-wrap:wrap
    ">
      <span class="badge">
        ${esc(state.case.title)}
      </span>
      <span class="small">
        Suspect ${state.suspect + 1}/${state.case.suspects.length}
      </span>
    </div>
    <h2>${esc(s[0])}</h2>
    <p class="small">
      ${esc(s[1])}
    </p>
    <div class="notice">
      <b>Investigation progress:</b>
      ${state.asked.size}/${questions.length}
      questions asked
    </div>
    <div class="chat">
      ${state.messages.map(m => `
        <div class="msg ${m.who}">
          ${esc(m.text)}
        </div>
      `).join("")}
    </div>
    ${
      availableQuestions.length > 0
      ?
      `
      <div class="choicebox">
        <h3>
          Choose a question
        </h3>
        ${availableQuestions.map(item => `
          <button
            class="choice"
            onclick="ask(${item.index})"
          >
            ${esc(item.q.text)}
          </button>
        `).join("")}
      </div>
      `
      :
      `
      <div class="notice">
        <b>You have asked everything important from this suspect.</b>
        <p>
          Review what you learned and decide whether to continue.
        </p>
      </div>
      `
    }
    <button
      class="primary"
      onclick="finishSuspect()"
      style="margin-top:15px"
    >
      ${
        state.suspect <
        state.case.suspects.length - 1
        ? "Finish With This Suspect"
        : "Finish Interrogation"
      }
    </button>
    <h3 style="margin-top:25px">
      Evidence Board
    </h3>
    <div class="evidence">
      ${
        state.discovered.size === 0
        ?
        `<div class="evidence-empty" style="padding:18px;border:1px dashed #39485c;border-radius:14px;text-align:center">
          <span>NO CONFIRMED EVIDENCE</span>
          <p>Question suspects to uncover case records, logs and statements.</p>
        </div>`
        :
        [...state.discovered].map(index => evidenceCard(index)).join("")
      }
    </div>
  `);
}
/* =========================
   EVIDENCE DISPLAY
========================= */
function evidenceDetails(index) {
const data = {
  CASE_01: [
    ["ARCHIVE LOG","09:18 PM","University Archive Register","The manuscript was last officially logged in the archive at 9:18 PM.","Establishes the last confirmed time the manuscript was accounted for."],

    ["SECURITY SYSTEM","09:41 PM","Archive Access System","Archive monitoring was interrupted for exactly 47 seconds, beginning at 9:41 PM.","Creates a narrow window in which the archive could be entered without normal monitoring."],

    ["CORRIDOR OBSERVATION","09:40 PM","Archive Corridor Camera Log","Riya Shah was recorded near the archive corridor at 9:40 PM, shortly before the security interruption.","Places her near the archive immediately before the critical access window."],

    ["ACCESS RECORD","09:41 PM","Electronic Access Log","Riya Shah's access card was used at 9:41 PM, during the recorded security interruption.","Connects her authorized access to the period when the archive was vulnerable."],

    ["CATALOGUE RECORD","Before 09:18 PM","Manuscript Catalogue","The catalogue contains the recording error that Riya had been worried would be discovered.","Provides a possible reason for Riya to interfere with the manuscript record."],

    ["STAFF TIMELINE","After 09:30 PM","Staff Movement Record","Arjun remained near the archive after 9:30 PM, later than he initially claimed.","Makes his timeline questionable, but does not establish archive access."],

    ["SYSTEM LOG","09:44 PM","Security Control Log","Kabir manually restarted the access-control system at 9:44 PM, after the interruption.","Explains the system recovery but does not place him inside the archive."],

    ["DOOR INSPECTION","11:47 PM","Archive Security Report","The archive door inspection at 11:47 PM found no signs of forced entry.","Suggests the person who entered used authorized access rather than forcing the door."],

    ["CAMPUS EXIT LOG","08:45 PM","Campus Exit Record","Neil's campus exit was recorded at 8:45 PM, before the later archive activity.","Weakens the possibility that Neil carried out the later access."]
  ],

  CASE_02: [
    ["EVENT TIMELINE","08:48 PM","Showcase Schedule","The security blackout began at 8:48 PM, twelve minutes before the scheduled 9:00 PM maintenance window.","Shows that the outage did not occur at the expected maintenance time."],

    ["SCRIPT AUDIT","08:42 PM","Network Maintenance Log","The maintenance script was edited from Dev Malhotra's workstation at 8:42 PM, shortly before the unexpected outage.","Links the unexpected outage to a workstation assigned to the technician."],

    ["CABINET ACCESS","08:52 PM","Display Cabinet Access Log","The prototype cabinet was opened at 8:52 PM using an authorized technician credential, during the blackout.","Limits the relevant access to personnel with technician-level authorization."],

    ["SECURITY CONSOLE","09:06 PM","Control Room Interview Log","At 9:06 PM, Dev stated that he had never accessed the security console.","Creates a discrepancy when compared with the technical records."],

    ["PROTOTYPE TIMELINE","08:48 PM–08:59 PM","Showcase Security Log","The prototype disappeared during the eleven-minute period when the security system was offline.","Places the removal inside the same window as the unauthorized blackout."],

    ["EVENT ACCESS","08:30 PM","Event Access Register","Maya entered the showcase at 8:30 PM and knew the event schedule, but did not have a cabinet credential.","Separates scheduling knowledge from physical access."],

    ["CONTROL ROOM LOG","08:50 PM–08:59 PM","Security Room Log","Sameer was recorded in the control room during the security outage.","Places him at the monitoring station during the outage."],

    ["GUEST RECORD","08:35 PM","Visitor Log","Ira asked about the prototype at 8:35 PM but had no technician credential.","Shows interest without establishing the required access."]
  ],

  CASE_03: [
    ["LAB ACCESS LOG","08:04 PM","Laboratory Access System","A maintenance entry was recorded at 8:04 PM, after the laboratory's official 8:00 PM closing time.","Identifies a maintenance access window around the time the prototype disappeared."],

    ["LOCATION RECORD","08:12 PM","Prototype Tracking Log","At 8:12 PM, the prototype's tracking record showed movement to another location inside the facility.","Shows that the incident involved relocation, not an external removal."],

    ["EQUIPMENT LOG","07:15 PM","Safety Equipment Log","A safety warning was added to the prototype's equipment record at 7:15 PM.","Establishes a specific technical issue connected to the missing prototype."],

    ["MAINTENANCE RECORD","07:28 PM","Lab Maintenance Notes","Priya reviewed the safety warning at 7:28 PM, before the other suspects questioned about it.","Connects her knowledge to the specific defect recorded in the lab."],

    ["CABINET ACCESS","08:06 PM","Equipment Cabinet Log","The secured equipment cabinet was opened at 8:06 PM with a maintenance key.","Connects the relocation route to personnel with maintenance access."],

    ["ACCESS LIMIT","07:00 PM–08:30 PM","Intern Access Register","Rohan's authorized access on the evening's lab session was limited to the outer laboratory area.","Shows that his authorized access did not include the secured equipment cabinet."],

    ["INVESTOR ACCESS","07:30 PM","Visitor Access Register","Vikram entered the facility at 7:30 PM to discuss the presentation, but had no maintenance access.","Separates motive from the physical access required to move the prototype."],

    ["WORK SESSION LOG","08:10 PM–08:35 PM","Developer Work Log","Anika's work session continued from 8:10 PM until 8:35 PM, according to the developer log.","Places her at the facility but does not establish access to the secured cabinet."]
  ],

  CASE_04: [
    ["FILE HASH","10:20 AM","Archive Integrity Report","The current file hash was checked at 10:20 AM and did not match the hash stored in the original archive index.","Confirms that the archived file is not identical to the preserved version."],

    ["MIGRATION LOG","09:00 AM–09:15 AM","Archive Migration Log","The archive migration ran from 9:00 AM to 9:15 AM, and the alteration was recorded during that operation.","Narrows the change to a specific archive operation."],

    ["ACCESS PERMISSION","08:55 AM–09:20 AM","Archive Permission Log","Leena had migration-level write access from 8:55 AM to 9:20 AM, covering the migration window.","Identifies who had the technical permission needed to replace an archived file."],

    ["METADATA CHECK","10:12 AM","Digital Forensics Report","The file metadata was examined at 10:12 AM and its timestamp conflicted with the archive's migration log.","Shows that the file's recorded history does not match the system record."],

    ["ARCHIVIST STATEMENT","11:00 AM","Interview Record","During the 11:00 AM interview, Leena stated that no archived files had been replaced.","Conflicts with the evidence showing a changed archived copy."],

    ["CASE HISTORY","Original investigation","Case File","The original investigation record establishes that Aman had a reason to defend the investigation.","Provides a possible motive but does not establish archive access."],

    ["REVIEW ACCESS","09:30 AM","Document Permission Log","Sara accessed the review documents at 9:30 AM but lacked archive-write permission.","Separates document preparation from the ability to alter archived files."],

    ["PUBLIC RECORD REQUEST","Previous day","Records Request Log","Nikhil's request for records from the old case was submitted the previous day.","Shows investigative interest without establishing archive-write access."]
  ],

  CASE_05: [
    ["STORAGE INDEX","02:30 PM","Recording Storage Index","At 2:30 PM, the original interview recording was missing from the expected storage index.","Confirms that the original file is absent rather than simply misplaced in the visible folder."],

    ["BACKUP RECORD","01:45 PM","Backup System Log","An incomplete backup file was created at 1:45 PM on the same day as the original interview.","Provides a second file that can be compared with the missing original."],

    ["WORKSTATION LOG","01:44 PM","Recording System Audit","The recording system audit shows that the backup operation began from Tanya Sen's workstation at 1:44 PM.","Connects the backup operation to the technician responsible for recording equipment."],

    ["TECHNICIAN STATEMENT","03:00 PM","Interview Record","During the 3:00 PM interview, Tanya stated that the recording system had failed automatically.","Her explanation conflicts with the workstation and backup records."],

    ["WITNESS STATEMENT","02:15 PM","Written Statement","Meera's written statement was recorded at 2:15 PM and still matches the summary associated with the missing recording.","Shows that the original account is supported by another record despite the missing audio."],

    ["LEGAL ACCESS","12:30 PM","Access Permission Log","Aditya's access to the witness was recorded at 12:30 PM, but he had no permission to use the recording system.","Separates witness contact from control over the recording files."],

    ["INVESTIGATION NOTES","01:50 PM","Investigator Notes","Karan's paper notes were entered into the investigation record at 1:50 PM, following the interview.","Provides an independent record of what was discussed."]
  ]
}; 
   const d = (data[state.case.id] || [])[index];
  const clue = state.case.clues[index];

  if (!d) return {
    type: "CASE RECORD",
    time: "Recorded",
    source: "Investigation File",
    detail: clue[0],
    relevance: "Use this record together with the other evidence when building your deduction.",
    level: clue[1]
  };

  return {
    type: d[0],
    time: d[1],
    source: d[2],
    detail: d[3],
    relevance: d[4],
    level: clue[1]
  };
}

function evidenceCard(index)  {
  const e = evidenceDetails(index);
  return `
    <article class="evidence-card" style="margin:12px 0;padding:18px;border:1px solid #303b4d;border-radius:14px;background:linear-gradient(145deg,#111923,#0d131b);box-shadow:0 8px 24px rgba(0,0,0,.18)">
      <div class="evidence-topline" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px;font-size:12px;letter-spacing:.08em">
        <span class="evidence-code" style="font-family:monospace;font-weight:700;opacity:.75">E-${String(index + 1).padStart(2, "0")}</span>
        <span class="evidence-type" style="font-weight:700">${esc(e.type)}</span>
        <span class="evidence-level ${e.level === "critical" ? "critical" : "support"}" style="margin-left:auto;padding:4px 8px;border-radius:999px;border:1px solid #39485c;font-size:10px">${e.level === "critical" ? "CRITICAL" : "SUPPORT"}</span>
      </div>
      <h4 style="margin:8px 0 14px;font-size:16px;line-height:1.5">${esc(e.detail)}</h4>
      <div class="evidence-meta" style="display:flex;gap:18px;flex-wrap:wrap;padding:10px 0;border-top:1px solid #263142;border-bottom:1px solid #263142;font-size:12px;line-height:1.5">
        <span><b>TIME:</b> ${esc(e.time)}</span>
        <span><b>SOURCE:</b> ${esc(e.source)}</span>
      </div>
      <p style="margin:13px 0 0;font-size:13px;line-height:1.55"><b>WHY IT MATTERS:</b> ${esc(e.relevance)}</p>
    </article>
  `;
}

function timelinePanel() {
  const events = [...state.discovered].map(index => {
    const evidence = evidenceDetails(index);

    const match = evidence.time.match(
      /(\d{1,2}):(\d{2})\s*(AM|PM)/i
    );

    let minutes = null;

    if (match) {
      let hour = Number(match[1]);
      const minute = Number(match[2]);
      const period = match[3].toUpperCase();

      if (period === "AM" && hour === 12) hour = 0;
      if (period === "PM" && hour !== 12) hour += 12;

      minutes = hour * 60 + minute;
    }

    return {
      index,
      evidence,
      minutes
    };
  });

  const timedEvents = events
    .filter(event => event.minutes !== null)
    .sort((a, b) => a.minutes - b.minutes);

  const otherEvents = events.filter(
    event => event.minutes === null
  );

  if (events.length === 0) {
    return `
      <section style="margin-top:24px;padding:18px;border:1px dashed #39485c;border-radius:14px">
        <h3 style="margin-top:0">Case Timeline</h3>
        <p style="margin-bottom:0">
          Discover evidence to build the timeline of events.
        </p>
      </section>
    `;
  }

  function timelineCard(event) {
    const e = event.evidence;

    return `
      <article style="
        position:relative;
        margin:12px 0;
        padding:14px 16px;
        border-left:3px solid #68a7ff;
        border-radius:8px;
        background:#111923;
      ">
        <div style="font-size:12px;color:#8ebcff;font-weight:700">
          ${esc(e.time)}
        </div>

        <h4 style="margin:7px 0;font-size:15px">
          ${esc(e.type)}
        </h4>

        <p style="margin:0;font-size:13px;line-height:1.5">
          ${esc(e.detail)}
        </p>

        <div style="margin-top:8px;font-size:12px;color:#aab7c8">
          Source: ${esc(e.source)}
        </div>
      </article>
    `;
  }

  return `
    <section style="margin-top:28px">
      <h3>Case Timeline</h3>

      <p style="font-size:13px;color:#aab7c8">
        Compare the recorded times to identify possible gaps,
        overlaps, and contradictions in suspect statements.
      </p>

      ${
        timedEvents.length
          ? timedEvents.map(timelineCard).join("")
          : `<p>No exact timestamps have been discovered yet.</p>`
      }

      ${
        otherEvents.length
          ? `
            <h4 style="margin-top:22px">Events with approximate times</h4>
            <p style="font-size:12px;color:#aab7c8">
              These records provide timing context but do not have
              an exact clock time.
            </p>
            ${otherEvents.map(timelineCard).join("")}
          `
          : ""
      }
    </section>
  `;
}
/* =========================
   ASK QUESTION
========================= */
function ask(questionIndex) {
  const questions =
    state.questionSets[state.suspect];
  const q =
    questions[questionIndex];
  if (!q) return;
  // Prevent duplicate clicks.
  if (state.asked.has(questionIndex)) return;
  state.asked.add(questionIndex);
  state.styles[q.style]++;
  state.messages.push({
    who: "player",
    text: q.text
  });
  state.messages.push({
    who: "suspect",
    text: q.response
  });
  // Discover evidence connected to this question.
  if (
    q.clue !== undefined &&
    state.case.clues[q.clue]
  ) {
    state.discovered.add(q.clue);
  }
  // Analytical questions contribute to contradiction analysis.
  if (q.style === "analytical") {
    state.contradictions++;
  }
  state.qIndex++;
  renderChat();
}
/* =========================
   FINISH CURRENT SUSPECT
========================= */
function finishSuspect() {
  if (state.asked.size < 2) {
    const proceed = confirm(
      "You have asked only " +
      state.asked.size +
      " questions. Are you sure you want to move on?"
    );

    if (!proceed) return;
  }

  showSuspectEvidence();
}

function showSuspectEvidence() {
  const suspect = state.case.suspects[state.suspect];

  const newEvidence = [...state.discovered]
    .filter(index => !state.evidenceAtStart.has(index));

  const isLastSuspect =
    state.suspect === state.case.suspects.length - 1;

  shell(`
    <span class="badge">INTERROGATION COMPLETE</span>

    <h2>Evidence from ${esc(suspect[0])}</h2>

    <p class="subtitle">
      Review what this interrogation revealed before continuing.
    </p>

    <div class="evidence">
      ${
        newEvidence.length === 0
          ? `
            <div class="notice">
              No new formal evidence was recorded during this interrogation.
              Your conversation is still available in the investigation history.
            </div>
          `
          : newEvidence.map(index => {
              const clue = state.case.clues[index];

              return `
                <div class="card">
                  <b>${esc(clue[0])}</b>
                  <div class="muted">${esc(clue[1])}</div>
                </div>
              `;
            }).join("")
      }
    </div>

    <button class="primary" onclick="continueAfterEvidence()">
      ${isLastSuspect ? "Review Full Evidence Board" : "Continue to Next Suspect"}
    </button>
  `);
}


function continueAfterEvidence() {
  const isLastSuspect =
    state.suspect === state.case.suspects.length - 1;

  if (!isLastSuspect) {
    state.suspect++;
    investigate();
    return;
  }

  showFullEvidenceBoard();
}


function showFullEvidenceBoard() {
  const allEvidence = [...state.discovered];

  shell(`
    <span class="badge">INVESTIGATION SUMMARY</span>

    <h2>Complete Evidence Board</h2>

    <p class="subtitle">
      Review all evidence collected from the four interrogations
      before making your final accusation.
    </p>

    <div class="evidence">
      ${
        allEvidence.length === 0
          ? `
            <div class="notice">
              No formal evidence was collected.
              Review the interrogation details before making your decision.
            </div>
          `
          : allEvidence.map(index => {
              const clue = state.case.clues[index];

              return `
                <div class="card">
                  <b>${esc(clue[0])}</b>
                  <div class="muted">${esc(clue[1])}</div>
                </div>
              `;
            }).join("")
      }
    </div>

    <button class="primary" onclick="finalAccusation()">
      Make Final Accusation
    </button>
    ${timelinePanel()}
  `);
}
/* =========================
   FINAL ACCUSATION
========================= */
function finalAccusation() {
  const c = state.case;
  shell(`
    <span class="badge">
      FINAL TESTIMONY
    </span>
    <h2>
      Make your accusation, ${esc(state.player)}.
    </h2>
    <p class="subtitle">
      Choose the suspect you believe is responsible,
      then select up to three pieces of evidence
      supporting your theory.
    </p>
    <div class="suspects">
      ${c.suspects.map((s, i) => `
        <label class="card">
          <input
            type="radio"
            name="culprit"
            value="${i}"
          >
          <b>
            ${esc(s[0])}
          </b>
          <div class="muted">
            ${esc(s[1])}
          </div>
        </label>
      `).join("")}
    </div>
    <h3>
      Supporting Evidence
    </h3>
    <div class="evidence">
      ${c.clues.map((x, i) => `
        <label>
          <input
            type="checkbox"
            class="ev"
            value="${i}"
          >
          ${esc(x[0])}
        </label>
      `).join("")}
    </div>
    <button
      class="primary"
      style="margin-top:18px"
      onclick="reveal()"
    >
      Submit Verdict
    </button>
  `);
}
/* =========================
   REVEAL RESULT
========================= */
function reveal() {
  const selected =
    document.querySelector(
      'input[name="culprit"]:checked'
    );
  if (!selected) {
    alert("Choose a suspect first.");
    return;
  }
  const evidence =
    [...document.querySelectorAll(".ev:checked")]
      .map(x => Number(x.value));
  if (evidence.length > 3) {
    alert(
      "Choose up to 3 pieces of evidence."
    );
    return;
  }
  const correct =
    Number(selected.value) ===
    state.case.culprit;
  const criticalFound =
    evidence.filter(
      i => state.case.clues[i][1] === "critical"
    ).length;
  const totalQuestions =
    Object.values(state.styles)
      .reduce((a, b) => a + b, 0) || 1;
  const profile =
    profileName();
  const stylePct = {};
  Object.entries(state.styles)
    .forEach(([k, v]) => {
      stylePct[k] =
        Math.round(
          v / totalQuestions * 100
        );
    });
  shell(`
    <span class="badge">
      CASE REPORT
    </span>
    <h2>
      ${correct
        ? "CASE CLOSED"
        : "CASE UNSOLVED"
      }
    </h2>
    <div class="notice">
      <b>Your verdict:</b>
      ${esc(
        state.case.suspects[
          Number(selected.value)
        ][0]
      )}
      <br><br>
      <b>Actual culprit:</b>
      ${esc(
        state.case.suspects[
          state.case.culprit
        ][0]
      )}
      <br><br>
      <b>How it happened:</b>
      ${esc(state.case.how)}
      <br><br>
      <b>Motive:</b>
      ${esc(state.case.motive)}
    </div>
    <div class="stats">
      <div class="stat">
        Verdict
        <b>
          ${correct
            ? "Correct"
            : "Incorrect"
          }
        </b>
      </div>
      <div class="stat">
        Evidence chosen
        <b>
          ${evidence.length}/3
        </b>
      </div>
      <div class="stat">
        Critical evidence
        <b>
          ${criticalFound}
        </b>
      </div>
      <div class="stat">
        Analytical actions
        <b>
          ${state.contradictions}
        </b>
      </div>
    </div>
    <h3>
      Your Detective Profile:
      ${profile}
    </h3>
    ${Object.entries(stylePct).map(
      ([k, v]) => `
        <div class="barrow">
          <div class="barlabel">
            <span>
              ${k}
            </span>
            <span>
              ${v}%
            </span>
          </div>
          <div class="bar">
            <div
              class="fill"
              style="width:${v}%"
            ></div>
          </div>
        </div>
      `
    ).join("")}
    <div class="notice">
      <b>Why this profile?</b>
      ${profileText(profile, correct, evidence.length, criticalFound)}
    </div>
    <button
      class="primary"
      onclick="start()"
    >
      Play Another Case
    </button>
  `);
}
/* =========================
   DETECTIVE PROFILE
========================= */
function profileName() {
  const entries =
    Object.entries(state.styles)
      .sort((a, b) => b[1] - a[1]);
  if (
    entries.length < 2 ||
    entries[0][1] === entries[1][1]
  ) {
    return "THE BALANCED DETECTIVE";
  }
  return {
    logical: "THE LOGICIAN",
    analytical: "THE ANALYST",
    empathetic: "THE EMPATH",
    aggressive: "THE INTERROGATOR"
  }[entries[0][0]];
}
/* =========================
   PROFILE DESCRIPTION
========================= */
function profileText(profile, correct, evidenceCount, criticalFound) {
  let explanation = "";

  if (profile === "THE LOGICIAN") {
    explanation = "Your questioning style focused mainly on facts and direct reasoning.";
  } else if (profile === "THE ANALYST") {
    explanation = "Your questioning style focused mainly on patterns and contradictions.";
  } else if (profile === "THE EMPATH") {
    explanation = "Your questioning style focused mainly on understanding people and building trust.";
  } else if (profile === "THE INTERROGATOR") {
    explanation = "Your questioning style focused mainly on challenging suspects directly.";
  } else {
    explanation = "Your questions showed a balanced mix of different investigative approaches.";
  }

  let evidenceText = "";

  if (evidenceCount === 0) {
    evidenceText = "You did not select supporting evidence for your verdict.";
  } else {
    evidenceText = `You selected ${evidenceCount} piece${evidenceCount === 1 ? "" : "s"} of supporting evidence`;

    if (criticalFound > 0) {
      evidenceText += `, including ${criticalFound} critical clue${criticalFound === 1 ? "" : "s"}.`;
    } else {
      evidenceText += ", but none of it was marked as critical.";
    }
  }

  const verdictText = correct
    ? "Your final accusation was correct."
    : "Your final accusation was incorrect.";

  return `${explanation} ${evidenceText} ${verdictText}`;
}
/* =========================
   LAUNCH GAME
========================= */
start();