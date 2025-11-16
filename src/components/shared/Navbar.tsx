"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

type NavChild = { label: string; href: string; };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Our Story', href: '/about-us/our-story' },
      { label: 'Team', href: '/about-us/team' },
      { label: 'Careers', href: '/about-us/careers' },
    ],
  },
  {
    label: 'Products',
    href: '/Products',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  { label: 'Contact', href: '/contact' },
];

type User = { name: string; email: string; avatarUrl?: string };

export default function Navbar({
  brand = 'KAS',
  cartCount = 3,
  user = { name: 'John Doe', email: 'john@example.com' },
  onLogout,
}: {
  brand?: string;
  cartCount?: number;
  user?: User;
  onLogout?: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<Record<number, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll state to change navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); // Change navbar background when scrolled
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <header className={`bg-white ${scrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-100'} sticky top-0 z-50 transition-all`}>
      <nav className="mx-auto flex max-w-7xl items-stretch justify-between px-3 md:pl-2 mr-5">
        {/* Left brand with diagonal slice */}
        <div className="relative flex items-center pr-10">
          <Link
            href="/"
            className=" z-[1] flex min-h-[72px] items-center gap-2  px-4 text-white md:px-5"
          >
            <img src="./kasLogo.png" alt="KAS"  className='size-14'/>
          </Link>
          <div className=" absolute top-0 right-[-41%] bottom-0 w-[9999px] bg-[#27c36e] transform skew-x-[41deg]" />
          <div className=" absolute top-0 right-[-35%] bottom-0 w-[9999px] bg-[#119d3e] transform skew-x-[33deg]" />
        </div>

        {/* Desktop menu with submenus */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-2 xl:gap-4">
            {NAV_ITEMS.map((item, idx) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              return (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-[15px] font-extrabold uppercase tracking-wide text-[#0f3036] hover:text-[#119d3e]"
                  >
                    {item.label}
                    {hasChildren && <ChevronDownIcon className="h-4 w-4 opacity-70 group-hover:opacity-100" />}
                  </Link>

                  {/* dropdown */}
                  {hasChildren && (
                    <div
                      className="invisible absolute left-0 z-20 mt-2 w-56 rounded-xl border border-slate-100 bg-white opacity-0 shadow-lg ring-1 ring-black/5 transition-all group-hover:visible group-hover:opacity-100"
                      role="menu"
                    >
                      <ul className="py-2">
                        {item.children!.map((c) => (
                          <li key={c.label}>
                            <Link
                              href={c.href}
                              className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                              role="menuitem"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right tools */}
        <div className="flex items-center gap-3 md:gap-4">
          <span className="hidden h-7 w-px bg-slate-200 lg:block" />
          <button
            aria-label="Search"
            className="hidden rounded p-2 text-[#0f3036] hover:text-[#119d3e] lg:block"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <Link href="/cart" className="relative rounded p-2 text-[#0f3036] hover:text-[#119d3e]">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full border-2 border-white bg-[#119d3e] px-1.5 text-[11px] font-bold leading-5 text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="block rounded-full border-2 border-[#119d3e]"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
            >
              <img
                src={user.avatarUrl || `https://i.pravatar.cc/100?u=${encodeURIComponent(user.email)}`}
                alt="Profile"
                className="h-11 w-11 rounded-full object-cover"
              />
            </button>
            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-slate-100 bg-white shadow-lg ring-1 ring-black/5"
              >
                <div className="px-4 py-3">
                  <p className="truncate text-sm font-bold text-slate-800">{user.name}</p>
                  <p className="truncate text-xs text-slate-500">{user.email}</p>
                </div>
                <div className="my-1 h-px bg-slate-100" />
                <ul className="py-1">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        onLogout?.();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* mobile toggler */}
          <button
            className="inline-flex items-center rounded p-2 ring-1 ring-slate-200 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu with submenus as accordions */}
      {mobileOpen && (
        <div className="border-t border-slate-200 lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-3 py-3 md:px-6">
            {NAV_ITEMS.map((item, idx) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              return (
                <li key={item.label}>
                  {!hasChildren ? (
                    <Link
                      href={item.href}
                      className="block rounded px-3 py-2 text-[15px] font-extrabold uppercase tracking-wide text-[#0f3036] hover:bg-slate-50 hover:text-[#119d3e]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="rounded">
                      <button
                        className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-[15px] font-extrabold uppercase tracking-wide text-[#0f3036] hover:bg-slate-50 hover:text-[#119d3e]"
                        onClick={() =>
                          setMobileSub((s) => ({ ...s, [idx]: !s[idx] }))}
                        aria-expanded={!!mobileSub[idx]}
                        aria-controls={`submenu-${idx}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${mobileSub[idx] ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileSub[idx] && (
                        <ul id={`submenu-${idx}`} className="mb-2 ml-2 space-y-1 border-l border-slate-200 pl-3">
                          {item.children!.map((c) => (
                            <li key={c.label}>
                              <Link
                                href={c.href}
                                className="block rounded px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                                onClick={() => setMobileOpen(false)}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
