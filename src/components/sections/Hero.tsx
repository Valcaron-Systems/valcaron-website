import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-secondary/80" />

      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in">
            Onboard Intelligence for Drones
          </p>

          {/* Main heading */}
          <h1 className="heading-display text-silver mb-8 animate-fade-in-up">
            Transforming Raw Data Into{" "}
            <span className="text-foreground">Situational Awareness</span>
          </h1>

          {/* Subheading */}
          <p className="body-large max-w-2xl mx-auto mb-12 animate-fade-in-delayed">
            We build onboard intelligence that helps drones understand their environment. 
            From search & rescue to security and defence, our technology turns imagery 
            into actionable understanding.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded hover:bg-primary/90 transition-colors"
            >
              Explore Our Technology
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm rounded hover:bg-secondary transition-colors"
            >
              Read Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
