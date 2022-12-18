import style from "./UserInfo.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const UserInfo = (props) => {

    const isPhone = useMediaQuery('(max-width:605px)');
    const [username, setUsername] = useState();
    const [username1, setUsername1] = useState();


    useEffect(() => {
        getConversations()
        user()
    }, [])

    const user = (e) => {
        axios.get(
            `/user-info/${props.path}`,
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername1(response)

        });
    }

    const getConversations = (e) => {
        axios.get(
            `/users/${props.path}`,
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername(response)
        });
    }

    const handle = () => {
        axios.post(
            `/subscribers/${props.path}`, {},
            {
                headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))},
            }
        ).then(console.log).catch(console.log);
    }

    if (isPhone) {
        return (
            <div className={style.userInfo}>
                <div className={style.headerInfo}>
                    <img className={style.headerInfoImg}
                        src={"https://www.anepedia.org/img/4/4099510/i2/%D0%A4%D0%BE%D1%82%D0%BE_%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB_%D0%BF%D1%80%D0%BE_%D0%BE%D0%B1%D0%B5%D0%B7%D1%8C%D1%8F%D0%BD.jpg"} />
                    <p className={style.name}>{props}</p>
                    <p>@Belython</p>

                </div>
                <div className={style.stats}>
                    <div className={style.statsBlock}>
                        <p className={style.statsTitle}>11</p>
                        <p className={style.statsText}>Посты</p>
                    </div>
                    <div className={style.statsBlock}>
                        <p className={style.statsTitle}>228</p>
                        <p className={style.statsText}>Друзей</p>
                    </div>
                    <div>
                        <p className={style.statsTitle}>1488</p>
                        <p className={style.statsText}>Комментарии</p>
                    </div>
                </div>
            </div>
        );
    } else if (!!username && !!username1) {
        {
            return (
                <div className={style.userInfo}>
                    <div className={style.stats}>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.postsCount}</p>
                            <p className={style.statsText}>Посты</p>
                        </div>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.subscriptionsCount}</p>
                            <p className={style.statsText}>Подписки</p>
                        </div>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.subscribersCount}</p>
                            <p className={style.statsText}>Подписчики</p>
                        </div>
                    </div>
                    <div className={style.headerInfo}>
                        <img className={style.headerInfoImg}
                            src={"https://www.anepedia.org/img/4/4099510/i2/%D0%A4%D0%BE%D1%82%D0%BE_%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB_%D0%BF%D1%80%D0%BE_%D0%BE%D0%B1%D0%B5%D0%B7%D1%8C%D1%8F%D0%BD.jpg"} />
                        <p className={style.name}>{username1.data.firstname} {username1.data.lastname}</p>
                        <p>@{username1.data.username}</p>

                    </div>
                    <div className={style.socialNetworks}>
                        <button onClick={handle} className={style.add_button}>Подписаться</button>
                    </div>
                </div>
            );
        }
    }
}

export default UserInfo