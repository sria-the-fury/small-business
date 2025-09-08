'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { FiTool, FiDroplet, FiShield, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Footer from "@/app/components/Footer";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ServiceCard = ({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) => (
    <motion.div
        variants={fadeIn}
        className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100/10"
    >
        <div className=" flex text-blue-400 mb-4 justify-center">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{children}</p>
    </motion.div>
);


export default function HomePage() {
    return (
        <div className="bg-slate-900 text-white" style={{
            backgroundImage: `url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg')`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
        }}>
            {/* --- Hero Section --- */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center px-4"
            >
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                {/* The background image is now on the main div, so the hero image can be removed or kept as an overlay */}
                <div className="relative z-20">
                    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        PipeDoctor
                    </motion.h1>
                    <motion.p variants={fadeIn} className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
                        Your trusted experts for reliable, fast, and professional plumbing solutions in Vilnius.
                    </motion.p>
                    <motion.div variants={fadeIn}>
                        <Link
                            href="/contacts"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105"
                        >
                            Get a Free Quote
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- Services Section --- */}
            <section className="py-20 bg-black/20 backdrop-blur-md">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-3 text-white">Our Services</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                        We offer a wide range of plumbing services to meet your needs. No job is too big or too small.
                    </p>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-10"
                    >
                        <ServiceCard icon={<FiTool size={60} />} title="Emergency Repairs">
                            Available 24/7 for burst pipes, major leaks, and other urgent issues. We respond quickly to minimize damage.
                        </ServiceCard>
                        <ServiceCard icon={<FiDroplet size={60} />} title="Leak Detection">
                            Using the latest technology, we can find and fix hidden leaks in your walls, floors, and underground pipes.
                        </ServiceCard>
                        <ServiceCard icon={<FiShield size={60} />} title="Installations & Upgrades">
                            From new faucets and toilets to complete bathroom and kitchen plumbing installations, we do it all with precision.
                        </ServiceCard>
                    </motion.div>
                </div>
            </section>

            {/* --- Why Choose Us Section --- */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <Image
                            src="https://scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg"
                            alt="Professional plumber working"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                            width={2070}
                            height={1380}
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-white">Why PipeDoctor is Your Best Choice</motion.h2>
                        <motion.p variants={fadeIn} className="text-gray-300 mb-6">
                            We are dedicated to providing the highest quality service with a focus on customer satisfaction and lasting results.
                        </motion.p>
                        <ul className="space-y-4">
                            <motion.li variants={fadeIn} className="flex items-center text-lg text-gray-100"><FiCheckCircle className="text-blue-400 mr-3" /> Licensed & Insured Professionals</motion.li>
                            <motion.li variants={fadeIn} className="flex items-center text-lg text-gray-100"><FiCheckCircle className="text-blue-400 mr-3" /> Upfront & Honest Pricing</motion.li>
                            <motion.li variants={fadeIn} className="flex items-center text-lg text-gray-100"><FiCheckCircle className="text-blue-400 mr-3" /> 24/7 Emergency Availability</motion.li>
                            <motion.li variants={fadeIn} className="flex items-center text-lg text-gray-100"><FiCheckCircle className="text-blue-400 mr-3" /> Satisfaction Guaranteed</motion.li>
                        </ul>
                    </motion.div>
                </div>
            </section>


            {/* --- Final Footer Section --- */}
            <Footer/>

        </div>
    );
}

