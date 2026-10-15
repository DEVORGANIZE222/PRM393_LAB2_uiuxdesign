# Hồ sơ khám phá & kiểm chứng Persona

Tài liệu này bổ sung các đầu ra Discovery và Validation cho bộ proto-persona EXEMatching, đối chiếu với [Persona Guideline PRM393](https://prm393-material.web.app/persona-guideline). Hồ sơ persona chi tiết nằm trong [`persona.md`](./persona.md).

## Trạng thái bằng chứng — đọc trước khi sử dụng

**Chưa có nghiên cứu người dùng thực tế được cung cấp cho dự án.** Hiện không có bản ghi phỏng vấn/quan sát, mã người tham gia, ngày thu thập, khảo sát hoặc kết quả usability test. Vì vậy:

- P01–P03 đều là **proto-persona chưa được xác thực**; tên và đặc điểm cá nhân chỉ để minh họa.
- Bản đồ người dùng là bản đồ phạm vi dự kiến; cụm affinity là **cụm giả định**, không phải kết quả affinity workshop từ dữ liệu người dùng.
- Những mục tiêu, hành vi, rào cản và tiêu chí đo trong tài liệu là giả thuyết/đích kiểm thử, không phải phát hiện hay kết quả.
- Không điền tên, lời trích dẫn, tần suất, thiết bị, nhu cầu trợ năng hoặc kết quả nghiên cứu như sự thật nếu chưa có nguồn.

## 1. Phạm vi và phát biểu vấn đề

**Phạm vi nguyên mẫu:** hỗ trợ sinh viên FPT University hình thành nhóm Capstone 4–5 thành viên, tìm/đánh giá nhóm còn chỗ, bầu trưởng nhóm, kiểm tra điều kiện và khóa danh sách; có luồng trạng thái ghép ngẫu nhiên cho người chưa được xếp nhóm.

**Phát biểu vấn đề:** Sinh viên Capstone cần một cách đáng tin cậy để tìm nhóm phù hợp còn chỗ hoặc hiểu trạng thái được ghép, đồng thời các nhóm cần biết rõ danh sách, quyền hạn và bước còn thiếu để hoàn tất lập nhóm đúng hạn.

**Câu hỏi thiết kế cần nghiên cứu:** Các tác vụ tìm nhóm, điều phối/khóa nhóm và chờ ghép ngẫu nhiên có đại diện cho những nhu cầu/hành vi khác nhau không, và khác biệt nào đủ làm thay đổi quyết định giao diện?

## 2. Bản đồ Stakeholder / User (bản phạm vi dự kiến)

Đây là bản đồ vai trò cần xác minh với chủ nhiệm môn/đơn vị vận hành. Chỉ sinh viên là người dùng trực tiếp được nhắm đến trong nguyên mẫu; không giả định hệ thống đã có tích hợp hoặc quy trình vận hành tương ứng.

| Vai trò dự kiến | Quan hệ với tác vụ | Nhu cầu/câu hỏi cần xác minh | Trạng thái |
|---|---|---|---|
| Sinh viên chưa có nhóm | Người dùng trực tiếp: tìm nhóm, xem kỹ năng/chỗ trống, gửi yêu cầu tham gia | Kênh tìm hiện tại? Cách xác nhận nhóm còn chỗ? Tiêu chí chọn nhóm? | Phân khúc ứng viên P01; chưa có bằng chứng |
| Thành viên đang ở trong nhóm | Người dùng trực tiếp: xem danh sách, lời mời, thông báo, tham gia bầu trưởng nhóm | Thành viên có cần xác nhận lời mời/đồng ý khóa không? Trách nhiệm được chia thế nào? | Nhóm cần khảo sát; hiện chưa có persona riêng |
| Trưởng nhóm được bầu | Người dùng trực tiếp có thể có quyền quản lý: theo dõi phiếu bầu, tuyển người, kiểm tra/khóa roster | Ai có quyền khóa? Điều kiện chính thức? Cách xử lý bất đồng/lời mời đang chờ? | Ứng viên P02; quyền hạn chưa xác minh |
| Sinh viên chưa được ghép sau hạn | Người dùng trực tiếp nếu random pool là quy trình thực tế | Quy trình ghép có tồn tại? Trạng thái và bước tiếp theo do ai cập nhật? | Ứng viên P03; sự tồn tại/quy trình chưa xác minh |
| Giảng viên/chủ nhiệm môn hoặc đơn vị Capstone | Stakeholder gián tiếp/nguồn xác minh quy định | Quy tắc 4–5 người, thời hạn, vai trò trưởng nhóm, quy trình ngoại lệ và khóa chính thức | Cần xác nhận quy định; chưa phỏng vấn |
| Quản trị viên/hỗ trợ học vụ | Stakeholder vận hành tiềm năng | Ai sửa roster sai, xử lý khiếu nại, ghép thủ công hoặc mở khóa? | Phạm vi quyền và quy trình đều chưa biết |

## 3. Affinity Board — giả thuyết trước nghiên cứu

**Không phải affinity map từ dữ liệu thực tế.** Các thẻ dưới đây được nhóm từ đề bài và luồng prototype để lập kế hoạch nghiên cứu; ký hiệu `A` là assumption, không phải mã nguồn bằng chứng người dùng. Chỉ chuyển thẻ sang finding khi có ID phỏng vấn/quan sát và trích đoạn đã ẩn danh.

| Cụm giả định | Thẻ giả định cần kiểm chứng | Ảnh hưởng thiết kế có thể có | Nguồn hiện tại |
|---|---|---|---|
| Tìm kiếm & độ phù hợp | A01: sinh viên khó biết nhóm còn chỗ; A02: cần so khớp kỹ năng; A03: có thể xác nhận qua chat/bảng tính | Hiển thị chỗ còn trống, kỹ năng và cách gửi yêu cầu; kiểm tra tính mới của trạng thái | Đề bài + luồng SCR_03/04; chưa có user evidence |
| Điều phối & đủ điều kiện | A04: người điều phối cần biết roster/vote/invite còn thiếu; A05: nhóm thiếu người cần hướng khắc phục | Trạng thái roster, quyền hạn, lý do khóa bị chặn và hành động tiếp theo | Luồng SCR_05/06/07; chưa xác minh quy định |
| Trạng thái chờ & tin cậy | A06: người chưa được ghép cần biết trạng thái; A07: mốc thời gian thiếu căn cứ có thể tạo kỳ vọng sai | Thông báo trạng thái trung thực, bước tiếp theo; không hứa thời gian ghép nếu chưa có SLA | Luồng SCR_08; chưa xác minh quy trình thực tế |
| Tiếp cận & hoàn cảnh dùng | A08: thao tác trên điện thoại/gián đoạn; A09: tương phản/vùng chạm ảnh hưởng sử dụng | Responsive, tương phản và vùng chạm phù hợp; kiểm thử thiết bị và nhu cầu thực tế | Yêu cầu thiết kế giả định; chưa có người tham gia accessibility |

### Cách cập nhật affinity sau nghiên cứu

1. Mỗi ghi chú chỉ chứa một hành vi, mục tiêu, trở ngại hoặc hoàn cảnh; gắn mã nguồn ẩn danh như `INT-S01` hoặc `OBS-S02` và số đoạn.
2. Giữ nguyên phân biệt **Observed / Reported / Inferred / Assumed**; không biến lời kể thành quan sát.
3. Nhóm theo hành vi, mục tiêu và hoàn cảnh; giữ các ghi chú trái chiều thay vì xóa chúng.
4. Ghi rationale khi gộp/tách cụm, sau đó cập nhật Persona Coverage Matrix và backlog.

## 4. Persona Coverage Matrix

| Persona ứng viên | Tác vụ trọng tâm | Hoàn cảnh/rào cản cần kiểm tra | Khác biệt thiết kế giả định | Màn hình liên quan | Bằng chứng |
|---|---|---|---|---|---|
| P01 · Minh — tìm nhóm phù hợp | Tìm, so sánh và gửi yêu cầu vào nhóm còn chỗ | Thông tin nhóm cũ? Tiêu chí kỹ năng? Thao tác mobile/gián đoạn? | Lọc chỗ trống, so khớp kỹ năng, trạng thái yêu cầu rõ | SCR_02–04, SCR_09 | Chưa có; mọi phát biểu là giả định |
| P02 · Phúc — điều phối/khóa nhóm | Theo dõi roster, vote, lời mời; xác nhận đủ điều kiện và khóa | Quyền hạn thực? Quy định roster? Hậu quả của trạng thái pending? | Tóm tắt điều kiện, giải thích lỗi và recovery; xác nhận hành động quan trọng | SCR_05–07 | Chưa có; cần xác nhận vai trò/quy định |
| P03 · Huy — chờ ghép | Hiểu trạng thái chưa có nhóm và bước tiếp theo | Random pool có thực tế? Ai cập nhật? Người dùng kỳ vọng gì? | Trạng thái trung thực, hướng dẫn và thông báo không hứa quá khả năng | SCR_08–09 | Chưa có; sự tồn tại của phân khúc còn là câu hỏi |

**Quy tắc giữ/tách persona:** giữ nhiều persona chỉ khi dữ liệu cho thấy mẫu hành vi/mục tiêu/rào cản khác nhau và khác biệt đó kéo theo quyết định UI hoặc luồng khác. Nếu P02 chỉ là quyền hạn tạm thời của P01, gộp vai trò thay vì duy trì persona riêng. Nếu random pool chỉ là trạng thái hệ thống, không tạo P03 như persona độc lập.

## 5. Ma trận Persona → Need → UI decision → Test

| Persona | Nhu cầu/giả thuyết | Quyết định UI cần kiểm tra | Bài kiểm thử & chỉ số |
|---|---|---|---|
| P01 | Cần nhận ra nhóm còn chỗ và phù hợp trước khi liên hệ | Thẻ nhóm có số chỗ/kỹ năng; bộ lọc; chi tiết roster; phản hồi sau gửi yêu cầu | Cho chọn nhóm phù hợp trong danh sách đã đầy/còn chỗ; ghi đúng/sai, thời gian, lý do lựa chọn |
| P01 | Cần biết yêu cầu còn chờ, được chấp nhận hay bị từ chối | Trạng thái lời mời/yêu cầu nhất quán ở chi tiết và thông báo | Cho diễn giải trạng thái từ hai điểm truy cập; ghi mâu thuẫn/hiểu sai và tác vụ hoàn thành |
| P02 | Cần biết vì sao chưa thể khóa và cách xử lý | Hiển thị điều kiện roster, quyền thực hiện, nguyên nhân bị chặn và hành động tuyển thêm | Với roster 3 người, hỏi có khóa được không, vì sao và bước tiếp; ghi độ chính xác, thời gian, trợ giúp |
| P02 | Cần hoàn tất trách nhiệm bầu/duyệt trước khi khóa | Trạng thái phiếu bầu, quyền và bước xác nhận rõ; chống thao tác nhầm | Mô phỏng phiếu chưa đủ/đủ và roster hợp lệ; ghi lỗi vai trò, hành động đảo ngược/nhầm |
| P03 | Cần hiểu trạng thái ghép và bước tiếp theo | SCR_08 dùng ngôn ngữ trạng thái chính xác; có hành động hoặc chỉ dẫn kiểm tra lại; không tự bịa ETA | Cho xem trạng thái mô phỏng và yêu cầu giải thích hiện trạng/bước tiếp theo; ghi diễn giải sai/kỳ vọng ETA |

Tất cả bài kiểm thử hiện là **kế hoạch**, chưa có người tham gia hay kết quả. Tham khảo các target đề xuất trong [`persona.md`](./persona.md); hiệu chỉnh target sau pilot thay vì báo cáo như kết quả.

## 6. Assumption & Research Backlog

Ưu tiên `P0` cần trả lời trước khi khẳng định cấu trúc persona/quy tắc nghiệp vụ; `P1` tiếp theo để tinh chỉnh UI; `P2` bổ sung. Chưa mục nào được xác minh.

| ID / ưu tiên | Câu hỏi mở / giả định | Phương pháp & người cần tuyển | Bằng chứng cần lưu | Điều kiện đóng |
|---|---|---|---|---|
| R01 · P0 | Sinh viên gần đây tìm teammate bằng những bước/kênh nào; chỗ trống và độ phù hợp được xác minh ra sao? | Phỏng vấn sự kiện gần nhất + walkthrough artefact tùy chọn với sinh viên đang tìm hoặc mới tìm nhóm | ID ẩn danh, ngày, câu trả lời theo bước, công cụ/workaround, đoạn trích | Có pattern được hỗ trợ và trường hợp trái chiều; cập nhật P01/coverage |
| R02 · P0 | Trưởng nhóm có vai trò/quyền riêng nào; quy tắc roster, vote, pending invite và lock là gì? | Phỏng vấn thành viên/trưởng nhóm; xác nhận riêng với giảng viên/chủ nhiệm môn bằng tài liệu quy định | Phân biệt nguồn student-reported với policy source; ghi phiên bản/ngày tài liệu | Quyền và quy tắc được nguồn có thẩm quyền xác nhận; xác minh P02 khác P01 ở quyết định UI |
| R03 · P0 | Random pool có phải quy trình thật? Trạng thái, tác nhân và thời điểm cập nhật là gì? | Hỏi sinh viên chưa được ghép và người vận hành; đối chiếu quy trình chính thức | ID nguồn đã ẩn danh, bằng chứng quy trình, trách nhiệm cập nhật | Xác nhận tồn tại + luồng; nếu không tồn tại, bỏ/đổi P03 và SCR_08 |
| R04 · P1 | Những điểm nào gây chậm, sai hoặc cần workaround trong mỗi tác vụ? | Phỏng vấn hành vi và quan sát/walkthrough tác vụ gần nhất | Bước, lỗi, hậu quả, workaround và bối cảnh; tránh hỏi dẫn dắt | Có evidence cụ thể cho từng pain được giữ; bỏ các pain chỉ là suy đoán |
| R05 · P1 | Thiết bị, kết nối, khả năng tiếp cận, mức quen thuộc số và thời gian thực tế ra sao? | Tuyển người dùng đa dạng thiết bị/nhu cầu; quan sát dùng prototype trên thiết bị phù hợp | Thiết bị tự báo cáo, điều kiện test, nhu cầu theo sự đồng ý; tối thiểu hóa dữ liệu nhạy cảm | Chỉ giữ constraint có nguồn; sửa responsive/accessibility dựa trên quan sát và chuẩn |
| R06 · P1 | Người dùng hiểu trạng thái yêu cầu, phiếu bầu, roster và random pool như thế nào? | Usability test task-based, think-aloud tùy chọn, không gợi ý đáp án | Hoàn thành, thời gian, lỗi, lời giải thích, trợ giúp; phiên bản prototype | Có baseline test; sửa lỗi nghiêm trọng rồi retest |
| R07 · P2 | Có phân khúc bị bỏ sót (đã có nhóm, từ chối lời mời, nhóm cần thành viên bổ sung, hỗ trợ học vụ)? | Stakeholder map review + so sánh trải nghiệm theo tình huống | Lý do đưa vào/loại ra, nguồn và tác động thiết kế | Các nhóm liên quan được xem xét; ghi lý do phạm vi hoặc bổ sung |

### Phân bổ mẫu đề xuất (không phải kết quả)

Guideline nêu 6–12 cuộc phỏng vấn/quan sát tổng cộng như mốc tổ chức lớp học đề xuất, không đại diện thống kê. Có thể bắt đầu với 6 cuộc bao phủ các tình huống tìm nhóm, đang ở trong nhóm/điều phối và chưa được ghép; điều chỉnh theo khả năng tiếp cận người dùng và độ lặp của pattern. Không hứa đạt saturation. Usability test là hoạt động riêng, không thay thế phỏng vấn khám phá.

### Câu hỏi phỏng vấn hành vi

1. Lần gần nhất bạn tìm nhóm/lập roster/chờ được ghép là khi nào? Hãy kể lại từng bước.
2. Bạn dùng thiết bị và công cụ nào ở mỗi bước? Có chuyển sang kênh khác không?
3. Làm sao bạn biết một nhóm còn chỗ hoặc một lời mời đã được xác nhận?
4. Có đoạn nào mất thời gian, dễ nhầm hoặc buộc bạn hỏi người khác? Hãy kể tình huống cụ thể.
5. Khi gặp trở ngại, bạn đã làm gì tiếp theo và kết quả ra sao?
6. Với vai trò nhóm, ai được quyền quyết định/bầu/khóa và bạn biết điều đó bằng cách nào?
7. Nếu còn chờ ghép, bạn nhận thông tin từ ai, trạng thái nào hữu ích và khi nào bạn biết phải hành động?
8. Điều gì cho bạn biết công việc đã hoàn tất tốt? Có trường hợp nào không như vậy?

Hỏi về trải nghiệm thực tế gần nhất; không giới thiệu giao diện hoặc giả định của persona trước khi người tham gia kể trải nghiệm. Cho phép bỏ qua câu hỏi và không thu dữ liệu nhạy cảm không cần thiết.

## 7. Mẫu sổ bằng chứng (trống — chưa có phiên nghiên cứu)

Không có dòng nào dưới đây được điền bằng dữ liệu giả. Tạo một dòng cho từng phát biểu cần truy xuất:

| Evidence ID | Ngày | Phương pháp / bối cảnh | Phát biểu đã ẩn danh | Loại (Observed/Reported/Inferred/Assumed) | Persona/claim liên quan | Mức tin cậy / trái chiều |
|---|---|---|---|---|---|---|
| *Chưa có* | — | — | — | — | — | — |

Chỉ dùng ID như `INT-S01-Q04` hoặc `OBS-S02-T03`; lưu consent riêng và không đưa thông tin nhận dạng vào tài liệu nộp. Nếu người tham gia là trẻ vị thành niên, thực hiện quy trình đồng ý phù hợp theo quy định áp dụng.

## 8. Prompt tổng hợp nghiên cứu có kiểm soát

Chỉ dùng sau khi nhóm đã có ghi chú đã ẩn danh. Cung cấp mỗi đoạn cùng ID nguồn; không đưa dữ liệu nhận dạng cá nhân vào công cụ AI.

> Dựa duy nhất trên ghi chú phỏng vấn/quan sát có ID nguồn được cung cấp: tách hành vi được quan sát, hành vi được người tham gia kể, mục tiêu, trở ngại và ràng buộc; nhóm pattern theo hành vi/mục tiêu/bối cảnh; đề xuất các phân khúc có thể dẫn tới quyết định thiết kế khác nhau. Với từng phát biểu, dẫn ID nguồn; nếu không có nguồn, ghi `UNKNOWN / ASSUMPTION`. Giữ dữ liệu trái chiều, không tạo quote, số liệu, tần suất, đặc điểm cá nhân hay kết luận chưa có trong ghi chú. Trả về evidence matrix, candidate segments, persona draft và câu hỏi còn mở. Dữ liệu: [dán ghi chú đã ẩn danh kèm ID].

## 9. Checklist đối chiếu Persona Guideline

| Yêu cầu | Trạng thái dự án | Ghi chú |
|---|---|---|
| 1 Primary có đủ 12 trường lõi | **Có — proto-persona** | P01 trong [`persona.md`](./persona.md); chưa research-validated |
| Lab 2: tuổi, vai trò, thiết bị, accessibility, problem statement, success criterion | **Có dưới dạng giả định/target** | Tuổi/thiết bị/nhu cầu cụ thể phải xác minh; tiêu chí thành công chưa được test |
| Bộ 3–5 proto-persona cho đồ án nhóm hoặc giải thích số lượng | **Có 3 bản nháp** | P01–P03 đủ số draft; cần nghiên cứu xem có thật sự là các phân khúc khác nhau |
| Scenario cho mỗi Primary Persona | **Có** | Hiện chỉ một Primary (P01); hai persona còn lại là candidate Secondary |
| Stakeholder/User Map | **Có — bản phạm vi dự kiến** | Vai trò và quy trình stakeholder gián tiếp cần xác nhận |
| Affinity Board có nguồn bằng chứng | **Chưa đạt dưới dạng nghiên cứu** | Có cụm giả định ở mục 3; cần bổ sung board thật gắn evidence IDs sau thu thập dữ liệu |
| Persona Coverage Matrix | **Có — bản giả thuyết** | Cần cập nhật sau nghiên cứu |
| Assumption & Research Backlog | **Có** | R01–R07, chưa có kết quả thực thi |
| Persona → Need → UI → Test | **Có — test plan** | Cần chạy usability test và cập nhật kết quả |
| Evidence IDs, interview/observation notes, persona đã cập nhật | **Chưa đạt / đang chờ nghiên cứu** | Không thể tạo hợp lệ từ thông tin hiện có; không được giả lập để nộp như thật |

### Tự rà soát theo rubric 100 điểm của guideline

Guideline quy định 10 tiêu chí, mỗi tiêu chí 10 điểm; đây là rubric đề xuất cho lớp, không phải chuẩn NN/g. Không tự chấm điểm số khi tiêu chí cần nghiên cứu thực tế còn thiếu.

| Tiêu chí rubric | Tình trạng bản hiện tại |
|---|---|
| 1. Xác định phạm vi sản phẩm, tác vụ trọng tâm và nhóm người dùng | Có bản phạm vi desk research; cần stakeholder xác nhận |
| 2. Có User/Stakeholder Map và cân nhắc người dùng dễ bị bỏ sót | Có bản dự kiến và backlog R07; chưa xác minh với stakeholder/người dùng |
| 3. Số persona phù hợp phạm vi; giải thích số lượng dựa trên nghiên cứu | Có 3 bản nháp theo gợi ý đồ án nhóm; khác biệt thực tế chưa được chứng minh |
| 4. Persona khác nhau bởi goals, behaviors, contexts hoặc constraints thực sự | Có giả thuyết khác nhau gắn với luồng; cần nghiên cứu quyết định giữ/gộp/bỏ |
| 5. Mỗi persona đủ 12 trường cốt lõi, ngắn gọn và hữu dụng | Có 3 hồ sơ proto-persona, mỗi hồ sơ 12 trường |
| 6. Nhu cầu là kết quả mong muốn, không phải tính năng | JTBD/Goals được viết theo kết quả; cần xác thực cách diễn đạt với người dùng |
| 7. Có research evidence hoặc gắn nhãn giả định rõ ràng | Assumption được gắn nhãn; chưa có research evidence |
| 8. Có Affinity Board/tổng hợp pattern chứng minh phân khúc | Chưa đạt: hiện chỉ có cụm giả định; thiếu board thật với evidence IDs |
| 9. Mỗi Primary có scenario và success criteria cụ thể | Có cho P01; scenario và target hiện chưa được test |
| 10. Có quyết định/giả thuyết UI và phương pháp kiểm chứng liên kết Persona | Có ma trận test plan; chưa chạy kiểm thử |

**Tình trạng tự chấm:** chưa chấm điểm. Một hồ sơ có đủ cấu trúc không đồng nghĩa đạt rubric nếu evidence, affinity thật hoặc usability test còn thiếu.

### Trạng thái hồ sơ nộp theo milestone

| Milestone | Đầu ra | Trạng thái |
|---|---|---|
| Discovery | Problem statement & scope | Có — desk research |
| Discovery | Stakeholder/User Map | Có bản dự kiến; cần xác minh |
| Discovery | Ảnh/chụp brainstorming và Affinity Map | Chưa có; không thay bằng cụm giả định |
| Discovery | Persona Coverage Matrix | Có bản giả thuyết |
| Discovery | 3 proto-persona có trạng thái | Có bản nháp P01–P03 |
| Validation & Design | Kế hoạch nghiên cứu và mẫu ghi chú đã ẩn danh | Có kế hoạch/mẫu; chưa thu thập ghi chú thật |
| Validation & Design | Persona cập nhật kèm evidence IDs | Chưa có; đang chờ nghiên cứu |
| Validation & Design | Scenario/task flow cho Primary | Có scenario P01 trong [`persona.md`](./persona.md); cần kiểm chứng |
| Validation & Design | Persona → Need → UI decision → Test | Có kế hoạch; chưa có kết quả test |
| Validation & Design | Self-review và kết quả test | Checklist đã lập; chưa chấm điểm/kiểm thử |

**Kết luận:** Bộ tài liệu hiện đầy đủ về **cấu trúc proto-persona và kế hoạch nghiên cứu/kiểm chứng** theo các mục guideline có thể chuẩn bị bằng desk research. Nó chưa thể được gọi là bộ persona hoàn tất qua discovery/validation cho đến khi R01–R06 được thực hiện, ghi bằng chứng thật, và các hồ sơ được cập nhật theo dữ liệu.
