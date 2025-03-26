
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Calendar, Briefcase, ArrowRight } from "lucide-react";

const Community = () => {
  const discussionTopics = [
    {
      title: "Navigating Gender Bias in Performance Reviews",
      author: "Emma Chen",
      replies: 28,
      likes: 42,
      tags: ["Workplace", "Career Tips"],
    },
    {
      title: "Balancing Career and Family: Support Systems",
      author: "Maria Gonzalez",
      replies: 56,
      likes: 79,
      tags: ["Work-Life Balance", "Support"],
    },
    {
      title: "Tech Industry: Breaking the Glass Ceiling",
      author: "Priya Sharma",
      replies: 34,
      likes: 51,
      tags: ["Tech", "Leadership"],
    },
    {
      title: "Negotiation Strategies That Work for Women",
      author: "Dana Kim",
      replies: 19,
      likes: 37,
      tags: ["Negotiation", "Career Tips"],
    },
  ];

  const upcomingEvents = [
    {
      title: "Women in Leadership Summit",
      date: "June 15-16, 2023",
      location: "San Francisco & Virtual",
      type: "Conference",
      description: "A two-day conference featuring keynotes, panels, and networking opportunities with women leaders across industries.",
    },
    {
      title: "Gender Equality in the Workplace Workshop",
      date: "May 28, 2023",
      location: "Virtual",
      type: "Workshop",
      description: "Interactive session on creating more inclusive and equitable workplace cultures.",
    },
    {
      title: "Breaking Barriers: STEM Career Pathways",
      date: "July 10, 2023",
      location: "Chicago",
      type: "Seminar",
      description: "Panel discussion with women leaders in science, technology, engineering, and mathematics.",
    },
  ];

  const jobListings = [
    {
      title: "Product Manager",
      company: "TechForward",
      location: "Remote",
      type: "Full-time",
      posted: "2 days ago",
      description: "Join our inclusive team committed to gender diversity in tech leadership.",
    },
    {
      title: "Senior Financial Analyst",
      company: "Equity Partners",
      location: "New York, NY",
      type: "Full-time",
      posted: "1 week ago",
      description: "Company with 50% women in leadership seeking experienced financial professionals.",
    },
    {
      title: "Marketing Director",
      company: "Global Health Initiative",
      location: "London or Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "Leading healthcare nonprofit with equitable compensation practices.",
    },
    {
      title: "Software Engineering Internship",
      company: "FutureTech",
      location: "Multiple Locations",
      type: "Internship",
      posted: "Just now",
      description: "Program specifically designed to support women and underrepresented genders in tech.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Community & Networking
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Connect with like-minded individuals, participate in discussions, discover events,
        and explore career opportunities in organizations committed to gender equality.
      </p>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Discussion Forum</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {discussionTopics.map((topic, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-xl">{topic.title}</CardTitle>
                <CardDescription>Started by {topic.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  {topic.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{topic.replies} replies</span>
                  <span>{topic.likes} likes</span>
                </div>
                <button className="text-primary hover:underline">
                  Join Discussion
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            View All Discussions
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Calendar className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Events & Meetups</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.date} • {event.location}</CardDescription>
                  </div>
                  <span className="text-xs bg-gold-light text-gold-dark px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Register
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Add to Calendar
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Browse All Events
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Job & Internship Board</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {jobListings.map((job, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company} • {job.location}</CardDescription>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full mb-1">
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      Posted {job.posted}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{job.description}</p>
              </CardContent>
              <CardFooter>
                <button className="flex items-center gap-1 text-primary hover:underline">
                  View Details <ArrowRight size={16} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            View All Opportunities
          </button>
        </div>
      </section>

      <div className="bg-purple-50 p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6">Connect with thousands of members worldwide committed to gender equality and professional growth.</p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Create an Account
          </button>
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Learn About Membership Benefits
          </button>
        </div>
      </div>
    </main>
  );
};

export default Community;
