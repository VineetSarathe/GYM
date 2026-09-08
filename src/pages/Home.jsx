import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { PROJECTS } from "../data/projects";
import { ArrowRight } from "lucide-react";

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
        copy: "Understand your people, goals and opportunities.",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80",
        alt: "Notebook with handwritten notes",
        overlay: { lines: ["People", "Spaces", "Possibilities"], script: true },
    },
    {
        title: "Research",
        copy: "Study global trends, user behaviour and spatial possibilities.",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=700&q=80",
        alt: "Material and finish samples",
    },
    {
        title: "Plan",
        copy: "Create a clear spatial and functional strategy.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
        alt: "Architectural floor plan",
    },
    {
        title: "Design",
        copy: "Bring the vision to life with purposeful, aesthetic design.",
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=700&q=80",
        alt: "Gym interior with linear lighting",
    },
    {
        title: "Build",
        copy: "Oversee execution with precision and attention to detail.",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
        alt: "Dumbbell close-up",
        overlay: { lines: ["STRONGER", "SPACES"], script: false },
    },
    {
        title: "Learn",
        copy: "Measure, refine and evolve for long-term impact.",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=700&q=80",
        alt: "Training space wall",
        overlay: { lines: ["BETTER PEOPLE", "STRONGER BUSINESSES"], script: false },
    },
];

// Per Brand Strategy doc social proof strategy: "Project testimonials,
// client stories, enquiry and word-of-mouth evidence." These are
// PLACEHOLDER quotes for layout — replace with real client testimonials.
const TESTIMONIALS = [
    {
        quote:
            "She asked about our peak-hour\nheadcount before she asked about finishes.\nThat's when I knew the layout would actually\nhold up.",
        name: "First-time gym owner",
        detail: "New gym 3,200 sq ft",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80",
        alt: "Free weights and dumbbells on a gym floor",
    },
    {
        quote:
            "Circulation and equipment placement were solved before a single material was chosen. Nothing felt like an afterthought.",
        name: "Fitness studio founder",
        detail: "Studio renovation",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
        alt: "Rows of cardio machines on a gym floor",
    },
    {
        quote:
            "Every gym owner in our group has since asked who designed our space.",
        name: "Referral client",
        detail: "Word of mouth · repeat enquiry",
        image: "https://images.unsplash.com/photo-1570829460005-cba455b4c2e7?auto=format&fit=crop&w=900&q=80",
        alt: "Training floor with equipment rows",
    },
];

const TESTIMONIAL_STATS = [
    { value: "50+", line1: "Projects", line2: "Delivered" },
    { value: "2x", line1: "Business Growth", line2: "for Clients" },
    { value: "100%", line1: "Function-First", line2: "Design Approach" },
];

const TESTIMONIAL_BG =
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=2400&q=80";
const TESTIMONIAL_ACCENT = "#A75D41";

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

const WHY_GYM_CARDS = [
    {
        title: "Equipment Logic",
        copy: "Racks, machines and free weights are placed for how they are used.",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
        alt: "Dumbbell close-up on a gym floor",
    },
    {
        title: "Circulation",
        copy: "Every piece of equipment has a purpose and a relationship to the space.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        alt: "Gym floor with equipment aisles",
    },
    {
        title: "Durability",
        copy: "Flooring, tiles and finishes have to survive sweat, impact and daily traffic.",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
        alt: "Gym flooring with directional markings",
    },
    {
        title: "Business Thinking",
        copy: "The plan has to work for the business — capacity, staffing and how the room earns.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        alt: "Dark textured gym flooring",
    },
];

