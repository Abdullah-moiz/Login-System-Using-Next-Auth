export const logged_in = async (FormData) => {
    try {
        const res = await fetch('http://localhost:3000/api/Auth/login', {
            headers: {
                'content-type': 'application/json',
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


export const register_now = async (FormData) => {
    try {
        const res = await fetch('http://localhost:3000/api/Auth/register', {
            headers: {
                'content-type': 'application/json',
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