import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import DataNews from "../data/Carousel.js";

function News(){
    return (
        <section>
            <div className="news ">
            <Carousel variant="dark">
                {DataNews.map((data, i) => (
                    <Carousel.Item key={data.id}>
                        <Image
                        className="d-block news-carousel-img"
                        src= {data.link}
                        alt={data.name}
                        />
                        <Carousel.Caption className="news-carousel-caption text-start">
                            <div className="news-carousel-category">
                                <Link to={`/`}>{data.category}</Link>
                            </div>
                            <h2 className="news-caption-title">{data.name}</h2>
                            <br/>
                            <Link to={`/${data.id}`}><span>Lihat</span></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
        </section>
    )
}

export default News;