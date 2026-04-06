import type {
  Award,
  ExperienceItem,
  HeroContent,
  Profile,
  ProjectDetail,
  ProjectSlug,
  ShotItem,
  SocialLink,
  StackItem
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Ukeje Analiese",
  role: "Product Designer",
  email: "ao.ukeje@gmail.com",
  avatarSrc: "/avatar-face.png"
};

export const heroContent: HeroContent = {
  title: "I design digital experiences that are built to work - not just look good.",
  accent: "I'm open to collaboration.",
  paragraphs: [
    "I'm a product designer focused on building digital experiences that are both intuitive and structurally sound. I'm particularly interested in designing products that combine accessibility, emerging technology, and real-world usability.",
    "I've worked as the Lead Designer at the Babcock University Computer Club and as a founding designer at Sierra, an edtech startup focused on improving learning experiences. Currently, I work as a Digital Experience Designer at Trivalue."
  ]
};

export const experiences: ExperienceItem[] = [
  {
    company: "Sierra",
    title: "Product Design Lead",
    date: "Jul 2024 - Aug 2025",
    logoSrc: "/Experience/sierra.png"
  },
  {
    company: "Trivalue",
    title: "Digital Experience Designer",
    date: "Oct 2025 - Present",
    logoSrc: "/Experience/trivalue logo.png",
    contain: true
  }
];

