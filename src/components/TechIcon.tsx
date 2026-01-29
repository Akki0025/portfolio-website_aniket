import clsx from "clsx";

interface TechIconProps {
    label: string;
    className?: string;
}

export function TechIcon({ label, className }: TechIconProps) {
    return (
        <span
            className={clsx(
                "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-default",
                className
            )}
        >
            {label}
        </span>
    );
}
