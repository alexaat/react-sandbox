import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserProvider';
import { useState } from 'react';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { StyledButton } from './StyledButton';
import { RedditTextField, TextInput, StyledTextField } from './StyledButton';
import { InputBase, TextField } from '@mui/material';

const Home = () => {

    const user = useUser();

    const auth = getAuth();

    const navigate = useNavigate();

    if (!user) {
        navigate('/signin');
    }

    const [users, setUsers] = useState();
    const db = getFirestore();
    const fetchDataFromFirestore = async () => {
        const docSnap = await getDocs(collection(db, 'users'));
        if (docSnap) {
            const arr = [];
            docSnap.forEach(doc => {
                arr.push(doc.data())
            });
            setUsers(arr);
        }
    }

    return (
        <div className='home-container'>
            <h3>Home</h3>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <StyledTextField 
                disabled
                variant='outlined'
                label='Display Name'
             
                

               
 

                />

                <div style={{ width: '300px', height: '42px', background: 'green'}}></div>

            </div>



            <h5>User: {user && user.name}</h5>
            <div>
                {users &&
                    users.map((item, index) => {
                        return (
                            <div key={index} className='user-container'>
                                <div className='user-item'><div className='item-key'>Id:</div><div>{item.id}</div> </div>
                                <div className='user-item'><div className='item-key'>Name:</div><div>{item.name}</div> </div>
                                <div className='user-item'><div className='item-key'>Email:</div><div>{item.email}</div> </div>
                                <div className='user-item'><div className='item-key'>Password:</div><div>{item.password}</div> </div>
                            </div>)
                    })
                }
            </div>
            <div className='buttons'>
                <input type='button' value='Show Users' onClick={() => fetchDataFromFirestore()} />
                <input type='button' value='SignOut' onClick={() => auth.signOut()} />
                <StyledButton size='small'>Pink</StyledButton>
            </div>

            <div className='links'>
                <a href='page1'>Page1</a>
                <a href='page2'>Page2</a>
            </div>


        </div>
    );
}
export default Home;