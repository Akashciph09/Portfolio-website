"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  Trophy,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "achievements",
        "profiles",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    languages: [
      "C/C++",
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
    ],
    frameworks: ["React.js", "Next.js", "Express.js", "Node.js", "TailwindCSS"],
    tools: ["MongoDB", "MySQL", "Docker", "Git/GitHub", "Linux", "VS Code"],
    other: ["Redux", "Zod", "NextAuth", "JWT", "Socket.IO", "RESTful APIs"],
  };

  const projects = [
    {
      title: "EchoBox",
      description:
        "An anonymous feedback messenger app with AI-powered message suggestions using Google Gemini API.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "NextAuth",
        "Gemini API",
        "TypeScript",
      ],
      features: [
        "Personalized user dashboard to view received messages",
        "Unique URL per user for collecting anonymous messages",
        "AI-powered message suggestions for enhanced engagement",
      ],
      github: "https://github.com/Akashciph09/EchoBox",
    },
    {
      title: "Collaborative Whiteboard",
      description:
        "Full-stack real-time collaborative drawing application with sub-second latency.",
      tech: ["React.js", "Node.js", "Socket.IO", "MongoDB", "RESTful APIs"],
      features: [
        "Real-time drawing with sub-second latency for multiple users",
        "JWT authentication and secure canvas sharing",
        "Optimized MongoDB schema reducing query times by 40%",
        "Supports 1000+ concurrent users",
      ],
      github: "https://github.com/Akashciph09/Collaborative-whiteboard-",
      demo: "https://whiteboard-tutorial-eight.vercel.app/",
    },
    {
      title: "Job Space",
      description:
        "Responsive job portal with advanced filtering and seamless user experience.",
      tech: ["Vite", "React", "Express.js", "Node.js", "MongoDB"],
      features: [
        "Fast and intuitive browsing experience",
        "Advanced job filtering by user preferences",
        "Robust backend APIs with Express.js",
        "Seamless CRUD operations with MongoDB",
      ],
      github: "https://github.com/Akashciph09/Job-Space",
      demo: "https://job-space-project-frontend.vercel.app/",
    },
  ];

  const achievements = [
    {
      title: "Competitive Programming",
      description: "Max 1257 (Pupil) rating on Codeforces",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Problem Solving",
      description:
        "Solved 400+ DSA problems across LeetCode, GeeksforGeeks, and Codeforces",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Contest Participation",
      description: "Competed in 20+ coding contests",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "JEE Mains",
      description: "96.17 percentile - Top 3% of students",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/singh_akash09/",
      stats: "Max Rating: 1604",
      color: "from-orange-400 to-yellow-500",
      username: "singh_akash09", // added
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/Akashlnm09",
      stats: "Max Rating: 1257 (Pupil)",
      color: "from-blue-400 to-cyan-500",
      username: "Akashlnm09", // added
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/akashsingep8j/e",
      color: "from-green-400 to-emerald-500",
      username: "akashsingep8j", // added
    },
    {
      name: "Coding Ninjas",
      url: "https://www.naukri.com/code360/profile/akashhsingh",
      color: "from-red-400 to-orange-500",
      username: "akashhsingh", // added
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AS
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Achievements",
                "Profiles",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Achievements",
                "Profiles",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Akash Singh
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-gray-400 text-lg">
              Computer Science Student | Mern Stack | Competitive Programmer
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Akashciph09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-singh-114536246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/u/singh_akash09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
                title="LeetCode"
              >
                <Code className="w-6 h-6" />
              </a>
              <a
                href="https://codeforces.com/profile/Akashlnm09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                title="Codeforces"
              >
                <Trophy className="w-6 h-6" />
              </a>
              <a
                href="mailto:akashh.singh299@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/images/profile.jpg"
                alt="Akash Singh"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-500/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    Who I Am
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Hey there! I’m a final-year Computer Science student who
                    loves creating clean, functional, and scalable web
                    applications. I work mainly with the MERN stack and enjoy
                    solving challenging problems through DSA and OOP. I’m all
                    about building things that make an impact — whether it’s a
                    sleek user interface or a well-structured backend. Always
                    learning, always improving, and ready to contribute to a
                    growth-focused team.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg">
                            B.Tech - Computer and Communication Engineering
                          </h4>
                          <p className="text-gray-400">
                            The LNM Institute Of Information Technology, Jaipur
                          </p>
                          <p className="text-sm text-gray-500">2022 - 2026</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h4 className="font-semibold">
                            Senior Secondary (12th)
                          </h4>
                          <p className="text-gray-400">
                            Dawn Washco School, Mau, UP
                          </p>
                          <p className="text-sm text-gray-500">2019 - 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="flex flex-wrap gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+91-8955807612</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>akashh.singh299@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <Card
                key={category}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-blue-400 capitalize">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">CS Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Operating Systems",
                    "Computer Networks",
                    "DBMS",
                    "OOPs",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={project.title}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-auto pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <Card
                key={achievement.title}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mb-4">
                    <div className="text-purple-400">{achievement.icon}</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coding Profiles */}
          <div id="profiles" className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Coding Profiles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {codingProfiles.map((profile, idx) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${profile.color} rounded-lg mb-4 shadow-lg`}
                      >
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-2">{profile.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">
                        @{profile.username}
                      </p>
                      <p className="text-blue-400 text-sm font-semibold">
                        {profile.stats}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-3 text-gray-400 text-sm">
                        <span>View Profile</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">
                  Extracurricular Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold">
                        Content Writer - E-Summit 2024
                      </h4>
                      <p className="text-sm text-gray-400">January 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold">
                        Public Relations Team - Plinth 2024 (Techfest)
                      </h4>
                      <p className="text-sm text-gray-400">January 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:akashh.singh299@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  akashh.singh299@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+918955807612"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +91-8955807612
                </a>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/akash-singh-114536246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Akash Singh. Built with Next.js, React, and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Akashciph09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-singh-114536246/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/singh_akash09/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors"
              title="LeetCode"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="https://codeforces.com/profile/Akashlnm09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              title="Codeforces"
            >
              <Trophy className="w-5 h-5" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
              title="GeeksforGeeks"
            >
              <Award className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
