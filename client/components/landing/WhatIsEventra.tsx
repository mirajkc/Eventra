"use client";

import TextType from "../TextType";
import { useTranslation } from "react-i18next";

export default function WhatIsEventra() {
    const { t } = useTranslation();
    const description = t("landing.whatIsEventra.description");

    return (
        <>
            {/* Desktop */}
            <div className="hidden md:flex justify-start w-full items-center min-h-screen">
                <TextType
                    text={[description]}
                    typingSpeed={15}
                    pauseDuration={500}
                    showCursor
                    cursorCharacter="▎"
                    deletingSpeed={100}
                    cursorBlinkDuration={0.5}
                    loop={false}
                    startOnVisible={true}
                    className="text-2xl md:text-4xl mb-6 tracking-tight"
                    style={{ maxWidth: "70%" }}
                />
            </div>

            {/* Mobile */}
            <div className="flex md:hidden justify-center w-full items-center min-h-screen">
                <TextType
                    text={[description]}
                    typingSpeed={15}
                    pauseDuration={500}
                    showCursor
                    cursorCharacter="▎"
                    deletingSpeed={100}
                    cursorBlinkDuration={0.5}
                    loop={false}
                    startOnVisible={true}
                    className="text-2xl text-center tracking-tight"
                    style={{ maxWidth: "90%" }}
                />
            </div>
        </>
    );
}
