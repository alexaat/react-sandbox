import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Home = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email
                });
            } else {
                navigate('/signin');
            }
        });
    }, []);

    return (
        <>
            <h3>Home</h3>
            <h5>User: {user && user.name}</h5>
            <input type='button' value='SignOut' onClick={() => auth.signOut()} />
        </>
    );
}
export default Home;