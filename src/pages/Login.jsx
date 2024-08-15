import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import named from '../assests/unnamed.png'



function Login(props) {
    const navigate = useNavigate();
    const user = props.user;

    const [tuser, settuser] = useState('');
    const [tpass, settpass] = useState('');
    const [ruser, setruser] = useState(true);

    const handleuser = (evt) => {
        settuser(evt.target.value);
    };

    const handlepass = (evt) => {
        settpass(evt.target.value);
    };

    const handlelogin = () => {
        var userfound = false;

        user.forEach(function(item) {
            if (item.username === tuser && item.password === tpass) {
                console.log("Successful");
                userfound = true;
                navigate("/landing");
            }
        });

        if (!userfound) {
            console.log("Failed");
            setruser(false);
        }
    };

    return (
        <div className="login-app">
            <div className="login-container">
            <div className="logo">
            <img src={named} alt="Logo" />
                </div>
                <h1 className="login-title">WELCOME</h1>
                {ruser ? (
                    <p className="login-subtitle"></p>
                ) : (
                    <p className="login-error">Please signup before you login :)</p>
                )}
                <div className="input-group">
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Username"
                        onChange={handleuser}
                    />
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={handlepass}
                    />
                    <button className="login-button" onClick={handlelogin}>LOGIN</button>
                </div>
                <p className="texttl">Don't have an account? <Link to={'/signup'}>signup</Link></p>
            </div>
        </div>
    );
}

export default Login;
