import clsx from "clsx";

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
    return (
        <div className={clsx("mb-12 md:mb-20", className)}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                {title}
            </h2>
            {description && (
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light">
                    {description}
                </p>
            )}
            <div className="h-1 w-20 bg-blue-500 rounded-full mt-4 bg-opacity-50" />
        </div>
    );
}
