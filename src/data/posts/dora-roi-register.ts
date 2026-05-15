import type { BlogPost } from "@/data/blogPosts";

const DORA =
  "https://eur-lex.europa.eu/eli/reg/2022/2554/oj";
const ITS =
  "https://eur-lex.europa.eu/eli/reg_impl/2024/2956/oj";
const EBA_DORA =
  "https://www.eba.europa.eu/activities/direct-supervision-and-oversight/digital-operational-resilience-act";
const CSSF_ROI =
  "https://www.cssf.lu/en/2026/02/dora-submission-timeframe-for-register-of-information-edesk-portal-open-as-of-11-february-2026/";
const AFME_ROI =
  "https://www.afme.eu/media/egqfikb1/dora-registers-of-information_afme-final.pdf";
const FSCOM_2026 =
  "https://fscom.co/blog/preparing-for-the-2026-dora-reporting-deadline-lessons-from-2025-every-firm-should-know/";
const DELOITTE_DORA =
  "https://panorays.com/blog/dora-strategy-for-2026/";
const ESA_CTPP =
  "https://www.eba.europa.eu/publications-and-media/press-releases/european-supervisory-authorities-designate-critical-ict-third-party-providers-under-digital";

export const doraRoiRegisterPost: BlogPost = {
  id: "dora-register-of-information-data-quality",
  title:
    "The DORA Register of Information: Why 93.5% of Firms Failed the Data Quality Test, and What to Build Instead of Spreadsheets",
  excerpt:
    "The Register of Information is a relational regulatory submission, not a compliance report. Why most EU firms failed the 2024 dry run, where the data actually lives, and what a pipeline that produces a clean filing every year looks like.",
  authorId: "mihai-anton",
  date: "May 15, 2026",
  readTime: "18 min read",
  category: "Finance",
  tags: ["Finance", "DORA"],
  image:
    "https://images.unsplash.com/photo-1579532582937-16c108930bf6?w=1200&h=600&fit=crop",
  content: [
    {
      type: "paragraph",
      text: `After year-end, a head of operational resilience at a regulated EU institution opens a calendar reminder that reads "DORA RoI submission." The exact submission window depends on the national competent authority, but the workflow is the same: every ICT third-party arrangement has to be mapped into the [DORA Register of Information](${DORA}) format and submitted through the relevant national channel.`,
    },
    {
      type: "paragraph",
      text: `Behind that reminder is one of the most painful workflows in the regulation. A structured return of ICT third-party contractual arrangements, mapped into [standardised templates](${ITS}), expressed through the ESA xBRL-CSV taxonomy, validated against cross-template data-quality checks, and submitted through the relevant national competent authority process.`,
    },
    {
      type: "paragraph",
      text: `In the [2024 ESAs dry run](${FSCOM_2026}), almost 1,000 financial entities submitted registers. Only 6.5% passed all 116 data-quality checks. In Luxembourg, the [CSSF reported](${CSSF_ROI}) that as of 16 March 2026, only 40% of required financial entities had submitted their RoI, even though the 31 March deadline was approaching. [Deloitte's 2025 DORA survey](${DELOITTE_DORA}) found that 46% of financial entities identified the Register of Information as the most challenging DORA task.`,
    },
    {
      type: "paragraph",
      text: "This is what the workflow actually looks like, where the data lives, what breaks, and what a pipeline that produces a clean submission every year is built out of.",
    },
    {
      type: "heading",
      text: "What the Register of Information actually is",
    },
    {
      type: "paragraph",
      text: `Article 28(3) of [Regulation (EU) 2022/2554 (DORA)](${DORA}) requires every financial entity in scope to maintain, at entity, sub-consolidated, and consolidated level, a register of all contractual arrangements covering ICT services provided by third parties. [Commission Implementing Regulation (EU) 2024/2956](${ITS}), adopted 29 November 2024, defines the format: 15 templates organised in groups, with foreign-key references between them, transmitted in xBRL-CSV.`,
    },
    {
      type: "paragraph",
      text: `The 15 templates are not a single spreadsheet. They are a relational data model. The "entity" templates (B_01.01 through B_01.03) identify who is reporting and the group structure. The "arrangement" templates capture contractual relationships with direct ICT providers. The "services" templates list every ICT service the entity uses. The "provider" templates identify the legal entity behind each arrangement, including a Legal Entity Identifier (LEI) or, where unavailable, an EU Unique Identifier (EUID). Critical or important functions require the entire subcontracting chain mapped, with a rank assigned to each provider based on how close they sit to the financial entity.`,
    },
    {
      type: "paragraph",
      text: `Foreign-key integrity is mandatory. If template B_02.02 references an arrangement that doesn't exist in B_02.01, the submission fails. If an LEI is malformed or doesn't resolve against the GLEIF database, the submission fails. If a service is marked as supporting a critical or important function but no subcontracting chain is provided, the submission fails. The [EBA validation rules](${EBA_DORA}) run 116 data-quality checks covering existence, conditional logic, value-range constraints, and cross-template consistency. That was the test the [2024 dry run](${FSCOM_2026}) measured firms against.`,
    },
    {
      type: "paragraph",
      text: "This is not a compliance report. It is a regulatory-grade data submission. The reason 93.5% of firms in the 2024 dry-run did not pass all checks is that most of them treated it like a compliance report.",
    },
    {
      type: "heading",
      text: "Where the data lives in a typical institution",
    },
    {
      type: "paragraph",
      text: "The data needed for a clean RoI submission sits in at least seven places across a typical bank or investment firm. Each lives in a different system, owned by a different team, with a different update cadence.",
    },
    {
      type: "paragraph",
      text: "Procurement systems hold the contracts themselves: SAP Ariba, Coupa, or internal procurement portals. The contract PDF tells you who the provider is, the service scope, the contract dates, the renewal terms, and the locations where services are delivered. It does not, in most institutions, tell you whether the service supports a critical or important function, that's a designation the business owner has to make, separately, often in a different system.",
    },
    {
      type: "paragraph",
      text: "The CMDB or IT asset register holds the technical view: which applications run on which infrastructure, which providers underpin which services, and which services have which downstream dependencies. ServiceNow, BMC Helix, or a homegrown system. Rarely is the CMDB linked back to the procurement system by a clean foreign key, the same provider often has a different name in the CMDB and in Ariba, or a parent entity in one and a subsidiary in the other.",
    },
    {
      type: "paragraph",
      text: "The vendor risk management system holds the assessment data: SOC 2 reports, security questionnaires, criticality ratings, exit plans. Vendor risk usually runs on a separate platform, OneTrust, ProcessUnity, or internally. The ratings here are what populate the criticality fields in the RoI, but they were captured for a different purpose and don't always map cleanly to the DORA criticality definitions.",
    },
    {
      type: "paragraph",
      text: "Legal entity data, LEIs, EUIDs, country of incorporation, lives in either a third-party data feed (GLEIF, Bureau van Dijk, Refinitiv) or in scattered fields across the other systems. For multinational providers with hundreds of legal entities, picking the right LEI for the entity that actually signed the contract is non-trivial.",
    },
    {
      type: "paragraph",
      text: "The corporate structure data, which subsidiaries are in scope, which branches belong to which entity, which group the consolidating entity sits at the top of, lives in finance or corporate secretary systems. This populates the consolidation templates.",
    },
    {
      type: "paragraph",
      text: "Outsourcing registers maintained for pre-DORA regulations (EBA Outsourcing Guidelines, BaFin MaRisk AT 9, local national requirements) often contain a different cut of the same data. These were built to satisfy different validation rules and don't migrate cleanly.",
    },
    {
      type: "paragraph",
      text: "The people who know the actual answers, the business owners of each contract, the relationship managers for each provider, the technical owners of each service, are not in any of these systems. They are in heads, emails, and one-off conversations.",
    },
    {
      type: "paragraph",
      text: "This is the data handoff problem. The RoI is a single regulatory output that requires consistent, validated, cross-referenced data pulled from seven systems and dozens of human owners, once a year, against a tight deadline.",
    },
    {
      type: "heading",
      text: "How teams handle it today",
    },
    {
      type: "paragraph",
      text: "The pattern observed across regulated EU institutions in 2025 was consistent. The DORA programme manager builds a master spreadsheet, or a Microsoft Teams space, or a SharePoint site, with one tab per template. Business owners are assigned contracts and asked to populate the fields. A central team chases responses, reconciles inconsistencies, and runs validation manually.",
    },
    {
      type: "paragraph",
      text: `The European Supervisory Authorities have explicitly discouraged spreadsheets for this exact reason. [AFME's industry feedback](${AFME_ROI}) on the 2025 cycle named "lack of alignment between NCAs" and "inconsistent and inaccessible approaches to validation" as the two largest root causes of failure. The [CSSF in Luxembourg](${CSSF_ROI}), in its February 2026 guidance, advised firms to "submit the register of information as soon as possible so that they have sufficient time to make any necessary corrections", because the iteration loop between submission, rejection, correction, and resubmission was where most of the calendar disappeared.`,
    },
    {
      type: "paragraph",
      text: "What this looks like operationally: in January, the DORA team starts chasing 200 business owners for 800 contracts. By February, ~70% of contracts have data, half of it incomplete. In early March, the team runs the first validation pass and finds that LEIs are malformed for 30% of providers, subcontracting chains are missing for half the critical-function services, and 20% of contracts have date fields in the wrong format. By mid-March, the central team is doing manual data entry on behalf of business owners to hit the NCA deadline. By the submission date, the file passes the NCA's checks. Three weeks later, the ESA validation comes back with rejections. The cycle starts again.",
    },
    {
      type: "paragraph",
      text: `For the 2026 reporting cycle, the reference date was 31 December 2025. National deadlines clustered between 1 March (CAA Luxembourg for insurers) and 31 March (the ESA consolidation deadline). The submission must be a plain-CSV file structured per the [ESA taxonomy](${ITS}), enclosed in a .zip following a predefined folder structure, transmitted via national portals (CSSF eDesk, BaFin MVP, DNB digital reporting environment). [Lessons from the 2025 cycle](${FSCOM_2026}) show how tightly those windows compress in practice.`,
    },
    {
      type: "paragraph",
      text: "This workflow burns 6-12 weeks of senior compliance and operational risk time, every year, for an output that does not change in shape from one cycle to the next. The data underneath does change, new contracts get signed, providers get acquired, subcontractors get added, but the templates, the validation rules, and the submission mechanism are stable.",
    },
    {
      type: "paragraph",
      text: "That stability is what makes it automatable.",
    },
    {
      type: "heading",
      text: "What gets enforced, and what regulators are watching",
    },
    {
      type: "paragraph",
      text: `[DORA Article 50](${DORA}) leaves financial-entity penalty frameworks to national implementation. Member States must give competent authorities effective, proportionate, and dissuasive sanctioning and remedial powers, but the exact fine levels differ by jurisdiction. Separately, critical ICT third-party providers can face periodic penalty payments of up to 1% of average daily worldwide turnover for continued non-compliance with oversight requirements.`,
    },
    {
      type: "paragraph",
      text: "The more immediate risk for a flawed RoI is operational and supervisory: rejection, correction, resubmission, supervisory questions, and a data-quality record that may influence future reviews. The headline fine has not yet landed in the public domain for an RoI submission failure specifically. 2026 is the first year of active enforcement.",
    },
    {
      type: "paragraph",
      text: "What has landed is the pattern of supervisory scrutiny. BaFin published a list of submission requirements specific to ICT services supporting critical functions and stated that it would scrutinise dependencies on US hyperscaler providers. Supervisors are already using DORA data to assess operational resilience, incident management, and third-party concentration risk. France's ACPR named third-party contract compliance as one of three 2026 ICT supervisory priorities.",
    },
    {
      type: "paragraph",
      text: `The Register is not just an administrative return. It is the dataset supervisors use to understand ICT third-party dependency and concentration risk across the financial system. That became more important on [18 November 2025](${ESA_CTPP}), when the ESAs designated the first 19 critical ICT third-party providers under DORA, including AWS, Microsoft Azure, Google Cloud, Bloomberg, London Stock Exchange Group, IBM, Tata Consultancy Services, and Orange.`,
    },
    {
      type: "paragraph",
      text: "Financial entities already had to document ICT third-party arrangements in the RoI. The CTPP designation makes the concentration-risk use case explicit: if a firm's RoI cannot accurately show which critical or important functions depend on which providers and subcontractors, the issue is not only a filing-quality problem. It is a third-party risk visibility problem.",
    },
    {
      type: "paragraph",
      text: "What does this mean for an institution that submits a flawed RoI? In the short term: rejection, resubmission, supervisory dialogue, and a record of poor data quality on file. In the medium term: prioritisation for on-site inspection. In the long term: the institution becomes one of the firms whose RoI failures are referenced when the first formal penalty under Article 50 lands.",
    },
    {
      type: "heading",
      text: "What a clean RoI pipeline looks like",
    },
    {
      type: "paragraph",
      text: "A compliance pipeline for the Register of Information is built around four layers. None of them are individually novel. The value is in the integration.",
    },
    {
      type: "paragraph",
      text: "**Ingestion layer.** Connectors into the systems where the source data lives. Procurement (Ariba, Coupa, contract management systems via API). CMDB (ServiceNow, BMC). Vendor risk (OneTrust, ProcessUnity). Legal entity data (GLEIF API for LEI validation, internal corporate structure feeds). Outsourcing registers maintained for prior regulations. The ingestion layer pulls structured data where it exists, and ingests semi-structured data (contract PDFs, vendor reports) where structure has to be extracted.",
    },
    {
      type: "paragraph",
      text: `**Normalisation and mapping layer.** This is where the data handoff problem gets solved. Each source system has its own way of identifying a provider, a service, a contract. The mapping layer reconciles these, the provider "Amazon Web Services, Inc." in Ariba, "AWS" in the CMDB, and a specific LEI from GLEIF resolve to a single canonical entity. The same logic applies to services, contracts, and locations. This layer is what makes the relational data model in [Implementing Regulation 2024/2956](${ITS}) actually work.`,
    },
    {
      type: "paragraph",
      text: `**Validation layer.** The [116 EBA data-quality checks](${EBA_DORA}), applied at the point of data entry rather than at submission time. LEI format checks against the GLEIF database. Foreign-key integrity between templates. Conditional mandatory field logic (if service supports critical function, subcontracting chain required). Closed-list value validation against the EBA taxonomy. Cross-template consistency. The validation layer is what closes the gap between a submission that passes the NCA's first-line checks and a submission that survives the ESA's second-line validation.`,
    },
    {
      type: "paragraph",
      text: `**Output and audit-trail layer.** Generation of the xBRL-CSV submission package, structured per the [ESA taxonomy](${ITS}) and packaged in the .zip format the NCAs accept. Submission via the national portal (or, where the portal accepts API submission, automated). Capture of acknowledgements, error messages, and rejection reasons. Full audit trail of every data point: which system it came from, when it was extracted, who validated it, what changed since the last cycle.`,
    },
    {
      type: "paragraph",
      text: "Three things are worth being explicit about. First, this is not a SaaS replacement for the source systems. The data continues to live in procurement, CMDB, vendor risk, and legal entity systems where it belongs. The pipeline reads from those systems and produces the regulatory output. Second, the pipeline is built to run in the institution's environment, with the institution's data, integrated with the institution's identity and access controls. Third, the work compounds. Once the pipeline is running, the 2027 cycle is incremental updates to the 2026 dataset. The 6-12 weeks of manual effort collapse into ongoing maintenance.",
    },
    {
      type: "heading",
      text: "What to do before the 2027 cycle starts",
    },
    {
      type: "paragraph",
      text: "The 2026 submission window has closed for most jurisdictions. For institutions that just finished a manual scramble, the question is not whether to automate but when.",
    },
    {
      type: "paragraph",
      text: "The right time is now. The 2027 reference date will be 31 December 2026. Building the pipeline takes 4-8 weeks for the first regulatory output. Working backwards from that, starting the diagnostic in Q2 or Q3 of 2026 puts an institution in a position where the 2027 cycle is the first one that runs through automation, not the year after.",
    },
    {
      type: "paragraph",
      text: "What a diagnostic answers in 1-2 weeks: where each of the 15 templates' data sources sit today, which sources are clean and which are not, what the current manual workflow costs in person-time, where the highest-risk gaps are, and what a phased automation roadmap looks like. The output is not a sales pitch. It is a map of the institution's own data handoff problem, with priorities attached.",
    },
    {
      type: "paragraph",
      text: "If the 2026 submission was clean and on time, the question is different: how much senior time did it take, and how much of that time was the team doing work that the data systems should have been doing instead.",
    },
  ],
};
