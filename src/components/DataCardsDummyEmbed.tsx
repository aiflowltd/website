import { useState, useEffect, useRef } from "react";
import { ArrowUp, RefreshCw } from "lucide-react";
import { AI_FLOW_LOGO_SYMBOL } from "@/constants/images";

interface QAPair {
  question: string;
  answer: string;
  keywords: string[];
}

const QA_PAIRS: QAPair[] = [
  {
    question: "What services does AI Flow offer?",
    answer:
      "AI Flow offers comprehensive AI solutions including Custom AI Solutions, Machine Learning services, AI Strategy & Consulting, Rapid Prototyping, Data Engineering, and AI Integration. We build end-to-end AI products tailored to your business needs, from custom model training to seamless integration with existing systems.",
    keywords: ["services", "offer", "what", "do", "provide", "solutions"],
  },
  {
    question: "Who are the founders of AI Flow?",
    answer:
      "AI Flow is co-founded by Mihai Anton and Irina Barbos. Mihai is the Lead AI/ML Engineer with nearly a decade of experience, having worked at Google on feature selection tools and at BP on production ML pipelines. Irina is the AI Solutions Consultant, specializing in full-stack development and system architecture with expertise in Next.js, React, and cloud infrastructure.",
    keywords: ["founders", "who", "team", "mihai", "irina", "co-founder"],
  },
  {
    question: "What is rapid prototyping?",
    answer:
      "Rapid Prototyping at AI Flow means fast iteration and proof-of-concept development to validate your AI ideas quickly. We deliver MVP development in 4-6 weeks, enabling quick validation of AI concepts with iterative feedback loops and production-ready architecture from the start.",
    keywords: ["rapid", "prototyping", "prototype", "mvp", "proof", "concept"],
  },
  {
    question: "What case studies do you have?",
    answer:
      "We have several successful case studies including AI-Powered Supply Chain Optimization for a Fortune 500 manufacturer (40% cost reduction), Intelligent Customer Service Platform for an e-commerce leader (90% satisfaction rate), Real-Time Fraud Detection System for a global financial institution (99.7% accuracy), and Oil & Gas Invoice Automation with Databricks & Azure. We've also worked on legal AI risk detection, student financing platforms, and materials science property prediction.",
    keywords: ["case", "studies", "examples", "projects", "clients", "work"],
  },
  {
    question: "Do you provide AI consulting?",
    answer:
      "Yes, we offer AI Strategy & Consulting services to help you navigate the AI landscape and maximize ROI. Our consulting includes AI readiness assessment, technology stack recommendations, ROI analysis and business case development, and implementation roadmap planning.",
    keywords: ["consulting", "consult", "strategy", "advice", "help"],
  },
  {
    question: "What is your experience with machine learning?",
    answer:
      "Our team has extensive machine learning experience. Mihai has nearly a decade of experience in AI and ML, having worked at Google and BP. We specialize in predictive analytics, computer vision, natural language processing, recommendation systems, and building scalable ML pipelines for production environments.",
    keywords: [
      "machine",
      "learning",
      "ml",
      "experience",
      "expertise",
      "models",
    ],
  },
  {
    question: "How long does it take to build an AI product?",
    answer:
      "For rapid prototyping, we can deliver an MVP in 4-6 weeks. The timeline for full end-to-end AI products varies based on complexity, but we focus on iterative development with quick validation cycles. We've successfully delivered complete platforms in 3 months, as demonstrated in our student financing platform case study.",
    keywords: [
      "how",
      "long",
      "time",
      "timeline",
      "duration",
      "weeks",
      "months",
    ],
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across multiple industries including Oil & Gas, E-commerce, Financial Services, Legal Tech, Fintech, and Manufacturing. Our clients range from startups to Fortune 500 enterprises. We've helped companies automate document processing, build fraud detection systems, optimize supply chains, and create intelligent customer service platforms.",
    keywords: ["industries", "sectors", "clients", "companies", "work", "with"],
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including Next.js, React, Python, Databricks, Azure, GPT-4, RAG (Retrieval-Augmented Generation), Apollo GraphQL, Prisma, and various ML frameworks. We build cloud-native, scalable architectures and integrate with existing systems seamlessly.",
    keywords: ["technologies", "tech", "stack", "tools", "frameworks", "use"],
  },
  {
    question: "What makes AI Flow different?",
    answer:
      "AI Flow has been in AI & ML before the wave. We focus on building products, not hype. Our co-founders bring real-world experience from Google and BP, and we've proven our ability to deliver production-ready solutions quickly. We offer end-to-end product development, from strategy to implementation, with a track record of successful case studies across various industries.",
    keywords: ["different", "unique", "why", "choose", "special", "advantage"],
  },
];

