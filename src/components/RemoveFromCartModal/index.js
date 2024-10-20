import './index.css';

function RemoveFromCartModal({isRemoveOpen, name, type, price, title, message, onRemoveConfirm, onRemoveCancel}) {
    if (!isRemoveOpen) return null;

    return (
        <div>
            {
                isRemoveOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>{title}</h2>
                            <p>{name}</p>
                            <p>{type}</p>
                            <p>₹ {price}</p>
                            <p>{message}</p>
                            <div className="modal-actions">
                                <button onClick={onRemoveConfirm} className="confirm-btn">Confirm</button>
                                <button onClick={onRemoveCancel} className="cancel-btn">Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default RemoveFromCartModal
