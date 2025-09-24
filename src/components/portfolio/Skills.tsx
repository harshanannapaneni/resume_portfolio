import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["Django", "FastAPI", "React", "Pandas", "PySpark", "SQLAlchemy", "scikit-learn"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["PostgreSQL", "SQLite", "PyODBC", "REST APIs", "Git", "Docker", "Kubernetes"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Apache Airflow", "CI/CD", "Linux"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const specializations = [
    "IoT Integration with LoRaWAN",
    "Sensor Networks & Hardware Integration", 
    "ETL Pipeline Development",
    "Data Analytics & Visualization",
    "JWT Authentication Systems",
    "Database Optimization",
    "Scalable Web Applications",
    "Real-time Data Processing"
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover-lift"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">
                <span className="gradient-text">Specializations</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Areas of expertise and focus
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div 
                    key={spec}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};