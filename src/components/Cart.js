import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/product.action';
// import Colors from './Colors';
// import '../css/Details.css';
import './Cart.css';

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);

	const reduction = (id) => {
		cart.forEach((item) => {
			if (item._id === id) {
				item.count === 1 ? (item.count = 1) : (item.count -= 1);
			}
		});
	};

	const increase = (id) => {
		cart.forEach((item) => {
			if (item._id === id) {
				item.count += 1;
			}
		});
	};

	const removeProduct = (id) => {
		if (window.confirm('Voulez-vous vraiment supprimer cet article?')) {
			cart.forEach((item, index) => {
				if (item._id === id) {
					cart.splice(index, 1);
				}
			});
			getTotal();
		}
	};

	const getTotal = () => {
		const res = cart.reduce((prev, item) => {
			return prev + item.price * item.count;
		}, 0);
	};

	return (
		<div>
			{cart.length === 0 ? (
				<h2 style={{ textAlign: 'center' }}>Aucun produit dans le panier</h2>
			) : (
				cart.map((item) => (
					<div className="details" key={item.id}>
						<img src={item.image} alt="" />
						<div className="box">
							<div className="row">
								<h2>{item.name}</h2>
							</div>
							<div className="row">
								<span>{item.price}€</span>
							</div>
							<p>{item.description}</p>
							<p>Quantité :</p>
							<div className="amount">
								<button className="count" onClick={() => reduction(item._id)}>
									{' '}
									-{' '}
								</button>
								<span>1{item.count}</span>
								<button className="count" onClick={() => increase(item._id)}>
									{' '}
									+{' '}
								</button>
							</div>
						</div>
						<div className="delete" onClick={() => removeProduct(item._id)}>
							X
						</div>
					</div>
				))
			)}
			<div className="paiementButton">
				<Link to="/payment">
					<button className="buttonCart">Paiement</button>
				</Link>
			</div>
			<div className="paiementButton">
				<p>-ou-</p>
			</div>
			<div className="paiementButton">
				<Link to="/">
					<button className="buttonCart">Continuer mes achats</button>
				</Link>
			</div>
			<div className="total">
				<h3>Total:€</h3>
			</div>
		</div>
	);
};

export default Cart;
