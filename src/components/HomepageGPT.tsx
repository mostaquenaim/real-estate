'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeGPT() {
    return (
        <main className="bg-gradient-to-br from-green-100 via-white to-green-50 text-gray-900">
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-24">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-bold text-green-800"
                >
                    Welcome to Banglar Choya Model City Ltd.
                </motion.h1>
                <p className="mt-4 text-xl text-green-700 max-w-2xl">
                    Your trusted partner in land, plot, and flat sales across Dhaka.
                </p>
                <Button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition-transform hover:scale-105">
                    Explore Our Projects
                </Button>
            </section>

            <section className="bg-white py-20 px-4 md:px-20 text-center">
                <h2 className="text-4xl font-semibold text-green-900 mb-12">Our Projects</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-green-50 shadow-lg p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold text-green-800">Nawabganj, Koliail - Dhaka-01</h3>
                        <p className="mt-2 text-green-700">675 Bigha total area</p>
                        <p className="text-sm mt-1">Customizable land sale: ৩ - ১০ শতাংশ</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-green-50 shadow-lg p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold text-green-800">Borakoir, Dhamrai - Dhaka-20</h3>
                        <p className="mt-2 text-green-700">425 Bigha total area</p>
                        <p className="text-sm mt-1">Customizable land sale: ৩ - ১০ শতাংশ</p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-green-100 py-20 px-4 md:px-20">
                <h2 className="text-4xl font-semibold text-green-900 text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {["Chairman", "MD", "Directors", "CEO", "Engineers", "Accountant", "Executives", "HR & Admin", "Front Desk", "Office Staffs"].map((role) => (
                        <div key={role} className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition duration-300">
                            <div className="w-20 h-20 mx-auto bg-green-200 rounded-full mb-4"></div>
                            <p className="text-green-800 font-medium">{role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-20 px-4 md:px-20 text-center">
                <h2 className="text-4xl font-semibold text-green-900 mb-12">Contact Us</h2>
                <div className="flex flex-col md:flex-row justify-center gap-12 text-left text-green-700">
                    <div className="space-y-4">
                        <p><strong>Md. Nayan Mallik</strong> – Director (Sales & Marketing)</p>
                        <p className="flex items-center gap-2"><Phone size={18} /> +88 01337-938314</p>
                        <p>Email: mdnayanmalik@gmail.com</p>
                    </div>
                    <div className="space-y-4">
                        <p className="flex items-start gap-2"><MapPin size={18} /> Head Office: House # 25, Level # A-1, Road # 47, Gulshan-02, Dhaka-1212</p>
                        <p>Established: 20th October 2023</p>
                    </div>
                </div>
            </section>

            <footer className="bg-green-900 text-white text-center py-6">
                &copy; {new Date().getFullYear()} Banglar Choya Model City Ltd. All rights reserved.
            </footer>
        </main>
    );
}
