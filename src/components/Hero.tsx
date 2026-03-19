import { Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-black min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/7dhg4Mpw/JLM-Small-Engine-Repair.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Expert Small Engine Repair & Sales in <span className="text-amber-500">Deerfield Beach</span>
        </h1>
        
        <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Family-owned and serving the community for over <strong className="text-amber-500 font-semibold">25 years</strong>. 
          We are your authorized dealer for Husqvarna, Scag, and Echo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:9544205480" 
            aria-label="Call JLM Small Engine Repair at (954) 420-5480"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-lg font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-md transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call (954) 420-5480
          </a>
          
          <a 
            href="https://maps.app.goo.gl/857ecULiifdrvnut5" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our showroom location"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-lg font-bold text-amber-500 bg-transparent border-2 border-amber-500 hover:bg-amber-500/10 rounded-md transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-5 h-5" aria-hidden="true" />
            Visit Showroom
          </a>
        </div>
      </div>
    </div>
  );
}
