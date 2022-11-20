import style from "./Desktop.module.css"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Messages from "../../components/Messages/Messages";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Friends from "../../components/Friends/Friends";
import Groups from "../../components/Groups/Groups";
import Login from "../../components/Login/Login"

const Desktop = (props) => {
    console.log( props)
    return (
        <div className={style.App}>
            <Header/>
            <Navbar/>
            <div className={style.content}>
                <Routes>
                    <Route path="/pvndpl-front/">
                        <Route path="content/*" element={<Content/>}/>
                        <Route path="newsfeed" element={<NewsFeed/>}/>
                        <Route path="messages/*" element={<Messages messages={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                        <Route path="friends" element={<Friends/>}/>
                        <Route path="groups" element={<Groups/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default Desktop