import Head from 'next/head';
import { Inter } from '@next/font/google';
import { NewUser } from '../../containers';
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] });

const RegistrationPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pet AI</title>
                <meta name="description" content="Generate Fun Pictures for your Pets" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="w-full h-screen min-h-screen bg-gray-900 flex items-center justify-center">
                    <NewUser />
                </div>
            </main>
        </>
    );
}

export default RegistrationPage;
