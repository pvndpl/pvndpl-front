import style from "./Register.module.css";
import './form.css'
const Register = () => {
    return (
        <div className={style.vkloginHeader}>

            <p className={style.vkloginHeaderPretitle}>Добро пожаловать в</p>
            <p className={style.vkloginHeaderTitle}>ПИВАНДОПАЛУ</p>

            <div className={style.loginForm}>
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                        <h1>Заходи</h1>
                            <form className="login">
                                <div className="login__field">
                                    <input type="text" className="login__input" placeholder="User name" />
                                </div>
                                <div className="login__field">
                                    <input type="password" className="login__input" placeholder="Пароль" />
                                </div>
                                <div className="login__field">
                                    <input  className="login__input" placeholder="email" />
                                </div>
                                <div className="login__field">
                                    <input  className="login__input" placeholder="имя" />
                                </div>
                                <div className="login__field">
                                    <input  className="login__input" placeholder="фамилия" />
                                </div>
                                
                                <button className="button login__submit">
                                    <span className="button__text">Пажилая Регистрация</span>
                                </button>
                            </form>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register