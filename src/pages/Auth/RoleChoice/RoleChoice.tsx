import * as React from "react";
import s from "./RoleChoice.module.css"
import {Link} from "react-router-dom";
import procuring from "../../../assets/procuring.png"
import supplier from "../../../assets/supplier.png"
import user from "../../../assets/user-profile.png"


const RoleChoice = () => {
    return (
        <section>
            <div className="container">
                <div className={s.roleHeader}>
                    <div className={s.roleHeaderTitle}>
                        Выберите роль
                    </div>
                    <div className={s.roleHeaderSubtitle}>
                        Выберите роль и заполните анкету
                    </div>
                </div>
                <div className={s.rolePickContainer}>
                    <div className={s.roleBox}>
                        <Link to={'/registration/organization-info?role=procuring'}>
                            Закупающая организация
                            <br/>
                            <img src={procuring} alt="Закупающая организация" className={s.roleBoxImg}/>
                        </Link>
                    </div>

                    <div className={s.roleBox}>
                        <Link to={'/registration/organization-info?role=supplier'}>
                            Поставщик (Подрядчик)
                            <br/>
                            <img src={supplier} alt="Поставщик(Подрядчик)" className={s.roleBoxImg}/>

                        </Link>

                    </div>

                    <div className={s.roleBox}>
                        <Link to={'/registration/organization-info?role=user'}>
                            Человек
                            <br/>
                            <img src={user} alt="Человек" className={s.roleBoxImg}/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoleChoice;