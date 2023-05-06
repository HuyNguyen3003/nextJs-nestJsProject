import React from 'react'

export default function user() {
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

                <tr >
                    <td>123</td>
                    <td>huy</td>
                    <td>pass</td>
                </tr>

            </tbody>
            {/* <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody> */}
        </table>
    </>
    )
}
