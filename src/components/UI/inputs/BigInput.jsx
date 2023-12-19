import React from 'react';
import classes from "./MainInput.module.css";

const BigInput = (props) => {
    return (
        <textarea className={classes.bigInput} {...props} name="" id="" cols="100" rows="20"></textarea>
    );
};

export default BigInput;