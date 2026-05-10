"use client";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="casino-card-bg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Have a question about a specific brand or need help with a bonus? Our team is here to assist you. Fill out the form or reach out to us directly via email.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase font-bold">Email</div>
                <div className="text-white font-medium">support@ukrewardhub.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase font-bold">Location</div>
                <div className="text-white font-medium">
                  9365 49th St NE<br />
                  Crary, North Dakota 58327-9257<br />
                  United States
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="casino-card-bg p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-white/40 uppercase mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/40 uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/40 uppercase mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button className="w-full py-4 rounded-xl bg-linear-to-r from-primary to-orange-600 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
