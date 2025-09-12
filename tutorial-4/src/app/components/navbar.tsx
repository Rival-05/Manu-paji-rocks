"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

export const Navbar = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div className="md:shadow-input relative mx-auto flex w-full max-w-4xl items-center justify-between border-b border-neutral-500 p-2 md:mt-2 md:rounded-lg md:border">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="Logo"
          width={30}
          height={30}
        />

        <div className="mr-4 hidden gap-4 text-sm font-medium text-neutral-500 md:flex">
          {links.map((link, index: any) => (
            <Link
              href={link.href}
              key={index}
              className="hover:text-neutral-900"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <IconMenu2 />
        </button>
      </div>
      {open && (
        <div className="shadow-input absolute inset-x-0 top-15 mx-auto flex max-w-[60%] flex-col gap-2 rounded-md bg-white md:hidden">
          <div className="flex flex-col items-start gap-4 p-4 text-sm text-neutral-500">
            {links.map((link, index: any) => (
              <Link
                href={link.href}
                key={index}
                className="hover:text-neutral-900"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
