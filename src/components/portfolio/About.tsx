import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Wifi, TrendingUp } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in Python, Django, React, and modern web technologies"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Specialized in connecting hardware sensors with web applications"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust ETL pipelines and data processing systems"
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Transforming data into actionable business insights"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a unique background in integrating 
            IoT hardware with modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 2 years of professional experience, I specialize in building scalable 
                web applications using Python, Django, and React. My journey began with a passion 
                for electronics and IoT, which naturally evolved into full-stack development.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have extensive experience working with <strong>LoRaWAN networks</strong>, 
                <strong>sensor integration</strong>, and creating analytics portals that bridge 
                the gap between hardware and software. My recent work includes building ETL 
                pipelines, implementing JWT authentication systems, and optimizing database 
                queries for better performance.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing advanced skills in data analytics and cloud technologies, 
                I'm always excited to take on challenging projects that combine my love for 
                technology with real-world problem-solving.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="glass-card hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <highlight.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};