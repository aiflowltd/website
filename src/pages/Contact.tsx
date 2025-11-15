import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import { Navigation } from "@/components/Navigation";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarfieldBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about our services, pricing, or anything else, 
                  our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@aiflow.ltd</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      123 AI Street, Tech District<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-2 text-primary">Quick Response</h3>
                <p className="text-muted-foreground text-sm">
                  Our team typically responds within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="mt-2"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-2"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company" className="text-foreground">
                    Company
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="mt-2"
                    placeholder="Your company name"
                  />
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="mt-2 min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-background font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
