'use client';

import { useState } from 'react';
import { Plain, CheckCircle } from '@solar-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', projectType: '', message: '',
  });
  const [errors, setErrors]           = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [submitError, setSubmitError]   = useState('');

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
        setSubmitError(
          data.message ||
          (isAr ? 'حدث خطأ، يرجى المحاولة مجدداً' : 'Something went wrong. Please try again.')
        );
        return;
      }
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setSubmitError(
        isAr
          ? 'تعذّر الاتصال بالخادم، يرجى التحقق من الاتصال'
          : 'Could not reach the server. Check your connection and try again.'
      );
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

          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            {isAr ? '✓ مجاناً تماماً — بدون التزامات' : '✓ Completely free — no commitment required'}
          </p>
        </form>
      </div>
    </div>
  );
}
