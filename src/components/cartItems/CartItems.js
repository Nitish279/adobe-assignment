import React from 'react';
import CartTotal from './CartTotal';

const Basket = (props) => {
    const { cartItems } = props;

    return (
        <div className="row">
            <div className="col-lg-9">
                <div className="alert alert-secondary">
                    {cartItems.length === 0
                        ? "Basket is empty" :
                        <div>You have {cartItems.length} items in the basket. <hr /></div>
                    }
                    {cartItems.length > 0 &&
                        <div>
                            <ul style={{ marginLeft: -25 }}>
                                {cartItems.map(item => (
                                    <li key={item.id}>
                                        <b>{item.name}</b>
                                        <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                            onClick={(e) => props.handleRemoveFromCart(e, item)}>X</button>
                                        <br />
                                        {item.count} X {item.price}
                                    </li>))
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="col-lg-3">
                <CartTotal cartItems={cartItems} />
            </div>
        </div>
    )
}

export default Basket;
