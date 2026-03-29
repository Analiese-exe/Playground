const projectOrder = [
  "rodneyai",
  "aegis",
  "mirar",
  "bridgent-consulting",
  "ayinke-consulting",
  "ara"
];

const projectData = {
  rodneyai: {
    title: "RodneyAI",
    category: "EdTech",
    meta: "EdTech product design",
    intro:
      "Rodney is an accessibility-first study platform designed to bring structure, personalization, and inclusive learning tools into one calm experience.",
    coverImage: "../project cover images/rodney.png",
    coverAlt: "RodneyAI cover visual",
    coverCaption: "RodneyAI overview",
    sections: [
      {
        title: "1. Problem & Product Vision",
        body:
          "I designed Rodney to solve the gap in traditional study tools that fail neurodiverse learners. Most platforms are fragmented and one-size-fits-all, which leads to frustration and disengagement. Rodney was positioned as a unified, accessibility-first learning platform that helps students focus, retain information, and study effectively through a single, cohesive system."
      },
      {
        title: "2. Accessibility & Research-Driven Design",
        body:
          "I grounded the product in accessibility and inclusive UX research, especially for ADHD, dyslexia, and autism. This influenced decisions like structured layouts, reduced cognitive load, and sensory-aware design. Accessibility was built into the core through features like text-to-speech, speech-to-text, dyslexia fonts, and keyboard navigation, rather than being added later."
      },
      {
        title: "3. Core Features & System Integration",
        body:
          "I designed Rodney as an all-in-one study environment combining flashcards, notes, practice tests, and structured study sessions. Features like spaced repetition, AI-generated content, and real-time study interactions create a seamless workflow, eliminating the need for multiple tools."
      },
      {
        title: "4. AI & Personalization",
        body:
          "I developed an AI Coach that analyzes user behavior, generates study materials, and provides personalized feedback. It adapts to each learner's pace while remaining optional and user-controlled, ensuring AI supports rather than overwhelms the experience."
      },
      {
        title: "5. Innovation & Recognition",
        body:
          "The impact of Rodney's approach was recognized when we won the BUCC Hackathon 2025. The project stood out for its innovative combination of accessibility-first design, AI-powered learning and a fully integrated study system tailored for neurodiverse users, proving both its originality and real-world value."
      }
    ]
  },
  aegis: {
    title: "Aegis",
    category: "Real Estate",
    meta: "Real estate product design",
    intro:
      "Aegis is a trust-centered real estate product focused on making high-value property transactions safer, clearer, and easier to navigate in a local context.",
    coverImage: "../project cover images/kora.png",
    coverAlt: "Aegis cover visual",
    coverCaption: "Aegis overview",
    sections: [
      {
        title: "1. Product Vision & Problem Framing",
        body:
          "For Aegis, I focused on solving the trust issues in Nigerian real estate - from fraudulent agents to omonile risks and unclear ownership. I positioned the platform as more than a listing app, but a transaction protection system that ensures users feel safe when making high-value payments."
      },
      {
        title: "2. End-to-End User Flow Design",
        body:
          "I designed the full journey from property discovery to ownership, including offers, negotiation, reservation, KYC, payments, and transaction tracking. My goal was to simplify complex real estate processes into clear, guided steps, while also accounting for edge cases like failed inspections and disputes."
      },
      {
        title: "3. Escrow, Payments & Trust System",
        body:
          "I built a secure escrow-based payment flow where users can deposit funds and track progress through stages like inspection and document verification. I integrated familiar Nigerian payment methods and designed proof-of-payment systems, receipts, and safeguards to prevent fraud and duplicate transactions."
      },
      {
        title: "4. Dispute Resolution & Safety Features",
        body:
          "I designed a complete dispute system that allows users to report issues, upload evidence, and request resolutions like refunds or mediation. I also introduced warnings and safeguards to protect users from off-platform payments and common scams."
      },
      {
        title: "5. UI/UX & Accessibility",
        body:
          "I created a clean, mobile-first interface focused on simplicity and clarity, especially for less tech-savvy users. I paid close attention to microcopy and interaction design to ensure the experience feels intuitive, reassuring, and easy to navigate."
      }
    ]
  },
  mirar: {
    title: "Mirar",
    category: "Fintech",
    meta: "Fintech product design",
    intro:
      "Mirar was shaped as a visibility-first money experience, helping users understand what is due, what matters today, and what action to take next.",
    coverImage: "../project cover images/mirar.png",
    coverAlt: "Mirar cover visual",
    coverCaption: "Mirar overview",
    sections: [
      {
        title: "Product Vision",
        body:
          "I designed Mirar as an end-to-end product, defining a clear awareness-first approach to financial management. Instead of focusing on saving, I centered the experience on helping users understand what bills are due, when they're due, and how much is needed, introducing concepts like Minimum Required Today (MRT)."
      },
      {
        title: "User Research",
        body:
          "I conducted research and competitor analysis to understand user behavior. I found that users juggle multiple apps, struggle to follow budgets, and lack a clear view of upcoming bills, which led me to focus on visibility and timely prompts rather than adding more financial tools."
      },
      {
        title: "Product Structure",
        body:
          "I built the information architecture and user flows from scratch, mapping key journeys like onboarding, adding bills, and taking action. I ensured the experience remained fast and intuitive by following a three-tap rule and prioritizing clear, actionable paths."
      },
      {
        title: "UI/UX Design",
        body:
          "I designed the full interface with a clean, modern fintech aesthetic, focusing on clarity and hierarchy. I created all core screens and refined interactions, states, and content to ensure users always know what to do next."
      },
      {
        title: "Brand & Presentation",
        body:
          "I developed the Mirar brand identity, including the logo, color system, and visual direction. I also created marketing assets and a detailed case study to clearly communicate both the product and my design process."
      }
    ]
  },
  "bridgent-consulting": {
    title: "Bridgent Consulting",
    category: "Website Design",
    meta: "Consulting website design",
    intro:
      "Bridgent Consulting translates complex strategic systems into a clear digital narrative built around structure, readability, and long-term scale.",
    coverImage: "../project cover images/bridgent.png",
    coverAlt: "Bridgent Consulting cover visual",
    coverCaption: "Bridgent Consulting overview",
    sections: [
      {
        title: "1. Information Architecture for Complex Systems",
        body:
          "I organized Bridgent's content to present complex ideas like ecosystem building and operational strategy in a structured and digestible way. The layout breaks down information into clear sections, helping users navigate and understand the platform with ease."
      },
      {
        title: "2. Structured Interface & Readability",
        body:
          "I designed the interface to maintain clarity while handling dense and strategic content. Through careful use of typography, spacing, and alignment, the site remains easy to scan and visually balanced."
      },
      {
        title: "3. System-Based Design for Growth",
        body:
          "The website was designed as a scalable system, allowing new programs, partnerships, and initiatives to be added without compromising structure. This ensures long-term usability as the organization evolves."
      },
      {
        title: "4. Translating Strategy into Experience",
        body:
          "I focused on turning high-level strategic concepts into a clear digital experience. The design uses structured layouts and intentional content flow to communicate Bridgent's mission, approach, and impact in a way that feels understandable and grounded."
      }
    ]
  },
  "ayinke-consulting": {
    title: "Ayinke Consulting",
    category: "Website Design",
    meta: "Consulting website design",
    intro:
      "Ayinke Consulting was designed as a calm and scalable consulting website where service clarity, hierarchy, and structure do most of the communication work.",
    coverImage: "../project cover images/ayinke.png",
    coverAlt: "Ayinke Consulting cover visual",
    coverCaption: "Ayinke Consulting overview",
    sections: [
      {
        title: "1. Information Architecture & Service Structuring",
        body:
          "I structured the website to clearly communicate Ayinke Consulting's services, ensuring users can quickly understand what the company offers and how those services connect. The layout guides users through strategy, execution, and resources in a logical and easy-to-follow flow."
      },
      {
        title: "2. Clarity-Driven UI & Visual Hierarchy",
        body:
          "I designed a clean and minimal interface that prioritizes readability and focus. Through strong typography hierarchy, spacing, and section separation, the website communicates professionalism while making complex consulting services feel approachable."
      },
      {
        title: "3. Scalable Content System",
        body:
          "The design was built as a flexible system that can grow with the business. Sections like resources and service offerings were structured to allow easy expansion without disrupting the overall layout or user experience."
      },
      {
        title: "4. Strategic Communication Through Design",
        body:
          "I translated abstract consulting ideas into clear, structured visual blocks. The design helps users understand not just what Ayinke Consulting does, but how it delivers value, using layout and messaging to simplify complex concepts."
      }
    ]
  },
  ara: {
    title: "Ara",
    category: "Ecommerce",
    meta: "Ecommerce experience design",
    intro:
      "ARA was redesigned to make shopping feel more guided, conversion-focused, and easy to understand through clearer paths and stronger product storytelling.",
    coverImage: "../project cover images/ara.png",
    coverAlt: "Ara cover visual",
    coverCaption: "ARA overview",
    sections: [
      {
        title: "Redefining the Shopping Experience",
        body:
          "I restructured ARA's shopping experience by introducing three clear pathways based on user intent: Affordable Deals, Premium Deals, and Wholesale. This made it easier for users to quickly understand how to shop and find what they need without feeling overwhelmed."
      },
      {
        title: "Designing a Conversion-Focused Homepage",
        body:
          "I redesigned the homepage to be more engaging and conversion-driven by replacing generic categories with lifestyle-based sections like trending products, gift collections, and limited-time deals. Each section was crafted with stronger headlines and clear calls to action to guide user behavior."
      },
      {
        title: "Improving Product Discovery",
        body:
          "I enhanced product discovery by creating more intentional browsing flows that go beyond basic categories. By introducing curated entry points, users can explore products in a way that feels natural, relevant, and less overwhelming."
      },
      {
        title: "Prioritizing Simplicity and Usability",
        body:
          "I focused on simplifying the interface by removing unnecessary complexity and improving layout structure. Through better spacing, hierarchy, and interaction patterns, I ensured the experience remained intuitive and easy to navigate."
      },
      {
        title: "Elevating the Brand Experience",
        body:
          "I refined the overall visual and content direction to make ARA feel more modern and cohesive. The platform now feels more guided and polished, balancing functionality with a stronger, more engaging brand presence."
      }
    ]
  }
};

