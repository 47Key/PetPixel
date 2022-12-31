import Head from 'next/head';
import { Inter } from '@next/font/google';
import { DashboardFooter, SideMenu, Library } from '../../containers';
import { useState, useEffect } from 'react';
import { delay } from '../../functions/functions';

const inter = Inter({ subsets: ['latin'] })

export default function Generator() {
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(true);

    useEffect(() => {
        // Implementation with token (Have not implemented tokens yet)
        // const token = localStorage.getItem('token');
        // if (token) {
        //     setIsLoggedIn(true);
        // } else {
        //     window.location.replace('/registration');
        // }
        if (!isLoggedIn) {
            delay(1000).then(() => {
                window.location.replace('/registration');
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>Pet AI</title>
                <meta name="description" content="Generate Fun Pictures for your Pets" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* <Navbar /> */}
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900">
                    <SideMenu />
                    <div className="relative flex flex-col flex-1 h-full overflow-y-auto overflow-x-hidden">
                        <div className="h-full w-full flex flex-col items-center justify-center mx-9 pb-16">
                            {isLoggedIn
                                ?
                                <>
                                    <h1 className="text-gray-200 my-2 font-bold text-xl">Add your Photos Here</h1>
                                    <Library />
                                </>
                                :
                                null
                            }
                        </div>
                    </div>
                    <DashboardFooter />
                </div>
            </main>
        </>
    );
}
