import footerStl from './Footer.module.css'
import Logo from '../../assets/logo_transpurch.png'
import phone from '../../assets/Smartphones.png'
import email from '../../assets/Circled Envelope (1).png'

const Footer = () => {
    return(
        <section className={footerStl.footer}>
            <img src={Logo} alt="Logo" width='400px'/>
            <div className={footerStl.main_info}>
                <div className={footerStl.footer_links}>
                    <div className={footerStl.M}>
                        <p className={footerStl.main_text}>Мониторинг</p>
                        <p>Просмотр</p>
                        <p>Интересуещие</p>
                        <p>Просматриваемые</p>
                        <p>Продолжительные</p>
                    </div>
                    <div className={footerStl.M}>
                        <p className={footerStl.main_text}>Кабинет</p>
                        <p>Просмотр</p>
                        <p>Интересуещие</p>
                        <p>Просматриваемые</p>
                        <p>Продолжительные</p>
                    </div>
                </div>
                <div className={footerStl.contacts}>
                    <div className={footerStl.cont}>
                        <img src={email} alt="" width='40px'/>
                        <p>ayanausun@gmail.com</p>
                    </div>
                    <div className={footerStl.cont}>
                        <img src={phone} alt="" width='40px'/>
                        <p>+996 312 62-53-13 (2361, 2362, 2363, 2364)</p>
                    </div>
                    <div className={footerStl.cont}>
                        <img src={phone} alt="" width='40px'/>
                        <p>Общественная приемная +996 312 62-29-29</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Footer