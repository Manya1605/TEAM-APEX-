
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
import { Trophy, ArrowRight, CheckCircle, Users } from "lucide-react";

const Challenges = () => {
  const featuredChallenges = [
    {
      title: "Gender Equality Ambassador",
      description: "Complete a series of awareness-building tasks and educational modules to become a certified ambassador.",
      level: "Beginner",
      participants: 2547,
      timeEstimate: "2-3 weeks",
      points: 500,
      progress: 0,
      image: "https://images.ctfassets.net/txbhe1wabmyx/3fpqaeN3m18ZSVXFKn6xUE/2b3b9951d22a88d83c0230d8ad9bc7aa/Stephanie_Copus_Campbell_.jpeg",
    },
    {
      title: "Workplace Inclusion Challenge",
      description: "Learn and implement strategies to create more inclusive workplaces through practical exercises.",
      level: "Intermediate",
      participants: 1283,
      timeEstimate: "4 weeks",
      points: 750,
      progress: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_SrExWadBkGjQB2i50TPNXu2_UsLCNbtNA&s",
    },
    {
      title: "Policy Advocacy Mastermind",
      description: "Develop skills to advocate for gender-inclusive policies in your organization or community.",
      level: "Advanced",
      participants: 842,
      timeEstimate: "6 weeks",
      points: 1000,
      progress: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt187HbBQODwegNtLp5W5eQR7Zyvi4eT5CmQ&s",
    },
  ];

  const caseStudies = [
    {
      title: "Ethical Dilemma: Pay Transparency",
      scenario: "As a hiring manager, you discover a significant gender pay gap in your department. What actions do you take?",
      complexity: "Medium",
      estimatedTime: "30 minutes",
      skills: ["Critical Thinking", "Ethical Decision Making", "Communication"],
    },
    {
      title: "Inclusive Leadership Scenario",
      scenario: "Your team meetings are consistently dominated by male voices, despite having gender diversity. How do you address this?",
      complexity: "Medium",
      estimatedTime: "45 minutes",
      skills: ["Leadership", "Conflict Resolution", "Inclusive Practices"],
    },
    {
      title: "Startup Funding Equity",
      scenario: "You're on a venture capital panel evaluating funding applications with notable gender disparity in success rates. What changes would you implement?",
      complexity: "Hard",
      estimatedTime: "60 minutes",
      skills: ["Systems Thinking", "Financial Analysis", "Change Management"],
    },
  ];

  const topUsers = [
    { name: "Sophia Chen", points: 4850, rank: 1, badges: 12 },
    { name: "Marcus Johnson", points: 4720, rank: 2, badges: 11 },
    { name: "Aisha Patel", points: 4635, rank: 3, badges: 14 },
    { name: "Diego Ramirez", points: 4510, rank: 4, badges: 10 },
    { name: "Emma Williams", points: 4375, rank: 5, badges: 9 },
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first challenge", icon: "🌱", unlocked: true },
    { name: "Knowledge Seeker", description: "Complete 5 educational modules", icon: "📚", unlocked: true },
    { name: "Change Maker", description: "Implement a real-world initiative", icon: "✨", unlocked: false },
    { name: "Community Leader", description: "Mentor 3 other participants", icon: "👥", unlocked: false },
    { name: "Global Advocate", description: "Participate in international events", icon: "🌍", unlocked: false },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Interactive Challenges
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Learn by doing through our interactive challenges, case studies, and scenarios.
        Earn points, unlock achievements, and develop practical skills to promote gender equality.
      </p>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Featured Challenges</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredChallenges.map((challenge, index) => (
            <Card key={index} className="animate-fade-up overflow-hidden" style={{animationDelay: `${index * 100}ms`}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={challenge.image} 
                  alt={challenge.title} 
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{challenge.title}</CardTitle>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                    {challenge.level}
                  </span>
                </div>
                <CardDescription>
                  <div className="flex items-center gap-1 text-sm">
                    <Users size={14} />
                    {challenge.participants.toLocaleString()} participants
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex justify-between text-sm mb-2">
                  <span>Time: {challenge.timeEstimate}</span>
                  <span>{challenge.points} points</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Start Challenge
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Explore All Challenges
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Case Studies & Role-Playing Scenarios</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((case_, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-xl">{case_.title}</CardTitle>
                <CardDescription className="flex gap-2 mt-1">
                  <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                    {case_.complexity}
                  </span>
                  <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                    {case_.estimatedTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{case_.scenario}</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {case_.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors flex items-center justify-center gap-1">
                  Start Scenario <ArrowRight size={16} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-gold" size={24} />
            <h2 className="font-playfair text-3xl font-semibold">Leaderboard</h2>
          </div>
          
          <Card className="animate-fade-up">
            <CardContent className="p-6">
              <div className="space-y-4">
                {topUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                        index === 0 
                          ? 'bg-gold' 
                          : index === 1 
                            ? 'bg-gray-400' 
                            : index === 2 
                              ? 'bg-amber-700' 
                              : 'bg-primary'
                      }`}>
                        {user.rank}
                      </span>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.badges} badges earned</p>
                      </div>
                    </div>
                    <span className="font-mono font-medium">{user.points.toLocaleString()} pts</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-primary hover:underline text-sm">
                  View Full Leaderboard
                </button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="text-primary" size={24} />
            <h2 className="font-playfair text-3xl font-semibold">Your Achievements</h2>
          </div>
          
          <Card className="animate-fade-up" style={{animationDelay: "100ms"}}>
            <CardContent className="p-6">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center gap-4 py-2 border-b border-gray-100 last:border-0 ${!achievement.unlocked ? 'opacity-50' : ''}`}>
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="font-medium">{achievement.name}</p>
                      <p className="text-xs text-gray-500">{achievement.description}</p>
                    </div>
                    {achievement.unlocked ? (
                      <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Unlocked</span>
                    ) : (
                      <span className="ml-auto bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Locked</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-primary hover:underline text-sm">
                  View All Achievements
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="bg-purple-50 p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4">Create Your Profile</h2>
        <p className="mb-6">Track your progress, earn points, and showcase your achievements by creating a free account.</p>
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          Sign Up Now
        </button>
      </div>
    </main>
  );
};

export default Challenges;
