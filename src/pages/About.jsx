{/* 1. HERO — recognition */ }
<section
    id="home"
    ref={heroRef}
    className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-[#F5F3EE]"
>
    {/* Background Video */}
    <video
        data-hero-media
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
    >
        <source
            src="https://www.pexels.com/download/video/37317184/"
            type="video/mp4"
        />
    </video>

    {/* Video Overlays */}
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/25" />

    {/* Content */}
    <div className="relative z-10 flex min-h-[100svh] items-center md:items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="max-w-4xl">

                {/* Brand / Specialist line */}
                <div
                    data-hero-eyebrow
                    className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em]"
                >
                    <span className="text-[#F5F3EE]">
                        Design Diaries
                    </span>

                    <span className="text-[#E0C15A]">·</span>

                    <span className="text-[#E0C15A]">
                        Gym Interior Specialists
                    </span>
                </div>

                <h1 className="font-display mt-5 uppercase leading-[0.92] tracking-[-0.01em] text-[9vw] sm:text-[6vw] md:text-[4.4vw] lg:text-[3.6rem]">
                    <span className="block overflow-hidden">
                        <span data-hero-word className="block">
                            We design gyms
                        </span>
                    </span>

                    <span className="block overflow-hidden">
                        <span data-hero-word className="block">
                            that work as hard
                        </span>
                    </span>

                    <span className="block overflow-hidden">
                        <span
                            data-hero-word
                            className="block text-[#E0C15A]"
                        >
                            as they do.
                        </span>
                    </span>
                </h1>

                <p
                    data-hero-sub
                    className="mt-6 max-w-xl text-sm sm:text-base md:text-[17px] leading-7 text-[#D0CEC8]"
                >
                    Specialised interior design for gyms and fitness spaces — built around
                    function, performance and the people who use them.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                        ref={heroCtaRef}
                        data-hero-cta
                        href="#start-project"
                        className="group inline-flex items-center justify-center gap-4 rounded-sm bg-[#E0C15A] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-colors duration-300 hover:bg-[#E0C15A]"
                    >
                        <span>Start Your Gym Project</span>

                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                    <a
                        data-hero-cta
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-sm border border-[#F5F3EE]/40 bg-black/45 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#F5F3EE] backdrop-blur-md transition-colors duration-300 hover:border-[#E0C15A] hover:text-[#E0C15A]"
                    >
                        View Our Gym Projects
                    </a>
                </div>

                {/* Founder + project proof */}
                <p
                    data-hero-cta
                    className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F5F3EE]/55"
                >
                    <span className="text-[#F5F3EE]">
                        Sagrika Saraf
                    </span>

                    <span className="mx-2 text-[#E0C15A]">
                        |
                    </span>

                    <span>
                        15+ Successful Projects
                    </span>
                </p>

            </div>
        </div>
    </div>
</section>







