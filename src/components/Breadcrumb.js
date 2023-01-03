import '../styles/LandingPage.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

function Breadcrumb(props){
    const isWatching = props.isWatching;
    return (
    <div className="breadcrumb-option">
        <Container>
            <Row>
                <Col>
                    <div class="breadcrumb__links">
                        <a href="/" className="breadcrumb__logo"><FontAwesomeIcon icon={faHome}/> Beranda</a>
                        <span><FontAwesomeIcon icon={faChevronRight} className="me-1"/></span>
                        <a href="/category">{props.category}</a>
                        <span><FontAwesomeIcon icon={faChevronRight} className="me-1"/></span>
                        {isWatching ? <span>{props.title}</span> : <a href={props.link}>{props.title}</a>}
                        {isWatching ? <span></span> : <span><FontAwesomeIcon icon={faChevronRight}/> Watching</span>}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Breadcrumb;