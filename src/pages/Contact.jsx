import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TYPES = [
    "New Gym",
    "Gym Renovation",
    "Fitness Studio",
    "Other",
];

const initialForm = {
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    description: "",
};

function Field({ label, children, required = false }) {
    return (
        <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F8F8F]">
                {label}
                {required && <span className="ml-1 text-[#E0C15A]">*</span>}
            </span>

            <div className="mt-2.5">{children}</div>
        </label>
    );
}

const inputClasses =
    "w-full rounded-xl border border-[#F5F3EE]/10 bg-[#0B0B0B] px-4 py-3.5 text-[15px] text-[#F5F3EE] placeholder:text-[#8F8F8F]/50 outline-none transition-all duration-300 hover:border-[#F5F3EE]/20 focus:border-[#E0C15A]/70 focus:bg-[#0E0E0E] focus:ring-1 focus:ring-[#E0C15A]/20";

export default function Contact() {
    const rootRef = useRef(null);
    const [form, setForm] = useState(initialForm);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    useGSAP(
        () => {
            const section = rootRef.current?.querySelector("[data-contact-section]");
            if (!section) return;

            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            if (isMobile) {
                gsap.fromTo(
                    ["[data-contact-header] > *", "[data-contact-form]"],
                    { y: 24, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.08,
                        ease: "power2.out",
                        scrollTrigger: { trigger: section, start: "top 88%", once: true },
                    }
                );
                return;
            }

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 88%",
                    end: "top 30%",
                    scrub: 1.1,
                },
            });

            timeline
                .fromTo(
                    "[data-contact-header] > *",
                    { y: 42, opacity: 0.25, filter: "blur(4px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        stagger: 0.08,
                        ease: "none",
                    }
                )
                .fromTo(
                    "[data-contact-form]",
                    { y: 70, opacity: 0.25 },
                    { y: 0, opacity: 1, ease: "none" },
                    0.15
                );
        },
        { scope: rootRef }
    );

    const handleChange = (field) => (e) => {
        setForm((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));

        setErrors((prev) => ({
            ...prev,
            [field]: undefined,
        }));
    };

    const validate = () => {
        const next = {};

        if (!form.name.trim()) {
            next.name = "Enter your name.";
        }

        if (!form.phone.trim()) {
            next.phone = "Enter a phone or WhatsApp number.";
        }

        if (!form.email.trim()) {
            next.email = "Enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = "Enter a valid email.";
        }

        if (!form.city.trim()) {
            next.city = "Enter your city.";
        }

        if (!form.projectType) {
            next.projectType = "Select what you're planning.";
        }

        if (!form.description.trim()) {
            next.description = "Tell us briefly about the project.";
        }

        setErrors(next);

        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus("submitting");

        try {
            /*
            const fd = new FormData();

            Object.entries(form).forEach(([key, value]) => {
                fd.append(key, value);
            });

            if (file) {
                fd.append("reference", file);
            }

            await fetch("/api/enquiries", {
                method: "POST",
                body: fd,
            });
            */

            await new Promise((resolve) => setTimeout(resolve, 600));

            setStatus("done");
        } catch {
            setStatus("idle");

            setErrors((prev) => ({
                ...prev,
                submit: "Something went wrong. Please try again.",
            }));
        }
    };

    /* =========================
       SUCCESS SCREEN
    ========================= */

    if (status === "done") {
        return (
            <main ref={rootRef} className="flex min-h-[80vh] items-center bg-[#050505] px-6 text-[#F5F3EE]">
                <div className="mx-auto w-full max-w-2xl py-24">
                    <div className="relative overflow-hidden rounded-2xl border border-[#E0C15A]/20 bg-[#0B0B0B] p-8 text-center shadow-2xl shadow-black/30 sm:p-14">

                        {/* Gold glow */}
                        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#E0C15A]/10 blur-3xl" />

                        <div className="relative">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#E0C15A]/40 bg-[#E0C15A]/10 text-[#E0C15A]">
                                ✓
                            </div>

                            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E0C15A]">
                                Enquiry received
                            </p>

                            <h1 className="font-display mt-4 text-3xl uppercase leading-[0.95] sm:text-5xl">
                                We've got your project.
                            </h1>

                            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#8F8F8F]">
                                Someone from the studio will get back to you shortly
                                to understand the space and, if it's a fit, set up a
                                short discovery call.
                            </p>

                            <a
                                href="/#projects"
                                className="mt-9 inline-flex items-center gap-4 rounded-xl border border-[#E0C15A]/40 bg-[#E0C15A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050505] transition-all duration-300 hover:bg-[#E0C15A] hover:shadow-lg hover:shadow-[#E0C15A]/10"
                            >
                                View Our Gym Projects
                                <span className="text-base">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main ref={rootRef} className="bg-[#050505] text-[#F5F3EE]">
            <section
                data-contact-section
                className="relative overflow-hidden border-b border-[#F5F3EE]/5 py-20 md:py-28"
            >

                {/* ================= BACKGROUND ================= */}

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-180px] top-20 hidden h-[420px] w-[420px] rounded-full bg-[#E0C15A]/[0.035] blur-[100px] md:block" />

                    <div className="absolute bottom-[-180px] right-[-150px] hidden h-[450px] w-[450px] rounded-full bg-[#E0C15A]/[0.025] blur-[110px] md:block" />

                    <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E0C15A]/25 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-5xl px-6 md:px-10">

                    {/* ================= HEADER ================= */}

                    <div data-contact-header className="mx-auto max-w-3xl text-center">

                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#E0C15A]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E0C15A]">
                                Start a project
                            </p>

                            <span className="h-px w-8 bg-[#E0C15A]" />
                        </div>

                        <h1 className="font-display mt-6 text-4xl uppercase leading-[0.9] tracking-[-0.025em] sm:text-5xl md:text-6xl">
                            Let's plan{" "}
                            <span className="text-[#E0C15A]">
                                your gym.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#8F8F8F]">
                            Tell us about the space, the equipment, and how people
                            will train. A short form, then a real conversation.
                        </p>

                        <div className="mt-7 flex items-center justify-center gap-3">
                            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F5F3EE]/25">
                                Project enquiry
                            </span>

                            <span className="h-px w-10 bg-[#F5F3EE]/10" />

                            <span className="font-mono text-[8px] tracking-[0.16em] text-[#E0C15A]/70">
                                01
                            </span>
                        </div>
                    </div>

                    {/* ================= FORM CARD ================= */}

                    <div
                        data-contact-form
                        className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#F5F3EE]/10 bg-[#080808] p-5 shadow-2xl shadow-black/20 sm:p-8 md:p-10"
                    >

                        {/* Top card line */}

                        <div className="mb-9 flex items-center justify-between border-b border-[#F5F3EE]/8 pb-5">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E0C15A]">
                                    Project details
                                </p>

                                <p className="mt-1 text-xs text-[#8F8F8F]">
                                    Tell us what you're building.
                                </p>
                            </div>

                            <div className="hidden rounded-full border border-[#E0C15A]/20 bg-[#E0C15A]/5 px-3 py-1.5 sm:block">
                                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#E0C15A]/70">
                                    Step 01 / 01
                                </span>
                            </div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="space-y-8"
                        >

                            {/* ================= BASIC DETAILS ================= */}

                            <div className="grid gap-6 sm:grid-cols-2">

                                <Field label="Name" required>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange("name")}
                                        placeholder="Your full name"
                                        className={inputClasses}
                                        aria-invalid={!!errors.name}
                                    />

                                    {errors.name && (
                                        <p className="mt-2 text-xs text-[#E0C15A]">
                                            {errors.name}
                                        </p>
                                    )}
                                </Field>

                                <Field label="Phone / WhatsApp" required>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange("phone")}
                                        placeholder="+91 12345 67890"
                                        className={inputClasses}
                                        aria-invalid={!!errors.phone}
                                    />

                                    {errors.phone && (
                                        <p className="mt-2 text-xs text-[#E0C15A]">
                                            {errors.phone}
                                        </p>
                                    )}
                                </Field>

                                <Field label="Email" required>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange("email")}
                                        placeholder="you@email.com"
                                        className={inputClasses}
                                        aria-invalid={!!errors.email}
                                    />

                                    {errors.email && (
                                        <p className="mt-2 text-xs text-[#E0C15A]">
                                            {errors.email}
                                        </p>
                                    )}
                                </Field>

                                <Field label="City / Location" required>
                                    <input
                                        type="text"
                                        value={form.city}
                                        onChange={handleChange("city")}
                                        placeholder="City, country"
                                        className={inputClasses}
                                        aria-invalid={!!errors.city}
                                    />

                                    {errors.city && (
                                        <p className="mt-2 text-xs text-[#E0C15A]">
                                            {errors.city}
                                        </p>
                                    )}
                                </Field>
                            </div>

                            {/* ================= DIVIDER ================= */}

                            <div className="flex items-center gap-4">
                                <span className="h-px flex-1 bg-[#F5F3EE]/8" />

                                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F5F3EE]/25">
                                    Project type
                                </span>

                                <span className="h-px flex-1 bg-[#F5F3EE]/8" />
                            </div>

                            {/* ================= PROJECT TYPE ================= */}

                            <Field label="What are you planning?" required>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {PROJECT_TYPES.map((type, index) => {
                                        const active = form.projectType === type;

                                        return (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => {
                                                    setForm((prev) => ({
                                                        ...prev,
                                                        projectType: type,
                                                    }));

                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        projectType: undefined,
                                                    }));
                                                }}
                                                className={`group relative min-h-[108px] overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
                                                    active
                                                        ? "border-[#E0C15A]/70 bg-[#E0C15A]/10 shadow-lg shadow-[#E0C15A]/5"
                                                        : "border-[#F5F3EE]/10 bg-[#0B0B0B] hover:border-[#E0C15A]/30 hover:bg-[#101010]"
                                                }`}
                                                aria-pressed={active}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span
                                                        className={`font-mono text-[8px] tracking-[0.16em] ${
                                                            active
                                                                ? "text-[#E0C15A]"
                                                                : "text-[#8F8F8F]"
                                                        }`}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                                                            active
                                                                ? "bg-[#E0C15A] shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                                                                : "bg-[#F5F3EE]/20"
                                                        }`}
                                                    />
                                                </div>

                                                <span
                                                    className={`mt-7 block text-xs font-semibold uppercase tracking-[0.08em] ${
                                                        active
                                                            ? "text-[#F5F3EE]"
                                                            : "text-[#D0CEC8]"
                                                    }`}
                                                >
                                                    {type}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {errors.projectType && (
                                    <p className="mt-2 text-xs text-[#E0C15A]">
                                        {errors.projectType}
                                    </p>
                                )}
                            </Field>

                            {/* ================= DESCRIPTION ================= */}

                            <Field label="Tell us about the project" required>
                                <div className="relative">
                                    <textarea
                                        value={form.description}
                                        onChange={handleChange("description")}
                                        placeholder="Size of the space, timeline, what the gym needs to do..."
                                        rows={6}
                                        className={`${inputClasses} resize-none`}
                                        aria-invalid={!!errors.description}
                                    />

                                    <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[7px] uppercase tracking-[0.16em] text-[#F5F3EE]/20">
                                        Project brief
                                    </span>
                                </div>

                                {errors.description && (
                                    <p className="mt-2 text-xs text-[#E0C15A]">
                                        {errors.description}
                                    </p>
                                )}
                            </Field>

                            {/* ================= FILE UPLOAD ================= */}

                            <Field label="Plans or reference images (optional)">
                                <label
                                    htmlFor="reference-upload"
                                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-[#F5F3EE]/12 bg-[#0B0B0B] px-4 py-4 transition-all duration-300 hover:border-[#E0C15A]/50 hover:bg-[#101010]"
                                >
                                    <div className="flex min-w-0 items-center gap-3">

                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E0C15A]/20 bg-[#E0C15A]/5 text-lg text-[#E0C15A]">
                                            +
                                        </span>

                                        <div className="min-w-0">
                                            <span className="block truncate text-sm text-[#D0CEC8]">
                                                {file
                                                    ? file.name
                                                    : "Upload floor plans, photos, or references"}
                                            </span>

                                            <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-[#8F8F8F]">
                                                JPG, PNG or PDF
                                            </span>
                                        </div>
                                    </div>

                                    <span className="ml-4 shrink-0 rounded-lg border border-[#F5F3EE]/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E0C15A] transition-all group-hover:border-[#E0C15A]/40">
                                        Browse
                                    </span>
                                </label>

                                <input
                                    id="reference-upload"
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setFile(e.target.files?.[0] ?? null)
                                    }
                                />
                            </Field>

                            {/* ================= SUBMIT ================= */}

                            <div className="border-t border-[#F5F3EE]/8 pt-7">

                                {errors.submit && (
                                    <p className="mb-4 text-sm text-[#E0C15A]">
                                        {errors.submit}
                                    </p>
                                )}

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D0CEC8]">
                                            Ready when you are.
                                        </p>

                                        <p className="mt-1 max-w-xs text-[11px] leading-5 text-[#8F8F8F]">
                                            Your project starts with a conversation.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="group inline-flex w-full items-center justify-center gap-5 rounded-xl bg-[#E0C15A] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050505] shadow-lg shadow-[#E0C15A]/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A] hover:shadow-xl hover:shadow-[#E0C15A]/10 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                    >
                                        <span>
                                            {status === "submitting"
                                                ? "Sending..."
                                                : "Discuss Your Gym Project"}
                                        </span>

                                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* ================= BOTTOM NOTE ================= */}

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <span className="h-1 w-1 rounded-full bg-[#E0C15A]" />

                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#8F8F8F]/60">
                            Your information stays confidential
                        </p>

                        <span className="h-1 w-1 rounded-full bg-[#E0C15A]" />
                    </div>
                </div>
            </section>
        </main>
    );
}
