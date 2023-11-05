import homeStl from './Home.module.css'
import PurchImg from '../../assets/papa.png'
import News from '../../components/news/News'
import penguin from '../../assets/penguin.png'
import { Link } from 'react-router-dom'
import video from '../../assets/gipungein-unscreen.gif'

const Home = () => {
    return(
        <section className={homeStl.home}>
            <div className={homeStl.main_content}>
                <div className={homeStl.main_content_text}>
                    <h5>О нас</h5>
                    <p>проект TrunsPurch, помогает гражданам страны видеть и отслеживать процесс получения финансов от государства компанией выигравшей тендер с помощью доски для мониторинга</p>
                    <Link to='/monitoring'><button className={homeStl.button_mon}>Мониторинг</button></Link>
                </div>
                <img src={PurchImg} alt="" className={homeStl.image}/>
            </div>

            <div className={homeStl.home_content}>
                <h1>Топ 10 поставщиков</h1>
                <p>какое нибудь описание что могут значить эти новости</p>
                <div className={homeStl.news_section}>
                    <News/>
                </div>
            </div>

            <div className={homeStl.bot}>
                <Link to='https://t.me/monstereebot'>
                    <img src={penguin} alt="" width='100px' className={homeStl.log_mini}/>
                    <img src={video} alt="" className={homeStl.peng_mini}/>
                </Link>
            </div>
        </section>
    )
}

export default Home