import { getToken } from "../auth/TokenManager";
import { AllBooks } from "../components/MyWorks";
import { AllRecommendations } from "../components/Recommendations";
import { AddRecomen } from "../components/addRecommendation";
import { AddBook } from "../pages/Addpost";
import { Editbook } from "../pages/Editpost";
import { User } from "../types/user";

// const serverUrl = "http://localhost:3000";

const serverUrl = "https://squid-app-5s93p.ondigitalocean.app";
const usersUrl = `${serverUrl}/users`;
const bookUrl = `${serverUrl}/books`;
const recommendationUrl = `${serverUrl}/recommendations`;

export const login = async (user: {
    email: string;
    password: string;
}): Promise<boolean> => {
    const res = await fetch(`${usersUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
    });
    console.log(res)
    return res.status === 200;
};


export const logout = async (): Promise<boolean> => {
    const res = await fetch(`${usersUrl}/logout`, {
        method: "POST",
        credentials: "include"
    })
    return res.status === 200
}

export const getUserData = async (): Promise<User> => {
    const res = await fetch(`${usersUrl}/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    return res.json();
};

export async function booknew(Addpost: FormData): Promise<AddBook> {
    const res = await fetch(`${bookUrl}`, {
        method: "POST",
        credentials: "include",
        body: Addpost,
    });
    return res.json();
}
export async function getBook(): Promise<Array<AddBook>> {
    const res = await fetch(`${bookUrl}`);
    return res.json();
}
export async function getCardById(id: string): Promise<Editbook> {
    const res = await fetch(`${bookUrl}/${id}`, {
        method: "GET",
        credentials: 'include'
    });
    return res.json();
}
export async function BookUpdate(
    id: string,
    editpost: Editbook
): Promise<Editbook> {
    const res = await fetch(`${bookUrl}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(editpost),
    });
    return res.json();
}
export async function removeBook(id: string): Promise<AllBooks> {
    const res = await fetch(`${bookUrl}/${id}`, {
        method: "DELETE",
        credentials: "include"
    });
    return res.json();
}

export const postRecommendation = async (userRecommendation: {
    name: string;
    recommendation: string;
}): Promise<AddRecomen> => {
    const res = await fetch(`${recommendationUrl}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userRecommendation),
    });
    return res.json();
};

export const getAllRecommendations = async (): Promise<Array<AllRecommendations>> => {
    const res = await fetch(`${recommendationUrl}`);
    return res.json();
};
