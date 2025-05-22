import { Link } from 'react-router-dom';

const Contacts = ({contacts}) => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>번호</th><th>이름</th><th>주소</th><th>연락처</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map(contact=>{
            return (
              <tr key={contact.no}>
                <td>{contact.no}</td>
                <td>
                  <Link to={`/read?no=${contact.no}`}>{contact.name}</Link>
                </td>
                <td>{contact.address}</td>
                <td>{contact.tel}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Contacts;