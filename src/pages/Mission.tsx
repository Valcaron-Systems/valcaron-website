import { Layout } from "@/components/layout/Layout";

const Mission = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Our Mission
            </p>
            <h1 className="heading-display text-silver mb-6">
              Why We Build
            </h1>
            <p className="body-large">
              Valcaron exists to improve how humans understand their environment in 
              critical moments. We believe that meaningful technology should serve 
              people—not replace them.
            </p>
          </div>
        </div>
      </section>

      {/* Essay content */}
      <section className="section-padding">
        <div className="container-narrow">
          <article className="prose prose-invert max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                There are moments when understanding your environment is the difference 
                between life and death. A search and rescue team scanning miles of 
                wilderness for a missing hiker. A security team monitoring a perimeter 
                in failing light. A defence unit maintaining awareness in contested terrain.
              </p>

              <p>
                In each case, the limiting factor is rarely capability—it's information. 
                The ability to see, understand, and act on what's happening in the 
                environment around you. This is situational awareness, and it's what 
                we're building technology to improve.
              </p>

              <div className="border-accent my-12">
                <p className="text-foreground text-xl font-medium">
                  "Situational awareness is not about data. It's about understanding."
                </p>
              </div>

              <h2 className="text-foreground text-2xl font-semibold mt-16 mb-6">
                The Problem We See
              </h2>

              <p>
                Modern drones can capture extraordinary amounts of data. High-resolution 
                imagery, thermal feeds, multispectral scans. But raw data isn't 
                understanding. A search team doesn't need more pixels—they need to 
                know where to look.
              </p>

              <p>
                Today, most drone systems rely on human operators to interpret everything 
                they capture. This creates bottlenecks. It introduces latency. And it 
                places enormous cognitive burden on people who are often already operating 
                under pressure.
              </p>

              <p>
                We believe there's a better approach: give the drone the ability to 
                understand what it sees, so it can deliver not just images, but insights.
              </p>

              <h2 className="text-foreground text-2xl font-semibold mt-16 mb-6">
                Engineering-First, Human-Centred
              </h2>

              <p>
                We're engineers. We believe in rigorous thinking, careful design, and 
                technology that does exactly what it's supposed to do. We're not 
                interested in hype or inflated promises.
              </p>

              <p>
                But we're also building for humans. Our technology exists to support 
                people making difficult decisions in challenging environments. Every 
                feature we develop, every capability we add, is measured against a 
                simple question: does this help the person on the ground do their job 
                better?
              </p>

              <p>
                This means building systems that are reliable, intuitive, and honest 
                about their limitations. It means designing for real-world conditions—poor 
                connectivity, limited power, harsh environments. It means respecting 
                the expertise of the operators who will use our technology.
              </p>

              <h2 className="text-foreground text-2xl font-semibold mt-16 mb-6">
                The Path Forward
              </h2>

              <p>
                We're focused on three domains where situational awareness matters most: 
                search and rescue, security, and defence. These are environments where 
                the stakes are high, where information quality directly affects outcomes, 
                and where our technology can make a meaningful difference.
              </p>

              <p>
                We're building carefully, deliberately, with a long-term view. Not 
                because we're slow, but because we believe that technology this important 
                demands precision. The people who will rely on our systems deserve nothing less.
              </p>

              <p>
                This is why Valcaron exists. To build onboard intelligence that transforms 
                how drones support human decision-making. To create technology that matters.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
