import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "M.S. in Business Analytics",
      institution: "University at Buffalo",
      location: "Buffalo, NY, USA", 
      period: "2022 - 2023",
      gpa: "3.86/4.0",
      type: "Master's Degree",
      highlights: [
        "Specialized in data analytics and business intelligence",
        "Advanced coursework in statistical modeling and machine learning",
        "Capstone project on predictive analytics for business optimization",
        "Gained expertise in data visualization and decision-making frameworks"
      ],
      courses: [
        "Statistical Analysis",
        "Machine Learning",
        "Data Visualization", 
        "Business Intelligence",
        "Predictive Analytics",
        "Database Management"
      ]
    },
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "CVR College of Engineering",
      location: "Hyderabad, India",
      period: "2018 - 2022", 
      gpa: "N/A",
      type: "Bachelor's Degree",
      highlights: [
        "Strong foundation in electronics, communication systems, and signal processing",
        "Hands-on experience with embedded systems and microcontrollers",
        "Senior project focused on IoT-based smart energy monitoring system",
        "Active participation in technical societies and coding competitions"
      ],
      courses: [
        "Digital Signal Processing",
        "Microprocessors",
        "Communication Systems",
        "Embedded Systems",
        "IoT Applications",
        "Network Programming"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation combining business analytics with technical engineering expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={edu.institution}
              className="glass-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-2 text-foreground">
                        {edu.degree}
                      </CardTitle>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-2">
                        <h3 className="text-lg font-semibold text-primary">
                          {edu.institution}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </div>
                          <span>•</span>
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 lg:items-center">
                    <Badge variant="secondary" className="w-fit">
                      {edu.type}
                    </Badge>
                    {edu.gpa !== "N/A" && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award size={16} className="text-primary" />
                        <span className="font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <Badge key={course} variant="outline" className="hover-lift">
                        {course}
                      </Badge>
                    ))}
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