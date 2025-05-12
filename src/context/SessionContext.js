'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const SessionContext = createContext();

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ initialData, children }) {
    const [session, setSession] = useState(initialData);

    useEffect(() => {
        setSession(initialData)
    }, [initialData])

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}
