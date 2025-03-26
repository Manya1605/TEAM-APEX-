
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const StoryDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the specific story based on the ID
  // For this example, we'll use a hardcoded story
  const story = {
    id: 1,
    name: "Malala Yousafzai",
    role: "Education Activist & Nobel Laureate",
    country: "Pakistan",
    image: "https://source.unsplash.com/random/800x600/?portrait-woman-1",
    birthDate: "July 12, 1997",
    quote: "One child, one teacher, one book, one pen can change the world.",
    achievements: [
      "Youngest Nobel Prize laureate at age 17",
      "Founded the Malala Fund to champion girls' education",
      "Author of 'I Am Malala' and other books",
      "UN Messenger of Peace",
      "Oxford University graduate"
    ],
    fullStory: `
      <p>Malala Yousafzai was born on July 12, 1997, in Mingora, Pakistan. She grew up in a region where the Taliban had banned girls from attending school. Despite these threats, Malala's father, who ran a school, insisted that his daughter receive an education.</p>
      
      <p>At just 11 years old, Malala began anonymously blogging for the BBC about life under Taliban rule and her desire to continue her education. As her advocacy grew, so did the threats against her. On October 9, 2012, while riding home on a school bus, Malala was shot in the head by a Taliban gunman.</p>
      
      <p>Miraculously, she survived and was eventually airlifted to England for medical treatment. Rather than silencing her, the attack amplified Malala's voice on the global stage. During her recovery, she became a prominent advocate for girls' education worldwide.</p>
      
      <p>In 2013, she established the Malala Fund, a non-profit organization dedicated to helping girls receive quality education. The following year, at the age of 17, Malala became the youngest person ever to receive the Nobel Peace Prize.</p>
      
      <p>She continued her own education at Oxford University, graduating in 2020 with a degree in Philosophy, Politics, and Economics. Today, Malala continues to work tirelessly as an activist and global leader for girls' education and women's rights.</p>
      
      <p>Her remarkable journey from a young girl in Pakistan's Swat Valley to a world-renowned advocate exemplifies how a single voice can spark significant change. As she famously stated in her address to the United Nations: "One child, one teacher, one book, one pen can change the world."</p>
    `,
    impact: `
      <p>Malala's advocacy has led to concrete changes in education policy around the world. Through the Malala Fund, she has helped establish education programs in regions where girls face significant barriers to schooling.</p>
      
      <p>Her work has influenced international development priorities, with many countries and organizations increasing their focus on girls' education. The "Malala Effect" has inspired countless young people to stand up for their rights and push for social change in their communities.</p>
      
      <p>Beyond policy changes, Malala's story has changed cultural attitudes about girls' education in many conservative regions. Parents who once kept their daughters from school now see education as essential for girls' futures.</p>
    `,
    relatedLinks: [
      { title: "Malala Fund", url: "https://malala.org" },
      { title: "Nobel Prize Profile", url: "#" },
      { title: "United Nations Youth Initiatives", url: "#" }
    ]
  };

  if (!story) {
    return <div className="container mx-auto py-32 px-4 text-center">Story not found</div>;
  }

  return (
    <main className="container mx-auto py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/stories" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Stories
        </Link>
        
        <div className="mb-12">
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img 
              src={story.image} 
              alt={story.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">
                  {story.name}
                </h1>
                <p className="text-white/90 text-xl">{story.role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-purple-50 px-4 py-2 rounded-full flex items-center">
              <MapPin size={16} className="text-primary mr-2" />
              <span>{story.country}</span>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-full flex items-center">
              <Calendar size={16} className="text-primary mr-2" />
              <span>Born: {story.birthDate}</span>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-full flex items-center">
              <Award size={16} className="text-primary mr-2" />
              <span>Nobel Laureate</span>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-primary pl-6 italic text-xl md:text-2xl text-gray-700 my-8">
            "{story.quote}"
          </blockquote>
          
          <h2 className="font-playfair text-2xl font-bold mb-4">Key Achievements</h2>
          <ul className="space-y-2 mb-8">
            {story.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          
          <h2 className="font-playfair text-2xl font-bold mb-4">Full Story</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: story.fullStory }} />
          
          <Separator className="my-8" />
          
          <h2 className="font-playfair text-2xl font-bold mb-4">Impact & Legacy</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: story.impact }} />
          
          <Separator className="my-8" />
          
          <h2 className="font-playfair text-2xl font-bold mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {story.relatedLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-purple-50 transition-colors"
              >
                <span>{link.title}</span>
                <ExternalLink size={16} className="text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StoryDetail;
