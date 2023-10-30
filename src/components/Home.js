import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserProvider';

const Home = () => {

    const user = useUser();

    const auth = getAuth();

    const navigate = useNavigate();

    if (!user) {
        navigate('/signin');
    }

    return (
        <div className='home-container'>
            <h3>Home</h3>
            <h5>User: {user && user.name}</h5>
            <input type='button' value='SignOut' onClick={() => auth.signOut()} />
            <div className='links'>
                <a href='page1'>Page1</a>
                <a href='page2'>Page2</a>
            </div>

        </div>
    );
}
export default Home;