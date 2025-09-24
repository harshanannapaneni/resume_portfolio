import { ArrowDown, Github, Linkedin, Facebook, Instagram, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://www.github.com/harshanannapaneni", 
      label: "GitHub" 
    },
    { 
      icon: Code2, 
      href: "https://leetcode.com/u/harshanannapaneni/", 
      label: "LeetCode" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/harsha-nannapaneni", 
      label: "LinkedIn" 
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/harsha.nannapaneni.3", 
      label: "Facebook" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/__harshanannapaneni10__.py/", 
      label: "Instagram" 
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-float"></div>
              <img
                src={profilePhoto}
                alt="Phani Sri Harsha Nannapaneni"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-large hover-lift"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Phani Sri Harsha
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full-stack Python Developer | IoT Integration | React | Data Enthusiast
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about integrating IoT hardware with modern web technologies. 
              Experienced in building scalable applications with Python, Django, and React.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="hover-lift bg-gradient-primary hover:opacity-90"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hover-lift"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover-lift glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(social.href, "_blank")}
                >
                  <social.icon size={20} />
                </Button>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection("about")}
                className="rounded-full hover:bg-primary/10"
              >
                <ArrowDown size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};