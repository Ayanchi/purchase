import navBarStl from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <section className={navBarStl.navbar}>
            <div className={navBarStl.TransPurch}>
                <Link to=''>
                    <div className={navBarStl.TransPurch_links}>
                        <p>Trans</p>
                        <p>Purch</p>
                    </div>
                </Link>
            </div>
            <div className={navBarStl.PlaningPurch}>
                <Link to=''>
                    <div className={navBarStl.TransPurch_links}>
                        <p>Planing</p>
                        <p>Purch</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default NavBar