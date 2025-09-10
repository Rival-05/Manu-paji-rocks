import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
    const Links = [
        {href: '/founders', title: 'Founders'},
        { href: '/guide', title: 'Guide' },
        { href: '/pricing', title: 'Pricing' },
        { href: '/login', title: 'Log In' }
    ];
                
    return (
        <div className="flex w-full items-center justify-between ">
            <Link href="/">
                <Image
                    draggable={false}
                    loading="lazy"
                    src="/logo.svg"
                    alt="Logo"
                    width={70}
                    height={70}
                />
            </Link>
            <div className="flex items-center gap-6">
                {Links.map((link,index:any) => (
                    <Link key={index} href ={link.href} className="font-medium text-sm text-neutral-800 hover:text-neutral-500 transition duration-300 tracking-wide">
                        {link.title}
                    </Link>
                ))}
                <button className="bg-[#2579F4] text-white py-2 px-4 rounded-lg font-medium text-sm shadow-lg text-shadow-md cursor-pointer hover:bg-[#2560F5] transition duration-300">Get Started</button>
            </div>
        </div>
    );
};
