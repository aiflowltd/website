import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tag } from "@/components/Tag";
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  Upload,
} from "lucide-react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getJob } from "@/data/jobs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useState, useRef, useEffect } from "react";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  linkedIn: z
    .string()
    .min(1, "LinkedIn profile is required")
    .url("Please enter a valid LinkedIn URL"),
  portfolio: z
    .string()
    .url("Please enter a valid portfolio URL")
    .optional()
    .or(z.literal("")),
  coverLetter: z.string().optional().or(z.literal("")),
  resume: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const panelClass =
  "rounded-lg border border-border bg-background/80 p-6 md:p-8 text-muted-foreground";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = id ? getJob(id) : undefined;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  useEffect(() => {
    if (job) {
      document.title = `AI Flow | ${job.title}`;
    } else {
      document.title = "AI Flow | Careers";
    }
  }, [job]);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    try {
      if (!selectedFile) {
        toast.error("Please upload your resume");
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("linkedin", data.linkedIn || "");
      formData.append("portfolio", data.portfolio || "");
      formData.append("coverLetter", data.coverLetter || "");
      formData.append("position", job.title);
      formData.append("resume", selectedFile);

      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error(
          "Backend URL not configured. Please set VITE_API_URL=http://localhost:3001 in .env.local and restart dev server",
        );
      }

      const response = await fetch(`${apiUrl}/api/applications/submit`, {
        method: "POST",
        body: formData,
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        let errorMessage = "Submission failed";
        try {
          if (contentType?.includes("application/json")) {
            const error = await response.json();
            errorMessage = error.error || error.message || errorMessage;
          } else {
            const text = await response.text();
            errorMessage = text || errorMessage;
          }
        } catch {
          /* keep default */
        }
        throw new Error(errorMessage);
      }

      try {
        if (contentType?.includes("application/json")) {
          await response.json();
        } else {
          await response.text();
        }
      } catch {
        /* success without parseable body */
      }

      toast.success(
        "Application submitted successfully! We'll be in touch soon.",
      );
      reset();
      setSelectedFile(null);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please try again or email us directly.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("resume", file.name);
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = [".pdf", ".doc", ".docx"];
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

      if (validTypes.includes(fileExtension)) {
        setSelectedFile(file);
        setValue("resume", file.name);
      } else {
        toast.error("Please upload a PDF, DOC, or DOCX file");
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground page-shell">
      <Navigation />

      <main>
        <Section padding="hero" maxWidth="default" className="!pb-10">
          <button
            type="button"
            onClick={() => navigate("/careers")}
            className="group mb-8 inline-flex cursor-pointer items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to careers</span>
          </button>

          <div className="mb-4">
            <Tag>{job.department}</Tag>
          </div>

          <h1 className="mb-6 font-alternates text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 shrink-0" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 shrink-0" />
              <span>{job.experience}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 shrink-0" />
                <span>{job.salary}</span>
              </div>
            )}
          </div>
        </Section>

        <Section padding="default" maxWidth="default" className="!pt-0">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            <div className="space-y-8 lg:col-span-2">
              <div
                className={cn(
                  panelClass,
                  "border-primary/15 bg-muted/25 text-foreground",
                )}
              >
                <h2 className="mb-3 font-alternates text-lg font-semibold text-foreground">
                  Important note
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  This is part of our ongoing effort to grow a pool of experts
                  we can staff on projects as they arise. If your profile fits
                  and you pass the interview, we&apos;ll connect you to paid
                  opportunities as they land. We hire both freelancers
                  (B2B/C2C) and employees. Individuals only, no agencies.
                </p>
              </div>

              <div className={panelClass}>
                <h2 className="mb-4 font-alternates text-2xl font-bold text-foreground">
                  About the role
                </h2>
                <p className="leading-relaxed">{job.description}</p>
              </div>

              <div className={panelClass}>
                <h2 className="mb-6 font-alternates text-2xl font-bold text-foreground">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={panelClass}>
                <h2 className="mb-6 font-alternates text-2xl font-bold text-foreground">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave.length > 0 && (
                <div className={panelClass}>
                  <h2 className="mb-6 font-alternates text-2xl font-bold text-foreground">
                    Nice to have
                  </h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={panelClass}>
                <h2 className="mb-6 font-alternates text-2xl font-bold text-foreground">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className={cn(panelClass, "sticky top-28")}>
                <h2 className="mb-2 font-alternates text-2xl font-bold text-foreground">
                  Apply now
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Send your details and CV. We review every application and
                  respond when there is a fit.
                </p>

                <div className="rounded-lg border border-border/80 bg-muted/20 p-5 md:p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      Full name *
                    </label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="John Doe"
                      className="rounded-md border-border bg-background"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className="rounded-md border-border bg-background"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (555) 123-4567"
                      className="rounded-md border-border bg-background"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="linkedIn"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      LinkedIn profile *
                    </label>
                    <Input
                      id="linkedIn"
                      type="url"
                      {...register("linkedIn")}
                      placeholder="https://linkedin.com/in/johndoe"
                      className="rounded-md border-border bg-background"
                    />
                    {errors.linkedIn && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.linkedIn.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="portfolio"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      Portfolio / website{" "}
                      <span className="font-normal normal-case tracking-normal text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <Input
                      id="portfolio"
                      type="url"
                      {...register("portfolio")}
                      placeholder="https://johndoe.com"
                      className="rounded-md border-border bg-background"
                    />
                    {errors.portfolio && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.portfolio.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      Cover letter{" "}
                      <span className="font-normal normal-case tracking-normal text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <Textarea
                      id="coverLetter"
                      {...register("coverLetter")}
                      placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                      rows={6}
                      className="resize-none rounded-md border-border bg-background"
                    />
                    {errors.coverLetter && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.coverLetter.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      Resume / CV *
                    </label>
                    <div
                      className={cn(
                        "cursor-pointer rounded-md border border-dashed border-border bg-background/80 p-6 text-center transition-colors",
                        isDragging
                          ? "border-primary/40 bg-muted"
                          : "hover:border-primary/30",
                      )}
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={handleClick}
                    >
                      {selectedFile ? (
                        <div className="flex items-center justify-center gap-2 text-foreground">
                          <CheckCircle2 className="h-6 w-6 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            {selectedFile.name}
                          </span>
                        </div>
                      ) : (
                        <>
                          <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="mb-1 text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, DOC, or DOCX (max 5MB)
                          </p>
                        </>
                      )}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </div>
                    {errors.resume && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.resume.message}
                      </p>
                    )}
                  </div>

                  <SiteButton
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit application"}
                  </SiteButton>

                  <p className="text-center text-xs leading-relaxed text-muted-foreground">
                    By submitting, you agree to our Privacy Policy and Terms of
                    Service
                  </p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
