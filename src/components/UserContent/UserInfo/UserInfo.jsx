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
            '/user-info',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            console.log(response.data)
            setUsername1(response)
            /*           let newConversations = response.data.map(result => {
                        console.log(result)
                        return {
                            name: `${result.userFirstName} ${result.userLastName}`,
                        };
                      });
                      setConversations([...conversations, ...newConversations]) */
        });
    }

    const getConversations = (e) => {
        axios.get(
            '/users/491456cf-0d81-414e-a1f1-f021ca7822d0',
        ).then(response => {
            console.log(response)
            setUsername(response)
            /*           let newConversations = response.data.map(result => {
                        console.log(result)
                        return {
                            name: `${result.userFirstName} ${result.userLastName}`,
                        };
                      });
                      setConversations([...conversations, ...newConversations]) */
        });
    }
    if (isPhone) {
        return (
            <div className={style.userInfo}>
                <div className={style.headerInfo}>
                    <img className={style.headerInfoImg}
                        src={"https://sun9-49.userapi.com/impg/vKedzYpG0W2WPdlt6lwvtRN8lMYyo1WY58k_JA/PKHIhlUcXcA.jpg?size=1215x2160&quality=95&sign=c48dc9952636b2cde75cc3ae82e7fc9b&type=album"} />
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
                            <p className={style.statsTitle}>{username.data.subscribersCount}</p>
                            <p className={style.statsText}>Друзья</p>
                        </div>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.subscriptionsCount}</p>
                            <p className={style.statsText}>Подписчики</p>
                        </div>
                    </div>
                    <div className={style.headerInfo}>
                        <img className={style.headerInfoImg}
                            src={"https://pic.rutubelist.ru/video/25/e7/25e78d1f435b1bc032c2d2a518a7beee.jpg"} />
                        <p className={style.name}>{username1.data.firstname} {username1.data.lastname}</p>
                        <p>@{username1.data.username}</p>

                    </div>
                    <div className={style.socialNetworks}>
                        <button className={style.add_button}>Подписаться</button>
                    </div>
                </div>
            );
        }
    }
}

export default UserInfo