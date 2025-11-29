'use client';

import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Project Nexus</h3>
                        <p className="text-sm text-gray-400">
                            Your one-stop shop for quality products. We deliver excellence with every purchase.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Shipping Info
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Track Order
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Project Nexus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
