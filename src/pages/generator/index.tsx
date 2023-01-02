import Head from 'next/head';
import { Inter } from '@next/font/google';
import { SideMenu, Library, Login } from '../../containers';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { DelayRender, LoadingSpinner } from '../../components';
import { signIn, getProviders } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    providers: any
}

const Generator: NextPage<Props> = ({ providers }) => {
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>Pet AI</title>
                <meta name="description" content="Generate Fun Pictures for your Pets" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="w-screen h-screen">
                    <DelayRender time={2000} loading={<LoadingSpinner />}>
                        <div className="hidden"></div>
                        {session
                            ?
                            <>
                                <SideMenu />
                                <div className="h-full overflow-y-auto overflow-x-hidden">
                                    <div className="h-full w-full flex flex-col items-center justify-start mx-10 pb-16 bg-green-200/90">
                                        <h1 className="text-white my-2 font-bold text-xl">Add your Photos Here</h1>
                                        <Library />
                                    </div>
                                </div>
                            </>
                            :
                            <Login providers={providers} />
                        }
                    </DelayRender>
                </div>
            </main>
        </>
    );
}

export default Generator;

export async function getServerSideProps(context: any) {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    }
}
