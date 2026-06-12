"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import imageOne from "@/assets/hero-1.jpeg";
import imageTwo from "@/assets/hero-2.jpeg";
import imageThree from "@/assets/hero-3.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import Image from "next/image";
import { FaBookReader } from "react-icons/fa";

const slides = [
    {
        id: 1,
        title: "Discover Thousands of Books",
        desc: "Explore modern digital library with smart borrowing system.",
        image: imageOne,
    },
    {
        id: 2,
        title: "Read Anytime, Anywhere",
        desc: "Access your favorite books from any device instantly.",
        image: imageTwo,
    },
    {
        id: 3,
        title: "Build Your Knowledge",
        desc: "Grow your skills with curated book collections.",
        image: imageThree,
    },
];

const Banner = () => {
    return (

        <div className="relative bg-slate-200 pt-12 pb-8 mt-6 mx-6 mb-6 border-4 border-slate-200 shadow-sm rounded-2xl">

            {/* Soft background glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-2xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-2xl"></div>

            <div className="max-w-6xl mx-auto px-4">

                <Swiper
                    modules={[Autoplay, EffectCreative, Pagination]}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-120%", 0, -500],
                            rotate: [0, 0, -10],
                        },
                        next: {
                            shadow: true,
                            translate: ["120%", 0, -500],
                            rotate: [0, 0, 10],
                        },
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="rounded-2xl"
                >

                    {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="grid md:grid-cols-2 items-center mb-10 bg-white rounded-2xl overflow-hidden p-3">

                                {/* Left Content */}
                                <div className="p-10 md:p-14 sm:mx-auto">
                                    <span className="flex items-center gap-2 justify-center text-md px-3 py-2 bg-blue-100 text-blue-600 rounded-full w-1/2">
                                        <FaBookReader></FaBookReader> Digital Library
                                    </span>

                                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-5">
                                        {item.title}
                                    </h2>

                                    <p className="text-slate-500 text-lg mt-4">
                                        {item.desc}
                                    </p>

                                    <h2 className="text-3xl font-bold pt-2 bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">Find Your Next Read</h2>

                                    <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">
                                        Browse Now
                                    </button>
                                </div>

                                {/* Right Image */}
                                <div className="bg-slate-50 flex items-center justify-center p-6 rounded-3xl mx-4 my-2">
                                    <Image
                                        className="w-130 h-60 md:w-[320px] hover:scale-105 transition duration-300 border border-white rounded-xl"
                                        src={item.image}
                                        alt="Banner Image"
                                        width={800}
                                        height={800}
                                    >
                                    </Image>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </div>

    );
};

export default Banner;