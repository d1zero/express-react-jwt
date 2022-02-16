import React, { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import LoginForm from './components/LoginForm';
import { observer } from 'mobx-react-lite'
import { IUser } from './models/IUser';
import UserService from './services/UserService';

function App() {
    const { store } = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    const getUsers = async () => {
        try {
            const response = await UserService.getUsers()
            setUsers(response.data)
        } catch (e: any) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        } else {
            store.setLoading(false)
        }
    }, [])

    if (store.isLoading) {
        return <h1>Loading...</h1>
    }

    if (!store.isAuth) {
        return (
            <div>
                <LoginForm />
                <button onClick={getUsers}>Get users</button>
            </div>
        )
    }

    return (
        <div className="App">
            <h1>{store.isAuth ? `Auth: ${store.user.email}` : 'Not auth'}</h1>
            <button onClick={() => { store.logout() }}>Logout</button>
            <div>
                <button onClick={getUsers}>Get users</button>
            </div>
            {users.map(user => <div key={user.email}>{user.email}</div>)}
        </div>
    );
}

export default observer(App);
