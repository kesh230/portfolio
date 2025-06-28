import { ArrowDown, Link, Mail, MapPin, Phone, Video } from 'lucide-react';
import { useRef } from 'react';
import React from 'react';

const Portfolio = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    return ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const userInfo = {
    name: "Sarah Anderson",
    siteName: "Anderson Marketing",
    title: "Digital Marketing Expert",
    contact: "+1 (555) 123-4567",
    email: "sarah.anderson@email.com",
    location: "New York, NY",
    address: "123 Marketing Street, Suite 456",
    linkedin: "linkedin.com/in/sarahanderson",
    youtube: "youtube.com/@sarahanderson",
    bio: "Results-driven digital marketing expert with 8+ years of experience in crafting successful online campaigns and driving business growth through innovative strategies.",
    expertise: [
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "SEO Optimization",
      "Brand Development",
      "Analytics & Reporting"
    ]
  };

  return (
    <div className="min-h-screen bg-[#F0F5FF]">
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
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
                  About
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
              <div className="bg-red-500 text-white p-4">
  If this is red, Tailwind is working
</div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen relative flex items-center">
        <div className="relative z-10 w-full pt-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
            <h1 className="text-5xl font-bold mb-4 text-black">
              {userInfo.name}
            </h1>
            <h2 className="text-2xl mb-6 text-black">{userInfo.title}</h2>
            <p className="text-lg mb-8 text-black">{userInfo.bio}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-black">Areas of Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {userInfo.expertise.map((skill, index) => (
                  <div key={index} className="bg-[#F0F5FF] rounded-lg p-3 text-center text-black shadow-sm hover:shadow-md transition-shadow">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-black" />
          </div>
        </div>
      </header>

      {/* About/Content Section */}
      <section ref={aboutRef} className="min-h-screen py-16 px-4 bg-[#F0F5FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Placeholder 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <img 
                  src="/api/placeholder/640/360" 
                  alt="Marketing Strategy Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-black font-semibold">Marketing Strategy Overview</h3>
              </div>
            </div>
            
            {/* Video Placeholder 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <img 
                  src="/api/placeholder/640/360" 
                  alt="Campaign Results Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-black font-semibold">Campaign Success Stories</h3>
              </div>
            </div>
            
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Social Media Growth Case Study</h3>
              <p className="text-black">Achieved 300% follower growth and 5x engagement rate through strategic content planning and community management.</p>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Email Marketing Success Story</h3>
              <p className="text-black">Increased email open rates by 150% and conversion rates by 75% through personalized automation sequences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer ref={contactRef} className="min-h-screen py-16 px-4 bg-[#F0F5FF]">
        <div className="max-w-4xl w-full mx-auto bg-white rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-black">Contact Information</h2>
          
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
              <div className="flex items-center gap-2 text-black">
                <MapPin className="w-5 h-5 text-black" />
                <span>{userInfo.location}</span>
              </div>
              <p className="pl-7 text-black">{userInfo.address}</p>
            </div>
            
            <div className="space-y-4">
              <a href={userInfo.linkedin} className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
                <Link className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={userInfo.youtube} className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
                <Video className="w-5 h-10" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;