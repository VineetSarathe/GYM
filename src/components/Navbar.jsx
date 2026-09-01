import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";

// Per website strategy doc: "Top navigation: Logo | Projects | Services | About | Contact"
const NAV_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
];

// Injects the 3-role brand type system (display / editorial / body)
// and a systematic set of utility classes, without touching index.css
function useBrandFonts() {
    useEffect(() => {
        if (!document.getElementById("dd-fonts")) {
            const link = document.createElement("link");
            link.id = "dd-fonts";
            link.rel = "stylesheet";
            link.href =
                "https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:ital,wght@0,500;1,500;1,600&family=Inter:wght@400;500;600;700;800&display=swap";
            document.head.appendChild(link);
        }
        if (!document.getElementById("dd-font-classes")) {
            const style = document.createElement("style");
            style.id = "dd-font-classes";
            style.textContent = `
        .font-display { font-family: 'Anton', sans-serif; letter-spacing: 0.01em; }
        .font-editorial { font-family: 'Cormorant Garamond', serif; font-style: italic; }
        .font-body { font-family: 'Inter', sans-serif; }
      `;
            document.head.appendChild(style);
        }
    }, []);
}

export default function Navbar() {
    useBrandFonts();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useGSAP(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) return;
        gsap.fromTo(
            navRef.current,
            { y: -32, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15 }
        );
    }, []);

    useGSAP(
        () => {
            if (!menuRef.current) return;
            const links = menuRef.current.querySelectorAll("[data-menu-link]");
            const tl = gsap.timeline({ paused: true });
            tl.set(menuRef.current, { display: "flex" })
                .fromTo(
                    menuRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.35, ease: "power2.out" }
                )
                .fromTo(
                    links,
                    { y: 24, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" },
                    "-=0.15"
                );

            if (menuOpen) {
                tl.play(0);
            } else {
                gsap.to(menuRef.current, {
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => {
                        if (menuRef.current) menuRef.current.style.display = "none";
                    },
                });
            }
        },
        { dependencies: [menuOpen] }
    );

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 font-body ${
                    scrolled
                        ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#E0C15A]/10"
                        : "bg-[#050505]/70 backdrop-blur-sm border-b border-transparent"
                }`}
            >
                <nav
                    className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20"
                    aria-label="Primary navigation"
                >
                    <a
                        href="#home"
                        className="group"
                        aria-label="Design Diaries — Home"
                    >
                        <Logo />
                    </a>

                    <ul className="hidden lg:flex items-center gap-9">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="relative text-[13px] font-semibold tracking-[0.14em] uppercase text-[#F5F3EE]/80 hover:text-[#E0C15A] transition-colors duration-200 py-2
                    after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-[#E0C15A] after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:block">
                        <a
                            href="#start-project"
                            className="inline-flex items-center gap-2 rounded-sm bg-[#E0C15A] px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#050505] hover:bg-[#E0C15A] transition-colors duration-200"
                        >
                            Start a Project
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                        className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0C15A] rounded-sm"
                    >
                        <span
                            className={`block h-[2px] w-6 bg-[#F5F3EE] transition-transform duration-300 ${
                                menuOpen ? "translate-y-[8px] rotate-45" : ""
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-[#F5F3EE] transition-opacity duration-200 ${
                                menuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-[#F5F3EE] transition-transform duration-300 ${
                                menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                            }`}
                        />
                    </button>
                </nav>
            </header>

            <div
                ref={menuRef}
                className="lg:hidden fixed inset-0 z-40 hidden flex-col bg-[#050505] pt-28 px-8 font-body"
                style={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <ul className="flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label} data-menu-link className="border-b border-[#F5F3EE]/10">
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="font-display block py-5 text-3xl text-[#F5F3EE]"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href="#start-project"
                    data-menu-link
                    onClick={() => setMenuOpen(false)}
                    className="mt-10 inline-flex justify-center items-center rounded-sm bg-[#E0C15A] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#050505]"
                >
                    Start a Project
                </a>
                <p data-menu-link className="mt-auto mb-10 text-xs uppercase tracking-[0.2em] text-[#8F8F8F]">
                    Design Diaries · Gym &amp; Wellness Interiors
                </p>
            </div>
        </>
    );
}