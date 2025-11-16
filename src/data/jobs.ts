export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
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
  "ml-engineer": {
    id: "ml-engineer",
    title: "ML Engineer",
    location: "Remote",
    type: "Freelance / Full Time",
    department: "Engineering",
    experience: "3-7+ years",
    shortDescription: "Build end-to-end ML systems for client-driven AI products from data to production.",
    description: "Are you the kind of ML engineer who thinks beyond just training models? We're building a network of exceptional ML engineers who want to work on meaningful, client-driven AI systems: from data to production. At AI Flow, we help startups and mid-sized companies build real-world AI products, not just demos. You'll work on systems that scale, with clients who value deep thinking and clean builds. Projects vary, from generative AI and intelligent automation to ML infrastructure and document intelligence pipelines.",
    responsibilities: [
      "Build end-to-end ML systems from data to deployment",
      "Design and implement ML pipelines for production",
      "Work on generative AI, LLMs, and intelligent automation projects",
      "Clean, wrangle, and prepare real-world data for ML",
      "Integrate ML models into scalable production systems",
      "Collaborate with clients to understand requirements and deliver value"
    ],
    requirements: [
      "3–7+ years experience in ML and data pipelines",
      "Strong Python skills and clean code practices",
      "Experience with PyTorch, TensorFlow, or scikit-learn",
      "Experience building end-to-end ML systems, not just isolated models",
      "Comfort with real-world data: cleaning, wrangling, and deploying"
    ],
    niceToHave: [
      "LLM pipelines and prompt engineering",
      "MLOps tools (Weights & Biases, MLflow, Docker, Airflow)",
      "Vector databases (Pinecone, Weaviate, Qdrant)",
      "RAG systems and retrieval architectures",
      "Experience with cloud ML platforms (Vertex AI, SageMaker)"
    ],
    benefits: [
      "Remote-first with flexible hours",
      "Work on diverse, cutting-edge AI projects",
      "Freelance or full-time options",
      "Competitive compensation",
      "Collaborate with experienced AI engineers",
      "Build real products that ship, not just POCs"
    ]
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
  "full-stack-typescript-react": {
    id: "full-stack-typescript-react",
    title: "Full Stack / Typescript + React",
    location: "Remote",
    type: "Freelance / Full Time",
    department: "Engineering",
    experience: "3-6+ years",
    shortDescription: "Build fast, clean web apps with TypeScript across the stack for AI-powered platforms.",
    description: "You love building fast, clean web apps, and care about design, architecture, and user flow. At AI Flow, we work with startups and scale-ups to build platforms that support AI products. This role is for engineers who are fluent in TypeScript across the stack, comfortable working with both modern frontends and backend logic when needed.",
    responsibilities: [
      "Build modern web applications with Next.js and React",
      "Implement backend logic with Node.js and TypeScript",
      "Work with GraphQL or REST APIs",
      "Design and implement database schemas with Prisma",
      "Create scalable, reusable component systems",
      "Collaborate on AI-powered platform features"
    ],
    requirements: [
      "3–6+ years of full stack development experience",
      "Strong TypeScript skills (Next.js, React, Node.js)",
      "Familiarity with GraphQL or REST APIs",
      "Experience with Prisma, PostgreSQL, or other ORMs"
    ],
    niceToHave: [
      "Tailwind CSS",
      "Vercel deployment and optimization",
      "CI/CD pipelines",
      "Scalable component systems and design patterns",
      "Experience with real-time features",
      "UI/UX sensibility"
    ],
    benefits: [
      "100% remote work",
      "Freelance or full-time flexibility",
      "Work on modern, greenfield projects",
      "Competitive compensation",
      "Latest tools and frameworks",
      "Supportive team culture"
    ]
  }
};

export const getJob = (jobId: string): Job | undefined => {
  return jobs[jobId];
};

export const getAllJobs = (): Job[] => {
  return Object.values(jobs);
};

