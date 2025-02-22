import React from 'react';
import {
  ArrowRight,
  Bot,
  Calendar,
  Brain,
  MessageSquare,
  Users,
  Zap,
  LineChart,
  CheckCircle,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Target,
  Settings,
  BarChart3,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">AI Systems Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#work" className="hover:text-blue-400 transition-colors">Case Studies</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </nav>

          <div className="mt-32 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Revolutionize Your Business with Smarter AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI-driven tools to simplify processes, save time, and scale effortlessly—customized for your unique goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center group">
                Get Your AI Strategy Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-gray-700/50 backdrop-blur rounded-lg font-semibold hover:bg-gray-600/50 transition-colors border border-gray-600">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Smarter AI Solutions for a Smarter Business
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            At AI Systems Pro, we turn complex business challenges into streamlined solutions. Our AI-powered tools are designed to save time, cut costs, and drive growth. With automation tailored to your needs, your business can do more, faster.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Efficiency', 
                desc: 'Save time and cut costs by automating repetitive tasks and boosting productivity.' 
              },
              { 
                icon: LineChart, 
                title: 'Scalability', 
                desc: 'AI solutions tailored to grow with your business, ensuring long-term success.' 
              },
              { 
                icon: CheckCircle, 
                title: 'Reliability', 
                desc: 'Dependable systems built for consistent performance you can trust.' 
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-gray-700/50 backdrop-blur rounded-xl hover:bg-gray-600/50 transition-all border border-gray-600/50 hover:border-blue-500/50 group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">AI Solutions Designed to Elevate Your Business</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Calendar,
                title: 'AI Chatbots for Appointment Setting',
                desc: 'Simplify scheduling with chatbots that handle appointment bookings 24/7—so your customers can connect with you anytime, hassle-free.',
              },
              {
                icon: MessageSquare,
                title: 'Customer Support Chatbots',
                desc: 'Deliver exceptional customer service with AI-powered chatbots that provide instant answers to FAQs and resolve common issues efficiently.',
              },
              {
                icon: Target,
                title: 'Lead Capture & CRM Chatbots',
                desc: 'Turn website visitors into leads with smart chatbots that collect customer information, qualify prospects, and sync seamlessly with your CRM.',
              },
              {
                icon: Bot,
                title: 'Custom Virtual Assistants',
                desc: 'Create tailored virtual assistants to automate routine tasks, boost productivity, and free your team to focus on growth.',
              },
            ].map((service, index) => (
              <div key={index} className="p-8 bg-gray-800/50 backdrop-blur rounded-xl hover:bg-gray-700/50 transition-all border border-gray-700 group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.desc}</p>
                <a href="#contact" className="text-blue-400 flex items-center hover:text-blue-300 group-hover:translate-x-2 transition-transform">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Transformative Results for Real Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115',
                title: 'Local Clinics',
                result: 'Reduced no-shows by 25% and saved 15 hours per week for front-desk staff',
                industry: 'Healthcare',
              },
              {
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
                title: 'E-Commerce Stores',
                result: 'Increased conversions by 35% within the first month',
                industry: 'Retail',
              },
              {
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
                title: 'Fitness Studios',
                result: 'Increased new member sign-ups by 20% with 24/7 scheduling',
                industry: 'Fitness',
              },
            ].map((study, index) => (
              <div key={index} className="rounded-xl overflow-hidden bg-gray-700/50 backdrop-blur border border-gray-600 group hover:border-blue-500/50 transition-all">
                <div className="relative">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <span className="absolute bottom-4 left-4 bg-blue-500/80 backdrop-blur px-3 py-1 rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-300">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Want results like these? Let's discuss how AI Systems Pro can transform your business.</p>
            <button className="px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">From Concept to Transformation: Your AI Journey Simplified</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                icon: Target,
                title: 'Discovery', 
                desc: 'Understand your goals and challenges to identify high-impact AI opportunities' 
              },
              { 
                step: '02',
                icon: Settings,
                title: 'Strategy & Design', 
                desc: 'Create a tailored AI roadmap and design solutions that fit your needs' 
              },
              { 
                step: '03',
                icon: Bot,
                title: 'Implementation', 
                desc: 'Deploy AI solutions seamlessly with minimal disruption to your operations' 
              },
              { 
                step: '04',
                icon: BarChart3,
                title: 'Optimization', 
                desc: 'Monitor performance, refine systems, and ensure continuous improvement' 
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl font-bold text-blue-400">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-6">Ready to start your AI journey? Let's turn your vision into reality.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build the Future of Your Business Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with AI Systems Pro to unlock your business's full potential. Whether you're ready to start now or have questions, we're here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Free Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More About Our Services
            </button>
          </div>
          <p className="mt-8 text-sm">
            Not ready yet? Contact us with your questions—no obligations, just solutions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">AI Systems Pro</span>
              </div>
              <p className="text-gray-400">Empowering businesses with smarter AI solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@aisystemspro.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 AI Systems Pro. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;