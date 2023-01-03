import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={2}>        
                        <div className="footer__logo">
                            <h2 class="font-weight-bold text-white"><a href="./index.html">Rev<span class="text-danger">et</span></a></h2>
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div className="footer__nav">
                            <ul>
                                <li class="active"><a href="./index.html">Beranda</a></li>
                                <li><a href="./categories.html">Kategori</a></li>
                                <li><a href="./blog.html">Tentang Kami</a></li>
                                <li><a href="#">Kontak</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={3}>
                    <div className="footer__copyright__text">
                        <p>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart}/> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;