import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Education", href: "education" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-card border-b backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <nav className="container-responsive py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            Phani Sri Harsha
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="outline"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="hover-lift"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-card rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="outline"
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="w-full mt-2"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};