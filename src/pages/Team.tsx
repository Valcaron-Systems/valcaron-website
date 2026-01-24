import { Layout } from "@/components/layout/Layout";

const teamMembers = [
  {
    name: "Dean Rowlett MEng MIET",
    role: "Co-Founder",
    bio: "Robotics engineer focused on deployable autonomous systems, onboard perception, and field-tested aerial robotics.",
    image: "/images/dean.jpg",
  },
  {
    name: "Reece Alexander BEng",
    role: "Co-Founder",
    bio: "Robotics engineer with strengths in systems engineering, software, electronics, and robotic inspection of onshore and offshore assets.",
    image: "/images/reece.jpg",
  },
  {
    name: "Harris",
    role: "Public Relations Officer",
    bio: "Woof.",
    image: "/images/harris.jpg",
  },
];


const Team = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Team
            </p>
            <h1 className="heading-display text-silver mb-6">
              The People Behind Valcaron
            </h1>
            <p className="body-large">
              We're a team of engineers, researchers, and operators united by a 
              belief that robotics technology should serve meaningful purposes. 
              Our backgrounds span aerospace, defence, and autonomous systems.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="group"
              >
                {/* Photo placeholder */}
                <div className="aspect-square bg-secondary/50 border border-border rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-3xl font-medium text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="heading-section mb-6">Our Culture</h2>
          <p className="body-prose mb-8">
            We're building a company where rigorous engineering meets meaningful purpose. 
            We value precision, honesty, and a commitment to building technology that 
            genuinely helps people. If you share these values, we'd like to hear from you.
          </p>
          <a
            href="mailto:careers@valcaron.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm rounded hover:bg-secondary transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
