import {Link, Head, router} from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import axios from "axios";

export default function Welcome({ auth }) {


    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-gray-100 selection:bg-red-500 selection:text-black">
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div>
                        <Link href={route('login')}>
                            <ApplicationLogo />
                        </Link>
                    </div>
                    <div className="m-6">
                        <h1 className="text-center text-6xl">elonsbirdie</h1>
                    </div>
                    {auth.user ? (
                        <div className="text-center">
                            <p className="text-gray-700 p-2">You are logged in.</p>
                            <div className="pt-2">
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-gray-400 hover:text-gray-600"
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="p-2">
                                <button
                                    onClick={()=>{
                                        confirm("Confirm Logout?")
                                        if (true) {
                                            axios.post('logout')
                                        }
                                    }}

                                    className="font-semibold text-red-300 hover:text-red-600"
                                >
                                    Log Out
                                </button>
                            </div>

                        </div>

                    ) : (
                        <>
                            <div className="text-center p-2">
                                <Link className="text-decoration-none text-gray-400 hover:text-gray-800" href={route('login')} >
                                    Log In
                                </Link>
                            </div>
                            <div className="text-center p-2">
                                <Link className="text-decoration-none text-gray-400 hover:text-gray-800" href={route('register')} >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
