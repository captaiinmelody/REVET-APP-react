import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import products from "../data/ProductData.js";

function Product(){
    return (
        <section className='product'>
            <Container>
                <Row>
                    <Col xs={8}>
                        <ProductTitle 
                            title="Handphone" 
                            widget={<ProductContent category="Handphone"/>}
                        />
                        <ProductTitle 
                            title="Laptop" 
                            widget={<ProductContent category="Laptop"/>}
                        />
                        <ProductTitle 
                            title="Smartwatch" 
                            widget={<ProductContent category="Smartwatch"/>}
                        />
                    </Col>
                    <Col xs={4}>
                        <ProductTitle title="Most Viewed" col1={8}/>
                        <ProductTitle title="Comment" col1={8} detail={<p></p>}/>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}

function ProductTitle(props){
    return (
            <Col xs={12}>
                <Row>
                    <Col xs={props.col1 ?? 10}>
                        <div className="section-title">
                            <h4>{props.title}</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="section-title-right">
                            { props.detail ?? <a href="/" className="primary-btn">Lihat Semua <FontAwesomeIcon icon={faArrowRight}/></a>}
                        </div>
                    </Col>
                </Row>
                {props.widget}
            </Col>
    )
}

function ProductContent(props){
    return (
        <Row className="mb-5">
            {products.filter((data)=> data.category === props.category).map((data)=>(
                <Col xs={6}>
                    <div className="product__item">
                        <div className="product__item__pic set-bg" key={data.id}>
                            <Link to={`/${data.id}`}>
                                <Image 
                                    className="product__item__pic set-bg"
                                    src= {data.img} 
                                    alt=""
                                />
                            </Link>
                            <div className="comment">{data.comment}</div>
                            <div className="view">{data.views}</div>
                        </div>
                        <div className="product__item__text mt-3">
                            <div className="news-carousel-category ">
                                <Link to={"#"}>{data.category}</Link>
                            </div>
                            <h5 className="mt-3"><Link to={`/${data.id}`}>{data.title}</Link></h5>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default Product;

