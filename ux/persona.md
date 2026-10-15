# UX Research: User Persona & Problem Statement

## Research status

**P01 is a proto-persona, not a research-validated persona.** The project currently has no interview or observation records, participant IDs, or survey results. Details below are working assumptions derived from the project brief and must be checked with FPT Capstone students before being presented as observed user facts. The portrait is illustrative, not a photograph of a research participant.

The project has one primary persona and two **candidate secondary proto-personas** to represent distinct flows already included in this Lab 2 prototype: team leadership/roster locking and the random-pool fallback. This is a three-profile draft for a group project, not a claim that research has confirmed three distinct segments. All profiles are assumptions; interviews must test whether the proposed differences lead to different needs and design decisions. Supporting discovery artifacts and the research backlog are in [`persona-research.md`](./persona-research.md).

## P01 · Primary proto-persona

| Core field | Persona |
|---|---|
| **01. Identity & archetype** | Nguyen Van Minh — “time-constrained Capstone student seeking a compatible team.” Name and profile are illustrative. |
| **02. Persona priority** | **Primary.** Represents the student discovery-and-team-formation task that defines this prototype’s main flow. P02 and P03 are secondary candidates only; research may show that either should be merged, changed, or removed. |
| **03. Usage context** | Assumption to validate: a 7th-semester Software Engineering student checks team options during registration week, between campus activities or while commuting. He uses a phone one-handed, with limited time and attention. |
| **04. Goals** | 1. Find an available Capstone team that needs his backend/AI skills before the deadline. 2. Assess a team’s members and skill gaps before requesting to join. 3. Confirm that the final roster and leader are valid before locking. |
| **05. Job to Be Done** | “When Capstone registration is approaching, I want to find and evaluate a team with an open slot that fits my skills, so I can join a valid team before the deadline without relying on stale chat messages.” |
| **06. Current behaviors** | Working assumptions, not observed findings: searches Telegram/group chats or shared spreadsheets; checks posts for team availability and skill needs; messages a leader to confirm whether a slot is still open; checks notifications for replies. Frequency, tools actually used, and workarounds need interview confirmation. |
| **07. Pain points** | Assumptions to validate: (1) stale chat/spreadsheet information can make it unclear whether a team still has a slot; (2) member skills and team expectations can be hard to compare; (3) unclear leader, member-count, or invitation status can delay a valid roster or cause a missed deadline. |
| **08. Motivations** | Assumption to validate: values a timely, compatible team, confidence in teammate skills, clear responsibility for decisions, and certainty that the roster is compliant. |
| **09. Constraints** | Hypotheses only: limited time during registration and mobile use may constrain attention. Actual device, connectivity, digital skills, accessibility needs, and touch-target requirements are unknown; test text readability, scaling, contrast, and target sizes with participants without assigning an unreported health condition. |
| **10. Key scenario** | Registration week: Minh sees a team post but cannot tell if it still has an opening or needs backend skills. He opens the app, filters for open teams, reviews member skills and slot status, and requests to join. Desired outcome: a valid request or a clear next step before the deadline. This is an illustrative scenario, not an observed event. |
| **11. Success criteria** | Proposed usability-test targets, not observed results: (a) at least 4 of 5 test participants can find and request to join a suitable open team within 60 seconds without moderator help; (b) at least 4 of 5 can identify whether a 3-member roster can be locked and name the recovery action; (c) a leader can verify a valid roster and reach the lock confirmation within 15 seconds. Record completion, time, errors, and whether the participant needed help. |
| **12. Evidence & status** | **Status: Proto-Persona · unvalidated.** No participant evidence is currently documented. Profile details and current behaviors are assumptions, not interview quotes or research findings. Track future interview/observation evidence with anonymized IDs, dates, and notes; update or remove unsupported claims. |

## Candidate secondary proto-personas

Both profiles below are illustrative hypotheses based on the app's team-management and random-pool flows. Their names, contexts, behaviors, and pain points are assumptions; validate or revise them through interviews and usability tests before treating them as representative.

### P02 · Team coordinator / elected leader

| Core field | Working hypothesis |
|---|---|
| **01. Identity & archetype** | Le Hoang Phuc — “elected team coordinator who needs to complete a compliant roster.” Name and profile are illustrative. |
| **02. Persona priority** | **Secondary candidate; unvalidated.** Represents the elected-leader authority and roster-readiness task in SCR_05–SCR_07; confirm that it differs from P01 in real behavior. |
| **03. Usage context** | Assumption: during registration, checks the team hub on a phone between classes or while coordinating with teammates; attention may be split across chat and the roster. Device, frequency, and actual setting are unknown. |
| **04. Goals** | (1) Know whether the roster meets the 4–5 member rule. (2) See unresolved votes or invitations. (3) Complete locking or understand a valid recovery action before the deadline. |
| **05. Job to Be Done** | “When our team is nearly complete, I want to see what requirements are still missing and what to do next, so I can lock the correct roster without leaving anyone out.” |
| **06. Current behaviors** | Assumption to validate: checks group messages, asks teammates to confirm votes/availability, and may track members in a shared list. Actual tools, sequence, frequency, and workarounds are unknown. |
| **07. Pain points** | Assumptions: (a) during roster review, pending invitations may be mistaken for confirmed members; (b) when the team has fewer than four members, a disabled lock action may not explain recovery; (c) unclear voting status may delay assigning responsibility. Validate occurrence and impact. |
| **08. Motivations** | Assumption: values accountability, a correct roster, visibility of pending work, and confidence that the final action is authorized and reversible only when intended. |
| **09. Constraints** | Time pressure near registration cutoff; mobile screen and possibly interrupted attention are assumptions. Role permissions, device, connectivity, and accessibility needs are **unknown** and must be researched rather than inferred. |
| **10. Key scenario** | Trigger: a teammate asks whether the group is ready to submit. Phuc reviews a 3/5 roster, discovers locking is unavailable, identifies the minimum-member rule, and starts recruiting. Desired result: understand the blocker and next step without assuming an incomplete roster was submitted. Illustrative only. |
| **11. Success criteria** | Proposed test: at least 4/5 participants identify that a 3-member roster cannot be locked, explain why, and locate the recruiting action within 30 seconds without moderator help; record time, errors, and help. Target is untested. |
| **12. Evidence & status** | **Proto-persona candidate · unvalidated.** No interview/observation evidence, participant IDs, or dates. All field content is an assumption or unknown; see research backlog R02 and evidence template in [`persona-research.md`](./persona-research.md). |

