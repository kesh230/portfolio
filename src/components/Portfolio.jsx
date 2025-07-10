import {
  ArrowDown,
  Link,
  LucideGithub,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useRef } from "react";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const certRef = useRef(null);

  const scrollToSection = (ref) => {
    return ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const userInfo = {
    name: "Kesh Kumar Chaurasiya",
    siteName: "Portfolio",
    title: "Java Full Stack Developer",
    contact: "+91 6391752550",
    email: "keshchaurasiya448@gmail.com",
    github: "https://github.com/kesh230",
    address: "123 Marketing Street, Suite 456",
    linkedin: "https://www.linkedin.com/in/kesh-kumar-chaurasiya-002670226/",
    youtube: "youtube.com/@sarahanderson",
    location: "Delhi-NCR",
    bio1: "Passionate full-stack developer with hands-on experience in Java, Spring Boot, JavaScript, and React. Skilled in building scalable REST APIs, integrating secure authentication systems, and designing efficient database-driven solutions. Committed to continuous learning and delivering impactful, production-ready software across backend and frontend.",
    bio2: "Having knowledge of deployment workflows on AWS and GCP, including services like EC2, S3, VPC, and VM instances, along with basic infrastructure setup and environment configuration.",
    expertise: [
      "Expertise in Backend Development",

      "REST API Design & Integration",

      "System Architecture & Design",

      "Relational & NoSQL Databases (MySQL, PostgreSQL, MongoDB)",

      "Cloud Computing (AWS & GCP)",

      "Database Modeling & Optimization",
    ],
    project1: "https://github.com/kesh230/My-Hostel",
    project2: "https://github.com/kesh230/TeachToTech",
    project3: "https://github.com/kesh230/News-Website",
    certificate1:
      "https://drive.google.com/file/d/1l2634s-IHj8KZ7hNdgCZCPak8CcYn3Ez/view?usp=sharing",
    certificate2:
      "https://drive.google.com/file/d/17k6k8sgrMvZTG8FFwcl-dOkKrUQomkbc/view?usp=sharing",
    certificate3:
      "https://drive.google.com/file/d/1ZoTCxtxh7hHbIre9uNtK9xOHymA2MyCL/view?usp=sharing",
    certificate4:
      "https://drive.google.com/file/d/1XSiSvhH2FS6kB4acOBnFpQV5WfK_HAwW/view?usp=sharing",
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F5FF]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-black font-bold text-2xl">
              {userInfo.siteName}
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-8 text-black">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-gray-600 transition-colors font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="hover:text-gray-600 transition-colors font-medium"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(certRef)}
                  className="hover:text-gray-600 transition-colors font-medium"
                >
                  Certificates
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="hover:text-gray-600 transition-colors font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="min-h-screen relative flex items-center">
        {/* <div className="bg-red-500 text-white p-4">
                   If this is red, Tailwind is working
                </div> */}
        <div className="relative z-10 w-full pt-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <h1 className="text-5xl font-bold mb-4 text-black">
              {userInfo.name}
            </h1>
            <h2 className="text-2xl mb-6 text-black">{userInfo.title}</h2>
            <p className="text-lg mb-8 text-black">{userInfo.bio1}</p>
            <p className="text-lg mb-8 text-black">{userInfo.bio2}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {userInfo.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#F0F5FF] rounded-lg p-3 text-center text-black shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-black" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen py-16 px-4 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project: My Hostel */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-black">
                My Hostel
              </h3>
              <p className="text-black">
                A full-stack web-based hostel management system developed using
                React for the frontend and Flask for the backend. The system
                enables students to register, raise complaints, and provide
                feedback on food. It features an intelligent mess menu
                generation system that uses logistic regression to analyze user
                feedback and optimize weekly meal planning. Data is stored and
                managed using MongoDB.
              </p>
              <a
                href={userInfo.project1}
                className="flex items-center gap-2 text-black mt-4"
              >
                <LucideGithub className="w-5 h-5 text-black" />
                <span></span>
              </a>
            </div>

            {/* Project: TeachToTech */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-black">
                TeachToTech
              </h3>
              <p className="text-black">
                An educational platform where users can explore tech courses,
                view trainer details, and connect with mentors for placement
                assistance. Worked as a backend developer using Spring Boot to
                implement authentication and authorization with JWT tokens.
                Designed and developed RESTful APIs for managing course content
                and trainer listings to support placement preparation workflows.
              </p>
              <a
                href={userInfo.project2}
                className="flex items-center gap-2 text-black mt-4"
              >
                <LucideGithub className="w-5 h-5 text-black" />
                <span></span>
              </a>
            </div>

            {/* Project: News Portal */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-black">
                News Portal
              </h3>
              <p className="text-black">
                A dynamic web platform developed using HTML, CSS, and JavaScript
                for publishing college events, hackathons, and technical fests.
                It features category-based event listings, an interactive layout
                for showcasing upcoming and past events, and a clean, responsive
                design for smooth user experience on all devices.
              </p>
              <a
                href={userInfo.project3}
                className="flex items-center gap-2 text-black mt-4"
              >
                <LucideGithub className="w-5 h-5 text-black" />
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section  */}
      <section ref={certRef} className="py-16 px-4 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Certificates</h2>
            <span className="text-sm text-gray-600 italic">
              Click on the title of certificate to view exact certificate
            </span>
          </div>

          <ul className="space-y-6 text-black">
            <li className="bg-white p-4 rounded-lg shadow">
              <a
                href={userInfo.certificate1}
                className="font-semibold hover:underline"
              >
                AWS Compute Service Overview
              </a>
              <p className="text-sm text-gray-600">
                Gained foundational knowledge of AWS compute services including
                EC2 for virtual server hosting, ECS for managing containers, and
                AWS Lambda for serverless computing. Explored use cases,
                scalability, and deployment strategies across different compute
                models in the AWS cloud environment.
              </p>
            </li>

            <li className="bg-white p-4 rounded-lg shadow">
              <a
                href={userInfo.certificate2}
                className="font-semibold hover:underline"
              >
                Amazon Simple Storage Service (Amazon S3) Essentials – Beyond
                the Basics
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Explored Amazon S3 core concepts including storage classes, data
                management, encryption, access control, and service integration
                with tools like CLI and AWS services for secure and scalable
                storage.
              </p>
            </li>

            <li className="bg-white p-4 rounded-lg shadow">
              <a
                href={userInfo.certificate3}
                className="font-semibold hover:underline"
              >
                Master Spring Boot 3 & Spring Framework 6 with Java
              </a>
              <p className="text-sm text-gray-600">
                Built RESTful APIs, learned dependency injection, Spring MVC,
                and data access using Spring Boot 3 and Spring Framework 6 with
                real-world backend development in Java.
              </p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow">
              <a
                href={userInfo.certificate4}
                className="font-semibold hover:underline"
              >
                Programming Using Java
              </a>
              <p className="text-sm text-gray-600">
                Learned core Java concepts including object-oriented
                programming, data types, control structures, exception handling,
                and basic file I/O operations to build logic-driven console and
                application-based programs.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer ref={contactRef} className="py-16 px-4 bg-[#F0F5FF]">
        <div className="max-w-4xl w-full mx-auto bg-white rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-black">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-black">
                <Phone className="w-5 h-5 text-black" />
                <span>{userInfo.contact}</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <Mail className="w-5 h-5 text-black" />
                <span>{userInfo.email}</span>
              </div>
              <a
                href={userInfo.github}
                className="flex items-center gap-2 text-black"
              >
                <LucideGithub className="w-5 h-5 text-black" />
                <span>Github </span>
              </a>
            </div>

            <div className="space-y-4">
              <a
                href={userInfo.linkedin}
                className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
              >
                <Link className="w-5 h-5" />
                <span>LinkedIn </span>
              </a>
              <div className="flex items-center gap-2 text-black">
                <MapPin className="w-5 h-5 text-black" />
                <span>{userInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
