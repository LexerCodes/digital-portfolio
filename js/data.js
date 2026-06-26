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
    intro: "I'm a Class 10 student at Vega Schools, Gurugram — passionate about coding, football, and music, in roughly that order. For me, coding is puzzle-solving at its best: every bug is a clue, every working project a small win. When I'm not at a keyboard you'll find me on the football pitch or behind a drum kit — and I think that's why I care so much about teamwork, because it shows up everywhere I go.",

    // ── INTEREST TAGS ─────────────────────────────────────────
    // Shown as coloured pills below your intro.
    // Keep it to 4–7 things. Be specific — "Competitive Chess" beats "Chess".
    interests: [
      "Coding",
      "Football",
      "Drums & Music",
      "Innovation",
      "Problem Solving"
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
  //  Instead of grades, describe your relationship with each subject.
  //  What do you enjoy about it? How has your thinking in it grown?
  //  Write 2–3 honest sentences per subject.
  //
  //  Each subject follows this pattern:
  //  { subject: "Subject Name", description: "Your description here." }
  // ════════════════════════════════════════════════════════

  academics: {

    // ── CLASS 5 TO 7 ──────────────────────────────────────────
    class5to7: {
      period: "Class 5 – 7  ·  2019 – 2022",
      // 1–2 sentences reflecting on this phase of your academic life
      highlight: "Write a brief reflection on this period — what subjects excited you, what did you discover about yourself as a learner?",
      subjects: [
        // Copy this pattern to add more subjects:
        // { subject: "Subject Name", description: "2–3 sentences about your experience with it." },
        {
          subject: "Mathematics",
          description: "Describe your relationship with Maths in Class 5–7. What did you enjoy? What challenged you? How did you approach it?"
        },
        {
          subject: "Science",
          description: "What aspects of Science grabbed your attention during this period? Experiments? Theory? A specific topic?"
        },
        {
          subject: "English",
          description: "How did your reading and writing develop in these years? Any books or assignments that stood out?"
        },
        {
          subject: "Social Studies",
          description: "What parts of Social Studies interested you — history, geography, civics? How did your interest evolve?"
        },
        {
          subject: "Hindi",
          description: "Describe your experience learning Hindi — comprehension, writing, or speaking. What came naturally, what required effort?"
        }
      ]
    },

    // ── CLASS 8 TO 9 ──────────────────────────────────────────
    class8to9: {
      period: "Class 8 – 9  ·  2022 – 2024",
      highlight: "Write a reflection on Class 8–9 — how did your academic interests shift? What new subjects or challenges appeared?",
      subjects: [
        {
          subject: "Mathematics",
          description: "How did Maths change in Class 8–9? New topics like algebra, geometry, or statistics — which clicked, which took work?"
        },
        {
          subject: "Science",
          description: "Science splits into Physics, Chemistry, and Biology here. Which branch drew you in most, and why?"
        },
        {
          subject: "English Language",
          description: "How did your language skills grow? Writing, comprehension, grammar — any specific achievement or moment you remember?"
        },
        {
          subject: "English Literature",
          description: "What texts did you study? Did any story, poem, or character stay with you? How did you approach literary analysis?"
        },
        {
          subject: "Social Science",
          description: "Describe how History, Geography, or Civics engaged you across Class 8 and 9. Any topic that genuinely interested you?"
        },
        {
          subject: "Hindi",
          description: "How did your Hindi grow across these two years? Writing styles, grammar, or comprehension — where did you feel most confident?"
        },
        {
          subject: "IT / Computer Science",
          description: "This is where my real passion showed up. Write about what you built or learned in IT class — how it connected to your interest in coding."
        }
      ]
    },

    // ── CLASS 10 ──────────────────────────────────────────────
    class10: {
      period: "Class 10  ·  2024 – 2025",
      highlight: "Your current year. Share how your approach to studying has matured, what you're focusing on, and what you're working toward.",
      subjects: [
        {
          subject: "Mathematics",
          description: "What's your strategy for Class 10 Maths? What topics are you strongest in? What are you targeting for boards?"
        },
        {
          subject: "Science",
          description: "How are you preparing across Physics, Chemistry, and Biology? Which area are you most confident in heading into boards?"
        },
        {
          subject: "English Language",
          description: "What does your English Language prep look like — letter writing, comprehension, grammar? How has your writing voice developed?"
        },
        {
          subject: "English Literature",
          description: "Which texts are you studying this year? What's your approach to essays and character analysis?"
        },
        {
          subject: "Social Science",
          description: "Class 10 Social Science is broad. How are you managing History, Geography, Economics, and Civics together?"
        },
        {
          subject: "Hindi",
          description: "How are you approaching Hindi boards — are you focusing on writing, grammar, or comprehension? What's your confidence level?"
        },
        {
          subject: "Information Technology",
          description: "IT is where school overlaps with my personal projects. Describe what you've been doing in IT this year and how it connects to your coding work outside class."
        }
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
      // Replace this example with your real sports achievements.
      // {
      //   title:       "Tournament or event name",
      //   year:        "2024",
      //   position:    "Your result / rank / position",
      //   organiser:   "Who organised it",
      //   description: "1–2 sentences on what you did and why it mattered."
      // },
      {
        title:       "Add Your Sports Achievement",
        year:        "2024",
        position:    null,
        organiser:   "Organiser name",
        description: "Replace this with a real sports achievement — a tournament, a school match, a personal best. Be specific about your role and the result."
      }
    ],

    // ── CULTURAL (Music / Drums / Theatre / Art) ──────────────
    cultural: [
      // Add your music/drums/cultural achievements here.
      {
        title:       "Add Your Cultural Achievement",
        year:        "2024",
        position:    null,
        organiser:   "Organiser name",
        description: "Replace this with a real cultural achievement — a performance, a concert, a music competition, a school play. You play drums and sing, so think about performances you've given."
      }
    ],

    // ── LITERARY (Debate / MUN / Essay / Quiz) ────────────────
    literary: [
      // Add any debate, MUN, essay, quiz, or public speaking achievements here.
      {
        title:       "Add Your Literary Achievement",
        year:        "2024",
        position:    null,
        organiser:   "Organiser name",
        description: "Replace this with a debate, MUN, essay competition, quiz, or any literary achievement."
      }
    ],

    // ── TECHNICAL (Coding / Robotics / STEM / Hackathons) ─────
    technical: [
      {
        title:       "ICode Global Hackathon 2024",
        year:        "2024",
        position:    "Rank 39 Worldwide",
        organiser:   "ICode",
        description: "Competed against participants from across the world in the ICode Global Hackathon and achieved a worldwide rank of 39. An improvement of 67 places from the previous year — the result of focused preparation and a sharper problem-solving approach."
      },
      {
        title:       "ICode Global Hackathon 2023",
        year:        "2023",
        position:    "Rank 106 Worldwide",
        organiser:   "ICode",
        description: "My first entry into the ICode Global Hackathon — ranked 106th worldwide in my debut. The experience opened my eyes to competitive programming and the global community of young coders, and motivated me to push further the next year."
      }
      // ↑ Add more technical achievements here (certificates can be linked later)
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
    siteTitle: "Saksham Jha — Portfolio",

    // Your GitHub repository URL (fill in after setup)
    githubRepo: "https://github.com/LexerCodes/digital-portfolio",

    // Your live GitHub Pages URL (fill in after setup)
    // Example: "https://yourusername.github.io/portfolio"
    liveUrl: "https://lexercodes.github.io/digital-portfolio/",

    // Year shown in the footer
    year: "2025"
  }

};
