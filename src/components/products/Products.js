import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
    discountedPrice = (discountPercent, originalPrice) => {
        let disAmount = (discountPercent * originalPrice) / 100;
        let finalPrice = originalPrice - disAmount;
        return finalPrice;
    }

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-3" key={product.id}>
                <figure className="card card-product">
                    <div className="img-wrap pt-4">
                        <span className="badge badge-success">{product.discount}% off</span>
                        <img src={this.props.img_url} alt="..." />
                    </div>
                    <figcaption className="info-wrap">
                        <h6 className="title text-dots">
                            <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                                <p>{product.name}</p>
                            </a>
                        </h6>
                        <div className="action-wrap">
                            <button className="btn btn-success btn-sm float-right" onClick={(e) => this.props.handleAddToCart(e, product)}>Add to cart</button>
                        </div>
                        <div className="price-wrap h5">
                            <del className="price-old">&#x20b9;{product.price} </del>
                            <span className="price-new"> &#x20b9;{this.discountedPrice(product.discount, product.price)}</span>
                        </div>
                    </figcaption>
                </figure>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

export default Products;
