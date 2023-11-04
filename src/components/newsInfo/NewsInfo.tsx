import newsInfoStl from './NewsInfo.module.css'
// import glovoImg from '../../assets/'

const NewsInfo = () => {
    return(
        <section className={newsInfoStl.newsInfo}>
            <img src="" alt="" />
            <div className={newsInfoStl.newsInfo_content}>
                <h3></h3>
                <div className={newsInfoStl.company_info}>
                    <p>О нас: </p>
                    <p>Веб-сайт: </p>
                </div>
                <div className={newsInfoStl.company_purchase_info}>
                    <p>Наименование товаров (услуг): </p>
                    <p>Начальная (максимальная) цена: </p>
                </div>
            </div>
        </section>
    )
}
export default NewsInfo