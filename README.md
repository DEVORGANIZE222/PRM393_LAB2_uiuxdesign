# EXEMatching (Capstone Team Formation App)
**PRM323 — Lab 2: AI-Assisted UI/UX Design (Google Stitch → Figma)**

- **Group Name:** Group8
- **Class:** SE1920
- **Figma File (Public View Link):** `https://www.figma.com/design/Z42q9LamOZojK54FSBDcCd/PRM_LAB2?node-id=1-6&t=BbIncMZGSu1fgmSM-1`
- **Google Stitch Project Link:** `https://stitch.withgoogle.com/projects/4915176011526231419`
- **Interactive Web Showcase (Dành cho Giảng Viên):** Mở trực tiếp file [`index.html`](./index.html) trên trình duyệt hoặc chạy `python -m http.server 8080` rồi truy cập `http://localhost:8080`.

---

## 🌟 Visual UI/UX Case Study Showcase Web App
Để giảng viên có thể xem trực quan toàn bộ đồ án thay vì chỉ đọc tài liệu văn bản, dự án đã xây dựng sẵn một trang web Interactive Showcase hoàn chỉnh:
- **Truy cập nhanh:** Mở file [`index.html`](./index.html) bằng Chrome / Edge / Firefox.
- **Tính năng trực quan trên Web:**
  1. **Interactive Persona Profile:** Ba proto-persona với đủ 12 trường, bản đồ người dùng, cụm giả định, ma trận bao phủ, backlog nghiên cứu và truy vết persona → UI → test; trạng thái chưa xác thực được ghi rõ.
  2. **Information Architecture & Interactive User Flows:** Sơ đồ phân cấp màn hình và 3 luồng người dùng (Happy path, Alternative path, Error & Recovery).
  3. **Visual Design System:** Bảng màu WCAG 2.1 AA/AAA với contrast badges, Typography scale, Spacing 8pt và Component tokens.
  4. **Google Stitch AI Iterations (Before vs After):** So sánh trực quan trước và sau khi lặp prompt cho 3 vấn đề thiết kế lớn.
  5. **Nielsen Heuristics & WCAG 2.1 Audit:** Bảng đánh giá 10 nguyên lý với bộ lọc độ nghiêm trọng (High / Medium) và nhật ký quyết định (Accepted / Modified).
  6. **Mobile Phone Mockup Simulator (9 Màn hình):** Khung điện thoại Android 360×800dp tương tác, click chọn từng màn hình SCR_01 đến SCR_09 để xem chi tiết thông số và mục đích.
  7. **Flutter Developer Handoff:** Bảng chuyển đổi Design Tokens sang ThemeData và Widgets kèm code mẫu Dart.

> **Trạng thái nghiên cứu Persona:** Các hồ sơ và ma trận hiện là proto-persona/kế hoạch giả thuyết. Repository chưa có bằng chứng phỏng vấn, quan sát hoặc usability test; không xem các giả định/target là phát hiện hay kết quả đã xác thực.

---

## 1. Project Overview & One-Line Persona
- **Topic:** A mobile team formation and leadership locking application for FPT University Capstone students to form 4–5 member teams, elect leaders, and lock rosters prior to semester deadlines.
- **One-Line Proto-Persona:** Minh (20), an illustrative FPT Software Engineering senior profile representing the team-formation task; the profile and behaviors remain assumptions until validated with students.
- **AI Tools Used:** 
  - **Google Stitch / Gemini 1.5 Pro:** Initial screen generation and iterative UI layout refinement.
  - **Antigravity AI (Claude/Gemini):** UX analysis, heuristic critique (Nielsen's 10 heuristics), accessibility audits, and Flutter handoff mapping.

---

## 2. Deliverables Navigation Map

| Deliverable | Location in Repository | Description |
|---|---|---|
| **🌐 Interactive Web Showcase** | [`index.html`](./index.html) | Trang web trực quan đầy đủ nộp cho giảng viên (Persona, Flows, Before/After Stitch, Phone Simulator, Specs). |
| **Persona & Problem Statement** | [`ux/persona.md`](./ux/persona.md) | Ba proto-persona, mỗi hồ sơ đủ 12 trường, JTBD, scenario, tiêu chí kiểm thử đề xuất và trạng thái bằng chứng. |
| **Persona Research Pack** | [`ux/persona-research.md`](./ux/persona-research.md) | Stakeholder/User Map, affinity giả định, Persona Coverage Matrix, ma trận Persona → Need → UI → Test, assumption/research backlog, hướng dẫn phỏng vấn, sổ bằng chứng và checklist guideline. |
| **IA & User Flows** | [`ux/user-flow.md`](./ux/user-flow.md) | Screen inventory, hierarchical IA, 3 Mermaid diagrams (including error/recovery). |
| **Design Brief** | [`design/DESIGN.md`](./design/DESIGN.md) | Design tokens, color palette, typography scale, spacing rules, and component rules given to Stitch. |
| **Screen Specifications** | [`design/screen-spec.md`](./design/screen-spec.md) | Functional intent, displayed content, and flow association for all 9 screens. |
| **Design Decisions & A11y** | [`design/design-decisions.md`](./design/design-decisions.md) | Top 10 design decisions with rationale, plus completed WCAG 2.1 & responsive checklist. |
| **AI Design Log** | [`ai/ai-design-log.md`](./ai/ai-design-log.md) | Verbatim Stitch prompts, 3 named iterations, 5+ heuristic critique findings, decision matrix. |
| **Flutter Handoff** | [`handoff/flutter-handoff.md`](./handoff/flutter-handoff.md) | 6-item handoff specification per screen, Tokens-to-Flutter table, Components-to-Widgets table. |
| **Generated Assets** | `assets/stitch/` & `assets/figma/` | Exported raw generations from Stitch and exported final 360x800dp frames from Figma. |
