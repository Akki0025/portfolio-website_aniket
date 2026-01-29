import { data } from "../data";

export function Footer() {
    return (
        <footer className="w-full relative z-20 -mt-20 pb-8 pointer-events-none">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-zinc-600 text-xs font-medium">
                        © 2026 Aniket Kumar
                    </p>
                    <p className="text-zinc-700 text-[10px] uppercase tracking-wider mt-1">
                        Frontend Developer • Crafting Digital Experiences
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <p className="text-zinc-700 text-[10px] font-light tracking-wide">
                        BUILT WITH CLARITY AND PURPOSE
                    </p>
                </div>
            </div>
        </footer>
    );
}
