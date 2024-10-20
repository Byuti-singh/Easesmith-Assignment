import {useHistory } from 'react-router-dom';
import './index.css';
import data from '../../mock.json';

const ThankYouPage = (props) => {
    const {match} = props
    const {params} = match
    const {id} = params
    const idNumber = parseInt(id);
    const product = data.productList.filter(eachItem => eachItem.id === idNumber)[0];
    const history = useHistory();

    // redirect to home page.
    const continueShopping = () => {
        history.push("/");
    }

    return (
        <div className="thank-you">
            <p className="cart-class">Your Cart</p>
            <hr />
            <h2 className="congratulation-msg">Congratulations Order Placed!</h2>
            <img src={product.image} alt={product.plantName} className="thank-you-img" />
            <h3 className="congratulation-msg">{product.plantName}... Nice Choice!!!</h3>
            <p className="congratulation-msg"> Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
            <button className="thank-you-btn" onClick={continueShopping}>CONTINUE SHOPPING</button>
        </div>
    )
}

export default ThankYouPage