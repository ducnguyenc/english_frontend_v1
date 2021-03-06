import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export default function UserProviderContext({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
