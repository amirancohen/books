import axios from 'axios';
import { User } from "../auth/Register";
import { getToken } from "../auth/TokenManager";
import { AllBooks } from "../components/Bookswork";
import { Addcontact } from "../components/Contactus";
import { AllViewContact } from "../components/Viewcontact";
import { AddBook } from "../pages/Addpost";
import { Editbook } from "../pages/Editpost";


const serverUrl = 'http://localhost:3000';
const usersUrl = `${serverUrl}/users`;
const userLoginUrl = `${usersUrl}/login`; 
const bookUrl = `${serverUrl}/books`;

const contacttUrl = `${serverUrl}/contacts`;

export const register = async(user: User): Promise<User> => {
    const res = await axios.post(`${usersUrl}/signup`, user, {withCredentials: true});
    return res.data;
}
export const login = async(user: User): Promise<boolean> => {
    const res = await fetch(`${userLoginUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(user)
    });
    return res.status === 200;
}

export async function booknew(Addpost: FormData): Promise<AddBook> {
    
    const res = await fetch(`${bookUrl}`,  {
        method: 'POST',
        headers: {
            'x-auth-token': getToken()
        },
        body: Addpost
    });
    return res.json();
}
export async function getBook(): Promise<Array<AddBook>> {
    const res = await fetch(`${bookUrl}`)
     return res.json()
 }
 export async function getCardById(id: string): Promise<Editbook> {
    const res = await fetch(`${bookUrl}/${id}`, {
        method: 'GET',
        headers: {
            'x-auth-token': getToken()
           }
       });
       return res.json();
   }
   export async function BookUpdate(id: string , Editpost: Editbook): Promise<Editbook> {
      const res = await fetch(`${bookUrl}/${id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              'x-auth-token': getToken()
          },
          body: JSON.stringify(Editpost)
      })
      return res.json()
  }
  export async function removecard(_id: string): Promise<AllBooks> {
    const res = await fetch(`${bookUrl}/${_id}`, {
        method: 'DELETE',
        headers: {
            'x-auth-token': getToken()
        },
    })
    return res.json()
}

export async function contactnew(Contactus: Addcontact): Promise<Addcontact> {
    const res = await fetch(`${contacttUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Contactus)
    });
    return res.json();
}

export async function getViewContact(): Promise<Array<AllViewContact>> {
    const res = await fetch(`${contacttUrl}`)
     return res.json()
 }
 