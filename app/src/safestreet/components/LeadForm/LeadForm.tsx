"use client";

import { useState } from "react";
import { useLeadForm } from "@/app/src/safestreet/hooks/leadForm/useLeadForm";
import { leadFormSchema } from "@/app/src/safestreet/utils/validations/leadSchema";

interface LeadFormProps {
  variant?: "full" | "short";
}

export default function LeadForm({ variant = "full" }: LeadFormProps) {
  const { form, status, handleChange, handleSubmit } = useLeadForm();
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isValid = leadFormSchema.isValidSync(form);

  let errors: Record<string, string> = {};
  if (!isValid) {
    try {
      leadFormSchema.validateSync(form, { abortEarly: false });
    } catch (err: any) {
      if (err.inner) {
        err.inner.forEach((e: any) => {
          if (!errors[e.path]) errors[e.path] = e.message;
        });
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const inputClass =
    "w-full h-11 border border-gray-300 rounded-xl px-4 text-[14px] text-gray-800 bg-white focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-300 placeholder-gray-400 shadow-sm";

  const labelClass = "block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider ml-1";

  return (
    <form
      onSubmit={handleSubmit}
      id="lead-form"
      className="
        bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60
        p-8
        w-full max-w-[480px]
        relative overflow-hidden
      "
    >      
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-[#1e3a5f] mb-1">Get Your Quote</h3>
        <p className="text-gray-500 text-sm">Secure your home with the best in class security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* First Name */}
        <div className="space-y-1">
          <label htmlFor="form-firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="form-firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            className={`${inputClass} ${touched.firstName && errors.firstName ? "border-red-400 ring-red-400/10" : ""}`}
            placeholder="John"
            onBlur={handleBlur}
          />
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label htmlFor="form-lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="form-lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            className={`${inputClass} ${touched.lastName && errors.lastName ? "border-red-400 ring-red-400/10" : ""}`}
            placeholder="Doe"
            onBlur={handleBlur}
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="form-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={14}
            className={`${inputClass} ${touched.phone && errors.phone ? "border-red-400 ring-red-400/10" : ""}`}
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="form-email" className={labelClass}>
            Email Address
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass} ${touched.email && errors.email ? "border-red-400 ring-red-400/10" : ""}`}
            placeholder="john@example.com"
          />
        </div>

        {variant === "full" && (
          <>
            {/* St Address */}
            <div className="md:col-span-2 space-y-1">
              <label htmlFor="form-stAddress" className={labelClass}>
                Street Address
              </label>
              <input
                id="form-stAddress"
                name="stAddress"
                type="text"
                value={form.stAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClass} ${touched.stAddress && errors.stAddress ? "border-red-400 ring-red-400/10" : ""}`}
                placeholder="123 Security Lane"
              />
            </div>
          </>
        )}

        {/* Zip Code - always shown or conditional? User didn't specify, but zip is usually important. */}
        <div className={variant === "full" ? "md:col-span-2 space-y-1" : "space-y-1"}>
          <label htmlFor="form-zip" className={labelClass}>
            Zip Code
          </label>
          <input
            id="form-zip"
            name="zip"
            type="text"
            placeholder="12345"
            value={form.zip}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={5}
            className={`${inputClass} ${touched.zip && errors.zip ? "border-red-400 ring-red-400/10" : ""}`}
          />
        </div>
      </div>

      {/* TCPA Disclaimer */}
      <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-[10px] text-gray-500 leading-relaxed font-medium text-justify">
        <p className="mb-2">
          <strong>Safe Streets USA LLC Express Written Consent Form MARKETING AUTHORIZATION:</strong> I, the undersigned, hereby authorize Safe Streets USA, LLC ("Safe Streets"), directly or through its affiliates and marketing partners, to contact me from time-to-time by telephone, text, email and/or direct mail with information and offers about products and services that might interest me.
        </p>
        <p>
          By clicking contact me below, I hereby authorize the receipt of such solicitations at the telephone number(s), (including cellular numbers), emails addresses) and /or mailing address(es) shown below, even if such telephone number(s), email address(es) or mailing addresses are listed on any "do not call" or other do not solicit registry or list and I agree that any such telephone calls and text messages may be generated using an automated phone dialing system. To discontinue or opt out of text messages reply with STOP. I understand I am not required to consent to make a purchase. Message and data rates may apply. View our{" "}
          <a href="https://www.safestreets.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] font-bold hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://www.safestreets.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] font-bold hover:underline">
            Terms & Conditions
          </a>.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        id="lead-form-submit"
        disabled={status === "loading" || !isValid}
        className={`
          w-full h-14 rounded-xl
          transition-all duration-300 cursor-pointer font-bold text-[15px] tracking-[0.2em] uppercase
          shadow-xl hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
          flex items-center justify-center gap-2
          ${status === "idle" ? "bg-[#1e3a5f] hover:bg-[#254a7a] text-white shadow-[#1e3a5f]/20" : ""}
          ${status === "loading" ? "bg-gray-400 text-white" : ""}
          ${status === "success" ? "bg-green-500 text-white shadow-green-500/20" : ""}
          ${status === "error" ? "bg-red-500 text-white shadow-red-500/20" : ""}
        `}
      >
        {status === "idle" && (
          <>
            <span>Get Quote</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </>
        )}
        {status === "loading" && (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>SENDING...</span>
          </div>
        )}
        {status === "success" && "SUCCESS!"}
        {status === "error" && "TRY AGAIN"}
      </button>
    </form>
  );
}
