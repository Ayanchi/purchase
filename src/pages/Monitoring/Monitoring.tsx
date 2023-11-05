import * as React from "react";

import s from "./Monitoring.module.css"
import {Link} from "react-router-dom";

const Monitoring = () => {
    return (
        <section className="monitoring">
            <div className="container">
                <div className={s.monitoringTitle}>
                    Список победителей тендеров
                </div>
                <div className={s.tenders}>
                    <div className={s.tenderItem}>
                        <div className={s.tenderItemHeader}>
                            <div className={s.name}>
                                <Link to={"/monitoring/123456"}>
                                    Капитальный ремонт здания "Единой дежурно-диспетчерской службы" Табасаранского района РД
                                </Link>
                            </div>
                        </div>
                        <div className={s.tenderItemCenter}>
                            <div className={s.left}>
                                <div className={s.fields}>
                                    <div className={`${s.item} ${s.itemPublishDate}`}>
                                        <div className={s.label}>
                                            Дата публикации
                                        </div>
                                        <div className={s.value}>
                                            07 июля 2023 г.
                                        </div>
                                    </div>
                                    <div className={`${s.item} ${s.itemLeftDays}`}>
                                        <div className={s.label}>
                                            Дата победы
                                        </div>
                                        <div className={s.value}>
                                            01.08.2023 г.
                                        </div>
                                    </div>
                                    <div className={`${s.item} ${s.itemMaxPrice}`}>
                                        <div className={s.label}>
                                            Цена контракта
                                        </div>
                                        <div className={s.value}>
                                            0, 00 руб.
                                        </div>
                                    </div>
                                </div>

                                <div className="companies">
                                    <div className={s.company} data-toggle-item="">
                                        <div className={s.label}>Заказчик</div>
                                        <a href="#">МКУ "ЕДИНАЯ
                                            ДЕЖУРНО-ДИСПЕТЧЕРСКАЯ СЛУЖБА" МУНИЦИПАЛЬНОГО РАЙОНА "ТАБАСАРАНСКИЙ
                                            РАЙОН"</a>
                                    </div>

                                    <div className={s.company} data-toggle-item="">
                                        <div className={s.label}>Победитель</div>
                                        <a href="#">ООО "СИГМА-СТРОЙ"</a>
                                    </div>
                                </div>
                            </div>
                            <div className={s.right}>
                                <div className={s.info}>
                                    <div className={s.label}>Особенности закупки</div>
                                    <div className={s.values}>
                                        <ul>

                                            <li>Победители закупок</li>


                                            <li data-toggle-item="">
                                                Открытый конкурс в ЭФ 44

                                                по 44-ФЗ
                                            </li>

                                            <li data-toggle-item="">
                                                АО «ЕЭТП»
                                            </li>

                                            <li data-toggle-item="">
                                                Дагестан республика
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Monitoring;