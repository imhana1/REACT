import React from 'react'
import { Link } from 'react-router-dom'

function Contacts({ contacts }) {
    return (
        <table className='table tabla-hover'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>주소</th>
                    <th>연락처</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map(c =>{
                        return(
                            <tr>
                                <td>{c.no}</td>
                                <td><Link to={`/read?no=${c.no}`}>{c.name}</Link>
                                </td>
                                <td>{c.address}</td>
                                <td>{c.tel}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Contacts