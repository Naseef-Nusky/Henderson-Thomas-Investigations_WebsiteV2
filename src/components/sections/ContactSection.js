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
    <section id="contact" className="py-16 md:py-20 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/contact.jpg)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Call Us Today For A Free Confidential Discussion
          </h2>
          <p className="text-gray-200 mb-6 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Professional private investigation services in London and across the UK. We deliver results with discretion, integrity, and professionalism.
          </p>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-white">Call Now</h3>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-300">07826 416466</div>
          </div>
        </div>

        {/* Main Content - Single Column Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8">
              {/* Form Header */}
              <div className="mb-6 md:mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Contact Form</h3>
                <p className="text-gray-600 text-sm md:text-base">Fill out the form below and we'll get back to you</p>
                {status.ok && (
                  <div className="mt-3 text-green-600 text-sm font-semibold">Message sent successfully.</div>
                )}
                {status.ok === false && (
                  <div className="mt-3 text-red-600 text-sm font-semibold">{status.error}</div>
                )}
              </div>

              {/* Contact Form */}
              <form onSubmit={submit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Your Name *</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handle} 
                    required 
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                      form.name.trim() 
                        ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`} 
                    placeholder="Enter your full name" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handle} 
                      required 
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        emailOk 
                          ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`} 
                      placeholder="Enter your email address" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handle} 
                      required 
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        phoneOk 
                          ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`} 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Tell us about your case *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    value={form.message} 
                    onChange={handle} 
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 focus:outline-none resize-none" 
                    placeholder="Tell us about your investigation needs..." 
                  />
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status.sending || !form.name || !emailOk || !form.message.trim() || !phoneOk} 
                    className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                      !status.sending && form.name && emailOk && phoneOk && form.message.trim()
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <svg className={`w-5 h-5 mr-2 ${status.sending ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
};

export default ContactSection;