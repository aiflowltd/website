import type { BlogPost } from "@/data/blogPosts";

const COUNCIL_RIS_DEC_2025 =
  "https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/retail-investment-strategy-council-and-parliament-agree-on-package-to-empower-consumers-while-boosting-markets/";
const LOYENS_RIS =
  "https://www.loyensloeff.com/insights/news--events/news/provisional-agreement-on-the-retail-investment-strategy---what-fund-managers-need-to-know/";
const ELVINGER_RIS =
  "https://elvingerhoss.lu/insights/publications/political-agreement-eu-retail-investment-strategy-new-framework-retail";
const CMS_RIS =
  "https://cms-lawnow.com/en/ealerts/2025/12/eu-retail-investment-strategy-political-agreement-key-points-and-implications-for-eu-and-non-eu-firms";
const ASHURST_RIS =
  "https://www.ashurst.com/en/insights/mifid-iii-arrives-as-the-retail-investment-package-is-unveiled/";
const KL_GATES_RIS =
  "https://www.klgates.com/European-Commission-Adopts-Retail-Investment-Strategy-Package-with-the-Aim-to-Enhance-Investor-Protection-6-16-2023";
const DELOITTE_RIS =
  "https://www.deloitte.com/lu/en/services/consulting/perspectives/retail-investment-strategy-ris.html";
const KPMG_RIS =
  "https://kpmg.com/xx/en/our-insights/regulatory-insights/proposals-for-an-eu-retail-investment-strategy.html";
const ABBL_RIS =
  "https://www.abbl.lu/retail-investment-strategy-advocacy/";
const FCA_PS25_20 =
  "https://www.fca.org.uk/publications/policy-statements/ps25-20-supporting-informed-decision-making-final-rules-consumer-composite-investments";
const FSCOM_DORA_2026 =
  "https://fscom.co/blog/preparing-for-the-2026-dora-reporting-deadline-lessons-from-2025-every-firm-should-know/";
const DELOITTE_DORA =
  "https://panorays.com/blog/dora-strategy-for-2026/";

