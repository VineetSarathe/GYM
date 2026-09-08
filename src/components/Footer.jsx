const ACCENT = "#8B5A44";

const LINK_COL_1 = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#approach" },
    { label: "Work", href: "#projects" },
    { label: "Resources", href: "#about" },
    { label: "Company", href: "#about" },
    { label: "Partners", href: "#about" },
];

const LINK_COL_2 = [
    { label: "Faq", href: "#start-project" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
];

const SOCIALS = [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "X", href: "https://x.com", icon: "x" },
];

function SocialIcon({ type }) {
    const cls = "h-[22px] w-[22px]";

    if (type === "instagram") {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={cls} aria-hidden="true">
                <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="5.4" />
                <circle cx="12" cy="12" r="4.35" />
                <circle cx="17.55" cy="6.45" r="1.05" fill="currentColor" stroke="none" />
            </svg>
        );
    }

    if (type === "linkedin") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
            </svg>
        );
    }

    if (type === "facebook") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
                <path d="M24 12.07C24 5.45 18.63 0 12 0S0 5.45 0 12.07c0 6.02 4.39 11.01 10.13 11.91v-8.43H7.08v-3.48h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.48h-2.8v8.43C19.61 23.08 24 18.09 24 12.07Z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
            <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-4.71-6.23-5.4 6.23H2.74l7.73-8.84L1.25 2.25H8.08l4.26 5.62 5.9-5.62Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
        </svg>
    );
}

function WhatsAppMark() {
    return (
        <svg viewBox="0 0 175.2 175.6" className="h-[26px] w-[26px] shrink-0" aria-hidden="true">
            <defs>
                <linearGradient id="footer-wa-grad" x1="85.9" x2="86.5" y1="32.6" y2="137.1" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
            </defs>
            <path
                fill="url(#footer-wa-grad)"
                d="M87.2 0C39 0 0 39 0 87.2c0 15.4 4 30.4 11.6 43.5L0 175.2l45.4-11.8c12.6 6.9 26.9 10.5 41.8 10.5h0C135.4 174 174.4 135 174.4 86.8 174.4 39 135.4 0 87.2 0z"
            />
            <path
                fill="#fff"
                d="M138.5 123.5c-2.1 6-10.6 11-17.5 12.5-4.7 1-10.7 1.8-31.3-6.7-26.3-10.9-43.2-37.6-44.5-39.3-1.3-1.7-10.4-13.8-10.4-26.3s6.6-18.7 8.9-21.3c2.3-2.5 5.1-3.2 6.8-3.2 1.7 0 3.4 0 4.8.1 1.6.1 3.7-.6 5.7 4.3 2.1 5.2 7.3 17.8 7.9 19.1.6 1.3.8 2.2.2 3.6-.6 1.4-1.3 2.2-2.4 3.4-1.1 1.2-2.1 2.6-3 3.5-1 .9-2 1.9-.9 3.7 1.2 1.9 5.1 8.5 11 13.7 7.5 6.7 13.9 8.8 15.9 9.8 2 1 3.1.8 4.3-.5 1.2-1.3 5-5.8 6.3-7.8 1.3-2 2.7-1.7 4.5-1 1.8.7 11.6 5.5 13.6 6.5 2 1 3.3 1.5 3.8 2.3.5.8.5 4.8-1.7 10.8z"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="font-canva bg-[#0e0e0e] text-white">
            <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-14 px-8 py-[72px] md:grid-cols-[1.35fr_0.85fr_1.15fr] md:gap-x-8 md:px-12 lg:gap-x-10 lg:py-24">
                <div className="max-w-[320px]">
                    <a href="#home" className="inline-block font-canva text-[42px] font-bold uppercase leading-none tracking-[0.06em] text-white">
                        Logo
                    </a>

                    <p className="mt-6 font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[13px] leading-[1.7] text-white">
                        Specialist interior design for gyms and
                        <br />
                        wellness spaces - built around how
                        <br />
                        people use them and how businesses
                        <br />
                        run them.
                    </p>

                    <span className="mt-6 block h-[2px] w-12 bg-white" />

                    <ul className="mt-6 flex items-center gap-6">
                        {SOCIALS.map((social) => (
                            <li key={social.label}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-white transition-opacity hover:opacity-70"
                                >
                                    <SocialIcon type={social.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav aria-label="Quick links" className="md:pt-2">
                    <h4
                        className="text-[12px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: ACCENT }}
                    >
                        Quick Links
                    </h4>

                    <ul className="mt-6 space-y-3">
                        {LINK_COL_1.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="text-[15px] text-white hover:opacity-70">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Legal" className="w-full max-w-[340px] justify-self-start md:justify-self-end md:pt-2">
                        <ul className="space-y-3 md:mt-[38px]">
                            {LINK_COL_2.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-[15px] text-white hover:opacity-70">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://wa.me/911234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 flex w-full items-center justify-between rounded-full border border-white px-6 py-[14px] text-white hover:bg-white/5"
                        >
                            <span className="flex items-center gap-3">
                                <WhatsAppMark />
                                <span className="font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[15px] font-normal">Chat on WhatsApp</span>
                            </span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 shrink-0" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <p className="mt-5 font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[12px] font-medium uppercase tracking-[0.14em] text-white">
                        Get in touch. We&apos;re here to help.
                    </p>
                </nav>
            </div>

            <div className="border-t border-white">
                <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-8 py-5 sm:flex-row sm:items-center md:px-12">
                    <p className="font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[12px] text-white">
                        © 2024 Design Diaries. All rights reserved.
                    </p>
                    <p
                        className="text-[12px] font-medium uppercase tracking-[0.18em]"
                        style={{ color: ACCENT }}
                    >
                        Design / People / Performance
                    </p>
                </div>
            </div>
        </footer>
    );
}
