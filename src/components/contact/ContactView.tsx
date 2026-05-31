"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";
import type { Locale } from "@/types";

type Props = { locale: Locale };

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const CONTACT_EMAIL = "a.m.giszter@gmail.com";
const GITHUB_URL = "https://github.com/Giszta";
const LINKEDIN_URL = "https://linkedin.com/in/yourusername";

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function FormField({
  label,
  error,
  children,
  required = true,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[10px] tracking-[2px]"
        style={{ color: "#8899aa", textTransform: "uppercase" }}
      >
        {label}
        {required && <span style={{ color: "#00ffb4" }}> *</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="text-[10px] tracking-[1px]"
            style={{ color: "#ff6b6b" }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  background: "rgba(10,15,26,0.8)",
  border: `1px solid ${hasError ? "rgba(255,107,107,0.5)" : "rgba(0,255,180,0.15)"}`,
  color: "#e8eaf0",
  outline: "none",
  fontFamily: "inherit",
  fontSize: "13px",
  transition: "border-color 0.2s",
  padding: "10px 12px",
  width: "100%",
});

function SuccessState({
  onReset,
  t,
}: {
  onReset: () => void;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 py-16 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center border text-2xl"
        style={{
          borderColor: "rgba(0,255,180,0.4)",
          background: "rgba(0,255,180,0.06)",
          color: "#00ffb4",
        }}
      >
        ✓
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold" style={{ color: "#e8eaf0" }}>
          {t("form_success_title")}
        </h3>
        <p className="text-sm" style={{ color: "#8899aa" }}>
          {t("form_success_desc")}
        </p>
      </div>
      <button
        onClick={onReset}
        className="border px-5 py-2 text-[10px] tracking-[2px] transition-all hover:brightness-125"
        style={{
          color: "#00ffb4",
          borderColor: "rgba(0,255,180,0.3)",
          background: "transparent",
          textTransform: "uppercase",
          clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
        }}
      >
        {t("form_send_another")}
      </button>
    </motion.div>
  );
}

function ErrorState({
  onReset,
  t,
}: {
  onReset: () => void;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 py-16 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center border text-2xl"
        style={{
          borderColor: "rgba(255,107,107,0.4)",
          background: "rgba(255,107,107,0.06)",
          color: "#ff6b6b",
        }}
      >
        ✕
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold" style={{ color: "#e8eaf0" }}>
          {t("form_error_title")}
        </h3>
        <p className="text-sm" style={{ color: "#8899aa" }}>
          {t("form_error_desc")}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ color: "#00ffb4" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.textDecoration = "underline")
            }
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = "none")}
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
      <button
        onClick={onReset}
        className="border px-5 py-2 text-[10px] tracking-[2px] transition-all hover:brightness-125"
        style={{
          color: "#ff6b6b",
          borderColor: "rgba(255,107,107,0.3)",
          background: "transparent",
          textTransform: "uppercase",
          clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
        }}
      >
        {t("form_send_another")}
      </button>
    </motion.div>
  );
}

