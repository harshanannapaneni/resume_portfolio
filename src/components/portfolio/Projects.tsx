import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Database, Brain, Share2, ListTodo } from "lucide-react";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "IoT Smart Energy Meter",
      description: "Advanced energy monitoring system using LoRaWAN technology with RS-485 sensor integration and Python backend for real-time analytics portal.",
      category: "IoT & Hardware",
      technologies: ["Python", "LoRaWAN", "RS-485", "Django", "PostgreSQL", "Analytics Dashboard"],
      icon: Zap,
      type: "Academic Project",
      highlights: [
        "Real-time energy consumption monitoring",
        "LoRaWAN wireless communication",
        "Python-based analytics portal",
        "Historical data visualization"
      ]
    },
    {
      title: "Smart Precision Agriculture",
      description: "Comprehensive sensor network solution using Dragino hardware and LoRaWAN for agricultural monitoring with web-based analytics portal.",
      category: "IoT & Agriculture",
      technologies: ["Python", "LoRaWAN", "Dragino", "Sensor Networks", "Web Portal", "Data Pipeline"],
      icon: Database,
      type: "Academic Project",
      highlights: [
        "Multi-sensor environmental monitoring",
        "Dragino LoRaWAN gateway integration",
        "Python data processing pipeline",
        "Agricultural insights dashboard"
      ]
    }
  ];

  const githubProjects = [
    {
      title: "Python_boto3_VPC",
      description: "AWS VPC automation using Python boto3 SDK for infrastructure management and deployment.",
      repo: "Python_boto3_VPC",
      technologies: ["Python", "AWS", "boto3", "VPC", "Infrastructure"]
    },
    {
      title: "AirflowWeatherDataETL", 
      description: "Automated weather data ETL pipeline using Apache Airflow for data processing and scheduling.",
      repo: "AirflowWeatherDataETL",
      technologies: ["Python", "Apache Airflow", "ETL", "Weather API", "Data Processing"]
    },
    {
      title: "Loan Prediction using SVM",
      description: "Machine learning model for loan approval prediction using Support Vector Machines and data analysis.",
      repo: "Loan_prediction_using_SVM", 
      technologies: ["Python", "scikit-learn", "SVM", "Pandas", "Machine Learning"]
    },
    {
      title: "Social Network Analytics",
      description: "Social network analysis tool for understanding connections and patterns in social data.",
      repo: "Social-Network-Analytics",
      technologies: ["Python", "Network Analysis", "Data Visualization", "Analytics"]
    },
    {
      title: "Task Management System",
      description: "Full-stack task management application with user authentication and project organization.",
      repo: "Task-Management-system",
      technologies: ["Python", "Django", "JavaScript", "PostgreSQL", "REST API"]
    }
  ];

  const projectIcons = {
    "Python_boto3_VPC": Database,
    "AirflowWeatherDataETL": Zap,
    "Loan_prediction_using_SVM": Brain,
    "Social-Network-Analytics": Share2,
    "Task-Management-system": ListTodo
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-responsive">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions combining IoT hardware with modern software development
          </p>
        </div>

        {/* Featured Academic Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Academic & IoT Projects</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass-card hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <project.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold mb-1">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Open Source Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((project, index) => {
              const IconComponent = projectIcons[project.repo as keyof typeof projectIcons] || Github;
              
              return (
                <Card 
                  key={project.title}
                  className="glass-card hover-lift group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg font-bold leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 hover-lift"
                        onClick={() => window.open(`https://github.com/harshanannapaneni/${project.repo}`, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};