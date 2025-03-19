import { useEffect, useState } from "react";
export default function UseIsDesktop() {
    const mediaQueryDesktop = window.matchMedia("(min-width: 769px)");
    const [isDesktop, setIsDesktop] = useState(mediaQueryDesktop.matches);
    const changeMediaQueryHandler = (e) => {
        setIsDesktop(e.matches);
    };
    useEffect(() => {
        mediaQueryDesktop.addEventListener("change", changeMediaQueryHandler);
        return () => {
            mediaQueryDesktop.removeEventListener("change", changeMediaQueryHandler);
        };
    }, []);
    return {
        isDesktop
    };
}
