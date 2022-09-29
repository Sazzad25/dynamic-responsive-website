import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    // const showToastMessage = () => {
    //     toast.success('Success Notification !', {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // };

    return (
        <div className='cart'>
            <div>
                <img src="https://png.pngtree.com/png-clipart/20210807/ourmid/pngtree-volleyball-player-watercolor-silhouette-png-image_3784112.jpg" alt="" />
                <h4>Rumana Ahmed</h4>
            </div>
            <h5>Add A Break</h5>
            <div>
                <li>20s</li>
                <li>30s</li>
                <li>40s</li>
                <li>50s</li>
            </div>
            <p>Working time: {total}s</p>
            <p>Break time: 0s</p>
            <button>Activity Completed</button>
        </div>
    );
};

export default Cart;