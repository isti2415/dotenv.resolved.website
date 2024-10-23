import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "DollarSign",
    title: "Track Spending",
    description:
      "Easily monitor where your money goes with detailed spending reports and insights.",
  },
  {
    icon: "PieChart",
    title: "Budget Management",
    description:
      "Set and stick to your budgets with powerful tools that help you achieve your financial goals.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Data",
    description:
      "Your financial data is protected with top-notch security measures, ensuring your peace of mind.",
  },
  {
    icon: "TrendingUp",
    title: "Investment Tracking",
    description:
      "Keep an eye on your investments and watch your portfolio grow with real-time updates.",
  },
  {
    icon: "Calendar",
    title: "Bill Reminders",
    description:
      "Never miss a payment with timely reminders for upcoming bills and due dates.",
  },
  {
    icon: "LifeBuoy",
    title: "Financial Advice",
    description:
      "Access expert financial advice and tips to help you make informed decisions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Choose MyFinance?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        MyFinance offers a comprehensive set of tools to help you manage your personal finances with ease and confidence.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
