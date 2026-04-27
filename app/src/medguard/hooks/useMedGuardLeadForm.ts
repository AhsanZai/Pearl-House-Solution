"use client";

import { useMemo, useState } from "react";
import * as yup from "yup";
import { leadFormSchema } from "@/app/src/safestreet/utils/validations/leadSchema";

export type MedGuardFormStatus = "idle" | "loading" | "success" | "error";

const initialForm = {
  firstName: "",
  lastName: "",
  stAddress: "",
  email: "",
  phone: "",
  zip: "",
};

type LeadFormInput = typeof initialForm;

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

export function useMedGuardLeadForm() {
  const [form, setForm] = useState<LeadFormInput>(initialForm);
  const [status, setStatus] = useState<MedGuardFormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else if (name === "zip") {
      setForm((prev) => ({ ...prev, [name]: value.replace(/\D/g, "").slice(0, 5) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const fieldErrors = useMemo((): Record<string, string> => {
    if (leadFormSchema.isValidSync(form)) {
      return {};
    }
    try {
      leadFormSchema.validateSync(form, { abortEarly: false });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const out: Record<string, string> = {};
        for (const inner of err.inner) {
          if (inner.path && !out[inner.path]) {
            out[inner.path] = inner.message;
          }
        }
        return out;
      }
    }
    return {};
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadFormSchema.isValidSync(form)) {
      return;
    }
    setStatus("loading");
    const payload = { ...form, landing: "medguard" as const };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialForm);
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const isValid = leadFormSchema.isValidSync(form);

  return {
    form,
    status,
    isValid,
    fieldErrors,
    handleChange,
    handleSubmit,
  };
}
