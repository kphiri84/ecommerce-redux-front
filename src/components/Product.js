import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Colors from './Colors'
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../actions/product.action';
import { addToCart } from '../actions/cart.action';

const Product = () => {
	let { id } = useParams();
	const { product } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<div>
			{product
				.filter((item) => {
					return item.id === parseInt(id);
				})
				.map((item) => (
					<div className="details">
						<img src={item.image} alt="" />
						<div className="box">
							<div className="row">
								<h2>{item.name}</h2>
							</div>
							<span>{item.price}€</span>
							<p>{item.description}</p>
							<button className="cart" onClick={() => dispatch(addToCart(item.id, cart))}>
								Ajouter au panier
							</button>
						</div>
					</div>
				))}
		</div>
	);
};

export default Product;