export const projects: ProjectDetail[] = [
  {
    slug: "rodneyai",
    title: "RodneyAI",
    category: "EdTech",
    coverImage: "/project cover images/rodney.png",
    coverAlt: "RodneyAI project cover",
    meta: "EdTech product design",
    intro:
      "Rodney is an accessibility-first study platform designed to bring structure, personalization, and inclusive learning tools into one calm experience.",
    coverCaption: "RodneyAI overview",
    sections: [
      {
        title: "1. Problem & Product Vision",
        body:
          "I designed Rodney to solve the gap in traditional study tools that fail neurodiverse learners. Most platforms are fragmented and one-size-fits-all, which leads to frustration and disengagement. Rodney was positioned as a unified, accessibility-first learning platform that helps students focus, retain information, and study effectively through a single, cohesive system.",
        images: [
          "/rodney project desc. images/Problem & Product Vision/Dashboard.png",
          "/rodney project desc. images/Problem & Product Vision/Dashboard2.png"
        ],
        singleColumn: true
      },
      {
        title: "2. Accessibility & Research-Driven Design",
        body:
          "I grounded the product in accessibility and inclusive UX research, especially for ADHD, dyslexia, and autism. This influenced decisions like structured layouts, reduced cognitive load, and sensory-aware design. Accessibility was built into the core through features like text-to-speech, speech-to-text, dyslexia fonts, and keyboard navigation, rather than being added later.",
        images: [
          "/rodney project desc. images/Accessibility & Research-Driven Design/Dashboard autism.png",
          "/rodney project desc. images/Accessibility & Research-Driven Design/Dashboard dyslexic.png"
        ],
        singleColumn: true
      },
      {
        title: "3. Core Features & System Integration",
        body:
          "I designed Rodney as an all-in-one study environment combining flashcards, notes, practice tests, and structured study sessions. Features like spaced repetition, AI-generated content, and real-time study interactions create a seamless workflow, eliminating the need for multiple tools.",
        images: [
          "/rodney project desc. images/Core Features & System Integration/Flahscard.png",
          "/rodney project desc. images/Core Features & System Integration/Practice test.png",
          "/rodney project desc. images/Core Features & System Integration/Study session expanded.png"
        ],
        singleColumn: true
      },
      {
        title: "4. AI & Personalization",
        body:
          "I developed an AI Coach that analyzes user behavior, generates study materials, and provides personalized feedback. It adapts to each learner's pace while remaining optional and user-controlled, ensuring AI supports rather than overwhelms the experience.",
        images: [
          "/rodney project desc. images/AI & Personalization/ask rodney light.png",
          "/rodney project desc. images/AI & Personalization/ask rodney.png",
          "/rodney project desc. images/AI & Personalization/ask rodney1.png"
        ],
        singleColumn: true
      },
      {
        title: "5. Innovation & Recognition",
        body:
          "The impact of Rodney's approach was recognized when we won the BUCC Hackathon 2025. The project stood out for its innovative combination of accessibility-first design, AI-powered learning and a fully integrated study system tailored for neurodiverse users, proving both its originality and real-world value.",
        images: ["/rodney project desc. images/UX, Interface & Product Strategy/1743803620714.jfif"]
      }
    ]
  },
  {
    slug: "aegis",
    title: "Aegis",
    category: "Real Estate",
    coverImage: "/project cover images/kora.png",
    coverAlt: "Aegis project cover",
    meta: "Real estate product design",
    intro:
      "Aegis is a trust-centered real estate product focused on making high-value property transactions safer, clearer, and easier to navigate in a local context.",
    coverCaption: "Aegis overview",
    externalUrl:
      "https://www.behance.net/gallery/244006509/Aegis-Real-Estate-Escrow-UX-Case-Study?platform=direct",
    sections: [
      {
        title: "1. Product Vision & Problem Framing",
        body:
          "For Aegis, I focused on solving the trust issues in Nigerian real estate - from fraudulent agents to omonile risks and unclear ownership. I positioned the platform as more than a listing app, but a transaction protection system that ensures users feel safe when making high-value payments.",
        images: ["/kora project desc. images/Product Vision & Problem Framing/Hero.png"]
      },
      {
        title: "2. End-to-End User Flow Design",
        body:
          "I designed the full journey from property discovery to ownership, including offers, negotiation, reservation, KYC, payments, and transaction tracking. My goal was to simplify complex real estate processes into clear, guided steps, while also accounting for edge cases like failed inspections and disputes.",
        images: [
          "/kora project desc. images/End-to-End User Flow Design/Frame 2147223364.png",
          "/kora project desc. images/End-to-End User Flow Design/Frame 2147223365.png",
          "/kora project desc. images/End-to-End User Flow Design/Frame 2147223366.png",
          "/kora project desc. images/End-to-End User Flow Design/Frame 2147223367.png"
        ]
      },
      {
        title: "3. Escrow, Payments & Trust System",
        body:
          "I built a secure escrow-based payment flow where users can deposit funds and track progress through stages like inspection and document verification. I integrated familiar Nigerian payment methods and designed proof-of-payment systems, receipts, and safeguards to prevent fraud and duplicate transactions.",
        images: ["/kora project desc. images/Escrow, Payments & Trust System/Frame 2147223368.png"]
      },
      {
        title: "4. Dispute Resolution & Safety Features",
        body:
          "I designed a complete dispute system that allows users to report issues, upload evidence, and request resolutions like refunds or mediation. I also introduced warnings and safeguards to protect users from off-platform payments and common scams.",
        images: [
          "/kora project desc. images/Dispute Resolution & Safety Features/Frame 2147223369.png",
          "/kora project desc. images/Dispute Resolution & Safety Features/Frame 2147223370.png"
        ]
      },
      {
        title: "5. UI/UX & Accessibility",
        body:
          "I created a clean, mobile-first interface focused on simplicity and clarity, especially for less tech-savvy users. I paid close attention to microcopy and interaction design to ensure the experience feels intuitive, reassuring, and easy to navigate.",
        images: [
          "/kora project desc. images/UIUX & Accessibility/Frame 2147223367.png",
          "/kora project desc. images/UIUX & Accessibility/Gemini_Generated_Image_gkelkngkelkngkel 1.png"
        ]
      }
    ]
  },
  {
    slug: "mirar",
    title: "Mirar",
    category: "Fintech",
    coverImage: "/project cover images/mirar.png",
    coverAlt: "Mirar project cover",
    meta: "Fintech product design",
    intro:
      "Mirar was shaped as a visibility-first money experience, helping users understand what is due, what matters today, and what action to take next.",
    coverCaption: "Mirar overview",
    externalUrl: "https://www.behance.net/gallery/246269121/Mirar-Bill-Tracking-App?platform=direct",
    sections: [
      {
        title: "Onboarding & Setup",
        body:
          "The onboarding flow introduces users to Mirar's core value through simple, visual screens that highlight bill tracking, account connection, and financial awareness. It is designed to be quick and low-effort, helping users understand the product immediately and guiding them into setting up their first bills and accounts without friction.",
        images: [
          "/Mirar descp images/onboarding/onboarding light mode.png",
          "/Mirar descp images/onboarding/onboarding dark mode.png"
        ],
        singleColumn: true
      },
      {
        title: "Home (Dashboard)",
        body:
          "The home screen is the central hub where users get a complete snapshot of their financial state. It highlights the Minimum Required Today, quick actions like adding bills or updating balances, and a preview of upcoming bills. This layout allows users to instantly understand what needs attention while giving them fast access to key actions without navigating away.",
        images: [
          "/Mirar descp images/Home/home page light mode.png",
          "/Mirar descp images/Home/home page dark mode.png"
        ]
      },
      {
        title: "Insights",
        body:
          "The insights page provides a structured overview of the user's financial behavior and bill performance. It includes metrics like total bills, upcoming bills, missed payments, and a visual payment summary, along with trends over time. This helps users move from simple awareness to deeper understanding, enabling better financial decisions.",
        images: [
          "/Mirar descp images/Insights/insights page light mode.png",
          "/Mirar descp images/Insights/insights page dark mode.png"
        ]
      },
      {
        title: "Bills & Bill Details (Including Add Bill)",
        body:
          "The bills section organizes all bills into a clear, scannable list, making it easy to track what is due and when. Users can add new bills quickly, ensuring their data stays up to date. The bill details screen provides deeper information such as amount, due date, account, and history, while allowing users to take action through options like marking as paid or setting aside funds. This flow ensures users can both manage and act on their bills efficiently.",
        images: [
          "/Mirar descp images/Bill and bill details/bills page light mode.png",
          "/Mirar descp images/Bill and bill details/bills page dark mode.png"
        ],
        singleColumn: true
      },
      {
        title: "Accounts (Including Add Account & Update Balance)",
        body:
          "The accounts section gives users visibility into where their money is and how it aligns with upcoming bills. Users can add new accounts, view balances across different banks, and update balances manually to keep information accurate. The account details screen shows assigned bills and required amounts, helping users understand how each account contributes to covering their financial responsibilities.",
        images: [
          "/Mirar descp images/Accounts/account and account details  light mode.png",
          "/Mirar descp images/Accounts/account and account details  dark mode.png",
          "/Mirar descp images/Accounts/add account and update balance light mode.png",
          "/Mirar descp images/Accounts/add account and update balance dark mode.png"
        ]
      },
      {
        title: "Notifications",
        body:
          "The notifications page keeps users informed about important events such as due bills, shortfalls, missed payments, and recorded transactions. Each notification provides context and links directly to a detailed view where users can take immediate action, such as adding funds. This ensures users are not only aware of issues but are also guided toward resolving them quickly.",
        images: [
          "/Mirar descp images/Notifications/notifications page light mode.png",
          "/Mirar descp images/Notifications/notifications page  dark mode.png"
        ]
      },
      {
        title: "Branding & Presentation",
        body:
          "For Mirar, I designed the logo, branding, and overall visual identity to reflect clarity, control, and trust. The visual system is clean and intentional, using structured layouts, clear typography, and a cohesive color palette to make information easy to understand at a glance. I focused on creating a calm, modern aesthetic that supports the product's awareness-first approach, ensuring users feel guided rather than overwhelmed. Every element, from the logo to the interface visuals, was crafted to reinforce simplicity, consistency, and confidence in managing financial obligations.",
        images: [
          "/Mirar descp images/Brand & Presentation/Frame 2147223340.png",
          "/Mirar descp images/Brand & Presentation/Gemini_Generated_Image_4ur82x4ur82x4ur8 1.png"
        ]
      }
    ]
  },
  {
    slug: "bridgent-consulting",
    title: "Bridgent Consulting",
    category: "Website Design",
    coverImage: "/project cover images/bridgent.png",
    coverAlt: "Bridgent Consulting project cover",
    meta: "Consulting website design",
    intro:
      "Bridgent Consulting translates complex strategic systems into a clear digital narrative built around structure, readability, and long-term scale.",
    coverCaption: "Bridgent Consulting overview",
    externalUrl: "https://www.bridgent.org/",
    sections: [
      {
        title: "1. Information Architecture for Complex Systems",
        body:
          "I organized Bridgent's content to present complex ideas like ecosystem building and operational strategy in a structured and digestible way. The layout breaks down information into clear sections, helping users navigate and understand the platform with ease.",
        images: [
          "/bridgent project descp. images/Information Architecture for Complex Systems/what we do.png",
          "/bridgent project descp. images/Information Architecture for Complex Systems/who we are.png"
        ],
        singleColumn: true
      },
      {
        title: "2. Structured Interface & Readability",
        body:
          "I designed the interface to maintain clarity while handling dense and strategic content. Through careful use of typography, spacing, and alignment, the site remains easy to scan and visually balanced.",
        images: ["/bridgent project descp. images/Structured Interface & Readability/MacBook Pro 16_ - 8.png"]
      },
      {
        title: "3. System-Based Design for Growth",
        body:
          "The website was designed as a scalable system, allowing new programs, partnerships, and initiatives to be added without compromising structure. This ensures long-term usability as the organization evolves.",
        images: [
          "/bridgent project descp. images/System-Based Design for Growth/articles.png",
          "/bridgent project descp. images/System-Based Design for Growth/premium tools.png"
        ],
        singleColumn: true
      },
      {
        title: "4. Translating Strategy into Experience",
        body:
          "I focused on turning high-level strategic concepts into a clear digital experience. The design uses structured layouts and intentional content flow to communicate Bridgent's mission, approach, and impact in a way that feels understandable and grounded.",
        images: ["/bridgent project descp. images/Translating Strategy into Experience/newsletter.png"]
      }
    ]
  },
  {
    slug: "ayinke-consulting",
    title: "Ayinke Consulting",
    category: "Website Design",
    coverImage: "/project cover images/ayinke.png",
    coverAlt: "Ayinke Consulting project cover",
    meta: "Consulting website design",
    intro:
      "Ayinke Consulting was designed as a calm and scalable consulting website where service clarity, hierarchy, and structure do most of the communication work.",
    coverCaption: "Ayinke Consulting overview",
    externalUrl: "https://www.ayinkeconsultinginc.com/",
    sections: [
      {
        title: "1. Information Architecture & Service Structuring",
        body:
          "I structured the website to clearly communicate Ayinke Consulting's services, ensuring users can quickly understand what the company offers and how those services connect. The layout guides users through strategy, execution, and resources in a logical and easy-to-follow flow.",
        images: [
          "/ayinke project descp. images/Information Architecture & Service Structuring/about us.png",
          "/ayinke project descp. images/Information Architecture & Service Structuring/how it works.png"
        ],
        singleColumn: true
      },
      {
        title: "2. Clarity-Driven UI & Visual Hierarchy",
        body:
          "I designed a clean and minimal interface that prioritizes readability and focus. Through strong typography hierarchy, spacing, and section separation, the website communicates professionalism while making complex consulting services feel approachable.",
        images: ["/ayinke project descp. images/Clarity-Driven UI & Visual Hierarchy/Services.png"]
      },
      {
        title: "3. Scalable Content System",
        body:
          "The design was built as a flexible system that can grow with the business. Sections like resources and service offerings were structured to allow easy expansion without disrupting the overall layout or user experience.",
        images: [
          "/ayinke project descp. images/Scalable Content System/MacBook Pro 16_ - 3.png",
          "/ayinke project descp. images/Scalable Content System/MacBook Pro 16_ - 31.png"
        ],
        singleColumn: true
      },
      {
        title: "4. Strategic Communication Through Design",
        body:
          "I translated abstract consulting ideas into clear, structured visual blocks. The design helps users understand not just what Ayinke Consulting does, but how it delivers value, using layout and messaging to simplify complex concepts.",
        images: ["/ayinke project descp. images/Strategic Communication Through Design/newsletter.png"]
      }
    ]
  },
  {
    slug: "ara",
    title: "Ara",
    category: "Ecommerce",
    coverImage: "/project cover images/ara.png",
    coverAlt: "ARA project cover",
    meta: "Ecommerce experience design",
    intro:
      "ARA was redesigned to make shopping feel more guided, conversion-focused, and easy to understand through clearer paths and stronger product storytelling.",
    coverCaption: "ARA overview",
    sections: [
      {
        title: "Redefining the Shopping Experience",
        body:
          "I restructured ARA's shopping experience by introducing three clear pathways based on user intent: Affordable Deals, Premium Deals, and Wholesale. This made it easier for users to quickly understand how to shop and find what they need without feeling overwhelmed.",
        images: ["/Ara project descp. images/Redefining the Shopping Experience/MacBook Pro 16_ - 1.png"]
      },
      {
        title: "Designing a Conversion-Focused Homepage",
        body:
          "I redesigned the homepage to be more engaging and conversion-driven by replacing generic categories with lifestyle-based sections like trending products, gift collections, and limited-time deals. Each section was crafted with stronger headlines and clear calls to action to guide user behavior.",
        images: [
          "/Ara project descp. images/Designing a Conversion-Focused Homepage/Mockup 15.png",
          "/Ara project descp. images/Designing a Conversion-Focused Homepage/Mockup 30.png"
        ]
      },
      {
        title: "Improving Product Discovery",
        body:
          "I enhanced product discovery by creating more intentional browsing flows that go beyond basic categories. By introducing curated entry points, users can explore products in a way that feels natural, relevant, and less overwhelming.",
        images: ["/Ara project descp. images/Improving Product Discovery/Mockup Ribbon 13.png"]
      },
      {
        title: "Prioritizing Simplicity and Usability",
        body:
          "I focused on simplifying the interface by removing unnecessary complexity and improving layout structure. Through better spacing, hierarchy, and interaction patterns, I ensured the experience remained intuitive and easy to navigate.",
        images: ["/Ara project descp. images/Prioritizing Simplicity and Usability/Mockup 21.png"]
      },
      {
        title: "Elevating the Brand Experience",
        body:
          "I refined the overall visual and content direction to make ARA feel more modern and cohesive. The platform now feels more guided and polished, balancing functionality with a stronger, more engaging brand presence.",
        images: ["/Ara project descp. images/elevating the brand experience/Mockup 8.png"]
      }
    ]
  }
];

