import '../../App.css';
import '../../styles/LandingPage.css';

import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Reacr, {useRef, useState, useEffect} from "react";

import axios from 'axios';



const LoginPage = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    var auth = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])



    const handleSubmit = async (e) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const same = auth.filter(d => d.email === email);


        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login',{
                email: email,
                password: pwd,
            });
            setSuccess(true);
        } catch (error) {
            if(error.response){
                setErrMsg(error.response.data.msg);
                console.log(error.response.data.msg);
            }
        }

        // if(auth === null){
        //     alert('no user found!');
        // }

        // if(regex.test(e.email)){
        //     alert("Email must be valid!")
        // }

        // if(same.length !== 0){
        //     if(same[0].pwd === pwd){
        //         console.log(email, pwd);
        //         setEmail('');
        //         setPwd('');
        //         setSuccess(true);
        //     }
        // } else {
        //     alert(email+ " exist!")
        // }
        
    }

  return (
    <div className='myBG'>
        <div id="preloader">
            <div className="loader"></div>
        </div>
        <Breadcrumb/>
        <div className='mt-5'>
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
                        <Link to={"/"}>Login Success!</Link>
                    </p>
                </div>
            </section>
        ) :(
        <section className="login spad">
            <Container>
                <Row>
                    <Col>
                        <div className="login__form">
                            <h3>Login</h3>
                            <form>
                                <div className="input__item">
                                    <input 
                                        type="text" 
                                        placeholder="Email address"
                                        id="email"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e)=> setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                    <span><FontAwesomeIcon icon={ faEnvelope }/></span>
                                </div>
                                <div className="input__item">
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        id="password"
                                        onChange={(e)=> setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                    <span><FontAwesomeIcon icon={ faLock }/></span>
                                </div>
                                <button className='site-btn' onClick={handleSubmit}>Submit</button>
                            </form>
                            <Link to={"#"} className="forget_pass">Forget Password?</Link>
                        </div>
                    </Col>
                    <Col>
                        <div className='login__register'>
                            <h3>You don't have an account?</h3>
                            <Link to={"/signup"} className="primary-btn">Register now!</Link>
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

function Breadcrumb(){
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


export default LoginPage;





