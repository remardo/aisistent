import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

// Route-level code splitting (named exports mapped to default)
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const CasesPage = lazy(() => import("./pages/CasesPage").then(m => ({ default: m.CasesPage })));
const CaseDetailPage = lazy(() => import("./pages/CaseDetailPage").then(m => ({ default: m.CaseDetailPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage").then(m => ({ default: m.ServiceDetailPage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage").then(m => ({ default: m.BlogPostPage })));
const ChatbotsPage = lazy(() => import("./pages/services/ChatbotsPage").then(m => ({ default: m.ChatbotsPage })));
const AIAssistantsPage = lazy(() => import("./pages/services/AIAssistantsPage").then(m => ({ default: m.AIAssistantsPage })));
const AutomationPage = lazy(() => import("./pages/services/AutomationPage").then(m => ({ default: m.AutomationPage })));
const VoiceAssistantsPage = lazy(() => import("./pages/services/VoiceAssistantsPage").then(m => ({ default: m.VoiceAssistantsPage })));
const AnalyticsPage = lazy(() => import("./pages/services/AnalyticsPage").then(m => ({ default: m.AnalyticsPage })));
const CustomSolutionsPage = lazy(() => import("./pages/services/CustomSolutionsPage").then(m => ({ default: m.CustomSolutionsPage })));

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const CaseDetailRoute = () => {
    const { caseId } = useParams();
    return <CaseDetailPage caseId={caseId || ""} />;
  };

  const BlogPostRoute = () => {
    const { slug } = useParams();
    return <BlogPostPage slug={slug || ""} />;
  };

  const ServiceDetailRoute = () => {
    const { serviceId } = useParams();
    return <ServiceDetailPage serviceId={serviceId || ""} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/case/:caseId" element={<CaseDetailRoute />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostRoute />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/chatbots" element={<ChatbotsPage />} />
            <Route path="/services/ai-assistants" element={<AIAssistantsPage />} />
            <Route path="/services/automation" element={<AutomationPage />} />
            <Route path="/services/voice-assistants" element={<VoiceAssistantsPage />} />
            <Route path="/services/analytics" element={<AnalyticsPage />} />
            <Route path="/services/custom-solutions" element={<CustomSolutionsPage />} />
            {/* Legacy route */}
            <Route path="/service/:serviceId" element={<ServiceDetailRoute />} />
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
