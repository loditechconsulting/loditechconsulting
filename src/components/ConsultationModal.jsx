import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Calendar, Sparkles } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'SAP S/4HANA & Data Archiving',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: 'SAP S/4HANA & Data Archiving',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#081635] text-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700 p-6 sm:p-8 text-left relative">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071126] border border-[#2563EB]/40 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free Enterprise Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Talk to Our <span className="text-[#2563EB]">IT Experts</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Fill out the form below to schedule a 30-minute technical discovery session with a senior enterprise architect.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#071126] border border-slate-700 focus:border-[#2563EB] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Business Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@company.com"
                    className="w-full bg-[#071126] border border-slate-700 focus:border-[#2563EB] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#071126] border border-slate-700 focus:border-[#2563EB] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enterprise Corp"
                    className="w-full bg-[#071126] border border-slate-700 focus:border-[#2563EB] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Primary Service Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#071126] border border-slate-700 focus:border-[#2563EB] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="SAP S/4HANA & Data Archiving">SAP S/4HANA & Data Archiving</option>
                  <option value="Cloud Transformation (AWS/Azure)">Cloud Transformation (AWS/Azure)</option>
                  <option value="Enterprise Integration & APIs">Enterprise Integration & APIs</option>
                  <option value="Data & Analytics / SAC">Data & Analytics / SAC</option>
                  <option value="AI & Process Automation">AI & Process Automation</option>
                  <option value="24/7 Managed IT Support">24/7 Managed IT Support</option>
                  <option value="Cybersecurity & Compliance">Cybersecurity & Compliance</option>
                  <option value="Custom Application Development">Custom Application Development</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Project Outline / Key Goals
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current system landscape, timeline, or key objectives..."
                  className="w-full bg-[#071126] border border-slate-700 focus:border-[#2563EB] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Schedule Free Consultation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 We respect your privacy. Non-Disclosure Agreement (NDA) available upon request.
              </p>

            </form>
          </div>
        ) : (
          /* Submission Success View */
          <div className="text-center py-8 space-y-6 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-[#2563EB]/20 text-[#2563EB] flex items-center justify-center mx-auto border-2 border-[#2563EB]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Consultation Request Received!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#2563EB] font-bold">{formData.fullName}</span>. A senior enterprise architect from LoDi Tech will review your submission and contact you within <span className="font-bold text-white">24 hours</span>.
              </p>
            </div>

            <div className="bg-[#071126] p-4 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto space-y-1">
              <div>Confirmation sent to: <span className="text-white font-medium">{formData.email}</span></div>
              <div>Selected Focus: <span className="text-[#2563EB] font-medium">{formData.service}</span></div>
            </div>

            <div>
              <button
                onClick={resetAndClose}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
