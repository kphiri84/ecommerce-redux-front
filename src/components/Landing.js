import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './landing.css';
import Discover from './Discover'

const Landing = () => {
	return (
		<Container>
			<Row>
				<Col lg="6">
					<img
						className="homeImg"
						src="https:www.trends.fr/wp-content/uploads/2016/12/nike-uptempo-black-pack-5-1800x1200.jpg"
						alt=""
					/>
				</Col>
				<Discover />
			</Row>
			<Row>
				<Col lg="3">
					<img
						className="homeImg2"
						src="https:cloud.sneakerdistrict.nl/media/20200122211507/Nike-Air-Max-270-Bowfin-Black-Phantom-Desert-3-1600x1067.jpg"
						alt=""
					/>
				</Col>
				<Col className="section" lg="6">
					<h1>A propos</h1>
					<p>Catalogues de chaussures</p>
				</Col>
				<Col lg="3">
					<img
						className="homeImg2"
						src="https:i.pinimg.com/originals/72/f0/7f/72f07f2113f5922c684372082acf3062.jpg"
						alt=""
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Landing;
