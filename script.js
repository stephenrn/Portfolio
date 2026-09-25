(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isMobile = () => window.matchMedia('(max-width: 759px)').matches;

  const EMAIL = 'stephenrainevilleta16@gmail.com';
  const RESUME = 'StephenRaine_Villeta_Resume.pdf';

  /* ───────────── Data ───────────── */

  const PROJECTS = {
    procurement: {
      title: 'Procurement Workflow Optimization System',
      kicker: 'Undergraduate thesis',
      desc: 'Built for the Procurement Office of Manuel S. Enverga University Foundation. Requesters file PR/JO forms in one place, every signatory step is timed and flagged when it runs late, and a prioritization module picks which waiting requests to release when the budget can’t cover all of them.',
      stack: 'C# · .NET · SQL',
      link: {
        href: `mailto:${EMAIL}?subject=${encodeURIComponent('Demo request — Procurement Workflow Optimization System')}`,
        label: 'Request a demo',
      },
      shots: [
        'Sign in — one place to file, approve and track purchase requests',
        'Dashboard: what’s pending, approved and delayed',
        'New Pre-PR/JO — no downloading forms, no emailed spreadsheets',
        'Request details with the full approval timeline',
        'Reports: average days per step and delays by department',
        'Prioritization: which requests to release this cycle',
      ],
    },
    checkmateph: {
      title: 'CheckMatePH',
      kicker: 'Top 12 finalist · SiKAPTala 2026',
      desc: 'Built with team Debuggerinas for SiKAPTala 2026, the national CS & IT competition, where we finished as a Top 12 finalist. Every political post is fact-checked by AI before it goes live, with verified politician profiles, a promise-vs-action tracker and real-time debate rooms.',
      stack: 'Next.js · TypeScript · Supabase · OpenAI API',
      link: { href: 'https://github.com/jpmartirez/checkmateph', label: 'View on GitHub' },
      shots: [
        'Sign in — dedicated to civic integrity',
        'Feed of claims and opinions, with verified experts',
        'Create a claim and attach evidence',
        'Directory of government officials',
        'Verified sources for citations',
      ],
    },
    unloque: {
      title: 'Unloque',
      kicker: 'Welfare access & analytics',
      desc: 'A Flutter app for applying to DSWD, DOH and DOST programs in one place. A welfare distribution map of Quezon Province compares population with beneficiaries per municipality, and AI insights flag the areas that are underserved.',
      stack: 'Flutter · Firebase · Next.js',
      link: { href: 'https://github.com/stephenrn/Unloque', label: 'View on GitHub' },
      shots: [
        'Connecting communities to government services',
        '17.54 million Filipinos live in poverty (PSA, 2023)',
        'Education, social and healthcare programs in one app',
        'One dashboard for every application',
        'Visualize the gap, right on the map',
      ],
    },
    liwanag: {
      title: 'Liwanag',
      kicker: 'Open IT Bootcamp 2026 · Built in 17 hrs',
      desc: 'Log appliances and daily usage, record your bills and compare them with energy tariffs to estimate the next electricity bill before it arrives.',
      stack: 'React · ASP.NET Core · PostgreSQL · Docker',
      link: { href: 'https://github.com/p-ragudo/capstone_openit', label: 'View on GitHub' },
      shots: [
        'Dashboard: estimated consumption and top consumers',
        'Bill history, from bill tracking to bigger savings',
        'Tracked appliances and what each one costs',
        'Appliance energy calculator',
        'Add a bill manually or by scanning it',
      ],
    },
    yougyog: {
      title: 'Yougyog',
      kicker: 'Open IT Codefest 2025 · Built in 17 hrs',
      desc: 'Live Philippine earthquake alerts over WebSockets, personal magnitude thresholds, a distance-based risk assessment and a safety resources hub.',
      stack: 'React · Express · Socket.IO · USGS API',
      link: { href: 'https://github.com/Jedybox/OpenITCodeFest2025', label: 'View on GitHub' },
      shots: [
        'Real-time earthquake monitoring, built for accessibility',
        'Interactive dashboard with a live quake map',
        'Risk assessment using Haversine distances',
        'Personalized alerts for nearby events',
        'Safety resources hub and emergency contacts',
      ],
    },
  };

  const TONES = {
    lilac: ['#efe3fd', '#cbb0f3'],
    green: ['#e8f4d0', '#bfdc93'],
    blue: ['#e2eeff', '#b1ccf6'],
    peach: ['#ffe4d2', '#f6b087'],
    pink: ['#ffe4ef', '#f3afcb'],
    yellow: ['#fff4c6', '#f7d574'],
  };
  const TONE_CYCLE = ['green', 'pink', 'yellow', 'blue', 'peach', 'lilac'];

  const coursera = (id) => `https://coursera.org/verify/${id}`;
  const specialization = (id) => `https://coursera.org/verify/specialization/${id}`;
  const COURSE = 'Course certificate';
  const PROJECT = 'Guided project';

  const CERTS = [
    { id: '1783308469657', pin: 1, tone: 'lilac', group: 'cert', title: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft', type: 'Certification exam', date: '2026-07-06', verify: 'https://verify.certiport.com', code: 'nvzo-Dw8X' },
    { id: 'NGZLT0B6CH8W', pin: 2, tone: 'peach', group: 'cert', title: 'Software Engineering Specialization', issuer: 'HKUST via Coursera', type: 'Specialization · 3 courses', date: '2026-04-07', verify: specialization('NGZLT0B6CH8W') },
    { id: '5LYCA5S6B5GG', pin: 3, tone: 'blue', group: 'cert', title: 'Programming the Internet of Things (IoT) Specialization', issuer: 'UC Irvine via Coursera', type: 'Specialization · 6 courses', date: '2026-06-21', verify: specialization('5LYCA5S6B5GG') },

    { id: 'K4SESEB7VRV1', group: 'course', title: 'Automate Tasks and Processes with Jira', issuer: 'Coursera', type: PROJECT, date: '2026-09-21', verify: coursera('K4SESEB7VRV1') },
    { id: 'D05O04WT7HX0', group: 'course', title: 'Get Started with Jira', issuer: 'Coursera', type: PROJECT, date: '2026-09-15', verify: coursera('D05O04WT7HX0') },
    { id: 'FFVEF7N2YF99', group: 'course', title: 'Introduction to CRM with HubSpot', issuer: 'Coursera', type: PROJECT, date: '2026-09-15', verify: coursera('FFVEF7N2YF99') },
    { id: 'N8QAQM9X1U1B', group: 'course', title: 'Introduction to UX/UI Design', issuer: 'IBM via Coursera', type: COURSE, date: '2026-08-16', verify: coursera('N8QAQM9X1U1B') },
    { id: 'OBGLST77KP1B', group: 'course', title: 'The Raspberry Pi Platform and Python Programming for the Raspberry Pi', issuer: 'UC Irvine via Coursera', type: COURSE, date: '2026-06-21', verify: coursera('OBGLST77KP1B') },
    { id: 'QDR5NC5RK1MX', group: 'course', title: 'Programming for the Internet of Things Project', issuer: 'UC Irvine via Coursera', type: COURSE, date: '2026-06-20', verify: coursera('QDR5NC5RK1MX') },
    { id: 'CN4MTLYBDBER', group: 'course', title: 'Interfacing with the Raspberry Pi', issuer: 'UC Irvine via Coursera', type: COURSE, date: '2026-06-19', verify: coursera('CN4MTLYBDBER') },
    { id: '0P0RDTBHSH1X', group: 'course', title: 'Introduction to the Internet of Things and Embedded Systems', issuer: 'UC Irvine via Coursera', type: COURSE, date: '2026-06-18', verify: coursera('0P0RDTBHSH1X') },
    { id: '468HGRJ8KF9E', group: 'course', title: 'The Arduino Platform and C Programming', issuer: 'UC Irvine via Coursera', type: COURSE, date: '2026-06-18', verify: coursera('468HGRJ8KF9E') },
    { id: '7OXWSUUCVIGS', group: 'course', title: 'Interfacing with the Arduino', issuer: 'UC Irvine via Coursera', type: COURSE, date: '2026-06-18', verify: coursera('7OXWSUUCVIGS') },
    { id: '2WJK84LQH450', group: 'course', title: 'Software Testing, Deployment, and Maintenance Strategies', issuer: 'IBM via Coursera', type: COURSE, date: '2026-06-17', verify: coursera('2WJK84LQH450') },
    { id: '1790314164915', group: 'event', title: 'SiKAPTala 2026 Virtual Hackathon', issuer: 'DLSU-Dasmariñas CICS', type: 'Hackathon', date: '2026-05-31', note: 'National CS & IT competition, May 11–15, 2026. Team Debuggerinas built CheckMatePH here and finished as a Top 12 finalist.' },
    { id: '1790273254475', group: 'event', title: 'IT Certification Subsidy — Cyber-ssistance', issuer: 'MSEUF University Collegiate Student Council', type: 'Recognition', date: '2026-05-25', note: 'Recognized under the Cyber-ssistance EU project for dedication and growth in information and communications technology.' },
    { id: 'Z94YALFI9J9R', group: 'course', title: 'Programming Languages I', issuer: 'KAIST via Coursera', type: COURSE, date: '2026-05-01', verify: coursera('Z94YALFI9J9R') },
    { id: 'KEFO5SNLU2LZ', group: 'course', title: 'Software Engineering: Implementation and Testing', issuer: 'HKUST via Coursera', type: COURSE, date: '2026-04-07', verify: coursera('KEFO5SNLU2LZ') },
    { id: 'XXVY0AS1V1O0', group: 'course', title: 'Software Engineering: Software Design and Project Management', issuer: 'HKUST via Coursera', type: COURSE, date: '2026-04-07', verify: coursera('XXVY0AS1V1O0') },
    { id: 'PUFE1IEG5I6I', group: 'course', title: 'Machine Learning with Python', issuer: 'IBM via Coursera', type: COURSE, date: '2026-04-07', verify: coursera('PUFE1IEG5I6I') },
    { id: '8PUHF2JU1GL0', group: 'course', title: 'Software Engineering: Modeling Software Systems using UML', issuer: 'HKUST via Coursera', type: COURSE, date: '2026-02-24', verify: coursera('8PUHF2JU1GL0') },
    { id: '1790270321970', group: 'event', title: 'ASEAN Data Science Explorers 2026 — SAP Analytics Cloud Training', issuer: 'SAP & ASEAN Foundation', type: 'Enablement session', date: '2026-08' },
    { id: '1790273345955', group: 'event', title: 'Open iT Codefest 2025', issuer: 'OpenIT Philippines, Inc.', type: 'Hackathon', date: '2025-11-09', note: '“Next Level Code: Refining Good into Great”, November 8–9, 2025 in Lucena City. Yougyog was built here.' },
    { id: 'L63R23VV8RL0', group: 'course', title: 'System Validation: Automata and Behavioural Equivalences', issuer: '28DIGITAL via Coursera', type: COURSE, date: '2025-11-20', verify: coursera('L63R23VV8RL0') },
    { id: 'V1XDBAXOZL6U', group: 'course', title: 'Create the User Interface with SwiftUI', issuer: 'Meta via Coursera', type: COURSE, date: '2025-11-20', verify: coursera('V1XDBAXOZL6U') },
    { id: 'DTZX0JM7TT1B', group: 'course', title: 'Data Privacy and Protection Standards', issuer: 'Coursera', type: COURSE, date: '2025-10-27', verify: coursera('DTZX0JM7TT1B') },
    { id: 'PIA0YR8SK6S6', group: 'course', title: 'Ethics of Artificial Intelligence', issuer: 'Politecnico di Milano via Coursera', type: COURSE, date: '2025-09-30', verify: coursera('PIA0YR8SK6S6') },
    { id: '1790313950845', group: 'event', title: 'BPI DATA Wave 2025 — Human-Centered Market Research & Ideation', issuer: 'Eskwelabs', type: 'Learning sprint', date: '2025-07-11' },
    { id: '1790270657146', group: 'event', title: 'AppCon 2024 — Invitational App Development Contest', issuer: 'OTIS Japan Inc.', type: 'Participation', date: '2025-06-28', note: 'Team Techivision, developing an application with AI and IoT solutions for social issues in the Philippines.' },
    { id: 'YDU9K1Z5WI30', group: 'course', title: 'Dynamic Programming, Greedy Algorithms', issuer: 'University of Colorado Boulder via Coursera', type: COURSE, date: '2025-05-17', verify: coursera('YDU9K1Z5WI30') },
    { id: '4DL9WY4UTY2Y', group: 'course', title: 'Introduction to Structured Query Language (SQL)', issuer: 'University of Michigan via Coursera', type: COURSE, date: '2025-05-14', verify: coursera('4DL9WY4UTY2Y') },
    { id: '9XCHRDD34VTZ', group: 'course', title: 'z/Architecture Assembler Language Part 1: The Basics', issuer: 'IBM via Coursera', type: COURSE, date: '2025-04-30', verify: coursera('9XCHRDD34VTZ') },
    { id: 'STFK5KBUA5JJ', group: 'course', title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps', issuer: 'IBM via Coursera', type: COURSE, date: '2025-04-28', verify: coursera('STFK5KBUA5JJ') },
    { id: '1790270794010', group: 'event', title: 'Tech Nexus 2024: Empowering Campus Innovators', issuer: 'Campus DEVCON', type: 'Recognition', date: '2024-12-07', note: 'Campus DEVCON Summit 2024 at the University of Batangas – Lipa Campus.' },
  ];

  const monthFmt = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
  const longFmt = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  // Dates are YYYY-MM-DD, or YYYY-MM when the certificate only gives a month.
  const parseDate = (s) => new Date(`${s.length === 7 ? `${s}-01` : s}T00:00:00`);
  const shortDate = (s) => monthFmt.format(parseDate(s));
  const fullDate = (s) => (s.length === 7 ? monthFmt.format(parseDate(s)) : longFmt.format(parseDate(s)));

  /* ───────────── Helpers ───────────── */

  const toastEl = $('.toast');
  let toastTimer;
  const toast = (msg) => {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-show'), 2400);
  };

  const onVisible = (el, cb, options = {}) => {
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.disconnect();
          cb(entry.target);
        }
      });
    }, options);
    io.observe(el);
  };

  const setScrollbarWidth = () => root.style.setProperty('--sbw', `${window.innerWidth - root.clientWidth}px`);
  setScrollbarWidth();
  window.addEventListener('resize', setScrollbarWidth);

  /* ───────────── Split text into characters ───────────── */

  $$('[data-split]').forEach((el) => {
    const text = el.textContent.trim().replace(/\s+/g, ' ');
    let offset = 0;
    let prev = el.previousElementSibling;
    while (prev) {
      if (prev.hasAttribute('data-split')) offset += prev.querySelectorAll('.char').length;
      prev = prev.previousElementSibling;
    }
    el.textContent = '';
    let ci = offset;
    text.split(' ').forEach((word, wi) => {
      if (wi > 0) el.append(' ');
      const w = document.createElement('span');
      w.className = 'word';
      w.setAttribute('aria-hidden', 'true');
      for (const ch of word) {
        const c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        c.style.setProperty('--ci', ci++);
        w.append(c);
      }
      el.append(w);
    });
    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = text;
    el.append(sr);
  });

  /* ───────────── Reveal on scroll ───────────── */

  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        revealIO.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  $$('[data-reveal], [data-split]').forEach((el) => revealIO.observe(el));

  /* ───────────── Hero: intro, hello, parallax ───────────── */

  const helloPaths = $$('.hello-svg path');
  const drawHello = (delay = 0) => {
    helloPaths.forEach((path) => path.getAnimations().forEach((a) => a.cancel()));
    if (reduceMotion) {
      helloPaths.forEach((path) => (path.style.opacity = 1));
      return;
    }
    const durations = [720, 2300];
    let t = delay;
    helloPaths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len} ${len + 200}`;
      path.animate(
        [
          { strokeDashoffset: len, opacity: 0 },
          { strokeDashoffset: len * 0.995, opacity: 1, offset: 0.01 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        { duration: durations[i], delay: t, easing: 'cubic-bezier(.55,.08,.3,1)', fill: 'forwards' },
      );
      t += durations[i] * 0.82;
    });
  };

  const startIntro = () => {
    root.classList.add('is-loaded');
    drawHello(250);
  };
  const portraitImg = $('.portrait-img');
  Promise.race([portraitImg && portraitImg.decode ? portraitImg.decode().catch(() => {}) : Promise.resolve(), wait(1400)]).then(() =>
    requestAnimationFrame(startIntro),
  );

  const helloBtn = $('.hello-btn');
  if (helloBtn) helloBtn.addEventListener('click', () => drawHello(0));

  const stage = $('[data-hero]');
  $$('[data-depth]').forEach((el) => el.style.setProperty('--depth', el.dataset.depth));

  if (stage && finePointer && !reduceMotion) {
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    const tick = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      stage.style.setProperty('--mx', cx.toFixed(3));
      stage.style.setProperty('--my', cy.toFixed(3));
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    window.addEventListener(
      'pointermove',
      (e) => {
        if (window.scrollY > window.innerHeight * 1.2) return;
        tx = (e.clientX / window.innerWidth - 0.5) * 2;
        ty = (e.clientY / window.innerHeight - 0.5) * 2;
        if (!raf) raf = requestAnimationFrame(tick);
      },
      { passive: true },
    );
  }

  /* ───────────── Emoji bursts from stickers ───────────── */

  const burst = (x, y, emojis) => {
    if (reduceMotion) return;
    for (let i = 0; i < 16; i++) {
      const s = document.createElement('span');
      s.className = 'burst';
      s.textContent = emojis[i % emojis.length];
      document.body.append(s);
      const angle = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 120;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 50;
      const rot = (Math.random() - 0.5) * 160;
      const scale = 0.6 + Math.random() * 0.9;
      const anim = s.animate(
        [
          { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(0.2)`, opacity: 1 },
          { transform: `translate(${x + dx}px, ${y + dy}px) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`, opacity: 1, offset: 0.55 },
          { transform: `translate(${x + dx * 1.15}px, ${y + dy + 110}px) translate(-50%, -50%) rotate(${rot * 1.5}deg) scale(${scale * 0.7})`, opacity: 0 },
        ],
        { duration: 1100 + Math.random() * 600, easing: 'cubic-bezier(.2,.75,.3,1)' },
      );
      anim.onfinish = () => s.remove();
    }
  };

  $$('[data-burst]').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX || r.left + r.width / 2;
      const y = e.clientY || r.top + r.height / 2;
      burst(x, y, [...btn.dataset.burst]);
    }),
  );

  /* ───────────── Nav ───────────── */

  const navWrap = $('.nav-wrap');
  const navToggle = $('.nav-toggle');
  const navLinks = $$('.nav-link');
  const navBlob = $('.nav-blob');
  let activeLink = null;

  const setMenu = (open) => {
    navWrap.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };
  navToggle.addEventListener('click', () => setMenu(!navWrap.classList.contains('is-open')));
  $$('.nav-links a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (e) => {
    if (navWrap.classList.contains('is-open') && !navWrap.contains(e.target)) setMenu(false);
  });

  const moveBlob = (link) => {
    if (!navBlob) return;
    if (!link) {
      navBlob.style.opacity = '0';
      return;
    }
    navBlob.style.left = `${link.offsetLeft}px`;
    navBlob.style.width = `${link.offsetWidth}px`;
    navBlob.style.opacity = '1';
  };
  navLinks.forEach((link) => link.addEventListener('pointerenter', () => moveBlob(link)));
  $('.nav-links').addEventListener('pointerleave', () => moveBlob(activeLink));

  const sections = $$('main > .sheet');
  const sectionIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sections.forEach((s) => s.classList.toggle('is-active', s === entry.target));
        activeLink = navLinks.find((l) => l.dataset.nav === entry.target.id) || null;
        navLinks.forEach((l) => l.toggleAttribute('aria-current', l === activeLink));
        navLinks.forEach((l) => l === activeLink && l.setAttribute('aria-current', 'true'));
        moveBlob(activeLink);
      });
    },
    { rootMargin: '-45% 0px -54% 0px' },
  );
  sections.forEach((s) => sectionIO.observe(s));

  const heroIO = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio > 0.6) {
        activeLink = null;
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        sections.forEach((s) => s.classList.remove('is-active'));
        moveBlob(null);
      }
    },
    { threshold: [0.6] },
  );
  if (stage) heroIO.observe(stage);

  /* ───────────── Scroll-linked motion ───────────── */

  const scrollEls = $$('[data-scroll]');
  const inView = new Set();
  const scrollIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? inView.add(e.target) : inView.delete(e.target))),
    { rootMargin: '25% 0px' },
  );
  if (!reduceMotion) scrollEls.forEach((el) => scrollIO.observe(el));

  let scrollTicking = false;
  const onScrollFrame = () => {
    scrollTicking = false;
    navWrap.classList.toggle('is-scrolled', window.scrollY > 12);
    const vh = window.innerHeight;
    inView.forEach((el) => {
      const r = el.getBoundingClientRect();
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty('--p', clamp(p, -1.5, 1.5).toFixed(3));
    });
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(onScrollFrame);
      }
    },
    { passive: true },
  );
  onScrollFrame();

  /* ───────────── About: chat, cassette, keyboard ───────────── */

  const chat = $('[data-chat]');
  if (chat) {
    const items = Array.from(chat.children).filter((c) => !c.classList.contains('typing'));
    const typing = $('.typing', chat);
    if (reduceMotion) {
      items.forEach((c) => c.classList.add('is-shown'));
    } else {
      onVisible(
        chat,
        async () => {
          await wait(250);
          for (const item of items) {
            if (item.classList.contains('msg--me')) {
              typing.style.top = `${item.offsetTop}px`;
              typing.classList.add('is-on');
              await wait(850);
              typing.classList.remove('is-on');
              await wait(140);
            }
            item.classList.add('is-shown');
            await wait(item.classList.contains('msg--them') ? 650 : 360);
          }
        },
        { threshold: 0.45 },
      );
    }
  }

  const cassette = $('.cassette');
  if (cassette && !reduceMotion) {
    const spins = $$('.cassette-spokes, .cassette-reel', cassette).map((el) =>
      el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 3800, iterations: Infinity }),
    );
    const setRate = (rate) => spins.forEach((a) => (a.updatePlaybackRate ? a.updatePlaybackRate(rate) : (a.playbackRate = rate)));
    cassette.addEventListener('pointerenter', () => setRate(5));
    cassette.addEventListener('pointerleave', () => setRate(1));
    cassette.addEventListener('focus', () => setRate(5));
    cassette.addEventListener('blur', () => setRate(1));
    cassette.addEventListener('click', () => {
      setRate(-12);
      setTimeout(() => setRate(cassette.matches(':hover') ? 5 : 1), 700);
    });
  }

  const board = $('[data-keys]');
  if (board) {
    const keys = $$('.key', board);
    const press = (key, hold = 150, lit = false) => {
      key.classList.add('is-pressed');
      if (lit) key.classList.add('is-lit');
      setTimeout(() => key.classList.remove('is-pressed'), hold);
      if (lit) setTimeout(() => key.classList.remove('is-lit'), 900);
    };
    if (!reduceMotion) {
      onVisible(board, () => keys.forEach((key, i) => setTimeout(() => press(key, 170), 200 + i * 38)), { threshold: 0.5 });
    }
    keys.forEach((key) => key.addEventListener('pointerdown', () => press(key, 220, true)));

    let boardVisible = false;
    new IntersectionObserver(([e]) => (boardVisible = e.isIntersecting), { threshold: 0.3 }).observe(board);
    document.addEventListener('keydown', (e) => {
      if (!boardVisible || e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
      if (/^(input|textarea|select)$/i.test(e.target.tagName)) return;
      const ch = e.key.toLowerCase();
      keys.filter((k) => k.textContent.trim().toLowerCase().startsWith(ch)).forEach((k) => press(k, 160, true));
    });
  }

  /* ───────────── Projects: tilt, parallax, gallery ───────────── */

  $$('[data-project]').forEach((card) => {
    if (finePointer && !reduceMotion) {
      const amp = () => (card.offsetWidth > 900 ? 1.6 : 3.2);
      card.addEventListener('pointerenter', () => card.classList.add('is-hover'));
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--ry', `${(x * amp()).toFixed(2)}deg`);
        card.style.setProperty('--rx', `${(-y * amp()).toFixed(2)}deg`);
        card.style.setProperty('--mx', (x * 2).toFixed(3));
        card.style.setProperty('--my', (y * 2).toFixed(3));
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-hover');
        ['--rx', '--ry', '--mx', '--my'].forEach((p) => card.style.removeProperty(p));
      });
    }
    const open = $('.project-open', card);
    if (open) open.addEventListener('click', () => openProject(card.dataset.project, 0));
  });

  /* ───────────── Lightbox ───────────── */

  const lb = $('#lightbox');
  const lbImg = $('.lb-img', lb);
  const lbPrev = $('.lb-nav--prev', lb);
  const lbNext = $('.lb-nav--next', lb);
  const lbParts = {
    kicker: $('.lb-kicker', lb),
    title: $('.lb-title', lb),
    caption: $('.lb-caption', lb),
    desc: $('.lb-desc', lb),
    meta: $('.lb-meta', lb),
    actions: $('.lb-actions', lb),
    thumbs: $('.lb-thumbs', lb),
    count: $('.lb-count', lb),
  };
  const state = { items: [], index: 0, render: null, lastFocus: null, closeTimer: 0 };

  const makeBtn = (href, label, { primary = false, external = true, icon = 'arrow' } = {}) => {
    const a = document.createElement('a');
    a.className = primary ? 'btn btn--primary' : 'btn';
    a.href = href;
    if (external && /^https?:/.test(href)) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
    a.textContent = label;
    a.insertAdjacentHTML(
      'beforeend',
      icon === 'arrow'
        ? '<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" /></svg>'
        : '<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v9m0 0 3.5-3.5M8 11 4.5 7.5M3 14h10" /></svg>',
    );
    return a;
  };

  const setMeta = (pairs) => {
    lbParts.meta.textContent = '';
    pairs.filter(([, v]) => v).forEach(([k, v]) => {
      const dt = document.createElement('dt');
      dt.textContent = k;
      const dd = document.createElement('dd');
      dd.textContent = v;
      lbParts.meta.append(dt, dd);
    });
  };

  const showItem = (index) => {
    const { items } = state;
    state.index = (index + items.length) % items.length;
    const item = items[state.index];
    lbImg.classList.add('is-swapping');
    const next = new Image();
    next.src = item.src;
    const swap = () => {
      lbImg.src = item.src;
      lbImg.alt = item.alt || '';
      requestAnimationFrame(() => lbImg.classList.remove('is-swapping'));
    };
    if (next.complete) swap();
    else {
      next.onload = swap;
      next.onerror = swap;
    }
    [items[state.index + 1], items[state.index - 1]].forEach((n) => n && (new Image().src = n.src));
    state.render(item, state.index, items);
    lbParts.count.textContent = `${String(state.index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    const single = items.length < 2;
    lbPrev.hidden = single;
    lbNext.hidden = single;
    $$('.lb-thumb', lb).forEach((t, i) => t.setAttribute('aria-current', String(i === state.index)));
  };

  const openLightbox = (items, index, render, thumbs = false) => {
    clearTimeout(state.closeTimer);
    state.items = items;
    state.render = render;
    state.lastFocus = document.activeElement;
    lbParts.thumbs.textContent = '';
    if (thumbs) {
      items.forEach((item, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'lb-thumb';
        b.setAttribute('aria-label', `Show screen ${i + 1}`);
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = '';
        img.loading = 'lazy';
        b.append(img);
        b.addEventListener('click', () => showItem(i));
        lbParts.thumbs.append(b);
      });
    }
    showItem(index);
    lb.hidden = false;
    root.style.overflow = 'hidden';
    requestAnimationFrame(() => requestAnimationFrame(() => lb.classList.add('is-open')));
    $('.lb-close', lb).focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    if (lb.hidden) return;
    lb.classList.remove('is-open');
    root.style.overflow = '';
    state.closeTimer = setTimeout(() => {
      lb.hidden = true;
      lbImg.removeAttribute('src');
    }, reduceMotion ? 0 : 420);
    if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus({ preventScroll: true });
  };

  $$('[data-lb-close]', lb).forEach((el) => el.addEventListener('click', closeLightbox));
  lbPrev.addEventListener('click', () => showItem(state.index - 1));
  lbNext.addEventListener('click', () => showItem(state.index + 1));
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) {
      if (e.key === 'Escape') setMenu(false);
      return;
    }
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showItem(state.index + 1);
    else if (e.key === 'ArrowLeft') showItem(state.index - 1);
    else if (e.key === 'Tab') {
      const focusables = $$('button:not([hidden]), a[href]', $('.lb-panel', lb)).filter((el) => el.offsetParent !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  let swipeX = null;
  const lbStage = $('.lb-stage', lb);
  lbStage.addEventListener('pointerdown', (e) => (swipeX = e.clientX));
  lbStage.addEventListener('pointerup', (e) => {
    if (swipeX === null) return;
    const dx = e.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) > 50) showItem(state.index + (dx < 0 ? 1 : -1));
  });

  function openProject(slug, index) {
    const project = PROJECTS[slug];
    if (!project) return;
    const items = project.shots.map((caption, i) => ({
      src: `images/projects/${slug}/${i + 1}.webp`,
      alt: `${project.title} — ${caption}`,
      caption,
    }));
    openLightbox(
      items,
      index,
      (item) => {
        lbParts.kicker.textContent = project.kicker;
        lbParts.title.textContent = project.title;
        lbParts.caption.textContent = item.caption;
        lbParts.desc.textContent = project.desc;
        setMeta([['Built with', project.stack]]);
        lbParts.actions.textContent = '';
        lbParts.actions.append(makeBtn(project.link.href, project.link.label, { primary: true }));
      },
      true,
    );
  }

  /* ───────────── Credential passes ───────────── */

  const grid = $('[data-pass-grid]');
  const passes = $('[data-passes]');
  const certs = CERTS.map((c, i) => ({ ...c, order: i })).sort((a, b) => {
    if (a.pin || b.pin) return (a.pin || 99) - (b.pin || 99);
    return b.date.localeCompare(a.date) || a.order - b.order;
  });

  if (grid) {
    let toneIndex = 0;
    const html = certs
      .map((c) => {
        const tone = TONES[c.tone || TONE_CYCLE[toneIndex++ % TONE_CYCLE.length]];
        const cta = c.verify ? 'View credential' : 'View certificate';
        const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
        return `<li class="pass" data-group="${c.group}" style="--a:${tone[0]};--b:${tone[1]}">
  <button class="pass-card" type="button" data-cert="${c.id}" aria-label="${esc(c.title)} — ${esc(c.issuer)}, ${shortDate(c.date)}. Open certificate">
    <span class="pass-head">
      <span class="pass-title">${esc(c.title)}</span>
      <span class="pass-date"><span class="pass-label">Issued</span><span class="pass-value">${shortDate(c.date)}</span></span>
    </span>
    <span class="pass-divider"></span>
    <span class="pass-body">
      <span class="pass-details">
        <span><span class="pass-label">Issued by</span><span class="pass-value">${esc(c.issuer)}</span></span>
        <span><span class="pass-label">Type</span><span class="pass-value">${esc(c.type)}</span></span>
        <span class="pass-cta">${cta}</span>
      </span>
      <img class="pass-thumb-img" src="images/certs/thumb/${c.id}.webp" alt="" width="560" height="433" loading="lazy" decoding="async" />
    </span>
  </button>
</li>`;
      })
      .join('');
    grid.innerHTML = html;

    const counts = certs.reduce((acc, c) => ((acc[c.group] = (acc[c.group] || 0) + 1), acc), { all: certs.length });
    $$('[data-count]').forEach((el) => (el.textContent = counts[el.dataset.count] || 0));

    const status = document.createElement('p');
    status.className = 'sr-only';
    status.setAttribute('role', 'status');
    passes.append(status);

    const more = document.createElement('div');
    more.className = 'pass-more';
    more.innerHTML = '<button class="btn" type="button"></button>';
    $('.pass-scroller', passes).after(more);
    const moreBtn = $('button', more);

    const items = $$('.pass', grid);
    let filter = 'all';
    const visibleItems = () => items.filter((li) => !li.hidden);

    const enter = () => {
      if (reduceMotion) return;
      visibleItems().forEach((li, i) => {
        li.classList.remove('is-enter');
        li.style.setProperty('--i', i);
      });
      void grid.offsetWidth;
      visibleItems().forEach((li) => li.classList.add('is-enter'));
    };

    const updateMore = () => {
      const n = visibleItems().length;
      more.hidden = n <= 6 || grid.classList.contains('is-expanded');
      moreBtn.textContent = `Show all ${n}`;
    };

    const applyFilter = (next) => {
      filter = next;
      items.forEach((li) => (li.hidden = filter !== 'all' && li.dataset.group !== filter));
      $$('.pass-filter', passes).forEach((b) => {
        const on = b.dataset.filter === filter;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      grid.classList.remove('is-expanded');
      grid.scrollTop = 0;
      status.textContent = `Showing ${visibleItems().length} credentials`;
      updateMore();
      enter();
      syncThumb();
    };

    $$('.pass-filter', passes).forEach((b) => b.addEventListener('click', () => applyFilter(b.dataset.filter)));
    moreBtn.addEventListener('click', () => {
      grid.classList.add('is-expanded');
      updateMore();
    });

    onVisible(passes, enter, { threshold: 0.15 });

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-cert]');
      if (!card) return;
      const list = visibleItems().map((li) => certs.find((c) => c.id === $('[data-cert]', li).dataset.cert));
      const start = list.findIndex((c) => c.id === card.dataset.cert);
      openLightbox(
        list.map((c) => ({ src: `images/certs/${c.id}.webp`, alt: `${c.title} certificate`, cert: c })),
        start,
        ({ cert: c }) => {
          lbParts.kicker.textContent = c.type;
          lbParts.title.textContent = c.title;
          lbParts.caption.textContent = '';
          lbParts.desc.textContent = c.note || '';
          const credential = c.code ? `${c.code} (Certiport)` : c.verify ? c.id : '';
          setMeta([
            ['Issued by', c.issuer],
            ['Issued', fullDate(c.date)],
            ['Credential', credential],
          ]);
          lbParts.actions.textContent = '';
          if (c.verify) lbParts.actions.append(makeBtn(c.verify, 'Verify credential', { primary: true }));
          lbParts.actions.append(makeBtn(`images/certs/${c.id}.webp`, 'Open image', { primary: !c.verify }));
          const openImg = lbParts.actions.lastElementChild;
          openImg.target = '_blank';
          openImg.rel = 'noopener';
        },
      );
    });

    /* custom scrollbar (matches the Figma track + thumb) */
    const track = $('.pass-track', passes);
    const thumb = $('.pass-thumb', passes);
    function syncThumb() {
      if (!track || track.offsetParent === null) return;
      const { scrollHeight: sh, clientHeight: ch, scrollTop: st } = grid;
      const th = track.clientHeight;
      const size = Math.max(40, (ch / sh) * th);
      thumb.style.height = `${size}px`;
      thumb.style.transform = `translateY(${sh > ch ? (st / (sh - ch)) * (th - size) : 0}px)`;
      track.style.visibility = sh > ch + 2 ? 'visible' : 'hidden';
    }
    grid.addEventListener('scroll', syncThumb, { passive: true });
    window.addEventListener('resize', syncThumb);
    new ResizeObserver(syncThumb).observe(grid);

    let drag = null;
    thumb.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      thumb.setPointerCapture(e.pointerId);
      track.classList.add('is-dragging');
      drag = { y: e.clientY, top: grid.scrollTop };
    });
    thumb.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const ratio = (grid.scrollHeight - grid.clientHeight) / (track.clientHeight - thumb.offsetHeight);
      grid.scrollTop = drag.top + (e.clientY - drag.y) * ratio;
    });
    const endDrag = () => {
      drag = null;
      track.classList.remove('is-dragging');
    };
    thumb.addEventListener('pointerup', endDrag);
    thumb.addEventListener('pointercancel', endDrag);
    track.addEventListener('click', (e) => {
      if (e.target === thumb) return;
      const r = thumb.getBoundingClientRect();
      grid.scrollBy({ top: (e.clientY < r.top ? -1 : 1) * grid.clientHeight * 0.85, behavior: 'smooth' });
    });

    applyFilter('all');
  }

  /* ───────────── Contact: magnetic, email copy, résumé ───────────── */

  if (finePointer && !reduceMotion) {
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--tx', `${((e.clientX - (r.left + r.width / 2)) * 0.16).toFixed(1)}px`);
        el.style.setProperty('--ty', `${((e.clientY - (r.top + r.height / 2)) * 0.3).toFixed(1)}px`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.removeProperty('--tx');
        el.style.removeProperty('--ty');
      });
    });
  }

  $$('[data-copy]').forEach((a) =>
    a.addEventListener('click', () => {
      if (!navigator.clipboard) return;
      navigator.clipboard
        .writeText(a.dataset.copy)
        .then(() => toast('Email copied to clipboard ✓'))
        .catch(() => {});
    }),
  );

  if (/^https?:$/.test(window.location.protocol)) {
    fetch(RESUME, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) throw new Error('missing');
      })
      .catch(() => {
        $$('[data-resume]').forEach((a) => {
          a.removeAttribute('download');
          a.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Résumé request')}`;
          a.addEventListener('click', () => toast('Résumé on request — opening an email draft'));
        });
      });
  }

  /* ───────────── Calendar: this week, today circled ───────────── */

  const cal = $('[data-calendar]');
  if (cal) {
    const days = $$('.cal-day', cal);
    const mark = $('.cal-mark', cal);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayIndex = (today.getDay() + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - todayIndex);
    const longDay = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const shortDay = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    days.forEach((a, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      $('span', a).textContent = d.getDate();
      a.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Let’s talk — ${shortDay.format(d)}`)}`;
      a.setAttribute('aria-label', `${longDay.format(d)}${i === todayIndex ? ' (today)' : ''} — email Stephen to set up a chat`);
      a.classList.toggle('is-today', i === todayIndex);
      a.classList.remove('is-picked');
    });

    let current = -1;
    const moveMark = (i, draw = true) => {
      if (i === current) return;
      current = i;
      mark.style.setProperty('--c', i);
      mark.classList.toggle('is-flip', i >= 6 || (isMobile() && i >= 5));
      if (draw && !reduceMotion) {
        mark.classList.remove('is-drawing');
        void mark.offsetWidth;
        mark.classList.add('is-drawing');
      }
    };
    moveMark(todayIndex, false);
    onVisible(cal, () => {
      current = -1;
      moveMark(todayIndex);
    }, { threshold: 0.4 });

    days.forEach((a, i) => {
      a.addEventListener('pointerenter', () => moveMark(i));
      a.addEventListener('focus', () => moveMark(i));
    });
    $('.cal-days', cal).addEventListener('pointerleave', () => moveMark(todayIndex));
  }
})();
