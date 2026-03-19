import { Wrench, ShoppingCart, PackageSearch, ShieldCheck } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="bg-black pt-24">
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <Wrench className="w-8 h-8 text-amber-500" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Repairs</h3>
            <p className="text-slate-400 leading-relaxed">
              Fast turnaround for mowers, generators, trimmers, and chainsaws.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <ShoppingCart className="w-8 h-8 text-amber-500" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">New Equipment Sales</h3>
            <p className="text-slate-400 leading-relaxed">
              Setup and installation for top-tier residential and commercial brands.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-white/10 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <PackageSearch className="w-8 h-8 text-amber-500" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Parts & Inventory</h3>
            <p className="text-slate-400 leading-relaxed">
              Extensive stock of small engines and replacement parts.
            </p>
          </div>
        </div>
      </div>

      {/* Commercial Banner */}
      <div className="mt-24 bg-amber-500 w-full py-16 px-4 sm:px-6 lg:px-8 border-y-4 border-amber-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <ShieldCheck className="w-10 h-10 text-black" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tight">
                Commercial Fleet Pricing
              </h2>
            </div>
            <p className="text-xl text-black/80 font-medium max-w-2xl mx-auto md:mx-0">
              Equip your landscaping crew with the best. We support local businesses with priority service and volume discounts.
            </p>
          </div>
          
          <div className="bg-black text-white p-6 md:p-8 rounded-xl border-2 border-black shadow-2xl max-w-md w-full text-center transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="text-amber-500 font-bold text-sm md:text-base mb-2 uppercase tracking-widest">Special Offer</p>
            <p className="text-xl md:text-2xl font-extrabold leading-tight">
              Up to 20% off qualified fleet purchases for Echo and Shindaiwa equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
