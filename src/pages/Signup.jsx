import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import named from '../assests/unnamed.png'

function Signup(props) {
    const navigate = useNavigate();
    const user = props.user;
    const setuser = props.setuser;

    const [euser, seteuser] = useState('');
    const [epass, setepass] = useState('');

    const handlefirst = (evt) => {
        seteuser(evt.target.value);
    };

    const handlesecond = (evt) => {
        setepass(evt.target.value);
    };

    const addcheckuser = () => {
        setuser([...user, { username: euser, password: epass }]);
        navigate("/login");
    };

    return (
        <div className="login-app">
            <div className="login-container">'            
                <div className="logo">
            <img src={named} alt="Logo" />
                </div>'
                <h1 className="login-title">WELCOME</h1>
                <p className="login-subtitle"></p>
                <div className="input-group">
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Username"
                        onChange={handlefirst}
                    />
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={handlesecond}
                    />
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Confirm password"
                    />
                    <button className="login-button" onClick={addcheckuser}>SIGNUP</button>
                </div>
                <p className="texttt">Already have an account? <Link to={"/login"}>Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
