import style from './NavBar.module.css'

import { Outlet, Link } from 'react-router-dom';

const NavBar =()=>{
    return(

<>
        <nav className={style.navbar}>
            <ul className={style.list}>
                <Link to='/'>
                <li className={style.item}><img className={style.logo} src='./book.png'></img></li>
                </Link>

                <Link to='/'>
                <li className={style.item}>HOME</li>
                </Link>

                <Link to='/createBooks'>
                <li className={style.item}>ADD BOOKS</li>
                </Link>

                <Link to='/listBooks'>
                <li className={style.item}>LIST BOOKS</li>
                </Link>
            </ul>
        </nav>
        <Outlet/>
</>
    )
}

export default NavBar;