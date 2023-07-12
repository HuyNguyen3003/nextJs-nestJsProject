import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function detail() {


    const [name, setName] = useState('');
    const [password, setEmail] = useState('');

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        setName(router.query.name);
        setEmail(router.query.password);

    }, [])

    let handleChangle = async () => {
        const Users = {
            name: name,
            password: password,
            id: id
        }
        try {
            const res = await axios.put('http://localhost:5001/users', Users)
            if (res) {
                router.back();
            }

        } catch (e) {
            console.log(e)
        }


    }

    let handleDelete = async () => {
        const Users = {
            name: name,
            password: password,
            id: id
        }
        try {
            const res = await axios.delete('http://localhost:5001/users', { data: Users })
            if (res) {
                router.back();
            }

        } catch (e) {
            console.log(e)
        }
    }




    return (
        <>
            <br />
            <div>detail user {id}</div>
            <br />

            <div>
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <br />
            <div>
                <label>Password :</label>
                <input type="text" value={password} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <div><button onClick={() => handleChangle()}>Changle</button></div>
            <br />
            <div><button onClick={() => handleDelete()}>Delete</button></div>





        </>
    )
}
