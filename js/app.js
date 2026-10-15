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
    btn.setAttribute('title', 'Chuyển sang giao diện sáng');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('title', 'Chuyển sang giao diện tối');
  }
}

// 9 Screens Data Inventory
const screensData = {
  'SCR_01': {
    code: 'SCR_01',
    title: 'Đăng nhập (SSO Đại học FPT)',
    image: 'assets/figma/SCR_01_ Sign In (FPT SSO).png',
    purpose: 'Xác thực sinh viên bằng tài khoản trường (@fpt.edu.vn), khởi tạo vai trò và trạng thái đăng ký học kỳ.',
    flow: 'Điểm bắt đầu của mọi luồng (Đăng nhập & khởi tạo)',
    actions: [
      'Chọn nút "Tiếp tục với Google (@fpt.edu.vn)"',
      'Chuyển đến quy trình xác thực OAuth của trường',
      'Khởi tạo hồ sơ sinh viên, trạng thái học kỳ và nhãn kỹ năng'
    ],
    displayedContent: [
      'Logo EXEMatching và nhận diện thương hiệu FPT',
      'Phụ đề học kỳ: "Đăng ký đồ án tốt nghiệp kỳ Spring 2026"',
      'Nút đăng nhập Google SSO (cao tối thiểu 48dp, dễ nhận biết)',
      'Ghi chú giới hạn tên miền trường'
    ],
    decisions: 'Giới hạn tên miền để loại trừ tài khoản không thuộc FPT; nút cao 48dp giúp thao tác thuận tiện trên Android.'
  },
  'SCR_02': {
    code: 'SCR_02',
    title: 'Tổng quan / Trang chủ',
    image: 'assets/figma/SCR_02_ Dashboard.png',
    purpose: 'Tóm tắt thời hạn đăng ký, tình trạng lập nhóm và lối tắt để tìm nhóm.',
    flow: 'Điểm bắt đầu Luồng 1 (Tìm và tham gia nhóm)',
    actions: [
      'Chọn "Tìm nhóm còn chỗ" để bắt đầu tìm kiếm',
      'Xem đồng hồ đếm ngược đến hạn đăng ký',
      'Chuyển giữa các mục trên thanh điều hướng dưới'
    ],
    displayedContent: [
      'Biểu ngữ đếm ngược ("⏳ Còn 2 ngày 14 giờ")',
      'Thẻ trạng thái nhóm ("Chưa có nhóm" hoặc "Nhóm AI-04 - 3/5")',
      'Thẻ thao tác nhanh',
      'Danh sách mốc thời gian và quy định đăng ký'
    ],
    decisions: 'Thay thời điểm tĩnh bằng đồng hồ đếm ngược (Nguyên tắc #6: Nhận biết thay vì ghi nhớ).'
  },
  'SCR_03': {
    code: 'SCR_03',
    title: 'Danh sách nhóm đang tuyển',
    image: 'assets/figma/SCR_03_ Browse Groups.png',
    purpose: 'Tìm và lọc các nhóm đồ án đang tuyển thành viên, với chỉ báo số chỗ rõ ràng.',
    flow: 'Luồng 1: Tìm và tham gia nhóm đồ án',
    actions: [
      'Tìm theo tên nhóm hoặc từ khóa',
      'Lọc bằng thẻ ("Chỉ nhóm còn chỗ", "AI/ML", "Web")',
      'Chọn "Xem chi tiết và tham gia" trên thẻ nhóm'
    ],
    displayedContent: [
      'Thanh tìm kiếm phía trên và các thẻ bộ lọc',
      'Thẻ nhóm có 5 vị trí đại diện (3 đã có người, 2 nét đứt)',
      'Nhãn sức chứa ("3/5 vị trí đã có người - còn 2 chỗ")',
      'Nhãn kỹ năng có độ tương phản cao (#343A40 trên #E9ECEF, tỷ lệ 7,2:1)'
    ],
    decisions: 'Vòng tinh chỉnh Stitch 1 thay số 3/5 khó hiểu bằng vị trí avatar trực quan và nhãn tương phản cao (WCAG AAA).'
  },
  'SCR_04': {
    code: 'SCR_04',
    title: 'Chi tiết nhóm & ma trận kỹ năng',
    image: 'assets/figma/SCR_04_ Group Detail.png',
    purpose: 'Xem kỹ thành viên, kỹ năng nhóm đang cần và gửi yêu cầu tham gia.',
    flow: 'Luồng 1: Tìm và tham gia nhóm đồ án',
    actions: [
      'Xem thành viên hiện tại và vai trò chuyên môn',
      'Kiểm tra kỹ năng cần bổ sung (ví dụ: "Đang tìm: Backend")',
      'Chọn nút chính phía dưới "Gửi yêu cầu tham gia nhóm"'
    ],
    displayedContent: [
      'Tên nhóm và lĩnh vực đồ án',
      'Thẻ thành viên chi tiết (ảnh đại diện, tên, vai trò, kỹ năng)',
      'Vị trí trống kèm nhãn kỹ năng cần tìm',
      'Thanh cố định phía dưới với nút hành động dễ nhận biết'
    ],
    decisions: 'Thanh cố định có vùng chạm 48dp giúp thao tác bằng một tay thuận tiện trên Android.'
  },
  'SCR_05': {
    code: 'SCR_05',
    title: 'Nhóm của tôi (Không gian làm việc)',
    image: 'assets/figma/SCR_05_ My Group Hub.png',
    purpose: 'Không gian làm việc chính để theo dõi số thành viên, bầu trưởng nhóm, trao đổi và bắt đầu khóa danh sách.',
    flow: 'Điểm đến Luồng 1; trung tâm của Luồng 2 (Bầu trưởng nhóm) và Luồng 3 (Khóa danh sách)',
    actions: [
      'Chọn nút "Bầu trưởng nhóm" nếu cuộc bầu cử đang mở',
      'Chọn "Tiếp tục khóa nhóm" khi đã có ít nhất 4 thành viên và đã bầu trưởng nhóm',
      'Xem số thành viên hiện tại và nhãn vai trò'
    ],
    displayedContent: [
      'Tiêu đề trạng thái nhóm và thanh tiến độ (3/5 thành viên)',
      'Biểu ngữ nhắc bầu trưởng nhóm',
      'Thẻ thành viên có nhãn trưởng nhóm và thông tin liên hệ',
      'Các nút thao tác cố định (Rời nhóm / Khóa danh sách)'
    ],
    decisions: 'Thêm nhãn trạng thái và biểu ngữ nhắc cố định để làm rõ ai có quyền khóa danh sách.'
  },
  'SCR_06': {
    code: 'SCR_06',
    title: 'Bầu trưởng nhóm dân chủ',
    image: 'assets/figma/SCR_06_ Leader Voting.png',
    purpose: 'Bầu trưởng nhóm một cách dân chủ và minh bạch; trưởng nhóm là người duy nhất có quyền khóa danh sách.',
    flow: 'Luồng 2: Bầu trưởng nhóm',
    actions: [
      'Chọn thẻ ứng viên mong muốn',
      'Chọn nút "Gửi phiếu bầu"',
      'Chọn nút viền "Đổi phiếu" nếu cuộc bầu cử vẫn đang mở'
    ],
    displayedContent: [
      'Giải thích về cuộc bầu cử và nguyên tắc biểu quyết',
      'Thẻ ứng viên có thể chọn (cao 64dp, viền cam 2dp khi được chọn)',
      'Nhãn số phiếu theo thời gian thực ("Đã nhận 2 phiếu")',
      'Nút chính "Gửi phiếu bầu"'
    ],
    decisions: 'Vòng tinh chỉnh Stitch 3 thay nút radio 18dp bằng thẻ chọn cao 64dp để đáp ứng vùng chạm WCAG 2.5.5.'
  },
  'SCR_07': {
    code: 'SCR_07',
    title: 'Kiểm tra khóa nhóm & khắc phục lỗi',
    image: 'assets/figma/SCR_07_ Group Lock Review & Error Recovery.png',
    purpose: 'Danh sách kiểm tra cuối trước khi khóa, có trạng thái lỗi rõ ràng và cách khắc phục nếu nhóm chưa đủ 4 người.',
    flow: 'Luồng 3: Khóa danh sách nhóm (nhánh lỗi và khắc phục)',
    actions: [
      'Kiểm tra danh sách thành viên có đáp ứng quy định không',
      'Nếu dưới 4 người: Đọc giải thích lỗi và chọn "Mời từ danh sách chờ"',
      'Nếu có 4–5 người: Chọn "Khóa danh sách nhóm" và xác nhận trong hộp thoại'
    ],
    displayedContent: [
      'Biểu ngữ cảnh báo lỗi có độ tương phản cao (#BA1A1A trên #FDF2F2, 6,2:1)',
      'Vô hiệu hóa nút khóa (ngăn gửi danh sách không hợp lệ)',
      'Thẻ khắc phục tại chỗ: "Cần thêm 1 thành viên? Mời sinh viên chưa có nhóm"',
      'Hộp thoại xác nhận thao tác không thể hoàn tác cùng cảnh báo rõ ràng'
    ],
    decisions: 'Vòng tinh chỉnh Stitch 2 ngăn khóa danh sách 3 người không hợp lệ bằng cảnh báo lỗi và thao tác mời người từ danh sách chờ (Nguyên tắc #5 và #9).'
  },
  'SCR_08': {
    code: 'SCR_08',
    title: 'Trạng thái ghép nhóm tự động',
    image: 'assets/figma/SCR_08_ Random Pool Status.png',
    purpose: 'Thông báo cho sinh viên chưa có nhóm rằng hệ thống đang xử lý ghép nhóm tự động sau hạn đăng ký.',
    flow: 'Tình huống dự phòng sau hạn / sinh viên chưa có nhóm',
    actions: [
      'Kiểm tra thứ tự ưu tiên trong hàng chờ ghép nhóm',
      'Xem các nhãn kỹ năng ưu tiên đã đăng ký',
      'Liên hệ bộ phận hỗ trợ đào tạo của trường'
    ],
    displayedContent: [
      'Nhãn trạng thái: "Đã đóng đăng ký — Hệ thống đang ghép nhóm"',
      'Mã hàng chờ và thời điểm dự kiến được xếp nhóm',
      'Tóm tắt lựa chọn ưu tiên (Backend / Mobile / Web)',
      'Thông tin liên hệ hỗ trợ của khoa'
    ],
    decisions: 'Hiển thị trạng thái hệ thống (Nguyên tắc #1) giúp sinh viên an tâm khi chưa hoàn tất nhóm trước hạn.'
  },
  'SCR_09': {
    code: 'SCR_09',
    title: 'Thông báo & lời mời tham gia nhóm',
    image: 'assets/figma/SCR_09_ Notifications & Invites.png',
    purpose: 'Danh sách thông báo về lời mời tham gia nhóm, kết quả bầu trưởng nhóm và xác nhận khóa danh sách.',
    flow: 'Phản hồi và xử lý lời mời xuyên suốt các luồng',
    actions: [
      'Lọc thông báo theo "Tất cả", "Lời mời", "Hệ thống"',
      'Chọn "Chấp nhận" hoặc "Từ chối" lời mời đang chờ',
      'Chọn liên kết để mở trực tiếp mục Nhóm của tôi'
    ],
    displayedContent: [
      'Các thẻ lọc kèm số lượng thông báo',
      'Thẻ lời mời có nút thao tác kép (Chấp nhận / Từ chối)',
      'Thời gian và ảnh đại diện người gửi',
      'Hình minh họa trạng thái trống khi đã xử lý hết thông báo'
    ],
    decisions: 'Nút thao tác kép cao tối thiểu 48dp giúp hạn chế bấm nhầm và đẩy nhanh quá trình tham gia nhóm.'
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
        btn.innerHTML = `✓ Đã sao chép!`;
        btn.style.color = 'var(--color-success)';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 1800);
      }).catch(err => {
        console.error('Không sao chép được nội dung', err);
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
