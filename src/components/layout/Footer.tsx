import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-semibold tracking-tight">
              VALCARON
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Building onboard intelligence for drones. Transforming raw imagery into 
              structured understanding for search & rescue, security, and defence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>United Kingdom</li>
              <li>
                <a 
                  href="mailto:contact@valcaron.com" 
                  className="hover:text-foreground transition-colors"
                >
                  contact@valcaron.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Valcaron. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Engineering-first, human-centred robotics.
          </p>
        </div>
      </div>
    </footer>
  );
}
