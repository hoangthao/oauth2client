import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

const fakeAsyncLogin = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("Logged In");
        }, 300);
     });
}

const fakeAsyncLogout = async () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve("The user has successfully logged on the server");
       }, 300);
    });
 };

export const AuthProvider = ({children}) => {
    const sessionStorageValue = JSON.parse(sessionStorage.getItem("loggedIn"));
    const [ authed, setAuthed ] = useState(sessionStorageValue)
    const login = async () => {
        const result = await fakeAsyncLogin();
        if (result) {
            console.log('user has logged in')
            setAuthed(true)
            sessionStorage.setItem("loggedIn", "true");
        }
    }
    const logout = async () => {
        const result = await fakeAsyncLogout();
        if (result) {
            console.log('user has logged out')
            setAuthed(false)
            sessionStorage.setItem("loggedIn", "false");
        }
    }

    return (
    <AuthContext.Provider value={{ authed, setAuthed, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)