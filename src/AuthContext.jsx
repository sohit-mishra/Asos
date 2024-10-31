import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken') || null);
    const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem('refreshToken') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const updateLocalStorage = () => {
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('accessToken');
                setIsAuthenticated(false);
            }

            if (refreshToken) {
                localStorage.setItem('refreshToken', refreshToken);
            } else {
                localStorage.removeItem('refreshToken');
            }
        };
        updateLocalStorage();
    }, [accessToken, refreshToken]);

    const logout = () => {
        setAccessToken(null);
        setRefreshToken(null);
        setIsAuthenticated(false);
        setUserId(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };

    const refreshAccessToken = async () => {
        if (!refreshToken) return logout(); // Ensure refreshToken exists

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/refreshtoken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const data = await response.json();
            setAccessToken(data.accessToken);
        } catch (error) {
            console.error(error);
            logout();
        }
    };

    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, isAuthenticated, userId, setAccessToken, setRefreshToken, setIsAuthenticated, logout, setUserId, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