const findBestAnswer = (userQuestion: string): string => {
  const normalizedQuestion = userQuestion.toLowerCase().trim();
  const questionWords = normalizedQuestion
    .split(/\s+/)
    .filter((word) => word.length > 2); // Filter out short words

  let bestMatch = QA_PAIRS[0];
  let bestScore = 0;

  for (const qa of QA_PAIRS) {
    let score = 0;

    // Check keyword matches
    for (const keyword of qa.keywords) {
      if (normalizedQuestion.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }

    // Check for direct question matches (substring)
    if (
      normalizedQuestion.includes(qa.question.toLowerCase().substring(0, 20))
    ) {
      score += 5;
    }

    // Check for word matches in the question
    for (const word of questionWords) {
      if (qa.question.toLowerCase().includes(word)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa;
    }
  }

  // If no good match found, return the first one as default
  return bestMatch.answer;
};

const PLACEHOLDER_PROMPTS = [
  "Ask DataCards about AI Flow...",
  "Ask DataCards how AI Flow can help you build an AI Agent...",
  "Ask DataCards about our services...",
  "Ask DataCards about our case studies...",
  "Ask DataCards how we can help your business...",
];

export const DataCardsDummyEmbed = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const answerRef = useRef<string>("");

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [question]);

  useEffect(() => {
    if (question.trim() || isStreaming) return;

    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDER_PROMPTS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [question, isStreaming]);

  const submitQuestion = async () => {
    if (!question.trim() || isStreaming) return;

    setAnswer("");
    answerRef.current = "";
    setHasAnswer(false);
    setIsStreaming(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      if (!apiUrl) {
        console.warn("API URL not configured, using local fallback");
        const bestAnswer = findBestAnswer(question);
        
        let currentIndex = 0;
        const streamInterval = setInterval(() => {
          if (currentIndex < bestAnswer.length) {
            answerRef.current = bestAnswer.substring(0, currentIndex + 1);
            setAnswer(answerRef.current);
            currentIndex++;
          } else {
            clearInterval(streamInterval);
            setIsStreaming(false);
            setHasAnswer(true);
          }
        }, 30);
        return;
      }

      const response = await fetch(`${apiUrl}/api/chat/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();

      if (!reader) {
        throw new Error("No response body");
      }

      let chunkCount = 0;

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          setIsStreaming(false);
          setHasAnswer(true);
          break;
        }

        chunkCount++;
        
        const lines = value.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonData = JSON.parse(line.substring(6));
              
              if (jsonData.done) {
                continue;
              }
              
              if (jsonData.content) {
                answerRef.current += jsonData.content;
                setAnswer(answerRef.current);
                console.log(`🔧 ✅ Added content, new length: ${answerRef.current.length}`);
              }
              
              if (jsonData.error) {
                console.error("🔧 Stream error:", jsonData.error);
                throw new Error(jsonData.error);
              }
            } catch (e) {
              if (e instanceof SyntaxError) {
                console.warn("🔧 Skipping incomplete JSON chunk:", line);
                continue;
              }
              throw e;
            }
          }
        }
      }

    } catch (error) {
      console.error("Error calling chat API:", error);
      
      const bestAnswer = findBestAnswer(question);
      let currentIndex = 0;
      const streamInterval = setInterval(() => {
        if (currentIndex < bestAnswer.length) {
          answerRef.current = bestAnswer.substring(0, currentIndex + 1);
          setAnswer(answerRef.current);
          currentIndex++;
        } else {
          clearInterval(streamInterval);
          setIsStreaming(false);
          setHasAnswer(true);
        }
      }, 30);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuestion();
  };

  const handleRefresh = () => {
    setQuestion("");
    setAnswer("");
    answerRef.current = "";
    setHasAnswer(false);
    setIsStreaming(false);
    setPlaceholderIndex(0);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitQuestion();
    }
  };

  const showRefresh = hasAnswer && !isStreaming;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative mt-[2.25em] w-full rounded-[1.5em] border-white/10 bg-white p-[1em] shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]"
      >
        {answer && (
          <a
            href="https://datacards.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[1em] right-[1em] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-sm hover:opacity-80 transition-opacity z-10"
          >
            Built with DataCards
          </a>
        )}

        <textarea
          ref={textareaRef}
          name="prompt"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          className="block w-full resize-none bg-transparent text-[max(1rem,1.125em)] leading-[120%] text-black outline-none"
          rows={3}
          placeholder={PLACEHOLDER_PROMPTS[placeholderIndex]}
          autoFocus
          disabled={isStreaming}
        />

        <button
          type={showRefresh ? "button" : "submit"}
          onClick={(e) => {
            console.log("🔧 Button clicked", showRefresh ? "refresh" : "submit");
            if (showRefresh) {
              handleRefresh();
            }
          }}
          disabled={isStreaming || (!question.trim() && !showRefresh)}
          className="absolute bottom-[1em] right-[1em] w-[2em] h-[2em] rounded-full bg-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-black/90"
        >
          {showRefresh ? (
            <RefreshCw className="size-[1.2em] fill-white text-white" />
          ) : (
            <ArrowUp className="size-[1.2em] fill-white text-white" />
          )}
        </button>

        {/* Answer Display - Inside the white box */}
        {answer && (
          <div className="mt-2 pt-2 border-t border-black/10 w-full">
            <div className="flex gap-3 w-[90%]">
              <img
                src={AI_FLOW_LOGO_SYMBOL}
                alt="AI Flow"
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <p className="text-[max(1rem,1.125em)] leading-[120%] text-black flex-1 text-left">
                {answer}
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
