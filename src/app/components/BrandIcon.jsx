"use client";

import Link from "next/link";

export default function BrandIcon({ size = "normal" }) {
    return (
        <Link href="/">
            <div className="bg-brand-purple p-1 rounded-2xl cursor-pointer">
                <img
                    className={`w-10 h-10 ${size === "large" ? "w-16 h-16" : "w-10 h-10"}`}
                    src="/icons/nord_white.svg"
                    alt="Brand Icon"
                />
            </div>
        </Link>
    );
}