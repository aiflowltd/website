import type { BlogPost } from "@/data/blogPosts";

const MIFIR_ART26 =
  "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32014R0600";
const RTS_22 =
  "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32017R0590";
const INFINOX_FINAL_NOTICE =
  "https://www.fca.org.uk/publication/final-notices/infinox-2025.pdf";
const INFINOX_PRESS =
  "https://www.fca.org.uk/news/press-releases/fca-issues-first-fine-transaction-reporting-failures-under-mifir";
const SIGMA_PRESS =
  "https://www.fca.org.uk/news/press-releases/fca-fines-sigma-broking-limited-transaction-reporting-failures";
const MARKET_WATCH_82 =
  "https://www.fca.org.uk/publications/newsletters/market-watch-82";
const MARKET_WATCH_81 =
  "https://www.fca.org.uk/publications/newsletters/market-watch-81";
const DP24_2 =
  "https://www.fca.org.uk/publications/discussion-papers/dp24-2-improving-uk-transaction-reporting-regime";
const CP25_32 =
  "https://www.fca.org.uk/publications/consultation-papers/cp25-32-improving-uk-transaction-reporting-regime";
const FCA_FIRDS =
  "https://www.fca.org.uk/firms/financial-instruments-reference-data-system-firds";
const ESMA_FIRDS =
  "https://www.esma.europa.eu/databases-library/registers-and-other-esma-data/firds";
const ACA_MW82 =
  "https://www.acaglobal.com/industry-insights/regulatory-reporting-lessons-from-fcas-market-watch-82/";
const KAIZEN_ENFORCEMENT =
  "https://www.kaizenreporting.com/fca-market-watch-81-82-overview-of-fca-final-notices-enforcement-actions/";
const ESMA_TR_CONSULTATION =
  "https://www.esma.europa.eu/press-news/esma-news/esma-consults-transaction-data-reporting-under-mifir";

