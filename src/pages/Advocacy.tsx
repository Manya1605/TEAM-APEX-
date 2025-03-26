
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { FileText, Globe, Share2 } from "lucide-react";

const Advocacy = () => {
  const campaigns = [
    {
      title: "Equal Pay Now",
      description: "Support legislation requiring transparent pay data from companies to address gender pay gaps.",
      signatures: 18742,
      goal: 25000,
      progress: 75,
      image: "https://smartdatafinance.org/storage/2022-03-07/Caof6E9GaJUALMZ.png",
    },
    {
      title: "Women in STEM Education Fund",
      description: "Advocating for increased funding for programs that encourage girls to pursue science and technology fields.",
      signatures: 12375,
      goal: 20000,
      progress: 62,
      image: "https://www.orfonline.org/public/uploads/posts/image/65b0df5e8ed2b.png",
    },
    {
      title: "End Workplace Harassment",
      description: "Petition for stronger legal protections against all forms of workplace harassment and discrimination.",
      signatures: 31204,
      goal: 50000,
      progress: 62,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDWQ5QZv-e6bnoGfyHjfoIsBQHxzbvCh6xg&s",
    },
  ];

  const legislation = [
    {
      title: "Workplace Gender Equality Amendment",
      status: "In Committee",
      country: "United States",
      lastUpdate: "April 15, 2023",
      description: "Expands existing equal pay laws and requires companies to conduct pay audits.",
    },
    {
      title: "Women on Boards Directive",
      status: "Passed",
      country: "European Union",
      lastUpdate: "March 22, 2023",
      description: "Sets targets for gender representation on corporate boards of publicly listed companies.",
    },
    {
      title: "Parental Leave Expansion Act",
      status: "Proposed",
      country: "Canada",
      lastUpdate: "May 3, 2023",
      description: "Extends paid parental leave and creates incentives for equal leave-taking between parents.",
    },
    {
      title: "Gender-Based Violence Prevention Act",
      status: "Under Review",
      country: "Australia",
      lastUpdate: "April 28, 2023",
      description: "Strengthens legal protections against gender-based violence in all settings.",
    },
  ];

  const toolkitItems = [
    {
      title: "Gender Pay Gap Infographic",
      type: "Infographic",
      theme: "Economic Equality",
      description: "Visual representation of current pay gaps across industries with key statistics.",
    },
    {
      title: "Women's Rights Timeline",
      type: "Social Media Cards",
      theme: "Historical Context",
      description: "Shareable timeline of key milestones in women's rights movements around the world.",
    },
    {
      title: "Inclusive Language Guide",
      type: "PDF Guide",
      theme: "Communication",
      description: "Guidelines for using gender-inclusive language in professional and personal contexts.",
    },
    {
      title: "Allyship in Action",
      type: "Social Media Campaign",
      theme: "Allyship",
      description: "Ready-to-share posts highlighting ways to be an effective ally for gender equality.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Advocacy & Awareness
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Take action to promote gender equality through petitions, campaigns, and awareness efforts.
        Stay informed about legislation and use our resources to advocate effectively.
      </p>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Active Petitions & Campaigns</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{campaign.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{campaign.description}</p>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{campaign.signatures.toLocaleString()} signatures</span>
                    <span>Goal: {campaign.goal.toLocaleString()}</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <button className="flex-1 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Sign Petition
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={18} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Legislative Updates</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-4 py-3 text-left text-sm font-medium border-b">Legislation</th>
                <th className="px-4 py-3 text-left text-sm font-medium border-b">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium border-b">Country/Region</th>
                <th className="px-4 py-3 text-left text-sm font-medium border-b">Last Update</th>
                <th className="px-4 py-3 text-left text-sm font-medium border-b">Description</th>
                <th className="px-4 py-3 text-left text-sm font-medium border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {legislation.map((item, index) => (
                <tr key={index} className="animate-fade-up hover:bg-gray-50" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-4 py-4 border-b font-medium">{item.title}</td>
                  <td className="px-4 py-4 border-b">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      item.status === 'Passed' 
                        ? 'bg-green-100 text-green-800' 
                        : item.status === 'In Committee' || item.status === 'Under Review'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 border-b">{item.country}</td>
                  <td className="px-4 py-4 border-b">{item.lastUpdate}</td>
                  <td className="px-4 py-4 border-b text-sm text-gray-600 max-w-xs">{item.description}</td>
                  <td className="px-4 py-4 border-b">
                    <button className="text-primary hover:underline text-sm">Track</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            View Complete Legislative Database
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Globe className="text-primary" size={24} />
          <h2 className="font-playfair text-3xl font-semibold">Social Media Toolkit</h2>
        </div>
        
        <p className="mb-8 text-gray-600">
          Download and share these resources to raise awareness about gender equality issues.
          All materials are free to use and share with proper attribution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkitItems.map((item, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <div className="bg-purple-100 text-primary p-8 rounded-lg flex items-center justify-center mb-4">
                  <Share2 size={32} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.type} • {item.theme}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Download
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="bg-gold-light p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4 text-gold-dark">Start Your Own Campaign</h2>
        <p className="mb-6 text-gold-dark">Have an issue that needs attention? Create your own petition or awareness campaign with our platform's tools.</p>
        <button className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Advocacy;
