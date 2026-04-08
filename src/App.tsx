import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieBanner } from "@/components/CookieBanner";
import { ConsentGatedAnalytics } from "@/components/ConsentGatedAnalytics";
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
import Alpha from "./pages/clients/Alpha";
import Beta from "./pages/clients/Beta";
import Gamma from "./pages/clients/Gamma";
import Delta from "./pages/clients/Delta";
import Epsilon from "./pages/clients/Epsilon";
import Construction from "./pages/industry/Construction";
import PropTech from "./pages/industry/PropTech";
import Agnostic from "./pages/industry/Agnostic";
import Workshops from "./pages/Workshops";
import { DatacardsWidget } from "@/components/DatacardsWidget";
import { useLocation } from "react-router-dom";

const DatacardsWidgetWrapper = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/clients/")) return null;
  return <DatacardsWidget />;
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookieConsentProvider>
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
              <Route path="/clients/epsilon-5h2n7v" element={<Epsilon />} />
              <Route path="/industry/proptech" element={<PropTech />} />
              <Route path="/industry/agnostic" element={<Agnostic />} />
              <Route path="/workshops" element={<Workshops />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieBanner />
            <DatacardsWidgetWrapper />
          </BrowserRouter>
          <ConsentGatedAnalytics />
        </TooltipProvider>
      </CookieConsentProvider>
    </QueryClientProvider>
  );
};

export default App;