// Words for the page-load intro. Keep in sync with the hero heading below.
const INTRO_WORDS = [
    { text: "Gyms,", gold: false },
    { text: "designed", gold: false },
    { text: "to", gold: false },
    { text: "perform.", gold: false },
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

const AUTO_SCROLL_INTERVAL = 1300;
const COVERFLOW_TRANSITION = "transform 1300ms linear, opacity 1300ms linear, filter 1300ms linear";

function ProjectsCoverflow({ projects }) {
    const stageRef = useRef(null);
    const cardRefs = useRef([]);
    const cardOffsetRefs = useRef([]);
    const positionRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const draggingRef = useRef(false);
    const autoScrollRef = useRef(null);
    const isHoveredRef = useRef(false);
    const transitionsEnabledRef = useRef(false);
    const startXRef = useRef(0);
    const startPosRef = useRef(0);
    const wheelTimeoutRef = useRef(null);

    const N = projects.length;

    const setCardTransitions = (enabled) => {
        transitionsEnabledRef.current = enabled;
        cardRefs.current.forEach((el) => {
            if (el) el.style.transition = enabled ? COVERFLOW_TRANSITION : "none";
        });
    };

    const render = () => {
        const position = positionRef.current;
        cardRefs.current.forEach((el, i) => {
            if (!el) return;
            let d = i - position;
            while (d > N / 2) d -= N;
            while (d < -N / 2) d += N;

            const previousOffset = cardOffsetRefs.current[i];
            const wrapped = previousOffset !== undefined && Math.abs(d - previousOffset) > N / 2;
            cardOffsetRefs.current[i] = d;

            const abs = Math.abs(d);
            const stageWidth = stageRef.current?.clientWidth || 1200;
            const isMobile = stageWidth < 640;
            const spacing = isMobile
                ? Math.max(108, stageWidth * 0.32)
                : Math.min(220, Math.max(165, stageWidth * 0.18));
            const scale = Math.max(0.78, 1 - abs * 0.055);
            const translateX = d * spacing;
            const translateY = Math.min(abs * abs * (isMobile ? 7 : 14), isMobile ? 58 : 115);
            const rotateZ = Math.max(-8, Math.min(8, d * 2.2));
            const opacity = Math.max(0.42, 1 - abs * 0.09);
            const z = Math.round(100 - abs);

            if (wrapped && transitionsEnabledRef.current) el.style.transition = "none";
            el.style.transform = `translate(-50%,-50%) translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`;
            el.style.opacity = opacity;
            el.style.zIndex = z;
            el.style.filter = abs > 0.4 ? `brightness(${Math.max(0.65, 1 - abs * 0.055)})` : "none";
            el.style.pointerEvents = abs <= 3.2 ? "auto" : "none";
            if (wrapped && transitionsEnabledRef.current) {
                void el.offsetWidth;
                el.style.transition = COVERFLOW_TRANSITION;
            }
        });

        const idx = ((Math.round(position) % N) + N) % N;
        setActiveIndex(idx);
    };

    useEffect(() => {
        render();
        setCardTransitions(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [N]);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        if (isMobile) return;

        autoScrollRef.current = setInterval(() => {
            if (draggingRef.current || isHoveredRef.current) return;

            positionRef.current = Math.round(positionRef.current) + 1;
            render();
        }, AUTO_SCROLL_INTERVAL);

        return () => {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [N]);

    const goTo = (index) => {
        positionRef.current = index;
        render();
    };

    const handlePrev = () => goTo(Math.round(positionRef.current) - 1);
    const handleNext = () => goTo(Math.round(positionRef.current) + 1);

    const handleMouseDown = (e) => {
        draggingRef.current = true;
        setCardTransitions(false);
        startXRef.current = e.clientX;
        startPosRef.current = positionRef.current;
        if (stageRef.current) stageRef.current.style.cursor = "grabbing";
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!draggingRef.current) return;
            const dx = e.clientX - startXRef.current;
            positionRef.current = startPosRef.current - dx / 140;
            render();
        };
        const handleMouseUp = () => {
            if (!draggingRef.current) return;
            draggingRef.current = false;
            if (stageRef.current) stageRef.current.style.cursor = "grab";
            setCardTransitions(true);
            positionRef.current = Math.round(positionRef.current);
            render();
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [N]);

    const handleTouchStart = (e) => {
        draggingRef.current = true;
        setCardTransitions(false);
        startXRef.current = e.touches[0].clientX;
        startPosRef.current = positionRef.current;
    };
    const handleTouchMove = (e) => {
        if (!draggingRef.current) return;
        const dx = e.touches[0].clientX - startXRef.current;
        positionRef.current = startPosRef.current - dx / 140;
        render();
    };
    const handleTouchEnd = () => {
        draggingRef.current = false;
        setCardTransitions(true);
        positionRef.current = Math.round(positionRef.current);
        render();
    };

    const handleCardMouseEnter = () => {
        isHoveredRef.current = true;
    };

    const handleCardMouseLeave = () => {
        isHoveredRef.current = false;
    };

    const handleWheel = (e) => {
        if (window.matchMedia("(max-width: 767px)").matches) return;
        e.preventDefault();
        setCardTransitions(false);
        positionRef.current += (e.deltaY + e.deltaX) * 0.0025;
        render();
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = setTimeout(() => {
            setCardTransitions(true);
            positionRef.current = Math.round(positionRef.current);
            render();
        }, 140);
    };

    return (
        <div data-reveal className="relative">
            <div
                ref={stageRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheel}
                className="relative flex h-[320px] items-center justify-center select-none sm:h-[400px] md:h-[430px]"
                style={{ perspective: "1400px", touchAction: "pan-y", cursor: "grab" }}
            >
                <div className="relative h-full w-full">
                    {projects.map((project, i) => {
                        const isWellness = project.category === "Wellness";
                        return (
                            <a
                                key={project.id}
                                href={project.href}
                                ref={(el) => (cardRefs.current[i] = el)}
                                onMouseEnter={handleCardMouseEnter}
                                onMouseLeave={handleCardMouseLeave}
                                className="absolute left-1/2 top-[42%] w-[130px] shrink-0 overflow-hidden rounded-lg border border-[#F5F3EE]/[0.08] bg-[#0D0D0D] shadow-[0_30px_60px_rgba(0,0,0,0.55)] will-change-transform sm:w-[195px] md:top-[38%] md:w-[215px] lg:w-[210px]"
                                style={{ aspectRatio: "4 / 5.3" }}
                                draggable={false}
                            >
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                                    draggable={false}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/10" />
                                <div className="pointer-events-none absolute left-3 top-3 font-mono text-[7px] tracking-[0.16em] text-[#E0C15A] sm:left-4 sm:top-4 sm:text-[9px]">
                                    {project.id}
                                </div>
                                {isWellness && (
                                    <span className="pointer-events-none absolute right-3 top-3 rounded-sm border border-[#8B9A7E]/40 bg-[#8B9A7E]/15 px-1.5 py-1 text-[6px] font-bold uppercase tracking-[0.1em] text-[#8B9A7E] sm:right-4 sm:top-4 sm:px-2 sm:text-[8px] sm:tracking-[0.14em]">
                                        Wellness
                                    </span>
                                )}
                                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                    <h3 className="font-display text-[13px] uppercase leading-none tracking-wide text-[#F5F3EE] sm:text-[16px] md:text-[18px]">
                                        {project.name}
                                    </h3>
                                    <p
                                        className={`mt-1.5 text-[7px] uppercase tracking-[0.12em] sm:mt-2 sm:text-[9px] sm:tracking-[0.16em] ${isWellness ? "text-[#8B9A7E]" : "text-[#8F8F8F]"
                                            }`}
                                    >
                                        {project.category}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-6">
                <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F5F3EE]/20 text-[#F5F3EE] transition-colors duration-300 hover:border-[#E0C15A] hover:bg-[#E0C15A] hover:text-[#050505]"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="flex items-center gap-2">
                    {projects.map((project, i) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Go to ${project.name}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-5 bg-[#E0C15A]" : "w-1.5 bg-[#F5F3EE]/20"
                                }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next project"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F5F3EE]/20 text-[#F5F3EE] transition-colors duration-300 hover:border-[#E0C15A] hover:bg-[#E0C15A] hover:text-[#050505]"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-[#F5F3EE]/25">
                Drag, scroll, or use arrows
            </p>
        </div>
    );
}


const EDGE_CARD_H = 90;
const EDGE_CARD_GAP = 10;
const EDGE_VISIBLE = 4;
const EDGE_VIEWPORT_H = EDGE_VISIBLE * EDGE_CARD_H + (EDGE_VISIBLE - 1) * EDGE_CARD_GAP;

function projectAt(list, start, i) {
    if (!list.length) return null;
    const n = list.length;
    return list[(((start + i) % n) + n) % n];
}

function EdgeBleedProjectsColumn({ projects }) {
    const N = projects.length;
    const viewportRef = useRef(null);
    const colRefs = useRef([]);
    const positionRef = useRef(0);
    const draggingRef = useRef(false);
    const axisRef = useRef(null);
    const didDragRef = useRef(false);
    const pointerStartRef = useRef({ x: 0, y: 0 });
    const startPosRef = useRef(0);
    const tweenRef = useRef(null);
    const wheelTimeoutRef = useRef(null);

    const apply = () => {
        const pos = positionRef.current;
        const stageW = viewportRef.current?.clientWidth || 720;
        const isMobile = stageW < 640;
        const spacing = isMobile
            ? Math.max(118, stageW * 0.3)
            : Math.min(210, Math.max(170, stageW * 0.26));

        colRefs.current.forEach((el, i) => {
            if (!el) return;
            let d = i - pos;
            while (d > N / 2) d -= N;
            while (d < -N / 2) d += N;

            const abs = Math.abs(d);
            const rotateY = Math.max(-32, Math.min(32, -d * 28));
            const translateX = d * spacing;
            // Center sits back; sides come forward (underside / behind).
            const translateZ = -150 + abs * 175;
            const translateY = abs * 18;
            const rotateX = 10 - abs * 6;
            const scale = Math.max(0.78, 0.9 + abs * 0.04);
            const opacity =
                abs >= 2.2 ? 0 : abs <= 1 ? 1 - 0.32 * abs : Math.max(0, 0.68 * (1 - (abs - 1) / 1.2));

            el.style.transform = `translate3d(-50%, ${translateY}px, 0) translate3d(${translateX}px, 0, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            el.style.opacity = opacity;
            el.style.zIndex = String(Math.round(abs * 14));
            el.style.filter = abs < 0.25 ? `brightness(0.82)` : abs > 0.9 ? `brightness(${Math.max(0.7, 1 - abs * 0.08)})` : "none";
            el.style.pointerEvents = abs <= 0.55 ? "auto" : "none";
            el.style.visibility = abs >= 2.25 ? "hidden" : "visible";
        });
    };

    const killTween = () => {
        tweenRef.current?.kill();
        tweenRef.current = null;
    };

    const snapTo = (index) => {
        killTween();
        const proxy = { value: positionRef.current };
        tweenRef.current = gsap.to(proxy, {
            value: index,
            duration: 0.7,
            ease: "power3.out",
            onUpdate: () => {
                positionRef.current = proxy.value;
                apply();
            },
            onComplete: () => {
                positionRef.current = index;
                apply();
                tweenRef.current = null;
            },
        });
    };

    useLayoutEffect(() => {
        apply();
        return () => {
            killTween();
            clearTimeout(wheelTimeoutRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [N]);

    useEffect(() => {
        const el = viewportRef.current;
        if (!el) return;

        const onWheel = (e) => {
            if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
            if (Math.abs(e.deltaX) < 6) return;
            e.preventDefault();
            killTween();
            positionRef.current += e.deltaX * 0.0045;
            apply();
            clearTimeout(wheelTimeoutRef.current);
            wheelTimeoutRef.current = setTimeout(() => {
                snapTo(Math.round(positionRef.current));
            }, 120);
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [N]);

    const handlePointerDown = (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        draggingRef.current = true;
        axisRef.current = null;
        didDragRef.current = false;
        pointerStartRef.current = { x: e.clientX, y: e.clientY };
        startPosRef.current = positionRef.current;
        e.currentTarget.style.cursor = "grabbing";
    };

    const handlePointerMove = (e) => {
        if (!draggingRef.current) return;
        const dx = e.clientX - pointerStartRef.current.x;
        const dy = e.clientY - pointerStartRef.current.y;

        if (!axisRef.current) {
            if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
            axisRef.current = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
            if (axisRef.current === "x") {
                killTween();
                e.currentTarget.setPointerCapture(e.pointerId);
            }
        }

        if (axisRef.current !== "x") return;

        e.preventDefault();
        if (Math.abs(dx) > 6) didDragRef.current = true;
        positionRef.current = startPosRef.current - dx / 170;
        apply();
    };

    const handlePointerUp = (e) => {
        if (!draggingRef.current) return;
        draggingRef.current = false;
        axisRef.current = null;
        e.currentTarget.style.cursor = "grab";
        snapTo(Math.round(positionRef.current));
    };

    const handleClickCapture = (e) => {
        if (!didDragRef.current) return;
        e.preventDefault();
        e.stopPropagation();
        didDragRef.current = false;
    };

    const renderCard = (project, row, dim) => {
        if (!project) return null;
        const isWellness = project.category === "Wellness";
        const back = EDGE_VISIBLE - 1 - row;
        return (
            <a
                key={project.id}
                href={project.href}
                tabIndex={dim ? -1 : undefined}
                className="group relative block h-[90px] w-full shrink-0 overflow-hidden rounded-md border border-[#F5F3EE]/[0.08] bg-[#0D0D0D] shadow-[0_10px_26px_rgba(0,0,0,0.5)]"
                style={{
                    transform: `translateZ(${-back * 38}px) scale(${1 - back * 0.04})`,
                    zIndex: row,
                }}
            >
                <div className="relative h-full overflow-hidden">
                    <img
                        src={project.image}
                        alt={dim ? "" : project.alt}
                        className="h-full w-full object-cover"
                        draggable={false}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/10" />
                    {!dim && (
                        <div className="absolute left-2 top-2 font-mono text-[8px] tracking-[0.16em] text-[#E0C15A]">
                            {project.id}
                        </div>
                    )}
                    {isWellness && !dim && (
                        <span className="absolute right-2 top-2 rounded-sm border border-[#8B9A7E]/40 bg-[#8B9A7E]/15 px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-[0.1em] text-[#8B9A7E]">
                            Wellness
                        </span>
                    )}
                    <div className="absolute bottom-2 left-2 right-2">
                        <h3 className={`font-display uppercase leading-none tracking-wide text-[#F5F3EE] ${dim ? "text-[9px]" : "text-[11px]"}`}>
                            {project.name}
                        </h3>
                    </div>
                </div>
            </a>
        );
    };

    const slots = Array.from({ length: EDGE_VISIBLE }, (_, i) => i);

    return (
        <div
            ref={viewportRef}
            data-reveal
            className="relative mx-auto w-full max-w-[792px] cursor-grab px-[36px] select-none"
            style={{ touchAction: "pan-y" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onClickCapture={handleClickCapture}
            aria-label="Project cards, drag left or right"
        >
            <div
                className="relative w-full"
                style={{
                    height: EDGE_VIEWPORT_H,
                    perspective: "1200px",
                    perspectiveOrigin: "50% 88%",
                }}
            >
                {projects.map((_, colIndex) => (
                    <div
                        key={projects[colIndex].id}
                        ref={(el) => {
                            colRefs.current[colIndex] = el;
                        }}
                        className="absolute left-1/2 top-0 flex w-[124px] flex-col gap-[10px] will-change-transform sm:w-[160px] md:w-[190px]"
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
                    >
                        {slots.map((row) => renderCard(projectAt(projects, colIndex, row), row, false))}
                    </div>
                ))}
            </div>
        </div>
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

function GymFloorPlan() {
    return (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121212]">
            <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1400&q=80"
                alt="Gym floor plan showing strength zones and circulation"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.38] contrast-[1.15] saturate-[0.7]"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/62" />
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />
            <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                <rect x="48" y="70" width="210" height="150" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                <rect x="62" y="88" width="78" height="18" fill="rgba(255,255,255,0.08)" />
                <rect x="154" y="88" width="78" height="18" fill="rgba(255,255,255,0.08)" />
                <rect x="62" y="118" width="78" height="18" fill="rgba(255,255,255,0.08)" />
                <rect x="154" y="118" width="78" height="18" fill="rgba(255,255,255,0.08)" />
                <rect x="62" y="148" width="78" height="18" fill="rgba(255,255,255,0.08)" />
                <rect x="154" y="148" width="78" height="18" fill="rgba(255,255,255,0.08)" />
                <rect x="62" y="178" width="170" height="22" fill="rgba(163,104,77,0.18)" stroke="#A3684D" strokeWidth="0.8" />

                <rect x="300" y="80" width="170" height="110" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                <circle cx="340" cy="120" r="14" fill="none" stroke="rgba(255,255,255,0.2)" />
                <circle cx="385" cy="120" r="14" fill="none" stroke="rgba(255,255,255,0.2)" />
                <circle cx="430" cy="120" r="14" fill="none" stroke="rgba(255,255,255,0.2)" />
                <rect x="318" y="150" width="134" height="22" fill="rgba(255,255,255,0.07)" />

                <path
                    d="M 90 260 C 180 250, 260 280, 360 270 C 470 258, 560 300, 680 250 C 720 232, 740 200, 710 160"
                    fill="none"
                    stroke="#C47A52"
                    strokeWidth="2.4"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                />
                <path
                    d="M 160 360 C 280 330, 420 390, 560 340 C 640 318, 700 360, 740 320"
                    fill="none"
                    stroke="#C47A52"
                    strokeWidth="2.2"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                />
                <polygon points="708,148 732,168 700,174" fill="#C47A52" />
                <polygon points="748,306 738,332 722,310" fill="#C47A52" />

                <text x="62" y="58" fill="#C47A52" fontSize="13" letterSpacing="3.2" fontFamily="Canva Sans, sans-serif" fontWeight="700">
                    STRENGTH ZONE
                </text>
                <text x="520" y="228" fill="#FFFFFF" fontSize="12" letterSpacing="3.4" fontFamily="Canva Sans, sans-serif" fontWeight="600">
                    CIRCULATION
                </text>
            </svg>
        </div>
    );
}

function WhyGymCards() {
    const [active, setActive] = useState(1);

    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {WHY_GYM_CARDS.map((card, index) => {
                const isActive = active === index;
                return (
                    <article
                        key={card.title}
                        onMouseEnter={() => setActive(index)}
                        className={`group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[14px] border transition-colors duration-300 ${
                            isActive ? "border-[#C4A06A]/75 bg-[#1A1A1A]" : "border-transparent bg-[#1A1A1A]"
                        }`}
                    >
                        <img
                            src={card.image}
                            alt={card.alt}
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                                isActive ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                                isActive ? "opacity-0" : "opacity-100"
                            }`}
                        />

                        <div
                            className={`absolute left-5 z-[1] transition-all duration-300 ${
                                isActive ? "top-5" : "bottom-5"
                            }`}
                        >
                            <p className="font-canva text-[12px] font-medium tracking-[0.16em] text-white lg:text-[13px]">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-1 font-canva text-[13px] font-bold uppercase tracking-[0.16em] text-white lg:text-[14px]">
                                {card.title}
                            </h3>
                        </div>

                        <div
                            className={`absolute inset-0 flex flex-col p-5 pt-[4.75rem] transition-opacity duration-300 ${
                                isActive ? "opacity-100" : "pointer-events-none opacity-0"
                            }`}
                        >
                            <span className="mt-[18%] h-px w-10 bg-[#C4A06A]" />
                            <p className="mt-auto max-w-[88%] pb-14 font-canva text-[13px] leading-[1.55] text-white">
                                {card.copy}
                            </p>
                            <span className="absolute bottom-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/85 text-white">
                                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                            </span>
                        </div>
                    </article>
                );
            })}
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

function ApproachStepPhoto({ step }) {
    return (
        <div className="relative aspect-square overflow-hidden bg-[#161616]">
            <img
                src={step.image}
                alt={step.alt}
                className="h-full w-full object-cover brightness-[0.72] contrast-[1.08] saturate-[0.85]"
                loading="lazy"
            />
            {step.overlay ? (
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/55 to-transparent px-2.5 pb-3">
                    {step.overlay.lines.map((line) => (
                        <span
                            key={line}
                            className={
                                step.overlay.script
                                    ? "font-canva text-[13px] leading-[1.15] text-white lg:text-[15px]"
                                    : "font-canva text-[8px] font-bold uppercase leading-[1.2] tracking-[0.08em] text-white lg:text-[9px]"
                            }
                        >
                            {line}
                        </span>
                    ))}
                </div>
            ) : null}
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

    const GOLD = "#A75D41";
    const COPPER = "#A75D41";
    const BG = "#0E0E0E";
    const LINE = "#F5F3EE";

    const path =
        "M 100 42 C 170 18, 230 68, 300 28 C 370 8, 430 72, 500 46 C 570 22, 630 70, 700 30 C 770 10, 830 74, 900 52 C 970 30, 1030 58, 1100 38";
    const POINTS = [
        { x: 100, y: 42 },
        { x: 300, y: 28 },
        { x: 500, y: 46 },
        { x: 700, y: 30 },
        { x: 900, y: 52 },
        { x: 1100, y: 38 },
    ];
    const stopFracs = [0, 0.2, 0.4, 0.6, 0.8, 1];

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
            nodeRefs.current.forEach((el) => {
                if (el) {
                    el.style.transition = "none";
                    el.style.fill = "#ffffff";
                }
            });
            labelRefs.current.forEach((el) => { if (el) { el.style.transition = "none"; el.style.fill = LINE; } });
            if (trailGroup) trailGroup.innerHTML = "";
            if (traveler) {
                traveler.setAttribute("cx", String(POINTS[0].x));
                traveler.setAttribute("cy", String(POINTS[0].y));
                traveler.setAttribute("r", "4");
            }
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

        function run() {
            cancelAnimationFrame(rafId);
            resetVisuals();
            startTime = null;
            pulsePhase = 0;
            rafId = requestAnimationFrame(step);
        }

        const stopAndReset = () => {
            cancelAnimationFrame(rafId);
            resetVisuals();
        };

        const replayTrigger = ScrollTrigger.create({
            trigger: trackPath,
            start: "top 80%",
            end: "bottom 20%",
            // Both directions replay: onEnter scrolls down, onEnterBack scrolls up.
            onEnter: run,
            onEnterBack: run,
            onLeave: stopAndReset,
            onLeaveBack: stopAndReset,
        });

        return () => {
            cancelAnimationFrame(rafId);
            replayTrigger.kill();
        };
    }, [steps.length]);

    return (
        <div className="relative">
            <div className="relative h-[118px]">
                {steps.map((step, i) => {
                    const p = POINTS[i];
                    const svgH = 78;
                    const gap = 8;
                    return (
                        <div
                            key={step.title}
                            className="absolute z-[1] -translate-x-1/2 whitespace-nowrap text-center"
                            style={{
                                left: `${(p.x / 1200) * 100}%`,
                                bottom: `${svgH - (p.y / 80) * svgH + gap}px`,
                            }}
                        >
                            <p className="font-canva text-[13px] font-medium tracking-[0.08em] text-white lg:text-[15px]">
                                {String(i + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-0.5 font-canva text-[11px] font-bold uppercase tracking-[0.14em] text-white lg:text-[13px]">
                                {step.title}
                            </h3>
                        </div>
                    );
                })}
                <svg viewBox="0 0 1200 80" className="absolute bottom-0 left-0 h-[78px] w-full" preserveAspectRatio="none" aria-hidden="true">
                    <path d={path} fill="none" stroke="#7a7a7a" strokeWidth="1.15" />
                    <path ref={trackRef} d={path} fill="none" stroke="transparent" strokeWidth="1.15" />
                    {POINTS.map((p, i) => {
                        const isEnd = i === 0 || i === POINTS.length - 1;
                        return (
                            <g key={i}>
                                <circle ref={(el) => (ringRefs.current[i] = el)} cx={p.x} cy={p.y} r="6.5" fill="none" stroke={COPPER} strokeWidth="1.4" opacity="0" />
                                <circle
                                    ref={(el) => (nodeRefs.current[i] = el)}
                                    cx={p.x}
                                    cy={p.y}
                                    r="6.5"
                                    fill="#ffffff"
                                    stroke={isEnd ? COPPER : "none"}
                                    strokeWidth={isEnd ? 2.2 : 0}
                                />
                            </g>
                        );
                    })}
                    <g ref={trailRef} />
                    <circle ref={travelerRef} cx={POINTS[0].x} cy={POINTS[0].y} r="4" fill="#c48a6a" />
                </svg>
            </div>

            <div className="grid grid-cols-6">
                {steps.map((step) => (
                    <div key={step.title} className="border-r border-white/[0.08] px-2 last:border-r-0 lg:px-3">
                        <ApproachStepPhoto step={step} />
                        <p className="mt-3 max-w-[148px] font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[9px] leading-[1.45] text-white lg:text-[10px]">
                            {step.copy}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function WavyProcessColumn({ steps }) {
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
        "M 96 28 C 96 78, 234 88, 234 138 S 96 198, 96 248 S 234 308, 234 358 S 96 418, 96 468 S 234 528, 234 578";
    const POINTS = [
        { x: 96, y: 28 },
        { x: 234, y: 138 },
        { x: 96, y: 248 },
        { x: 234, y: 358 },
        { x: 96, y: 468 },
        { x: 234, y: 578 },
    ];
    const stopFracs = [0, 0.2, 0.4, 0.6, 0.8, 1];

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
            nodeRefs.current.forEach((el) => {
                if (el) {
                    el.style.transition = "none";
                    el.style.fill = BG;
                }
            });
            labelRefs.current.forEach((el) => {
                if (el) {
                    el.style.transition = "none";
                    el.style.fill = LINE;
                }
            });
            if (trailGroup) trailGroup.innerHTML = "";
            if (traveler) {
                traveler.setAttribute("cx", String(POINTS[0].x));
                traveler.setAttribute("cy", String(POINTS[0].y));
                traveler.setAttribute("r", "4");
            }
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

        function animate(ts) {
            if (!startTime) startTime = ts;
            const elapsed = ts - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const point = trackPath.getPointAtLength(progress * total);

            if (traveler) {
                traveler.setAttribute("cx", String(point.x));
                traveler.setAttribute("cy", String(point.y));
                pulsePhase += 0.15;
                traveler.setAttribute(
                    "r",
                    (4 + Math.sin(pulsePhase) * 1.2).toFixed(2),
                );
            }

            if (elapsed % 60 < 20 && trailGroup) {
                const dot = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle",
                );
                dot.setAttribute("cx", String(point.x));
                dot.setAttribute("cy", String(point.y));
                dot.setAttribute("r", "2.5");
                dot.setAttribute("fill", GOLD);
                dot.style.opacity = "0.6";
                trailGroup.appendChild(dot);
                trailDots.push(dot);
                if (trailDots.length > 20) trailDots.shift().remove();
            }

            trailDots.forEach((dot, index) => {
                dot.style.opacity = (
                    (0.55 * (index + 1)) /
                    trailDots.length
                ).toFixed(2);
            });

            stopFracs.forEach((fraction, index) => {
                if (!hitStops[index] && progress >= fraction - 0.005) {
                    hitStops[index] = true;
                    const circle = nodeRefs.current[index];
                    const label = labelRefs.current[index];
                    const isLast = index === steps.length - 1;
                    if (circle) {
                        circle.style.transition = "fill 0.2s";
                        circle.style.fill = isLast ? "#e8c878" : GOLD;
                    }
                    if (label) {
                        label.style.transition = "fill 0.35s";
                        label.style.fill = isLast ? "#e8c878" : GOLD;
                    }
                    pulseRing(index);
                }
            });

            if (progress < 1) rafId = requestAnimationFrame(animate);
        }

        function run() {
            cancelAnimationFrame(rafId);
            resetVisuals();
            startTime = null;
            pulsePhase = 0;
            rafId = requestAnimationFrame(animate);
        }

        const stopAndReset = () => {
            cancelAnimationFrame(rafId);
            resetVisuals();
        };

        const replayTrigger = ScrollTrigger.create({
            trigger: trackPath,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: run,
            onEnterBack: run,
            onLeave: stopAndReset,
            onLeaveBack: stopAndReset,
        });

        return () => {
            cancelAnimationFrame(rafId);
            replayTrigger.kill();
        };
    }, [steps.length]);

    return (
        <div className="space-y-10">
            {steps.map((step, index) => (
                <div key={step.title}>
                    <p className="font-canva text-[15px] font-medium tracking-[0.08em] text-white">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-canva text-sm font-bold uppercase tracking-[0.14em] text-white">
                        {step.title}
                    </h3>
                    <div className="mt-4 max-w-[280px]">
                        <ApproachStepPhoto step={step} />
                    </div>
                    <p className="mt-3 max-w-[280px] font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[11px] leading-[1.5] text-white">
                        {step.copy}
                    </p>
                </div>
            ))}
        </div>
    );
}

// ================= INTRO PRELOADER =================
// Black screen → eyebrow fades in → heading words blur-reveal one by one →
// progress counter runs → everything lifts/blurs out → panel wipes up to
// reveal the real hero underneath.
function IntroPreloader() {
    return (
        <div
            data-preloader
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
            style={{ contain: "strict" }}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <p
                data-intro-eyebrow
                className="font-body mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E0C15A]"
            >
                Design Diaries
            </p>

            <div
                data-intro-heading
                className="flex max-w-4xl flex-wrap justify-center gap-x-[0.32em] gap-y-1 px-6 text-center"
            >
                {INTRO_WORDS.map((word, i) => (
                    <span
                        key={`${word.text}-${i}`}
                        data-intro-word
                        className={`font-display inline-block text-[clamp(32px,6.4vw,84px)] uppercase leading-[0.98] ${word.gold ? "text-[#E0C15A]" : "text-[#F5F3EE]"
                            }`}
                    >
                        {word.text}
                    </span>
                ))}
            </div>

            <div data-intro-progress className="mt-10 flex items-center gap-3.5">
                <span
                    data-intro-count
                    className="font-mono min-w-[32px] text-[10px] tracking-[0.2em] text-[#F5F3EE]/40"
                >
                    00
                </span>
                <div className="relative h-px w-[120px] bg-[#F5F3EE]/15">
                    <div
                        data-intro-fill
                        className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-[#E0C15A]"
                    />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#F5F3EE]/40">
                    100
                </span>
            </div>
        </div>
    );
}

const CASE_STUDY_STEPS = [
    {
        title: "The Challenge",
        copy: "The existing space felt congested, with poor circulation between strength, cardio and functional training areas.",
        rule: true,
    },
    {
        title: "The Thinking",
        copy: "We analysed member flow, equipment relationships and peak-hour usage to identify space and movement bottlenecks.",
    },
    {
        title: "The Decisions",
        copy: "We redesigned the layout, created distinct training zones and improved circulation paths for a smoother, more intuitive flow.",
    },
    {
        title: "The Outcome",
        copy: "A more efficient, open and motivating gym space that supports better workouts and a stronger member experience.",
    },
];

function CaseStudySpotlight() {
    return (
        <section
            data-sticky-stack
            className="font-canva sticky top-0 z-[7] overflow-hidden py-16 pb-24 text-[#2A2A2A] md:py-24 md:pb-32"
            style={{
                fontFamily: '"Canva Sans", sans-serif',
                background: "#f2ede7",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                    <div>
                        <p className="font-canva text-[11px] font-medium uppercase tracking-[0.32em] text-[#727466] md:text-[12px]">
                            Case study spotlight
                        </p>
                        <h2 className="mt-5 font-canva text-[clamp(2.2rem,5vw,3.75rem)] font-medium uppercase leading-[0.88] tracking-[-0.03em] text-[#727466]">
                            Titan
                            <br />
                            Gym
                        </h2>
                        <p className="mt-5 font-canva text-[10px] font-medium uppercase tracking-[0.28em] text-[#000000] md:text-[11px]">
                            Mumbai · 8,000 SQ FT · Gym interior design
                        </p>
                    </div>
                    <div className="relative overflow-hidden rounded-[4px]">
                        <img
                            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1600&q=80"
                            alt="Titan Gym interior with cardio equipment and patterned wall"
                            className="aspect-[16/7.2] h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#E8A87C]/45 to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#E8A87C]/40 to-transparent" />
                    </div>
                </div>

                <div className="relative mt-16 md:mt-[88px]">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
                        {CASE_STUDY_STEPS.map((step, index) => (
                            <div key={step.title} className="relative flex flex-col">
                                <div className="relative flex h-[34px] items-center">
                                    <div className="relative z-[1] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[#727466] bg-[#f2ede7]">
                                        <span className="font-canva text-[11px] font-medium text-[#727466]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    {index < 3 ? (
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-[48px] right-[-26px] top-1/2 hidden h-px -translate-y-1/2 bg-[#727466]/40 md:block"
                                        />
                                    ) : null}
                                </div>
                                <h3 className="mt-7 font-canva text-[12px] font-bold uppercase tracking-[0.18em] text-[#727466]">
                                    {step.title}
                                </h3>
                                <p className="mt-4 max-w-[250px] font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[13px] font-normal leading-[1.7] text-[#000000]">
                                    {step.copy}
                                </p>
                                {step.rule ? (
                                    <span className="mt-6 block h-[2px] w-[220px] max-w-full bg-[#2A2A2A]/55" />
                                ) : null}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-end md:mt-10">
                        <a
                            href="#projects"
                            className="inline-flex min-w-max shrink-0 items-center gap-3 whitespace-nowrap bg-[#6B6E5F] px-5 py-3.5 font-canva text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#5C5F52]"
                        >
                            See the full case study
                            <span className="inline-block h-px w-6 shrink-0 bg-white" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

const RISING_STAR_PHOTOS = [
    {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
        alt: "Young leader portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        alt: "Professional portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
        alt: "Industry leader portrait",
    },
    {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
        alt: "Designer portrait",
    },
];

const AWARD_PHOTO =
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80";

function RecognitionSection() {
    const [slide, setSlide] = useState(0);
    const count = RISING_STAR_PHOTOS.length;
    const visible = [0, 1, 2].map((offset) => RISING_STAR_PHOTOS[(slide + offset) % count]);

    return (
        <section
            data-sticky-stack
            className="font-canva sticky top-0 z-[8] overflow-hidden bg-[#f2ede7] py-16 text-[#1A1A1A] md:py-24 [&_*]:[font-family:'Canva_Sans',sans-serif]"
            style={{ fontFamily: '"Canva Sans", sans-serif' }}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="text-center">
                    <p className="font-canva text-[11px] font-medium uppercase tracking-[0.36em] text-[#2A2A2A] md:text-[12px]">
                        Recognition
                    </p>
                    <h2 className="mt-4 font-canva text-[clamp(1.7rem,3.6vw,2.75rem)] font-semibold leading-[1.2] tracking-[-0.02em]">
                        <span className="text-[#1A1A1A]">Trusted. Recognised. </span>
                        <span style={{ color: "#A3684D" }}>Making an Impact</span>
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
                    <article className="overflow-hidden rounded-[10px] bg-[#E8E4DE]">
                        <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1A1A]">
                            <img
                                src={AWARD_PHOTO}
                                alt="Architects Wow Awards 2024"
                                className="h-full w-full object-cover brightness-[0.72]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
                            <span className="absolute bottom-4 left-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/80 text-white">
                                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-4">
                            <span className="font-canva text-[12px] font-medium text-[#1A1A1A]">01</span>
                            <span className="h-px flex-1 bg-[#1A1A1A]/25" />
                            <h3 className="font-canva text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A1A1A]">
                                Architect&apos;s Wow Award 2024
                            </h3>
                        </div>
                    </article>

                    <article className="flex flex-col overflow-hidden rounded-[10px] bg-[#1C1C1C] text-white">
                        <div className="flex items-start justify-between gap-4 px-4 pt-4">
                            <p className="font-canva text-[9px] uppercase tracking-[0.14em] text-white/85">
                                Delhi&apos;s Rising Star 2024
                            </p>
                            <p className="max-w-[140px] text-right font-canva text-[8px] uppercase tracking-[0.12em] text-white/70">
                                Young leaders shaping a better tomorrow
                            </p>
                        </div>
                        <div className="relative mt-5 flex-1 px-8 pb-2">
                            <button
                                type="button"
                                aria-label="Previous highlights"
                                onClick={() => setSlide((s) => (s - 1 + count) % count)}
                                className="absolute left-2 top-1/2 z-[1] flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-[#1C1C1C]/80 text-white"
                            >
                                <ArrowRight className="h-3.5 w-3.5 rotate-180" strokeWidth={1.8} />
                            </button>
                            <div className="grid grid-cols-3 gap-2">
                                {visible.map((photo) => (
                                    <img
                                        key={`${photo.src}-${slide}`}
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="aspect-[3/4] w-full object-cover"
                                    />
                                ))}
                            </div>
                            <button
                                type="button"
                                aria-label="Next highlights"
                                onClick={() => setSlide((s) => (s + 1) % count)}
                                className="absolute right-2 top-1/2 z-[1] flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-[#1C1C1C]/80 text-white"
                            >
                                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                            </button>
                        </div>
                        <div className="mt-3 flex justify-center gap-1.5 pb-3">
                            {RISING_STAR_PHOTOS.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => setSlide(i)}
                                    className={
                                        i === slide
                                            ? "h-px w-4 bg-white"
                                            : "h-1.5 w-1.5 rounded-full bg-white/40"
                                    }
                                />
                            ))}
                        </div>
                        <div className="mt-auto flex items-center gap-3 border-t border-white/10 px-4 py-4">
                            <span className="font-canva text-[12px] font-medium">02</span>
                            <span className="h-px flex-1 bg-white/25" />
                            <span className="inline-flex cursor-pointer items-center gap-2 font-canva text-[10px] font-bold uppercase tracking-[0.12em]">
                                View highlights
                                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                            </span>
                        </div>
                    </article>

                    <article className="overflow-hidden rounded-[10px] bg-[#E8E4DE]">
                        <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1A1A]">
                            <img
                                src={AWARD_PHOTO}
                                alt="IDAC Expo Delhi"
                                className="h-full w-full object-cover brightness-[0.72]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
                            <span className="absolute bottom-4 left-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/80 text-white">
                                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-4">
                            <span className="font-canva text-[12px] font-medium text-[#1A1A1A]">03</span>
                            <span className="h-px flex-1 bg-[#1A1A1A]/25" />
                            <div className="text-right">
                                <h3 className="font-canva text-[11px] font-bold uppercase tracking-[0.08em] text-[#1A1A1A]">
                                    Published at IDAC Expo
                                </h3>
                                <p className="mt-0.5 font-canva text-[10px] font-medium uppercase tracking-[0.12em] text-[#1A1A1A]/70">
                                    Delhi
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const [index, setIndex] = useState(0);
    const count = TESTIMONIALS.length;
    const visible = [TESTIMONIALS[index], TESTIMONIALS[(index + 1) % count]];

    const prev = () => setIndex((i) => (i - 1 + count) % count);
    const next = () => setIndex((i) => (i + 1) % count);

    return (
        <section
            data-sticky-stack
            className="font-canva relative sticky top-0 z-[9] min-h-[100svh] overflow-hidden text-white"
        >
            <img
                src={TESTIMONIAL_BG}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-right"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] from-0% via-[#2a2a2a] via-[38%] to-[#2a2a2a]/25" />

            <div className="relative mx-auto flex min-h-[100svh] max-w-[1240px] flex-col justify-center px-6 py-16 md:px-10 lg:py-20">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                    What clients say
                </p>

                <h2 className="mt-4 font-canva text-[clamp(2.35rem,5vw,4.15rem)] font-semibold italic leading-[1.08] tracking-[-0.01em]">
                    <span className="block text-white">The Right People</span>
                    <span className="block" style={{ color: TESTIMONIAL_ACCENT }}>
                        Recognise the Work
                    </span>
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5">
                    {visible.map((t, i) => (
                        <article
                            key={`${t.name}-${index}-${i}`}
                            className={`grid min-h-[240px] overflow-hidden md:grid-cols-[1.12fr_0.88fr] md:min-h-[268px] ${
                                i === 0
                                    ? "border border-[#A75D41] bg-[#383838]"
                                    : "bg-[#424242]"
                            }`}
                        >
                            <div className="flex flex-col px-5 py-5 md:px-6 md:py-6">
                                <span
                                    className="text-[11px] font-medium tracking-[0.08em]"
                                    style={{ color: TESTIMONIAL_ACCENT }}
                                >
                                    {String((index + i) % count + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className="mt-3 font-canva text-[42px] italic leading-none"
                                    style={{ color: TESTIMONIAL_ACCENT }}
                                    aria-hidden="true"
                                >
                                    &ldquo;
                                </span>

                                <p className="mt-1 whitespace-pre-line font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[13px] italic leading-[1.5] text-white">
                                    {t.quote}
                                </p>

                                <div className="mt-auto pt-6">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                                        {t.name}
                                    </p>
                                    <p className="mt-1 font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[10px] uppercase tracking-[0.14em] text-white/80">
                                        {t.detail}
                                    </p>
                                </div>
                            </div>

                            <div className="relative min-h-[180px] md:min-h-0">
                                <img
                                    src={t.image}
                                    alt={t.alt}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex w-full items-center md:mt-12">
                    <span className="hidden h-px w-[140px] shrink-0 bg-white lg:block lg:w-[180px]" />

                    <div className="flex items-center md:ml-8 lg:ml-10">
                        {TESTIMONIAL_STATS.map((stat, i) => (
                            <div key={stat.value} className="flex items-center">
                                {i > 0 ? (
                                    <span className="mx-5 h-[52px] w-px shrink-0 bg-white md:mx-8 lg:mx-10" />
                                ) : null}
                                <div className="min-w-[118px] lg:min-w-[140px]">
                                    <p className="text-[32px] font-bold leading-none text-white lg:text-[40px]">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1.5 text-[12px] font-normal leading-[1.3] text-white lg:text-[13px]">
                                        {stat.line1}
                                        <br />
                                        {stat.line2}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ml-auto flex shrink-0 items-center gap-10">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous testimonials"
                            className="flex h-12 w-12 items-center justify-center bg-transparent p-0"
                        >
                            <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden="true">
                                <path
                                    d="M29.72 41.6 A 18.5 18.5 0 1 1 29.72 6.4"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M31.5 24H17.5m0 0 7.2-8.2M17.5 24l7.2 8.2"
                                    stroke="white"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next testimonials"
                            className="flex h-12 w-12 items-center justify-center bg-transparent p-0"
                        >
                            <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden="true">
                                <path
                                    d="M18.28 6.4 A 18.5 18.5 0 1 1 18.28 41.6"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M16.5 24h14m0 0-7.2-8.2M30.5 24l-7.2 8.2"
                                    stroke="white"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
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
            const previousBodyOverflow = document.body.style.overflow;

            const preloaderEl = document.querySelector("[data-preloader]");
            const introWords = gsap.utils.toArray("[data-intro-word]");
            const introBlur = prefersReduced
                ? 0
                : window.innerWidth < 768
                    ? 7
                    : 10;

            // ---------- HERO CONTENT TIMELINE (paused; started after intro) ----------
            const heroTl = gsap.timeline({
                paused: true,
                defaults: { ease: "power3.out" },
            });
            heroTl
                .fromTo(
                    "[data-hero-word]",
                    { y: "110%" },
                    { y: "0%", duration: 0.9, stagger: 0.1 }
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

            // ---------- INTRO PRELOADER TIMELINE ----------
            if (preloaderEl) {
                document.body.style.overflow = "hidden";

                gsap.set(preloaderEl, {
                    display: "flex",
                    autoAlpha: 1,
                    yPercent: 0,
                    force3D: true,
                    willChange: "transform",
                });
                gsap.set(introWords, {
                    opacity: 0,
                    y: 18,
                    filter: `blur(${introBlur}px)`,
                    force3D: true,
                    willChange: "transform, opacity, filter",
                });
                gsap.set("[data-intro-eyebrow]", { opacity: 0 });
                gsap.set("[data-intro-progress]", { opacity: 0 });

                const counter = { val: 0 };
                const countEl = preloaderEl.querySelector("[data-intro-count]");
                const fillEl = preloaderEl.querySelector("[data-intro-fill]");
                let lastCount = -1;

                const introTl = gsap.timeline({ paused: true });

                introTl
                    .to("[data-intro-eyebrow]", { opacity: 1, duration: 0.5, ease: "power2.out" })
                    .to(
                        introWords,
                        {
                            opacity: 1,
                            filter: "blur(0px)",
                            y: 0,
                            duration: 0.75,
                            ease: "power3.out",
                            stagger: 0.16,
                        },
                        "-=0.1"
                    )
                    .to(
                        counter,
                        {
                            val: 100,
                            duration: 1.6,
                            ease: "power1.inOut",
                            onUpdate: () => {
                                const nextCount = Math.round(counter.val);
                                if (countEl && nextCount !== lastCount) {
                                    countEl.textContent = String(nextCount).padStart(2, "0");
                                    lastCount = nextCount;
                                }
                            },
                        },
                        "<"
                    )
                    .to(
                        fillEl,
                        {
                            scaleX: 1,
                            duration: 1.6,
                            ease: "power1.inOut",
                            force3D: true,
                        },
                        "<"
                    )
                    .to("[data-intro-progress]", { opacity: 1, duration: 0.4 }, "<")
                    .to({}, { duration: 0.3 })
                    .to(
                        ["[data-intro-heading]", "[data-intro-eyebrow]", "[data-intro-progress]"],
                        {
                            y: -24,
                            opacity: 0,
                            duration: 0.5,
                            ease: "power2.in",
                            force3D: true,
                        }
                    )
                    .to(
                        preloaderEl,
                        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
                        "-=0.15"
                    )
                    // Start the existing hero reveal during the tail of the wipe.
                    .call(() => heroTl.play(0), [], "-=0.55")
                    .set([preloaderEl, ...introWords], { willChange: "auto" })
                    .set(preloaderEl, { display: "none" })
                    .call(() => {
                        document.body.style.overflow = previousBodyOverflow;
                    });

                introTl.play(0);
            } else {
                // No preloader element found: skip straight to hero content.
                heroTl.play(0);
            }

            const stackSections = gsap.utils.toArray("[data-sticky-stack]");
            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            ScrollTrigger.config({ ignoreMobileResize: true });

            const media = heroRef.current?.querySelector("[data-hero-media]");
            if (isMobile && media) {
                media.preload = "metadata";
                const freezeHeroVideo = () => {
                    media.pause();
                };
                if (media.readyState >= 2) freezeHeroVideo();
                else media.addEventListener("loadeddata", freezeHeroVideo, { once: true });
            }

            // A section taller than the viewport receives a negative sticky offset so all
            // of its content scrolls past natively before its bottom pins for the next card.
            const updateStickyOffsets = () => {
                stackSections.forEach((section) => {
                    const overflow = Math.max(0, section.offsetHeight - window.innerHeight);
                    gsap.set(section, { top: -overflow });
                });
            };

            if (!isMobile) {
                updateStickyOffsets();
                ScrollTrigger.addEventListener("refreshInit", updateStickyOffsets);

                // As each panel enters, its text resolves smoothly from soft focus to sharp.
                // DOM order plus stagger makes the focus travel naturally from top to bottom.
                stackSections.slice(1).forEach((section) => {
                    const entranceTrigger =
                        section.querySelector("[data-reveal-group]") ?? section;
                    const textItems = entranceTrigger.querySelectorAll(
                        "h2, h3, p, a, button"
                    );

                    gsap.set(textItems, { willChange: "filter" });

                    gsap.fromTo(
                        textItems,
                        {
                            filter: "blur(4px)",
                        },
                        {
                            filter: "blur(0px)",
                            stagger: 0.025,
                            ease: "none",
                            immediateRender: true,
                            scrollTrigger: {
                                trigger: entranceTrigger,
                                start: "top 90%",
                                end: "top 28%",
                                scrub: 1.2,
                            },
                        }
                    );
                });
            }

            if (prefersReduced) {
                return () => {
                    if (!isMobile) {
                        ScrollTrigger.removeEventListener("refreshInit", updateStickyOffsets);
                    }
                };
            }

            // Sticky-stack polish: native scrolling positions each section while
            // ScrollTrigger only scrubs the outgoing card's scale/shadow.
            if (!isMobile) {
                stackSections.forEach((section) => {
                    gsap.to(section, {
                        scale: 0.97,
                        boxShadow: "0 24px 70px rgba(0, 0, 0, 0.38)",
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                });

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
                if (isMobile) return;
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

            return () => {
                if (!isMobile) {
                    ScrollTrigger.removeEventListener("refreshInit", updateStickyOffsets);
                }
                document.body.style.overflow = previousBodyOverflow;
            };
        },
        { scope: rootRef }
    );

    return (
        <main
            ref={rootRef}
            className="font-body bg-[#050505] text-[#F5F3EE] overflow-x-clip"
        >
            <IntroPreloader />

            {/* 1. HERO — recognition */}
            <section
                id="home"
                ref={heroRef}
                data-sticky-stack
                className="sticky top-0 z-[1] min-h-[100svh] overflow-hidden bg-[#050505] text-[#F5F3EE]"
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
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.72)_100%)]" />

                {/* Content — lower-middle, inset from left like the reference */}
                <div className="relative z-10 flex min-h-[100svh] items-end justify-center px-6 pb-12 pt-28 sm:px-10 sm:pb-14 md:px-16 md:pb-16 lg:px-24 lg:pb-[72px]">
                    <div className="w-fit max-w-full -translate-x-6 text-left sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-16">
                        <div className="overflow-hidden">
                            <h1
                                data-hero-word
                                className="m-0 font-canva text-[clamp(26px,3.85vw,52px)] font-bold uppercase leading-[1.2] tracking-[-0.01em] text-white sm:whitespace-nowrap"
                            >
                                GYMS, DESIGNED TO PERFORM
                            </h1>
                        </div>

                        <p
                            data-hero-sub
                            className="m-0 mt-[16px] max-w-[28rem] font-['Arial_MT_Pro','Arial_MT',Arial,sans-serif] text-[clamp(14px,1.15vw,18px)] font-normal leading-[1.55] text-white"
                        >
                            Gym interiors designed around movement,
                            <br />
                            performance and people.
                        </p>

                        <div className="mt-[36px] flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-[18px]">
                            <a
                                ref={heroCtaRef}
                                data-hero-cta
                                href="#start-project"
                                className="inline-flex items-center justify-center border-2 border-transparent bg-[#A3684D] px-10 py-[14px] font-canva text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#B4785C]"
                            >
                                START YOUR PROJECT
                            </a>

                            <a
                                data-hero-cta
                                href="#projects"
                                className="inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-[14px] font-canva text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white/10"
                            >
                                VIEW OUR WORK
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Marquee words={MARQUEE_WORDS} />

            {/* 2. SELECTED GYM PROJECTS — proof */}
            <section
                id="projects"
                data-sticky-stack
                className="sticky top-0 z-[2] min-h-[100svh] overflow-hidden border-t border-[#F5F3EE]/5 bg-[#080808] pb-12 pt-10 md:pb-16 md:pt-12"
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

                {/* Projects Coverflow */}
                <div className="relative mt-2 md:mt-4">
                    <EdgeBleedProjectsColumn projects={PROJECTS} />
                </div>

                {/* Disclaimer / Placeholder Note */}
                <p className="mx-auto mt-6 max-w-7xl px-6 font-mono text-[9px] uppercase tracking-[0.2em] text-[#F5F3EE]/25 md:px-10">
                    Placeholder studies for layout — replace with confirmed gym projects
                </p>
            </section>

            {/* 3. WHY GYM INTERIORS — differentiation */}
            <section
                data-sticky-stack
                className="font-canva sticky top-0 z-[3] min-h-[100svh] overflow-hidden py-16 pb-28 text-[#1A1A1A] md:py-20 md:pb-40"
                style={{
                    fontFamily: '"Canva Sans", sans-serif',
                    background: "linear-gradient(180deg, #f2ede7 0%, #f2ede7 50%, #131313 100%)",
                }}
            >
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div
                        data-reveal-group
                        className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.15fr] lg:gap-16"
                    >
                        <div data-reveal>
                            <p className="font-canva text-[13px] font-medium uppercase tracking-[0.28em] text-[#1A1A1A] md:text-[14px]">
                                Why gym interiors
                            </p>
                            <h2 className="mt-5 font-canva text-[clamp(2.35rem,5.2vw,4.35rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em] text-[#A3684D]">
                                More than
                                <br />
                                just
                                <br />
                                aesthetics
                                <br />
                                alone.
                            </h2>
                        </div>
                        <div data-reveal>
                            <GymFloorPlan />
                        </div>
                    </div>

                    <div data-reveal>
                        <WhyGymCards />
                    </div>
                </div>
            </section>

            {/* ================= APPROACH ================= */}
            <section
                id="approach"
                data-sticky-stack
                className="font-canva sticky top-0 z-[5] min-h-[100svh] overflow-hidden border-t border-[#F5F3EE]/10 bg-[#0E0E0E] py-16 text-white md:py-24"
                style={{ fontFamily: '"Canva Sans", sans-serif' }}
            >
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div data-reveal-group>
                        <div data-reveal>
                            <p className="font-canva text-[18px] font-medium uppercase tracking-[0.32em] text-white md:text-[22px]">
                                The
                            </p>
                            <h2 className="mt-1.5 font-canva text-[clamp(2.5rem,6vw,4.75rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                                <span style={{ color: "#A06A50" }}>Sagrika</span>{" "}
                                <span className="text-white">Method</span>
                            </h2>
                            <p className="mt-6 font-canva text-[12px] font-medium uppercase tracking-[0.68em] text-[#FFFFFF] md:text-[13px]">
                                From insight to impact
                            </p>
                        </div>
                    </div>

                    <div data-reveal className="relative mt-16 md:mt-20">
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
                data-sticky-stack
                className="sticky top-0 z-[6] min-h-[100svh] overflow-hidden border-t border-[#F5F3EE]/5 bg-[#080808] py-20 text-[#F5F3EE] md:py-28"
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

            <CaseStudySpotlight />

            <RecognitionSection />

            <TestimonialsSection />

        </main>
    );
}