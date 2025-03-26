
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent 
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  // Sample data for charts
  const genderPayGapData = [
    { industry: "Tech", male: 100000, female: 82000 },
    { industry: "Finance", male: 120000, female: 96000 },
    { industry: "Healthcare", male: 90000, female: 85000 },
    { industry: "Education", male: 65000, female: 63000 },
    { industry: "Retail", male: 45000, female: 42000 },
  ];

  const leadershipData = [
    { position: "CEO", male: 78, female: 22 },
    { position: "Board", male: 73, female: 27 },
    { position: "Executive", male: 68, female: 32 },
    { position: "Manager", male: 60, female: 40 },
    { position: "Entry", male: 52, female: 48 },
  ];

  const statCards = [
    { title: "Global Gender Gap", value: "68.1%", description: "Closed as of 2023", progress: 68 },
    { title: "Equal Pay", value: "151 Years", description: "Until global pay equality", progress: 32 },
    { title: "Women in Tech", value: "28.8%", description: "Global tech workforce", progress: 29 },
    { title: "Education Gap", value: "95.7%", description: "Education equality achieved", progress: 96 },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        Gender Disparity Dashboard
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Explore real-time data on gender disparities across industries, regions, and roles. 
        Together, we can identify gaps and work toward building a more equal future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statCards.map((card, index) => (
          <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">{card.value}</div>
              <Progress value={card.progress} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="animate-fade-up">
          <CardHeader>
            <CardTitle>Gender Pay Gap by Industry</CardTitle>
            <CardDescription>Average salary comparison (USD)</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer 
              config={{
                male: { label: "Men", color: "#4C1D95" },
                female: { label: "Women", color: "#8B5CF6" },
              }}
            >
              <BarChart data={genderPayGapData}>
                <XAxis dataKey="industry" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="male" fill="#4C1D95" />
                <Bar dataKey="female" fill="#8B5CF6" />
              </BarChart>
            </ChartContainer>
            <ChartLegend>
              <ChartLegendContent />
            </ChartLegend>
          </CardContent>
        </Card>

        <Card className="animate-fade-up" style={{animationDelay: "100ms"}}>
          <CardHeader>
            <CardTitle>Leadership Representation</CardTitle>
            <CardDescription>Percentage by career level</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer 
              config={{
                male: { label: "Men", color: "#4C1D95" },
                female: { label: "Women", color: "#8B5CF6" },
              }}
            >
              <BarChart data={leadershipData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="position" />
                <Tooltip />
                <Bar dataKey="male" fill="#4C1D95" stackId="stack" />
                <Bar dataKey="female" fill="#8B5CF6" stackId="stack" />
              </BarChart>
            </ChartContainer>
            <ChartLegend>
              <ChartLegendContent />
            </ChartLegend>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12 animate-fade-up" style={{animationDelay: "200ms"}}>
        <CardHeader>
          <CardTitle>Global Gender Equality Index</CardTitle>
          <CardDescription>Regional performance across key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">North America</h3>
              <Progress value={76} className="h-2" />
              <p className="text-sm text-gray-500">76% equality achieved</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Europe</h3>
              <Progress value={78} className="h-2" />
              <p className="text-sm text-gray-500">78% equality achieved</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Asia</h3>
              <Progress value={68} className="h-2" />
              <p className="text-sm text-gray-500">68% equality achieved</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Africa</h3>
              <Progress value={65} className="h-2" />
              <p className="text-sm text-gray-500">65% equality achieved</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-purple-50 p-8 rounded-lg animate-fade-up" style={{animationDelay: "300ms"}}>
        <h2 className="font-playfair text-2xl font-bold mb-4">Take Action</h2>
        <p className="mb-6">Ready to help close the gender gap? Join our community and take part in initiatives that drive change.</p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Share This Data
          </button>
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            Donate to Equality Initiatives
          </button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
