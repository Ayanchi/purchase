import homeStl from './Home.module.css'
import PurchImg from '../../assets/PurLogo.png'
import News from '../../components/news/News'

const Home = () => {
    return(
        <section className={homeStl.home}>
            <img src={PurchImg} alt="" className={homeStl.image}/>
            <div className={homeStl.home_content}>
                <h1>Выйгравшиие компании</h1>
                <p>какое нибудь описание что могут значить эти новости</p>
                <div className={homeStl.news_section}>
                    <News/>
                </div>
            </div>
        </section>
    )
}

export default Home