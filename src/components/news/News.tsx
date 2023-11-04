import newsStl from './News.module.css'
import { useEffect, useState } from 'react'
import glovo from '../../assets/GlovoApp.png'

const News = () => {

    const data = [
        {
            company: 'Glovo',
            image: glovo,
            description: 'Закупки на поставление продуктов'
        },
        {
            company: 'Glovo',
            image: glovo,
            description: 'Закупки на поставление продуктов'
        },
        {
            company: 'Glovo',
            image: glovo,
            description: 'Закупки на поставление продуктов'
        },
        {
            company: 'Glovo',
            image: glovo,
            description: 'Закупки на поставление продуктов'
        },
        {
            company: 'Glovo',
            image: glovo,
            description: 'Закупки на поставление продуктов'
        },
        {
            company: 'Glovo',
            image: glovo,
            description: 'Закупки на поставление продуктов'
        },
    ]

    const [translateValue, setTranslateValue] = useState<number>(40);

    const handleCliclNextScroll = () => {
        setTranslateValue(translateValue - 300);

        if (translateValue <= data.length * -200) {
          setTranslateValue(translateValue + 200);
        }
    };
    const handleCliclBackScroll = () => {

        setTranslateValue(translateValue + 300);

        if (translateValue >= 100) {
          setTranslateValue(translateValue - 300);
        }
    };

    return(
        <section className={newsStl.news}>
            <div className={newsStl.company}>
                {data.map((el)=>(
                    <div 
                        className={newsStl.company_card} 
                        key={el.company} 
                        style={{
                            transform: `translateX(${translateValue}px)`
                        }}
                    >
                        <img src={el.image} alt="" width='300px'/>
                        <h2>{el.company}</h2>
                        <p>{el.description}</p>
                    </div>
                ))}
            </div>

            <div className={newsStl.carus_button}>
                <button className={newsStl.button_hover} onClick={handleCliclBackScroll}>
                    <svg width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35.3477" r="35" transform="rotate(-180 35 35.3477)" fill="#454545"/>
                    <path d="M38 46.3477L28 35.3477L38 24.3477" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className={newsStl.button_hover} onClick={handleCliclNextScroll}>
                    <svg width="94" height="95" viewBox="0 0 94 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="47" cy="37.3477" r="35" fill="#454545"/> 
                    <path d="M44 26.3477L54 37.3477L44 48.3477" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>

        </section>
    )
}

export default News