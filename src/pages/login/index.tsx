import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Login, NewUser } from '../../containers';

const inter = Inter({ subsets: ['latin'] })

export default function Registration() {
    return (
        <>
            <Head>
                <title>Pet AI</title>
                <meta name="description" content="Generate Fun Pictures for your Pets" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="w-full h-full min-h-screen bg-gray-900 flex items-center justify-center">
                    <Login />
                </div>
            </main>
        </>
    );
}
