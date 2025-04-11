import { createContext, useContext, useReducer, ReactNode } from 'react';

interface AuthState {
    token: string | null;
    user: string | null;
}

type AuthAction =
    | { type: 'LOGIN'; token: string; user: string }
    | { type: 'LOGOUT' };

const initialState: AuthState = {
    token: null,
    user: null,
};

const AuthContext = createContext<{
    state: AuthState;
    login: (token: string, user: string) => void;
    logout: () => void;
} | undefined>(undefined);

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return { token: action.token, user: action.user };
        case 'LOGOUT':
            return { token: null, user: null };
        default:
            return state;
    }
};

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Estado inicial desde localStorage
    const [state, dispatch] = useReducer(authReducer, initialState, () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return {
            token,
            user,
        };
    });

    const login = (token: string, user: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        dispatch({ type: 'LOGIN', token, user });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
    return context;
};
