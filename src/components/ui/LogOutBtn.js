import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/reducers/userSlice';
import './LogOut.scss'

const LogOutBtn = () => {
    const dispatch = useDispatch();
    const {isAuth} = useAuth();
    const navigate = useNavigate ();

return isAuth ?(
    <button className='transp-rect-button'
    onClick={()=> dispatch(removeUser())}
    
    >Выйти</button>): (
    navigate ('/LoginPage')
    )}

    export default LogOutBtn