export const projectOrder = projects.map((project) => project.slug);

export const projectMap = projects.reduce<Record<ProjectSlug, ProjectDetail>>((accumulator, project) => {
  accumulator[project.slug] = project;
  return accumulator;
}, {} as Record<ProjectSlug, ProjectDetail>);

export const shots: ShotItem[] = [
  { src: "/shots/Frame 1000006827.png", alt: "Interface exploration one" },
  { src: "/shots/Frame 1000007616.png", alt: "Interface exploration two" },
  { src: "/shots/Frame 1000007685.png", alt: "Interface exploration three" },
  {
    src: "/shots/Gemini_Generated_Image_gkelkngkelkngkel 1.png",
    alt: "Interface exploration four"
  },
  { src: "/shots/iPhone 15 Pro.png", alt: "Interface exploration five" },
  { src: "/shots/Mockup 16.png", alt: "Interface exploration six" },
  { src: "/shots/Mockup 30.png", alt: "Interface exploration seven" }
];

export const stack: StackItem[] = [
  { name: "Figma", category: "Interface Design", iconSrc: "/assets/stack-figma.svg" },
  { name: "ChatGPT", category: "Ideation Partner", iconSrc: "/stack logos/chatgpt.png" },
  {
    name: "Gemini",
    category: "Research Tool",
    iconSrc: "/stack logos/rectangle-gemini-google-icon-symbol-logo-free-png.webp"
  },
  { name: "Framer", category: "Prototyping", iconSrc: "/stack logos/framer.jpg" },
  {
    name: "Canva",
    category: "Visual Assets",
    iconSrc: "/stack logos/canva-icon-logo-symbol-free-png.webp"
  }
];

