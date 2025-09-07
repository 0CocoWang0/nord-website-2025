"use client"
export default function BrandIcon({ size = "normal" }) {

    return (
        <div className="bg-brand-purple p-1 rounded-2xl">
            <img className="w-10 h-10" src="/nord_white.svg" />
        </div>
    );
}