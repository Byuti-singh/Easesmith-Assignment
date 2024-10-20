import './index.css';

function AddToCartModal({isOpen, name, type, price, title, message, onConfirm, onCancel}) {
    if (!isOpen) return null;

    return (
        <div>
            {
                isOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>{title}</h2>
                            <p>{name}</p>
                            <p>{type}</p>
                            <p>₹ {price}</p>
                            <p>{message}</p>
                            <div className="modal-actions">
                                <button onClick={onConfirm} className="confirm-btn">Confirm</button>
                                <button onClick={onCancel} className="cancel-btn">Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AddToCartModal
