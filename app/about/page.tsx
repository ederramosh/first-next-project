import { Metadata } from "next";

//This will help you
export const metadata: Metadata = {
 title: 'About Title',
 description: 'About Description',
 keywords: ['About Page', " Eder's Information"]
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}