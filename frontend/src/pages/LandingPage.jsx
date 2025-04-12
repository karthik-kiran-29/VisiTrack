import { useState} from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../Context/AuthProvider';


// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-indigo-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  const {user} = useAuth() ;
  const navigate = useNavigate();
  
  // If user is logged in, show a different call-to-action
  const handleCTAClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col h-max items-center justify-evenly">
            <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Track Visitors With <span className="text-indigo-600">Unique Access Links</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                VisiTracks helps you monitor and analyze visitor traffic to your content with easy-to-use access keys. Perfect for marketers, content creators, and business owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCTAClick}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
                >
                  {user ? 'Go to Dashboard' : 'Get Started Free'}
                </button>
                <a 
                  href="#features" 
                  className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-lg font-medium text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How VisiTracks Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate access links, share them with your audience, and track visitor statistics in real-time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Create Access Keys</h3>
              <p className="text-gray-600">Generate unique access links that you can share with your audience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Share Your Links</h3>
              <p className="text-gray-600">Distribute your access links through email, social media, or any other channel.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Track Visitors</h3>
              <p className="text-gray-600">Monitor visitor counts and analyze traffic patterns with detailed statistics.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about VisiTracks.
            </p>
          </div>
          
          <div className="space-y-1">
            <FAQItem 
              question="What exactly is VisiTracks?" 
              answer="VisiTracks is a visitor tracking platform that allows you to create unique access links and monitor how many people visit your content through those links. It's perfect for tracking the performance of marketing campaigns, content distribution, and more."
            />
            <FAQItem 
              question="How do I get started with VisiTracks?" 
              answer="Getting started is easy! Simply sign up for a free account, create your first access key, and start sharing the generated link with your audience. You'll be able to track visitors immediately."
            />
            <FAQItem 
              question="Is my data secure with VisiTracks?" 
              answer="Absolutely. We take data security very seriously. All data is encrypted both in transit and at rest, and we follow industry best practices for protecting your information."
            />
            <FAQItem 
              question="Can I upgrade or downgrade my plan later?" 
              answer="Yes, you can change your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, your new rate will take effect at the next billing cycle."
            />
            <FAQItem 
              question="Do you offer a free trial for paid plans?" 
              answer="Yes, we offer a 14-day free trial of our Professional plan. No credit card is required to start your trial."
            />
            <FAQItem 
              question="How accurate is the visitor tracking?" 
              answer="Our tracking is highly accurate. We use a combination of techniques to ensure that we count unique visitors correctly while filtering out bots and duplicate visits."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;