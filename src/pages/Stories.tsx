
import { Link } from "react-router-dom";
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const Stories = () => {
  const leaders = [
    {
      id: 1,
      name: "Malala Yousafzai",
      role: "Education Activist & Nobel Laureate",
      country: "Pakistan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6dxkznYisgGCvPR7mkjfvVvICe44M8s-ag&s",
      quote: "One child, one teacher, one book, one pen can change the world.",
      achievement: "Youngest Nobel Prize laureate and global advocate for girls' education",
    },
    {
      id: 2,
      name: "Kamala Harris",
      role: "Vice President",
      country: "United States",
      image: "https://media.npr.org/assets/img/2020/11/03/gettyimages-1090431902_wide-fb5818e2b03f310244cc5b6ead88335bca23603d.jpg?s=1100&c=50&f=jpeg",
      quote: "My mother would look at me and she'd say, 'Kamala, you may be the first to do many things, but make sure you are not the last.'",
      achievement: "First female, first Black, and first South Asian Vice President of the United States",
    },
    {
      id: 3,
      name: "Ruth Bader Ginsburg",
      role: "Supreme Court Justice",
      country: "United States",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFgQEIYTVdfKkeqDR9osvAKvXbJemBr_XQA&s",
      quote: "Women belong in all places where decisions are being made.",
      achievement: "Champion of gender equality and women's rights through landmark legal cases",
    },
    {
      id: 4,
      name: "Melinda Gates",
      role: "Philanthropist",
      country: "United States",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdh6GMrDhbpc6V-44Z7JcHFuvDrSPjielmw&s",
      quote: "If you are successful, it is because somewhere, sometime, someone gave you a life or an idea that started you in the right direction.",
      achievement: "Co-chair of the Bill & Melinda Gates Foundation, driving global health and equity initiatives",
    },
    {
      id: 5,
      name: "Wangari Maathai",
      role: "Environmental Activist",
      country: "Kenya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXzYWQGFF0y_vV8QaoyXc_0Jt5AseLgWUcA&s",
      quote: "Until you dig a hole, you plant a tree, you water it and make it survive, you haven't done a thing. You are just talking.",
      achievement: "First African woman to receive the Nobel Peace Prize for environmental conservation",
    },
    {
      id: 6,
      name: "Ada Lovelace",
      role: "Mathematician & Computer Pioneer",
      country: "United Kingdom",
      image: "https://i0.wp.com/sangerinstitute.blog/wp-content/uploads/2019/10/Ada_Lovelace_portrait_wikimedia_commons_1440_808.jpg?fit=1440%2C808&ssl=1",
      quote: "I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.",
      achievement: "First computer programmer who wrote the first algorithm intended for implementation on Charles Babbage's Analytical Engine",
    },
  ];

  const timelineEvents = [
    { year: 1893, title: "Women's Suffrage in New Zealand", description: "First country to grant women the right to vote" },
    { year: 1920, title: "19th Amendment", description: "Women gain the right to vote in the United States" },
    { year: 1928, title: "Equal Franchise Act", description: "British women gain equal voting rights with men" },
    { year: 1963, title: "Equal Pay Act", description: "U.S. legislation requiring equal pay for equal work" },
    { year: 1979, title: "CEDAW Adoption", description: "UN adopts the Convention on the Elimination of All Forms of Discrimination Against Women" },
    { year: 2018, title: "Global #MeToo Movement", description: "Worldwide movement against sexual harassment and assault" },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Success Stories
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Discover the journeys of remarkable women who have broken barriers,
        shattered glass ceilings, and paved the way for future generations.
      </p>

      <h2 className="font-playfair text-3xl font-semibold mb-8">Inspiring Women Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {leaders.map((leader, index) => (
          <Card key={index} className="animate-fade-up overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
            <div className="h-64 overflow-hidden">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover transform transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{leader.name}</CardTitle>
              <CardDescription>{leader.role} | {leader.country}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic flex gap-2 mb-4">
                <Quote size={18} className="text-primary" />
                {leader.quote}
              </p>
              <p className="text-sm text-gray-700">{leader.achievement}</p>
            </CardContent>
            <CardFooter>
              <Link to={`/story/${leader.id}`} className="text-primary text-sm hover:underline">
                Read full story
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="font-playfair text-3xl font-semibold mb-8">Featured Interviews</h2>
      <Carousel className="mb-16">
        <CarouselContent>
          {[1, 2, 3, 4].map((id) => (
            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <div className="aspect-video bg-purple-100 relative overflow-hidden">
                  <img 
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUamAqAva2wcRfg2Ekvmq4ATEcundjHT3mdw&s`} 
                    alt={`Interview ${id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Breaking Barriers in Tech</CardTitle>
                  <CardDescription>Interview with leading women entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Hear firsthand from tech leaders who are reshaping the industry and creating more inclusive spaces.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
      </Carousel>

      <h2 className="font-playfair text-3xl font-semibold mb-8">Historical Timeline</h2>
      <div className="mb-16 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`relative mb-12 pl-8 md:pl-0 md:ml-0 ${
            index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
          } animate-fade-up`} style={{animationDelay: `${index * 150}ms`}}>
            <div className="absolute left-0 md:left-auto md:right-auto md:-ml-3 md:-translate-x-0 md:translate-y-0 top-0 w-6 h-6 rounded-full bg-primary"></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-xl font-bold text-primary">{event.year}</div>
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4">Share Your Story</h2>
        <p className="mb-6">Have you broken barriers or overcome gender-based challenges? We'd love to hear your story and share it with our community.</p>
        <Link to="/join-us" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors inline-block">
          Submit Your Story
        </Link>
      </div>
    </main>
  );
};

export default Stories;
