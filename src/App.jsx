import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Trophy,
  Target
} from 'lucide-react'
import './App.css'

function App() {
  const techStacks = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        "React.js", "Vue.js", "Angular", "Next.js", "Nuxt.js", "TypeScript",
        "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Bootstrap", "Material-UI"
      ],
      description: "Modern, responsive, and interactive user interfaces"
    },
    {
      category: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      technologies: [
        "Node.js", "Python", "Java", "C#", "PHP", "Ruby",
        "Express.js", "Django", "Flask", "Spring Boot", "Laravel", "Ruby on Rails"
      ],
      description: "Scalable server-side applications and APIs"
    },
    {
      category: "Database Management",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Oracle",
        "Microsoft SQL Server", "Cassandra", "DynamoDB", "Firebase"
      ],
      description: "Efficient data storage and retrieval solutions"
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: [
        "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic",
        "PhoneGap", "Cordova", "Progressive Web Apps (PWA)"
      ],
      description: "Cross-platform and native mobile applications"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
        "GitLab CI/CD", "Terraform", "Ansible", "Nginx", "Apache"
      ],
      description: "Scalable cloud infrastructure and deployment automation"
    },
    {
      category: "Security & Testing",
      icon: <Shield className="w-6 h-6" />,
      technologies: [
        "OAuth", "JWT", "SSL/TLS", "OWASP", "Penetration Testing",
        "Jest", "Cypress", "Selenium", "Unit Testing", "Integration Testing"
      ],
      description: "Comprehensive security measures and quality assurance"
    }
  ]

  const services = [
    {
      title: "Custom Web Development",
      description: "Full-stack web applications tailored to your business needs",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"]
    },
    {
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS/Azure/GCP", "Microservices", "Auto-scaling", "Cost Optimization"]
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and deployment processes",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring", "Infrastructure as Code"]
    }
  ]

  const achievements = [
    { icon: <Trophy className="w-8 h-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, number: "200+", label: "Happy Clients" },
    { icon: <Star className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Target className="w-8 h-8" />, number: "99%", label: "Success Rate" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">TechStack</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#technologies" className="text-gray-600 hover:text-blue-600 transition-colors">Technologies</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern <span className="text-blue-600">Tech Stack</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive development services using cutting-edge technologies. 
              From frontend frameworks to cloud infrastructure, we deliver scalable solutions 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive development services to bring your ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-600">{stack.icon}</div>
                    <CardTitle className="text-xl">{stack.category}</CardTitle>
                  </div>
                  <p className="text-gray-600">{stack.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you build amazing digital solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-bold">TechStack</h4>
              </div>
              <p className="text-gray-400">
                Building the future with modern technology solutions.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Cloud Solutions</li>
                <li>DevOps</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Technologies</h5>
              <ul className="space-y-2 text-gray-400">
                <li>React & Vue</li>
                <li>Node.js & Python</li>
                <li>AWS & Azure</li>
                <li>Docker & Kubernetes</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>hello@techstack.dev</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

