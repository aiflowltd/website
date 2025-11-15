import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Zap, CheckCircle2, Calendar, Building } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudies: Record<string, any> = {
    "oil-gas-invoice-automation": {
      title: "Oil & Gas Invoice Automation with Databricks & Azure",
      client: "Top-5 Oil & Gas Firm",
      industry: "Oil & Gas",
      image: caseStudy1,
      duration: "12 months",
      teamSize: "4 engineers",
      challenge: "Tens of thousands of unstructured invoices from various sources needed automation",
      challengeDetail: "Our client reached out in 2023 with a comprehensive plan to automate as much of their processes as possible. The problem we helped solve was the ingestion of unstructured documents from thousands of sources, each with tens of document types, arriving daily or monthly. There was no standardized API or generic way to extract prices, cap tables, accounting data, locations, and financial information from those documents. Legacy methods weren't scalable, and accuracy was too low to be useful. With AI picking up and competitors leveraging it for smart automation, our client needed competent people with relevant expertise to work on the problem end-to-end.",
      solution: "Built end-to-end ETL pipeline with Databricks on Azure, AI document intelligence, and Power BI",
      solutionDetail: "We implemented the solution on Microsoft Azure, which the client was already familiar with. The pipeline captured data from email attachments or SharePoint, triggered jobs for each file, used Databricks workflows and AI models to parse documents and extract information, wrote to parquet files, curated data into Azure SQL Database, and created PowerBI reports for business decision-making.",
      solutionPoints: [
        "Discovery: reviewed existing components, understood shortcomings, and aligned tech decisions with business goals",
        "Design: created 12-month roadmap with quarterly goals, bi-weekly syncs, and transparent tracking",
        "Implementation: built solid foundation with scalable Databricks environment and clean code practices",
        "Testing: weekly collaboration with internal tech and business teams to ensure alignment",
        "Delivery: proper documentation, handover meetings, and knowledge transfer sessions for future maintenance"
      ],
      technicalApproach: [
        {
          title: "Data Capture & Triggers",
          description: "Data captured from email attachments or SharePoint uploads. Automated triggers created jobs to extract information from each file as it arrived."
        },
        {
          title: "Databricks & AI Processing",
          description: "Specialized Databricks workflows for each file type. Used PySpark for big data processing, Azure Document Intelligence, and custom AI scripts in Python, SQL, and Scala."
        },
        {
          title: "Data Curation Pipeline",
          description: "Parsed documents extracted to parquet files, then curated and written into Azure SQL Database for structured access."
        },
        {
          title: "Business Intelligence Layer",
          description: "PowerBI reports created from database, enabling business teams to make data-driven decisions with actionable insights."
        }
      ],
      results: [
        { icon: <TrendingUp />, label: "Millions in cost savings", detail: "Efficient technology choices and optimized implementations" },
        { icon: <Zap />, label: "Fully automated pipeline", detail: "End-to-end processing of tens of thousands of documents" },
        { icon: <Users />, label: "Faster business decisions", detail: "Data-driven insights provide competitive leverage" }
      ],
      additionalResults: [
        "Future-proof pipeline with plug-and-play components for easy scaling",
        "Solid data layer enabling reliable analytics and reporting",
        "Clean code practices allowing for easy maintenance and extension",
        "Comprehensive documentation and knowledge transfer",
        "Scalable infrastructure ready for growing data volumes"
      ],
      tags: ["Databricks", "Azure", "ETL", "Document Intelligence", "PySpark", "Power BI"],
      testimonial: {
        quote: "AI Flow delivered a production-grade data pipeline that transformed how we handle documents. The solution has saved us millions and given us the competitive edge we needed.",
        author: "VP of Technology",
        company: "Top-5 Oil & Gas Firm"
      }
    },
    "exomatter-automl": {
      title: "AutoML for Materials Science Property Prediction",
      client: "ExoMatter",
      industry: "Materials Science",
      image: caseStudy2,
      duration: "8 weeks",
      teamSize: "2 engineers",
      challenge: "Building ML models for material property prediction took 3-4 months per model",
      challengeDetail: "ExoMatter deals with materials development and computation, helping companies find the right material for specific applications by replacing trial-and-error lab work with data. While simulations were computationally expensive, ML could predict properties more efficiently. However, building custom ML models took 3-4 months each—structuring data, choosing algorithms, and identifying important features. They needed a faster way to leverage their materials science data.",
      solution: "Implemented AutoML pipeline using Google's Vertex AI for rapid model development",
      solutionDetail: "We built an AutoML MVP using Google's Vertex AI that dramatically reduced the time needed to develop ML models. The pipeline automated model selection, hyperparameter tuning, and feature engineering, allowing overnight training that matched or exceeded the quality of manually-built models that previously took months.",
      solutionPoints: [
        "Initial consultation to understand chemistry and materials science context",
        "Regular calls to review progress and results",
        "Efficient remote collaboration with minimal time requirements from client",
        "Comprehensive documentation for future use",
        "Testing on multiple datasets to validate approach"
      ],
      technicalApproach: [
        {
          title: "Google Vertex AI Integration",
          description: "Leveraged Google's Vertex AI AutoML platform to automate the entire model development pipeline, from data preparation to deployment."
        },
        {
          title: "Automated Feature Engineering",
          description: "AutoML system automatically identified important features and engineered new ones, eliminating months of manual experimentation."
        },
        {
          title: "Multi-Dataset Validation",
          description: "Tested pipeline on two different materials science datasets to ensure robustness and generalizability of the approach."
        },
        {
          title: "Overnight Training Pipeline",
          description: "Configured automated training runs that completed overnight, enabling rapid iteration and experimentation."
        }
      ],
      results: [
        { icon: <Zap />, label: "Overnight model training", detail: "From 3-4 months down to overnight training runs" },
        { icon: <TrendingUp />, label: "Equal or better accuracy", detail: "AutoML models matched or exceeded manual models" },
        { icon: <Users />, label: "95% time reduction", detail: "Freed up researchers to focus on science, not ML engineering" }
      ],
      additionalResults: [
        "Pilot project successfully validated AutoML approach for materials science",
        "Under budget delivery with surplus used for data quality improvements",
        "Scalable pipeline ready for additional material properties",
        "Eliminated 3-4 month model development cycles",
        "Team can now iterate on ML models without deep ML expertise"
      ],
      tags: ["AutoML", "Vertex AI", "Materials Science", "ML", "Google Cloud"],
      testimonial: {
        quote: "I could not have wished for anything better. Models that took us 3-4 months to build now train overnight with equal or better results. The collaboration was efficient and the documentation was great.",
        author: "Josua, CEO",
        company: "ExoMatter"
      }
    },
    "student-financing-platform": {
      title: "Rebuilding a Scalable Student Financing Platform with Next.js and Prisma",
      client: "deineStudienfinanzierung",
      industry: "Fintech",
      image: caseStudy1,
      duration: "3 months",
      teamSize: "3 engineers",
      challenge: "Outdated platform with deprecated technologies needed complete rewrite for scalability",
      challengeDetail: "After five years of continuous evolution, deineStudienfinanzierung's existing platform had become outdated due to deprecated technologies and a changing product scope. They needed a complete rewrite, not just a migration, aiming for a leaner, more scalable product that focused on the platform's most critical user flows. The challenge was not only technical but strategic: ensuring that the new platform could support rapid growth, minimize infrastructure costs, and simplify future feature development. This is where AI Flow stepped in to build a smarter, faster, and highly scalable solution.",
      solution: "Built modern full-stack platform with Next.js, React, Apollo GraphQL, and Prisma",
      solutionDetail: "We proposed a modern full-stack architecture, choosing Next.js for the frontend, Apollo GraphQL for API communication, React for UI development, and Prisma as the ORM with a PostgreSQL database. From day one, we focused on building a robust foundation that would make future iterations fast and flexible.",
      solutionPoints: [
        "Discovery: reviewed client's vision, goals, and key bottlenecks in the old platform through early technical conversations",
        "Design: proposed modern full-stack architecture with Next.js, Apollo GraphQL, React, and Prisma with PostgreSQL",
        "Implementation: established core libraries, database schemas, storage solutions, and backend logic with incremental API and frontend development",
        "Testing: MVP testing included functional tests, performance monitoring, and stability checks under real user conditions",
        "Delivery: successfully launched in under three months, migrating thousands of users with minimal disruption"
      ],
      technicalApproach: [
        {
          title: "Modern Frontend Stack",
          description: "Built with Next.js and React for optimal performance, SEO capabilities, and developer experience. Server-side rendering ensures fast page loads and excellent user experience."
        },
        {
          title: "GraphQL API Layer",
          description: "Implemented Apollo GraphQL for efficient data fetching and real-time updates. Type-safe queries and mutations improved development speed and reduced bugs."
        },
        {
          title: "Robust Database Design",
          description: "Used Prisma ORM with PostgreSQL for type-safe database access, automated migrations, and excellent developer tooling. Schema-first approach ensured data integrity."
        },
        {
          title: "Low-Cost Infrastructure",
          description: "Deployed on Digital Ocean with optimized resource utilization. Achieved high performance without sacrificing reliability while maintaining minimal operating costs."
        }
      ],
      results: [
        { icon: <Zap />, label: "Delivered in 3 months", detail: "Complete platform rebuild from scratch to production launch" },
        { icon: <Users />, label: "Thousands of users migrated", detail: "Seamless migration with zero data loss and minimal user disruption" },
        { icon: <TrendingUp />, label: "Zero downtime launch", detail: "Launched during high-traffic phase without fallback to legacy platform" }
      ],
      additionalResults: [
        "Developer-friendly codebase allowing complex new flows to be added quickly",
        "Low-cost infrastructure ensuring minimal operating costs without sacrificing performance",
        "Efficient remote-first collaboration with minimal but effective daily standups",
        "Strong technical foundation enabling rapid feature development post-launch",
        "Scalable architecture ready for future growth and expansion"
      ],
      tags: ["Next.js", "React", "GraphQL", "Prisma", "PostgreSQL", "Full-Stack", "Fintech"],
      testimonial: {
        quote: "AI Flow delivered a production-ready platform in just three months. The modern architecture they built has made it incredibly easy for our team to add new features and scale quickly.",
        author: "CTO",
        company: "deineStudienfinanzierung"
      }
    },
    "google-ml-pipeline-optimization": {
      title: "Reducing 65% of ML Pipeline Time at Google",
      client: "Google",
      industry: "Tech",
      image: caseStudy1,
      duration: "6 months",
      teamSize: "1 senior engineer",
      challenge: "High dimensionality in ML systems causing long training times and resource-intensive models",
      challengeDetail: "At Google's scale, even small inefficiencies in machine learning pipelines can lead to massive time and cost implications. A key bottleneck was the high dimensionality of input data in ML systems—training times were long, models were resource-intensive, and the iteration cycle was slow. Google was already experimenting with cutting-edge techniques like Sequential Attention for feature selection, but sought to further improve the tradeoff between model performance, feature count, and training time.",
      solution: "Built advanced feature selection tool with Sequential Attention, reducing features by 64% while maintaining performance",
      solutionDetail: "We developed a next-gen feature selection platform designed for scalability, interpretability, and performance—ideal for enterprise ML environments like Google's. The solution included intermediate Sequential Attention, ensemble-based feature voting, data subsampling with full-scale training, SVD-based feature budget estimation, and a production-grade feature masking tool.",
      solutionPoints: [
        "Discovery: in-depth review of existing Sequential Attention implementation to identify optimization opportunities",
        "Design: proposed ensemble models, intermediate synchronization, and dataset sub-sampling strategies",
        "Implementation: expanded open-source codebase with parallelized ensemble support and SVD-based estimation",
        "Testing: validated across four datasets (MNIST, Fashion-MNIST, Activity, Mice Protein) with statistical significance",
        "Delivery: packaged into modular, production-ready tool for internal Google ML teams"
      ],
      technicalApproach: [
        {
          title: "Intermediate Sequential Attention",
          description: "Pool of attention-based models trained in parallel with checkpoints every 5 features for collaborative voting. This preserved diversity while avoiding redundant feature clusters."
        },
        {
          title: "Ensemble Feature Voting",
          description: "Random subspace method where each model trains on randomly masked features. Voting heatmaps identified consistently important features, improving interpretability."
        },
        {
          title: "Data Subsampling Strategy",
          description: "Masks computed using 20% of data, final models trained with full dataset. Achieved 3–5x speedup in experimentation cycles while maintaining quality."
        },
        {
          title: "SVD-based Budget Estimation",
          description: "Implemented SVD heuristic to estimate effective dimensionality, acting as upper bound for feature subset size and avoiding wasteful computation."
        }
      ],
      results: [
        { icon: <Zap />, label: "65% pipeline time reduction", detail: "Parallelized models lowered total mask selection time by over 40%" },
        { icon: <TrendingUp />, label: "64% feature reduction", detail: "Reduced features with no loss in accuracy on some datasets" },
        { icon: <Users />, label: "90% smaller models", detail: "Translating to faster training and inference at scale" }
      ],
      additionalResults: [
        "High-quality models with only 20% of the data—comparable to full-dataset models",
        "Open source codebase released alongside Google Research repository",
        "Production-ready tool enabling automated feature pruning across teams",
        "Transparent tradeoffs and reproducible metrics for decision-making",
        "Reduced ML cost-to-train and faster experimentation iteration"
      ],
      tags: ["ML", "Feature Selection", "Optimization", "Sequential Attention", "Google"],
      testimonial: {
        quote: "The feature selection tool has transformed how our teams approach high-dimensional data. We're seeing massive time savings and better models across the board.",
        author: "ML Research Lead",
        company: "Google"
      }
    },
    "legal-intelligence-platform": {
      title: "Legal Intelligence Platform with RAG & GPT-4o",
      client: "Law Firm",
      industry: "Legal",
      image: caseStudy2,
      duration: "3 weeks (POC)",
      teamSize: "2 engineers",
      challenge: "Parsing gigabytes of mixed-format case files to predict case value in real-time",
      challengeDetail: "In law, each case comes with specific challenges and contextual information. Documentation ranges from text files to PDFs, scans, documents with hundreds of pages, and unstructured information. On top of this, clients want to know as fast as possible whether their case can be settled and what the approximate value is, looking at similar cases. Humans can't parse and make sense of large volumes of unstructured data in real-time. The data is often 'dirty,' needing cleaning, organization, and proper processing.",
      solution: "Built RAG pipeline with Pinecone and GPT-4o for legal document intelligence and chatbot",
      solutionDetail: "We designed and built an end-to-end system for organizing unstructured information and exposing a chatbot on top of it. The solution included a data curation pipeline, RAG system with vector store, relational database for storing requests and results, LLM layer, all wrapped in a Streamlit application with token-based security.",
      solutionPoints: [
        "Discovery: guided client through discovery process to define ideal outcome and problem to solve",
        "Design: end-to-end flow proposal with time and cost estimates, and technology stack walkthrough",
        "Implementation: started with POC, delivered fully functional version in 3 weeks on public domain",
        "Delivery: memory optimized by 75%, median response time below 1 second"
      ],
      technicalApproach: [
        {
          title: "Data Cleaning Pipeline",
          description: "Parsed HTML data with BeautifulSoup, removing irrelevant information like styling, tags, and scripts. Saved costs and storage by 75% by optimizing specificity percentage."
        },
        {
          title: "RAG & Vector Store",
          description: "Started with FAISS for dev/staging (on-premises, zero cost testing). Moved to Pinecone index for production. Chunking strategy optimized for fact-based retrieval."
        },
        {
          title: "LLM Inference",
          description: "Used Mistral on local Ollama server for dev/staging. Moved to OpenAI GPT-4o for production with temperature optimization for factual queries vs summarization."
        },
        {
          title: "Full-Stack Application",
          description: "Streamlit web app with PostgreSQL on Digital Ocean, Prisma ORM, and token-based security system for quick prototype with good quality ratio."
        }
      ],
      results: [
        { icon: <Zap />, label: "<1 second response time", detail: "Near real-time answers from hundreds of pages" },
        { icon: <TrendingUp />, label: "75% storage reduction", detail: "Optimized data cleaning saved costs and improved relevance" },
        { icon: <Users />, label: "Delivered in 3 weeks", detail: "From concept to deployed POC with full authentication" }
      ],
      additionalResults: [
        "ChatBot answering questions in seconds from hundreds of pages of documents",
        "75% cheaper than off-the-shelf solutions with higher relevance",
        "End-to-end information retrieval optimized for factual and summarization queries",
        "Comprehensive POC helping client make technology direction decisions",
        "No human can match the speed and comprehensiveness of document analysis"
      ],
      tags: ["RAG", "GPT-4o", "Legal", "Pinecone", "Streamlit", "NLP"],
      testimonial: {
        quote: "AI Flow delivered a working chatbot in just 3 weeks that instantly answers questions from our massive case file library. The cost savings and speed are incredible.",
        author: "Managing Partner",
        company: "Law Firm"
      }
    },
    "sales-intelligence-platform": {
      title: "AI-Powered Sales Intelligence Platform",
      client: "Sales Intelligence Company",
      industry: "SaaS",
      image: caseStudy3,
      duration: "5 months",
      teamSize: "3 engineers",
      challenge: "Manually tracking job postings and hiring signals across thousands of companies wasn't scalable",
      challengeDetail: "Timing is everything in sales. For consulting firms, SaaS platforms, and B2B startups, knowing when a company is about to invest in new technology can be worth millions. Most sales teams operate reactively, discovering opportunities after the market is saturated with competition. Manually tracking career pages, job boards, and strategic hiring shifts across thousands of companies is not scalable for humans. But with the right mix of machine learning, automation, and web scraping, it's powerful.",
      solution: "Built AI platform to detect tech hiring signals and purchase intent through automated job analysis",
      solutionDetail: "We developed a retrieval-augmented generation (RAG) platform integrated with custom LLM-based scrapers for job intelligence. The scraping engine uses BeautifulSoup and headless Chromium to extract structured content. Data cleaning pipelines strip irrelevant markup, resulting in faster and cheaper LLM inference with improved accuracy. LLM interactions managed using OpenAI's GPT-4-turbo with consistent JSON-based schema.",
      solutionPoints: [
        "Discovery: identified biggest pain point—delayed visibility when jobs posted on LinkedIn",
        "Design: architected platform to monitor and interpret job listings at scale",
        "Implementation: robust scraping engine with real-time detection and AI-powered clustering",
        "Monitoring: real-time token usage tracking with tiktoken for cost optimization",
        "Automation: daily cron jobs updating database and monitoring for new/updated listings"
      ],
      technicalApproach: [
        {
          title: "Intelligent Web Scraping",
          description: "BeautifulSoup and headless Chromium extract structured content from career pages and job boards, identifying new postings and summarizing with LLMs."
        },
        {
          title: "Data Cleaning Pipeline",
          description: "Strip irrelevant markup (CSS, scripts) for faster and cheaper LLM inference. Similar approach used in legal tech case study, improving accuracy."
        },
        {
          title: "LLM-Powered Analysis",
          description: "GPT-4-turbo interactions constrained to return consistent JSON-based schema. Real-time token monitoring with tiktoken optimizes costs and performance."
        },
        {
          title: "Backend Infrastructure",
          description: "Django backend with PostgreSQL on DigitalOcean and Prisma ORM. Daily cron jobs for automated updates and monitoring."
        }
      ],
      results: [
        { icon: <Zap />, label: "Real-time lead intelligence", detail: "Be first to know when companies signal buying intent" },
        { icon: <TrendingUp />, label: "Automated buying intent detection", detail: "AI extracts actionable insights from unstructured job data" },
        { icon: <Users />, label: "Thousands of companies monitored", detail: "Scale impossible for human sales teams" }
      ],
      additionalResults: [
        "Real-time tech hiring signal detection across thousands of companies",
        "Investment indicators and purchase intent flagging for sales teams",
        "Modular, scalable, and cost-efficient architecture",
        "Cleanly structured outputs for easy downstream processing",
        "Practical AI delivering value where it matters most—sales timing"
      ],
      tags: ["Web Scraping", "LLM", "Sales Intelligence", "RAG", "Django", "GPT-4"],
      testimonial: {
        quote: "This platform gives us the competitive edge we need—spotting opportunities before our competitors even know they exist. The AI is smart, and the execution is flawless.",
        author: "Head of Sales",
        company: "Sales Intelligence Company"
      }
    },
    "ai-legal-risk-detection": {
      title: "AI Legal Risk Detection with LLM + RAG for Content Review",
      client: "Legal Tech Company",
      industry: "Legal Tech",
      image: caseStudy1,
      duration: "6 weeks (POC)",
      teamSize: "2 engineers",
      challenge: "Manual legal content review was tedious, costly, and struggled to scale across hundreds of pages",
      challengeDetail: "Reviewing long-form content for legal risks is tedious, manual, and costly—especially when multiple categories of exposure must be considered. Traditional workflows struggle to scale or catch nuanced issues like defamation or privacy rights violations spread across hundreds of pages. Our client wanted to explore if language models + retrieval systems could automatically analyze large documents and pinpoint potential issues on a per-page basis, categorized by legal concern.",
      solution: "Built AI system using GPT-4 and RAG to automatically flag legal risks per page with structured justifications",
      solutionDetail: "We built a proof-of-concept system that uses GPT-4 and RAG (Retrieval-Augmented Generation) to flag potential legal risks across documents—per page, per issue. The pipeline automatically reviews text for copyright, trademark, privacy, and other legal concerns, providing clear, structured justifications for every flagged item.",
      solutionPoints: [
        "Discovery: defined key legal risk categories and desired output format for high signal, low noise alerts",
        "Design: assess each page and legal issue in isolation with Pinecone vector store paired with GPT-4",
        "Implementation: ingested documents and legal definitions/precedents into RAG, analyzed each page per issue",
        "Testing: iteratively refined retrieval pipeline and prompt strategy with client review",
        "Delivery: script-based prototype outputting structured JSON-like results with issue types and rationale"
      ],
      technicalApproach: [
        {
          title: "Focused Analysis Strategy",
          description: "Assessed each page and legal issue in isolation, ensuring prompts remained focused and specific. Modular, auditable, and adaptable architecture."
        },
        {
          title: "RAG System with Pinecone",
          description: "Ingested documents to review and curated dataset of legal definitions/precedents into Pinecone vector store. Retrieved definitions, context, and law references."
        },
        {
          title: "GPT-4 Legal Analysis",
          description: "Structured prompt format asking if page raises concern for specific issue and why. Each page analyzed once per issue for focused interpretation."
        },
        {
          title: "Structured Output",
          description: "System returns clear results indicating whether risk exists, why it was flagged, and what part of page caused concern—all in JSON format."
        }
      ],
      results: [
        { icon: <Zap />, label: "Automated page-by-page analysis", detail: "Working prototype ready for internal legal teams" },
        { icon: <TrendingUp />, label: "Structured risk categorization", detail: "Clear outputs for rapid triage and documentation" },
        { icon: <Users />, label: "Scalable for large documents", detail: "Baseline for larger content review workflows" }
      ],
      additionalResults: [
        "Launchpad for future extensions like web-based UIs and active learning",
        "Modular design enabling easy integration into existing workflows",
        "Improved relevance, clarity, and consistency through iterative refinement",
        "Potential for fine-tuned legal models and feedback loops",
        "Script-based prototype runnable by technical teams on new documents"
      ],
      tags: ["LLM", "RAG", "GPT-4", "Legal Tech", "Pinecone", "NLP"],
      testimonial: {
        quote: "The POC exceeded our expectations. We can now automatically flag legal risks across hundreds of pages with clear justifications. This is exactly what we needed.",
        author: "Legal Operations Director",
        company: "Legal Tech Company"
      }
    },
  };

  const study = id ? caseStudies[id] : null;

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link to="/case-studies">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Case Studies
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {study.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              <span>{study.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{study.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>{study.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16 max-w-5xl mx-auto">
          <img
            src={study.image}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">The Challenge</h2>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.challengeDetail}
              </p>
            </Card>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Solution</h2>
            <Card className="bg-card border-border p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {study.solutionDetail}
              </p>
              <ul className="space-y-4">
                {study.solutionPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Technical Approach */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Technical Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.technicalApproach.map((tech: any, idx: number) => (
                <Card key={idx} className="bg-card border-border p-6 hover:border-primary transition-all">
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">Results & Impact</h2>
            <div className="space-y-6">
              {study.results.map((result: any, idx: number) => (
                <Card key={idx} className="bg-card border-border p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {result.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{result.label}</h3>
                      <p className="text-muted-foreground">{result.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold mb-4">Additional Outcomes</h3>
                <ul className="space-y-3">
                  {study.additionalResults.map((result: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Testimonial */}
          <section>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12">
              <div className="text-center">
                <div className="text-6xl text-primary mb-4">"</div>
                <p className="text-xl md:text-2xl font-semibold mb-6 italic">
                  {study.testimonial.quote}
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-bold text-lg">{study.testimonial.author}</p>
                  <p className="text-muted-foreground">{study.testimonial.company}</p>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <section>
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Similar Results?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve transformative outcomes with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyDetail;

