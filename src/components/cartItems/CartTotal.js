import React from 'react'

const OrderTotal = (props) => {
  return (
    <div className="card-header" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Total</h5>
        <p className="card-title mb-2"><em>Items:<span className="float-right">{props.cartItems.length}</span></em></p>
        {/* <p className="card-text mb-0"><em>Discount: <span className="float-right">100</span></em></p>
        <p className="card-text mb-4"><em>Type Discount: <span className="float-right">100</span></em></p> */}
        <div className="card-footer">
          <em>Order Total: <span className="float-right">&#x20b9; {props.cartItems.reduce((a, c) => (a + c.price * c.count), 0)}</span></em>
        </div>
      </div>
    </div>
  )
}

export default OrderTotal;
