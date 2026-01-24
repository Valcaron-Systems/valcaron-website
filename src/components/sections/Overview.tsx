import { Eye, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Situational Awareness",
    description: "Real-time understanding of dynamic environments. Our systems process visual data onboard, delivering structured insights without latency.",
  },
  {
    icon: MapPin,
    title: "Precision Geotagging",
    description: "Every detected object is precisely located in space and time. Coordinates become actionable intelligence for ground teams.",
  },
  {
    icon: Shield,
    title: "Mission-Critical Reliability",
    description: "Built for environments where failure is not an option. Our technology operates when connectivity is compromised and decisions matter.",
  },
];

export function Overview() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section mb-6">
            What We Do
          </h2>
          <p className="body-prose">
            Valcaron develops onboard intelligence for unmanned aerial systems. 
            We transform raw sensor data into structured, geotagged understanding—enabling 
            faster, better-informed decisions in critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-8 bg-card border border-border rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="heading-subsection mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