const projectWorkLinks = {
  aegis:
    "https://www.behance.net/gallery/244006509/Aegis-Real-Estate-Escrow-UX-Case-Study?platform=direct",
  mirar: "https://www.behance.net/gallery/246269121/Mirar-Bill-Tracking-App?platform=direct",
  "bridgent-consulting": "https://www.bridgent.org/",
  "ayinke-consulting": "https://www.ayinkeconsultinginc.com/"
};

const projectSectionImages = {
  rodneyai: [
    [
      "../rodney project desc. images/Problem & Product Vision/Dashboard.png",
      "../rodney project desc. images/Problem & Product Vision/Dashboard2.png"
    ],
    [
      "../rodney project desc. images/Accessibility & Research-Driven Design/Dashboard autism.png",
      "../rodney project desc. images/Accessibility & Research-Driven Design/Dashboard dyslexic.png"
    ],
    [
      "../rodney project desc. images/Core Features & System Integration/Flahscard.png",
      "../rodney project desc. images/Core Features & System Integration/Practice test.png",
      "../rodney project desc. images/Core Features & System Integration/Study session expanded.png"
    ],
    [
      "../rodney project desc. images/AI & Personalization/ask rodney light.png",
      "../rodney project desc. images/AI & Personalization/ask rodney.png",
      "../rodney project desc. images/AI & Personalization/ask rodney1.png"
    ],
    ["../rodney project desc. images/UX, Interface & Product Strategy/1743803620714.jfif"]
  ],
  aegis: [
    ["../kora project desc. images/Product Vision & Problem Framing/Hero.png"],
    [
      "../kora project desc. images/End-to-End User Flow Design/Frame 2147223364.png",
      "../kora project desc. images/End-to-End User Flow Design/Frame 2147223365.png",
      "../kora project desc. images/End-to-End User Flow Design/Frame 2147223366.png",
      "../kora project desc. images/End-to-End User Flow Design/Frame 2147223367.png"
    ],
    ["../kora project desc. images/Escrow, Payments & Trust System/Frame 2147223368.png"],
    [
      "../kora project desc. images/Dispute Resolution & Safety Features/Frame 2147223369.png",
      "../kora project desc. images/Dispute Resolution & Safety Features/Frame 2147223370.png"
    ],
    [
      "../kora project desc. images/UIUX & Accessibility/Frame 2147223367.png",
      "../kora project desc. images/UIUX & Accessibility/Gemini_Generated_Image_gkelkngkelkngkel 1.png"
    ]
  ],
  mirar: [
    ["../mirar project descp. images/Product Vision/iPhone 16 Pro.png"],
    ["../mirar project descp. images/User Research/Frame 1618869509.png"],
    [
      "../mirar project descp. images/Product Structure/Frame 2147223333.png",
      "../mirar project descp. images/Product Structure/Frame 2147223339.png"
    ],
    [
      "../mirar project descp. images/UIUX Design/Mockup 14.png",
      "../mirar project descp. images/UIUX Design/Mockup 9.png",
      "../mirar project descp. images/UIUX Design/Mockup Ribbon 13.png"
    ],
    [
      "../mirar project descp. images/Brand & Presentation/Frame 2147223340.png",
      "../mirar project descp. images/Brand & Presentation/Gemini_Generated_Image_4ur82x4ur82x4ur8 1.png"
    ]
  ],
  "bridgent-consulting": [
    [
      "../bridgent project descp. images/Information Architecture for Complex Systems/what we do.png",
      "../bridgent project descp. images/Information Architecture for Complex Systems/who we are.png"
    ],
    ["../bridgent project descp. images/Structured Interface & Readability/MacBook Pro 16_ - 8.png"],
    [
      "../bridgent project descp. images/System-Based Design for Growth/articles.png",
      "../bridgent project descp. images/System-Based Design for Growth/premium tools.png"
    ],
    ["../bridgent project descp. images/Translating Strategy into Experience/newsletter.png"]
  ],
  "ayinke-consulting": [
    [
      "../ayinke project descp. images/Information Architecture & Service Structuring/about us.png",
      "../ayinke project descp. images/Information Architecture & Service Structuring/how it works.png"
    ],
    ["../ayinke project descp. images/Clarity-Driven UI & Visual Hierarchy/Services.png"],
    [
      "../ayinke project descp. images/Scalable Content System/MacBook Pro 16_ - 3.png",
      "../ayinke project descp. images/Scalable Content System/MacBook Pro 16_ - 31.png"
    ],
    ["../ayinke project descp. images/Strategic Communication Through Design/newsletter.png"]
  ],
  ara: [
    ["../Ara project descp. images/Redefining the Shopping Experience/MacBook Pro 16_ - 1.png"],
    [
      "../Ara project descp. images/Designing a Conversion-Focused Homepage/Mockup 15.png",
      "../Ara project descp. images/Designing a Conversion-Focused Homepage/Mockup 30.png"
    ],
    ["../Ara project descp. images/Improving Product Discovery/Mockup Ribbon 13.png"],
    ["../Ara project descp. images/Prioritizing Simplicity and Usability/Mockup 21.png"],
    ["../Ara project descp. images/elevating the brand experience/Mockup 8.png"]
  ]
};

