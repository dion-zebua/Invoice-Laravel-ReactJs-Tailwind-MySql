'use client';

import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ initialData, children }) {
    const [session, setSession] = useState(initialData);

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}
