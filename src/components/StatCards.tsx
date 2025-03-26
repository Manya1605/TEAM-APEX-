
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const StatCards = () => {
  const stats = [
    {
      title: "Pay Gap",
      value: "83¢",
      detail: "Women earn 83 cents for every dollar earned by men",
      progress: 83,
      increase: "+2¢ since 2018"
    },
    {
      title: "Leadership",
      value: "28%",
      detail: "Of global senior management roles held by women",
      progress: 28,
      increase: "+5% in 5 years"
    },
    {
      title: "Education",
      value: "130M",
      detail: "Girls worldwide are not in school",
      progress: 60,
      increase: "15% decrease since 2010"
    },
    {
      title: "Tech Industry",
      value: "25%",
      detail: "Of tech roles are filled by women globally",
      progress: 25,
      increase: "+3% year over year"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <Card key={index} className="animate-fade-up overflow-hidden border border-gray-200 hover:shadow-md transition-shadow" 
              style={{animationDelay: `${index * 100}ms`}}>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-gray-500 mb-1">{stat.title}</h3>
            <div className="flex justify-between items-baseline mb-2">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <span className="text-xs font-medium text-green-600">{stat.increase}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{stat.detail}</p>
            <Progress value={stat.progress} className="h-1.5" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
