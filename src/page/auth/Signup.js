
import '../../styles/LandingPage.css';

import { faEnvelope, faEye, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import SuccessPage from './Success';



const Signup = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwd1, setPwd1] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const [success, setSuccess] = useState(false);
    const [pwdType, setPwdType] = useState(true);
    const [pwdType1, setPwdType1] = useState(true);

    const history = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,email, pwd, pwd1])

    var auth = JSON.parse(localStorage.getItem('auth'));


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                username: user,
                email: email,
                password: pwd,
                confPassword: pwd1
            });
            setSuccess(true);
        } catch (error) {
            if(error.response){
                setErrMsg(error.response.data.msg);
            }
        }

        // if(auth === null){
        //     auth=[{"username":'aaa', 'password':'123'}]
        // }
        // if(pwd === pwd1){
        //     const same = auth.filter(d=>d.username === user);
        //     const sameEmail = auth.filter(d=>d.email === email);

        //     if(same.length===0 || sameEmail.length === 0){
        //         auth = [...auth,{'username':user, 'email':email, 'password':pwd}];
        //         localStorage.setItem('auth',JSON.stringify(auth));
        //         console.log(user,email, pwd, pwd1);
        //         setUser('');
        //         setEmail('');
        //         setPwd('');
        //         setPwd1('');
                
        //     }else{
        //         alert(user+" Exist!");
        //     }
        // }else{
        //     alert("Password are not match");
        // }
    }

  return (
    <div className='myBG'>
        <div id="preloader">
            <div className="loader"></div>
        </div>
        <Breadcrumb/>
        <div className='mt-5 mb-5'>
            <p ref={errRef} className={errMsg ? 'errmsg': 'offscreen'}>{errMsg}</p>
        </div>
        <>
        {
        success ? (
            <section className='success'>
                <div className="container">
                    <h1>You are registered!</h1>
                    <br/>
                    <p>
                        <Link to={"/login"}>go to Login Page</Link>
                    </p>
                </div>
            </section>
        ) :(
        <section className="signup spad myBG">
            <Container>
                <Row>
                    <Col>
                        <div className="login__form">
                            <h3>Register</h3>
                            <form>
                                <InputForm 
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    refs={userRef}
                                    autoComplete="off"
                                    onChange={(e)=> setUser(e.target.value)}
                                    value={user}
                                    icon={<FontAwesomeIcon icon={ faUser}/>}
                                />
                                <InputForm 
                                    type="text" 
                                    placeholder="Email address"
                                    id="email"
                                    refs={userRef}
                                    autoComplete="off"
                                    onChange={(e)=> setEmail(e.target.value)}
                                    value={email}
                                    icon={<FontAwesomeIcon icon={ faEnvelope }/>}
                                />
                                <InputForm 
                                    type={pwdType ? "password" : "text"}
                                    placeholder="Password"
                                    id="password"
                                    onChange={(e)=> setPwd(e.target.value)}
                                    value={pwd}
                                    icon = {<FontAwesomeIcon icon={ faLock }/>}
                                    button = {<button onClick={()=>{setPwdType(!pwdType)}}><FontAwesomeIcon icon={faEye} size="lg"/></button>}
                                />
                                <InputForm 
                                    id="password1"
                                    type={pwdType1 ? "password" : "text"}
                                    placeholder="Re-type Password"
                                    onChange={(e)=> setPwd1(e.target.value)}
                                    value={pwd1}
                                    icon={<FontAwesomeIcon icon={faLock} />}
                                    button = {<button onClick={()=>{setPwdType1(!pwdType1)}}><FontAwesomeIcon icon={faEye} size="lg"/></button>}
                                />
                                <button className='site-btn' onClick={handleSubmit}>Submit</button>
                            </form>
                            <h5 className='mt-3'>Already have an account? <Link to={"/login"}>Login here!</Link></h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="login__social__links mt-3">
                            <h3>Login with:</h3>
                            <ul>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> Masuk dengan Facebook</a>
                                </li>
                                <li><a href="#" className="google"><i className="fa fa-google"></i> Masuk dengan Google</a></li>
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> Masuk dengan Twitter</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        )}
        </>
    </div>
    
  );
}

function Breadcrumb(props){
    return (
        <section className="normal-breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="normal__breadcrumb__text">
                            <h2> <a href="/" className="text-white">Rev<span className="text-danger">et</span></a> </h2>
                            <p>SELAMAT DATA DI WEBSITE KAMI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function InputForm(props){
    return (
        <div className="input__item">
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                id={props.id}
                ref={props.refs}
                autoComplete={props.autoComplete}
                onChange={props.onChange}
                value={props.user}
                required
            />
            {props.button}
            <span>{props.icon}</span>
        </div>
    )
}

export default Signup;