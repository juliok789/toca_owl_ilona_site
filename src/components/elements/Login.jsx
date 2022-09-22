import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import {setUser} from '../../store/reducers/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            link = '/RegPage'
            linkTitle="Зарегистрироваться"
            title="вход"
            button="Войти"
            handleClick={handleLogin}
        />
    )
}

export  default Login