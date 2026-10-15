/**
 * EXEMatching Showcase - PRM323 Lab 2
 * Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScreenSelector();
  initFlowTabs();
  initLightbox();
  initCopyButtons();
  initCritiqueFilters();
  initNavScrollHighlight();
});

// Theme Management
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute('title', 'Switch to Light Mode');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('title', 'Switch to Dark Mode');
  }
}

// 9 Screens Data Inventory
const screensData = {
  'SCR_01': {
    code: 'SCR_01',
    title: 'Sign In (FPT University SSO)',
    image: 'assets/figma/SCR_01_ Sign In (FPT SSO).png',
    purpose: 'Authenticate students using institutional credentials (@fpt.edu.vn) and initialize their role and semester registration status.',
    flow: 'Entry point for all flows (Auth & Onboarding)',
    actions: [
      'Tap "Continue with Google (@fpt.edu.vn)" button',
      'Redirect to OAuth institutional authentication flow',
      'Initialize student profile, semester status, and skill tags'
    ],
    displayedContent: [
      'FPT EXEMatching logo & branding header',
      'Semester subtitle: "Spring 2026 Capstone Registration"',
      'Google SSO Button (min-height 48dp, high affordance)',
      'Institutional domain restriction note'
    ],
    decisions: 'Restricted domain to eliminate non-FPT accounts; clear 48dp button ensures single-tap success on Android.'
  },
  'SCR_02': {
    code: 'SCR_02',
    title: 'Dashboard / Home Hub',
    image: 'assets/figma/SCR_02_ Dashboard.png',
    purpose: 'High-level executive summary of registration deadlines, team formation status, and rapid discovery access.',
    flow: 'Start point for Flow 1 (Discover & Join)',
    actions: [
      'Tap "Browse Available Teams" to enter discovery',
      'Inspect relative urgency countdown to deadline',
      'Switch persistent bottom navigation tabs'
    ],
    displayedContent: [
      'Dynamic countdown banner ("⏳ 2 Days 14 Hours Left")',
      'Current Team Status card ("Not in a Team" or "Team AI-04 - 3/5")',
      'Quick action CTA cards',
      'Registration milestones & guidelines checklist'
    ],
    decisions: 'Replaced static raw timestamp with relative countdown (Heuristic #6: Recognition over Recall).'
  },
  'SCR_03': {
    code: 'SCR_03',
    title: 'Browse Groups List',
    image: 'assets/figma/SCR_03_ Browse Groups.png',
    purpose: 'Discover and filter active Capstone groups actively seeking student roles with clear capacity indicators.',
    flow: 'Flow 1: Discover & Join Capstone Group',
    actions: [
      'Search by team name or keyword',
      'Filter with horizontal chips ("Open Slots Only", "AI/ML", "Web")',
      'Tap "View Details & Join" on any team card'
    ],
    displayedContent: [
      'Top search bar + Filter chips',
      'Group cards with explicit 5-avatar slot row (3 filled, 2 dashed)',
      'Capacity badge ("3/5 Slots Filled - 2 Open")',
      'High-contrast tech tag badges (#343A40 on #E9ECEF, 7.2:1 contrast)'
    ],
    decisions: 'Stitch Iteration 1 transformed ambiguous 3/5 text into visual avatar slots and high-contrast badges (WCAG AAA).'
  },
  'SCR_04': {
    code: 'SCR_04',
    title: 'Group Detail & Skill Matrix',
    image: 'assets/figma/SCR_04_ Group Detail.png',
    purpose: 'Deep inspection of a specific group\'s members, desired skill gaps, and submission of join request.',
    flow: 'Flow 1: Discover & Join Capstone Group',
    actions: [
      'Review existing members and technical roles',
      'Inspect open slot skill criteria (e.g., "Looking for: Backend")',
      'Tap primary bottom CTA "Request to Join Team"'
    ],
    displayedContent: [
      'Team title & Capstone project domain',
      'Detailed member cards (avatar, name, role, skills)',
      'Open slot placeholders with target tech tags',
      'Fixed bottom bar with high-affordance CTA'
    ],
    decisions: 'Fixed bottom bar with 48dp touch target ensures effortless one-handed thumb interaction on Android baseline.'
  },
  'SCR_05': {
    code: 'SCR_05',
    title: 'My Group Hub (Workspace)',
    image: 'assets/figma/SCR_05_ My Group Hub.png',
    purpose: 'Core team workspace to monitor roster capacity, elect leadership, communicate, and initiate roster locking.',
    flow: 'Hub for Flow 1 (End), Flow 2 (Leader Voting), Flow 3 (Lock Roster)',
    actions: [
      'Tap "Vote for Leader" banner button (if election open)',
      'Tap "Proceed to Lock Team" (once 4+ members & leader elected)',
      'Inspect real-time member count and role badges'
    ],
    displayedContent: [
      'Team status header & progress bar (3/5 members)',
      'Leadership alert banner with voting trigger',
      'Member cards with Leader crown badge and contact pills',
      'Persistent action buttons (Leave Group / Lock Roster)'
    ],
    decisions: 'Added prominent status pill and persistent alert banner to prevent ambiguity around who can lock the roster.'
  },
  'SCR_06': {
    code: 'SCR_06',
    title: 'Leader Democratic Voting',
    image: 'assets/figma/SCR_06_ Leader Voting.png',
    purpose: 'Democratic, transparent election of the Team Leader who holds the sole authority to officially lock the team roster.',
    flow: 'Flow 2: Team Leader Voting',
    actions: [
      'Select preferred candidate card',
      'Tap "Submit My Vote" button',
      'Tap "Change Vote" outlined button if election window remains open'
    ],
    displayedContent: [
      'Election explanation & governance guidelines',
      'Selectable candidate cards (64dp height, 2dp orange border when selected)',
      'Real-time vote tally pill ("2 votes received")',
      'Primary CTA "Submit My Vote"'
    ],
    decisions: 'Stitch Iteration 3 replaced small 18dp radio buttons with 64dp selectable cards for WCAG 2.5.5 touch target compliance.'
  },
  'SCR_07': {
    code: 'SCR_07',
    title: 'Lock Review & Error Recovery',
    image: 'assets/figma/SCR_07_ Group Lock Review & Error Recovery.png',
    purpose: 'Final validation checklist before locking, with explicit error state and 1-tap recovery if team has under 4 members.',
    flow: 'Flow 3: Group Roster Lock (Error & Recovery Path)',
    actions: [
      'Review team compliance checklist',
      'If <4 members: View error explanation & tap "Invite from Pool" recovery',
      'If 4–5 members: Tap "Lock Team Roster" and confirm destructive modal'
    ],
    displayedContent: [
      'High-contrast Error Alert Banner (#BA1A1A on #FDF2F2, 6.2:1)',
      'Disabled lock button (preventing illegal submission)',
      'Inline Recovery Card: "Need 1 more member? Invite unassigned peers"',
      'Destructive confirmation dialog with bold warning copy'
    ],
    decisions: 'Stitch Iteration 2 prevented illegal 3-member roster lock by adding explicit error banner and pool recovery action (Heuristics #5 & #9).'
  },
  'SCR_08': {
    code: 'SCR_08',
    title: 'Random Pool Matching Status',
    image: 'assets/figma/SCR_08_ Random Pool Status.png',
    purpose: 'Reassure unassigned students post-deadline that the automated registrar matching algorithm is actively pairing them.',
    flow: 'Post-deadline fallback / Unassigned student edge case',
    actions: [
      'Inspect matching queue priority number',
      'Verify registered skill preference tags',
      'Access university registrar support hotline'
    ],
    displayedContent: [
      'Status badge: "Registration Closed — Algorithm Running"',
      'Queue ID & estimated placement timestamp',
      'Preference summary (Backend / Mobile / Web)',
      'Academic department contact support information'
    ],
    decisions: 'Visibility of System Status (Heuristic #1) relieves anxiety for students who did not finalize a team before deadline.'
  },
  'SCR_09': {
    code: 'SCR_09',
    title: 'Notifications & Team Invites',
    image: 'assets/figma/SCR_09_ Notifications & Invites.png',
    purpose: 'Transactional feed for team invites, leadership election results, and roster lock confirmations.',
    flow: 'Cross-flow feedback & invitation resolution',
    actions: [
      'Filter notifications by "All", "Invites", "System"',
      'Tap "Accept" or "Decline" on pending invitations',
      'Tap to deep-link directly into Group Hub'
    ],
    displayedContent: [
      'Filter tabs with count badges',
      'Interactive invitation cards with Dual-Action buttons (Accept / Decline)',
      'Timestamps and sender student avatars',
      'Empty state illustration when all alerts cleared'
    ],
    decisions: 'Dual-action buttons with 48dp minimum height eliminate mistaps and speed up student team joining.'
  }
};

// Interactive Phone Mockup & Screen Details Switcher
function initScreenSelector() {
  const phoneScreenImg = document.getElementById('phoneScreenImg');
  const screenCodeTag = document.getElementById('screenCodeTag');
  const screenFullTitle = document.getElementById('screenFullTitle');
  const screenPurpose = document.getElementById('screenPurpose');
  const screenFlow = document.getElementById('screenFlow');
  const screenActionsList = document.getElementById('screenActionsList');
  const screenContentList = document.getElementById('screenContentList');
  const screenDecisions = document.getElementById('screenDecisions');
  const screenPills = document.querySelectorAll('.screen-select-btn');

  function updateActiveScreen(screenKey) {
    const data = screensData[screenKey];
    if (!data) return;

    // Update phone screen with smooth fade
    if (phoneScreenImg) {
      phoneScreenImg.style.opacity = '0.3';
      setTimeout(() => {
        phoneScreenImg.src = data.image;
        const scroller = document.getElementById('phoneScreenScroll');
        if (scroller) scroller.scrollTop = 0;
        phoneScreenImg.alt = data.title;
        phoneScreenImg.style.opacity = '1';
      }, 150);
    }

    // Update text content
    if (screenCodeTag) screenCodeTag.textContent = data.code;
    if (screenFullTitle) screenFullTitle.textContent = data.title;
    if (screenPurpose) screenPurpose.textContent = data.purpose;
    if (screenFlow) screenFlow.textContent = data.flow;
    if (screenDecisions) screenDecisions.textContent = data.decisions;

    // Update lists
    if (screenActionsList) {
      screenActionsList.innerHTML = data.actions.map(act => `<li>${act}</li>`).join('');
    }
    if (screenContentList) {
      screenContentList.innerHTML = data.displayedContent.map(c => `<li>${c}</li>`).join('');
    }

    // Update button states
    screenPills.forEach(btn => {
      if (btn.dataset.screen === screenKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  screenPills.forEach(btn => {
    btn.addEventListener('click', () => {
      const screenKey = btn.dataset.screen;
      updateActiveScreen(screenKey);
    });
  });

  // Attach click listener to mockup grid cards
  const gridCards = document.querySelectorAll('.mockup-grid-card');
  gridCards.forEach(card => {
    card.addEventListener('click', () => {
      const screenKey = card.dataset.screen;
      updateActiveScreen(screenKey);
      const simulator = document.getElementById('screen-simulator');
      if (simulator) {
        simulator.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Flow Tabs Switcher
function initFlowTabs() {
  const flowTabs = document.querySelectorAll('.flow-tab-btn');
  const flowPanels = document.querySelectorAll('.flow-panel');

  flowTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.flowTarget;
      
      flowTabs.forEach(t => t.classList.remove('active'));
      flowPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Lightbox Modal for Full-Resolution Preview
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg) return;

  function openLightbox(src, captionText) {
    lightboxImg.src = src;
    lightboxCaption.textContent = captionText || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Trigger on click for all zoomable images
  document.querySelectorAll('.zoomable-img, .diff-img-wrapper img').forEach(img => {
    img.addEventListener('click', (e) => {
      const src = img.getAttribute('src');
      const caption = img.getAttribute('alt') || img.closest('.diff-image-box')?.querySelector('.diff-image-label')?.innerText;
      openLightbox(src, caption);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// Copy to Clipboard Buttons
function initCopyButtons() {
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copyText || btn.previousElementSibling?.textContent;
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `✓ Copied!`;
        btn.style.color = 'var(--color-success)';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 1800);
      }).catch(err => {
        console.error('Copy failed', err);
      });
    });
  });
}

// Heuristic Critique Filters
function initCritiqueFilters() {
  const filterBtns = document.querySelectorAll('.critique-filter-btn');
  const tableRows = document.querySelectorAll('.critique-row');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tableRows.forEach(row => {
        if (filter === 'all' || row.dataset.severity === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}

// Navigation Scroll Spy
function initNavScrollHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
