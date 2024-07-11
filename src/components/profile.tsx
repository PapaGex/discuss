'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
    const session = useSession();

    if (session.data?.user) {
        return <div>From client: user is signed in ok?</div>
    }

    return <div>From client: User isnt signed in!! </div>
}