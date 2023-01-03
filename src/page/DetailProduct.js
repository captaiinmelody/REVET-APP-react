import '../styles/LandingPage.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faEye, faSquare } from "@fortawesome/free-solid-svg-icons";
import {Col, Image, Row} from "react-bootstrap"
import {Link, useParams } from 'react-router-dom';

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import products from '../data/ProductData';
import Breadcrumb from '../components/Breadcrumb';

const DetailProduct= () => {


    return (
        <div className="myBG">
            {/* navigation bar */}
                <NavigationBar/>
            {/* navigation bar */}


            {/* Carousel */}
                <DetailProductContent/>
            {/* Carousel */}

            <Footer/>
        </div>
    )
}

const DetailProductContent =()=> {
    const {productId} = useParams();
    const product = products.find((product)=>product.id === productId);
    const {id, watchingId, img, title, category, source, desc, views, comment,
        type,creator, subscribers, release,view, likes, duration, quality} = product;

    return (            
    <section className='section'>
        <Breadcrumb title={title} category={category} isWatching={true}/>
        <Row className="mt-3">
            <Col xs={1}></Col>
            <Col xs={5}>
                <div className="detail-product">
                    <div className="detail-product-img set-bg">
                        <Image 
                            className="detail-product-img set-bg"
                            src= {img} 
                            alt=""
                        />
                        <div className="comment"><FontAwesomeIcon icon={faCommentDots}/> {comment}</div>
                        <div className="view"><FontAwesomeIcon icon={faEye}/> {views}</div>
                    </div>
                </div>
                <div>
                    <RowPoint title1="Category" title2="Views" first={type} second={view}/>
                    <RowPoint title1="Creator" title2="Likes" first={creator} second={likes}/>
                    <RowPoint title1="Subscribers" title2="Duration" first={subscribers} second={duration}/>
                    <RowPoint title1="Release Date" title2="Quality" first={release} second={quality}/>
                </div>

            </Col>
            <Col>
                <div className="detail-product-text">
                    <div className="news-carousel-category mb-4">
                        <Link to={"#"}>{category}</Link>
                    </div>
                    <h2>{title}</h2>
                    <h6>{source}</h6>
                    <div style={{whiteSpace: "pre-wrap"}} className="mb-5">{desc}</div>
                    <Row className="detail-product-text-btn">
                        <Col xs={7}>
                            <Link to={`/${id}/${watchingId}`}>Watch Now</Link>
                        </Col>
                        <Col><Link to='/'>Back to home</Link></Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </section>)
}

function RowPoint(props){
    return (
        <Row className="detail-product-text mb-2">
            <Col xs={1}>
                <FontAwesomeIcon icon={faSquare}/>
            </Col>
            <Col xs={5}>
                <p>{props.title1}</p>
                <span>{props.first}</span>
            </Col>
            <Col xs={1}>
                <FontAwesomeIcon icon={faSquare}/>
            </Col>
            <Col>
                <p>{props.title2}</p>
                <span>{props.second}</span>
            </Col>
        </Row>

    )
}



export default DetailProduct;