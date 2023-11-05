import style from './PersonalArea.module.css'
import TextField from '@mui/material/TextField';

export const PersonalAreaSet = () => {

    return(
        <section className={style.personalAreaSet}>
            <div className={style.stage}>
                <h4>Первый Этап</h4>
                <form action="">
                <div className="custom-file-input">
                    <input type="file" id="fileInput" className={style.hidden} />
                    <label htmlFor="fileInput" className={style.custom_label}>Выберите файл</label>
                </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Описание"
                        multiline
                        rows={4}
                        sx={{width: '400px', marginTop: '20px'}} 
                        required

                    />
                    <button className={style.button_area}>Отправить</button>
                </form>
            </div>
            <div className={style.stage}>
                <h4>Второй Этап</h4>
                <form action="">
                <div className="custom-file-input">
                    <input type="file" id="fileInput" className={style.hidden} />
                    <label htmlFor="fileInput" className={style.custom_label}>Выберите файл</label>
                </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Описание"
                        multiline
                        rows={4}
                        sx={{width: '400px', marginTop: '20px'}} 
                        required

                    />
                    <button className={style.button_area}>Отправить</button>
                </form>
            </div>
            <div className={style.stage}>
                <h4>Третий Этап</h4>
                <form action="">
                <div className="custom-file-input">
                    <input type="file" id="fileInput" className={style.hidden} />
                    <label htmlFor="fileInput" className={style.custom_label}>Выберите файл</label>
                </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Описание"
                        multiline
                        rows={4}
                        sx={{width: '400px', marginTop: '20px'}} 
                        required

                    />
                    <button className={style.button_area}>Отправить</button>
                </form>
            </div>
        </section>
    )
}