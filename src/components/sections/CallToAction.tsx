import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Building Technology That Matters
          </h2>
          <p className="body-prose mb-8">
            Whether you're involved in search & rescue operations, security, or defence, 
            we're interested in understanding your challenges. Reach out to discuss how 
            onboard intelligence can support your mission.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
