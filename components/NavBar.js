import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function NavBar() {
  const [session, loading] = useSession();
  return (
    <nav className="flex justify-between items-center py-4">
      <p className="text-2xl font-bold text-grey-800">test</p>
      <div className="flex">
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
        <a
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
          href="/api/logout"
        >
          LogOut
        </a>
        <a
          className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
          href="/api/login"
        >
          LogIn
        </a>
      </div>
    </nav>
  );
}
