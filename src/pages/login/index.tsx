import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Login, NewUser } from '../../containers';
import { NextPage } from 'next';
import { useSession, getProviders } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    providers: any
}

const LoginPage: NextPage<Props> = ({ providers }) => {
    const { data: sessionData } = useSession();
    console.log(sessionData);
    sessionData && window.location.replace('/generator');
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
                    <Login providers={providers} />
                </div>
            </main>
        </>
    );
}

export default LoginPage;

export async function getServerSideProps(context: any) {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    }
}