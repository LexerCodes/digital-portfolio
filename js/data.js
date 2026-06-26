/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                  YOUR PORTFOLIO — DATA FILE                      ║
 * ║                                                                  ║
 * ║  This is the ONLY file you ever need to edit.                    ║
 * ║  Every single word on your website comes from here.             ║
 * ║                                                                  ║
 * ║  HOW TO EDIT:                                                    ║
 * ║  1. Use Ctrl+F (or Cmd+F on Mac) to search for what to change   ║
 * ║  2. Replace the text between the "quote marks"                   ║
 * ║  3. Save the file — your website updates instantly               ║
 * ║                                                                  ║
 * ║  GOLDEN RULES:                                                   ║
 * ║  ✓ Always keep text inside "quote marks"                         ║
 * ║  ✓ Don't delete commas , or brackets { } [ ]                    ║
 * ║  ✓ To add a new item, copy an existing one and paste below it,  ║
 * ║    separated by a comma                                           ║
 * ║  ✓ If something breaks, undo with Ctrl+Z                        ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const PORTFOLIO = {

  // ════════════════════════════════════════════════════════
  //  PERSONAL INFORMATION
  //  These fields appear across every page of your site.
  // ════════════════════════════════════════════════════════

  personal: {

    // Your full name — shows in the hero, navbar, and footer
    name: "Saksham Jha",

    // Your photo. Steps:
    //   1. Put your photo in the assets/ folder (e.g. assets/photo.jpg)
    //   2. Change null below to "assets/photo.jpg"
    // Leave as null to show a placeholder until you're ready.
    photo: null,

    // Date of birth — write it out in full for clarity
    dob: "17 July 2011",

    // Your school's full name
    school: "Vega Schools",

    // Your class (just the number is fine)
    class: "Class 10",

    // Your city or town
    city: "Gurugram",

    // ── INTRODUCTION ──────────────────────────────────────────
    // This is the first paragraph visitors read.
    // Write 2–3 sentences in YOUR OWN VOICE.
    // What excites you? What do you stand for? What's your story?
    // Aim for honest and specific — not generic.
    intro: "Write 2–3 sentences about who you are. What are you passionate about? What makes you different from everyone else in your school? Keep it honest and in your own words — this is the very first thing every visitor reads.",

    // ── INTEREST TAGS ─────────────────────────────────────────
    // Shown as coloured pills below your intro.
    // Keep it to 4–7 things. Be specific — "Competitive Chess" beats "Chess".
    interests: [
      "Coding",
      "Football",
      "Music",
      "Science",
      "Reading"
    ],

    // ── CORE VALUES ───────────────────────────────────────────
    // Your top 3 personal values.
    // For each one: what is it, and WHY does it matter to YOU specifically?
    // Write from real experience — not what sounds impressive.
    values: [
      {
        title: "Integrity",
        description: "One sentence on why this value matters to you — a real moment or belief that made it important to you personally."
      },
      {
        title: "Curiosity",
        description: "One sentence on why this value matters to you personally."
      },
      {
        title: "Resilience",
        description: "One sentence on why this value matters to you personally."
      }
    ],

    // ── STRENGTHS ─────────────────────────────────────────────
    // Your genuine strengths — what you're actually good at.
    // Be specific: "Writing persuasive essays" beats "Writing".
    strengths: [
      "Problem solving",
      "Attention to detail",
      "Quick learner",
      "Team collaboration"
    ],

    // ── GROWTH AREAS ──────────────────────────────────────────
    // Things you're actively working to improve.
    // Being honest here shows self-awareness — it's a strength, not a weakness.
    workingOn: [
      "Public speaking",
      "Time management",
      "Consistency under pressure"
    ],

    // ── GOALS ─────────────────────────────────────────────────
    goals: {
      // What you want to achieve in the next 1–2 years
      short: [
        "Score above 90% in Class 10 boards",
        "Build and launch one real coding project",
        "Read 12 books this year"
      ],
      // Your bigger ambitions — where you want to be in 10 years
      long: [
        "Study Computer Science at a top university",
        "Build a product that solves a real problem",
        "Give back to my community through technology"
      ]
    },

    // ── MOTIVATIONAL QUOTE ────────────────────────────────────
    // A quote that GENUINELY resonates with you.
    // The best ones are less famous and more personal.
    quote: {
      text: "The expert in anything was once a beginner.",
      author: "Helen Hayes"
    }
  },


  // ════════════════════════════════════════════════════════
  //  ACADEMICS
  //
  //  Fill in your actual grades for each class.
  //  grade = your score (e.g. "A1", "95%", "Distinction")
  //  note  = one short honest observation about that subject
  // ════════════════════════════════════════════════════════

  academics: {

    // ── CLASS 5 TO 7 ──────────────────────────────────────────
    class5to7: {
      // Label shown at the top of this section
      period: "Class 5 – 7  ·  2019 – 2022",
      // 1–2 sentences reflecting on this phase of your academic life
      highlight: "Write a brief reflection on this period — what subjects excited you, what you discovered about yourself as a learner.",
      subjects: [
        // Copy this pattern to add more subjects:
        // { subject: "Subject Name", grade: "A1", note: "Short note." },
        { subject: "Mathematics",    grade: "A1", note: "Always been my favourite — loved problem solving." },
        { subject: "Science",        grade: "A1", note: "Especially enjoyed the experiments in Class 7." },
        { subject: "English",        grade: "A2", note: "Developed a love for reading during this period." },
        { subject: "Social Studies", grade: "B1", note: "Improved steadily across all three years." },
        { subject: "Hindi",          grade: "A2", note: "Strong in comprehension and essay writing." }
      ]
    },

    // ── CLASS 8 TO 9 ──────────────────────────────────────────
    class8to9: {
      period: "Class 8 – 9  ·  2022 – 2024",
      highlight: "Write a reflection on Class 8–9 — how did your academic interests shift? What new challenges appeared?",
      subjects: [
        { subject: "Mathematics",        grade: "A1", note: "Scored 98/100 in Class 9 finals." },
        { subject: "Science",            grade: "A1", note: "Chose to go deeper in Physics and Chemistry." },
        { subject: "English Language",   grade: "A1", note: "Won inter-school essay competition in Class 9." },
        { subject: "English Literature", grade: "A2", note: "Passionate about prose analysis." },
        { subject: "Social Science",     grade: "A1", note: "Improved from B1 in Class 8 through consistent effort." },
        { subject: "Hindi",              grade: "A2", note: "Scored consistently across both years." },
        { subject: "IT / Computer Sc.",  grade: "A1", note: "My strongest subject — built my first website here." }
      ]
    },

    // ── CLASS 10 ──────────────────────────────────────────────
    class10: {
      period: "Class 10  ·  2024 – 2025",
      highlight: "Your current year. Share what you're focusing on, how your approach to studying has changed, and what you're targeting.",
      subjects: [
        { subject: "Mathematics",        grade: "In progress", note: "Targeting 100/100 — practising daily." },
        { subject: "Science",            grade: "In progress", note: "Preparing for board-level questions." },
        { subject: "English Language",   grade: "In progress", note: "Practising letter writing and comprehension." },
        { subject: "English Literature", grade: "In progress", note: "Studying prescribed texts carefully." },
        { subject: "Social Science",     grade: "In progress", note: "Maps and history timelines done." },
        { subject: "Hindi",              grade: "In progress", note: "Revising grammar and composition rules." },
        { subject: "IT",                 grade: "In progress", note: "Practical components completed." }
      ]
    }
  },


  // ════════════════════════════════════════════════════════
  //  CO-SCHOLASTIC ACHIEVEMENTS
  //
  //  Add all your achievements under the right category.
  //  Each achievement follows this pattern:
  //  {
  //    title:       "Name of the award or event",
  //    year:        "2024",
  //    position:    "1st Place",        ← leave as null if not applicable
  //    organiser:   "Organisation name",
  //    description: "1–2 sentences on what it was and why it mattered."
  //  }
  // ════════════════════════════════════════════════════════

  achievements: {

    // ── SPORTS ────────────────────────────────────────────────
    sports: [
      {
        title:       "Inter-School Football Tournament",
        year:        "2024",
        position:    "Runner-Up",
        organiser:   "District Sports Authority",
        description: "Played as centre-midfielder for the school team across 6 matches. The team scored 14 goals total and reached the final for the first time in 5 years."
      },
      {
        title:       "School Swimming Championship",
        year:        "2023",
        position:    "Gold — 100m Freestyle",
        organiser:   "School Sports Board",
        description: "Set a new school record in the 100m freestyle event with a time of 1:04.3, breaking the previous record by 2 seconds."
      }
      // ↑ Add more sports achievements here, separated by commas
    ],

    // ── CULTURAL (Music / Dance / Theatre / Art) ──────────────
    cultural: [
      {
        title:       "Annual School Music Concert",
        year:        "2024",
        position:    "Lead Performer",
        organiser:   "School Cultural Committee",
        description: "Performed an original guitar composition in front of 400+ audience members at the annual school concert."
      },
      {
        title:       "State-Level Dance Competition",
        year:        "2023",
        position:    "2nd Place",
        organiser:   "State Cultural Academy",
        description: "Part of a 6-member classical dance group that performed Bharatanatyam. Trained for 4 months ahead of the competition."
      }
      // ↑ Add more cultural achievements here
    ],

    // ── LITERARY (Debate / MUN / Essay / Quiz) ────────────────
    literary: [
      {
        title:       "MUN — UNSC Committee",
        year:        "2024",
        position:    "Best Delegate",
        organiser:   "Delhi MUN Conference",
        description: "Represented France in the United Nations Security Council. Debated the climate crisis resolution and drafted the final amendment that passed by consensus."
      },
      {
        title:       "Inter-School Debate Competition",
        year:        "2023",
        position:    "1st Place",
        organiser:   "District Education Office",
        description: "Debated on the motion 'AI is a threat to humanity' — argued the opposition and won by unanimous judges' decision."
      }
      // ↑ Add more literary achievements here
    ],

    // ── TECHNICAL (Coding / Robotics / Science / STEM) ────────
    technical: [
      {
        title:       "Science Olympiad — Junior Category",
        year:        "2024",
        position:    "National Rank 12",
        organiser:   "Science Olympiad Foundation",
        description: "Scored 94/100 in the national-level Science Olympiad, qualifying in the top 15 nationally across 8,000+ participants."
      },
      {
        title:       "School Robotics Club — Project Lead",
        year:        "2023",
        position:    "Best Innovation Award",
        organiser:   "School STEM Department",
        description: "Led a team of 3 to design and build a line-following robot using Arduino and IR sensors. Presented at the school science fair and won Best Innovation."
      }
      // ↑ Add more technical achievements here
    ]
  },


  // ════════════════════════════════════════════════════════
  //  PROJECTS PORTFOLIO
  //
  //  Each project follows this pattern:
  //  {
  //    title:     "Project Name",
  //    year:      "2025",
  //    objective: "What problem were you solving?",
  //    role:      "What did YOU specifically do?",
  //    outcome:   "What was the result? Use numbers where possible.",
  //    skills:    ["HTML", "CSS", "JavaScript"],
  //    link:      "https://your-live-url.com",   ← or null
  //    image:     "assets/projects/proj1.jpg"    ← or null
  //  }
  // ════════════════════════════════════════════════════════

  projects: [
    {
      title:     "Personal Portfolio Website",
      year:      "2025",
      objective: "Build a professional online presence to showcase academic and co-curricular achievements — standing out from typical school project submissions.",
      role:      "Sole developer — designed the visual system, wrote all HTML/CSS/JavaScript, set up the data-driven architecture, and deployed to GitHub Pages.",
      outcome:   "Live website accessible at a public URL. Data-driven architecture means any update requires editing only one file. Received positive feedback from teachers for design quality.",
      skills:    ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
      link:      null,    // ← Replace with your GitHub Pages URL once live
      image:     null     // ← Replace with "assets/projects/portfolio.jpg" if you have a screenshot
    },
    {
      title:     "Arduino Line-Following Robot",
      year:      "2023",
      objective: "Build a robot that autonomously follows a black line on a white surface — for the school science fair.",
      role:      "Project Lead — designed the circuit, wrote the Arduino C++ code, and presented to judges at the science fair.",
      outcome:   "Robot completed the track in 14 seconds on competition day. Won the 'Best Innovation' award. Code is open source on GitHub.",
      skills:    ["Arduino", "C++", "Electronics", "Circuit Design", "Teamwork"],
      link:      null,
      image:     null
    },
    {
      title:     "Add Your Third Project",
      year:      "2024",
      objective: "What problem were you trying to solve with this project?",
      role:      "What was your specific role and contribution — what did you personally build or do?",
      outcome:   "What was the measurable result? Numbers make this stronger — users, scores, time saved, etc.",
      skills:    ["Skill 1", "Skill 2", "Skill 3"],
      link:      null,
      image:     null
    }
    // ↑ Add more projects above this line, inside the [ ] brackets
  ],


  // ════════════════════════════════════════════════════════
  //  COMMUNITY SERVICE & SOCIAL RESPONSIBILITY
  //
  //  Each item follows this pattern:
  //  {
  //    title:        "Role or initiative name",
  //    organisation: "Organisation / school / NGO name",
  //    year:         "2024",
  //    hours:        "40",   ← approximate hours (or null to hide)
  //    description:  "2–3 sentences: what you did and the impact it had."
  //  }
  // ════════════════════════════════════════════════════════

  community: [
    {
      title:        "Teaching Assistant — Digital Literacy",
      organisation: "Pratham NGO",
      year:         "2024",
      hours:        "60",
      description:  "Taught basic computer skills — typing, email, internet safety — to 25 underprivileged children in Grades 5–7. Conducted sessions every Saturday for 3 months. By the end, all 25 students could independently use Google Classroom to submit homework."
    },
    {
      title:        "Beach Clean-Up Drive",
      organisation: "Green Earth Foundation",
      year:         "2023",
      hours:        "8",
      description:  "Volunteered with a team of 40 students to clean a 2km stretch of coastline. Collected over 120kg of plastic waste which was sorted and sent for recycling through a certified facility."
    },
    {
      title:        "Annual Blood Donation Camp — Co-Organiser",
      organisation: "School Student Council",
      year:         "2024",
      hours:        "20",
      description:  "Co-organised the annual school blood donation camp. Coordinated logistics with the Red Cross, managed the flow of 150 donors, and designed the awareness campaign posters distributed across the school."
    }
    // ↑ Add more community activities here
  ],


  // ════════════════════════════════════════════════════════
  //  REFLECTION — Personal Growth Journey
  // ════════════════════════════════════════════════════════

  reflection: {

    // Opening paragraph — your growth story in 2–3 sentences.
    // What has your school journey taught you about yourself?
    intro: "Write 2–3 sentences that capture your overall growth story. What has your school journey taught you about yourself? How are you different today from who you were in Class 5?",

    // ── KEY MILESTONES ─────────────────────────────────────────
    // Important moments in your personal development journey.
    // Be specific and honest — the best reflections are vulnerable.
    milestones: [
      {
        year:  "2020",
        title: "The Year I Discovered Coding",
        body:  "During the COVID lockdown, I stumbled onto YouTube tutorials for HTML and spent three months building small projects. I realised I loved the feeling of creating something from nothing — and that computers could be a tool for making, not just consuming."
      },
      {
        year:  "2022",
        title: "Learning to Lead",
        body:  "Being made project lead for the robotics team in Class 8 was terrifying. I was responsible for other people's work for the first time. We made mistakes, had disagreements, and missed deadlines — but we delivered, and I came out more patient and organised."
      },
      {
        year:  "2023",
        title: "Failure That Taught Me Most",
        body:  "I entered the state-level coding competition with full confidence and didn't make it past the first round. That sting pushed me to practise consistently for six months. The year after, I placed in the top 15 nationally."
      },
      {
        year:  "2024",
        title: "Giving Back",
        body:  "Teaching digital literacy to younger kids at Pratham changed my perspective. I realised how much I'd taken for granted — internet access, a laptop, parents who encouraged learning. It made me want to use technology in ways that reach people who don't have what I have."
      }
      // ↑ Add more milestones here — aim for 3–5 total
    ],

    // ── KEY LESSONS ────────────────────────────────────────────
    // 3 things your journey has taught you.
    // These show up as highlighted cards.
    lessons: [
      {
        title: "Consistency beats talent",
        body:  "Every achievement I'm proud of came from showing up every day, not from a single brilliant moment."
      },
      {
        title: "Ask for help sooner",
        body:  "I used to struggle alone for too long. I've learned that asking a teacher, peer, or mentor is a sign of self-awareness, not weakness."
      },
      {
        title: "Failure is data",
        body:  "Every time something didn't work — a competition, a project, a grade — I got information. The question I learned to ask is: what do I do differently next time?"
      }
    ]
  },


  // ════════════════════════════════════════════════════════
  //  CONTACT
  // ════════════════════════════════════════════════════════

  contact: {

    // Short paragraph shown above your contact info
    message: "I'm always open to connecting — whether you're a teacher, a collaborator, or just someone who wants to chat about tech, football, or music. Reach me directly or fill in the form below.",

    // Your email address
    email: "your.email@gmail.com",

    // Social links — set url to null to hide that platform entirely
    social: [
      {
        platform: "GitHub",
        handle:   "@LexerCodes",
        url:      "https://github.com/LexerCodes"   // ← Update this
      },
      {
        platform: "LinkedIn",
        handle:   "Your Name",
        url:      "https://www.linkedin.com/in/saksham-jha-19ab46286/"   // ← Add your LinkedIn URL or leave null to hide
      },
      {
        platform: "Instagram",
        handle:   "@saksham.drums",
        url:      "https://www.instagram.com/saksham.drums/"   // ← Add your Instagram URL or leave null to hide
      }
    ]
  },


  // ════════════════════════════════════════════════════════
  //  SITE SETTINGS
  //  Technical settings — update these after setting up GitHub.
  // ════════════════════════════════════════════════════════

  settings: {
    // Shows in the browser tab
    siteTitle: "Portfolio — Your Name",

    // Your GitHub repository URL (fill in after setup)
    githubRepo: "https://github.com/LexerCodes/digital-portfolio",

    // Your live GitHub Pages URL (fill in after setup)
    // Example: "https://yourusername.github.io/portfolio"
    liveUrl: "https://lexercodes.github.io/digital-portfolio/",

    // Year shown in the footer
    year: "2025"
  }

};