### P03 · Student awaiting random-pool matching

| Core field | Working hypothesis |
|---|---|
| **01. Identity & archetype** | Tran Gia Huy — “unassigned student who needs a clear status and next action.” Name and profile are illustrative. |
| **02. Persona priority** | **Secondary candidate; unvalidated.** Represents the random-pool status flow (SCR_08); first verify that this is a real user task and not only a system state. |
| **03. Usage context** | Assumption: after the team-formation cutoff, checks matching status on a phone and may seek an update from classmates or course staff. Device, timing, connectivity, and attention context are unknown. |
| **04. Goals** | (1) Know whether matching is pending, complete, or requires action. (2) Understand the next step and when to check again. (3) Avoid being overlooked or acting on an outdated status. |
| **05. Job to Be Done** | “When I have not been matched to a team, I want a clear status and next step, so I know my case has not been missed and can prepare appropriately.” |
| **06. Current behaviors** | Assumption to validate: checks class/group messages or asks classmates/course staff; actual channels, frequency, and workaround are unknown. |
| **07. Pain points** | Assumptions: (a) an unclear pending state may prompt repeated checking; (b) no stated next action may cause unnecessary messages to staff; (c) stale status may lead to incorrect expectations. Validate whether these happen and their consequences. |
| **08. Motivations** | Assumption: values fairness, timely and consistent updates, transparency about what is known, and a clear action when one is required. |
| **09. Constraints** | May be under deadline-related uncertainty; mobile access is a hypothesis. Network reliability, digital literacy, accessibility requirements, and access to staff are unknown and require research. |
| **10. Key scenario** | Trigger: regular team formation closes while Huy is still unassigned. He opens the random-pool status view, interprets the state, and looks for the next action or a truthful indication that none is required. No matching-time promise should be implied without a service commitment. Illustrative only. |
| **11. Success criteria** | Proposed test: at least 4/5 participants correctly state their displayed status and next step after viewing SCR_08, without moderator help; record interpretation errors, confidence, and any expectation of an unsupported match-time promise. Target is untested. |
| **12. Evidence & status** | **Proto-persona candidate · unvalidated.** No interview/observation evidence, participant IDs, or dates. The existence and distinctness of this need are open questions; see research backlog R03 and evidence template in [`persona-research.md`](./persona-research.md). |

### One-sentence problem statement

> Capstone students need a reliable way to find compatible, available teammates, understand roster and leadership status, and complete team formation before the registration deadline.

### UI hypothesis → validation

| Persona need / assumption | UI hypothesis | How to check |
|---|---|---|
| Students cannot quickly tell which teams still have space. | Show open-slot count and member placeholders on browse cards, with an “Open slots” filter. | Give participants a browse task with a mix of full and open teams; measure correct selection and time. |
| Students need to judge skill fit before contacting a team. | Show member skills and desired skill gaps on the group detail screen. | Ask participants to choose a team for a stated skill profile and explain their choice; record wrong choices and whether they found the relevant information. |
| A team below the minimum may otherwise appear lockable. | Show a roster validation message and a recovery action when the team has fewer than four members. | Ask participants to review a 3-person team and describe what they can do next; verify they do not believe it can be locked. |

### Research plan and persona coverage

Before calling P01 research-validated, interview and observe a small, varied set of FPT Capstone students who are currently forming teams or have recently done so. Ask about the **last time** they searched for teammates, the exact steps and tools used, how they confirmed availability, and what happened when information was stale or a team was incomplete. Record anonymized evidence IDs and distinguish reported, observed, inferred, and assumed statements.

Use the findings to compare at least these behaviors: students seeking a team, elected leaders coordinating/locking a roster, and students awaiting a random-pool match. Keep or split the secondary profiles only if evidence supports distinct design-relevant behaviors; revise or remove unsupported assumptions. The three-profile set satisfies the **draft-count** suggested for a group project, but not research validation or proof of segment coverage. See [`persona-research.md`](./persona-research.md) for the user map, assumption-only affinity clusters, coverage matrix, research backlog, and persona-to-design traceability.

## Measurable success criterion

> Proposed target: a student finds and requests to join an eligible open team in under **60 seconds**, and a team leader verifies roster compliance and reaches the lock action in under **15 seconds**, without unexpected validation errors. Validate these thresholds with usability testing; they are targets, not results.
