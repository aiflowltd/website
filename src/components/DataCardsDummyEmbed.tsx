import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
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
      "AI Flow is co-founded by Mihai Anton and Irina Barbos. Mihai is the Lead AI/ML Engineer with 10+ years of experience, having worked at Google on feature selection tools and at BP on production ML pipelines. Irina builds AI-driven products for organizations in the U.S. and Europe, including startups within NYU’s innovation ecosystem, designing scalable architectures and production-ready AI solutions.",
    keywords: ["founders", "who", "team", "mihai", "irina", "founder"],
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
      "Our team has extensive machine learning experience. Mihai has 10+ years of experience in AI and ML, having worked at Google and BP. We specialize in predictive analytics, computer vision, natural language processing, recommendation systems, and building scalable ML pipelines for production environments.",
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

const LOADING_MESSAGES = [
  "Thinking",
  "Understanding context",
  "Reasoning",
  "Creating response...",
];

export const DataCardsDummyEmbed = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);
  const [typingText, setTypingText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const answerRef = useRef<string>("");
  const answerScrollRef = useRef<HTMLDivElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-scroll to bottom when answer updates
  useEffect(() => {
    if (answer && answerScrollRef.current) {
      answerScrollRef.current.scrollTop = answerScrollRef.current.scrollHeight;
    }
  }, [answer]);

  // Handle loading messages progression
  useEffect(() => {
    if (!isStreaming || answer) {
      setLoadingMessages([]);
      setTypingText("");
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      return;
    }

    // Show first message immediately
    setLoadingMessages([LOADING_MESSAGES[0]]);

    // Typing animation function
    const startTyping = (message: string) => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      let typingIndex = 0;
      setTypingText("");
      typingIntervalRef.current = setInterval(() => {
        if (!isStreaming || answer) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
          }
          return;
        }
        if (typingIndex < message.length) {
          setTypingText(message.substring(0, typingIndex + 1));
          typingIndex++;
        } else {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
          }
        }
      }, 50);
    };

    startTyping(LOADING_MESSAGES[0]);

    // Add subsequent messages at 1.5 second intervals
    let messageIndex = 1;
    const addNextMessage = () => {
      if (messageIndex < LOADING_MESSAGES.length && isStreaming && !answer) {
        setLoadingMessages((prev) => {
          const newMessages = [...prev, LOADING_MESSAGES[messageIndex]];
          startTyping(LOADING_MESSAGES[messageIndex]);
          return newMessages;
        });
        messageIndex++;
        if (messageIndex < LOADING_MESSAGES.length) {
          loadingTimeoutRef.current = setTimeout(addNextMessage, 1500);
        }
      }
    };
    loadingTimeoutRef.current = setTimeout(addNextMessage, 1500);

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [isStreaming, answer]);

  const submitQuestion = async () => {
    if (!question.trim() || isStreaming) return;

    setAnswer("");
    answerRef.current = "";
    setHasAnswer(false);
    setLoadingMessages([]);
    setTypingText("");
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

      const reader = response.body
        ?.pipeThrough(new TextDecoderStream())
        .getReader();

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

        const lines = value.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const jsonData = JSON.parse(line.substring(6));

              if (jsonData.done) {
                continue;
              }

              if (jsonData.content) {
                answerRef.current += jsonData.content;
                setAnswer(answerRef.current);
                console.log(
                  `🔧 ✅ Added content, new length: ${answerRef.current.length}`
                );
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
    <div className="w-full max-w-full md:max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative mt-[2.25em] w-full rounded-[1.5em] border-white/10 bg-white p-[1em] pt-[3em] md:pt-[1em] min-h-[120px] md:min-h-0 shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]"
      >
        <a
          href="https://datacards.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[1em] right-[1em] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-sm hover:opacity-80 transition-opacity z-10"
        >
          Built with DataCards
        </a>

        <textarea
          ref={textareaRef}
          name="prompt"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          className="block w-full resize-none bg-transparent text-[max(1rem,1.125em)] leading-[120%] text-black outline-none mt-2 md:mt-0 pr-32 md:pr-40"
          rows={3}
          placeholder={PLACEHOLDER_PROMPTS[placeholderIndex]}
          autoFocus
          disabled={isStreaming}
        />

        <button
          type={showRefresh ? "button" : "submit"}
          onClick={(e) => {
            console.log(
              "🔧 Button clicked",
              showRefresh ? "refresh" : "submit"
            );
            if (showRefresh) {
              handleRefresh();
            }
          }}
          disabled={isStreaming || (!question.trim() && !showRefresh)}
          className="absolute bottom-[1em] right-[1em] w-[2em] h-[2em] rounded-full bg-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-black/90"
        >
          {showRefresh ? (
            <img
              src="/images/icons/anti-clockwise.svg"
              alt="Refresh"
              className="w-[1.2em] h-[1.2em]"
            />
          ) : (
            <img
              src="/images/icons/arrow-up.svg"
              alt="Send"
              className="w-[1.2em] h-[1.2em]"
            />
          )}
        </button>

        {/* Loading State */}
        {isStreaming && !answer && (
          <div className="mt-0 w-full">
            <p className="text-[max(1rem,1.125em)] leading-[120%] text-muted-foreground text-left">
              {loadingMessages.slice(0, -1).map((msg, idx) => (
                <span key={idx}>{msg}. </span>
              ))}
              {typingText && (
                <span>
                  {typingText}
                  <span className="inline-block w-[2px] h-[1em] bg-primary animate-pulse ml-1" />
                </span>
              )}
            </p>
          </div>
        )}

        {/* Answer Display - Inside the white box */}
        {answer && (
          <div className="mt-2 pt-2 border-t border-black/10 w-full">
            <div className="flex gap-3 w-[100%]">
              <img
                src={AI_FLOW_LOGO_SYMBOL}
                alt="AI Flow"
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <div
                ref={answerScrollRef}
                className="text-[max(1rem,1.125em)] leading-[120%] text-black flex-1 text-left pt-1 pr-10 max-h-[250px] overflow-y-auto prose prose-sm max-w-none custom-scrollbar"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0, 0, 0, 0.15) transparent",
                }}
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 last:mb-0">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-2">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                    h1: ({ children }) => (
                      <h1 className="text-xl font-bold mb-2">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-lg font-bold mb-2">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-base font-bold mb-2">{children}</h3>
                    ),
                    code: ({ children }) => (
                      <code className="bg-black/10 px-1 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-black/10 p-2 rounded overflow-x-auto mb-2">
                        {children}
                      </pre>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {answer}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
