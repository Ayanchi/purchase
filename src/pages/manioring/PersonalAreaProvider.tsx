import style from './PersonalArea.module.css'
import TextField from '@mui/material/TextField';

export const PersonalAreaProvider = () => {
    return(
        <section className={style.PersonalAreaProvider}>
            <div className={style.stage}>
                <h4>Ваш отчет</h4>
                <form action="">
                    <div className="custom-file-input">
                        <input type="file" id="fileInput" className={style.hidden} multiple/>
                        <label htmlFor="fileInput" className={style.custom_label}>Выберите файл</label>
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Описание"
                        multiline
                        rows={4}
                        sx={{width: '600px', marginTop: '20px'}} 
                        required

                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Комментарий"
                        multiline
                        rows={6}
                        sx={{width: '600px', marginTop: '20px'}} 
                        required

                    />
                    <button className={style.button_areaProvider}>Отправить</button>
                </form>
            </div>
        </section>
    )
}