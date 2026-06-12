import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-14 pb-6 px-6 mt-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* About */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-500">
                        Smart Book Borrowing Platform
                    </h2>
                    <p className="text-gray-200 mt-3 text-sm leading-relaxed text-justify">
                        A modern online platform that allows users to explore, borrow, and manage books easily with a fast and secure system.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/books" className="hover:text-blue-400">Books</Link></li>
                        <li><Link href="/categories" className="hover:text-blue-400">Categories</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link href="/help" className="hover:text-blue-400">Help Center</Link></li>
                        <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-300 text-sm">
                        Email: support@library.com
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                        Phone: +880 1234 567 890
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                        Chattogram, Bangladesh
                    </p>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Digital Book Borrowing Platform. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;