export function ContactView({ locale: _locale }: Props) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    reset();
    setStatus("idle");
  };

  const infoItems = [
    {
      label: t("info_email_label"),
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      color: "#00ffb4",
    },
    {
      label: t("info_location_label"),
      value: t("info_location_value"),
      href: undefined,
      color: "#bf00ff",
    },
    {
      label: t("info_availability_label"),
      value: t("info_availability_value"),
      href: undefined,
      color: "#00ffb4",
    },
    {
      label: t("info_response_label"),
      value: t("info_response_value"),
      href: undefined,
      color: "#00b4ff",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-12">
      {/* Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="mb-3 text-[11px] tracking-[3px]"
          style={{ color: "#00ffb4", textTransform: "uppercase" }}
        >
          {t("label")}
        </p>
        <h1
          className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl"
          style={{ color: "#e8eaf0" }}
        >
          {t("page_title")}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {t("page_description")}
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
        {/* ── LEFT — Formularz ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="relative border p-8"
            style={{
              borderColor: "rgba(0,255,180,0.2)",
              background: "rgba(10,15,26,0.85)",
              boxShadow: "0 0 40px rgba(0,255,180,0.05)",
            }}
          >
            {/* Corner brackets */}
            <div
              className="absolute top-0 left-0 h-5 w-5"
              style={{
                borderTop: "2px solid #00ffb4",
                borderLeft: "2px solid #00ffb4",
                opacity: 0.6,
              }}
            />
            <div
              className="absolute right-0 bottom-0 h-5 w-5"
              style={{
                borderBottom: "2px solid #00ffb4",
                borderRight: "2px solid #00ffb4",
                opacity: 0.6,
              }}
            />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <SuccessState key="success" onReset={handleReset} t={t} />
              ) : status === "error" ? (
                <ErrorState key="error" onReset={handleReset} t={t} />
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <FormField
                        label={t("form_name")}
                        error={errors.name && t(errors.name.message as never)}
                      >
                        <input
                          {...register("name")}
                          type="text"
                          placeholder={t("form_name_placeholder")}
                          autoComplete="name"
                          style={inputStyle(!!errors.name)}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "rgba(0,255,180,0.4)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = errors.name
                              ? "rgba(255,107,107,0.5)"
                              : "rgba(0,255,180,0.15)";
                          }}
                        />
                      </FormField>

                      {/* Email */}
                      <FormField
                        label={t("form_email")}
                        error={errors.email && t(errors.email.message as never)}
                      >
                        <input
                          {...register("email")}
                          type="email"
                          placeholder={t("form_email_placeholder")}
                          autoComplete="email"
                          style={inputStyle(!!errors.email)}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "rgba(0,255,180,0.4)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = errors.email
                              ? "rgba(255,107,107,0.5)"
                              : "rgba(0,255,180,0.15)";
                          }}
                        />
                      </FormField>

                      {/* Subject */}
                      <div className="sm:col-span-2">
                        <FormField
                          label={t("form_subject")}
                          error={errors.subject && t(errors.subject.message as never)}
                        >
                          <input
                            {...register("subject")}
                            type="text"
                            placeholder={t("form_subject_placeholder")}
                            style={inputStyle(!!errors.subject)}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = "rgba(0,255,180,0.4)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = errors.subject
                                ? "rgba(255,107,107,0.5)"
                                : "rgba(0,255,180,0.15)";
                            }}
                          />
                        </FormField>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <FormField
                          label={t("form_message")}
                          error={errors.message && t(errors.message.message as never)}
                        >
                          <textarea
                            {...register("message")}
                            placeholder={t("form_message_placeholder")}
                            rows={6}
                            style={{
                              ...inputStyle(!!errors.message),
                              resize: "vertical",
                              minHeight: "120px",
                            }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = "rgba(0,255,180,0.4)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = errors.message
                                ? "rgba(255,107,107,0.5)"
                                : "rgba(0,255,180,0.15)";
                            }}
                          />
                        </FormField>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting || status === "submitting"}
                        className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-bold tracking-[2px] transition-all hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                        style={{
                          background: "#00ffb4",
                          color: "#050810",
                          textTransform: "uppercase",
                          clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                        }}
                      >
                        {isSubmitting || status === "submitting" ? (
                          <>
                            <span
                              className="h-3 w-3 animate-spin rounded-full border-2 border-transparent border-t-current"
                              style={{ borderTopColor: "#050810" }}
                            />
                            {t("form_submitting")}
                          </>
                        ) : (
                          <>{t("form_submit")} →</>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── RIGHT — Info sidebar ── */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Info cards */}
          {infoItems.map((item, i) => (
            <div
              key={i}
              className="border p-4"
              style={{
                borderColor: `${item.color}22`,
                background: `${item.color}05`,
              }}
            >
              <p
                className="mb-1 text-[9px] tracking-[2px]"
                style={{ color: item.color, textTransform: "uppercase" }}
              >
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-bold transition-colors"
                  style={{ color: "#e8eaf0" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = item.color)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#e8eaf0")}
                >
                  {item.value}
                </a>
              ) : (
                <div className="flex items-center gap-2">
                  {item.label === t("info_availability_label") && (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "#00ffb4",
                        boxShadow: "0 0 6px #00ffb4",
                        animation: "pulse 1.8s ease-in-out infinite",
                      }}
                    />
                  )}
                  <p className="text-sm font-bold" style={{ color: "#e8eaf0" }}>
                    {item.value}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Social links */}
          <div
            className="border p-4"
            style={{ borderColor: "rgba(0,255,180,0.1)", background: "rgba(10,15,26,0.6)" }}
          >
            <div className="flex flex-col gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: "#8899aa" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ffb4")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8899aa")}
              >
                <GitHubIcon />
                <span
                  className="text-[11px] tracking-[1.5px]"
                  style={{ textTransform: "uppercase" }}
                >
                  {t("social_github")}
                </span>
                <span className="ml-auto text-[10px]" style={{ color: "#445566" }}>
                  →
                </span>
              </a>
              <div className="h-px" style={{ background: "rgba(0,255,180,0.06)" }} />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: "#8899aa" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00b4ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8899aa")}
              >
                <LinkedInIcon />
                <span
                  className="text-[11px] tracking-[1.5px]"
                  style={{ textTransform: "uppercase" }}
                >
                  {t("social_linkedin")}
                </span>
                <span className="ml-auto text-[10px]" style={{ color: "#445566" }}>
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Note */}
          <div
            className="relative border p-5"
            style={{ borderColor: "rgba(191,0,255,0.2)", background: "rgba(191,0,255,0.04)" }}
          >
            <div
              className="absolute top-0 left-0 h-3.5 w-3.5"
              style={{
                borderTop: "2px solid #bf00ff",
                borderLeft: "2px solid #bf00ff",
                opacity: 0.5,
              }}
            />
            <p
              className="mb-2 text-[9px] tracking-[2px]"
              style={{ color: "#bf00ff", textTransform: "uppercase" }}
            >
              {t("note_title")}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>
              {t("note_body")}
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>
    </div>
  );
}
