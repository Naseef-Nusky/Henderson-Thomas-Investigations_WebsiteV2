import React, { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const phoneOk = /^\+?\d[\d\s-]{6,}$/.test(form.phone);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const [status, setStatus] = useState({ sending: false, ok: null, error: '' });
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !emailOk || !phoneOk || !form.message.trim()) return;
    setStatus({ sending: true, ok: null, error: '' });
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({
          name: form.name.trim(),
          mobile: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          source: 'contact',
        }).toString(),
      });
      const data = await res.json().catch(() => ({ ok: false, error: 'Invalid server response' }));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send');
      setStatus({ sending: false, ok: true, error: '' });
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err.message || 'Failed to send' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight">
            Call Us Today For A Free Confidential Discussion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Professional private investigation services in London and across the UK. We deliver results with discretion, integrity, and professionalism.
          </p>
          
          {/* Phone Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white max-w-md mx-auto mb-8 shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Call Now</h3>
            </div>
            <div className="text-3xl font-bold text-center">07826 416466</div>
            <p className="text-blue-100 text-center mt-2">Available 24/7</p>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/contact1.jpg" 
                  alt="Contact Henderson Thomas Investigations" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-indigo-900/20"></div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
                {/* Form Header */}
                <div className="mb-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Submit Your Details Below For A Free Quote</h3>
                  <p className="text-gray-600 text-lg">
                    Book your 100% discreet consultation
                  </p>
                  {status.ok && (
                    <div className="mt-4 text-green-600 text-sm font-semibold bg-green-50 px-4 py-2 rounded-lg">Message sent successfully.</div>
                  )}
                  {status.ok === false && (
                    <div className="mt-4 text-red-600 text-sm font-semibold bg-red-50 px-4 py-2 rounded-lg">{status.error}</div>
                  )}
                </div>

              {/* Contact Form */}
              <form onSubmit={submit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-800 text-left">Your Name *</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handle} 
                    required 
                    className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 bg-gray-50/50 backdrop-blur-sm ${
                      form.name.trim() 
                        ? 'border-green-400 focus:border-green-500 bg-green-50/50' 
                        : 'border-gray-200 focus:border-blue-500'
                    }`} 
                    placeholder="Enter your full name" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-800 text-left">Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handle} 
                      required 
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 bg-gray-50/50 backdrop-blur-sm ${
                        emailOk 
                          ? 'border-green-400 focus:border-green-500 bg-green-50/50' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`} 
                      placeholder="Enter your email address" 
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-800 text-left">Phone Number *</label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handle} 
                      required 
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 bg-gray-50/50 backdrop-blur-sm ${
                        phoneOk 
                          ? 'border-green-400 focus:border-green-500 bg-green-50/50' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`} 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-800 text-left">Tell us about your case *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    value={form.message} 
                    onChange={handle} 
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 focus:outline-none resize-none bg-gray-50/50 backdrop-blur-sm" 
                    placeholder="Tell us about your investigation needs..." 
                  />
                </div>
                
                {/* Submit Button */}
                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={status.sending || !form.name || !emailOk || !form.message.trim() || !phoneOk} 
                    className={`w-full inline-flex items-center justify-center px-8 py-5 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      !status.sending && form.name && emailOk && phoneOk && form.message.trim()
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <svg className={`w-5 h-5 mr-3 ${status.sending ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {status.sending ? 'Sending...' : 'Get Your Free Quote'}
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;