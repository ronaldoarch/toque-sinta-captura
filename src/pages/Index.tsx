import VideoSection from "@/components/VideoSection";
import ExpertSection from "@/components/ExpertSection";
import CourseInfoSection from "@/components/CourseInfoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <VideoSection />
      <ExpertSection />
      <CourseInfoSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
