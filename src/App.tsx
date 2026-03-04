import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TagManager from "react-gtm-module";
import { ScrollToTop } from "@/components/ScrollToTop";
import { VITE_GOOGLE_TAG_MANAGER_ID } from "@/constants/env";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import InterviewDetail from "./pages/InterviewDetail";
import NotFound from "./pages/NotFound";
import Legal from "./pages/industry/Legal";
import RealEstate from "./pages/industry/RealEstate";
import Marketing from "./pages/industry/Marketing";
import { Analytics } from "@vercel/analytics/react";
import Alpha from "./pages/clients/Alpha";
import Beta from "./pages/clients/Beta";
import Gamma from "./pages/clients/Gamma";
import Delta from "./pages/clients/Delta";
import Construction from "./pages/industry/Construction";
import PropTech from "./pages/industry/PropTech";
import Agnostic from "./pages/industry/Agnostic";
import Workshops from "./pages/Workshops";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (VITE_GOOGLE_TAG_MANAGER_ID) {
      TagManager.initialize({
        gtmId: VITE_GOOGLE_TAG_MANAGER_ID,
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/interviews/:id" element={<InterviewDetail />} />
            <Route path="/industry/legal" element={<Legal />} />
            <Route path="/industry/construction" element={<Construction />} />
            <Route path="/industry/real-estate" element={<RealEstate />} />
            <Route path="/industry/marketing" element={<Marketing />} />
            <Route path="/clients/alpha-7x9k2m" element={<Alpha />} />
            <Route path="/clients/beta-4p8q1n" element={<Beta />} />
            <Route path="/clients/gamma-9w3r5t" element={<Gamma />} />
            <Route path="/clients/delta-2k5m8p" element={<Delta />} />
            <Route path="/industry/proptech" element={<PropTech />} />
            <Route path="/industry/agnostic" element={<Agnostic />} />
            <Route path="/workshops" element={<Workshops />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <Analytics />
    </QueryClientProvider>
  );
};

export default App;
