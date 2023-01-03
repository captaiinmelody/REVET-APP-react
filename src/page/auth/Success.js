import '../../styles/LandingPage.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SuccessPage () {
    <section className='success'>
                <div className="container bg-success">
                    <h1>You are registered!</h1>
                    <br/>
                    <p>
                        <Link to={"/login"}>go to Login Page</Link>
                    </p>
                </div>
            </section>
}

export default SuccessPage;