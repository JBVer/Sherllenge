import { Link } from '@inertiajs/react';
import logo from '../../../public/logoi2c.png'

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <div className='flex flex-col bg-grey_breeze h-[100vh] items-center justify-center'>
            <img
                className='mb-12 h-[150px]'
                src={logo}
            />
            <p className='text-3xl max-w-[60vw] text-center font-bold'>
                Hello Roy and Sherman ! Please, take some time to register or login within this amazing app!
            </p>
            <div className='flex flex-col mt-6 text-3xl items-center p-6'>

                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
