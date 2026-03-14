const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
const translatableNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const ariaLabelNodes = Array.from(document.querySelectorAll("[data-i18n-aria-label]"));
const emailTrigger = document.querySelector("[data-email-trigger]");
const descriptionMeta = document.querySelector('meta[name="description"]');

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const LANGUAGE_KEY = "jwyan-site-language";

const translations = {
  en: {
    "meta.title": "Jiawei Yan | Attosecond XFEL and Beyond",
    "meta.description":
      "Jiawei Yan works on ultra-high-power hard X-ray attosecond pulses, spatiotemporal shaping of X-ray pulses, fully coherent high-repetition-rate FELs, and AI for Science.",
    "skip": "Skip to content",
    "lang.switcher": "Language switcher",
    "person.name": "Jiawei Yan",
    "brand.tagline": "Attosecond XFEL and Beyond",
    "nav.toggle": "Toggle navigation",
    "nav.about": "About",
    "nav.research": "Research",
    "nav.papers": "Papers",
    "nav.highlights": "Highlights",
    "nav.awards": "Recognition",
    "nav.contact": "Contact",
    "hero.eyebrow": "Attosecond XFEL and Beyond",
    "hero.role":
      "Ultra-high-power hard X-ray attosecond pulse generation and applications",
    "hero.summary":
      "My current main focus is the generation and application of ultra-high-power hard X-ray attosecond pulses. More broadly, I work on advanced X-ray free-electron laser science, especially when source physics can be pushed toward stronger temporal compression, higher peak power, richer pulse structure, and more useful experimental capability.",
    "hero.summary2":
      "My research spans attosecond XFELs, spatiotemporal shaping of X-ray pulses, fully coherent high-repetition-rate FELs, and AI for Science. At the center is a broader question: how can we move toward complete control over X-ray pulses?",
    "hero.pill1": "Attosecond XFEL",
    "hero.pill2": "X-ray pulse shaping",
    "hero.pill3": "Fully coherent high-repetition-rate FEL",
    "hero.pill4": "AI for Science",
    "hero.visualKicker": "Research Map",
    "hero.visualTag": "four themes",
    "hero.diagramTitle": "Research directions in XFEL science",
    "hero.diagramDesc":
      "A central pulse core connected to four themes: attosecond XFEL, X-ray pulse shaping, self-modulation seeded FELs, and AI for Science.",
    "hero.node1a": "Attosecond",
    "hero.node1b": "XFEL",
    "hero.node2a": "X-ray pulse",
    "hero.node2b": "shaping",
    "hero.node3a": "Self-modulation",
    "hero.node3b": "seeded FELs",
    "hero.node4a": "AI for",
    "hero.node4b": "Science",
    "hero.caption": "ultra-high-power hard X-ray attosecond pulses",
    "hero.visual1Title": "Main focus",
    "hero.visual1Label":
      "generation and applications of hard X-ray attosecond pulses",
    "hero.visual2Title": "Extended program",
    "hero.visual2Label":
      "pulse shaping, coherent FELs, and AI-enabled control",
    "about.eyebrow": "About",
    "about.title":
      "Centered on hard X-ray attosecond pulse generation, then extended outward",
    "about.intro":
      "The center of gravity of my current work is ultra-high-power hard X-ray attosecond pulse generation and its application to new ultrafast X-ray science.",
    "about.p1":
      "I am based in Hamburg and work on advanced XFEL science across theory, numerical design, and experimental implementation. My current research program focuses on advancing hard X-ray attosecond pulse generation toward higher peak power, stronger controllability, and broader experimental impact, especially where pulse properties can be deliberately matched to demanding ultrafast measurements.",
    "about.p2":
      "Around this main line, I work on several connected problems: shaping X-ray pulses in both time and space, developing routes toward fully coherent high-repetition-rate FEL operation, and using AI and optimization methods to make accelerator and light-source physics more efficient and more programmable.",
    "about.p3":
      "I do not see these as separate topics. They are parts of one broader objective: complete control over X-ray pulses, from pulse duration and wavefront structure to coherence, stability, diagnostics, and machine intelligence.",
    "about.focusTitle": "Current emphasis",
    "about.focus1":
      "Ultra-high-power hard X-ray attosecond pulse generation and applications",
    "about.focus2": "Spatiotemporal shaping of structured X-ray pulses",
    "about.focus3":
      "Fully coherent high-repetition-rate FEL concepts and seeded FEL physics",
    "about.focus4":
      "Bayesian and AI-assisted optimization for accelerator-based light sources",
    "research.eyebrow": "Research",
    "research.title": "Four research themes",
    "research.intro":
      "Attosecond XFELs, X-ray pulse shaping, coherent high-repetition-rate FELs, and AI for Science.",
    "research.card1.title": "Attosecond XFEL",
    "research.card1.p1":
      "Hard X-ray attosecond pulses are a uniquely powerful route to resolving electronic motion and nonequilibrium dynamics on their natural timescales. The challenge is not merely to reach the attosecond regime, but to do so with sufficiently high peak power and with pulse properties that are actually useful for experiments.",
    "research.card1.p2":
      "This is my primary focus. I work on the generation and application of ultra-high-power hard X-ray attosecond pulses, with emphasis on beam shaping, pulse compression, source optimization, diagnostics, and the transition from proof-of-principle generation to robust scientific use.",
    "research.card2.title": "Spatiotemporal shaping of X-ray pulses",
    "research.card2.p1":
      "Once pulse duration becomes controllable, the next question is whether one can also shape waveform, phase, and transverse mode content as part of pulse generation itself. This matters because many future X-ray experiments will need not just shorter pulses, but pulses with designed spatiotemporal structure.",
    "research.card2.p2":
      "I study methods for directly shaping X-ray pulses in time and space, including orbital-angular-momentum control and other routes to wavefront-engineered or waveform-engineered X-ray emission.",
    "research.card3.title": "Fully coherent high-repetition-rate FEL",
    "research.card3.p1":
      "Fully coherent FEL operation at high repetition rate is a major goal for next-generation light sources, but standard seeded FEL schemes run into practical limits, especially in seed-laser power and scalability. More generally, the question is how to retain seeded-FEL coherence while removing those bottlenecks.",
    "research.card3.p2":
      "In my work, the most concrete example is the self-modulation seeded FEL mechanism, which I proposed and experimentally validated. More broadly, I am interested in how self-modulation HGHG and related mechanisms can support compact, high-average-power EUV FELs as well as more general coherent high-repetition-rate FEL development.",
    "research.card4.title": "AI for Science",
    "research.card4.p1":
      "Accelerator and FEL systems are already too high-dimensional and too nonlinear to rely only on manual tuning or brute-force scans. If we want light sources to become more adaptive and more precisely controlled, intelligent optimization must become part of the physics workflow.",
    "research.card4.p2":
      "I use Bayesian optimization, machine learning, and physics-informed algorithms for machine studies, FEL design, and operational optimization, especially where these methods can improve both physical insight and practical controllability.",
    "papers.eyebrow": "Papers",
    "papers.title": "Selected papers",
    "papers.intro":
      "Recent work.",
    "visuals.eyebrow": "Visuals",
    "visuals.title": "Research visuals",
    "visuals.intro":
      "Selected cover and concept visuals related to recent work.",
    "visuals.card1.source": "Nature Photonics 2024",
    "visuals.card1.title": "Attosecond XFEL",
    "visuals.card1.text":
      "Concept visual for ultra-high-power hard X-ray attosecond pulse generation.",
    "visuals.card2.source": "APN 2023",
    "visuals.card2.title": "Self-seeded OAM",
    "visuals.card2.text":
      "Structured X-ray pulses with orbital angular momentum.",
    "visuals.card3.source": "PRL 2021 / APN 2023",
    "visuals.card3.title": "Self-modulation HGHG",
    "visuals.card3.text":
      "Visual work related to self-modulation seeded FEL and coherent harmonic control.",
    "visuals.card4.source": "Advanced Photonics 2021",
    "visuals.card4.title": "Laser-beam interaction",
    "visuals.card4.text":
      "Concept visual for laser-beam interaction in a dipole magnet.",
    "highlights.eyebrow": "Outlook",
    "highlights.title": "Current directions and future plans",
    "highlights.intro":
      "Attosecond pulse generation, coherent FEL concepts, diagnostics, and applications.",
    "highlights.panel1Title": "Toward complete control over X-ray pulses",
    "highlights.panel1P1":
      "The central aim is not only to make XFEL pulses shorter or more intense, but to make them deliberately shapeable. That means engineering the electron beam, the seeding process, and the FEL interaction so that the final X-ray pulse carries useful structure in duration, phase, topology, and coherence.",
    "highlights.panel1P2":
      "In this view, attosecond XFELs, structured X-ray pulses, coherent FEL control, and machine intelligence are not isolated projects. They all serve the same long-term goal: achieving as complete control over X-ray pulses as possible.",
    "highlights.panel2Title": "Shared scientific thread",
    "highlights.item1": "Electron-beam phase-space control",
    "highlights.item2": "Direct shaping of ultrafast X-ray waveforms",
    "highlights.item3": "Coherence and scalability at high repetition rate",
    "highlights.item4": "Data-driven operation of complex accelerator systems",
    "highlights.panel3Title": "Future directions",
    "highlights.panel3P1":
      "Looking ahead, I want to develop compact attosecond XFEL concepts, diagnostics tailored to attosecond XFEL pulses, and new applications that fully exploit the unique combination of hard X-ray photon energy, attosecond duration, and high peak power.",
    "highlights.panel3P2":
      "On the coherent FEL side, I am also interested in whether self-modulation HGHG and related mechanisms can support compact, high-average-power EUV FEL development.",
    "awards.eyebrow": "Recognition",
    "awards.title": "Selected honors",
    "awards.a1": "First Prize, Chinese Nuclear Society Natural Science Award",
    "awards.a2": "European XFEL Young Scientist Award",
    "awards.a3": "Young Investigator FEL Prize",
    "awards.a4": "CAS Excellent Doctoral Dissertation Award",
    "awards.a5": "China's Top 10 Optical Breakthroughs",
    "awards.a6": "CAS President's Special Award",
    "contact.eyebrow": "Contact",
    "contact.title": "Contact and profiles",
    "contact.intro":
      "Academic correspondence and collaborations.",
    "contact.card1Title": "Email",
    "contact.card1Text":
      "Academic correspondence.",
    "contact.emailButton": "Open email",
    "contact.card2Title": "Location",
    "contact.card2Text": "Hamburg, Germany",
    "contact.card3Title": "Profiles",
    "contact.card3Text":
      "LinkedIn, ResearchGate, and Twitter.",
    "footer.tagline": "Attosecond XFEL and Beyond",
  },
  zh: {
    "meta.title": "颜佳伟 | 阿秒 XFEL 及其未来",
    "meta.description":
      "颜佳伟的研究聚焦于超高功率硬X射线阿秒脉冲、X射线脉冲时空整形、全相干高重复频率FEL，以及 AI for Science。",
    "skip": "跳到正文",
    "lang.switcher": "语言切换",
    "person.name": "颜佳伟",
    "brand.tagline": "阿秒 XFEL 及其未来",
    "nav.toggle": "切换导航",
    "nav.about": "关于",
    "nav.research": "研究方向",
    "nav.papers": "论文",
    "nav.highlights": "研究脉络",
    "nav.awards": "荣誉",
    "nav.contact": "联系",
    "hero.eyebrow": "阿秒 XFEL 及其未来",
    "hero.role": "超高功率硬X射线阿秒脉冲的产生及应用",
    "hero.summary":
      "我当前最主要的研究重点，是超高功率硬X射线阿秒脉冲的产生及其应用。更广义地说，我关注那些能够把X射线自由电子激光推进到更强时域压缩、更高峰值功率、更丰富脉冲结构以及更高实验可用性的源物理问题。",
    "hero.summary2":
      "我的研究涵盖阿秒XFEL、X射线脉冲时空整形、全相干高重复频率FEL，以及 AI for Science。贯穿其中的核心问题是：我们如何尽可能完全地操控X射线脉冲？",
    "hero.pill1": "阿秒 XFEL",
    "hero.pill2": "X射线脉冲整形",
    "hero.pill3": "全相干高重复频率 FEL",
    "hero.pill4": "AI for Science",
    "hero.visualKicker": "研究图谱",
    "hero.visualTag": "四个主题",
    "hero.diagramTitle": "XFEL 科学中的研究方向",
    "hero.diagramDesc":
      "一个中心脉冲核心连接四个主题：阿秒XFEL、X射线脉冲整形、自调制 seeded FEL，以及 AI for Science。",
    "hero.node1a": "阿秒",
    "hero.node1b": "XFEL",
    "hero.node2a": "X射线脉冲",
    "hero.node2b": "整形",
    "hero.node3a": "自调制",
    "hero.node3b": "seeded FEL",
    "hero.node4a": "AI for",
    "hero.node4b": "Science",
    "hero.caption": "超高功率硬X射线阿秒脉冲",
    "hero.visual1Title": "当前主线",
    "hero.visual1Label": "硬X射线阿秒脉冲的产生与应用",
    "hero.visual2Title": "延展方向",
    "hero.visual2Label": "脉冲整形、相干FEL与AI驱动控制",
    "about.eyebrow": "关于",
    "about.title": "以硬X射线阿秒脉冲产生为中心，并向外延展",
    "about.intro":
      "我当前研究的重心，是把超高功率硬X射线阿秒脉冲推进到新的产生机制、诊断能力和应用场景。",
    "about.p1":
      "我目前在汉堡从事先进XFEL科学研究，工作内容横跨理论、数值设计和实验实现。现阶段的主要研究重点，是推动硬X射线阿秒脉冲向更高峰值功率、更强可控性以及更明确的实验影响力发展，尤其关注那些能够与高要求超快测量真正匹配的脉冲性质。",
    "about.p2":
      "围绕这一主线，我也研究若干紧密相关的问题：如何在时间和空间两个维度上整形X射线脉冲，如何推动全相干高重复频率FEL方案的发展，以及如何把AI和优化方法更深入地带入加速器与光源物理。",
    "about.p3":
      "在我看来，这些并不是彼此孤立的课题，而是同一个更大目标的不同部分：尽可能完整地操控X射线脉冲，从脉冲时长、波前结构、相干性与稳定性，一直到诊断能力和机器智能。",
    "about.focusTitle": "当前关注",
    "about.focus1": "超高功率硬X射线阿秒脉冲的产生与应用",
    "about.focus2": "结构化X射线脉冲的时空整形",
    "about.focus3": "全相干高重复频率FEL方案与 seeded FEL 物理",
    "about.focus4": "面向加速器光源的贝叶斯与AI辅助优化",
    "research.eyebrow": "研究方向",
    "research.title": "四个研究主题",
    "research.intro":
      "阿秒XFEL、X射线脉冲整形、全相干高重复频率FEL，以及 AI for Science。",
    "research.card1.title": "阿秒 XFEL",
    "research.card1.p1":
      "硬X射线阿秒脉冲是研究电子运动和非平衡动力学自然时间尺度的独特工具。关键难点不仅是进入阿秒尺度，更在于同时获得足够高的峰值功率，以及真正对实验有用的脉冲性质。",
    "research.card1.p2":
      "这是我当前最核心的研究重点。我关注超高功率硬X射线阿秒脉冲的产生及应用，尤其强调束流整形、脉冲压缩、源参数优化、阿秒XFEL诊断，以及从原理验证走向稳定科学应用的全过程。",
    "research.card2.title": "X射线脉冲的时空整形",
    "research.card2.p1":
      "当脉冲持续时间开始变得可控之后，下一步问题就是：我们是否还能把波形、相位以及横向模态结构也作为脉冲产生过程的一部分来控制？这很重要，因为未来很多X射线实验需要的不是“更短”的脉冲，而是“被设计过”的脉冲。",
    "research.card2.p2":
      "因此我研究直接实现X射线脉冲时空整形的方法，包括轨道角动量调控，以及其他能够实现波前工程或波形工程的X射线产生方案。",
    "research.card3.title": "全相干高重复频率 FEL",
    "research.card3.p1":
      "对下一代光源而言，全相干高重复频率FEL是一个重要目标，但标准 seeded FEL 方案往往受限于种子激光功率和可扩展性。更一般地说，核心问题是如何在保留 seeded FEL 相干性优势的同时，去掉这些现实瓶颈。",
    "research.card3.p2":
      "在这一方向上，我最具体的工作是提出并实验验证了 self-modulation seeded FEL 机制。更广泛地，我也关心 self-modulation HGHG 及相关机制是否能够支持紧凑型、高平均功率 EUV-FEL，以及更一般意义上的高重复频率相干FEL发展。",
    "research.card4.title": "AI for Science",
    "research.card4.p1":
      "加速器和FEL系统已经高度高维且强非线性，单靠人工调节或暴力扫描越来越不现实。如果我们希望光源系统更自适应、更精确可控，那么智能优化必须成为物理工作流的一部分。",
    "research.card4.p2":
      "我使用贝叶斯优化、机器学习和物理约束算法来处理机器研究、FEL设计和运行优化问题，尤其关注这些方法如何同时提升物理理解和实际可控性。",
    "papers.eyebrow": "论文",
    "papers.title": "近期论文",
    "papers.intro":
      "近期工作。",
    "visuals.eyebrow": "图像",
    "visuals.title": "研究图像",
    "visuals.intro":
      "与近期工作相关的部分封面与概念图像。",
    "visuals.card1.source": "Nature Photonics 2024",
    "visuals.card1.title": "阿秒 XFEL",
    "visuals.card1.text":
      "对应超高功率硬X射线阿秒脉冲产生的概念图像。",
    "visuals.card2.source": "APN 2023",
    "visuals.card2.title": "Self-seeded OAM",
    "visuals.card2.text":
      "对应携带轨道角动量的结构化X射线脉冲图像。",
    "visuals.card3.source": "PRL 2021 / APN 2023",
    "visuals.card3.title": "Self-modulation HGHG",
    "visuals.card3.text":
      "围绕 self-modulation seeded FEL 与相干谐波控制的图像表达。",
    "visuals.card4.source": "Advanced Photonics 2021",
    "visuals.card4.title": "Laser-beam interaction",
    "visuals.card4.text":
      "对应 dipole magnet 中 laser-beam interaction 的概念图像。",
    "highlights.eyebrow": "展望",
    "highlights.title": "当前方向与未来计划",
    "highlights.intro":
      "围绕阿秒脉冲产生、相干FEL方案、诊断与应用展开。",
    "highlights.panel1Title": "走向对X射线脉冲的完整操控",
    "highlights.panel1P1":
      "核心目标不只是让XFEL脉冲更短或更强，而是让它能够被主动设计。这意味着需要从电子束、seed 过程以及FEL相互作用本身入手，使最终得到的X射线脉冲在时长、相位、拓扑和相干性上都携带可用的结构。",
    "highlights.panel1P2":
      "从这个角度看，阿秒XFEL、结构化X射线脉冲、相干FEL控制以及机器智能并不是彼此孤立的项目，而是在朝着同一个长期目标推进：尽可能完整地操控X射线脉冲。",
    "highlights.panel2Title": "共同的科学主线",
    "highlights.item1": "电子束相空间控制",
    "highlights.item2": "超快X射线波形的直接整形",
    "highlights.item3": "高重复频率下的相干性与可扩展性",
    "highlights.item4": "复杂加速器系统的数据驱动运行",
    "highlights.panel3Title": "未来方向",
    "highlights.panel3P1":
      "未来我希望继续发展紧凑型阿秒XFEL方案、面向阿秒XFEL脉冲的诊断技术，以及真正利用硬X射线光子能量、阿秒时长和高峰值功率这一独特组合的新型应用。",
    "highlights.panel3P2":
      "在相干FEL方向上，我也希望进一步探索 self-modulation HGHG 及相关机制，是否能够支持紧凑型、高平均功率 EUV-FEL 的发展。",
    "awards.eyebrow": "荣誉",
    "awards.title": "部分荣誉",
    "awards.a1": "中国核学会自然科学一等奖",
    "awards.a2": "European XFEL Young Scientist Award",
    "awards.a3": "Young Investigator FEL Prize",
    "awards.a4": "中国科学院优秀博士学位论文奖",
    "awards.a5": "中国光学十大进展",
    "awards.a6": "中国科学院院长特别奖",
    "contact.eyebrow": "联系",
    "contact.title": "联系方式与个人主页",
    "contact.intro":
      "用于学术交流与合作联系。",
    "contact.card1Title": "电子邮件",
    "contact.card1Text":
      "学术交流联系。",
    "contact.emailButton": "打开邮件",
    "contact.card2Title": "所在地",
    "contact.card2Text": "德国汉堡",
    "contact.card3Title": "个人主页",
    "contact.card3Text":
      "LinkedIn、ResearchGate 和 Twitter。",
    "footer.tagline": "阿秒 XFEL 及其未来",
  },
};

