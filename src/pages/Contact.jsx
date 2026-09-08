import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GYM_BG =
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80";

const ACCENT = "#A75D41";

const initialForm = {
    name: "",
    phone: "",
    email: "",
    city: "",
    description: "",
};

const inputClasses =
    "box-border h-[38px] w-full rounded-[8px] border border-[#4A4540] bg-[#EBE6DE] px-3 font-canva text-[12px] text-[#1A1A1A] placeholder:font-['Arial_MT_Pro'] placeholder:text-[#9A958C] outline-none transition-colors duration-200 focus:border-[#A75D41] focus:bg-[#F4EFEA]";

function Field({ label, required = false, children }) {
    return (
        <label className="block min-w-0">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A1A1A]">
                {label}
                {required ? " *" : ""}
            </span>
            {children}
        </label>
    );
}

export default function Contact() {
    const rootRef = useRef(null);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    useGSAP(
        () => {
            const section = rootRef.current;
            if (!section) return;

            gsap.fromTo(
                "[data-enquiry-copy], [data-enquiry-card]",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: { trigger: section, start: "top 82%", once: true },
                }
            );
        },
        { scope: rootRef }
    );

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Enter your name.";
        if (!form.phone.trim()) next.phone = "Enter a phone or WhatsApp number.";
        if (!form.email.trim()) next.email = "Enter a valid email.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = "Enter a valid email.";
        }
        if (!form.city.trim()) next.city = "Enter your city.";
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

    return (
        <section
            id="start-project"
            ref={rootRef}
            className="relative z-[30] min-h-[100svh] bg-[#0a0a0a]"
        >
            <img
                src={GYM_BG}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] items-center px-[6%] py-16 lg:px-[7%]">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-x-10 xl:gap-x-14">
                    <div data-enquiry-copy>
                        <h2 className="m-0 font-canva text-[clamp(2.75rem,6vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white">
                            Let&apos;s plan
                            <span className="mt-[0.04em] block" style={{ color: ACCENT }}>
                                your gym
                            </span>
                        </h2>
                        <p className="mt-28 font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[clamp(12px,1.12vw,16px)] font-normal leading-[1.7] text-white lg:mt-40">
                            <span className="whitespace-nowrap">
                                Tell us about the space, the equipment, and how people will train. A short form,
                            </span>
                            <br />
                            then a real conversation.
                        </p>
                    </div>

                    <div
                        data-enquiry-card
                        className="font-canva w-full max-w-[560px] rounded-[8px] bg-[#F4EFEA] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:max-w-none"
                    >
                        {status === "done" ? (
                            <div className="py-6 text-center">
                                <p
                                    className="font-canva text-[10px] font-bold uppercase tracking-[0.2em]"
                                    style={{ color: ACCENT }}
                                >
                                    Enquiry received
                                </p>
                                <h3 className="mt-3 font-canva text-2xl font-extrabold uppercase text-[#1A1A1A]">
                                    We&apos;ve got your project.
                                </h3>
                                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#5C574F]">
                                    Someone from the studio will get back to you
                                    shortly to understand the space.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="border-b-2 border-[#2A2A2A]/55 pb-4">
                                    <p className="font-canva text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A]">
                                        Project details
                                    </p>
                                    <p className="mt-1.5 font-canva text-[14px] text-[#2A2A2A]">
                                        Tell us what you&apos;re building.
                                    </p>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                    <Field label="Name">
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange("name")}
                                            placeholder="Your full name"
                                            className={inputClasses}
                                            aria-invalid={!!errors.name}
                                        />
                                        {errors.name && (
                                            <p className="mt-1.5 text-[11px]" style={{ color: ACCENT }}>
                                                {errors.name}
                                            </p>
                                        )}
                                    </Field>

                                    <Field label="Phone/WhatsApp" required>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange("phone")}
                                            placeholder="+91 1234567890"
                                            className={inputClasses}
                                            aria-invalid={!!errors.phone}
                                        />
                                        {errors.phone && (
                                            <p className="mt-1.5 text-[11px]" style={{ color: ACCENT }}>
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
                                            <p className="mt-1.5 text-[11px]" style={{ color: ACCENT }}>
                                                {errors.email}
                                            </p>
                                        )}
                                    </Field>

                                    <Field label="City/Location" required>
                                        <input
                                            type="text"
                                            value={form.city}
                                            onChange={handleChange("city")}
                                            placeholder="City, country"
                                            className={inputClasses}
                                            aria-invalid={!!errors.city}
                                        />
                                        {errors.city && (
                                            <p className="mt-1.5 text-[11px]" style={{ color: ACCENT }}>
                                                {errors.city}
                                            </p>
                                        )}
                                    </Field>
                                </div>

                                <div className="mt-6">
                                    <Field label="Tell us about the project" required>
                                        <div className="relative">
                                            <textarea
                                                value={form.description}
                                                onChange={handleChange("description")}
                                                placeholder="Size of the space, timeline, what the gym needs to do..."
                                                className="box-border h-[68px] w-full resize-none rounded-[8px] border border-[#4A4540] bg-[#EBE6DE] px-3 py-2 pb-5 font-canva text-[12px] text-[#1A1A1A] placeholder:font-['Arial_MT_Pro'] placeholder:text-[#9A958C] outline-none transition-colors duration-200 focus:border-[#A75D41] focus:bg-[#F4EFEA]"
                                                aria-invalid={!!errors.description}
                                            />
                                            <span className="pointer-events-none absolute bottom-2.5 right-3 font-canva text-[8px] font-bold uppercase tracking-[0.16em] text-[#8A847C]">
                                                Project brief
                                            </span>
                                        </div>
                                        {errors.description && (
                                            <p className="mt-1.5 text-[11px]" style={{ color: ACCENT }}>
                                                {errors.description}
                                            </p>
                                        )}
                                    </Field>
                                </div>

                                {errors.submit && (
                                    <p className="mt-4 text-sm" style={{ color: ACCENT }}>
                                        {errors.submit}
                                    </p>
                                )}

                                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        <p className="font-canva text-[9px] font-bold uppercase tracking-[0.12em] text-[#1A1A1A]">
                                            Ready when you are.
                                        </p>
                                        <p className="mt-1 font-canva text-[11px] leading-4 text-[#444]">
                                            Your project starts with a conversation.
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="inline-flex h-[42px] shrink-0 items-center justify-center rounded-[8px] px-5 font-canva text-[8px] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                                        style={{ backgroundColor: ACCENT }}
                                    >
                                        {status === "submitting"
                                            ? "Sending..."
                                            : "Discuss Your Gym Project"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}