import headerStl from './Header.module.css'
import email from '../../assets/Circled Envelope.png'
import phone from '../../assets/Phone.png'
import NavBar from '../navbar/NavBar'

const Header = () => {
    const contacts = [
        {
            img: email ,
            contact: 'ayanausun@gmail.com'
        },
        {
            img: phone ,
            contact: '+996 312 62-53-13 (2361, 2362, 2363, 2364)'
        },
        {
            img: phone ,
            contact: 'Общественная приемная +996 312 62-29-29'
        }
    ]
    return(
        <>
            <section className={headerStl.header}>
                {contacts.map((el)=>(
                    <div className={headerStl.contacts_section} key={el.img}>
                        <img src={el.img} alt="" height='30px'/>
                        <p>{el.contact}</p>
                    </div>
                ))}
            </section>
            <section className={headerStl.navbar}>
                <NavBar/>
            </section>
        </>
    )
}

export default Header