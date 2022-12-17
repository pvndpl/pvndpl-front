import style from "./Content.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import { Routes, Route} from "react-router-dom";
import Posts from "./Posts/Posts";
import Photos from "./Photos/Photos";
import Friend from "./Friend/Friend";
import Group from "./Group/Group";
import axios from '../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useHistory ,useLocation } from 'react-router-dom';

const UserContent = () => {
    const query = window.location.href.split('/')
    const path = `/` + `${query[3]}` + `/` + `${query[4]}` + `/`+ `${query[5]}` + '/'


    const about = path + "about"


    return (
        <div className={style.content}>
            <div className={style.headerImg}>
            </div>
            <UserInfo path={query[5]}/>
            <Navigation path={path}/>
            <Routes>
                <Route path="about" element={<About path={query[5]}/>} />
                <Route path="posts" element={<Posts/>} />
                <Route path="friends" element={<Friend path={query[5]}/>} />
<<<<<<< HEAD
                <Route path="groups" element={<Group path={query[5]}/>} />
=======
                <Route path="groups" element={<Group/>} />
>>>>>>> 2692210b3a117836679b25ec2941c47d04677ddb
            </Routes>
        </div>
    );
}

export default UserContent