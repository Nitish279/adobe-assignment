import React, { Component } from "react";
import Products from "./components/products/Products";
import CartItems from "./components/cartItems/CartItems";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import { fetchProducts } from './actions/productsAction';
import { connect } from 'react-redux';

class App extends Component {
	constructor() {
		super();
		this.state = {
			size: "",
			sort: "",
			cartItems: [],
		};
	}
	componentDidMount() {
		if (localStorage.getItem("cartItems")) {
			this.setState({
				cartItems: JSON.parse(localStorage.getItem("cartItems"))
			});
		}
		this.props.fetchProducts();
	}

	handleRemoveFromCart = (e, product) => {
		this.setState(state => {
			const cartItems = state.cartItems.filter(a => a.id !== product.id);
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			return { cartItems: cartItems };
		});
	};

	handleAddToCart = (e, product) => {
		this.setState(state => {
			const cartItems = state.cartItems;
			let productAlreadyInCart = false;

			cartItems.forEach(cp => {
				if (cp.id === product.id) {
					cp.count += 1;
					productAlreadyInCart = true;
				}
			});

			if (!productAlreadyInCart) {
				cartItems.push({ ...product, count: 1 });
			}
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			return { cartItems: cartItems };
		});
	};

	render() {
		return (
			<Router>

				<div className="container-fluid">
					<Navbar count={this.state.cartItems.length} />
					<Switch>
						<Route path="/cart">
							<CartItems
								cartItems={this.state.cartItems}
								handleRemoveFromCart={this.handleRemoveFromCart}
							/>
						</Route>
						<Route path="/">
							<Products
								img_url="https://via.placeholder.com/150"
								products={this.props.products}
								handleAddToCart={this.handleAddToCart}
							/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.products.products
})

export default connect(mapStateToProps, { fetchProducts })(App);
