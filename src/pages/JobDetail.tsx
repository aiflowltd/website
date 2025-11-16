import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  CheckCircle2, 
  ArrowLeft,
  Upload
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getJob } from "@/data/jobs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  linkedIn: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
  coverLetter: z.string().min(100, "Cover letter must be at least 100 characters"),
  resume: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const JobDetail = () => {
  const { id } = useParams();
  const job = id ? getJob(id) : undefined;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully! We'll be in touch soon.");
      reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        {/* Back Button */}
        <Link to="/careers" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>{job.experience}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span>{job.salary}</span>
              </div>
            )}
          </div>
          <Badge className="bg-primary/20 text-primary border-primary/30">
            {job.department}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Important Note */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-6">
              <h3 className="text-lg font-bold mb-3 text-primary">Important Note</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is part of our ongoing effort to grow a pool of experts we can staff on projects as they arise. 
                If your profile fits and you pass the interview, we'll connect you to paid opportunities as they land. 
                We hire both freelancers (B2B/C2C) and employees. Individuals only, no agencies.
              </p>
            </Card>

            {/* About the Role */}
            <Card className="bg-card border-border p-8">
              <h2 className="text-2xl font-bold mb-4">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </Card>

            {/* Responsibilities */}
            <Card className="bg-card border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Requirements */}
            <Card className="bg-card border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Nice to Have */}
            {job.niceToHave.length > 0 && (
              <Card className="bg-card border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Nice to Have</h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Benefits */}
            <Card className="bg-card border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    {...register("fullName")}
                    placeholder="John Doe"
                    className="bg-background border-border"
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="bg-background border-border"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+1 (555) 123-4567"
                    className="bg-background border-border"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="linkedIn" className="block text-sm font-medium mb-2">
                    LinkedIn Profile
                  </label>
                  <Input
                    id="linkedIn"
                    type="url"
                    {...register("linkedIn")}
                    placeholder="https://linkedin.com/in/johndoe"
                    className="bg-background border-border"
                  />
                  {errors.linkedIn && (
                    <p className="text-destructive text-sm mt-1">{errors.linkedIn.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                    Portfolio / Website
                  </label>
                  <Input
                    id="portfolio"
                    type="url"
                    {...register("portfolio")}
                    placeholder="https://johndoe.com"
                    className="bg-background border-border"
                  />
                  {errors.portfolio && (
                    <p className="text-destructive text-sm mt-1">{errors.portfolio.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                    Cover Letter *
                  </label>
                  <Textarea
                    id="coverLetter"
                    {...register("coverLetter")}
                    placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                  {errors.coverLetter && (
                    <p className="text-destructive text-sm mt-1">{errors.coverLetter.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">
                    Resume / CV *
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PDF, DOC, or DOCX (max 5MB)
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      {...register("resume")}
                    />
                  </div>
                  {errors.resume && (
                    <p className="text-destructive text-sm mt-1">{errors.resume.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-background font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetail;

