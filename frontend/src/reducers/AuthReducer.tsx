export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: string | null;
}

type AuthAction =
    | { type: 'LOGIN'; payload: { token: string; user: string } }
    | { type: 'LOGOUT' };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case 'LOGOUT':
            return {
                isAuthenticated: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};
