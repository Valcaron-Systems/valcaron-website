import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "13 January 2026",
    title: "Accepted into Techscaler",
    summary: [
      "Valcaron was accepted into the Techscaler programme, providing access to structured support for early-stage company formation, expert guidance, and a national community of founders.",
    ],
  },
  {
    date: "December 2025",
    title: "Runner-up in Global Innovation Challenge",
    summary: [
      "Valcaron was selected as runner-up in a global accelerator programme, receiving funding to support the purchase of specialist hardware and continued technical development.",
    ],
  },
  {
    date: "August 2025",
    title: "Valcaron joins the Heriot-Watt EBS Incubator",
    summary: [
      "Valcaron was accepted into the Heriot-Watt University EBS Incubator, a year-long programme supporting early-stage technology companies.",
    ],
  },
  {
    date: "21 February 2025",
    title: "Initial concept formed during founder discussion",
    summary: [
      "The initial concept for Valcaron emerged during a technical discussion between co-founders Dean Rowlett and Reece Alexander.",
    ],
  },
];


export function News() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading-section">Latest Updates</h2>
        </div>

        <div className="space-y-0 border-t border-border">
          {newsItems.map((item) => (
            <article 
              key={item.title}
              className="py-8 border-b border-border group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-2">
                  <time className="text-sm text-primary font-medium">
                    {item.date}
                  </time>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
