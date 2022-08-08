import { useEffect, useState } from "react"

const useRegisterToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const email = user?.user?.email;
        const username = user?.user?.displayName;


        const currentUser = { email: email, username: username };

        if (email) {
            fetch(`https://api-nodejs-todolist.herokuapp.com/user/register`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                   
                })
        }
    }, [user])

    return [token];
}

export default useRegisterToken;