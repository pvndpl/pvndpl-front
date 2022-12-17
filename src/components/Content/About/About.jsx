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
            '/profile',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            console.log(response)
            setUsername(response)
        });
    }
    const handleSubmit = async (e) => {

        const formElement = document.getElementById('Form')
        const formData = new FormData(formElement);

        const about = formData.get("about")
        const city = formData.get("city")
        const website = formData.get("website")

        await axios.patch(
            '/profile/about',
            JSON.stringify({"about": about, "city": city, "website": website}),
            {
                headers: {"Content-Type": "application/json",
                Authorization: "Bearer ".concat(Cookies.get('JWT')) 
            }
            }
        ).then(console.log).catch(console.log)
    }

    const handleSubmit1 = async (e) => {

        const formElement = document.getElementById('Form1')
        const formData = new FormData(formElement);

        const tvShows = formData.get("tvShows")
        const showmen = formData.get("showmen")
        const books = formData.get("books")
        const games = formData.get("games")

        await axios.patch(
            '/profile/interests',
            JSON.stringify({"tvShows": tvShows, "showmen": showmen, "books": books, "games": games}),
            {
                headers: {"Content-Type": "application/json",
                Authorization: "Bearer ".concat(Cookies.get('JWT')) 
            }
            }
        ).then(console.log).catch(console.log)
    }
    const handleSubmit2 = async (e) => {

        const formElement = document.getElementById('Form2')
        const formData = new FormData(formElement);

        const email = formData.get("email")
        const birthdate = formData.get("birthdate")
        const busyness = formData.get("busyness")
        const nativeCity = formData.get("nativeCity")

        await axios.patch(
            '/profile/personalInf',
            JSON.stringify({"email": email, "birthdate": birthdate, "busyness": busyness, "nativeCity": nativeCity}),
            {
                headers: {"Content-Type": "application/json",
                    Authorization: "Bearer ".concat(Cookies.get('JWT'))
                }
            }
        ).then(console.log).catch(console.log)
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
                    <button onClick={openModal}>Пажилое редактирование</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2>Изменить данные</h2>
                        <button onClick={closeModal}>Закрыть</button>
                        <form id="Form" className="login" onSubmit={handleSubmit}>
                                <div className="login__field">
                                    <input type="text" name="tvShows" className="login__input" placeholder="Обо мне" />
                                </div>
                                <div className="login__field">
                                    <input name="city" className="login__input" placeholder="Город" />
                                </div>
                                <div className="login__field">
                                    <input  name="website" className="login__input" placeholder="Сайт" />
                                </div>
                                <button className="button login__submit">
                                    <span className="button__text">Пажилое подтверждение</span>
                                </button>
                            </form>
                    </Modal>
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
                    <button onClick={openModal1}>Пажилое редактирование</button>
                    <Modal
                        isOpen={modalIsOpen1}
                        onAfterOpen={afterOpenModal1}
                        onRequestClose={closeModal1}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                       <h2>Изменить данные</h2>
                        <button onClick={closeModal}>Закрыть</button>
                        <form id="Form1" className="login" onSubmit={handleSubmit1}>
                                <div className="login__field">
                                    <input type="text" name="tvShows" className="login__input" placeholder="Любимые ТВ шоу" />
                                </div>
                                <div className="login__field">
                                    <input name="showmen" className="login__input" placeholder="Любимые Исполнители / Артисты" />
                                </div>
                                <div className="login__field">
                                    <input  name="books" className="login__input" placeholder="Любимые книги" />
                                </div>
                                <div className="login__field">
                                    <input  name="games" className="login__input" placeholder="Любимые игры" />
                                </div>
                                <button className="button login__submit">
                                    <span className="button__text">Пажилое подтверждение</span>
                                </button>
                            </form>
                    </Modal> 
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
                    <button onClick={openModal2}>Изменить данные</button>
                    <Modal
                        isOpen={modalIsOpen2}
                        onAfterOpen={afterOpenModal2}
                        onRequestClose={closeModal2}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Изменить</h2>
                        <button onClick={closeModal2}>Закрыть</button>
                        <form id="Form2" className="login" onSubmit={handleSubmit2}>
                            <div className="login__field">
                                <input type="text" name="email" className="login__input" placeholder="Email" />
                            </div>
                            <div className="login__field">
                                <input name="birthdate" className="login__input" placeholder="День Рождения" />
                            </div>
                            <div className="login__field">
                                <input  name="busyness" className="login__input" placeholder="Занятость" />
                            </div>
                            <div className="login__field">
                                <input  name="nativeCity" className="login__input" placeholder="Родной город" />
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Пажилое подтверждение</span>
                            </button>
                        </form>
                    </Modal>
                </div>
                </div>
            </div>
        );
    }
}

export default About;