export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  shortDescription: string;
  description: string | string[];
  aiUsage?: { intro: string; items: string[] };
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  niceToHaveLabel?: string;
  benefits: string[];
  benefitsLabel?: string;
  salary?: string;
}

export const jobs: Record<string, Job> = {
  "data-scientist": {
    id: "data-scientist",
    title: "Data Scientist",
    location: "Remote",
    type: "Freelance / Full Time / Part Time",
    department: "Data Science",
    experience: "3-5+ years",
    shortDescription: "Transform underutilized data into strategic assets through predictive models and feature discovery.",
    description: "We're looking for analytical minds who see data not just as numbers, but as leverage. At AI Flow, you'll help transform underutilized data into strategic assets for our clients, whether through predictive models, experimentation, or feature discovery. This isn't a reporting role. It's about building things that drive action and scale.",
    responsibilities: [
      "Build predictive models that drive business decisions",
      "Design and analyze experiments to validate hypotheses",
      "Discover and engineer features that unlock model performance",
      "Transform raw data into actionable business insights",
      "Work directly with clients to understand their data challenges",
      "Ship models to production, not just notebooks"
    ],
    requirements: [
      "3–5+ years of hands-on data science experience",
      "Fluent in Python, pandas, SQL, and either scikit-learn or statsmodels",
      "Built models that shipped, not just notebooks",
      "Comfortable thinking from raw data to business insight"
    ],
    niceToHave: [
      "Causal inference experience",
      "Experimentation frameworks",
      "Feature engineering at scale",
      "AutoML frameworks (Vertex AI, H2O, etc.)",
      "Statistical modeling and hypothesis testing"
    ],
    benefits: [
      "Flexible work arrangements (freelance, full-time, or part-time)",
      "Work on real client projects with measurable impact",
      "Collaborative remote-first culture",
      "Competitive rates or salary",
      "Grow your expertise across diverse industries",
      "Access to modern data tools and cloud platforms"
    ]
  },
  "data-engineer": {
    id: "data-engineer",
    title: "Data Engineer | Data pipelines/ETL/data architecture",
    location: "Remote",
    type: "Freelance / Full Time",
    department: "Engineering",
    experience: "3+ years",
    shortDescription: "Build modern data pipelines from ingestion and cleaning to analytics and ML readiness.",
    description: "AI systems are only as good as the pipelines behind them, and that's where you come in. We're looking for hands-on, reliable data engineers who care about quality, automation, and scale. At AI Flow, we build modern pipelines for startups and mid-sized clients: from ingestion and cleaning to analytics, features, and ML readiness. This is a pipeline-building role, not just maintaining existing systems.",
    responsibilities: [
      "Build Python or Scala-based data pipelines from scratch",
      "Design and implement ETL/ELT workflows for data ingestion and transformation",
      "Create scalable data architectures for analytics and ML",
      "Automate data quality checks and monitoring",
      "Optimize pipeline performance and cost efficiency",
      "Work with cloud data platforms (GCP, AWS, Azure)"
    ],
    requirements: [
      "Python or Scala-based data pipelines",
      "Airflow, Prefect, or Dagster",
      "SQL (Postgres, BigQuery, Snowflake)",
      "Experience working with cloud data (GCP, AWS, Azure)"
    ],
    niceToHave: [
      "Spark and Databricks",
      "Delta Lake",
      "dbt (data build tool)",
      "Real-time streaming (Kafka, Pub/Sub)",
      "Data warehouse design and optimization"
    ],
    benefits: [
      "100% remote work",
      "Flexible freelance or full-time arrangements",
      "Work on greenfield projects, not just maintenance",
      "Competitive compensation",
      "Exposure to modern data stack",
      "Collaborative engineering culture"
    ]
  },
  "ai-ml-engineer": {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Freelance / Full Time",
    department: "Engineering",
    experience: "3–7+ years",
    shortDescription: "Design and build the AI pipelines that connect financial institutions' scattered data to their regulatory obligations — end to end, in production.",
    description: [
      "Regulated financial institutions and growth-stage fintechs are sitting on data that could run their compliance automatically. The problem is it's scattered — across operations, finance, risk, and technology — and nobody is sitting at the intersection connecting it to the regulatory obligations that depend on it. That's the infrastructure problem we solve.",
      "As an AI/ML Engineer at AI Flow, you'll design and build the intelligent pipelines that sit at that intersection — ingesting raw, unstructured data from across a client's organisation, making sense of it, and producing regulatory outputs that are accurate, traceable, and ready for submission. Projects span LLM pipelines, document intelligence, structured data extraction, RAG architectures, and compliance-specific ML workflows. You'll work directly with clients and ship into production environments where the cost of errors is real — regulatory findings, fines, and reputational risk.",
    ],
    aiUsage: {
      intro: "This is an AI-native team. Using AI in your daily work isn't optional — it's how we operate.",
      items: [
        "You use AI coding and research tools daily and have strong opinions about which ones are worth it",
        "You've built production LLM pipelines — prompt design, context management, structured output, fallback handling, cost optimisation",
        "You think about model selection, chunking strategies, and retrieval quality as engineering problems, not academic ones",
        "You've shipped RAG systems or document intelligence pipelines into real production environments",
        "You understand what \"production-ready\" means in a regulated industry — audit trails, data lineage, explainability",
      ],
    },
    responsibilities: [
      "Design and build end-to-end AI pipelines — from raw data ingestion across client systems to structured, validated regulatory output",
      "Build and optimise LLM pipelines for document intelligence, structured extraction, and compliance classification",
      "Design RAG architectures and retrieval systems for compliance knowledge bases and regulatory templates",
      "Integrate ML models into production systems with full audit trails and data lineage",
      "Work with messy, real-world data from operations, finance, risk, and technology systems — cleaning, structuring, and mapping it to regulatory requirements",
      "Collaborate directly with clients to understand their data landscape, regulatory obligations, and what production-ready looks like in their environment",
    ],
    requirements: [
      "3–7+ years of ML and AI engineering experience",
      "Strong Python and production-grade ML code practices",
      "Demonstrable experience shipping LLM pipelines or document intelligence systems to production",
      "Experience with RAG systems, vector databases, and retrieval architectures",
      "Comfort with real-world, unstructured data — cleaning, wrangling, and making it ML-ready",
      "Ability to work independently and communicate clearly with non-technical client stakeholders",
    ],
    niceToHave: [
      "Experience in or building for regulated industries (financial services, legal, healthcare)",
      "MLOps experience — experiment tracking, model versioning, deployment pipelines (Weights & Biases, MLflow, Airflow)",
      "Vector databases: Pinecone, Weaviate, Qdrant, or similar",
      "Cloud ML platforms: Vertex AI, SageMaker, or Azure ML",
      "Experience with compliance data, audit trail design, or regulatory document processing",
      "PyTorch, TensorFlow, or scikit-learn for custom model work",
    ],
    niceToHaveLabel: "Strong signal",
    benefits: [
      "100% remote — work from anywhere",
      "Freelance or full-time, your choice",
      "Production AI systems inside regulated financial institutions — not research, not demos",
      "Senior team — direct access to founders, fast decisions",
      "Competitive compensation scoped to engagement",
      "Hard, specific problems that require genuine ML thinking — not prompt wrappers",
    ],
    benefitsLabel: "What we offer",
  },
  "full-stack-python-react": {
    id: "full-stack-python-react",
    title: "Full Stack / Python + React",
    location: "Remote",
    type: "Freelance / Full Time",
    department: "Engineering",
    experience: "4+ years",
    shortDescription: "Build scalable, backend-heavy systems with Python and bring them to life with React.",
    description: "You know your way around Python; not just in ML, but as a full stack builder. We're looking for full stack engineers who can architect scalable, backend-heavy systems and bring them to life with frontend logic when needed. At AI Flow, we build platforms from scratch, help product teams scale, and support clients integrating with real-time ML. You'll work across the stack, with the autonomy to make smart product decisions and own outcomes.",
    responsibilities: [
      "Architect and build scalable backend systems with Python",
      "Develop responsive frontends with React",
      "Design APIs and integrate with ML pipelines",
      "Work with Postgres and other relational databases",
      "Make product decisions and own technical outcomes",
      "Build platforms from scratch for growing startups"
    ],
    requirements: [
      "4+ years experience as a full stack or backend engineer",
      "Strong Python skills (Django, FastAPI, or Flask)",
      "Solid frontend experience with React or similar",
      "Comfort with Postgres or other relational databases"
    ],
    niceToHave: [
      "GraphQL experience",
      "Redis for caching and sessions",
      "Docker and containerization",
      "CI/CD pipelines",
      "Working with ML APIs or pipelines",
      "System design and architecture experience"
    ],
    benefits: [
      "Fully remote position",
      "Freelance or employment options",
      "Work on full-stack projects with autonomy",
      "Competitive rates or salary",
      "Modern tech stack",
      "Collaborative team environment"
    ]
  },
  "full-stack-ai-engineer": {
    id: "full-stack-ai-engineer",
    title: "Full Stack AI Engineer",
    location: "Remote",
    type: "Freelance / Full Time",
    department: "Engineering",
    experience: "3–6+ years",
    shortDescription: "Build the full-stack infrastructure that turns scattered compliance data into automated regulatory output — across real financial institutions.",
    description: [
      "Compliance teams at regulated financial institutions and fintechs spend most of their time not doing compliance — but chasing data across departments, reformatting it, and rebuilding the same reports from scratch. We fix that by building the infrastructure between their operational data and their regulatory output.",
      "As a Full Stack AI Engineer at AI Flow, you'll build the systems that sit at the intersection of a client's departments — connecting data from operations, finance, risk, and technology, and producing the regulatory outputs their team currently assembles by hand. This isn't a CRUD app role. You'll be working with real compliance pipelines, LLM integrations, document intelligence, and structured data extraction — shipped into production inside regulated financial institutions where accuracy and audit trails are non-negotiable.",
    ],
    aiUsage: {
      intro: "AI fluency is a hard requirement here, not a nice-to-have.",
      items: [
        "You use AI coding tools (Cursor, GitHub Copilot, Claude) daily — not occasionally",
        "You integrate LLM APIs (Anthropic, OpenAI) into production systems, not just demos",
        "You've built or worked with RAG pipelines, document extraction, or structured output generation",
        "You think about AI as infrastructure — prompt design, context management, fallback handling, cost — not just API calls",
        "You move faster than a traditional engineer because AI is part of how you work, not something you bolt on",
      ],
    },
    responsibilities: [
      "Build full-stack compliance pipelines — from data ingestion across client systems to validated, submission-ready regulatory output",
      "Integrate LLMs and document intelligence into production workflows with full audit trails",
      "Build backend APIs and data transformation layers in TypeScript/Node.js and Python",
      "Build clean, functional frontends in Next.js and React for compliance teams to review, manage, and submit outputs",
      "Work directly with clients — understand their regulatory obligations, their data landscape, and what \"done\" looks like in their environment",
      "Ship to production inside regulated institutions where reliability, traceability, and security are requirements, not nice-to-haves",
    ],
    requirements: [
      "3–6+ years of full-stack development experience",
      "Strong TypeScript across the stack — Next.js, React, Node.js",
      "Experience with REST or GraphQL APIs and relational databases (PostgreSQL, Prisma)",
      "Demonstrable experience building with LLM APIs in production — not just prototypes",
      "Clean code practices and comfort with code review in a fast-moving team",
      "Ability to work independently and communicate clearly with non-technical stakeholders",
    ],
    niceToHave: [
      "Experience with document intelligence, structured data extraction, or RAG systems",
      "Python for data processing or ML integration",
      "Worked in or built for regulated industries (finance, legal, healthcare)",
      "Familiarity with audit trail design, data lineage, or compliance data requirements",
      "Vercel, CI/CD, and production deployment experience",
    ],
    niceToHaveLabel: "Strong signal",
    benefits: [
      "100% remote — work from anywhere",
      "Freelance or full-time, your choice",
      "Real production systems inside regulated financial institutions — not internal tools or demos",
      "Senior team — no bureaucracy, fast decisions",
      "Competitive compensation scoped to engagement",
      "The kind of technical problems that actually require thinking",
    ],
    benefitsLabel: "What we offer",
  },
};

export const getJob = (jobId: string): Job | undefined => {
  return jobs[jobId];
};

export const getAllJobs = (): Job[] => {
  return Object.values(jobs);
};
