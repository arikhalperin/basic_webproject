import * as React from 'react';
import {ToastContainer} from "react-toastify";

const ToastComponent = () => {
    return (
        <div className="toast-div">
            <ToastContainer
                position="bottom-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                //pauseOnVisibilityChange
                draggable
                rtl={false}
                pauseOnHover
            />
        </div>
    )
};

export default ToastComponent;
