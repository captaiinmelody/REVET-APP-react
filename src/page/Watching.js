import "../styles/LandingPage.css"

import { faEye, faLocationArrow, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb.js";
import Footer from "../components/Footer.js";
import NavigationBar from "../components/NavigationBar.js";
import products from "../data/ProductData.js";
import WatchingData from "../data/WatchingData.js";

const Watching = () => {
    return (
        <div className="myBG">
            <NavigationBar />
            <WatchingContent/>
            <Footer/>
        </div>
    )
}

const WatchingContent = () => {
    const {watchingId} = useParams();
    const watching = WatchingData.WatchingMain.find((watching)=>watching.id === watchingId);
    const {idDetail, img, videoSrc, desc, title, category} = watching;
return (
    <section>
        <div id="preloader">
            <div className="loader"></div>
        </div>
        <Breadcrumb title={title} category={category} link={idDetail} isWatching={false} />
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="anime__video__player mt-5">
                        <video id="player" controls playsInline poster={img}>
                            <div>
                                <FontAwesomeIcon icon={faPlay}/>
                            </div>
                            <source src={videoSrc} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="anime__details__text mb-5">
                        <div className="anime__details__title">
                            <h3>{title}</h3>
                            <p className="text-danger">1,520,347 x ditonton</p>
                        </div>
                    </div>
                    <div className="anime__details__episodes">   
                        <div className="section-title">
                            <h5>Description</h5>
                            <p style={{whiteSpace: "pre-wrap"}} className="text-white">{desc}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <CommentItem/>

        </Container>
    </section>
)
}

function CommentItem(){
return (
    <Row>
        <Col xs={8}>
            <Row>
                <Col xs={12}>
                    <div className="anime__details__episodes">
                        <div className="section-title">
                            <h5>Comment</h5>
                        </div>
                        {WatchingData.CommentWatching.map((data)=>(
                            <div className="anime__review__item">
                                <div className="anime__review__item__pic">
                                    <Image src={data.imgC}/>
                                </div>
                                <div className="anime__review__item__text">
                                    <h6>{data.name}</h6>
                                    <p>{data.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col>
                    <div className="anime__details__form">
                        <div className="section-title">
                            <h5>Your Comment</h5>
                        </div>
                        <form action="#">
                            <textarea placeholder="Your Comment"></textarea>
                            <button type="submit"><FontAwesomeIcon icon={faLocationArrow}/> Submit</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Col>    
        <Col xs={1}>
            <div className="anime__details__sidebar">
                <div className="section-title">
                    <h5>Recomendation</h5>
                </div>
                {products.filter((data, i) => i < 3).map((data)=>(
                    <div className="product__sidebar__view__item set-bg">
                        <Image src={data.img} />
                        <div className="view"><FontAwesomeIcon icon={faEye}/> {data.views}</div>
                        <h5><Link to={'/'}/> </h5>
                    </div>
                ))}
            </div>
        </Col>
    </Row>
)
};


export default Watching;