const projectSectionLayoutOverrides = {
  rodneyai: [0, 1, 2, 3],
  mirar: [2],
  "bridgent-consulting": [0, 2],
  "ayinke-consulting": [0, 2]
};

async function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to execCommand.
    }
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(helper);
  return copied;
}

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  const label = button.querySelector("[data-copy-label-text]");
  const defaultText = button.dataset.copyDefault || (label ? label.textContent : "");
  const successText = button.dataset.copySuccess || "Copied!";
  let timerId;

  button.addEventListener("click", async () => {
    const copied = await copyText(button.dataset.copyEmail || "");
    if (!copied || !label) {
      return;
    }

    label.textContent = successText;
    button.classList.add("is-copied");
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      label.textContent = defaultText;
      button.classList.remove("is-copied");
    }, 1800);
  });
});

const projectPage = document.querySelector("[data-project-page]");

function createDivider() {
  const divider = document.createElement("div");
  divider.className = "project-divider";
  divider.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 3; index += 1) {
    divider.appendChild(document.createElement("span"));
  }

  return divider;
}

function setupScrollReveal() {
  const selectors = [
    ".site-shell > header",
    ".site-shell > section",
    ".site-shell > footer",
    ".experience-card",
    ".project-card",
    ".shot-card",
    ".stack-card",
    ".education-card",
    ".award-item",
    ".project-topbar",
    ".project-hero",
    ".case-section",
    ".project-pagination"
  ];

  const items = Array.from(document.querySelectorAll(selectors.join(", ")));

  items.forEach((item, index) => {
    if (item.classList.contains("scroll-reveal")) {
      return;
    }

    item.classList.add("scroll-reveal");
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -48px 0px"
    }
  );

  items.forEach((item) => observer.observe(item));
}

