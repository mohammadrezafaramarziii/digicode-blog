"use client";
import ToastError from "@/components/toasts/ToastError";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "loading": return {
            ...state,
            isLoading: true
        }

        case "rejected": return {
            ...state,
            isLoading: false,
            error: action.payload
        }

        case "signin": return {
            user: action.payload,
            isAuthenticated: true
        }

        case "signup": return {
            user: action.payload,
            isAuthenticated: true
        }

        case "user/loaded": return {
            user: action.payload,
            isAuthenticated: true
        }
    }
}

export function AuthProvider({ children }) {
    const router = useRouter();
    const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(authReducer, initialState);

    async function signin(values) {
        dispatch({ type: "loading" });

        try {
            const { user, message } = await signinApi(values);
            dispatch({ type: "signin", payload: user });
            router.replace("/profile");
        } catch (error) {
            const errorMessage = error.response.data.message
            dispatch({ type: "rejected", payload: errorMessage });
            ToastError(errorMessage);
        }
    }

    async function signup(values) {
        dispatch({ type: "loading" });
        try {
            const { user, message } = await signupApi(values);
            dispatch({ type: "signup", payload: user });
            router.replace("/profile");
        } catch (error) {
            const errorMessage = error.response.data.message
            dispatch({ type: "rejected", payload: errorMessage });
            ToastError(errorMessage);
        }
    }

    async function likePost(postId) {
        try {
            const { message } = await likePostApi(postId);
            ToastSuccess(message);
            router.refresh()
        } catch (error) {
            ToastError(error.response.data.message);
        }
    }

    async function bookmarkPost(postId) {
        try {
            const { message } = await bookmarkPostApi(postId);
            ToastSuccess(message);
            router.refresh()
        } catch (error) {
            ToastError(error.response.data.message);
        }
    }

    async function getUser() {
        dispatch({ type: "loading" });
        try {
            const { user } = await getUserApi();
            dispatch({ type: "user/loaded", payload: user });
        } catch (error) {
            const errorMessage = error.response.data.message
            dispatch({ type: "rejected", payload: errorMessage });
        }
    }

    useEffect(() => {
        async function fetchData() {
            await getUser();
        }

        fetchData();
    }, [])

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, getUser, signin, signup, likePost, bookmarkPost }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error("not found AuthContext!");
    return context;
}