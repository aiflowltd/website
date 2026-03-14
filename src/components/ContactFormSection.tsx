import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteButton } from "@/components/SiteButton";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  companySize: z.string().optional(),
  industry: z.string().optional(),
  situation: z.string().optional(),
  engagement: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClass =
  "h-11 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background";

const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–1000 employees",
  "1000+ employees",
];

const industries = [
  "Construction",
  "Real Estate",
  "Legal & Professional",
  "Energy & Industrial",
  "Finance & Fintech",
  "Enterprise SaaS",
  "Other",
];

const situations = [
  "Exploring an AI opportunity",
  "Need help with an existing AI project",
  "Looking for an AI team/partner",
  "Want a technical assessment",
  "Other",
];

const engagementTypes = [
  "Advisory",
  "Team augmentation",
  "Small delivery team",
  "Partner team",
  "Not sure yet",
];

export const ContactFormSection = () => {
  const [consentChecked, setConsentChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        toast.error("Configuration error. Please try again later.");
        return;
      }
      const response = await fetch(`${apiUrl}/api/contact/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
      setConsentChecked(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to send message.";
      toast.error(message);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: same header alignment as other sections */}
          <div>
            <p className="text-4xl md:text-5xl text-muted-foreground mb-1">
              Let's turn your
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-alternates">
              AI ambitions into reality.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold font-alternates mb-2"></h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Whether you're looking to start small or launch a transformative
              project, AI Flow is here to help you succeed. Get in touch for a
              friendly, no-pressure chat about your ideas and goals.
            </p>
          </div>

          {/* Right: minimal form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("name")}
                  placeholder="Full Name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("company")}
                  placeholder="Company (optional)"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("phone")}
                  placeholder="Phone (optional)"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select
                {...register("companySize")}
                className={cn("w-full px-3 py-2 text-sm", inputClass)}
                defaultValue=""
              >
                <option value="" disabled className="text-muted-foreground">
                  Company Size
                </option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <select
                {...register("industry")}
                className={cn("w-full px-3 py-2 text-sm", inputClass)}
                defaultValue=""
              >
                <option value="" disabled className="text-muted-foreground">
                  Industry
                </option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            <select
              {...register("situation")}
              className={cn("w-full px-3 py-2 text-sm", inputClass)}
              defaultValue=""
            >
              <option value="" disabled className="text-muted-foreground">
                What best describes your situation?
              </option>
              {situations.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              {...register("engagement")}
              className={cn("w-full px-3 py-2 text-sm", inputClass)}
              defaultValue=""
            >
              <option value="" disabled className="text-muted-foreground">
                How would you like to work together?
              </option>
              {engagementTypes.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>

            <Textarea
              {...register("message")}
              placeholder="Enter a description..."
              className={cn(
                "w-full min-h-[100px] resize-y py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
              )}
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={consentChecked}
                onChange={(e) => {
                  setConsentChecked(e.target.checked);
                  setValue("consent", e.target.checked, {
                    shouldValidate: true,
                  });
                }}
                className="mt-1 h-4 w-4 rounded border-border bg-card text-primary focus:ring-2 focus:ring-ring focus:ring-offset-0"
              />
              <label
                htmlFor="consent"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                I agree to the processing of my information in accordance with
                the{" "}
                <Link
                  to="/privacy"
                  className="text-primary underline hover:no-underline"
                >
                  Privacy Policy.
                </Link>
              </label>
            </div>
            {errors.consent && (
              <p className="text-destructive text-xs">
                {errors.consent.message}
              </p>
            )}

            <div className="pt-2">
              <SiteButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </SiteButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
