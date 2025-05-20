import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li>
                    <Link to={'/write'}>추가</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav