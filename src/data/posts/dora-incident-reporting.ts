import type { BlogPost } from "@/data/blogPosts";

const DORA =
  "https://eur-lex.europa.eu/eli/reg/2022/2554/oj";
const RTS_1772 =
  "https://eur-lex.europa.eu/eli/reg_del/2024/1772/oj";
const RTS_301 =
  "https://eur-lex.europa.eu/eli/reg_del/2025/301/oj";
const ITS_302 =
  "https://eur-lex.europa.eu/eli/reg_impl/2025/302/oj/eng";
const EBA_INCIDENT_REPORTING =
  "https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/operational-resilience/joint-technical-standards-major-incident-reporting";
const ESA_JC_2024_33 =
  "https://www.esma.europa.eu/sites/default/files/2024-07/JC_2024-33_-_Final_report_on_the_draft_RTS_and_ITS_on_incident_reporting.pdf";
const DLA_PIPER_DORA =
  "https://www.dlapiper.com/en/insights/publications/derisk-newsletter/2025/seconds-matter-understanding-dora-s-real-time-response-requirements";
const MORGAN_LEWIS_DORA =
  "https://www.morganlewis.com/blogs/sourcingatmorganlewis/2024/08/preparing-for-dora-esas-publish-incident-reporting-requirements";
const BAFIN_CYBER_2026 =
  "https://www.bafin.de/DE/die-bafin/publikationen-daten/risiken-im-fokus/Fokusrisiken_2026/RIF4/RIF_4_cyber_vorfaellen.html";
const ESA_CTPP =
  "https://www.eba.europa.eu/publications-and-media/press-releases/european-supervisory-authorities-designate-critical-ict-third-party-providers-under-digital";
const CSSF_INCIDENT =
  "https://www.cssf.lu/en/Document/digital-operational-resilience-act-dora/";

