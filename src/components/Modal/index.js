import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { category, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" src={require(`../../assets/small/${category}/${index}.jpg`)} />
                <p>Photo Description</p>
                <button type="button" onClick={onClose}>Close this modal</button>
            </div>
        </div>);
};

export default Modal;
