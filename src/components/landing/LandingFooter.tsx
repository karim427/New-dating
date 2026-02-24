const productLinks = [
  "White Label Dating App",
  "Matrimony Platform",
  "Social Networking App",
  "Community Platform",
  "Marketplace App",
];

const companyLinks = ["About Us", "Careers", "Blog", "Press", "Contact"];

const resourceLinks = [
  "Documentation",
  "Case Studies",
  "Dating App Guide",
  "Market Report",
  "API Reference",
];

const industries = [
  "Dating & Matchmaking",
  "Social Networking",
  "On-Demand Services",
  "E-Commerce",
  "Healthcare",
];

const LandingFooter = () => {
  return (
    <footer className="section-dark border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="font-extrabold text-xl text-section-dark-foreground">Appscrip</span>
            <p className="text-sm text-section-dark-foreground/40 mt-3 mb-4 max-w-xs">
              Empowering businesses with white-label technology solutions since 2015. Trusted by 500+ companies worldwide.
            </p>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-3 py-1.5 rounded-md border border-border text-xs text-section-dark-foreground/40 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Products", links: productLinks },
            { title: "Company", links: companyLinks },
            { title: "Resources", links: resourceLinks },
            { title: "Industries", links: industries },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-section-dark-foreground mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-section-dark-foreground/40 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 py-8 border-t border-border mb-8">
          {["SOC2 Compliant", "HIPAA Ready", "ISO 27001", "GDPR Compliant"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-md border border-border text-xs text-section-dark-foreground/30 font-medium"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-border">
          <p className="text-xs text-section-dark-foreground/30">© 2025 Appscrip. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-xs text-section-dark-foreground/30 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
