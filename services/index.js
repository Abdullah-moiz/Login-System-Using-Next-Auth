import { signIn } from 'next-auth/react';


export const logged_in = async (FormData) => {
    console.log(FormData)
    const { email, password } = FormData;
    const status = await signIn('credentials', {
        email: email,
        password: password,
    });
    console.log(status)
    return status
}


export const register_now = async (FormData) => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(FormData)
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error Coming in register  (Services )  => ' + error)
    }
}