function setupShotsLightbox() {
  const shotImages = Array.from(document.querySelectorAll(".shot-card img"));

  if (!shotImages.length) {
    return;
  }

  const lightbox = document.createElement("div");
  const closeButton = document.createElement("button");
  const preview = document.createElement("img");
  let active = false;

  lightbox.className = "shot-lightbox";
  lightbox.setAttribute("aria-hidden", "true");

  closeButton.className = "shot-lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close full image");
  closeButton.innerHTML = `
    <img
      class="lucide-icon"
      src="lucide-main/lucide-main/icons/x.svg"
      alt=""
      aria-hidden="true"
    />
  `;

  lightbox.appendChild(closeButton);
  lightbox.appendChild(preview);
  document.body.appendChild(lightbox);

  const closeLightbox = () => {
    if (!active) {
      return;
    }

    active = false;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  shotImages.forEach((image) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("click", () => {
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt || "Shot preview";
      active = true;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}

if (projectPage) {
  const key = projectPage.dataset.projectKey;
  const data = projectData[key];
  const titleNode = document.querySelector("[data-project-title]");
  const metaNode = document.querySelector("[data-project-meta]");
  const introNode = document.querySelector("[data-project-intro]");
  const coverNode = document.querySelector("[data-project-cover]");
  const coverCaptionNode = document.querySelector("[data-project-cover-caption]");
  const caseStudyNode = document.querySelector("[data-project-case-study]");
  const paginationNode = document.querySelector("[data-project-pagination]");
  const workLinkNode = document.querySelector(".project-view-link");
  const sectionImages = projectSectionImages[key] || [];

  if (data && titleNode && metaNode && introNode && coverNode && coverCaptionNode && caseStudyNode) {
    document.title = `${data.title} - Ukeje Analiese Ogochukwu`;
    titleNode.textContent = data.title;
    metaNode.textContent = `${data.meta} - Case study`;
    introNode.textContent = data.intro;
    coverNode.src = data.coverImage;
    coverNode.alt = data.coverAlt;
    coverCaptionNode.textContent = data.coverCaption;
    caseStudyNode.textContent = "";

    if (workLinkNode) {
      const workLink = projectWorkLinks[key];

      if (!workLink) {
        workLinkNode.remove();
      } else {
        workLinkNode.href = workLink;
        workLinkNode.target = "_blank";
        workLinkNode.rel = "noreferrer";
        workLinkNode.innerHTML = `
          <img
            class="lucide-icon"
            src="../lucide-main/lucide-main/icons/external-link.svg"
            alt=""
            aria-hidden="true"
          />
          <span>View work</span>
        `;
      }
    }

    data.sections.forEach((section, index) => {
      const block = document.createElement("article");
      const label = document.createElement("h2");
      const body = document.createElement("p");
      const images = sectionImages[index] || [];

      block.className = "case-section";
      label.className = "project-section-title";
      label.textContent = section.title;
      body.className = "case-paragraph";
      body.textContent = section.body;

      block.appendChild(label);
      block.appendChild(body);

      if (images.length) {
        const grid = document.createElement("div");
        const caption = document.createElement("p");
        const singleColumnSections = projectSectionLayoutOverrides[key] || [];

        grid.className = "case-grid";
        grid.classList.add(`grid-${Math.min(images.length, 4)}`);
        if (singleColumnSections.includes(index)) {
          grid.classList.add("is-single-column");
        }
        caption.className = "project-caption";
        caption.textContent = `${section.title} visuals`;

        images.forEach((imagePath, imageIndex) => {
          const image = document.createElement("img");
          image.src = imagePath;
          image.alt = `${data.title} design visual ${imageIndex + 1}`;
          grid.appendChild(image);
        });

        block.appendChild(grid);
        block.appendChild(caption);
        block.appendChild(createDivider());
      }

      caseStudyNode.appendChild(block);
    });

    if (paginationNode) {
      const currentIndex = projectOrder.indexOf(key);
      const previousKey = projectOrder[currentIndex - 1];
      const nextKey = projectOrder[currentIndex + 1];

        if (previousKey && projectData[previousKey]) {
          const previousLink = document.createElement("a");
          const previousDirection = document.createElement("span");
          const previousIcon = document.createElement("span");
          const previousLabel = document.createElement("span");
          const previousTitle = document.createElement("span");

          previousLink.className = "project-nav-link";
          previousLink.href = `${previousKey}.html`;
          previousDirection.className = "project-nav-direction";
          previousIcon.className = "project-nav-icon";
          previousIcon.innerHTML = `
            <img
              class="lucide-icon"
              src="../lucide-main/lucide-main/icons/arrow-left.svg"
              alt=""
              aria-hidden="true"
            />
          `;
          previousLabel.className = "project-nav-label";
          previousLabel.textContent = "Previous";
          previousTitle.className = "project-nav-title";
          previousTitle.textContent = projectData[previousKey].title;
          previousDirection.appendChild(previousIcon);
          previousDirection.appendChild(previousLabel);
          previousLink.appendChild(previousDirection);
          previousLink.appendChild(previousTitle);
          paginationNode.appendChild(previousLink);
        }

        if (nextKey && projectData[nextKey]) {
          const nextLink = document.createElement("a");
          const nextDirection = document.createElement("span");
          const nextIcon = document.createElement("span");
          const nextLabel = document.createElement("span");
          const nextTitle = document.createElement("span");

          nextLink.className = "project-nav-link next";
          nextLink.href = `${nextKey}.html`;
          nextDirection.className = "project-nav-direction";
          nextIcon.className = "project-nav-icon";
          nextIcon.innerHTML = `
            <img
              class="lucide-icon"
              src="../lucide-main/lucide-main/icons/arrow-right.svg"
              alt=""
              aria-hidden="true"
            />
          `;
          nextLabel.className = "project-nav-label";
          nextLabel.textContent = "Next";
          nextTitle.className = "project-nav-title";
          nextTitle.textContent = projectData[nextKey].title;
          nextDirection.appendChild(nextLabel);
          nextDirection.appendChild(nextIcon);
          nextLink.appendChild(nextDirection);
          nextLink.appendChild(nextTitle);
          paginationNode.appendChild(nextLink);
        }
    }
  }
}

setupShotsLightbox();
setupScrollReveal();
