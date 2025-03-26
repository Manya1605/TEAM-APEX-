
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Stories from "./pages/Stories";
import Mentorship from "./pages/Mentorship";
import Community from "./pages/Community";
import Advocacy from "./pages/Advocacy";
import Education from "./pages/Education";
import Challenges from "./pages/Challenges";
import News from "./pages/News";
import JoinUs from "./pages/JoinUs";
import StoryDetail from "./components/StoryDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/community" element={<Community />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/education" element={<Education />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/news" element={<News />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