function setHeaderState() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!nav || !navToggle) {
    return;
  }

  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function openNav() {
  if (!nav || !navToggle) {
    return;
  }

  nav.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
}

function resolveInitialLanguage() {
  const stored = window.localStorage.getItem(LANGUAGE_KEY);
  if (stored === "en" || stored === "zh") {
    return stored;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function applyTranslations(language) {
  const locale = translations[language] ?? translations.en;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key || !(key in locale)) {
      return;
    }
    node.textContent = locale[key];
  });

  ariaLabelNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (!key || !(key in locale)) {
      return;
    }
    node.setAttribute("aria-label", locale[key]);
  });

  document.title = locale["meta.title"];
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", locale["meta.description"]);
  }

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.language = language;

  langButtons.forEach((button) => {
    const active = button.dataset.langButton === language;
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function setLanguage(language) {
  const nextLanguage = language === "zh" ? "zh" : "en";
  applyTranslations(nextLanguage);
  window.localStorage.setItem(LANGUAGE_KEY, nextLanguage);
  closeNav();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) {
      closeNav();
      return;
    }
    openNav();
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langButton ?? "en");
  });
});

document.addEventListener("click", (event) => {
  if (!nav || !navToggle) {
    return;
  }

  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }

  if (!nav.contains(target) && !navToggle.contains(target)) {
    closeNav();
  }
});

if (prefersReducedMotion.matches) {
  revealItems.forEach((item) => item.classList.add("revealed"));
} else {
  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 0.04, 0.32)}s`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const current = link.getAttribute("href") === id;
          if (current) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -45% 0px",
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (emailTrigger) {
  emailTrigger.addEventListener("click", () => {
    const codePoints = [
      106, 105, 97, 119, 101, 105, 46, 121, 97, 110, 64, 100, 101, 115, 121,
      46, 100, 101,
    ];
    const email = String.fromCharCode(...codePoints);
    const subject = encodeURIComponent("Website contact");
    window.location.href = `mailto:${email}?subject=${subject}`;
  });
}

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeNav();
  }
});

applyTranslations(resolveInitialLanguage());
setHeaderState();