export const retailInvestmentStrategyPost: BlogPost = {
  id: "retail-investment-strategy-data-before-2028",
  title:
    "The Retail Investment Strategy Is Coming. Here's What Your Data Needs to Do Before 2028.",
  excerpt:
    "Value for money under the EU Retail Investment Strategy is a data infrastructure requirement, not a late-stage reporting exercise. What the December 2025 political agreement demands and how to build before 2028.",
  authorId: "mihai-anton",
  date: "May 18, 2026",
  readTime: "15 min read",
  category: "Finance",
  tags: ["Finance", "RIS"],
  image:
    "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=1200&h=600&fit=crop",
  content: [
    {
      type: "paragraph",
      text: `Following the sixth trilogue on 17 December 2025, the Council [announced on 18 December 2025](${COUNCIL_RIS_DEC_2025}) that the European Parliament and the Council had reached a provisional political agreement on the Retail Investment Strategy. Technical work to finalise the legal texts is expected to continue in early 2026. Once published in the Official Journal, Member States will have 24 months to transpose the directive changes, while most rules will apply 30 months after publication. PRIIPs changes are expected to apply earlier, after 18 months.`,
    },
    {
      type: "paragraph",
      text: "For the head of product or head of compliance at an EU asset manager, distributor, or insurance product manufacturer, that date sounds far away. It is not.",
    },
    {
      type: "paragraph",
      text: `The reason is the "value for money" requirement at the heart of the package. Firms will be obliged to identify and quantify every cost and charge borne by retail investors on every product they manufacture or distribute. They will be required to assess those costs against agreed peer-group standards and, for IDD products, against supervisory benchmarks. Products that fail the test cannot be approved for sale to retail investors.`,
    },
    {
      type: "paragraph",
      text: "This is not a reporting workflow that gets bolted on at the end. It is a data infrastructure requirement that touches fund accounting, transaction cost analysis, distribution agreements, advice fee data, and the peer-group definitions and supervisory benchmarks the ESAs and national authorities will publish. Building it in 2026-2027 is a controlled programme. Building it in 2028 while the rule is going live is the DORA experience, repeated.",
    },
    {
      type: "paragraph",
      text: "This post is for the firms that don't want a repeat of the DORA experience.",
    },
    {
      type: "heading",
      text: 'What "value for money" actually requires',
    },
    {
      type: "paragraph",
      text: `The RIS package, [agreed in trilogue on 17 December 2025](${COUNCIL_RIS_DEC_2025}), amends MiFID II, the UCITS Directive, the AIFMD, the IDD, the Solvency II Directive, and the PRIIPs Regulation. It is sometimes referred to as "MiFID III" because the MiFID II amendments are the most consequential single piece.`,
    },
    {
      type: "paragraph",
      text: `The value-for-money requirement, per the [Council's 18 December 2025 press release](${COUNCIL_RIS_DEC_2025}), requires retail investment firms to identify and quantify all costs and charges borne by investors and to assess whether total costs and charges are justified and proportionate. The assessment is made against agreed standards:`,
    },
    {
      type: "list",
      items: [
        `**Peer groupings** for products under MiFID, UCITS, and AIFMD. Manufacturers and distributors compare their products to a peer group containing a representative number of similar financial instruments.`,
        `**Supervisory benchmarks** for products under IDD. EIOPA develops the supervisory benchmarks, with national supervisory benchmarks operating during a four-year transition period from entry into force.`,
      ],
    },
    {
      type: "paragraph",
      text: "If costs and charges are not justified and proportionate against these standards, the product should not be approved for sale to retail investors. This is the product governance gate that didn't exist before.",
    },
    {
      type: "paragraph",
      text: "The other significant changes:",
    },
    {
      type: "list",
      items: [
        `**Cost transparency.** Annual disclosures must show the cumulative impact of all costs and charges on net returns. The PRIIPs Key Information Document is restructured, with a new "Product at a glance" section at the start.`,
        `**Inducement controls.** A more restrictive inducement test, with enhanced transparency on third-party payments. The Council moved the inducement test from Level 2 to Level 1 for legal clarity.`,
        `**Professional client opt-up.** Retail investors meeting two of three criteria (investment experience, portfolio size, or qualifications) can opt up to professional status.`,
        `**Marketing communications.** New requirements on how products are marketed, including a defined regime for "financial influencers" and third-party marketing.`,
      ],
    },
    {
      type: "paragraph",
      text: `The [Commission's original 2023 impact assessment](${KL_GATES_RIS}) identified the underlying issue. European retail investors face costs that, on average, run 40% higher than institutional investors. The Commission's view was that this difference reflects a structural lack of value for money rather than a justified premium for retail service.`,
    },
    {
      type: "paragraph",
      text: `The application timeline, per the [Loyens & Loeff analysis](${LOYENS_RIS}) of the December 2025 agreement: 24 months for Member State transposition after Official Journal publication, then 30 months from publication for application of most rules (except PRIIPs, which applies 18 months after publication). For an Official Journal publication in early-mid 2026, application falls in late 2028.`,
    },
    {
      type: "heading",
      text: "What the data demands look like",
    },
    {
      type: "paragraph",
      text: "The technical work the RIS imposes on a manufacturer or distributor is substantial because the data needed for the value-for-money assessment lives in five separate domains.",
    },
    {
      type: "paragraph",
      text: "**Total cost identification.** Every cost the investor bears, broken down by category. Ongoing fund charges (TER, OCF, management fee, performance fee). Transaction costs inside the fund (broker commissions, market impact, taxes). One-off costs (entry fees, exit fees, switch fees). Advice fees, where applicable. Distribution costs, where they pass through to the investor. For insurance-based investment products, the cost stack adds insurance charges, biometric risk premiums, and distribution loading.",
    },
    {
      type: "paragraph",
      text: "For most asset managers today, this data is fragmented. Fund accounting holds the ongoing charges. The OMS or middle office holds the trading costs. The product governance team has the entry/exit fees. The distribution agreements team has the inducement and fee-sharing arrangements. The KID and TER calculation is run quarterly or annually for regulatory disclosure but is not a real-time dataset.",
    },
    {
      type: "paragraph",
      text: "**Peer-group classification and benchmark data.** ESMA's peer groupings, when published, will define product categories with sufficient granularity to be meaningful for comparison. A product manufacturer will need to know, for each of its products: which peer group does this product fall into, what are the cost distributions in that peer group, and where does this product sit on those distributions. The peer-group data has to be ingested from ESMA, refreshed when ESMA updates it, and applied consistently across the product range.",
    },
    {
      type: "paragraph",
      text: "**Performance benchmarks.** Cost is one side of value for money; performance is the other. A high-cost product that delivers exceptional risk-adjusted returns may justify its costs. A low-cost product that underperforms its peer group may not. The performance side requires consistent return calculation, benchmarking against documented reference indices, and risk-adjustment methodology that survives supervisory challenge.",
    },
    {
      type: "paragraph",
      text: "**Distribution and advice context.** A product that delivers value for money on a direct-purchase basis may not deliver value for money when the full distribution cost is included. The data needed to make this assessment lives at the distributor, costs of advice, fees added at the platform, retrocession arrangements. For a manufacturer with multiple distribution channels, the per-channel value-for-money picture varies and has to be tracked.",
    },
    {
      type: "paragraph",
      text: `**Documented decision trail.** When a product fails the value-for-money test, the manufacturer or distributor cannot approve it for sale to retail investors. When a product passes, the documented assessment must be available for supervisory review. The agreement points to peer groupings for MiFID, UCITS and AIFMD products, and supervisory benchmarks for IDD products. That means supervisors will be assessing firms against structured comparison data, even if the final methodology is still to come.`,
    },
    {
      type: "paragraph",
      text: "This is the relational data model the RIS will demand. None of it exists today in a single integrated form at most firms.",
    },
    {
      type: "heading",
      text: 'What "do nothing yet" actually costs',
    },
    {
      type: "paragraph",
      text: "The temptation to wait is real. The final legal texts are not yet published. The detailed methodologies for peer groupings and IDD supervisory benchmarks are still to come. The operational format of future regulatory data, disclosures, and supervisory expectations is not yet fixed.",
    },
    {
      type: "paragraph",
      text: "Waiting still has a cost.",
    },
    {
      type: "paragraph",
      text: `If the legislation is published in the Official Journal by the end of H1 2026, Member States would have until around the end of H1 2028 to transpose the directive changes. Most rules would start applying around the end of 2028, with PRIIPs changes applying earlier.`,
    },
    {
      type: "paragraph",
      text: "That does not leave a clean two-year build window from the moment every detail is known.",
    },
    {
      type: "paragraph",
      text: "It leaves a moving implementation window where firms need to map cost data, build product-level cost views, classify products, document value-for-money decisions, and test governance workflows while the technical detail is still being finalised.",
    },
    {
      type: "paragraph",
      text: `DORA showed what happens when firms treat a data-infrastructure obligation as a late-stage reporting exercise. In the [ESAs' 2024 dry run for the Register of Information](${FSCOM_DORA_2026}), only 6.5% of almost 1,000 participating financial entities passed all data quality checks. [Deloitte's 2025 DORA survey](${DELOITTE_DORA}) showed uneven readiness after the application date: only 25% of entities felt compliant with ICT risk management, 48% had ICT incident management protocols ready, and only 8% reported full compliance in digital operational resilience testing and third-party risk management. For 46% of firms, the Register of Information was the most challenging task.`,
    },
    {
      type: "paragraph",
      text: "RIS creates the same pattern in a different domain. The question is not whether firms can write a value-for-money policy by 2028. The question is whether they can produce the product, cost, performance, distribution, and governance evidence behind it.",
    },
    {
      type: "paragraph",
      text: "The firms that build early have a different opportunity. The value-for-money assessment is, in effect, a competitive tool. A firm that can demonstrate consistent value for money across its product range, against peer-group benchmarks, has a marketing claim that survives supervisory scrutiny. A firm that produces this evidence only when required is in a defensive position. The asset managers and insurers that treat 2026-2027 as a value-for-money build phase end up with a story to tell distributors and platforms, not just a compliance return to file.",
    },
    {
      type: "heading",
      text: "Where this fits with the FCA equivalent",
    },
    {
      type: "paragraph",
      text: `For UK firms with EU subsidiaries, or EU firms with UK distribution, the picture is parallel. The FCA's Consumer Duty (PRIN 2A, applicable from July 2023 for new and existing products and July 2024 for closed products) imposes a fair-value test on every product sold to UK retail customers. The FCA's December 2025 [Policy Statement PS25/20](${FCA_PS25_20}) on Consumer Composite Investments creates a unified UK regime for retail investor disclosures.`,
    },
    {
      type: "paragraph",
      text: "The UK and EU regimes are not identical, but the underlying data demands are similar. A firm building a value-for-money capability for the EU RIS can extend it to satisfy the FCA's Consumer Duty fair-value requirement. A firm building for the FCA can extend it for the RIS. A firm building separately for each is doing the work twice.",
    },
    {
      type: "paragraph",
      text: `For US asset managers with European distribution, the RIS reaches non-EU manufacturers whose products are distributed in the EU. Funds distributed cross-border into the EU through UCITS wrappers or third-country regimes are in scope. The data demands transfer.`,
    },
    {
      type: "heading",
      text: "What a value-for-money pipeline looks like",
    },
    {
      type: "paragraph",
      text: "A compliance pipeline for the RIS value-for-money assessment is built around five layers, designed to be assembled in 2026-2027 while the technical standards are being finalised and refined in 2027-2028 as ESMA and EIOPA publish detail.",
    },
    {
      type: "paragraph",
      text: "**Fund accounting and cost data integration.** Connectors into the fund administrator, the OMS, the transaction cost analysis system, and the management company's fee schedules. The output is a per-product, per-period view of every cost the investor bears, broken down by category, attributable to the source system. Costs are calculated consistently across the product range and reconciled against the KID and TER disclosures.",
    },
    {
      type: "paragraph",
      text: "**Peer-group ingestion and classification.** Firms should assume they will need to ingest and refresh peer-group and benchmark data once the ESAs and national authorities publish the relevant methodology. The pipeline includes a connector to the published peer groupings when available, with a fallback to the firm's internal peer-group definitions in the interim period. Each product is classified into the appropriate peer group, with the classification refreshed on the cadence defined by the final technical standards. National supervisory benchmarks for IDD products are ingested through the equivalent NCA feeds, depending on the final publication format.",
    },
    {
      type: "paragraph",
      text: "**Value-for-money assessment engine.** The actual test. For each product, the engine compares cost and performance metrics against the peer group, identifies products that sit outside acceptable distributions, and surfaces them as exceptions. Exceptions trigger a documented review by the product governance committee. Products that fail the test and are not justified cannot be approved for ongoing sale.",
    },
    {
      type: "paragraph",
      text: "**Product governance workflow.** The decision workflow that takes the assessment, surfaces it to the product committee, captures the discussion and decision, and produces the audit trail. The workflow is configured to match the firm's existing product governance committee structure rather than replacing it. What changes is that the committee reviews an evidence-based assessment rather than producing the assessment.",
    },
    {
      type: "paragraph",
      text: "**Reporting and disclosure layer.** Generation of any data feeds to NCAs that the final RIS rules may require, depending on the final technical standards and publication format. Generation of the cumulative-impact disclosures on annual statements per the new RIS rules. Generation of the \"Product at a glance\" KID section content. Audit trail of every assessment, every decision, every supervisory submission.",
    },
    {
      type: "paragraph",
      text: `Three things are worth being explicit about. First, the pipeline is built ahead of the final technical standards, with the understanding that the standards will refine the details. Building the data infrastructure now, against the [political agreement](${COUNCIL_RIS_DEC_2025}), is a controlled programme. Refining the assessment logic when ESMA publishes the peer groupings is a much smaller piece of work than building the whole stack at that point.`,
    },
    {
      type: "paragraph",
      text: "Second, the value-for-money assessment is consequential. A product that fails the test cannot be approved for retail sale. The pipeline produces the evidence, but the decision sits with the product governance committee and the firm's board. The pipeline supports the governance; it does not replace it.",
    },
    {
      type: "paragraph",
      text: "Third, the work compounds. The data infrastructure built for RIS extends to Consumer Duty for UK distribution, to the firm's own management information for product profitability, and to the distribution conversations with platforms and advisors. Done well, this is not a compliance build. It is product governance infrastructure.",
    },
    {
      type: "heading",
      text: "What to do in 2026",
    },
    {
      type: "paragraph",
      text: "The next 18 months are the build window. The right sequence:",
    },
    {
      type: "paragraph",
      text: "**Q2-Q3 2026: diagnostic and data mapping.** Identify where every cost component lives today, what the gaps are against the value-for-money data model, and what the build sequence looks like. The diagnostic should answer: if the technical standards landed tomorrow, what would the firm need to build first, and how long would each component take.",
    },
    {
      type: "paragraph",
      text: "**Q4 2026 - Q2 2027: foundational data integration.** Build the connectors into fund accounting, OMS, transaction cost analysis, and the fee/inducement systems. Establish the consistent per-product cost view. This is the foundational layer; everything else depends on it.",
    },
    {
      type: "paragraph",
      text: "**Q3 2027 - Q1 2028: assessment engine and product governance workflow.** As the ESAs publish the technical detail on peer groupings and supervisory benchmarks, configure the assessment engine and the product governance workflow against the firm's existing committee structure. Pilot the workflow on a subset of the product range. Iterate.",
    },
    {
      type: "paragraph",
      text: "**Q2-Q4 2028: full coverage and parallel run.** Extend the pipeline to the full product range. Run the value-for-money assessment in parallel with the existing product governance for a full cycle. Refine. By the application date, the pipeline is in production and the committee is operating against evidence-based assessments.",
    },
    {
      type: "paragraph",
      text: "The alternative, waiting until Q3 2028 to start, is the position the DORA cohort found themselves in during 2024. The build window is open now. It closes when the technical standards land and supervisory expectations crystallise.",
    },
    {
      type: "heading",
      text: "What a diagnostic answers",
    },
    {
      type: "paragraph",
      text: "In 1-2 weeks, an AI Flow Compliance Diagnostic for the RIS maps the current state: where every cost component lives today, what data the firm produces in its existing product governance process, what the gap is to the value-for-money data model, and what the build sequence looks like against the implementation timeline.",
    },
    {
      type: "paragraph",
      text: "For an asset manager, the diagnostic is calibrated against the fund range, the distribution agreements, and the existing product governance structure. For an insurance product manufacturer, the diagnostic adds the IDD-specific data demands. For a distributor or platform, the diagnostic focuses on the inducement and advice-cost data and the distribution-context layer.",
    },
    {
      type: "paragraph",
      text: `For firms whose first reaction is "the texts are not final yet, we'll wait", the question is whether the firm wants to be among those with the data infrastructure ready before application, or among those still building when the rule goes live. DORA showed which side of that line is the better place to be.`,
    },
  ],
};
