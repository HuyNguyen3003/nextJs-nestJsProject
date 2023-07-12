import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios'


export default function user() {

    let [dataUser, setdataUser] = useState([]);

    useEffect(() => {
        try {
            let callApi = async () => {
                const res = await axios.get('http://localhost:5001/users')
                setdataUser(res.data)

            }
            callApi()



        } catch (e) {
            console.log(e)
        }
    }, [])






    return (<>

        <div>All User</div>
        <br />

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>

                {dataUser && dataUser.length > 0 &&
                    dataUser.map(user => (
                        <tr key={user._id}>
                            <td >
                                <Link href={{ pathname: `/user/${user._id}`, query: { id: user._id, name: user.name, password: user.password } }}>
                                    {user._id}
                                </Link></td>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}

            </tbody>
        </table>
    </>
    )
}