export const education = {
  degree: "B.Sc. Information Technology",
  school: "Babcock University",
  date: "2021 - 2025",
  description:
    "Built a strong foundation in technology, systems thinking, and digital product development."
};

export const award: Award = {
  title: "BUCC Hackathon",
  label: "Winner",
  description:
    "Built Rodney, an AI-powered learning platform focused on accessibility and personalized study experiences.",
  year: "2025"
};

export const summaryParagraphs = [
  "I’ve been in the design industry for about two years, working on collaborative university projects that are currently being used by students and lecturers, as well as designing AI-powered solutions for startups and companies. I have a strong passion for learning and constantly improving, and I adapt quickly to new challenges. I’m hardworking, curious, and always ready to grow. You would absolutely love having me on your team!"
];

export const socialLinks: SocialLink[] = [
  {
    label: "Send an email with Gmail",
    text: "Mail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ao.ukeje@gmail.com",
    icon: "mail"
  },
  {
    label: "LinkedIn",
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/analiese-ukeje",
    icon: "linkedin"
  },
  {
    label: "Dribbble",
    text: "Dribbble",
    href: "https://dribbble.com/Anna-Designs",
    icon: "dribbble"
  },
  {
    label: "Behance",
    text: "Behance",
    href: "https://www.behance.net/analieseukeje12",
    icon: "behance"
  }
];
