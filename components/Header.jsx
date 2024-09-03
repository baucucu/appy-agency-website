'use client'
import { useState, useEffect } from 'react'
import Link from "next/link"
import { CodeIcon } from 'lucide-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled
            ? 'h-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg'
            : 'h-16 bg-white dark:bg-gray-900'
            }`}>
            <div className="container mx-auto px-4 lg:px-6 h-full flex items-center justify-between">
                <Link className="flex items-center justify-center gap-2" href="#home">
                    <CodeIcon className="h-8 w-8 text-primary" />
                    <span className={`text-black dark:text-white font-bold transition-all duration-300 ease-in-out ${isScrolled
                        ? 'text-xl'
                        : 'text-2xl'
                        }`}>
                        appy.agency
                    </span>
                </Link>
                <nav className="flex gap-6">
                    <Link className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary" href="#services">
                        Services
                    </Link>
                    <Link className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary" href="#projects">
                        Projects
                    </Link>
                    <Link className="text-sm font-medium text-gray-600 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary" href="#contact">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}