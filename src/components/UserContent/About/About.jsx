import style from "./About.module.css";
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const About = (props) => {
    const [username, setUsername] = useState();
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    function openModal1() {
        setIsOpen1(true);
    }

    function afterOpenModal1() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal1() {
        setIsOpen1(false);
    }
    function openModal2() {
        setIsOpen2(true);
    }

    function afterOpenModal2() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal2() {
        setIsOpen2(false);
    }

    useEffect(() => {
        getConversations()
    }, [])

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
    if (!!username) {
        return (
            <div className={style.main}>
                <div className={style.widgetBox}>
                    <p className={style.mainTitle}>Обо мне</p>
                    <p className={style.informationText}>{username.data.about}</p>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Дата создания</p>
                        <p className={style.informationText}> {username.data.createdDate}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Город</p>
                        <p className={style.informationText}> {username.data.city}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Сайт</p>
                        <a className={style.informationText}
                            href={username.data.website}>  {username.data.website}</a>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.widgetBox}>
                <p className={style.mainTitle}>Интересы</p>
                    <div>
                        <p className={style.interestsTitle}>Любимые ТВ шоу</p>
                        <p className={style.informationText}> {username.data.tvShows}</p>
                    </div>
                    <div>
                        <p className={style.interestsTitle}>Любимые Исполнители / Артисты</p>
                        <p className={style.informationText}> {username.data.showmen}</p>
                    </div>
                    <div>
                        <p className={style.interestsTitle}>Любимые книги</p>
                        <p className={style.informationText}>{username.data.books}</p>
                    </div>
                    <div>
                        <p className={style.interestsTitle}>Любимые игры</p>
                        <p className={style.informationText}> {username.data.games}</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.widgetBox}>
                <p className={style.mainTitle}>Персональная информация</p>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Email</p>
                        <p className={style.informationText}> {username.data.email}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>День рождение</p>
                        <p className={style.informationText}> {username.data.birthdate}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Занятость</p>
                        <p className={style.informationText}> {username.data.busyness}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Родной город</p>
                        <p className={style.informationText}>{username.data.nativeCity}</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;