
import { Hero } from "@/components/Hero";
import { StatCards } from "@/components/StatCards";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredSections = [
    {
      title: "Explore Gender Data",
      description: "Interactive visualizations and statistics on gender disparities worldwide",
      link: "/dashboard",
      image: "https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2024/10/AdobeStock_429015029_GH_resize-800x450.jpg",
    },
    {
      title: "Success Stories",
      description: "Inspiring profiles of women breaking barriers and creating change",
      link: "/stories",
      image: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_615524918_407969.jpg",
    },
    {
      title: "Find a Mentor",
      description: "Connect with experienced professionals to guide your career journey",
      link: "/mentorship",
      image: "https://www.mightycall.com/wp-content/uploads/2021/11/success-tips-for-women-leader.jpg",
    },
    {
      title: "Join the Community",
      description: "Participate in discussions, events, and networking opportunities",
      link: "/community",
      image: "https://images.deccanchronicle.com/dc-Cover-652ovhkibhg82kh6on274ihkn1-20171203064543.Medi.jpeg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            The Current State of Gender Equality
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Despite progress, significant gender gaps persist worldwide. Explore the data 
            and join our efforts to create a more equitable future.
          </p>
          
          <StatCards />
          
          <div className="text-center mt-10">
            <Link to="/dashboard">
              <Button className="bg-primary">
                Explore Full Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Words of Inspiration
          </h2>
          
          <QuoteCarousel />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Discover What We Offer
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            From data-driven insights to mentorship opportunities, our platform provides 
            comprehensive resources to support gender equality initiatives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSections.map((section, index) => (
              <Card key={index} className="overflow-hidden animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="h-40 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover transform transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to={section.link} className="text-primary flex items-center hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission Today
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Together, we can create a world where gender equality is not just a goal, but a reality.
            Connect with our community and be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/join-us">
              <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Join Us
              </Button>
            </Link>
            <Link to="/education">
              <Button className="bg-gold hover:bg-gold-dark w-full sm:w-auto">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
