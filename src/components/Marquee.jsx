import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    return (

        <div className="w-11/12 mx-auto mt-8 mb-10">
            <div className="bg-slate-100 border-4 border-slate-200 shadow-lg px-4 py-3 rounded-xl flex flex-col md:flex-row items-center gap-4">

                <button className="bg-blue-600 text-white px-6 py-1 rounded-2xl font-bold text-lg hover:bg-blue-700 transition duration-300">
                    New Arrivals
                </button>

                <Marquee pauseOnHover={true} speed={45} gradient={false}>
                    <span className="mx-10 font-semibold text-lg text-slate-700">

                        <span className='text-amber-400 mr-4'>📖 New Arrivals: Atomic Habits | The Psychology of Money | Rich Dad Poor Dad | Deep Work |</span>
                        <span className='text-indigo-600 mr-4'>🎉 Special Discount: Get 20% OFF Premium Memberships for a limited time! |</span>
                        📚 Student Members can borrow up to 5 books for free every month! |
                        ⭐ Featured Collection: Explore our bestselling Tech, Science, Story, and Self-Development books! |
                        🚀 Join our Digital Library and enjoy 24/7 access to thousands of books! |
                        🎁 Refer a friend and earn exclusive reading rewards and bonuses! |
                        📅 Fresh book recommendations are updated every Friday! |
                        🏆 Discover award-winning novels and internationally acclaimed bestsellers! |
                        📖 Trending This Week: Explore the most borrowed books by our readers! |
                        💡 Expand your knowledge with our curated Business and Entrepreneurship collection! |
                        🔬 Dive into the latest Science and Technology books for curious minds! |
                        <span className='text-slate-600 mr-4'>🌍 Explore world literature from renowned authors across different cultures! |</span>
                        📚 Classic masterpieces are available for readers of all ages! |
                        🎓 Students can access educational resources to support their studies! |
                        👨‍👩‍👧 Family-friendly books and children stories are waiting for young readers! |
                        📖 New Arrivals: Atomic Habits, The Psychology of Money, Rich Dad Poor Dad, and Deep Work are now available! |
                        🌟 Staff Picks: Handpicked books recommended by our library team! |
                        📕 Build a daily reading habit with our self-improvement collection! |
                        <span className='text-violet-600 mr-4'>💻 Discover programming, AI, and software development books for future innovators! |</span>
                        🧠 Improve critical thinking with philosophy and psychology bestsellers! |
                        📈 Learn investing, finance, and personal wealth management from top authors! |
                        ✈️ Travel through history and culture with our extensive history collection! |
                        🔖 Save your favorite titles and create your personal reading wishlist! |
                        <span className='text-green-600 mr-4'> ⏰ Borrow books easily and renew eligible titles online anytime! |</span>
                        🎯 Explore books tailored to your interests and reading preferences! |
                        📖 New titles are added to our collection every week! |
                        <span className='text-purple-600 mr-4'>🏅 Challenge yourself to read more books and reach your yearly reading goals! |</span>
                        💬 Join our growing community of passionate readers and lifelong learners! |
                        🌱 Start your personal growth journey with inspiring biographies and memoirs! |
                        🔍 Easily search by title, author, or category to find your next great read! |
                        📦 Fast and seamless borrowing makes reading easier than ever! |
                        ❤️ Reading for just 20 minutes a day can help build lifelong learning habits! |
                        🌟 Thank you for being part of our digital library community—happy reading! |

                    </span>
                </Marquee>

            </div>
        </div>
    );
};

export default MarqueePage;