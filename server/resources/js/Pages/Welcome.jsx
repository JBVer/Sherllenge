import { Link } from '@inertiajs/react';
import logo from '../../../public/logoi2c.png'

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <div className='flex flex-col bg-grey_breeze h-[100vh] items-center justify-center'>
            <img
                className='h-[100px] mr-6'
                src={logo}
            />
            <div className='flex text-lg items-center gap-4 mt-8'>

                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-2 border-gray-400 rounded-md shadow mr-6"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 border-2 border-gray-400 rounded-md"
                        >
                            Login
                        </Link>
                        <Link
                            href={route('register')}
                            className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-2 border-gray-400 rounded-md shadow"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
