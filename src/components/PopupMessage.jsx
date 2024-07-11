import React from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useEffect } from 'react';
import'react-toastify/dist/ReactToastify.css';

const PopupMessage = ( {message} ) => {

    useEffect(() => {
        toast(message);
      }, [message]);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Bounce}
        />
    </div>
  )
}

export default PopupMessage;
