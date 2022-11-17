import React from 'react';
import styles from './Posts.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from "@mui/material";

const Posts = () => (
    <div data-testid="Posts">
        <div className={styles.widgetBox}>
            <form className={styles.formInput}>
                <img className={styles.photo}
                     src={"https://sun9-49.userapi.com/s/v1/ig2/H1XhBOxwr2MHKZQMz4EZqnyVNphwFvAvuj2f752anMfxdKTI_ZL2t75AVA8NfSNDarBiParWLIpgORQqP5QTVE9s.jpg?size=200x200&quality=95&crop=0,68,1428,1428&ava=1"}/>
                <textarea cols={5} rows={120} className={styles.input} placeholder={"Что у вас нового?"}/>
                <button className={styles.inputButton}>Опубликовать</button>
            </form>
        </div>
        <div className={styles.posts}>
            <div className={styles.post}>
                <div className={styles.info}>
                    <img className={styles.photo}
                         src={"https://sun9-49.userapi.com/s/v1/ig2/H1XhBOxwr2MHKZQMz4EZqnyVNphwFvAvuj2f752anMfxdKTI_ZL2t75AVA8NfSNDarBiParWLIpgORQqP5QTVE9s.jpg?size=200x200&quality=95&crop=0,68,1428,1428&ava=1"}/>
                    <p className={styles.name}>Адександр Великодный</p>
                </div>
                <div className={styles.content}>
                    <h4>Новости с фронта:</h4>
                    <p className={styles.text}>

                        ВСУ нанесли очередной удар РСЗО "Хаймерс" (4 ракеты) по комплексу Дома культуры г.Стаханова.
                        Комплекс сильно поврежден и частично разрушен.

                        Вчера противник впервые за долгое время применил в районе Старомихайловки (западнее Донецка)
                        свою авиацию - нанеся удары по позициям наших войск сначала с самолётов, потом - с вертолётов.
                        Как написал мне местный комментатор: "У нашего ПВО по воскресеньям традиционно выходной". (Это
                        на счет нашего "полного господства в воздухе").
                        По всему Донецкому фронту продолжались взаимные артиллерийские удары, противник продолжал
                        подтягивать свежие резервы.</p>
                    <img className={styles.contentImage}
                         src={" https://sun9-76.userapi.com/impg/jdZ0yaNP3joEiKIBAHuyYAXTlJRIxDnTlw6m1g/fryLyHI7S3k.jpg?size=621x399&quality=96&sign=826206093af1817e5a056ccd3b280489&type=album"}/>
                </div>
                <div className={styles.reaction}>
                    <IconButton>
                        <FavoriteBorderIcon style={{marginRight: "15px"}}/>
                    </IconButton>
                    <IconButton>
                        <CommentIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
        <div className={styles.posts}>
            <div className={styles.post}>
                <div className={styles.info}>
                    <img className={styles.photo}
                         src={"https://sun9-49.userapi.com/s/v1/ig2/H1XhBOxwr2MHKZQMz4EZqnyVNphwFvAvuj2f752anMfxdKTI_ZL2t75AVA8NfSNDarBiParWLIpgORQqP5QTVE9s.jpg?size=200x200&quality=95&crop=0,68,1428,1428&ava=1"}/>
                    <p className={styles.name}>Адександр Великодный</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>⚡ 2Pac со своими кабанами ограбил местную маршрутку на 500 рублей

                        Молодеж за которую не стыдно🙏
                    </p>
                    <img className={styles.contentImage}
                         src={"https://sun9-50.userapi.com/impg/DE8kb639VVRaxjxiGZWJAiQNEB7htTNl0DyFpQ/JVKJ7T2gDU4.jpg?size=1080x1304&quality=95&sign=350a058d85c0feb3125e446309253ed6&type=album"}/>
                </div>
                <div className={styles.reaction}>
                    <IconButton>
                        <FavoriteBorderIcon style={{marginRight: "15px"}}/>
                    </IconButton>
                    <IconButton>
                        <CommentIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
);

export default Posts;
