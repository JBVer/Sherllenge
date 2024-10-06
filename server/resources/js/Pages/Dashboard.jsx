import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import mvp from "../../../public/MVP.mp4"
import React, { useRef, useEffect, useState } from 'react';

export default function Dashboard() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex justify-between items-center">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <button
                            className="rounded-md bg-slate-800 py-2 w-[75px] text-center text-white mr-6 "
                            data-ripple-light="true"
                            type="button"
                            onClick={togglePlayPause}
                        >
                            {!isPlaying ? "Play" : "Pause"}
                        </button>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <video
                            ref={videoRef}
                            className='w-full h-full'
                            id="mvp"
                            src={mvp}
                            type="video/mp4"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>


            </div>
        </AuthenticatedLayout>
    );
}
