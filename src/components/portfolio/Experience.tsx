import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Python Developer",
      company: "Scholar IT Solutions",
      location: "Remote",
      period: "2023 - 2025",
      type: "Full-time",
      achievements: [
        "Designed and implemented robust ETL pipelines using Python and Apache Airflow for data processing",
        "Built secure authentication systems with JWT tokens, improving application security by 40%",
        "Containerized applications using Docker and deployed on AWS, reducing deployment time by 60%",
        "Optimized SQL queries and database performance, achieving 35% faster response times",
        "Collaborated with cross-functional teams to deliver scalable web applications"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Apache Airflow", "JWT"]
    },
    {
      title: "Junior Python Developer",
      company: "Crowley Webb",
      location: "Hyderabad, India",
      period: "2023",
      type: "Internship",
      achievements: [
        "Developed web applications using Django framework and REST API integration",
        "Implemented data visualization dashboards using Python libraries like Pandas and Matplotlib",
        "Contributed to database design and optimization for better query performance",
        "Participated in code reviews and maintained high coding standards",
        "Gained hands-on experience with version control systems and agile development"
      ],
      technologies: ["Python", "Django", "REST APIs", "Pandas", "PostgreSQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            2+ years of hands-on experience building scalable applications and data solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company} 
              className="glass-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <h3 className="text-lg font-semibold text-primary">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={14} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover-lift">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};