import footerStl from './Footer.module.css'
import Logo from '../../assets/logo_transpurch.png'

const Footer = () => {
    return(
        <section className={footerStl.footer}>
            <img src={Logo} alt="Logo" width='400px'/>
            <div className={footerStl.contacts}>
                <p>ayanausun@gmail.com</p>
                <p>+996 312 62-53-13 (2361, 2362, 2363, 2364)</p>
                <p>Общественная приемная +996 312 62-29-29</p>
            </div>
        </section>
    )
}

export default Footer