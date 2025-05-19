import React from 'react';
import Contact from './Contact';

const Contacts = ({ contacts }) => {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>연락처</th>
                    <th>주소</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map(contact => <Contact key = {contact.no} contact = {contact} />)
                }
            </tbody>
        </table>
    );
};

export default Contacts;