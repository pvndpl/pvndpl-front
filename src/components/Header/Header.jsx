import style from "./Header.module.css";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
import axios from '../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const Header = ({ updateActive }) => {
    const [username, setUsername] = useState();
    const [token, setToken] = useState();


    const getConversations = (e) => {
        axios.get(
            '/user-info',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            console.log(response.data.username)
            setUsername(response.data.username)
            setToken(Cookies.get('JWT'))
        });
    }

    getConversations()
    const activateLasers = () =>{
        Cookies.remove('JWT', { path: '' });
    }
    if (token) {
        return (
            <header className={style.header}>
                <div className={style.headerInformation}>
                    <Link className={style.headerBrand} to={"/pvndpl-front/content"}>
                        <SportsBarIcon className={style.logo} sx={{ height: "32px", width: "32px" }} />
                        <h1 className={style.headerBrandText}>ПИВАНДОПАЛА</h1>
                    </Link>
                </div>
                <div className={style.headerInformation}>
                    <div className={style.headerBrand}>                <h1 className={style.headerBrandText}>Привет, {username}</h1></div>
                    <form>
                        <button onClick={activateLasers} className={style.headerBrandText}>Выход</button>
                    </form>

                </div>
            </header>
        );
    } else {
        return (
            <header className={style.header}>
                <div className={style.headerInformation}>
                    <Link className={style.headerBrand} to={"/pvndpl-front/content"}>
                        <SportsBarIcon className={style.logo} sx={{ height: "32px", width: "32px" }} />
                        <h1 className={style.headerBrandText}>ПИВАНДОПАЛА</h1>
                    </Link>
                </div>
                <div className={style.headerInformation}>
                    <Link className={style.headerBrand} to={"/pvndpl-front/login"}>
                        <h1 className={style.headerBrandText}>Войти</h1>
                    </Link>
                    <Link className={style.headerBrand} to={"/pvndpl-front/register"}>
                        <h1 className={style.headerBrandText}>Регистрация</h1>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header