export const mifidTransactionReportingPost: BlogPost = {
  id: "mifid-ii-transaction-reporting-validation-vs-accuracy",
  title:
    "MiFID II Transaction Reporting: Why Firms Pass Validation and Still Get Fined",
  excerpt:
    "ARM validation is not accuracy. Why Infinox and Sigma were fined for reports the flow accepted, what Article 26 and RTS 22 actually require, and what a five-layer pipeline changes before the FCA calls.",
  authorId: "mihai-anton",
  date: "May 17, 2026",
  readTime: "16 min read",
  category: "Finance",
  tags: ["Finance", "MiFIR"],
  image:
    "https://images.unsplash.com/photo-1659707124402-1fdbd5a8e9c7?w=1200&h=600&fit=crop",
  content: [
    {
      type: "paragraph",
      text: `In January 2025, the Financial Conduct Authority issued its [first fine for transaction reporting failures under UK MiFIR](${INFINOX_PRESS}). The fine was £99,200, imposed on Infinox Capital Limited for failing to submit 46,053 transaction reports between October 2022 and March 2023. The missing reports related to single-stock CFD trades executed through one corporate brokerage account, representing approximately 60% of Infinox's single-stock CFD business line.`,
    },
    {
      type: "paragraph",
      text: `Six months later, the FCA [fined Sigma Broking Limited £1,087,300](${SIGMA_PRESS}), reduced from £1,553,300 after settlement discount, for incomplete and inaccurate transaction reporting over a five-year period. The deficiencies affected 924,584 transactions, close to 100% of reportable transactions undertaken by all of Sigma's trading desks during the relevant period.`,
    },
    {
      type: "paragraph",
      text: `The lesson from both [Final Notices](${INFINOX_FINAL_NOTICE}) is not that transaction reporting was absent as a concept. The lesson is that validation is not accuracy. A report can be accepted by the reporting flow and still be wrong when tested against the firm's source records, trading capacity logic, instrument reference data, decision-maker fields, or business-line configuration.`,
    },
    {
      type: "paragraph",
      text: `This is the structural problem with MiFID transaction reporting under [Article 26 of UK MiFIR](${MIFIR_ART26}). A firm can pass every ARM validation rule, the FCA's automated checks, and still be in material breach. The FCA is increasingly noticing first and contacting the firm afterwards. Back-reporting then takes months, and the fine is calculated per missing or incorrect report.`,
    },
    {
      type: "heading",
      text: "What Article 26 actually requires",
    },
    {
      type: "paragraph",
      text: `[Article 26(1) of MiFIR](${MIFIR_ART26}) (Regulation (EU) No 600/2014, retained in UK law as UK MiFIR) requires investment firms that execute transactions in financial instruments to report complete and accurate details of those transactions to the competent authority as quickly as possible, and no later than the close of the following working day (T+1).`,
    },
    {
      type: "paragraph",
      text: `The report has 65 fields per transaction, defined under [RTS 22](${RTS_22}) (Commission Delegated Regulation (EU) 2017/590). The fields cover identification of the firm, the buyer, the seller, the instrument, the trading venue, the date and time of execution, the quantity, the price, the currency, the venue MIC, the country of the branch responsible for the person making the investment decision, and the identity of the investment decision-maker and the execution decision-maker within the firm.`,
    },
    {
      type: "paragraph",
      text: "Two of those fields, the Investment Decision Maker (field 57) and the Execution Decision Maker (field 59), are where many firms create errors they don't catch. Different validations apply depending on the firm's trading capacity (DEAL, MTCH, AOTC). The same logic applied across different trading capacities produces field combinations that pass validation but are wrong.",
    },
    {
      type: "paragraph",
      text: `The reportable instrument universe depends on the relevant instrument reference data. For UK MiFIR, that includes [FCA FIRDS](${FCA_FIRDS}). For EU MiFIR, the equivalent reference data sits with [ESMA FIRDS](${ESMA_FIRDS}). For each transaction, the instrument must be in the relevant FIRDS as of the transaction date. The FCA's top rejection reasons under MiFIR have consistently included "instrument is not valid in reference data on transaction date" (CON-412) and "underlying instrument is not valid in reference data on transaction date" (CON-472).`,
    },
    {
      type: "paragraph",
      text: "The FCA receives transaction reports through Approved Reporting Mechanisms, typically a vendor (Bloomberg, Cappitech, UnaVista, Kaizen's ARMs) that ingests the firm's data, runs validation, and submits to the FCA on the firm's behalf. The ARM checks formal validity. It does not check whether the data the firm sent matches the firm's actual books and records.",
    },
    {
      type: "paragraph",
      text: `The reconciliation requirement is in [RTS 22 Article 15](${RTS_22}): firms must check the timeliness, accuracy, and completeness of every report and the compliance of individual data fields with the standards in Annex 1. The FCA provides Market Data Processor extracts on request, firms can pull samples of what the FCA actually received, and the FCA has explicitly told firms it wants them to use that capability to reconcile against their internal records.`,
    },
    {
      type: "paragraph",
      text: `In [Market Watch 82](${MARKET_WATCH_82}), published 23 July 2025, the FCA disclosed that it had received 241 breach notifications in Q1 2025 alone. [ACA Group's review of 2025 transaction reporting submissions](${ACA_MW82}) found that 93% contained at least one reporting error.`,
    },
    {
      type: "heading",
      text: "Where the data lives and where the errors come from",
    },
    {
      type: "paragraph",
      text: "Five systems contribute to a transaction report.",
    },
    {
      type: "paragraph",
      text: "The Order Management System holds the order itself: who placed it, when, on what instrument, in what quantity, at what price limit. For a firm acting as principal versus agent, the same trade has different reporting implications. For a firm with multiple trading desks, the desk identification feeds the Investment Decision Maker field.",
    },
    {
      type: "paragraph",
      text: "The execution venue or counterparty produces the trade confirmation. Trades on venue (regulated market, MTF, OTF, systematic internaliser) carry a Market Identifier Code that must match FIRDS. Off-venue trades require additional fields. CFDs and other derivatives have specific instrument identification logic that diverges from cash equities.",
    },
    {
      type: "paragraph",
      text: "The reference data systems, internal or vendor-supplied (Refinitiv, Bloomberg, MarketAxess), hold the instrument data that maps an internal trade record to the ISIN, FIGI, or other identifier required for the report. For new instruments or instruments traded on new venues, the reference data is the first place errors enter.",
    },
    {
      type: "paragraph",
      text: "The client static data system holds counterparty identifiers: LEIs for legal entities, national identifiers for individuals (the format depends on the country), the country of the branch. LEIs that have lapsed (LEIs require annual renewal) produce reports that pass syntactic validation but reference invalid entities.",
    },
    {
      type: "paragraph",
      text: `The reporting engine, the system that produces the RTS 22 record from the upstream data, applies the field mapping logic, the trading capacity logic, the decision-maker logic, and the venue logic. This is where most material errors are introduced. The [Infinox case](${INFINOX_FINAL_NOTICE}) is the example: when the firm launched single-stock CFDs in October 2022, the new product line was not added to the firm's reporting logic. A single individual was responsible for identifying which financial instruments were reportable for new business lines. There were no controls to scrutinise this process. The result: 60% of the new business was simply not reported.`,
    },
    {
      type: "paragraph",
      text: `The [Sigma Broking case](${SIGMA_PRESS}) followed a different pattern. The firm's transaction reporting systems were set up incorrectly. The errors persisted uncorrected because the firm did not have processes to identify them. 924,584 transactions over five years, close to 100% of the firm's reporting, were incorrect. The FCA's monitoring identified the issue in May 2023; the firm confirmed the final scope in February 2025, after an independent review.`,
    },
    {
      type: "paragraph",
      text: `This is the pattern that the FCA has been signalling in [Market Watch 70](${MARKET_WATCH_81}) onwards. The errors are not random. They are structural, driven by business change without adequate governance, by reliance on ARM validation as the only quality control, and by the absence of independent testing against the firm's own books and records.`,
    },
    {
      type: "heading",
      text: "How firms handle it today",
    },
    {
      type: "paragraph",
      text: "The conventional setup at a mid-sized investment firm: an internal reporting team or shared regulatory operations function feeds trades from the OMS and execution systems into the ARM, monitors daily reject rates, fixes rejected reports, and runs a quarterly or annual review.",
    },
    {
      type: "paragraph",
      text: `The reject rate is the metric most firms watch. A reject is a report that the ARM or the FCA refused to accept, a formal validation failure. A 99% acceptance rate looks good and is reportable in management information. What it doesn't catch is reports that were accepted but are wrong, what [Kaizen Reporting](${KAIZEN_ENFORCEMENT}) in its FCA analysis called the "base of the iceberg": their public-fines analysis found that 65% of fined firms' transactions were reported incorrectly or not at all, while only 35% were both validated and accurate.`,
    },
    {
      type: "paragraph",
      text: "Quarterly or annual reviews catch some of this, but they catch it slowly. A firm that runs an annual review finds a structural error 12 months after it was introduced. Back-reporting then takes another 6-12 months. The penalty is calculated per missing or incorrect report, so the longer the error has been live, the larger the eventual fine.",
    },
    {
      type: "paragraph",
      text: `The [Infinox calculation](${INFINOX_FINAL_NOTICE}) is the worked example. The FCA used a baseline of £2.00 per missing transaction report, then multiplied by a seriousness factor (level 3, 20%), added aggravating factors (10% uplift for delayed self-reporting and prior reporting issues), and applied a deterrence multiplier of 7. The pre-discount fine was £141,843. After the 30% early-settlement discount: £99,200.`,
    },
    {
      type: "paragraph",
      text: `For [Sigma Broking](${SIGMA_PRESS}), the same logic produced a pre-discount fine of £1,553,300, settled at £1,087,310.`,
    },
    {
      type: "paragraph",
      text: "What gets a firm to that calculation is not malice or systemic negligence. It is the absence of a control framework that tests source data against submitted reports, on a continuous basis, across every field that RTS 22 requires.",
    },
    {
      type: "heading",
      text: "What the FCA is signalling for 2026",
    },
    {
      type: "paragraph",
      text: `[Market Watch 81](${MARKET_WATCH_81}) (November 2024) and [Market Watch 82](${MARKET_WATCH_82}) (July 2025) together signal a shift in supervisory tone. The FCA's expectations are now explicit:`,
    },
    {
      type: "paragraph",
      text: "Firms must prioritise under-reporting, fixing missing transactions before addressing less material errors. Firms must remediate root causes before back-reporting. Firms must ring-fence resources for remediation rather than treating it as an extension of business-as-usual work. Firms must embed transaction reporting governance in every change initiative, every new business line, every system migration, every venue addition. Firms must proactively engage with the FCA, disclosing delays and constraints early. Firms must sustain continuous monitoring rather than relying on periodic reviews.",
    },
    {
      type: "paragraph",
      text: `The Q1 2025 figure of 241 breach notifications received by the FCA is significant. The [Sigma fine in 2025](${SIGMA_PRESS}) is the second under MiFIR. The FCA's penalty reasoning is already clear from the [Infinox Final Notice](${INFINOX_FINAL_NOTICE}): the FCA applied a deterrence multiplier of 7 because it did not want transaction reporting fines treated as a cost of doing business.`,
    },
    {
      type: "paragraph",
      text: `For firms that have not yet been contacted by the FCA, the question is not whether the supervisor will look at their reporting. It is whether the firm will identify and self-report errors first, or whether the FCA's automated monitoring will identify them first. The [Infinox Final Notice](${INFINOX_FINAL_NOTICE}) was explicit: the FCA expects firms to be notified "in a timely manner and not only once prompted by the Authority". The aggravating factor for delayed self-reporting added 10% to Infinox's fine.`,
    },
    {
      type: "heading",
      text: "What a clean transaction reporting pipeline looks like",
    },
    {
      type: "paragraph",
      text: "A transaction reporting pipeline that produces accurate reports and catches errors at source has five layers.",
    },
    {
      type: "paragraph",
      text: "**Trade capture connector.** Direct ingestion from the OMS, execution platforms, and the firm's internal trade store. The connector captures every reportable transaction at the point of execution, including the trading capacity, the decision-maker identifiers, and the venue context. Anything that happens after this layer is downstream of clean source data; anything missing here is missing everywhere.",
    },
    {
      type: "paragraph",
      text: `**Instrument enrichment and FIRDS reconciliation.** Every transaction is enriched with the instrument data required by [RTS 22](${RTS_22}): ISIN, CFI code, underlying instrument identifiers, venue context. Enrichment uses the firm's reference data feeds, with a real-time check against the relevant FIRDS ([FCA FIRDS](${FCA_FIRDS}) for UK MiFIR firms, [ESMA FIRDS](${ESMA_FIRDS}) for EU MiFIR firms) to confirm the instrument exists in reference data on the transaction date. Instruments that fail the FIRDS check are routed to a manual review queue before they enter the reporting flow, not after they've been rejected.`,
    },
    {
      type: "paragraph",
      text: `**RTS 22 reporting logic engine.** Field-by-field mapping per the 65 fields in RTS 22, with the conditional logic for trading capacity, the decision-maker fields, the branch country fields, and the venue logic applied per the firm's actual operating model. The engine is configured per business line, so that when a new product launches (like Infinox's move into single-stock CFDs), the field mapping is reviewed and signed off before the first trade is reported, not after. New business is a controlled change to the engine, not an exception to it.`,
    },
    {
      type: "paragraph",
      text: "**ARM submission and MDP reconciliation loop.** Submission to the ARM in the format required (typically XML per the FCA's transaction reporting specifications). After submission, the pipeline pulls the FCA's Market Data Processor extracts on a defined cadence and reconciles them against the firm's source data. Mismatches, fields the firm sent that the FCA received differently, or transactions in the firm's records that didn't appear in the FCA's extract, are flagged for investigation. This is the test that catches errors that pass validation.",
    },
    {
      type: "paragraph",
      text: `**Errors and omissions tracker.** When discrepancies are found, the tracker manages the breach notification workflow: the description of the issue, the root cause analysis, the population of transactions affected, the remediation plan, the back-reporting status, and the FCA notification. The FCA's [Market Watch 82](${MARKET_WATCH_82}) expectations on breach notification quality are codified in the tracker, every notification clearly describes the issue, names the root cause, and includes a timeline.`,
    },
    {
      type: "paragraph",
      text: "What changes when this is in place: the firm sees its own errors before the FCA does. New business lines get reported correctly from day one because the reporting logic is part of the change process. Back-reporting, when it's required, is mechanical because the source data and the submitted data are reconciled continuously. The 241-breach-notification queue becomes 241 self-identified, well-documented breaches rather than 241 calls from the FCA.",
    },
    {
      type: "heading",
      text: "What's worth doing now",
    },
    {
      type: "paragraph",
      text: `The FCA started the review of the UK transaction reporting regime with [Discussion Paper DP24/2](${DP24_2}), which closed in February 2025. It has now moved to [Consultation Paper CP25/32](${CP25_32}), published in November 2025 and closed for consultation in February 2026. The FCA says it will publish feedback and a Policy Statement after reviewing responses. [ESMA published its own consultation](${ESMA_TR_CONSULTATION}) on transaction data reporting in October 2024. Changes to both regimes are expected through 2026 and 2027.`,
    },
    {
      type: "paragraph",
      text: "This is the right window for two reasons. First, firms that fix the structural issues now will absorb the regime changes through their existing controls, rather than discovering during the next regime change that their current setup was wrong all along. Second, the FCA has been explicit that 2026 supervisory priorities include transaction reporting. Firms that self-identify and self-remediate before being contacted are in a categorically different position from firms that wait.",
    },
    {
      type: "paragraph",
      text: "A diagnostic answers in 1-2 weeks: where in the reporting chain errors are most likely, what the current control framework actually catches, how the firm would respond if the FCA's automated monitoring flagged a discrepancy tomorrow, and what a remediation roadmap looks like ahead of the FCA's expected enforcement tempo through 2026.",
    },
    {
      type: "paragraph",
      text: `If the firm has been through a recent business change, new product line, new venue, system migration, M&A, the question is sharper. Both [Infinox](${INFINOX_FINAL_NOTICE}) and [Sigma's](${SIGMA_PRESS}) errors began with structural changes that were not reflected in the reporting setup. The firms didn't know what they didn't know until the FCA called.`,
    },
  ],
};
