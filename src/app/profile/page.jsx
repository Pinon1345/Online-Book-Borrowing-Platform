"use client";

import UpdateUserModal from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {

    const userData = authClient.useSession()
    const user = userData.data?.user

    console.log("Profile User Data", user);

    // Animate CSS

    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);

            setTimeout(() => {
                setShow(true);
            }, 150);
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='container w-11/12 mx-auto mt-12 mb-12 p-4 rounded-3xl bg-white shadow-lg shadow-slate-200 border border-slate-200 overflow-hidden'>
            <div className='flex items-center justify-center flex-col gap-2 pb-4'>

                <div className="p-4 flex justify-center mb-2">
                    {user?.image ? (<Image
                        src={user?.image}
                        alt={user?.name}
                        width={1000}
                        height={600}
                        className="w-full max-w-225 h-125 object-cover rounded-2xl border-4 shadow-lg shadow-gray-300 transition duration-500 hover:scale-105"
                    />) :
                        (
                            user?.name?.charAt(0).toUpperCase()
                        )
                    }
                </div>

                <h2 className={`${show ? "text-4xl mb-4 text-blue-600 font-bold animate__animated animate__rubberBand animate__delay" : ""} `}>{user?.name}</h2>


                <UpdateUserModal></UpdateUserModal>

            </div>


        </div>
    );
};

export default ProfilePage;