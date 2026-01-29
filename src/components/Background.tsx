"use client";

import { useEffect, useRef } from "react";

export function Background() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-[-10] overflow-hidden bg-black">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 translate-y-[10vh]"
            >
                <source src="/earth-animation.mp4" type="video/mp4" />
            </video>

            {/* Vignette for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)] z-[-4]" />

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 z-[-5]" />
        </div>
    );
}
