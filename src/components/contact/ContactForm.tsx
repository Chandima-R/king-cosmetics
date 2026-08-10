"use client";

import { FormEvent, useState } from "react";
import {
    CheckCircle2,
    LoaderCircle,
    Mail,
    Send,
} from "lucide-react";
import Image from "next/image";

type FormErrors = {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
};

type Status = {
    type: "success" | "error" | null;
    message: string;
};

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [errors, setErrors] = useState<FormErrors>({});

    const [status, setStatus] = useState<Status>({
        type: null,
        message: "",
    });

    const validateForm = (payload: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
    }) => {
        const newErrors: FormErrors = {};

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const sriLankanPhoneRegex =
            /^(\+94|0)(70|71|72|74|75|76|77|78)\d{7}$/;

        if (payload.name.trim().length < 3) {
            newErrors.name =
                "Full name must be at least 3 characters.";
        }

        if (!emailRegex.test(payload.email.trim())) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        if (
            payload.phone.trim() &&
            !sriLankanPhoneRegex.test(
                payload.phone.replace(/\s/g, ""),
            )
        ) {
            newErrors.phone =
                "Please enter a valid Sri Lankan phone number.";
        }

        if (payload.subject.trim().length < 5) {
            newErrors.subject =
                "Subject must be at least 5 characters.";
        }

        if (payload.message.trim().length < 15) {
            newErrors.message =
                "Message must be at least 15 characters.";
        }

        return newErrors;
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            phone: String(formData.get("phone") ?? "").trim(),
            subject: String(formData.get("subject") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
        };

        const validationErrors = validateForm(payload);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            setStatus({
                type: "error",
                message:
                    "Please correct the highlighted fields.",
            });

            return;
        }

        setErrors({});
        setIsSubmitting(true);

        setStatus({
            type: null,
            message: "",
        });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Failed to send your message.",
                );
            }

            setStatus({
                type: "success",
                message:
                    "Thank you! Your message has been sent successfully.",
            });

            form.reset();
        } catch (error) {
            setStatus({
                type: "error",

                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const getInputClassName = (hasError: boolean) =>
        `
            h-10
            w-full
            rounded-2xl
            border
            bg-white
            px-5
            text-sm
            outline-none
            transition-all
            duration-300
            placeholder:text-muted-foreground
            ${hasError
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
        }
        `;

    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border px-3 py-5 md:px-3 md:py-3 lg:p-5">
            {/* Decorative background image */}
            <Image
                src="/images/background/bg3.png"
                alt=""
                width={220}
                height={220}
                aria-hidden="true"
                className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                z-0
                w-32
                select-none
                object-contain
                opacity-[0.2]
                sm:w-40
                md:w-50
                lg:w-60
            "
            />

            {/* Header */}
            <div className="relative z-10 mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
                    <Mail className="h-5 w-5 text-primary" />
                </div>

                <div>
                    <h2 className="text-xl font-bold text-primary">
                        Send us a
                        <span className="text-foreground"> Message</span>
                    </h2>

                    <p className="text-xs text-muted-foreground">
                        We usually respond within 24 hours.
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-2 gap-3"
            >
                {/* Full name */}
                <div className="col-span-2 md:col-span-1">
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-foreground"
                    >
                        Full Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        autoComplete="name"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                        className={getInputClassName(
                            Boolean(errors.name),
                        )}
                    />

                    {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="col-span-2 md:col-span-1">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-foreground"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                        className={getInputClassName(
                            Boolean(errors.email),
                        )}
                    />

                    {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div className="col-span-2 md:col-span-1">
                    <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-foreground"
                    >
                        Phone Number (optional)
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+94 77 123 4567"
                        disabled={isSubmitting}
                        className={getInputClassName(
                            Boolean(errors.phone),
                        )}
                    />

                    {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Subject */}
                <div className="col-span-2 md:col-span-1">
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-foreground"
                    >
                        Subject
                    </label>

                    <input
                        id="subject"
                        name="subject"
                        required
                        type="text"
                        placeholder="How can we help?"
                        disabled={isSubmitting}
                        className={getInputClassName(
                            Boolean(errors.subject),
                        )}
                    />

                    {errors.subject && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.subject}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div className="col-span-2">
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-foreground"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Write your message..."
                        disabled={isSubmitting}
                        className={`
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            bg-white
                            px-5
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-muted-foreground
                            ${errors.message
                                ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                : "border-border focus:border-primary focus:ring-4 focus:ring-primary/10"
                            }
                        `}
                    />

                    {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.message}
                        </p>
                    )}
                </div>

                {/* Status */}
                {status.type && (
                    <div
                        role="status"
                        className={`col-span-2 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm ${status.type === "success"
                            ? "bg-primary-soft text-primary"
                            : "bg-red-50 text-red-600"
                            }`}
                    >
                        {status.type === "success" && (
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                        )}

                        <p>{status.message}</p>
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(63,116,28,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                    {isSubmitting ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="h-4 w-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}