import React, { useState } from 'react';
import axios from 'axios';

export default function User() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let user = {
            name: name,
            password: password
        }
        try {
            setName('')
            setPassword('')
            const res = await axios.post('http://localhost:5001/users', user);

            console.log(res)
        } catch (e) {

            console.log(e)
        }




    };
    return (
        <>
            <div>USER</div>
            <br />

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <br />
                <div>
                    <label>Password :</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <button type="submit">Create</button>
            </form>

        </>
    )
}
