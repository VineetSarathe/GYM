import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";

gsap.registerPlugin(ScrollTrigger);

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
    { label: "Design", href: "#services" },
    { label: "Consultancy", href: "#services" },
    { label: "Products", href: "#services" },
];

const SOCIALS = [
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: "instagram",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin",
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/911234567890",
        icon: "whatsapp",
    },
];

function SocialIcon({ type }) {
    if (type === "instagram") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4"
                aria-hidden="true"
            >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                />
            </svg>
        );
    }

    if (type === "linkedin") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
            >
                <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9 2.2 2.2 0 0 1 5.2 3.5ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.35 4.24 5.4v6.35h-3.55v-5.63c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.73H9.2V9Z" />
            </svg>
        );
    }

    if (type === "whatsapp") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4"
                aria-hidden="true"
            >
                <path d="M20 11.5a8 8 0 0 1-11.8 7.05L4 20l1.48-4.05A8 8 0 1 1 20 11.5Z" />
                <path
                    d="M8.6 8.3c.2-.25.45-.28.7-.1l1.15.8c.25.17.3.4.18.65l-.45.9c.42.76 1.02 1.38 1.76 1.82l.88-.5c.24-.14.5-.1.68.1l.82 1c.2.24.17.55-.08.75-.52.43-1.16.65-1.8.52-2.5-.5-4.55-2.55-5.08-5.04-.14-.67.08-1.34.56-1.9Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return null;
}

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
            aria-hidden="true"
        >
            <path
                d="M7 17 17 7M9 7h8v8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Footer() {
    const rootRef = useRef(null);
    const year = new Date().getFullYear();

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "[data-footer-cta]",
                    start: "top 88%",
                    end: "top 28%",
                    scrub: 1.1,
                },
            });

            timeline
                .fromTo(
                    "[data-footer-cta-media]",
                    { scale: 1.08, opacity: 0.08 },
                    { scale: 1, opacity: 0.25, ease: "none" }
                )
                .fromTo(
                    "[data-footer-cta-content] [data-reveal]",
                    { y: 44, opacity: 0.2, filter: "blur(4px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        stagger: 0.1,
                        ease: "none",
                    },
                    0
                );
        },
        { scope: rootRef }
    );

    return (
        <footer
            ref={rootRef}
            className="relative border-t border-[#F5F3EE]/5 bg-[#050505] font-body text-[#F5F3EE]"
        >

            {/* ================= FINAL CTA ================= */}

            <div
                id="start-project"
                data-footer-cta
                className="relative overflow-hidden border-b border-[#F5F3EE]/10 bg-[#050505] py-12 md:py-32"
            >
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        data-parallax-img
                        data-footer-cta-media
                        src="https://images.openai.com/static-rsc-4/J01n08yP5pFNCNWCy-97L0fWoRRs7cd5imFDAlofvVbttbvFoFp1og1VLJvsAnVk1-wgPQFVDbPjWj0Ucr9phVeXkoCviYGx4Q9smuBtTjO39bcCOT-cJTfeNU3eUZ2BU52-4tZU5ebnmrbijyoGkSxSlrIa5UuFabd3syD-TF-8xS5LaqW_dmb0Z_JzasOG?purpose=fullsize"
                        alt=""
                        className="h-full w-full object-cover opacity-25"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-[#050505]/70" />
                </div>

                {/* Center CTA */}
                <div
                    data-reveal-group
                    data-footer-cta-content
                    className="relative mx-auto flex max-w-7xl justify-center px-6 md:px-10"
                >
                    <div className="max-w-2xl text-center">

                        {/* Label + Heading */}
                        <div data-reveal>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E0C15A]">
                                Start a project
                            </p>

                            <h2 className="font-display mt-4 text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                                Ready to plan{" "}
                                <span className="text-[#E0C15A]">
                                    your gym?
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p
                            data-reveal
                            className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-[#D0CEC8]"
                        >
                            Tell us about the space, the equipment, and how people
                            will train. We start with planning.
                        </p>

                        {/* CTA */}
                        <div
                            data-reveal
                            className="mt-9 flex justify-center"
                        >
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 rounded-sm bg-[#E0C15A] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#050505] transition-all duration-300 hover:bg-[#E0C15A]"
                            >
                                <span>Start a Project</span>

                                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowIcon />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= FOOTER CONTENT ================= */}

            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">

                {/* BRAND */}
                <div>
                    <Logo compact />

                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8F8F8F]">
                        Specialist interior design for gyms and wellness spaces —
                        built around how people use them and how businesses run them.
                    </p>

                    {/* SOCIAL ICONS */}
                    <ul className="mt-6 flex items-center gap-2.5">
                        {SOCIALS.map((social) => (
                            <li key={social.label}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Design Diaries on ${social.label}`}
                                    className="group flex h-10 w-10 items-center justify-center border border-[#F5F3EE]/10 bg-[#080808] text-[#8F8F8F] transition-all duration-300 hover:-translate-y-1 hover:border-[#E0C15A]/50 hover:bg-[#E0C15A]/10 hover:text-[#E0C15A]"
                                >
                                    <span className="transition-transform duration-300 group-hover:scale-110">
                                        <SocialIcon type={social.icon} />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* QUICK LINKS */}
                <nav aria-label="Quick links">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0C15A]">
                        Quick Links
                    </h4>

                    <ul className="mt-5 space-y-3">
                        {QUICK_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="group inline-flex items-center gap-1.5 text-sm text-[#D0CEC8] transition-colors hover:text-[#F5F3EE]"
                                >
                                    <span>{link.label}</span>

                                    <span className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* SERVICES */}
                <nav aria-label="Services">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0C15A]">
                        Services
                    </h4>

                    <ul className="mt-5 space-y-3">
                        {SERVICE_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="group inline-flex items-center gap-1.5 text-sm text-[#D0CEC8] transition-colors hover:text-[#F5F3EE]"
                                >
                                    <span>{link.label}</span>

                                    <span className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* STUDIO */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E0C15A]">
                        Studio
                    </h4>

                    <address className="mt-5 space-y-2 not-italic text-sm leading-relaxed text-[#D0CEC8]">
                        <p>Indore, Madhya Pradesh, India</p>

                        <p>
                            <a
                                href="tel:+911234567890"
                                className="transition-colors hover:text-[#F5F3EE]"
                            >
                                +91 12345 67890
                            </a>
                        </p>

                        <p>
                            <a
                                href="mailto:studio@designdiaries.in"
                                className="transition-colors hover:text-[#F5F3EE]"
                            >
                                studio@designdiaries.in
                            </a>
                        </p>
                    </address>
                </div>
            </div>

            {/* ================= BOTTOM BAR ================= */}

            <div className="border-t border-[#F5F3EE]/5">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row md:px-10">

                    <p className="text-xs text-[#6B6B6B]">
                        © {year} Design Diaries. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="/privacy"
                            className="text-xs text-[#6B6B6B] transition-colors hover:text-[#E0C15A]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="text-xs text-[#6B6B6B] transition-colors hover:text-[#E0C15A]"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}