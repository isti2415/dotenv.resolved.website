import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Shield",
    title: "Financial Security",
    description:
      "Keep your finances secure with robust tools and encryption, ensuring your data stays private and protected.",
  },
  {
    icon: "TrendingUp",
    title: "Achieve Goals",
    description:
      "Set, track, and reach your financial goals with personalized insights and planning tools.",
  },
  {
    icon: "CreditCard",
    title: "Simplified Budgeting",
    description:
      "Easily manage your budget with intuitive features that keep you on track and in control.",
  },
  {
    icon: "Lightbulb",
    title: "Smart Financial Decisions",
    description:
      "Make informed decisions with expert advice and actionable insights tailored to your financial situation.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why MyFinance is the Right Choice
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            MyFinance provides the tools you need to secure your financial future, reach your goals, and make smart decisions effortlessly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
