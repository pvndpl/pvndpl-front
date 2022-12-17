import styles from './Friend.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Aboba = (props) => {
    const { username, name, id } = props.data;
    return (
        <NavLink to={`/pvndpl-front/users/${id}`}>
            <div className={styles.users}>
                <div className={styles.user}>
                    <div className={styles.preview}>
                        <img className={styles.headerInfoImg}
                            src={"https://damion.club/uploads/posts/2022-01/thumbs/1642968512_17-damion-club-p-tupaya-obezyana-19.jpg"} />
                        <p className={styles.name}>{name}</p>
                        <p className={styles.tag}>@{username}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

const Friend = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getConversations()
        getConversations1()
        user()
    }, [])

    const [username1, setUsername1] = useState();
    const [username, setUsername] = useState();

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
            '/profile',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
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

    const getConversations1 = () => {
        axios.get(
            '/subscribers',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            let newConversations = response.data.map(result => {
                console.log(result)
                return {
                    name: `${result.firstName} ${result.secondName}`,
                    id: result.id,
                    username: result.username
                };
            });
            setConversations([...conversations, ...newConversations])
        });
    }
    if (Array.isArray(conversations) && !!username1 && !!username) {
        const name1 = `${username1.data.firstname} ${username1.data.lastname}`;
        const count = username.data.subscribersCount;
        console.log(count)
        return (<div className={styles.Friend} data-testid="Friend">
            <HeaderContent name={name1} section={"Друзья"} count={count} />
            {
                conversations.map(conversation =>
                    <Aboba
                        key={conversation.name}
                        data={conversation}
                    />
                )
            }
        </div>)
    }
}


Friend.propTypes = {};

Friend.defaultProps = {};

export default Friend;
