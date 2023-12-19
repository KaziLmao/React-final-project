import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./router/routers";

function App(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authenticatedUser = localStorage.getItem('authenticatedUser');
        if (authenticatedUser) {
            setUser(authenticatedUser);
        }
    }, []);

    const handleLogin = (email) => {
        setUser(email);
    };

    const handleLogout = () => {
        localStorage.removeItem('authenticatedUser');
        setUser(null);
    };

    const handleRegister = (email) => {
        setUser(email);
    };

    return (
        user
            ? <RouterProvider
                user={user}
                onLogin={handleLogin}
                onRegister={handleRegister}
                router={createBrowserRouter(privateRoutes)}
            ></RouterProvider>
            : <RouterProvider
                user={user}
                onLogout={handleLogout}
                router={createBrowserRouter(publicRoutes)}
            ></RouterProvider>
    )
}

export default App;