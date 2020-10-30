import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions/product.action';
import { addToCart } from '../actions/cart.action';

const Clothes = () => {
	const { product } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart)

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<div id="product">
			{product.filter((item) => {
					return item.category === "clothe";
				}).map((prod) => (
				<div className="card">
					<Link to={`/vetements/${prod.id}`}>
						<img src={prod.image} alt="" /> 
					</Link>
					<div className="content">
						<h3>
							<Link to={`/vetements/${prod.id}`}>{prod.name}</Link>
						</h3>
						<span>{prod.price}€</span>
						 <p>{prod.description}</p>
						<button onClick={() => dispatch(addToCart(prod.id, cart))}>Ajouter au panier</button> 
					</div>
				</div>
			))}
		</div>
	);
};

export default Clothes;
