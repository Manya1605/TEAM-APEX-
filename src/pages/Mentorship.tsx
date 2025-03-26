
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const Mentorship = () => {
  const mentors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Tech Executive & Former CTO",
      expertise: ["Leadership", "Tech Strategy", "Career Transition"],
      industry: "Technology",
      location: "San Francisco, CA",
      image: "https://images.squarespace-cdn.com/content/v1/5ef2087220c7256a8632676b/1641953034817-MM1BTZ7DRMN1BLPXBDEL/sarah-johnson.jpg",
      available: true,
    },
    {
      name: "Maria Rodriguez",
      role: "Startup Founder & Investor",
      expertise: ["Entrepreneurship", "Fundraising", "Product Development"],
      industry: "Venture Capital",
      location: "New York, NY",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEVDeAoxJQ_pwEK6qrWI60KNHGoVUXUOy_w&s",
      available: true,
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research Scientist",
      expertise: ["STEM Careers", "Academic Research", "Work-Life Balance"],
      industry: "Biotechnology",
      location: "Boston, MA",
      image: "https://hangar1publishing.com/cdn/shop/articles/04---Amara-Okafor-Pic.jpg?v=1741890271&width=1080",
      available: false,
    },
    {
      name: "Jennifer Wu",
      role: "Finance Director",
      expertise: ["Financial Planning", "Corporate Leadership", "Negotiation"],
      industry: "Finance",
      location: "Chicago, IL",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL3sMACOR3E8wzkUPU0c0SWpTUoikR2SCPA&s",
      available: true,
    },
    {
      name: "Lena Patel",
      role: "Marketing Executive",
      expertise: ["Brand Strategy", "Digital Marketing", "Public Speaking"],
      industry: "Marketing",
      location: "Seattle, WA",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ndKHrmmHRJ-1FmFhFuHC-RB4WF_35zRWuw&s",
      available: true,
    },
    {
      name: "Sophia Mendez",
      role: "Healthcare Administrator",
      expertise: ["Healthcare Policy", "Team Management", "Crisis Leadership"],
      industry: "Healthcare",
      location: "Miami, FL",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXFpp5JXS6adzXHrONmQvpzw0c2fLno-d_A&s",
      available: false,
    },
  ];

  const resources = [
    {
      title: "Women in Leadership Workshop",
      type: "Workshop",
      duration: "6 weeks",
      cost: "Free",
      featured: true,
      description: "A comprehensive program designed to build leadership skills and confidence for women in all stages of their careers.",
      image: "https://media.licdn.com/dms/image/C4D12AQENXvvrXAqqig/article-cover_image-shrink_600_2000/0/1584015909002?e=2147483647&v=beta&t=ayUqYTpmjcGCw5Dz3Di7LAHkvNybnEUmyr6VY8AckOU",
    },
    {
      title: "Negotiation Masterclass",
      type: "Course",
      duration: "4 weeks",
      cost: "$99",
      featured: false,
      description: "Learn effective negotiation techniques specifically tailored for women in the workplace.",
      image: "https://www.corporateclassinc.com/wp-content/uploads/2020/09/woman-leaders-meeting-for-businesses-women-in-leadership-2500-1667.jpg",
    },
    {
      title: "STEM Scholarships for Women",
      type: "Scholarship",
      duration: "Varies",
      cost: "N/A",
      featured: true,
      description: "Financial support for women pursuing degrees in science, technology, engineering, and mathematics.",
      image: "https://www.mpowerfinancing.com/wp-content/uploads/2020/02/CL23804-Edit-1.png.webp",
    },
    {
      title: "Work-Life Balance Retreat",
      type: "Event",
      duration: "Weekend",
      cost: "$250",
      featured: false,
      description: "A supportive retreat focused on strategies for managing career and personal life effectively.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgYNBoAewP3mDljqS7z-2Rc_yqJVSCpHCcA&s",
    },
  ];

  const blogs = [
    {
      title: "Overcoming Imposter Syndrome in Male-Dominated Fields",
      author: "Dr. Rebecca Chen",
      date: "May 15, 2023",
      readTime: "8 min",
      excerpt: "Practical strategies for building confidence and recognizing your value in environments where you might feel like an outsider."
    },
    {
      title: "Navigating Parenthood and Career Advancement",
      author: "Maya Patel",
      date: "April 23, 2023",
      readTime: "12 min",
      excerpt: "How to balance family responsibilities while continuing to grow professionally and advocate for yourself."
    },
    {
      title: "Building Your Personal Brand as a Woman Leader",
      author: "Tanya Williams",
      date: "March 10, 2023",
      readTime: "6 min",
      excerpt: "Authentic personal branding strategies that amplify your voice and establish your expertise."
    },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Mentorship & Career Resources
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Connect with experienced mentors, access educational resources, and find guidance
        to navigate gender-based career challenges and achieve your professional goals.
      </p>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="font-playfair text-3xl font-semibold">Find a Mentor</h2>
          <div className="mt-4 md:mt-0 space-y-2 md:space-y-0 md:flex md:gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>All Industries</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Marketing</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>All Locations</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>Remote Only</option>
            </select>
            <div className="flex items-center space-x-2">
              <Checkbox id="available" />
              <label htmlFor="available" className="text-sm">Available Now</label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <Card key={index} className={`animate-fade-up ${!mentor.available ? 'opacity-70' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                {mentor.available && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white text-xs py-1 px-2 rounded-full">
                    Available
                  </span>
                )}
              </div>
              <CardHeader>
                <CardTitle>{mentor.name}</CardTitle>
                <CardDescription>{mentor.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Expertise:</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((skill, i) => (
                      <span key={i} className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>{mentor.industry}</div>
                  <div>{mentor.location}</div>
                </div>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Request Mentorship
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className={`animate-fade-up ${resource.featured ? 'border-primary border-2' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.type} • {resource.duration}</CardDescription>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${resource.cost === 'Free' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {resource.cost}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Learn More
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Browse All Resources
          </button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Empowerment Blogs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-xl">{blog.title}</CardTitle>
                <CardDescription>By {blog.author} • {blog.date} • {blog.readTime} read</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{blog.excerpt}</p>
              </CardContent>
              <CardFooter>
                <button className="text-primary hover:underline">
                  Read Full Article
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="bg-gold-light p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4 text-gold-dark">Become a Mentor</h2>
        <p className="mb-6 text-gold-dark">Share your expertise and make a difference in someone's career journey. Join our network of mentors today.</p>
        <button className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors">
          Apply as Mentor
        </button>
      </div>
    </main>
  );
};

export default Mentorship;
