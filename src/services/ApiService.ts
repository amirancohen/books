import { getToken } from "../auth/TokenManager";
import { AllBooks } from "../components/Bookswork";
import { AddBook } from "../pages/Addpost";
import { Editbook } from "../pages/Editpost";
import { User } from "../types/user";

const serverUrl = "http://localhost:3000";
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
    return res.status === 200;
};

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
        headers: {
            "x-auth-token": getToken(),
        },
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
        headers: {
            "x-auth-token": getToken(),
        },
    });
    return res.json();
}
export async function BookUpdate(
    id: string,
    Editpost: Editbook
): Promise<Editbook> {
    const res = await fetch(`${bookUrl}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": getToken(),
        },
        body: JSON.stringify(Editpost),
    });
    return res.json();
}
export async function removecard(_id: string): Promise<AllBooks> {
    const res = await fetch(`${bookUrl}/${_id}`, {
        method: "DELETE",
        headers: {
            "x-auth-token": getToken(),
        },
    });
    return res.json();
}

export const postRecommendation = async (userRecommendation: {
    name: string;
    recommendation: string;
}): Promise<any> => {
    const res = await fetch(`${recommendationUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userRecommendation),
    });
    return res.json();
};

export const getRecommendations = async (): Promise<Array<any>> => {
    const res = await fetch(`${recommendationUrl}`);
    return res.json();
};
