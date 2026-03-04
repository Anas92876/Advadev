'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Letter, ClockCircle, Plain, CheckCircle, Stars, ArrowRight,
  AltArrowRight, ChatSquare, Phone, Bolt,
} from '@solar-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const quickLinkHrefs = ['/services', '/portfolio', '/pricing', '/about'];

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.errors.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.emailInvalid;
    }
    if (!formData.projectType) newErrors.projectType = t.errors.projectTypeRequired;
    if (!formData.message.trim()) {
      newErrors.message = t.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.errors.messageTooShort;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          projectType: formData.projectType || undefined,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.message || (isAr ? 'حدث خطأ، يرجى المحاولة مجدداً' : 'Something went wrong. Please try again.'));
        return;
      }
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setSubmitError(isAr ? 'تعذّر الاتصال بالخادم، يرجى التحقق من الاتصال' : 'Could not reach the server. Check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800/70 border focus:outline-none focus:ring-2 transition-all duration-200';
  const inputClass = (field: string) =>
    `${inputBase} ${
      errors[field]
        ? 'border-red-400/70 focus:ring-red-500/25 bg-red-50/50 dark:bg-red-900/10'
        : 'border-gray-200 dark:border-gray-700/70 focus:border-primary-400/70 focus:ring-primary-500/20'
    }`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ─── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-gray-950 pt-28 pb-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-1 absolute -top-20 left-1/3 w-[560px] h-[560px] rounded-full bg-primary-600/[0.09] blur-3xl" />
          <div className="blob-2 absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-violet-700/[0.07] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.10]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.55) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold tracking-widest uppercase mb-7">
            <Stars weight="Bold" className="w-3 h-3" />
            {t.badge}
          </div>
          <h1 className="fade-in-up fade-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-5">
            {t.title}
          </h1>
          <p className="fade-in-up fade-delay-2 text-lg text-gray-400 max-w-2xl mx-auto">{t.desc}</p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-24 sm:h-32">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" className="fill-gray-100 dark:fill-gray-950" />
          </svg>
        </div>
      </div>

      {/* ─── Form + Sidebar ───────────────────────────────── */}
      <div className="py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

            {/* ── Sidebar ─────────────────────────────────── */}
            <div className="lg:col-span-1 space-y-5 fade-in-up">

              {/* Contact info — dark card */}
              <div className="relative rounded-2xl bg-gray-950 border border-gray-800 overflow-hidden">
                {/* Background glow */}
                <div className="pointer-events-none absolute -top-16 -left-16 w-[200px] h-[200px] rounded-full bg-primary-600/[0.15] blur-3xl" />
                <div className="relative z-10 p-6">
                  <h3 className="text-sm font-bold text-white mb-6 tracking-wide uppercase">
                    {t.contactInfoTitle}
                  </h3>
                  <div className="space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <Letter weight="Bold" className="w-4 h-4 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold text-gray-500 uppercase tracking-widest mb-1">
                          {t.emailContactLabel}
                        </p>
                        <a
                          href="mailto:hello@advadev.com"
                          className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          hello@advadev.com
                        </a>
                      </div>
                    </div>
                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone weight="Bold" className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold text-gray-500 uppercase tracking-widest mb-1">
                          WhatsApp
                        </p>
                        <p className="text-sm font-medium text-gray-300">
                          {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                        </p>
                      </div>
                    </div>
                    {/* Response time */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <ClockCircle weight="Bold" className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold text-gray-500 uppercase tracking-widest mb-1">
                          {t.responseTimeLabel}
                        </p>
                        <p className="text-sm font-medium text-gray-300">{t.responseTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Speed badge */}
                  <div className="mt-6 pt-5 border-t border-gray-800 flex items-center gap-2.5">
                    <Bolt weight="Bold" className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <p className="text-xs text-gray-400">
                      {isAr ? 'ردود سريعة خلال ساعات العمل' : 'Fast replies during business hours'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 tracking-wide uppercase">
                  {t.quickLinksTitle}
                </h3>
                <div className="space-y-0.5">
                  {t.quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={quickLinkHrefs[index]}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group"
                    >
                      {link.label}
                      <AltArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consultation promo */}
              <div className="gbc-wrap hover:-translate-y-0.5 transition-all duration-200 hover:shadow-[0_16px_40px_-12px_rgba(131,44,219,0.22)]">
                <div className="gbc-inner bg-white dark:bg-gray-900 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <ChatSquare weight="Bold" className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                        {isAr ? 'استشارة مجانية' : 'Free Consultation'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                        {isAr
                          ? 'نحلل احتياجاتك ونقترح الحل المناسب بدون أي التزام'
                          : 'We analyze your needs and propose the right solution with no commitment'}
                      </p>
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors group/link"
                      >
                        {isAr ? 'شاهد أعمالنا أولاً' : 'See our work first'}
                        <ArrowRight weight="Bold" className="w-3.5 h-3.5 rtl:rotate-180 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Form ────────────────────────────────────── */}
            <div className="lg:col-span-2 fade-in-up fade-delay-1">
              <div className="gbc-wrap hover:shadow-[0_24px_60px_-12px_rgba(131,44,219,0.15)] transition-all duration-500">
                <div className="gbc-inner bg-white dark:bg-gray-900 p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                      <Plain weight="Bold" className="w-4 h-4 text-primary-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t.formTitle}
                    </h2>
                  </div>

                  {/* Success message */}
                  {isSubmitted && (
                    <div className="mb-7 flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-600/30">
                      <CheckCircle weight="Bold" className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-0.5">
                          {t.successTitle}
                        </p>
                        <p className="text-sm text-emerald-600/80 dark:text-emerald-400/70">
                          {t.successDesc}
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                          {t.nameLabel} <span className="text-primary-500">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={formData.name} onChange={handleChange}
                          placeholder={t.namePlaceholder}
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                          {t.phoneLabel}
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={formData.phone} onChange={handleChange}
                          placeholder={t.phonePlaceholder}
                          className={inputClass('phone')}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                        {t.emailLabel} <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        value={formData.email} onChange={handleChange}
                        placeholder={t.emailPlaceholder}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                        {t.projectTypeLabel} <span className="text-primary-500">*</span>
                      </label>
                      <select
                        id="projectType" name="projectType"
                        value={formData.projectType} onChange={handleChange}
                        className={inputClass('projectType')}
                      >
                        <option value="">{t.projectTypePlaceholder}</option>
                        {t.projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.projectType && <p className="text-xs text-red-500 mt-1.5">{errors.projectType}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                        {t.messageLabel} <span className="text-primary-500">*</span>
                      </label>
                      <textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange}
                        placeholder={t.messagePlaceholder}
                        rows={5}
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                    </div>

                    {/* Submit error */}
                    {submitError && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-600/30">
                        <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-200 shadow-primary hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(131,44,219,0.65)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? t.submitting : t.submitBtn}
                      {!isSubmitting && <Plain weight="Bold" className="w-4 h-4" />}
                      {isSubmitting && (
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      )}
                    </button>

                    {/* Trust line */}
                    <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                      {isAr
                        ? '✓ مجاناً تماماً — بدون التزامات'
                        : '✓ Completely free — no commitment required'}
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
