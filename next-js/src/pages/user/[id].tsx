import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function detail() {


    const [idUer, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            setId(id)

        }
    }, [id])

    let handleChangle = () => {

    }

    let handleDelete = () => {

    }




    return (
        <>
            <br />
            <div>detail user {idUer}</div>
            <br />

            <div>
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <br />
            <div>
                <label>Email :</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <br />
            <div><button onClick={() => handleChangle()}>Changle</button></div>
            <br />
            <div><button onClick={() => handleDelete()}>Delete</button></div>





        </>
    )
}
