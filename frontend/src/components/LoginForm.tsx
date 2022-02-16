import React, { FC, useContext, useState } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { store } = useContext(Context)

    return (
        <div>
            <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} value={email} /><br />
            <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} value={password} /><br />
            <button onClick={() => store.login(email, password)}>Login</button>
            <button onClick={() => store.register(email, password)}>Register</button>
        </div>
    )
}

export default observer(LoginForm)