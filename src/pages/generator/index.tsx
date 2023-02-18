import Head from 'next/head';
import { Inter } from '@next/font/google';
import { SideMenu, Library } from '../../containers';
import { NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { DelayRender, LoadingSpinner, Modal, FileUpload, Welcome } from '../../components';
import { useState } from 'react';
import { Create } from '../../containers/create';

const inter = Inter({ subsets: ['latin'] });

const Generator: NextPage = () => {
    const { data: sessionData } = useSession();
    const [openWelcomeModal, setOpenWelcomeModal] = useState(true);
    const [openUploadModal, setOpenUploadModal] = useState(false);
    const [modal, setModal] = useState({
        welcome: true,
        upload: false,
        create: false
    });
    const [createModal, setCreateModal] = useState(false);
    console.log(sessionData);

    function openFileInput() {
        setOpenUploadModal(true);
    }

    return (
        <>
            <Head>
                <title>Pet AI</title>
                <meta name="description" content="Generate Fun Pictures for your Pets" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="flex flex-row w-screen h-screen items-center justify-center">
                    <DelayRender time={2000} loading={<LoadingSpinner />}>
                        {modal.welcome && <Modal type="welcome" id="welcome" component={<Welcome />} openState={[modal, setModal]} />}
                        {modal.upload && <Modal type="upload" id="file-input" component={<FileUpload />} openState={[modal, setModal]} />}
                        {modal.create && <Modal type="create" id="create" component={<Create />} openState={[modal, setModal]} />}
                        <SideMenu openState={[modal, setModal]} />
                        <div className="h-full overflow-x-hidden">
                            <div className="h-full w-full flex flex-col items-center justify-start mx-10 pb-16">
                                <h1 className="text-white my-2 pr-20 font-bold text-2xl">Photo Library</h1>
                                <Library openState={[modal, setModal]} />
                            </div>
                        </div>
                    </DelayRender>
                </div>
            </main>
        </>
    );
}

export default Generator;

export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    }
}
