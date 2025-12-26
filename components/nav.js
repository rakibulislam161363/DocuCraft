"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveNav({path, children}){
    const pathName = usePathname();
    const active = pathName === path;
    return (
        <Link className={active ? "text-blue-500": ""} href={path}>{children}</Link>
    );
}