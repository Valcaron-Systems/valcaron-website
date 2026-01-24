import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-20 pb-12 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="heading-display text-silver mb-6">
              Get in Touch
            </h1>
            <p className="body-large">
              We're interested in speaking with organisations working in search & rescue, 
              security, and defence. If our technology could support your mission, 
              we'd welcome a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="heading-section mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <a 
                      href="mailto:contact@valcaron.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@valcaron.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-medium mb-4">For specific enquiries:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <span className="text-foreground">Partnerships:</span>{" "}
                    <a 
                      href="mailto:partnerships@valcaron.com"
                      className="hover:text-foreground transition-colors"
                    >
                      partnerships@valcaron.com
                    </a>
                  </li>
                  <li>
                    <span className="text-foreground">Careers:</span>{" "}
                    <a 
                      href="mailto:careers@valcaron.com"
                      className="hover:text-foreground transition-colors"
                    >
                      careers@valcaron.com
                    </a>
                  </li>
                  <li>
                    <span className="text-foreground">Press:</span>{" "}
                    <a 
                      href="mailto:press@valcaron.com"
                      className="hover:text-foreground transition-colors"
                    >
                      press@valcaron.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Message */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="heading-section mb-6">Send a Message</h2>
              <form action="https://formspree.io/f/xjknljov" method="POST" className="space-y-6">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your organisation"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
