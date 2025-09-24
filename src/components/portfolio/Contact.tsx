import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Code2 } from "lucide-react";


export const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshanannapaneni@gmail.com",
      href: "mailto:harshanannapaneni@gmail.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+91 8519922093",
      href: "tel:+91 8519922093"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Delhi, India",
      href: null
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://www.github.com/harshanannapaneni", 
      label: "GitHub",
      username: "@harshanannapaneni"
    },
    { 
      icon: Code2, 
      href: "https://leetcode.com/u/harshanannapaneni/", 
      label: "LeetCode",
      username: "@harshanannapaneni"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/harsha-nannapaneni", 
      label: "LinkedIn",
      username: "harsha-nannapaneni"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/harsha.nannapaneni.3", 
      label: "Facebook",
      username: "harsha.nannapaneni.3"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/__harshanannapaneni10__.py/", 
      label: "Instagram",
      username: "__harshanannapaneni10__.py"
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in full-stack development and IoT integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.label}
                    className="flex items-center gap-4 p-4 glass-card rounded-lg hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="text-sm">
                Available for new opportunities
              </Badge>
            </div>
          </div>

          {/* Right: Connect With Me and Social Links */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div 
                    key={social.label}
                    className="flex items-center justify-between p-4 glass-card rounded-lg hover-lift group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <social.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(social.href, "_blank")}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    >
                      Visit
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};