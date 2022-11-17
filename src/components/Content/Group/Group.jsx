import React from 'react';
import styles from './Group.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";


const Group = () => (
    <div data-testid="Group">
        <HeaderContent name={"Александр Великодный"} count={4} section={"Группы"}/>
        <div className={styles.groups}>
            <div className={styles.group}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-20.userapi.com/impg/Fu54-MoiNEDqdJ2KX9Hmac2BmLmW4Q693TllxQ/P25B3yjcQcs.jpg?size=1080x1080&quality=95&sign=dc5622e269dc500621a99bd5b3abf9fa&type=album"}></img>
                    <h2> ПАТРИОТЫ | РОССИЯ !!!</h2>
                </div>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <p className={styles.text}>2000000000</p>
                        <p className={styles.title}> Подписчиков</p>
                    </div>
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-11.userapi.com/c108/g3156562/d_adfaa285.jpg"}></img>
                    <h2> Дмитрий Goblin Пучков</h2>
                </div>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <p className={styles.text}>200</p>
                        <p className={styles.title}> Подписчиков</p>
                    </div>
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-24.userapi.com/s/v1/ig2/Pgn64dBG4BD5pqg0-x20PSc7cb8gabTEJAakVIQZyZ9MBhU2Q24phSvTNAgMDQE80_JY-Mbs5e3uEn0H4kwCz1VZ.jpg?size=100x100&quality=95&crop=79,66,393,393&ava=1"}></img>
                    <h2> Минобороны России</h2>
                </div>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <p className={styles.text}>20000000000</p>
                        <p className={styles.title}> Подписчиков</p>
                    </div>
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-41.userapi.com/s/v1/if1/FM7AKIs9NAMRoDf1UBNl0uAIaubxKV1iln-UpAbpK7nR8EvR7be3wd7S5sLbFQXAddj55u28.jpg?size=100x100&quality=96&crop=457,81,513,513&ava=1"}></img>
                    <h2>Стрелков Игорь Иванович</h2>
                </div>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <p className={styles.text}>200000</p>
                        <p className={styles.title}> Подписчиков</p>
                    </div>
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-83.userapi.com/s/v1/ig2/HcH9F3oLxEPQhhfZMvBN8wW4ZPh-Zn4bYAfe5KWafDyi_5UO_KtOziyG27xBqqlHBdLr7hw6ZRJY77kFjpP1oDcz.jpg?size=100x100&quality=95&crop=32,42,577,577&ava=1"}></img>
                    <h2>Джанки</h2>
                </div>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <p className={styles.text}>1</p>
                        <p className={styles.title}> Подписчиков</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
);


export default Group;
