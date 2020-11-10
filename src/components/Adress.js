import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../actions/auth.action';

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};

const vusername = (value) => {
	if (value.length < 3 || value.length > 20) {
		return (
			<div className="alert alert-danger" role="alert">
				The username must be between 3 and 20 characters.
			</div>
		);
	}
};

const Adress = () => {
	const form = useRef();
	const checkBtn = useRef();

	const [ firstname, setFirstname ] = useState('');
	const [ lastname, setLastname ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ successful, setSuccessful ] = useState(false);

	const { message } = useSelector((state) => state.message);
	const dispatch = useDispatch();

	const onChangeFirstname = (e) => {
		const firstname = e.target.value;
		setFirstname(firstname);
	};

	const onChangeLastname = (e) => {
		const lastname = e.target.value;
		setLastname(lastname);
	};

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
    // const [ Monsieur, setMonsieur ] = useState('Monsieur');
    // const [ Madame, setMadame ] = useState('Madame');
    // const [ Mademoiselle, setMademoiselle ] = useState('Mademoiselle');
	const handleRegister = (e) => {
		e.preventDefault();

		setSuccessful(false);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			dispatch(register(firstname, lastname, username, email, password))
				.then(() => {
					setSuccessful(true);
				})
				.catch(() => {
					setSuccessful(false);
				});
		}
	};

	return (
		<div className="col-md-12">
			<div className=" card-container card2">
				<Form onSubmit={handleRegister} ref={form}>
					{!successful && (
						<div>
							<div className="form-group">
								<select
									// value={}
									// onChange={(e) => dispatch(addToCart(item.id, e.target.value))}
								>
									<option key="Monsieur" value="Monsieur">
										Monsieur
									</option>
									<option key="Madame" value="Madame">
										Madame
									</option>
									<option key="Mademoiselle" value="Mademoiselle">
										Mademoiselle
									</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="firstName">Prénom</label>
								<Input
									type="text"
									className="form-control"
									name="firstname"
									value={firstname}
									onChange={onChangeFirstname}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="lastName">Nom</label>
								<Input
									type="text"
									className="form-control"
									name="lastname"
									value={lastname}
									onChange={onChangeLastname}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="username">Numéro de téléphone</label>
								<Input
									type="text"
									className="form-control"
									name="username"
									value={username}
									onChange={onChangeUsername}
									validations={[ required, vusername ]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Numéro et nom de rue</label>
								<Input
									type="text"
									className="form-control"
									name="email"
									value={email}
									onChange={onChangeEmail}
									validations={[ required, validEmail ]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="password">Complément d'adresse</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[ required ]}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Code postal</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[ required ]}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Ville</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[ required ]}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Pays</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[ required ]}
								/>
							</div>

							<div className="form-group">
								<button className="btn btn-primary btn-block">Procéder au paiement</button>
							</div>
						</div>
					)}

					{message && (
						<div className="form-group">
							<div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
								{message}
							</div>
						</div>
					)}
					<CheckButton style={{ display: 'none' }} ref={checkBtn} />
				</Form>
			</div>
		</div>
	);
};

export default Adress;
