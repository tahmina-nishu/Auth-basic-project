import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo = {
        name: 'Tahmina'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;