import style from "./Login.module.css";
import './form.css'
const Login = () => {
    return (
        <div className={style.vkloginHeader}>

            <p className={style.vkloginHeaderPretitle}>Добро пожаловать в</p>
            <p className={style.vkloginHeaderTitle}>ПИВАНДОПАЛУ</p>

            <div className={style.loginForm}>
                <div class="container">
                    <div class="screen">
                        <div class="screen__content">
                        <h1>Заходи</h1>
                            <form class="login">
                                <div class="login__field">
                                    <input type="text" class="login__input" placeholder="User name" />
                                </div>
                                <div class="login__field">
                                    <input type="password" class="login__input" placeholder="Пароль" />
                                </div>
                                <button class="button login__submit">
                                    <span class="button__text">Зайти</span>
                                </button>
                            </form>
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login