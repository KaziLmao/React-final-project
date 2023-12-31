import React from 'react';
import classes from "./DeleteButton.module.css";

const DeleteButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.mainBtn}>
            {children}
        </button>
    );
};

export default DeleteButton;