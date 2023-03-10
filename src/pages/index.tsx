import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Inter } from '@next/font/google';
import { signIn, signOut, useSession } from "next-auth/react";
import { FAQ, Featured, Hero, Navbar, Pricing } from '../containers';
import { trpc } from "../utils/trpc";


const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Pet AI</title>
        <meta name="description" content="Generate Fun Pictures for your Pets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Pricing />
        <FAQ />
        <AuthShowcase />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
