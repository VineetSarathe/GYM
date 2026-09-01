import logoMark from "../assets/logo.svg";

export default function Logo({ compact = false }) {
    return (
        <span className="inline-flex items-center gap-2.5 min-w-0">
            <img
                src={logoMark}
                alt=""
                className="h-8 w-8 md:h-9 md:w-9 shrink-0"
            />
            <span
                className={`font-display tracking-[0.08em] text-[#F5F3EE] leading-none whitespace-nowrap ${
                    compact
                        ? "text-lg md:text-xl"
                        : "text-[15px] sm:text-lg md:text-[22px]"
                }`}
            >
                DESIGN DIARIES
            </span>
        </span>
    );
}