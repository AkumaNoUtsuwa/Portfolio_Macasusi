"use client";
import { useRouter } from "next/navigation";

export default function NavigationalBar() {
    const router = useRouter();

    return (
        <nav className="w-full bg-black bg-opacity-70 px-4 py-3 fixed top-0 left-0 z-50">
            <ul className="
                flex justify-right space-x-4
                text-yellow-100
                text-base sm:text-lg md:text-xl
            ">
                <li className="nav-link cursor-pointer" onClick={() => router.push("/")}>
                    Home
                </li>
                <li className="nav-link cursor-pointer" onClick={() => router.push("/About")}>
                    About
                </li>
                <li className="nav-link cursor-pointer" onClick={() => router.push("/Works")}>
                    Works
                </li>
                <li className="nav-link cursor-pointer" onClick={() => router.push("/Contact")}>
                    Contact
                </li>
            </ul>
        </nav>
    );
}