function SpecialistAccordion({ points }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div
            data-reveal
            className="flex flex-col overflow-hidden rounded-lg border border-[#F5F3EE]/15 lg:h-full"
        >
            {points.map((point, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={point.title}
                        className={`flex flex-col justify-center border-b border-[#F5F3EE]/15 last:border-b-0 transition-colors duration-300 lg:flex-1 ${isOpen ? "bg-[#E0C15A]/[0.06]" : "hover:bg-[#F5F3EE]/[0.03]"
                            }`}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <span
                                    className={`font-mono text-[10px] tracking-[0.14em] transition-colors duration-300 ${isOpen ? "text-[#E0C15A]" : "text-[#F5F3EE]/70"
                                        }`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3
                                    className={`font-display text-[19px] uppercase tracking-wide transition-colors duration-300 md:text-[23px] ${isOpen ? "text-[#F5F3EE]" : "text-[#F5F3EE]/85"
                                        }`}
                                >
                                    {point.title}
                                </h3>
                            </div>

                            <ChevronDown
                                className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#E0C15A]" : "text-[#F5F3EE]/50"
                                    }`}
                            />
                        </button>

                        <div
                            className="grid transition-all duration-300 ease-in-out"
                            style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                            <div className="overflow-hidden">
                                <p className="max-w-xl px-5 pb-6 pl-[3.25rem] text-[14px] leading-6 text-[#B5B3AC] md:pl-[4.75rem] md:pb-7">
                                    {point.copy}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}







{/* Projects Horizontal Track */ }
<div className="relative mt-12 md:mt-16">
    {/* Left Fade */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent sm:w-16 md:w-24" />

    {/* Right Fade */}
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent sm:w-16 md:w-24" />

    <div className="programs-track projects-scroll">
        {/* Original Projects */}
        <div className="programs-group">
            {PROJECTS.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>

        {/* Duplicate Projects — for infinite scrolling */}
        <div
            className="programs-group"
            aria-hidden="true"
        >
            {PROJECTS.map((project) => (
                <ProjectCard
                    key={`dup-${project.id}`}
                    project={project}
                    duplicate
                />
            ))}
        </div>
    </div>
</div>








import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { PROJECTS } from "../data/projects";
import designUnderline from "../assets/design-underline.png";

import { ArrowRight, MapPin, Dumbbell, Flower2, ChevronDown, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SPECIALIST_POINTS = [
    {
        title: "Equipment planning",
        copy: "Racks, machines, and free weights are placed for how they are used — clearance, spotting, and the work happening around them.",
    },
    {
        title: "Space planning",
        copy: "Strength, cardio, functional training, and recovery each get a zone sized to the actual programme, not a leftover corner.",
    },
    {
        title: "Circulation",
        copy: "People, plates, and coaches have to move at peak hour. Aisles and drop zones are designed, not hoped for.",
    },
    {
        title: "Mirrors and lighting",
        copy: "Mirrors aid the exercise in front of them. Light is set for the activity underneath it — intensity, position, no glare.",
    },
    {
        title: "Durability and maintenance",
        copy: "Flooring, tiles, and finishes have to survive sweat, impact, and daily traffic. A gym is a high-wear room.",
    },
    {
        title: "User experience",
        copy: "The space should feel motivating to walk into every day — clear, usable, and built around the person training.",
    },
    {
        title: "Functional requirements",
        copy: "Power, HVAC, flooring thickness, storage, and staff sightlines sit in the plan. They are not finishing touches.",
    },
];

const APPROACH = [
    {
        title: "Understand",
        copy: "The client, the users, the site, and what this gym has to do.",
    },
    {
        title: "Research",
        copy: "Equipment, operations, constraints, and how the floor will be used.",
    },
    {
        title: "Plan",
        copy: "Zoning, circulation, capacity — the decisions style cannot fix later.",
    },
    {
        title: "Design",
        copy: "Materials, light, and identity after the room already works.",
    },
    {
        title: "Build",
        copy: "Drawings and site coordination that protect the plan.",
    },
    {
        title: "Learn",
        copy: "What the finished gym teaches. That goes into the next one.",
    },
];

// Per Website Strategy doc: "SERVICES: Design, Consultancy, Products"
const SERVICES = [
    {
        title: "Design",
        copy: "Full interior design for gyms, fitness studios, and wellness spaces — from concept to finished room.",
    },
    {
        title: "Consultancy",
        copy: "Planning guidance for owners who need the functional decisions right before design even starts.",
    },
    {
        title: "Products",
        copy: "Sourcing and specification for equipment-adjacent finishes, flooring, and fit-out materials.",
    },
];

// Per Brand Strategy doc social proof strategy: "Project testimonials,
// client stories, enquiry and word-of-mouth evidence." These are
// PLACEHOLDER quotes for layout — replace with real client testimonials.
const TESTIMONIALS = [
    {
        quote:
            "She asked about our peak-hour headcount before she asked about finishes. That's when I knew the layout would actually hold up.",
        name: "First-time gym owner",
        detail: "New gym · 3,200 sq ft",
    },
    {
        quote:
            "Circulation and equipment placement were solved before a single material was chosen. Nothing felt like an afterthought.",
        name: "Fitness studio founder",
        detail: "Studio renovation",
    },
    {
        quote:
            "Every gym owner in our group has since asked who designed our space.",
        name: "Referral client",
        detail: "Word of mouth · repeat enquiry",
    },
];

const INSIGHTS = [
    {
        title: "Gym planning",
        copy: "Two gyms can buy the same machines. The one that works is the one whose plan understands movement, wait space, and zones.",
    },
    {
        title: "Equipment placement",
        copy: "Where a rack sits changes spotting, circulation, and whether the floor still works at 7pm.",
    },
    {
        title: "Mirrors and lighting",
        copy: "Mirrors should not cover every wall. Lighting should not just look expensive. Both have a job during the exercise.",
    },
    {
        title: "Lessons from gym projects",
        copy: "Durable finishes, honest circulation, and a room people want to return to — that is the work, not a moodboard.",
    },
];

const MARQUEE_WORDS = [
    "GYM INTERIORS",
    "EQUIPMENT PLANNING",
    "CIRCULATION",
    "LIGHTING",
    "DURABILITY",
    "PERFORMANCE",
];

function Label({ children }) {
    return (
        <p className="font-body text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
            {children}
        </p>
    );
}

function ProjectCard({ project, duplicate = false }) {
    const isWellness = project.category === "Wellness";
    return (
        <article className="program-card group relative shrink-0 overflow-hidden border border-[#F5F3EE]/[0.08] bg-[#0D0D0D]">
            <a href={project.href} className="block" tabIndex={duplicate ? -1 : undefined}>
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                        src={project.image}
                        alt={duplicate ? "" : project.alt}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/10" />
                    <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.16em] text-[#E0C15A]">
                        {project.id}
                    </div>
                    {isWellness && (
                        <span className="absolute right-4 top-4 rounded-sm border border-[#8B9A7E]/40 bg-[#8B9A7E]/15 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#8B9A7E]">
                            Wellness
                        </span>
                    )}
                    <span className="absolute bottom-4 right-4 inline-flex translate-x-1 items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#F5F3EE] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        View Project
                        <span aria-hidden="true">→</span>
                    </span>
                </div>
                <div className="p-4">
                    <h3 className="font-display text-[18px] uppercase leading-none tracking-wide text-[#F5F3EE]">
                        {project.name}
                    </h3>
                    <p className={`mt-2 text-[9px] uppercase tracking-[0.16em] ${isWellness ? "text-[#8B9A7E]" : "text-[#8F8F8F]"}`}>
                        {project.category}
                    </p>
                </div>
            </a>
        </article>
    );
}

function Marquee({ words }) {
    const content = words.join("   ·   ") + "   ·   ";

    return (
        <div className="relative w-full overflow-hidden border-y border-[#E0C15A]/15 bg-[#080808] py-4 md:py-5">
            <div className="marquee-track">
                <div className="marquee-content">{content}</div>
                <div className="marquee-content" aria-hidden="true">
                    {content}
                </div>
                <div className="marquee-content" aria-hidden="true">
                    {content}
                </div>
                <div className="marquee-content" aria-hidden="true">
                    {content}
                </div>
            </div>
        </div>
    );
}

function SpecialistList({ points }) {
    const scrollRef = useRef(null);

    const handleScrollDown = () => {
        scrollRef.current?.scrollBy({ top: 160, behavior: "smooth" });
    };

    return (
        <div data-reveal className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-lg border border-[#F5F3EE]/15 lg:h-[724px]">
                <div
                    ref={scrollRef}
                    className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#F5F3EE]/15"
                >
                    {points.map((point, index) => (
                        <div
                            key={point.title}
                            className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-[#F5F3EE]/15 border-l-2 border-l-transparent py-6 pl-4 pr-6 transition-all duration-300 hover:border-l-[#E0C15A] hover:bg-[#0D0D0D]"
                        >
                            <span className="pt-1 font-mono text-[10px] tracking-[0.14em] text-[#F5F3EE]/40 transition-colors duration-300 group-hover:text-[#E0C15A]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                                <h3 className="font-display text-[22px] uppercase tracking-wide text-[#F5F3EE]/85 transition-colors duration-300 group-hover:text-[#E0C15A] md:text-[25px]">
                                    {point.title}
                                </h3>
                                <p className="mt-2 max-w-xl text-[14px] leading-6 text-[#8F8F8F]">
                                    {point.copy}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                onClick={handleScrollDown}
                aria-label="Scroll for more"
                className="absolute -bottom-5 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#F5F3EE]/20 bg-[#0A0A0A] transition-colors duration-300 hover:border-[#E0C15A]/50"
            >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="#F5F3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}

function useMagnetic(strength = 0.35) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(pointer: coarse)").matches) return;

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width / 2;
            const relY = e.clientY - rect.top - rect.height / 2;
            gsap.to(el, {
                x: relX * strength,
                y: relY * strength,
                duration: 0.4,
                ease: "power2.out",
            });
        };
        const handleLeave = () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
        };
    }, [strength]);

    return ref;
}

function InsightsList({ points }) {
    const scrollRef = useRef(null);

    const handleScrollDown = () => {
        scrollRef.current?.scrollBy({ top: 160, behavior: "smooth" });
    };

    return (
        <div data-reveal className="relative">
            <div className="relative h-[480px] overflow-hidden rounded-lg border border-[#F5F3EE]/15">
                <div
                    ref={scrollRef}
                    className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#F5F3EE]/15"
                >
                    {points.map((insight, index) => (
                        <div
                            key={insight.title}
                            className="group border-b border-l-2 border-b-[#F5F3EE]/15 border-l-transparent px-6 py-6 transition-all duration-300 hover:border-l-[#E0C15A] hover:bg-[#0D0D0D]"
                        >
                            <div className="flex gap-5">
                                <span className="mt-1 shrink-0 font-mono text-[9px] tracking-[0.15em] text-[#F5F3EE]/40 transition-colors duration-300 group-hover:text-[#E0C15A]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="min-w-0">
                                    <h3 className="font-editorial text-[25px] leading-none text-[#F5F3EE]/90 transition-colors duration-300 group-hover:text-[#E0C15A]">
                                        {insight.title}
                                    </h3>

                                    <p className="mt-3 max-w-lg text-[14px] leading-6 text-[#8F8F8F]">
                                        {insight.copy}
                                    </p>

                                    <div className="mt-5 flex items-center gap-3">
                                        <span className="h-px w-6 bg-[#E0C15A]/50 transition-all duration-500 group-hover:w-12" />
                                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#F5F3EE]/20 transition-colors duration-300 group-hover:text-[#E0C15A]/60">
                                            Insight
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                onClick={handleScrollDown}
                aria-label="Scroll for more"
                className="absolute -bottom-5 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#F5F3EE]/20 bg-[#0A0A0A] transition-colors duration-300 hover:border-[#E0C15A]/50"
            >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path
                        d="M12 4V20M12 20L6 14M12 20L18 14"
                        stroke="#F5F3EE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}

function WavyProcessRow({ steps }) {
    const trackRef = useRef(null);
    const travelerRef = useRef(null);
    const trailRef = useRef(null);
    const nodeRefs = useRef([]);
    const labelRefs = useRef([]);
    const ringRefs = useRef([]);

    const GOLD = "#E0C15A";
    const BG = "#0A0A0A";
    const LINE = "#F5F3EE";

    const path =
        "M 30 55 C 65 55, 65 75, 100 75 S 135 35, 170 35 S 205 85, 240 85 S 275 55, 310 55 S 345 75, 380 75 S 415 35, 450 35 S 485 85, 520 85 S 555 55, 590 55";
    const POINTS = [
        { x: 30, y: 55 }, { x: 170, y: 35 }, { x: 310, y: 55 },
        { x: 450, y: 35 }, { x: 520, y: 85 }, { x: 590, y: 55 },
    ];
    const stopFracs = [0, 170 / 620, 310 / 620, 450 / 620, 520 / 620, 1];

    useEffect(() => {
        const trackPath = trackRef.current;
        if (!trackPath) return;
        const total = trackPath.getTotalLength();
        const traveler = travelerRef.current;
        const trailGroup = trailRef.current;
        let trailDots = [];
        let hitStops = {};
        let startTime = null;
        let pulsePhase = 0;
        let rafId;
        const duration = 7200;

        function resetVisuals() {
            nodeRefs.current.forEach((el) => { if (el) { el.style.transition = "none"; el.style.fill = BG; } });
            labelRefs.current.forEach((el) => { if (el) { el.style.transition = "none"; el.style.fill = LINE; } });
            if (trailGroup) trailGroup.innerHTML = "";
            trailDots = [];
            hitStops = {};
        }

        function pulseRing(index) {
            const ring = ringRefs.current[index];
            if (!ring) return;
            const baseR = index === steps.length - 1 ? 8 : 6;
            ring.style.transition = "none";
            ring.setAttribute("r", String(baseR));
            ring.style.opacity = "0.9";
            void ring.getBBox();
            ring.style.transition = "r 0.7s ease-out, opacity 0.7s ease-out";
            ring.setAttribute("r", String(baseR + 10));
            ring.style.opacity = "0";
        }

        function step(ts) {
            if (!startTime) startTime = ts;
            const elapsed = ts - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const pt = trackPath.getPointAtLength(progress * total);

            if (traveler) {
                traveler.setAttribute("cx", String(pt.x));
                traveler.setAttribute("cy", String(pt.y));
                pulsePhase += 0.15;
                traveler.setAttribute("r", (4 + Math.sin(pulsePhase) * 1.2).toFixed(2));
            }
            if (elapsed % 60 < 20 && trailGroup) {
                const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                dot.setAttribute("cx", String(pt.x));
                dot.setAttribute("cy", String(pt.y));
                dot.setAttribute("r", "2.5");
                dot.setAttribute("fill", GOLD);
                dot.style.opacity = "0.6";
                trailGroup.appendChild(dot);
                trailDots.push(dot);
                if (trailDots.length > 20) trailDots.shift().remove();
            }
            trailDots.forEach((d, i) => { d.style.opacity = ((0.55 * (i + 1)) / trailDots.length).toFixed(2); });

            stopFracs.forEach((frac, i) => {
                if (!hitStops[i] && progress >= frac - 0.005) {
                    hitStops[i] = true;
                    const circle = nodeRefs.current[i];
                    const label = labelRefs.current[i];
                    const isLast = i === steps.length - 1;
                    if (circle) { circle.style.transition = "fill 0.2s"; circle.style.fill = isLast ? "#e8c878" : GOLD; }
                    if (label) { label.style.transition = "fill 0.35s"; label.style.fill = isLast ? "#e8c878" : GOLD; }
                    pulseRing(i);
                }
            });
            if (progress < 1) rafId = requestAnimationFrame(step);
        }

        function run() { resetVisuals(); startTime = null; rafId = requestAnimationFrame(step); }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) { run(); observer.disconnect(); }
        }, { threshold: 0.4 });
        observer.observe(trackPath);

        return () => { cancelAnimationFrame(rafId); observer.disconnect(); };
    }, [steps.length]);

    return (
        <svg viewBox="-40 0 700 120" className="w-full">
            <path d={path} fill="none" stroke="#F5F3EE1A" strokeWidth="1.5" />
            <path ref={trackRef} d={path} fill="none" stroke="transparent" strokeWidth="1.5" />
            {POINTS.map((p, i) => {
                const isLast = i === POINTS.length - 1;
                const baseR = isLast ? 8 : 6;
                return (
                    <g key={i}>
                        <circle ref={(el) => (ringRefs.current[i] = el)} cx={p.x} cy={p.y} r={baseR} fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0" />
                        <circle ref={(el) => (nodeRefs.current[i] = el)} cx={p.x} cy={p.y} r={baseR} fill={BG} stroke={GOLD} strokeWidth="1.5" />
                        <text x={p.x} y={p.y - baseR - 6} textAnchor="middle" fill="#666" fontSize="9" fontFamily="monospace">{String(i + 1).padStart(2, "0")}</text>
                        <text ref={(el) => (labelRefs.current[i] = el)} x={p.x} y={p.y + baseR + 16} textAnchor="middle" fill={LINE} fontSize="11" fontWeight="600" letterSpacing="0.02em" style={{ textTransform: "uppercase" }}>{steps[i].title}</text>
                    </g>
                );
            })}
            <g ref={trailRef} />
            <circle ref={travelerRef} cx={POINTS[0].x} cy={POINTS[0].y} r="4" fill="#e8c878" />
        </svg>
    );
}

function WavyProcessColumn({ steps }) {
    const GOLD = "#E0C15A";
    const BG = "#0A0A0A";
    const LINE = "#F5F3EE";
    return (
        <div className="relative">
            <div className="absolute bottom-0 left-[17px] top-0 w-px" style={{ backgroundColor: `${LINE}1A` }} />
            <div className="space-y-9">
                {steps.map((step, index) => (
                    <div key={step.title} className="group relative flex items-center gap-6">
                        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center" style={{ backgroundColor: BG }}>
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[7px] tracking-[0.15em]" style={{ color: GOLD }}>
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="absolute h-3.5 w-3.5 rounded-full border transition-all duration-500 group-hover:scale-150" style={{ borderColor: `${GOLD}66` }} />
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                        </div>
                        <h3 className="font-display text-xl uppercase leading-none transition-colors duration-300 group-hover:text-[#E0C15A]" style={{ color: LINE }}>
                            {step.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const rootRef = useRef(null);
    const heroRef = useRef(null);
    const heroCtaRef = useMagnetic(0.25);
    const finalCtaRef = useMagnetic(0.25);

    useGSAP(
        () => {
            const prefersReduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            const heroTl = gsap.timeline({
                defaults: { ease: "power3.out" },
                delay: 0.2,
            });
            heroTl
                .fromTo(
                    "[data-hero-eyebrow]",
                    { y: 16, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 }
                )
                .fromTo(
                    "[data-hero-word]",
                    { y: "110%" },
                    { y: "0%", duration: 0.9, stagger: 0.1 },
                    "-=0.25"
                )
                .fromTo(
                    "[data-hero-underline]",
                    { y: 12, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.55 },
                    "-=0.55"
                )
                .fromTo(
                    "[data-hero-sub]",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7 },
                    "-=0.4"
                )
                .fromTo(
                    "[data-hero-cta]",
                    { y: 16, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                    "-=0.35"
                );

            if (prefersReduced) return;

            const media = heroRef.current?.querySelector("[data-hero-media]");
            if (media) {
                gsap.fromTo(
                    media,
                    { scale: 1.08 },
                    {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            }

            gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
                const items = group.querySelectorAll("[data-reveal]");
                gsap.fromTo(
                    items,
                    { y: 32, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: { trigger: group, start: "top 82%", once: true },
                    }
                );
            });

            gsap.utils.toArray("[data-parallax-img]").forEach((img) => {
                gsap.fromTo(
                    img,
                    { scale: 1.08 },
                    {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        },
                    }
                );
            });
        },
        { scope: rootRef }
    );

    return (
        <main
            ref={rootRef}
            className="font-body bg-[#050505] text-[#F5F3EE] overflow-x-hidden"
        >



            {/* 1. HERO — recognition */}
            <section
                id="home"
                ref={heroRef}
                className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-[#F5F3EE]"
            >
                {/* Background Video */}
                <video
                    data-hero-media
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover will-change-transform"
                >
                    <source
                        src="https://www.pexels.com/download/video/37317184/"
                        type="video/mp4"
                    />
                </video>

                {/* Video Overlays */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/25" />

                {/* Content */}
                <div className="relative z-10 flex min-h-[100svh] items-center md:items-end">
                    <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-32 lg:px-12">
                        <div className="max-w-4xl">

                            {/* Brand / Specialist line */}
                            <div
                                data-hero-eyebrow
                                className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs font-bold uppercase tracking-[0.15em] sm:text-sm"
                            >
                                <span className="text-[#E0C15A]">
                                    Design Diaries
                                </span>

                                <span className="text-[#E0C15A]">──</span>

                                <span className="text-[#E0C15A]">
                                    Gym Interior Specialists
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-display mt-6 uppercase leading-[0.95] tracking-[-0.01em] text-[13vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[5.2rem]">

                                <span className="block overflow-hidden">
                                    <span
                                        data-hero-word
                                        className="block text-[#F5F3EE]"
                                    >
                                        Where gyms
                                    </span>
                                </span>

                                <span className="mt-2 block overflow-hidden sm:mt-2 md:mt-3">
                                    <span
                                        data-hero-word
                                        className="block text-[#F5F3EE]"
                                    >
                                        meet good
                                    </span>
                                </span>

                                <span className="relative mt-2 block w-fit sm:mt-2 md:mt-3">
                                    <span className="block overflow-hidden">
                                        <span
                                            data-hero-word
                                            className="block text-[#E0C15A]"
                                        >
                                            design.
                                        </span>
                                    </span>
                                    <img
                                        src={designUnderline}
                                        alt=""
                                        aria-hidden="true"
                                        data-hero-underline
                                        className="pointer-events-none mt-2 w-[108%] max-w-none -translate-x-[2%] select-none"
                                    />
                                </span>

                            </h1>

                            {/* Description */}
                            <p
                                data-hero-sub
                                className="mt-6 max-w-xl border-l-2 border-[#E0C15A]/70 pl-4 text-sm leading-7 text-[#D0CEC8] sm:text-base"
                            >
                                Specialised interior design for gyms and fitness spaces —
                                built around function, performance and the people who use them.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">

                                <a
                                    ref={heroCtaRef}
                                    data-hero-cta
                                    href="#start-project"
                                    className="group inline-flex items-center justify-center gap-3 rounded-sm bg-[#E0C15A] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#050505] transition-colors duration-300 hover:bg-[#F5F3EE]"
                                >
                                    <span>Start Your Gym Project</span>

                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                                <a
                                    data-hero-cta
                                    href="#projects"
                                    className="inline-flex items-center justify-center rounded-sm border border-[#F5F3EE]/40 bg-transparent px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#F5F3EE] transition-colors duration-300 hover:border-[#E0C15A] hover:text-[#E0C15A]"
                                >
                                    View Our Gym Projects
                                </a>

                            </div>

                            {/* Stats row */}
                            <div
                                data-hero-cta
                                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
                            >

                                {/* Projects */}
                                <div className="flex items-center gap-3">
                                    <span className="font-display text-3xl text-[#E0C15A]">
                                        15+
                                    </span>

                                    <span className="font-mono text-[11px] uppercase leading-tight tracking-[0.1em] text-[#D0CEC8]">
                                        Gym Projects
                                        <br />
                                        Designed
                                    </span>
                                </div>

                                <div className="h-8 w-px bg-[#F5F3EE]/15" />

                                {/* Location */}
                                <div className="flex items-center gap-3">
                                    <MapPin
                                        size={20}
                                        className="text-[#E0C15A]"
                                        strokeWidth={1.75}
                                    />

                                    <span className="font-mono text-[11px] uppercase leading-tight tracking-[0.1em]">
                                        <span className="block text-[#F5F3EE]">
                                            India
                                        </span>

                                        <span className="block text-[#D0CEC8]/60">
                                            Across Cities
                                        </span>
                                    </span>
                                </div>

                                <div className="h-8 w-px bg-[#F5F3EE]/15" />

                                {/* Fitness */}
                                <div className="flex items-center gap-3">
                                    <Dumbbell
                                        size={20}
                                        className="text-[#E0C15A]"
                                        strokeWidth={1.75}
                                    />

                                    <span className="font-mono text-[11px] uppercase leading-tight tracking-[0.1em] text-[#D0CEC8]">
                                        Fitness
                                        <br />
                                        Spaces
                                    </span>
                                </div>

                                <div className="h-8 w-px bg-[#F5F3EE]/15" />

                                {/* Wellness */}
                                <div className="flex items-center gap-3">
                                    <Flower2
                                        size={20}
                                        className="text-[#E0C15A]"
                                        strokeWidth={1.75}
                                    />

                                    <span className="font-mono text-[11px] uppercase leading-tight tracking-[0.1em] text-[#D0CEC8]">
                                        Wellness
                                        <br />
                                        Focused
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Marquee words={MARQUEE_WORDS} />

            {/* 2. SELECTED GYM PROJECTS — proof */}
            <section
                id="projects"
                className="relative overflow-hidden border-t border-[#F5F3EE]/5 bg-[#080808] py-20 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div
                        data-reveal-group
                        className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
                    >
                        <div data-reveal className="max-w-xl">
                            <Label>Selected gym projects</Label>

                            <h2 className="font-display mt-4 text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                                Functional gyms.
                                <br />
                                <span className="text-[#E0C15A]">
                                    High-performance rooms.
                                </span>
                            </h2>
                        </div>

                        <p
                            data-reveal
                            className="max-w-xs text-sm leading-6 text-[#8F8F8F]"
                        >
                            Design Diaries specialises in gym interiors planned for equipment,
                            circulation, and how people train — functional, high-performance
                            spaces, not decorative fit-outs.
                        </p>

                        <a
                            data-reveal
                            href="#projects"
                            className="group flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.1em] text-[#F5F3EE] transition-colors hover:text-[#E0C15A]"
                        >
                            View all projects
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#E0C15A] transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Projects Horizontal Track */}
                <div className="relative mt-12 md:mt-16">
                    {/* Left Fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent sm:w-16 md:w-24" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent sm:w-16 md:w-24" />

                    <div className="programs-track projects-scroll">
                        {/* Original Projects */}
                        <div className="programs-group">
                            {PROJECTS.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>

                        {/* Duplicate Projects — for infinite scrolling */}
                        <div
                            className="programs-group"
                            aria-hidden="true"
                        >
                            {PROJECTS.map((project) => (
                                <ProjectCard
                                    key={`dup-${project.id}`}
                                    project={project}
                                    duplicate
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Disclaimer / Placeholder Note */}
                <p className="mx-auto mt-10 max-w-7xl px-6 font-mono text-[9px] uppercase tracking-[0.2em] text-[#F5F3EE]/25 md:px-10">
                    Placeholder studies for layout — replace with confirmed gym projects
                </p>
            </section>

            {/* 3. WHY GYM INTERIORS — differentiation */}
            <section
                className="relative overflow-hidden border-t border-[#F5F3EE]/5 bg-[#050505] py-20 text-[#F5F3EE] md:py-28"
            >
                {/* Background animation */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#E0C15A]/[0.06] blur-[120px]" />
                    <div className="absolute right-[-150px] bottom-[-100px] h-96 w-96 rounded-full bg-[#8B9A7E]/[0.04] blur-[130px]" />

                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)",
                            backgroundSize: "44px 44px",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                    {/* IMPORTANT: items-start */}
                    <div
                        data-reveal-group
                        className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
                    >
                        {/* ================= LEFT ================= */}
                        <div
                            data-reveal
                            className="self-start"
                        >
                            {/* Text is forced to TOP */}
                            <div className="pt-0">
                                <Label>Why gym interiors</Label>

                                <h2 className="font-display mt-4 max-w-xl text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                                    We understand how a gym{" "}
                                    <span className="text-[#E0C15A]">
                                        has to work.
                                    </span>
                                </h2>

                                <p className="font-editorial mt-6 max-w-lg text-lg leading-7 text-[#D0CEC8]">
                                    A gym is not a home, a shop, or an office with machines
                                    in it. Equipment, movement, light, and wear have to be
                                    designed together — or the room fails once people
                                    start training.
                                </p>
                            </div>

                            {/* ================= ANIMATED AREA ================= */}
                            <div className="relative mt-10 h-[300px] overflow-hidden border border-[#F5F3EE]/10 bg-[#0F0F0F]">
                                {/* grid */}
                                <div
                                    className="absolute inset-0 opacity-[0.06]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)",
                                        backgroundSize: "30px 30px",
                                    }}
                                />

                                {/* glow */}
                                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E0C15A]/10 blur-[70px]" />

                                {/* top information */}
                                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#E0C15A] shadow-[0_0_12px_#E0C15A]" />
                                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F5F3EE]/40">
                                            Gym planning
                                        </span>
                                    </div>

                                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#F5F3EE]/25">
                                        01—07
                                    </span>
                                </div>

                                {/* main diagram */}
                                <div className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2">
                                    <div className="relative h-[100px]">
                                        {/* connecting line */}
                                        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#E0C15A]/25" />

                                        {/* animated light */}
                                        <div className="absolute top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#E0C15A] to-transparent animate-[moveLine_3s_linear_infinite]" />

                                        {/* Zone 1 */}
                                        <div className="absolute left-0 top-1/2 h-16 w-[27%] -translate-y-1/2 border border-[#F5F3EE]/15 bg-[#F5F3EE]/[0.02]">
                                            <span className="absolute -top-5 left-0 font-mono text-[7px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                                                Strength
                                            </span>

                                            <div className="absolute inset-3 grid grid-cols-3 gap-1">
                                                <span className="border border-[#F5F3EE]/10" />
                                                <span className="border border-[#F5F3EE]/10" />
                                                <span className="border border-[#F5F3EE]/10" />
                                            </div>
                                        </div>

                                        {/* Zone 2 */}
                                        <div className="absolute left-1/2 top-1/2 h-24 w-[25%] -translate-x-1/2 -translate-y-1/2 border border-[#E0C15A]/40 bg-[#E0C15A]/[0.04]">
                                            <span className="absolute -top-5 left-0 font-mono text-[7px] uppercase tracking-[0.18em] text-[#E0C15A]">
                                                Movement
                                            </span>

                                            <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E0C15A] bg-[#050505] shadow-[0_0_20px_rgba(201,116,69,0.35)]" />

                                            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#E0C15A]/15" />
                                            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#E0C15A]/15" />
                                        </div>

                                        {/* Zone 3 */}
                                        <div className="absolute right-0 top-1/2 h-16 w-[27%] -translate-y-1/2 border border-[#8B9A7E]/25 bg-[#8B9A7E]/[0.025]">
                                            <span className="absolute -top-5 left-0 font-mono text-[7px] uppercase tracking-[0.18em] text-[#8B9A7E]">
                                                Recovery
                                            </span>

                                            <div className="absolute left-3 right-3 top-1/2 h-px bg-[#8B9A7E]/25" />
                                        </div>
                                    </div>
                                </div>

                                {/* bottom data */}
                                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                                    <div>
                                        <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#F5F3EE]/25">
                                            Planning logic
                                        </p>

                                        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#E0C15A]">
                                            Flow / Clearance / Capacity
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#F5F3EE]/25">
                                            Status
                                        </p>

                                        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#8B9A7E]">
                                            ● Optimised
                                        </p>
                                    </div>
                                </div>

                                {/* scanning animation */}
                                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#E0C15A]/60 to-transparent animate-[scan_4s_linear_infinite]" />
                            </div>

                            {/* Bottom stats */}
                            <div className="mt-8 grid grid-cols-3 border-t border-[#F5F3EE]/10 pt-6 text-center">

                                {/* Stat 01 */}
                                <div className="group px-2">
                                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#E0C15A]">
                                        01
                                    </span>

                                    <p className="mt-2 font-display text-2xl uppercase leading-none text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#E0C15A]">
                                        Plan
                                    </p>

                                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#8F8F8F]">
                                        First
                                    </p>
                                </div>

                                {/* Stat 02 */}
                                <div className="group border-l border-[#F5F3EE]/10 px-2">
                                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F5F3EE]/40">
                                        02
                                    </span>

                                    <p className="mt-2 font-display text-2xl uppercase leading-none text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#E0C15A]">
                                        360°
                                    </p>

                                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#8F8F8F]">
                                        Space view
                                    </p>
                                </div>

                                {/* Stat 03 */}
                                <div className="group border-l border-[#F5F3EE]/10 px-2">
                                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#F5F3EE]/40">
                                        03
                                    </span>

                                    <p className="mt-2 font-display text-2xl uppercase leading-none text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#E0C15A]">
                                        24/7
                                    </p>

                                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#8F8F8F]">
                                        Built for use
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* ================= RIGHT ================= */}
                        <SpecialistList points={SPECIALIST_POINTS} />
                    </div>
                </div>

                <style>{`
        @keyframes scan {
            0% {
                transform: translateY(0);
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            90% {
                opacity: 1;
            }

            100% {
                transform: translateY(300px);
                opacity: 0;
            }
        }

        @keyframes moveLine {
            0% {
                left: 0;
                opacity: 0;
            }

            15% {
                opacity: 1;
            }

            85% {
                opacity: 1;
            }

            100% {
                left: calc(100% - 80px);
                opacity: 0;
            }
        }
    `}</style>
            </section>

            {/* 4. EXPERIENCE + SERVICES — credibility */}
            <section
                id="services"
                className="relative overflow-hidden border-t border-[#F5F3EE]/5 bg-[#0A0A0A] py-20 text-[#F5F3EE] md:py-28"
            >
                {/* Ambient background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#E0C15A]/[0.035] blur-3xl"
                        style={{
                            animation: "experienceGlow 9s ease-in-out infinite",
                        }}
                    />

                    <div
                        className="absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-[#E0C15A]/[0.025] blur-3xl"
                        style={{
                            animation: "experienceGlowReverse 11s ease-in-out infinite",
                        }}
                    />

                    <div
                        className="absolute inset-0 opacity-[0.018]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)",
                            backgroundSize: "90px 90px",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 md:px-10">

                    {/* EXPERIENCE INTRO */}
                    <div
                        data-reveal-group
                        className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20"
                    >
                        <div data-reveal>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#E0C15A]" />
                                <Label>Experience</Label>
                            </div>

                            <h2 className="font-display mt-5 max-w-4xl uppercase tracking-[-0.012em]">
                                <span className="block text-3xl leading-[1.02] sm:text-4xl md:text-5xl lg:text-[3.7rem]">
                                    Real gyms.
                                </span>

                                <span className="block text-3xl leading-[1.02] sm:text-4xl md:text-5xl lg:text-[3.7rem]">
                                    Repeated work.
                                </span>

                                <span className="block text-3xl leading-[1.02] text-[#E0C15A] sm:text-4xl md:text-5xl lg:text-[3.7rem]">
                                    Accumulated knowledge.
                                </span>
                            </h2>
                        </div>

                        <div data-reveal className="lg:pb-1">
                            <div className="border-l border-[#E0C15A]/30 pl-5">
                                <p className="text-[15px] leading-7 text-[#8F8F8F]">
                                    The specialisation comes from building gyms, not
                                    from a positioning line. Approx. 15 gym projects.
                                    New enquiries that have come back through word of
                                    mouth. Functional knowledge that only shows up
                                    once people are actually training in the room.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE STATS */}
                    <div
                        data-reveal-group
                        className="mt-14 grid gap-3 md:mt-16 md:grid-cols-3"
                    >
                        {/* 01 */}
                        <div
                            data-reveal
                            className="group relative min-h-[210px] overflow-hidden border border-[#F5F3EE]/10 bg-[#0D0D0D] p-6 transition-all duration-500 hover:border-[#E0C15A]/35"
                        >
                            <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-[#E0C15A]/10 transition-all duration-500 group-hover:h-32 group-hover:w-32" />

                            <div className="flex items-start justify-between">
                                <span className="font-mono text-[9px] tracking-[0.18em] text-[#E0C15A]">
                                    01 / EXPERIENCE
                                </span>

                                <span className="font-mono text-[9px] text-[#F5F3EE]/25">
                                    15+
                                </span>
                            </div>

                            <div className="mt-14">
                                <p className="font-display text-4xl uppercase leading-none text-[#E0C15A] sm:text-5xl">
                                    Approx. 15
                                </p>

                                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F3EE]/55">
                                    Gym projects
                                </p>

                                <p className="mt-3 max-w-sm text-[13px] leading-6 text-[#8F8F8F]">
                                    Independent gym interiors planned around how
                                    people actually train.
                                </p>
                            </div>

                            <div className="absolute bottom-5 left-6 h-px w-10 bg-[#E0C15A]/50 transition-all duration-500 group-hover:w-20" />
                        </div>

                        {/* 02 */}
                        <div
                            data-reveal
                            className="group relative min-h-[210px] overflow-hidden border border-[#F5F3EE]/10 bg-[#0D0D0D] p-6 transition-all duration-500 hover:border-[#E0C15A]/35"
                        >
                            <div className="absolute right-5 top-5 h-8 w-8 rounded-full border border-[#F5F3EE]/10 transition-all duration-500 group-hover:scale-125 group-hover:border-[#E0C15A]/30" />

                            <span className="font-mono text-[9px] tracking-[0.18em] text-[#E0C15A]">
                                02 / TRUST
                            </span>

                            <div className="mt-14">
                                <p className="font-display text-3xl uppercase leading-none sm:text-4xl">
                                    Word of mouth
                                </p>

                                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F3EE]/55">
                                    Repeat enquiries
                                </p>

                                <p className="mt-3 max-w-sm text-[13px] leading-6 text-[#8F8F8F]">
                                    Work has followed from people who have already
                                    seen a gym through the process.
                                </p>
                            </div>

                            <div className="absolute bottom-5 left-6 h-px w-10 bg-[#F5F3EE]/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#E0C15A]" />
                        </div>

                        {/* 03 */}
                        <div
                            data-reveal
                            className="group relative min-h-[210px] overflow-hidden border border-[#F5F3EE]/10 bg-[#0D0D0D] p-6 transition-all duration-500 hover:border-[#E0C15A]/35"
                        >
                            <div className="absolute bottom-0 right-0 h-20 w-20 border-l border-t border-[#F5F3EE]/10 transition-all duration-500 group-hover:h-28 group-hover:w-28" />

                            <span className="font-mono text-[9px] tracking-[0.18em] text-[#E0C15A]">
                                03 / KNOWLEDGE
                            </span>

                            <div className="mt-14">
                                <p className="font-display text-3xl uppercase leading-none sm:text-4xl">
                                    On the floor
                                </p>

                                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F3EE]/55">
                                    Functional knowledge
                                </p>

                                <p className="mt-3 max-w-sm text-[13px] leading-6 text-[#8F8F8F]">
                                    Circulation, glare, storage, flooring,
                                    equipment conflicts — learned by doing the work.
                                </p>
                            </div>

                            <div className="absolute bottom-5 left-6 h-px w-10 bg-[#F5F3EE]/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#E0C15A]" />
                        </div>
                    </div>

                    {/* SERVICES */}
                    {/* ================= SERVICES ================= */}
                    <div
                        data-reveal-group
                        className="mt-20 border-t border-[#F5F3EE]/10 pt-12 md:mt-24"
                    >
                        {/* HEADER */}
                        <div
                            data-reveal
                            className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#E0C15A]" />
                                    <Label>Services</Label>
                                </div>

                                <h3 className="font-display mt-4 text-3xl uppercase leading-none sm:text-4xl">
                                    What we do.
                                </h3>
                            </div>

                            {/* Desktop only */}
                            <p className="max-md:hidden max-w-sm text-[13px] leading-6 text-[#8F8F8F] md:text-right">
                                Full interior design for gyms, fitness studios, and wellness spaces —
                                from concept to finished room.
                            </p>
                        </div>

                        {/* ================= PREMIUM PROCESS DIAGRAM ================= */}
                        <div
                            data-reveal
                            className="relative mt-14 w-full overflow-hidden sm:mt-16 md:mt-20"
                        >
                            <div className="relative w-full">

                                {/* MAIN HORIZONTAL AXIS */}
                                <div
                                    className="
                    absolute
                    left-[4%] right-[4%]
                    top-[12px]
                    h-px
                    bg-[#F5F3EE]/10
                "
                                />

                                {/* ================= THREE SERVICES ================= */}
                                <div className="relative grid grid-cols-3">
                                    {SERVICES.map((service, index) => {
                                        const stage =
                                            index === 0
                                                ? "PLAN"
                                                : index === 1
                                                    ? "DEFINE"
                                                    : "BUILD";

                                        return (
                                            <div
                                                key={service.title}
                                                className="group relative min-w-0 text-center"
                                            >
                                                {/* NUMBER + NODE */}
                                                <div className="relative z-10 mx-auto flex w-fit items-center gap-1.5 bg-[#0A0A0A] px-1 sm:gap-2">
                                                    <span className="font-mono text-[7px] tracking-[0.15em] text-[#E0C15A] sm:text-[9px]">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <span className="relative flex h-3 w-3 items-center justify-center">
                                                        <span className="absolute h-3 w-3 rounded-full border border-[#E0C15A]/40 transition-all duration-500 group-hover:scale-150 group-hover:border-[#E0C15A]/80" />

                                                        <span className="h-1.5 w-1.5 rounded-full bg-[#E0C15A]" />
                                                    </span>
                                                </div>

                                                {/* STEM */}
                                                <div className="mx-auto h-8 w-px bg-gradient-to-b from-[#E0C15A]/40 to-[#F5F3EE]/10 sm:h-10 md:h-11" />

                                                {/* TITLE */}
                                                <h4
                                                    className="
                                    font-display
                                    px-1
                                    text-[14px]
                                    uppercase
                                    leading-none
                                    tracking-wide
                                    transition-all
                                    duration-300
                                    group-hover:text-[#E0C15A]
                                    sm:text-[20px]
                                    md:text-3xl
                                "
                                                >
                                                    {service.title}
                                                </h4>

                                                {/* DESCRIPTION */}
                                                <p
                                                    className="
                                    mx-auto
                                    mt-2
                                    max-w-[105px]
                                    px-1
                                    text-[8px]
                                    leading-4
                                    text-[#8F8F8F]
                                    sm:max-w-[170px]
                                    sm:text-[11px]
                                    sm:leading-5
                                    md:max-w-[210px]
                                    md:text-[12px]
                                "
                                                >
                                                    {service.copy}
                                                </p>

                                                {/* STAGE */}
                                                <div className="mx-auto mt-3 flex w-fit items-center gap-1 sm:mt-5 sm:gap-2">
                                                    <span className="h-px w-2 bg-[#E0C15A]/40 sm:w-4" />

                                                    <span className="font-mono text-[6px] tracking-[0.16em] text-[#F5F3EE]/40 sm:text-[8px] sm:tracking-[0.22em]">
                                                        {stage}
                                                    </span>

                                                    <span className="h-px w-2 bg-[#E0C15A]/40 sm:w-4" />
                                                </div>

                                                {/* LOWER STEM */}
                                                <div className="mx-auto mt-3 h-5 w-px bg-[#F5F3EE]/10 sm:mt-5 sm:h-7" />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* ================= CONVERGENCE ================= */}
                                <div
                                    className="
                    relative
                    mx-auto
                    mt-0
                    h-[52px]
                    w-[58%]
                    sm:h-[65px]
                    md:h-[72px]
                "
                                >
                                    {/* LEFT DIAGONAL */}
                                    <span
                                        className="
                        absolute
                        left-0 top-0
                        h-px w-[42%]
                        origin-right
                        rotate-[24deg]
                        bg-[#F5F3EE]/10
                    "
                                    />

                                    {/* CENTER */}
                                    <span
                                        className="
                        absolute
                        left-1/2 top-0
                        h-[42px] w-px
                        -translate-x-1/2
                        bg-gradient-to-b
                        from-[#F5F3EE]/10
                        to-[#E0C15A]/50
                        sm:h-[55px]
                        md:h-[60px]
                    "
                                    />

                                    {/* RIGHT DIAGONAL */}
                                    <span
                                        className="
                        absolute
                        right-0 top-0
                        h-px w-[42%]
                        origin-left
                        -rotate-[24deg]
                        bg-[#F5F3EE]/10
                    "
                                    />

                                    {/* FINAL NODE */}
                                    <span className="absolute bottom-0 left-1/2 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center sm:h-4 sm:w-4">
                                        <span className="absolute h-3.5 w-3.5 rounded-full border border-[#E0C15A]/40 sm:h-4 sm:w-4" />

                                        <span className="h-1.5 w-1.5 rounded-full bg-[#E0C15A]" />
                                    </span>
                                </div>

                                {/* ================= OUTCOME ================= */}
                                <div className="text-center">
                                    <p className="font-mono text-[6px] uppercase tracking-[0.22em] text-[#8F8F8F]/60 sm:text-[8px] sm:tracking-[0.28em]">
                                        The outcome
                                    </p>

                                    <h4 className="font-display mt-2 text-[18px] uppercase leading-none tracking-wide sm:text-2xl md:text-3xl">
                                        The gym{" "}
                                        <span className="text-[#E0C15A]">
                                            has to work.
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
        @keyframes experienceGlow {
            0%, 100% {
                transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
                transform: translate3d(-30px, 25px, 0) scale(1.1);
            }
        }

        @keyframes experienceGlowReverse {
            0%, 100% {
                transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
                transform: translate3d(25px, -20px, 0) scale(1.08);
            }
        }
    `}</style>
            </section>

            {/* ================= APPROACH ================= */}
            <section
                id="approach"
                className="relative overflow-hidden border-t border-[#F5F3EE]/10 bg-[#0A0A0A] py-20 text-[#F5F3EE] md:py-28"
            >
                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    {/* ================= HEADER ================= */}
                    <div
                        data-reveal-group
                        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                    >
                        <div data-reveal>
                            <Label>Our approach</Label>

                            <h2 className="font-display mt-4 max-w-3xl text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                                A gym is designed{" "}
                                <span className="text-[#E0C15A]">
                                    in sequence.
                                </span>
                            </h2>
                        </div>

                        {/* Desktop only */}
                        <p
                            data-reveal
                            className="hidden max-w-xs font-mono text-[10px] uppercase tracking-[0.18em] text-[#E0C15A]/60 md:block md:pb-2"
                        >
                            Understand → Research → Plan → Design → Build → Learn
                        </p>
                    </div>

                    {/* ================= PROCESS ================= */}
                    <div data-reveal className="relative mt-20 md:mt-24">
                        <div className="hidden md:block">
                            <WavyProcessRow steps={APPROACH} />
                        </div>
                        <div className="md:hidden">
                            <WavyProcessColumn steps={APPROACH} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT PREVIEW ================= */}
            <section
                id="about"
                className="relative overflow-hidden border-t border-[#F5F3EE]/5 bg-[#080808] py-20 text-[#F5F3EE] md:py-28"
            >
                <a
                    href="/about"
                    data-reveal-group
                    className="group block mx-auto max-w-7xl px-6 md:px-10"
                    aria-label="Read the complete story about Sagrika and Design Diaries"
                >
                    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">

                        {/* ================= RIGHT IMAGE — NOW FIRST / LEFT ================= */}
                        <div data-reveal className="lg:justify-self-start">
                            <div className="relative mx-auto w-full max-w-[500px]">

                                {/* Editorial frame */}
                                <div className="absolute -inset-2 border border-[#F5F3EE]/[0.05] transition-all duration-500 group-hover:border-[#E0C15A]/20" />

                                <div className="relative aspect-[5/4] overflow-hidden bg-[#050505]">
                                    <img
                                        data-parallax-img
                                        src="https://images.openai.com/static-rsc-4/LhFYuRxeqwuDBitdyS2lUsg4tnt1Kl7pRNGoKnKvk6uJixBwK56zblDwg08vEnq50rWk-7yPP_ffZn2F3cxaJqDb0i8HiMILEXmm0ClZLRFKujqvQu8TOd02y2umJ9UFCk6pgT89fZPKPChnYUmPYKp_PDF9nuy7odB_DS0aExOc9eTZaOABPF04t5K1mp4m?purpose=fullsize"
                                        alt="Gym interior architecture with lighting and equipment"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        loading="lazy"
                                    />

                                    {/* Image overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />

                                    {/* Corner details */}
                                    <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-[#E0C15A]/70" />
                                    <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#E0C15A]/70" />

                                    {/* Image number */}
                                    <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.2em] text-[#F5F3EE]/55">
                                        DESIGN DIARIES / 01
                                    </span>

                                    {/* Hover indicator */}
                                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-[#F5F3EE]/20 bg-[#050505]/40 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E0C15A]/70 group-hover:bg-[#E0C15A]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-4 w-4 text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#050505]"
                                        >
                                            <path
                                                d="M7 17L17 7M9 7H17V15"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#F5F3EE]/40">
                                    Sagrika Saraf · Lead interior designer
                                </p>
                            </div>
                        </div>

                        {/* ================= LEFT TEXT — NOW SECOND / RIGHT ================= */}
                        <div data-reveal className="max-w-2xl">
                            <div className="flex items-center gap-4 pb-4">
                                <span className="h-px w-10 bg-[#E0C15A]" />
                                <span className="text-[15px] font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
                                    About Sagrika
                                </span>
                            </div>

                            <h2 className="font-display mt-5 text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                                Sagrika, and the turn{" "}
                                <span className="text-[#E0C15A]">
                                    toward gyms.
                                </span>
                            </h2>

                            <p className="font-editorial mt-6 max-w-xl text-xl leading-8 text-[#D0CEC8]">
                                Sagrika Saraf leads Design Diaries. Trained as an interior
                                designer — including a Master's in Paris — she treats a
                                room as a place people inhabit, not simply as a piece of art.
                                A single gym project became many, and each one added to a
                                growing understanding of how equipment, movement and daily
                                use shape a space long before aesthetics do.
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F5F3EE]/35">
                                    Interior · Gyms · Wellness
                                </span>

                                <span className="h-px w-10 bg-[#F5F3EE]/10 transition-all duration-500 group-hover:w-16 group-hover:bg-[#E0C15A]/50" />

                                <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F5F3EE]/50 transition-colors duration-500 group-hover:text-[#E0C15A]">
                                    Read story
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                                    >
                                        <path
                                            d="M5 12h14M13 6l6 6-6 6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ================= BOTTOM LINK ================= */}
                    <div className="mt-14 flex items-center justify-between border-t border-[#F5F3EE]/10 pt-5">
                        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#F5F3EE]/25">
                            Design Diaries / About
                        </span>

                        <span className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0C15A]">
                            Explore the full story
                            <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </div>
                </a>
            </section>

            {/* 6b. SOCIAL PROOF — premium testimonial cards */}
            <section className="relative border-t border-[#F5F3EE]/5 bg-[#0A0A0A] py-20 text-[#F5F3EE] md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    {/* HEADER */}
                    <div
                        data-reveal-group
                        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                    >
                        <div data-reveal>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#E0C15A]" />
                                <Label>What clients say</Label>
                            </div>

                            <h2 className="font-display mt-4 max-w-2xl text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                                The right people{" "}
                                <span className="text-[#E0C15A]">
                                    recognise the work.
                                </span>
                            </h2>
                        </div>

                        <p
                            data-reveal
                            className="max-w-xs text-[11px] uppercase leading-5 tracking-[0.14em] text-[#8F8F8F] md:text-right"
                        >
                            Real spaces.
                            <br className="hidden md:block" />
                            Real outcomes.
                        </p>
                    </div>

                    {/* TESTIMONIAL CARDS */}
                    <div
                        data-reveal-group
                        className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5"
                    >
                        {TESTIMONIALS.map((t, index) => (
                            <article
                                data-reveal
                                key={t.name}
                                className={`
                        group relative overflow-hidden
                        border border-[#F5F3EE]/10
                        bg-[#0D0D0D]
                        px-6 py-7
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:border-[#E0C15A]/40
                        md:px-7 md:py-8
                        ${index === 1 ? "md:translate-y-8" : ""}
                    `}
                            >
                                {/* TOP META */}
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#E0C15A]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="h-px w-10 bg-[#F5F3EE]/10 transition-all duration-500 group-hover:w-16 group-hover:bg-[#E0C15A]/50" />
                                </div>

                                {/* LARGE QUOTE */}
                                <div className="mt-10">
                                    <span className="font-editorial block text-5xl leading-[0.5] text-[#E0C15A]/50">
                                        "
                                    </span>

                                    <p className="font-editorial mt-5 text-xl leading-8 text-[#D0CEC8] transition-colors duration-300 group-hover:text-[#F5F3EE]">
                                        {t.quote}
                                    </p>
                                </div>

                                {/* CLIENT */}
                                <div className="mt-10 border-t border-[#F5F3EE]/10 pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F3EE]/80">
                                        {t.name}
                                    </p>

                                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[#8F8F8F]">
                                        {t.detail}
                                    </p>
                                </div>

                                {/* ACCENT */}
                                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#E0C15A] transition-all duration-500 group-hover:w-full" />
                            </article>
                        ))}
                    </div>

                    {/* FOOTNOTE */}
                    <div className="mt-16 flex items-center gap-3 md:mt-20">
                        <span className="h-px w-7 bg-[#E0C15A]/50" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#F5F3EE]/25">
                            Client perspectives
                        </span>
                    </div>

                </div>
            </section>

            {/* 7. FEATURED CASE / INSIGHTS */}
            <section
                className="relative border-t border-[#F5F3EE]/5 bg-[#050505] py-20 text-[#F5F3EE] md:py-24"
            >
                <div className="mx-auto max-w-7xl px-6 md:px-10">

                    {/* ================= HEADER ================= */}
                    <div
                        data-reveal-group
                        className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                    >
                        <div data-reveal className="max-w-2xl">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-9 bg-[#E0C15A]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
                                    Featured insight
                                </span>
                            </div>

                            <h2 className="font-display mt-5 text-3xl uppercase leading-[0.94] tracking-[-0.02em] sm:text-4xl md:text-[2.6rem]">
                                A gym is decided in the plan, not in the{" "}
                                <span className="text-[#E0C15A]">
                                    finishes.
                                </span>
                            </h2>
                        </div>

                        <p
                            data-reveal
                            className="max-w-md text-sm leading-6 text-[#8F8F8F] lg:pb-1"
                        >
                            Before and after on a gym project is rarely a paint change.
                            It is zoning, equipment, mirrors, light, and how the room is used.
                        </p>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div
                        data-reveal-group
                        className="mt-12 grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
                    >

                        {/* ================= IMAGE ================= */}
                        <div data-reveal>
                            <div className="group relative">

                                {/* Offset frame */}
                                <div className="absolute -inset-2 border border-[#F5F3EE]/[0.05] transition-colors duration-500 group-hover:border-[#E0C15A]/20" />

                                <div className="relative aspect-[16/12] overflow-hidden bg-[#080808]">

                                    <img
                                        data-parallax-img
                                        src="https://images.openai.com/static-rsc-4/mlzuMiMq7KOaR7q4FWKa4Xy48PPJTOF3ldYewaA7niW3T6VCbmaEuLYmfov8VpXVw9CHdphSBQ1udh9ZOe1qSrgz9Od6w7Q-DU4XML_hEWQ2OWdUdUJ-E9tdZDrwsrhvf8zqecFpoRMfoSN5jvPIhOKxWB7Qp2LqDE_VvjcG2mzs3MiqhPCORoiy_MECww8X?purpose=fullsize"
                                        alt="Gym equipment placement and circulation along a training floor"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                        loading="lazy"
                                    />

                                    {/* Image overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/55 via-transparent to-transparent" />

                                    {/* Corner marks */}
                                    <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-[#E0C15A]/70" />
                                    <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#E0C15A]/70" />

                                    {/* Image label */}
                                    <span className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.2em] text-[#F5F3EE]/55">
                                        Planning / 01
                                    </span>

                                    {/* Small arrow */}
                                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-[#F5F3EE]/20 bg-[#050505]/35 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E0C15A]/60 group-hover:bg-[#E0C15A]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="h-4 w-4 text-[#F5F3EE] transition-colors duration-300 group-hover:text-[#050505]"
                                        >
                                            <path
                                                d="M7 17L17 7M9 7H17V15"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#F5F3EE]/40">
                                        Gym planning · Equipment placement
                                    </p>

                                    <span className="h-px flex-1 bg-[#F5F3EE]/10" />
                                </div>
                            </div>
                        </div>

                        {/* ================= INSIGHTS ================= */}
                        <InsightsList points={INSIGHTS} />
                    </div>

                    {/* ================= BOTTOM MARKER ================= */}
                    <div className="mt-10 flex items-center gap-4">
                        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#F5F3EE]/20">
                            Design Diaries / Approach
                        </span>

                        <span className="h-px flex-1 bg-[#F5F3EE]/[0.06]" />

                        <span className="font-mono text-[8px] tracking-[0.18em] text-[#E0C15A]/50">
                            01 — 03
                        </span>
                    </div>
                </div>
            </section>

        </main>
    );
}