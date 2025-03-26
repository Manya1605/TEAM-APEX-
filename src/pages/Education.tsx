
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Play, BookOpen, MessageSquare } from "lucide-react";

const Education = () => {
  const courses = [
    {
      title: "Gender Equality in the Workplace",
      instructor: "Dr. Lisa Martinez",
      duration: "6 weeks",
      level: "Intermediate",
      enrolled: 1482,
      price: "Free",
      rating: 4.8,
      image: "https://www.skineasi.com/cdn/shop/articles/shutterstock_2312871189.jpg?v=1709622329",
      featured: true,
    },
    {
      title: "Women's Leadership: Breaking Barriers",
      instructor: "Michelle Taylor",
      duration: "8 weeks",
      level: "Advanced",
      enrolled: 974,
      price: "$49",
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk-FsX3DiY2pqqkYwEtV-QnV63BPugHj0qQ&s",
      featured: false,
    },
    {
      title: "Gender Studies: Historical Perspectives",
      instructor: "Prof. James Wilson",
      duration: "10 weeks",
      level: "Beginner",
      enrolled: 2365,
      price: "Free",
      rating: 4.6,
      image: "https://ocw.mit.edu/courses/21h-983j-gender-historical-perspectives-fall-2020/b937c207673b733b34b7c85a6a967718_21H-983Jf20.jpg",
      featured: false,
    },
    {
      title: "Negotiation Skills for Women",
      instructor: "Sarah Johnson",
      duration: "4 weeks",
      level: "All Levels",
      enrolled: 3212,
      price: "$29",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepD4lEJTeJoOfD06t6W07FdIael_7usAssw&s",
      featured: true,
    },
  ];

  const webinars = [
    {
      title: "Addressing Unconscious Bias in Hiring",
      speaker: "Dr. Maya Patel",
      date: "June 12, 2023",
      time: "1:00 PM EST",
      duration: "90 min",
      status: "Upcoming",
    },
    {
      title: "Raising the Next Generation of Allies",
      speaker: "Jessica Williams & Thomas Chen",
      date: "May 28, 2023",
      time: "11:00 AM EST",
      duration: "60 min",
      status: "Upcoming",
    },
    {
      title: "Gender Equality in STEM Fields",
      speaker: "Dr. Elena Rodriguez",
      date: "May 5, 2023",
      time: "2:00 PM EST",
      duration: "75 min",
      status: "Recorded",
    },
  ];

  const quizzes = [
    {
      title: "Gender Equality Knowledge Check",
      questions: 15,
      timeEstimate: "10 min",
      difficulty: "Beginner",
      description: "Test your knowledge of basic concepts related to gender equality and women's rights.",
    },
    {
      title: "Workplace Bias Assessment",
      questions: 20,
      timeEstimate: "15 min",
      difficulty: "Intermediate",
      description: "Identify common biases that may affect workplace dynamics and decision-making.",
    },
    {
      title: "Gender in Media Literacy",
      questions: 25,
      timeEstimate: "20 min",
      difficulty: "Advanced",
      description: "Analyze how gender is portrayed in various media and recognize stereotypes.",
    },
  ];

  const faqs = [
    {
      question: "Are the courses on this platform certified?",
      answer: "Yes, most of our courses offer completion certificates. Free courses typically provide a basic certificate, while paid courses often include accredited certifications from partner organizations.",
    },
    {
      question: "How can I access recorded webinars?",
      answer: "All recorded webinars are available in your account dashboard after registration. If you weren't registered for the live event, you can still gain access through our library section.",
    },
    {
      question: "Can I propose a topic for a future course or webinar?",
      answer: "Absolutely! We welcome community input on educational content. Please use the 'Suggest a Topic' form in your account dashboard, and our education team will review your proposal.",
    },
    {
      question: "Is financial aid available for paid courses?",
      answer: "Yes, we offer scholarships and financial aid for our paid courses. Click on the 'Financial Aid' link on any course page to apply. Decisions are typically made within 1-2 weeks.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Educational Hub
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Expand your knowledge, gain new skills, and deepen your understanding of gender equality
        through our comprehensive educational resources, courses, and interactive learning tools.
      </p>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className={`animate-fade-up overflow-hidden ${course.featured ? 'border-primary border-2' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                {course.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs py-1 px-2 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>By {course.instructor}</CardDescription>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${course.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-primary-dark'}`}>
                    {course.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>⭐ {course.rating}/5</span>
                  <span>{course.enrolled.toLocaleString()} enrolled</span>
                </div>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Enroll Now
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Browse All Courses
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Expert-Led Webinars</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {webinars.map((webinar, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    webinar.status === 'Upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {webinar.status}
                  </span>
                </div>
                <CardDescription>{webinar.speaker}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Date:</span>
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Time:</span>
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span>{webinar.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 flex items-center justify-center gap-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  {webinar.status === 'Upcoming' ? (
                    <>Register Now</>
                  ) : (
                    <>Watch Recording <Play size={16} /></>
                  )}
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            View All Webinars
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Interactive Learning</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                      {quiz.questions} questions
                    </span>
                    <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                      {quiz.timeEstimate}
                    </span>
                    <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                      {quiz.difficulty}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{quiz.description}</p>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors">
                  Take Quiz
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Collapsible key={index} className="animate-fade-up border rounded-lg overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-white hover:bg-gray-50 text-left font-medium">
                {faq.question}
                <ChevronDown size={18} className="text-primary transition-transform duration-200 ease-in-out ui-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 bg-white text-gray-600">
                {faq.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>

      <div className="bg-purple-50 p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4">Create Your Learning Plan</h2>
        <p className="mb-6">Our personalized learning paths help you focus on the topics most relevant to your goals and interests.</p>
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          Start Your Learning Journey
        </button>
      </div>
    </main>
  );
};

export default Education;
