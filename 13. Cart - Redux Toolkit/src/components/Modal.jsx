import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

function Modal() {
    const dispatch = useDispatch();
    return (
        <div className="modal-container">
            <div className="modal">
                <h4>are you sure to remove all ?</h4>
                <div className="btn-container">
                    <button
                        className="confirm-btn btn"
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}
                    >
                        confirm
                    </button>
                    <button
                        className="clear-btn btn"
                        onClick={() => dispatch(closeModal())}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
