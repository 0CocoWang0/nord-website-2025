"use client"
import Link from "next/link";
export default function BrandIcon({ size = "normal" }) {

    return (
        <Link href={"/landing"}>
            <div className="bg-brand-purple p-1 rounded-2xl">
                <img className="w-10 h-10" src="/nord_white.svg" />
            </div>
        </Link>
    );
}