export const doraIncidentReportingPost: BlogPost = {
  id: "dora-incident-reporting-4-hour-window",
  title:
    "DORA Incident Reporting: The 4-Hour Notification Window and What Has to Happen Inside It",
  excerpt:
    "Once a major ICT incident is classified under DORA, the initial notification clock is four hours. What has to happen inside that window, where the data lives at 03:30, and what a real-time incident pipeline changes.",
  authorId: "mihai-anton",
  date: "May 19, 2026",
  readTime: "16 min read",
  category: "Finance",
  tags: ["Finance", "DORA"],
  image:
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=600&fit=crop",
  content: [
    {
      type: "paragraph",
      text: "At 03:14 on a Tuesday in February 2026, the on-call engineer at a Tier 1 European bank gets a PagerDuty alert. Customer-facing payment authorisation has been failing intermittently for the past 18 minutes. By 03:32, the on-call engineer has confirmed the issue is real, identified the affected service, and paged the incident commander. By 03:47, the incident response team is on the bridge.",
    },
    {
      type: "paragraph",
      text: "Two DORA clocks now matter.",
    },
    {
      type: "paragraph",
      text: `The first is the awareness clock. Once the bank is aware of an ICT-related incident, the 24-hour backstop for initial notification is in play if the incident is later classified as major. The second is the classification clock. Once the incident is classified as major, [Commission Delegated Regulation (EU) 2025/301](${RTS_301}) requires the initial notification to be submitted as early as possible and, in any event, within 4 hours.`,
    },
    {
      type: "paragraph",
      text: `That 4-hour window is not just a filing deadline. It is the period in which the institution has to classify the incident against DORA's criteria, assemble the initial impact view, identify the services affected, estimate the customer and transaction impact, capture mitigation actions, and submit through the relevant national competent authority process, while the technical team is still trying to restore service.`,
    },
    {
      type: "paragraph",
      text: `Supervisors are already using DORA data to assess operational resilience, incident management, and third-party concentration risk. [BaFin's 2026 supervisory priorities](${BAFIN_CYBER_2026}) have called out incident reporting as a focus area. France's ACPR has named incident management as one of three 2026 ICT supervisory priorities. The first formal enforcement actions for reporting failures are expected in the 2026 supervisory cycle.`,
    },
    {
      type: "paragraph",
      text: "The 4-hour window is the tightest regulatory clock in EU financial services. What has to happen inside it is not just sending a notification. It is classifying the incident correctly, against criteria that span seven dimensions, with data drawn from a SIEM, an observability stack, customer impact systems, a service criticality map, and the business continuity plan, at the moment when the technical team is most occupied with the incident itself.",
    },
    {
      type: "heading",
      text: "What the rules actually require",
    },
    {
      type: "paragraph",
      text: "The DORA incident reporting framework sits across four texts.",
    },
    {
      type: "paragraph",
      text: `[Regulation (EU) 2022/2554](${DORA}) sets the core obligations. Article 17 requires an ICT-related incident management process. Article 18 requires financial entities to classify ICT-related incidents and determine their impact. Article 19 requires major ICT-related incidents to be reported to the relevant competent authority. Article 20 mandates harmonised reporting content and templates.`,
    },
    {
      type: "paragraph",
      text: `[Commission Delegated Regulation (EU) 2024/1772](${RTS_1772}) specifies the incident classification criteria and materiality thresholds.`,
    },
    {
      type: "paragraph",
      text: `[Commission Delegated Regulation (EU) 2025/301](${RTS_301}) specifies the content and time limits for the initial notification, intermediate report, final report, and voluntary notification of significant cyber threats.`,
    },
    {
      type: "paragraph",
      text: `[Commission Implementing Regulation (EU) 2025/302](${ITS_302}) specifies the standard forms, templates, and procedures for reporting major ICT-related incidents and notifying significant cyber threats. The ESAs set out the package in the [Joint Final Report JC 2024-33](${ESA_JC_2024_33}).`,
    },
    {
      type: "paragraph",
      text: `The [4-hour initial notification window](${DLA_PIPER_DORA}) is the operational constraint most institutions underestimate; [Morgan Lewis's summary of the ESAs' requirements](${MORGAN_LEWIS_DORA}) is a useful companion to the legal texts for implementation teams.`,
    },
    {
      type: "paragraph",
      text: `The operational timeline is tight. The initial notification must be submitted as early as possible, within 4 hours from classification as major, and no later than 24 hours from awareness of the incident. The intermediate report is due within 72 hours from the initial notification. The final report is due within one month from the latest updated intermediate report, unless the reporting rules permit a combined or earlier submission because regular activities have recovered and root cause analysis is complete.`,
    },
    {
      type: "paragraph",
      text: `The classification itself is evidence-heavy. [RTS 2024/1772](${RTS_1772}) sets threshold logic across the Article 18 criteria:`,
    },
    {
      type: "list",
      items: [
        "**Clients, financial counterparts, and transactions affected.** Number of clients impacted, value of transactions affected, percentage of total clients or transactions.",
        "**Reputational impact.** Media coverage, complaints, regulatory inquiries, third-party communications.",
        "**Duration and service downtime.** How long the incident lasts and how long services are degraded or unavailable.",
        "**Geographical spread.** How many Member States or third countries are affected.",
        "**Data losses.** Whether confidentiality, authenticity, integrity, or availability of data has been compromised.",
        "**Criticality of services affected.** Whether the incident affects critical or important functions.",
        "**Economic impact.** Direct and indirect costs to the financial entity.",
      ],
    },
    {
      type: "paragraph",
      text: "The major-incident test is not a simple \"one dimension equals major\" checklist. The classification RTS sets threshold logic across these criteria. In practice, the institution has to evaluate service criticality and the relevant impact criteria together, then retain the evidence for the classification call. Where an incident results from successful, malicious, and unauthorised access, the classification rules treat it with particular weight.",
    },
    {
      type: "paragraph",
      text: "Where a deadline falls on a weekend or bank holiday, many financial entities may submit by noon on the next working day. That extension does not apply to initial or intermediate reports by credit institutions, central counterparties, operators of trading venues, and other entities identified as essential or important under NIS2.",
    },
    {
      type: "paragraph",
      text: `The reporting template ([ITS 2025/302](${ITS_302})) is structured. Submissions are made in XML to national competent authorities through national portals (BaFin's MVP, the CSSF eDesk, the DNB digital reporting environment, the Banca d'Italia portal). Authentication uses qualified electronic certificates under eIDAS. The portal generates an acknowledgement with a unique incident number that must be retained.`,
    },
    {
      type: "heading",
      text: "Where the data lives at 03:30",
    },
    {
      type: "paragraph",
      text: "To classify an incident correctly and complete an initial notification within 4 hours, the institution needs data from at least six places. None of these systems was designed to feed a regulator at three in the morning.",
    },
    {
      type: "paragraph",
      text: "The detection and observability stack, SIEM (Splunk, Microsoft Sentinel, IBM QRadar), application monitoring (Datadog, New Relic, Dynatrace), infrastructure monitoring (Prometheus, Grafana), and PagerDuty or equivalent for alerting, knows that something is wrong. It does not know whether the something qualifies as a major incident under DORA's criteria.",
    },
    {
      type: "paragraph",
      text: "The incident response runbook (in Confluence, an internal wiki, or a dedicated IR platform like Resilience or Jeli) describes what the on-call team should do. It is rarely written with DORA classification in mind. The team's first 30 minutes are spent on the technical response, not on regulatory classification.",
    },
    {
      type: "paragraph",
      text: "The CMDB and service dependency map shows which services are affected and which downstream services depend on them. For a Tier 1 bank, this can mean hundreds of services, each with a documented business criticality. The CMDB knows whether a service supports a critical or important function, assuming the CMDB has been kept current, which is itself a DORA requirement that not all institutions meet.",
    },
    {
      type: "paragraph",
      text: "The customer impact data sits in the operational data store, the CRM, or the data warehouse. Number of customers affected, transactions failed, dollar value of transactions delayed, none of this is in the SIEM. Pulling it in real time requires queries against systems that the incident response team typically does not run during an incident.",
    },
    {
      type: "paragraph",
      text: "The business continuity tier classifications, which services are RTO 4 hours, which are RTO 24 hours, which are deferrable, are documented in the BCP, which lives separately from the CMDB in most institutions.",
    },
    {
      type: "paragraph",
      text: `The compliance team's templates, the [RTS 2025/301](${RTS_301}) fields, the [ITS 2025/302](${ITS_302}) XML structure, the NCA-specific portal requirements, are in a regulatory mapping that the compliance team owns, separate from the IR runbook.`,
    },
    {
      type: "paragraph",
      text: "At 03:30, the incident commander is on a bridge with engineers trying to restore service. The compliance team is being paged. The CISO is being briefed. The decision on whether this is a \"major\" incident, with the 4-hour clock that starts when the answer is yes, is being made by whoever has the most complete picture, which is rarely the person reading the regulation.",
    },
    {
      type: "paragraph",
      text: "If the classification is wrong, the consequence is real. Under-classifying a major incident produces a regulatory failure: late notification, supervisory dialogue, and a record of misclassification that will affect future reviews. Over-classifying every incident produces a different problem: false positives that erode supervisory trust and waste compliance and technical capacity that should be on the actual incident.",
    },
    {
      type: "heading",
      text: "How teams handle it today",
    },
    {
      type: "paragraph",
      text: "The pattern in 2025 was largely manual. The on-call engineer detects and triages. The incident commander gets on the bridge. Someone, typically the CISO, the head of operational resilience, or a designated DORA lead, joins the call within 30-60 minutes. That person makes the classification call based on what's visible at the time.",
    },
    {
      type: "paragraph",
      text: `If the call is "this is major," the next hour is spent assembling the initial notification. The compliance team opens a copy of the [RTS 2025/301](${RTS_301}) template. The technical team supplies the technical facts. The customer impact team supplies the impact data, usually estimated, because real numbers take hours to pull. The compliance team transcribes everything into the national portal's format. The CISO reviews. The compliance lead authorises submission. The notification goes in.`,
    },
    {
      type: "paragraph",
      text: `For most institutions, the 4-hour window is met because the team has rehearsed it. For some institutions, it is missed, usually because the classification took longer than expected, or because the data assembly bumped into the technical response and the response was prioritised. CSSF in Luxembourg has already published [guidance](${CSSF_INCIDENT}) pushing firms to formalise the classification workflow because, in the first year of reporting, the classification step was where the time disappeared.`,
    },
    {
      type: "paragraph",
      text: "The 72-hour and 30-day reports follow the same manual pattern. The intermediate report typically requires deeper root-cause analysis than is available at 4+72 hours; the team submits what they have and updates later if needed. The final report at one month requires lessons-learned, remediation, and total impact. Each report is reassembled from updated sources rather than incrementally built from the initial submission.",
    },
    {
      type: "paragraph",
      text: `Early supervisory commentary suggests that incident reporting volumes are already material, and supervisors are moving from implementation guidance to reporting-quality review. The supervisor has been explicit that incident reporting quality will be a 2026 enforcement focus. Common findings from the first-year submissions, per [EBA observations](${EBA_INCIDENT_REPORTING}): delays between first awareness and initial notification, misclassification (under-reporting as much as over-reporting), and final reports lacking adequate root cause analysis.`,
    },
    {
      type: "heading",
      text: "What gets enforced",
    },
    {
      type: "paragraph",
      text: "DORA enforcement will not only be about whether a notification was sent. It will be about whether the institution can prove that the classification decision was made on time, against the right criteria, using the right evidence.",
    },
    {
      type: "paragraph",
      text: `[DORA Article 50](${DORA}) requires Member States to establish effective, proportionate, and dissuasive penalties and gives competent authorities supervisory, investigatory, and remedial powers. The exact financial penalty framework for financial entities depends on national implementation. Separately, critical ICT third-party providers can face periodic penalty payments of up to 1% of average daily worldwide turnover for specified non-compliance.`,
    },
    {
      type: "paragraph",
      text: "What 2026 enforcement is likely to focus on, based on supervisory signalling:",
    },
    {
      type: "paragraph",
      text: "**Late initial notifications.** The cleanest failure. The timestamp is visible to the competent authority. NCAs are tracking submission timestamps. Repeated late filings will become an enforcement pattern.",
    },
    {
      type: "paragraph",
      text: "**Misclassification.** Harder but more serious. If a major incident is treated as non-major, the institution has no initial notification, no intermediate report, and no final report. The issue is not only the missed filing; it is the weakness in the incident classification framework. Institutions whose classification rates look anomalous against peers will face supervisory questions.",
    },
    {
      type: "paragraph",
      text: "**Poor final reporting.** Final reports that lack adequate root cause analysis, that reuse generic language across incidents, or that fail to demonstrate lessons learned will be flagged. The EBA's first-cycle observations specifically called out root cause analysis quality. A final report that does not explain root cause, total impact, remediation, and lessons learned gives the supervisor evidence that the incident process exists on paper but does not produce usable supervisory information.",
    },
    {
      type: "paragraph",
      text: "**Cross-regulation reporting.** Where an incident involves personal data, both DORA Article 19 and GDPR Article 33 may apply, with different content requirements and different competent authorities. Failures to handle the dual reporting correctly are a separate enforcement risk.",
    },
    {
      type: "paragraph",
      text: `For institutions dependent on critical ICT third-party providers (the ESAs [designated the first 19 such providers](${ESA_CTPP}) on 18 November 2025, including AWS, Microsoft Azure, Google Cloud, Bloomberg, LSEG, IBM, Tata Consultancy Services, and Orange), the problem extends into the contract stack. DORA's third-party risk framework requires contractual arrangements that support incident notification, cooperation, access, audit, and oversight. For critical providers, the operational question is whether provider-side notifications arrive fast enough, and with enough detail, for the financial entity to classify and report within its own DORA timelines.`,
    },
    {
      type: "heading",
      text: "What a DORA incident pipeline looks like",
    },
    {
      type: "paragraph",
      text: "A compliance pipeline for DORA incident reporting is built around the same four-layer pattern as other regulatory outputs, with the difference that it has to operate in real time during an incident.",
    },
    {
      type: "paragraph",
      text: `**Incident detection and classification connector.** Direct integration with the institution's SIEM, observability stack, and PagerDuty (or equivalent). When a high-severity incident is created, the pipeline triggers automatically. The classification engine pulls the data needed to evaluate the seven [RTS 2024/1772](${RTS_1772}) criteria: which services are affected (from the CMDB), how many customers are impacted (from the operational data store), what the criticality of the affected services is (from the CMDB and BCP), what the geographical spread is (from customer location data), and whether data has been compromised (from security alerts and DLP). The output is a draft classification with each criterion's evidence trail attached.`,
    },
    {
      type: "paragraph",
      text: "**Impact aggregation layer.** During the incident, customer and transaction impact data is pulled continuously and aggregated. By the time the classification call needs to be made, the incident commander sees a real-time view: \"X customers affected, Y transactions in flight, Z services degraded, services W are critical or important functions.\" This collapses the data assembly step from hours to seconds.",
    },
    {
      type: "paragraph",
      text: `**Notification template builder per NCA.** The [RTS 2025/301](${RTS_301}) content requirements and the [ITS 2025/302](${ITS_302}) XML structure are codified per the NCAs the institution reports to. When the classification is confirmed and the impact data is captured, the initial notification draft is generated automatically, with the technical facts pulled from the IR system, the impact data from the aggregation layer, and the institution's specific identifiers and contact information populated. The compliance lead reviews and authorises.`,
    },
    {
      type: "paragraph",
      text: "**Submission workflow with mandatory human approval.** Submission to the relevant NCA portal (CSSF eDesk, BaFin MVP, DNB, etc.) with capture of the acknowledgement and unique incident number. Submission is never automatic, a designated senior person must authorise every submission. The 72-hour intermediate report builds incrementally on the initial notification rather than being assembled from scratch. The 30-day final report builds on both prior submissions plus the full incident post-mortem.",
    },
    {
      type: "paragraph",
      text: `What this changes operationally: the technical team is freed to focus on incident response. The classification call is made with full data rather than partial visibility. The compliance team is reviewing a draft within the first 30 minutes, not assembling one in the third hour. The 4-hour window is comfortable rather than tight.`,
    },
    {
      type: "paragraph",
      text: "Three constraints worth being explicit about. First, the pipeline never makes the classification call autonomously, it produces the evidence and the draft, and a designated senior person authorises every submission. Second, the pipeline does not replace the incident response team's runbook. It runs alongside the technical response, surfacing the regulatory data that the technical team would otherwise have to assemble. Third, the pipeline is built for the institution's specific NCA stack, most institutions report to one primary NCA but may have additional notification obligations to ECB SSM, sectoral supervisors, and host-state regulators for cross-border activity.",
    },
    {
      type: "heading",
      text: "What changes after the pipeline is in place",
    },
    {
      type: "paragraph",
      text: "The most important change is what doesn't happen. The 4-hour clock doesn't get missed because the data assembly took too long. The CISO doesn't have to choose between joining the incident bridge and joining the compliance call. The compliance team isn't transcribing from PowerPoint into a portal under time pressure.",
    },
    {
      type: "paragraph",
      text: "What does happen: the institution accumulates a clean, structured library of every classified incident, including the ones classified as non-major, with consistent evidence trails. When the supervisor opens an examination on incident management, the institution can produce the evidence in hours rather than reconstructing it in weeks. When the institution's classification rates are benchmarked against peers, the institution can defend each call with the underlying criteria evaluation.",
    },
    {
      type: "paragraph",
      text: "For Critical ICT Third-Party Providers, the contract-level notification clauses become enforceable. The institution can show its NCA that it became aware of a provider-side incident within minutes of the provider's notification, not hours.",
    },
    {
      type: "heading",
      text: "What a diagnostic answers",
    },
    {
      type: "paragraph",
      text: "In 1-2 weeks, a Compliance Diagnostic for incident reporting maps the current state: how classification calls are being made today, what the average time-to-classification looks like for past incidents, where the data assembly bottlenecks are, what the audit trail looks like across the most recent 5-10 incidents, and what an automated workflow would change for the technical, compliance, and CISO teams.",
    },
    {
      type: "paragraph",
      text: "For institutions that have already had one incident reportable under DORA, the diagnostic is calibrated against the institution's own experience. For institutions that have been fortunate so far, the diagnostic uses the incident scenarios in the institution's own DORA testing program as the basis for the assessment.",
    },
    {
      type: "paragraph",
      text: `If the institution depends on Critical ICT Third-Party Providers, which, since [November 2025](${ESA_CTPP}), means most EU financial entities, the contract-level notification clauses become part of the diagnostic. Whether the providers' notifications actually arrive in a form the institution can act on within minutes is the operational question.`,
    },
  ],
};
