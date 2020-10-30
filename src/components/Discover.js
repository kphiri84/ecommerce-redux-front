import React, { useState } from 'react';
import { Col } from 'reactstrap';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Discover = () => {
	const description = [
		{
			gamme: "d'accessoires",
			text: 'text the text',
			link: 'accessoires'
		},
		{
			gamme: 'de sacs',
			text: 'text the text',
			link: 'sacs'
		},
		{
			gamme: 'de vêtements',
			text: 'text the text',
			link: 'vetements'
		},
		{
			gamme: 'de chaussures',
			text: 'text the text',
			link: 'chaussures'
		}
    ];
    
	const [ activeIndex, setActiveIndex ] = useState(0);

	const previous = () => {
		const index = activeIndex === 0 ? description.length - 1 : activeIndex - 1;
		setActiveIndex(index);
	};
	const next = () => {
		const index = activeIndex === description.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(index);
	};

	return (
		<Col className="section" lg="6">
			{description.map((desc, index) => (
				<div className={index === activeIndex ? 'active' : 'inactive'} >
					<h1> Découvrez notre gamme {desc.gamme}</h1>
					<p className="text">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					</p>
					<button onClick={previous}>
						<FontAwesomeIcon icon={faAngleLeft} />
					</button>
					<button onClick={next}>
						<FontAwesomeIcon icon={faAngleRight} />
					</button>
					<Link to={`/${desc.link}`}className="arrowRight">
						<p>
							Voir plus <FontAwesomeIcon icon={faArrowRight} />
						</p>
					</Link>
				</div>
			))}
		</Col>
	);
};

export default Discover;
