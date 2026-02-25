'use client'
import React from "react";

const ITEMS_PER_PAGE = 3;

const testimonials = [
    { id: 1, date: "Jun 10, 2026", text: '"PrebuiltUI has completely changed the way I write code. The components are clean, modern and production-ready."', name: "James Bond", role: "Amazon.com, Inc.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
    { id: 2, date: "Jun 10, 2026", text: '"The components are beautifully designed and incredibly easy to use. PrebuiltUI fits perfectly into my React workflow."', name: "Emily Rodriguez", role: "The Walt Disney Company", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" },
    { id: 3, date: "Jun 10, 2026", text: '"PrebuiltUI is like having a professional design system ready. It\'s become an essential part of my coding journey."', name: "Jack", role: "Facebook, Inc.", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
    { id: 4, date: "Jul 12, 2026", text: '"PrebuiltUI makes building polished interfaces effortless. The components feel thoughtfully designed and easy to customize."', name: "Sarah Williams", role: "Spotify", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" },
    { id: 5, date: "Jul 12, 2026", text: '"PrebuiltUI delivers a perfect balance between design and development. It helps me move faster and keep my UI consistent."', name: "Michael Chen", role: "Google LLC", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
    { id: 6, date: "Aug 5, 2026", text: '"Incredible library! The attention to detail in each component is outstanding. Saved our team weeks of design work."', name: "Priya Sharma", role: "Microsoft", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200" },
];

const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE); // 2

const Testimonial = () => {
    // Desktop: page index (0 to totalPages-1)
    const [page, setPage] = React.useState(0);
    // Mobile: individual item index (0 to testimonials.length-1)
    const [mobileIndex, setMobileIndex] = React.useState(0);
    // SSR-safe mobile detection
    const [isMobile, setIsMobile] = React.useState(false);

    // Detect screen size after mount (safe for Next.js SSR)
    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Desktop: navigate pages
    const handleNext = () => setPage((p) => (p + 1 >= totalPages ? 0 : p + 1));
    const handlePrev = () => setPage((p) => (p - 1 < 0 ? totalPages - 1 : p - 1));

    // Mobile: auto-slide every 3 seconds
    React.useEffect(() => {
        if (!isMobile) return;
        const timer = setInterval(() => {
            setMobileIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, [isMobile]);

    const visibleItems = isMobile
        ? [testimonials[mobileIndex]]
        : testimonials.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

    return (
        <section className='bg-black py-20 px-4 sm:px-6 lg:px-8 mt-10 '>
            <div className='w-full max-w-6xl mx-auto'>

                {/* ── Header ── */}
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
                    <div>
                        <h2 className='text-white font-semibold text-4xl md:text-[42px] leading-tight'>
                            Loved by{' '}
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                                10k+ People
                            </span>
                        </h2>
                        <p className='text-gray-400 text-sm leading-6 mt-3 max-w-sm'>
                            Every testimonial is a testament to the profound impact we strive to create every single day.
                        </p>
                    </div>

                    {/* Desktop arrows */}
                    <div className='hidden md:flex gap-2 shrink-0'>
                        <button
                            onClick={handlePrev}
                            aria-label="Previous page"
                            className='h-10 w-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:border-neutral-600 transition-all text-white'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next page"
                            className='h-10 w-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:border-neutral-600 transition-all text-white'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Cards Grid ── */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {visibleItems.map((item) => (
                        <div
                            key={item.id}
                            className='bg-neutral-900 hover:-translate-y-1 transition-all duration-300 border border-neutral-800 hover:border-neutral-600 rounded-2xl p-6 flex flex-col gap-5'
                        >
                            {/* Stars + Date */}
                            <div className='flex items-center justify-between'>
                                <div className="flex gap-0.5">
                                    {Array(5).fill(0).map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg"
                                            width="14" height="14" viewBox="0 0 24 24"
                                            fill="#FF8F20" stroke="none" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className='text-xs text-gray-500'>{item.date}</p>
                            </div>

                            {/* Review text */}
                            <p className='text-sm leading-6 text-gray-300 flex-1'>{item.text}</p>

                            {/* Author */}
                            <div className='flex items-center gap-3 pt-3 border-t border-neutral-800'>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className='w-11 h-11 rounded-full object-cover ring-2 ring-neutral-700'
                                />
                                <div>
                                    <p className='text-sm font-medium text-white'>{item.name}</p>
                                    <p className='text-xs text-gray-500'>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Mobile dots (per item) ── */}
                <div className="flex md:hidden items-center justify-center mt-6 gap-2">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setMobileIndex(i)}
                            className={`block rounded-full transition-all duration-300 cursor-pointer ${i === mobileIndex ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/25"
                                }`}
                        />
                    ))}
                </div>

                {/* ── Desktop dots (per page) ── */}
                <div className="hidden md:flex items-center justify-center mt-6 gap-2">
                    {Array(totalPages).fill(0).map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setPage(i)}
                            className={`block rounded-full transition-all duration-300 cursor-pointer ${i === page ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/25"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonial;