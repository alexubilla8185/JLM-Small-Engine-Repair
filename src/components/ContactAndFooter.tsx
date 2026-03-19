import { Star, MapPin, Clock, Phone } from 'lucide-react';

export default function ContactAndFooter() {
  return (
    <section id="contact" className="bg-black pt-24">
      {/* Trust Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">4.9-Star Google Rating</h3>
            <p className="text-slate-400">Based on 60+ reviews from our satisfied customers.</p>
          </div>
        </div>
      </div>

      {/* Contact Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                  <p className="text-slate-400 leading-relaxed">
                    428 S Military Trail<br />
                    Deerfield Beach, FL 33442
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Hours of Operation</h4>
                  <ul className="text-slate-400 space-y-2">
                    <li className="flex justify-between w-48"><span>Mon - Thu:</span> <span>8 AM - 4 PM</span></li>
                    <li className="flex justify-between w-48"><span>Friday:</span> <span>8 AM - 2 PM</span></li>
                    <li className="flex justify-between w-48 text-amber-500/80"><span>Weekends:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                  <p className="text-slate-400">
                    <a href="tel:9544205480" aria-label="Call us at (954) 420-5480" className="hover:text-amber-500 transition-colors">(954) 420-5480</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14305.682262607275!2d-80.14633031284174!3d26.3128779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d09bfaf9897%3A0x328a9722f459c58d!2sJLM%20Small%20Engine%20Repair%2C%20Inc.!5e0!3m2!1sen!2sus!4v1773911724391!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="rounded-lg shadow-md border border-white/10"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 h-fit">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                aria-label="Send Message"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-6 rounded-md transition-all duration-300 hover:scale-105 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} JLM Small Engine Repair, Inc. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
