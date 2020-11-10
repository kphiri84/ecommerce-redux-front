import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions/product.action';
import { addToCart } from '../actions/cart.action';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Login from './Login';
import Adress from './Adress';


const Payment = () => {
    const { user: currentUser } = useSelector((state) => state.auth)
	const { product } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(fetchProducts());
    }, []);
    
	return (
		<div>
			<div>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/panier">Panier</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Link to="/livraison">Livraison</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Link to="/paiement">Paiement</Link>
					</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div>{currentUser ? <Adress /> : <Login />  }</div>
		</div>
	);
};

export default Payment;
