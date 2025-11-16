'use client';

import { Instagram } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
    return (
        <div className=" overflow-hidden  border-[#083a3f] text-white bg-[#053b40] h-14 my-auto">
            {/* background main color */}
            <div className=" max-w-7xl mx-auto flex  items-center justify-between h-full  ">
                {/* LEFT SIDE: email & hours */}
                <div className='bg-[#042A2F] h-full transform -skew-x-[30deg] relative ml-6 '>
                    <div className=' top-0 bottom-0'>
                        <p className='opacity-0 py-2 w-[600px]'>tuesday </p>


                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-5  px-3 py-2 md:px-6 absolute ml-3 ">
                    {/* email */}
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-5 text-[#27c36e]" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.4l-10 6.25L2 6.4V6zM2 8.2l9.4 5.88a2 2 0 002.2 0L23 8.2V18a2 2 0 01-2 2H3.99A1.99 1.99 0 012 18V8.2z" />
                        </svg>
                        <a href="mailto:info@example.com" className="font-semibold hover:text-[#27c36e]">
                            kasnyusa@gmail.com
                        </a>
                    </div>

                    <span className="hidden h-6 w-px bg-white/20 md:block" />

                    {/* hours */}
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#27c36e]" fill="currentColor">
                            <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 11h-3a1 1 0 010-2h2V7a1 1 0 012 0v5a1 1 0 01-1 1z" />
                        </svg>
                        <span className="font-semibold">
                            <span className="hidden sm:inline">Tuesday - Saturday</span>{' '}
                            8:00 Am - 5:00 Pm
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE: social links */}
                <div className="flex items-center gap-3 md:gap-4 mr-7">
                    <span className="hidden h-6 w-px bg-white/20 md:block" />
                    <span className="hidden text-sm font-bold md:block">Follow Us On :</span>

                    <div className="flex items-center gap-2 md:gap-3">


                        <SocialRound href="#" label="Facebook">
                            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                                <path d="M22 12.06A10 10 0 1010.75 22v-7H8v-3h2.75V9.5c0-2.7 1.6-4.2 4.06-4.2 1.18 0 2.41.21 2.41.21v2.65h-1.36c-1.34 0-1.76.83-1.76 1.68V12H17l-.5 3h-2.4v7A10 10 0 0022 12.06z" />
                            </svg>
                        </SocialRound>


                        <SocialRound href="#" label="LinkedIn">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M6.94 8.5v12h-4v-12h4zM4.94 3.5a2.31 2.31 0 110 4.62 2.31 2.31 0 010-4.62zM22 20.5h-4v-6.2c0-3.7-4-3.43-4 0v6.2h-4v-12h4v1.9c1.86-3.45 8-3.7 8 3.3v6.8z" />
                            </svg>
                        </SocialRound>



                        <SocialRound href="#" label="Instagram">
                            <Instagram className="h-5 w-5" />
                            {/* <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1111.5 16 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.75a1 1 0 11-1 1 1 1 0 011-1z" />
                                </svg> */}
                        </SocialRound>




                    </div>
                </div>
            </div>

            {/* LEFT skew shape */}
            {/* <div className="absolute top-0 left-[16px] h-full w-full bg-[#083a3f] transform -skew-x-[30deg]" /> */}

            {/* RIGHT skew shape */}
            {/* <div className="absolute top-0 right-[-35%] bottom-0 w-[9999px] bg-[#119d3e] transform skew-x-[33deg]" /> */}
        </div>
    );
}

/** reusable round green social buttons */
function SocialRound({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#119d3e] text-white transition hover:bg-[#27c36e]"
        >
            {children}
        </Link>
    );
}
