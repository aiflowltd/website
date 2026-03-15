import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SiteButton } from "@/components/SiteButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    document.title = "AI Flow | Contact";
  }, []);

  // Scroll to calendly section if hash is present
  useEffect(() => {
    if (location.hash === "#calendly") {
      const element = document.getElementById("calendly");
      if (element) {
        // Small delay to ensure the page is rendered
        setTimeout(() => {
          const yOffset = -100; // Offset to account for navigation header
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const onSubmit = async (data: ContactForm) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      if (!apiUrl) {
        console.error("API URL not configured");
        toast.error("Configuration error. Please try again later.");
        return;
      }

      console.log("📨 Submitting contact form:", data);

      const response = await fetch(`${apiUrl}/api/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      const result = await response.json();
      console.log("✅ Contact form submitted successfully:", result);
      
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
    } catch (error: any) {
      console.error("❌ Error submitting contact form:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-alternates mb-6 text-foreground">
            Get in touch
          </h1>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can
            help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold font-alternates mb-6 text-foreground">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Doe"
                  className="mt-2"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="mt-2"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="Your Company"
                  className="mt-2"
                />
                {errors.company && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell us about your project..."
                  className="mt-2 min-h-[150px]"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <SiteButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </SiteButton>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold font-alternates mb-6 text-foreground">Contact information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-grey" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-grey">contact@aiflow.ltd</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-grey" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-grey">
                      +41 76 777 11 31 (Switzerland)
                    </p>
                    <p className="text-grey">
                      +971 58 655 8931 (Dubai)
                    </p>
                    <p className="text-grey">
                      +40 721 658 931 (Romania)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-grey" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-grey">
                      Zürich, Switzerland
                      <br />
                      Dubai, UAE
                      <br />
                      Cluj-Napoca, Romania
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold font-alternates mb-4 text-foreground">Why work with us?</h3>
              <ul className="space-y-3 text-grey">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Deep expertise in AI/ML, +10 years experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Focus on practical, revenue-generating solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>End-to-end product development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Proven track record with industry leaders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Calendly Booking Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12" id="calendly">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-grey" />
              <h2 className="text-3xl md:text-4xl font-bold font-alternates text-foreground">
                Schedule a call
              </h2>
            </div>
            <p className="text-lg text-grey max-w-2xl mx-auto">
              Prefer to talk directly? Book a 20-minute consultation call with
              us to discuss your AI project.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/mihaianton/20min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=080808&text_color=ffffff"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
