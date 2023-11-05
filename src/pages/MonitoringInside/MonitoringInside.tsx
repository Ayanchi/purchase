import * as React from "react";
import {Link, useParams} from "react-router-dom"

import first from "../../assets/first.jpeg"
import second from "../../assets/photo1699161377 (1).jpeg"
import third from "../../assets/photo1699161377 (2).jpeg"
import res from "../../assets/photo1699161377.jpeg"
import s from "./MonitoringInside.module.css"

const MonitoringInside = () => {
    const {id} = useParams();

    return (
        <section>
            <div className="container">
                <h3>Капитальный ремонт здания "Единой дежурно-диспетчерской службы" Табасаранского района РД</h3>
                <h2 className={s.h2}>Поставщик</h2>
                <div className={s.stages}>
                    <div className={s.stage}>
                        <div className={s.stageHeader}>
                            <div className={s.title}>
                                1 Этап
                            </div>
                        </div>
                        <div className={s.stageContent}>
                            <div className={s.contentItem}>
                                <div className={s.itemImg}>
                                    <img src={first} alt=""/>
                                </div>
                                <div className={s.contentDescr}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, numquam.
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={s.stage}>
                        <div className={s.stageHeader}>
                            <div className={s.title}>
                                2 Этап
                            </div>
                        </div>
                        <div className={s.stageContent}>
                            <div className={s.contentItem}>
                                <div className={s.itemImg}>
                                    <img src={second} alt=""/>
                                </div>
                                <div className={s.contentDescr}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, numquam.
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={s.stage}>
                        <div className={s.stageHeader}>
                            <div className={s.title}>
                                3 Этап
                            </div>
                        </div>
                        <div className={s.stageContent}>
                            <div className={s.contentItem}>
                                <div className={s.itemImg}>
                                    <img src={res} alt=""/>
                                </div>
                                <div className={s.contentDescr}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, numquam.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.organization}>
                    <h2 className={s.h2}>
                        Закупающая компания
                    </h2>
                    <h2 className={s.h2}>
                        Финальный результат:
                    </h2>

                    <div className={s.result}>
                        <div className={s.resultImg}>
                            <img src={third} alt=""/>
                        </div>

                        <div className={s.resultDescr}>
                            Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolore, iste laborum perspiciatis quod voluptate!
                            <br/>
                            Комментарий: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi, culpa debitis dolorem doloremque, est fugiat illo iusto minus neque omnis pariatur possimus quaerat rerum sed soluta suscipit totam veniam!
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MonitoringInside;