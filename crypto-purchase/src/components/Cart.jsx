import React from 'react';
import "../App.css"

const Cart = ({cartData}) => {
  return (
    <div>
        <h2 className='heading'>Your Cart</h2>
        {cartData.length==0 && <p style={{textAlign: "center"}}>Nothing in cart...</p>}
        {cartData.length>0 && <div>
            <table className='tableContent'>
                <tr>
                    <th>S.no.</th>
                    <th>Currency</th>
                    <th>Rate</th>
                    <th>Total Price</th>
                </tr>
                {cartData && cartData.map((el)=>{
                    return <tr key={el.currency}>
                        <td>{el.id}</td>
                        <td>{el.currency}</td>
                        <td>{el.price}</td>
                        <td>{el.total}</td>
                    </tr>
                })}
            </table>
        </div>}
    </div>
  )
}

export default Cart