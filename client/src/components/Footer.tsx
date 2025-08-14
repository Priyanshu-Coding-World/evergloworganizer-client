export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-playfair font-bold mb-4" data-testid="footer-logo">
              EverGlow <span className="text-gold">Organisers</span>
            </div>
            <p className="text-gray-300 mb-6" data-testid="footer-description">
              Creating luminous, memorable experiences that shine forever. We make your day extraordinary.
            </p>
            <div className="flex gap-4">
              <button className="bg-white/10 hover:bg-coral/20 p-2 rounded-full transition-all duration-300" data-testid="footer-social-instagram">
                <span className="text-sm">📷</span>
              </button>
              <button className="bg-white/10 hover:bg-coral/20 p-2 rounded-full transition-all duration-300" data-testid="footer-social-facebook">
                <span className="text-sm">📘</span>
              </button>
              <button className="bg-white/10 hover:bg-coral/20 p-2 rounded-full transition-all duration-300" data-testid="footer-social-pinterest">
                <span className="text-sm">📌</span>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-services-title">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-weddings">Luxury Weddings</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-corporate">Corporate Events</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-social">Social Celebrations</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-virtual">Virtual Events</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-consultation">Event Consultation</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-resources-title">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-guide">Event Planning Guide</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-calculator">Budget Calculator</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-venues">Venue Directory</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-vendors">Vendor Network</button></li>
              <li><button className="hover:text-coral transition-colors text-left" data-testid="footer-link-blog">Blog & Tips</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-contact-title">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li data-testid="footer-address-line-1">123 Luxury Lane</li>
              <li data-testid="footer-address-line-2">Beverly Hills, CA 90210</li>
              <li className="pt-2" data-testid="footer-phone">+1 (555) 123-GLOW</li>
              <li data-testid="footer-email">hello@evergloworganisers.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm" data-testid="footer-copyright">
              © 2024 EverGlow Organisers. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <button className="hover:text-coral transition-colors" data-testid="footer-link-privacy">Privacy Policy</button>
              <button className="hover:text-coral transition-colors" data-testid="footer-link-terms">Terms of Service</button>
              <button className="hover:text-coral transition-colors" data-testid="footer-link-cookies">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}