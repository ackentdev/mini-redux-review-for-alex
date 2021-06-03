import {useState} from 'react';

const Login = (props) => {
    const [loginInfo, setLoginInfo] = useState({ username: '', password: ''})

    const login = () => {
        props.history.push('/main')
    }

    return <form onSubmit={login}>
        <input type="text" value={loginInfo.username} placeholder="username" onChange={e => {setLoginInfo({...loginInfo, username:e.target.value})}}/>
        <input type="password" value={loginInfo.password} placeholder="password" onChange={e => {setLoginInfo({...loginInfo, password:e.target.value})}}/>
        <input type="submit" value="Login"/>
    </form>
}

export default Login;