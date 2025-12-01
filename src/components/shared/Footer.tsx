"use client";

import Link from "next/link";
import { PhoneIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { HomeIcon, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
const usefulLeft = [
  { label: "Help Center", href: "/help" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "Achievement", href: "/achievement" },
  { label: "Blog", href: "/blog" },
];

const usefulRight = [
  { label: "Apartment Cleaning", href: "/services/apartment-cleaning" },
  { label: "One-Time Clean", href: "/services/one-time-clean" },
  { label: "Shield Glass", href: "/services/shield-glass" },
  { label: "Vacation Rental Cleaning", href: "/services/vacation-rental" },
];

const insta = [
  "./american-express.png",
  "./card.png",
  "./stripe.png",
  "./paypal.png",
  "./visa.png",
];

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <footer
      className={`relative overflow-hidden bg-[#052F35]  text-white bg-cover bg-center bg-no-repeat ${
        isHome ? "pt-5 lg:pt-32" : "pt-5"
      } `}
      style={{ backgroundImage: "url('/footer-bg-1-1.jpg')" }}
    >
      {/* <div className="absolute inset-0 bg-[#052F35]" /> */}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Brand / about */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center  text-white shadow-lg">
              {/* broom-ish logo */}
              {/* <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                                <path d="M9 11l8-8 2 2-8 8H9v-2zM3 21l6-6 2 2-6 6H3v-2z" />
                            </svg> */}
              <Image src={"/kasLogo.png"} width={44} height={44} alt="logo" />
            </span>
            {/* <span className="text-4xl font-extrabold">Poolito</span> */}
          </div>

          <p className="max-w-md text-lg leading-7 text-white/90">
            Provide detailed house cleaning & sanitizing services for valued
            clients.
          </p>

          <div className="flex items-start gap-4 mt-3">
            <div className="grid p-2 h-14 w-14 place-items-center rounded-xl border border-white/15 text-[#27c36e]">
              <HomeIcon className="h-8 w-8"></HomeIcon>
            </div>
            <div className="text-xl font-semibold tracking-wide">
              56-34 56th St, Mespath, NY 11378, USA
            </div>
          </div>

          <div className="mt-3 flex items-start gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-xl border border-white/15 text-[#27c36e]">
              <PhoneIcon className="h-8 w-8" />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-wide">
                +1 999 888 666
              </div>

              <div className="mt-1 font-bold text-[#27c36e]">Call 24/7</div>
            </div>
          </div>
        </div>

        {/* Useful Links (left) */}
        <div>
          <SectionTitle>Useful Links</SectionTitle>
          <ul className="mt-6 space-y-4">
            {usefulLeft.map((i) => (
              <FooterLink key={i.label} href={i.href}>
                {i.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Useful Links (right list) */}
        <div className="md:col-start-2 lg:col-start-auto">
          <div className="invisible block md:visible">
            <SectionTitle>&nbsp;</SectionTitle>
          </div>
          <ul className="mt-6 space-y-4">
            {usefulRight.map((i) => (
              <FooterLink key={i.label} href={i.href}>
                {i.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Payment*/}
        <div>
          <SectionTitle>Payment</SectionTitle>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {insta.map((src, i) => (
              <Link key={i} href="#" className="group block">
                <div className="rounded-xl   transition group-hover:scale-[1.02] border-2 border-[#27c36e] px-1">
                  <img
                    src={src}
                    alt={`Instagram ${i + 1}`}
                    className="h-12 w-full rounded-lg object-cover md:h-12 lg:h-14 "
                  />
                </div>
              </Link>
            ))}
          </div>
          {/* social */}
          <div className="mt-8 flex items-center gap-3">
            <span className="font-semibold">Follow On :</span>
            <div className="flex gap-3">
              <Social href="#" label="Facebook" />
              <Social href="#" label="LinkedIn" />
              <Social href="#" label="Instagram" />
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#07353a] h-16">
        <div className="absolute z-40 left-1 lg:left-7 max-w-7xl mx-auto h-16 w-full flex items-center px-4 md:px-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 text-white/90">
            {/* LEFT SIDE */}
            <p className="text-md lg:text-md font-normal lg:font-semibold flex items-center">
              © Copyright {new Date().getFullYear()}
              <span className="text-[#07353a] hover:text-white ml-1">
                KAS.com
              </span>
              . All rights reserved.
            </p>
            <div className="w-full flex justify-center">
              <div className="px-6 py-2">
                <p className="text-white font-normal text-sm flex items-center gap-2">
                  Made &nbsp; By{" "}
                  <Link
                    href="https://www.deelko.com"
                    className="font-bold tracking-wide text-[#27c36e]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deelko
                  </Link>
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-start lg:justify-end items-center gap-4">
              <Link href="/privacyPolicy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span className="opacity-30">|</span>
              <Link href="/termsCondition" className="hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* GREEN ANGLED SHAPE */}
        <div className="z-20 absolute top-0 -left-6 bottom-0 w-[330px] lg:w-[500px] bg-[#119d3e] transform skew-x-[33deg]" />
      </div>
    </footer>
  );
}

/* ---------- small helpers ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-3xl font-extrabold">{children}</h3>
      {/* green line + long faint line */}
      <div className="mt-4 flex items-center">
        <span className="h-1 w-28 rounded-full bg-[#27c36e]" />
        <span className="ml-3 h-[2px] flex-1 rounded bg-white/15" />
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-start gap-3 text-lg font-semibold text-white/90 hover:text-white"
      >
        <ChevronDoubleRightIcon className="mt-1 h-4 w-4 flex-none text-[#27c36e] transition group-hover:translate-x-2" />
        <span>{children}</span>
      </Link>
    </li>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  const icon =
    label === "Facebook" ? (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M22 12.06A10 10 0 1010.75 22v-7H8v-3h2.75V9.5c0-2.7 1.6-4.2 4.06-4.2 1.18 0 2.41.21 2.41.21v2.65h-1.36c-1.34 0-1.76.83-1.76 1.68V12H17l-.5 3h-2.4v7A10 10 0 0022 12.06z" />
      </svg>
    ) : label === "LinkedIn" ? (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.94 8.5v12h-4v-12h4zM4.94 3.5a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM22 20.5h-4v-6.2c0-3.7-4-3.43-4 0v6.2h-4v-12h4v1.9c1.86-3.45 8-3.7 8 3.3v6.8z" />
      </svg>
    ) : (
      <Instagram className="h-5 w-5"></Instagram>
    );

  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-[#119d3e] text-white shadow-md transition hover:bg-[#27c36e]"
    >
      {icon}
    </Link>
  );
}
