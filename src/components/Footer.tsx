import React from 'react'
import { personalData } from '../data';

const Footer = () => {
    return (
        <footer className="w-full border-t border-on-surface/10 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

                {/* Brand Section */}
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h2 className="font-serif italic font-extrabold text-4xl md:text-6xl text-on-surface leading-none opacity-40 tracking-tight select-none">
                        Nitish Bharti
                    </h2>

                    <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/70 max-w-sm">
                        © {new Date().getFullYear()} Nitish Bharti. Built for modular, clean, high-performance UI systems.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 font-mono text-xs">
                    <a
                        href={personalData.contacts.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface/80 hover:text-on-surface transition-colors uppercase tracking-[0.25em] font-bold"
                    >
                        GitHub
                    </a>

                    <a
                        href={personalData.contacts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface/80 hover:text-on-surface transition-colors uppercase tracking-[0.25em] font-bold"
                    >
                        LinkedIn
                    </a>

                    <a
                        href={personalData.contacts.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface/80 hover:text-on-surface transition-colors uppercase tracking-[0.25em] font-bold"
                    >
                        Instagram
                    </a>


                    <a
                        href={personalData.contacts.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface/80 hover:text-on-surface transition-colors uppercase tracking-[0.25em] font-bold"
                    >
                        X
                    </a>

                    <a
                        href={`mailto:${personalData.contacts.email}`}
                        className="text-primary hover:opacity-80 transition-opacity uppercase tracking-[0.25em] font-bold"
                    >
                        Email
                    </a>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-3 left-0 w-full flex justify-center">
                    <span className="text-[10px] font-mono text-on-surface-variant/50 tracking-widest">
                        Designed with focus on clarity, speed, and structure
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
