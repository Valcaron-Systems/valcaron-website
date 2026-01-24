import { Layout } from "@/components/layout/Layout";
import { Cpu, Map, Radio, Target } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Onboard Processing",
    description: "Intelligence runs directly on the drone. No ground station dependency means lower latency, better security, and operation in denied environments.",
  },
  {
    icon: Target,
    title: "Object Detection & Classification",
    description: "Real-time identification and categorisation of objects within the visual field. Trained for domain-specific recognition in SAR, security, and defence contexts.",
  },
  {
    icon: Map,
    title: "Precision Geotagging",
    description: "Every detected object is precisely located in three-dimensional space. Coordinates are calculated onboard and delivered with confidence metrics.",
  },
  {
    icon: Radio,
    title: "Structured Data Output",
    description: "Raw imagery becomes structured, queryable information. Integration-ready formats for command systems, GIS platforms, and operator interfaces.",
  },
];

const useCases = [
  {
    title: "Search & Rescue",
    description: "Finding people in challenging environments—wilderness, disaster zones, maritime incidents. Our technology helps teams cover more ground, faster, with greater confidence in detection.",
    points: [
      "Automated detection of persons in complex terrain",
      "Thermal and visual fusion for day/night operations",
      "Real-time coordinate delivery to ground teams",
      "Priority ranking of search areas based on probability",
    ],
  },
  {
    title: "Security",
    description: "Perimeter monitoring, asset protection, and situational awareness for security operations. Continuous coverage with intelligent alerting.",
    points: [
      "Intrusion detection and tracking",
      "Vehicle and personnel classification",
      "Integration with existing security systems",
      "Automated patrol and anomaly reporting",
    ],
  },
  {
    title: "Defence",
    description: "Tactical awareness in contested environments. Our systems provide reliable intelligence when connectivity is compromised and decisions are time-critical.",
    points: [
      "Real-time terrain analysis and mapping",
      "Threat detection and classification",
      "Denied-environment operation capability",
      "Secure, encrypted data handling",
    ],
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Technology
            </p>
            <h1 className="heading-display text-silver mb-6">
              Onboard Intelligence
            </h1>
            <p className="body-large">
              We build systems that process, understand, and act on visual data 
              directly on the drone. No ground station. No latency. Just structured 
              understanding delivered in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <h2 className="heading-section mb-8">Our Approach</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Traditional drone systems capture data and transmit it to ground stations 
              for processing. This creates dependencies—on bandwidth, on connectivity, 
              on the availability of processing infrastructure. It introduces latency 
              at precisely the moment when speed matters most.
            </p>
            <p>
              Our approach is different. We push intelligence to the edge. The drone 
              itself understands what it's seeing, processes that information in real 
              time, and delivers structured outputs that operators can act on immediately.
            </p>
            <p>
              This isn't about replacing human judgment. It's about augmenting it. 
              Giving operators better information, faster, so they can make better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <h2 className="heading-section mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <div 
                key={capability.title}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <capability.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="heading-subsection mb-4">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-section mb-12">Applications</h2>
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div 
                key={useCase.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
              >
                <div>
                  <h3 className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {useCase.points.map((point) => (
                      <li 
                        key={point}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
