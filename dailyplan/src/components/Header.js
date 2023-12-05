import React from 'react';
import Button from './Button';
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
    const date = new Date().toDateString();
    return (
        <header className="header">
            <h3 className="app-header">Daily plan for : </h3>
            <h3 className='getDate'>{date}</h3>
            <Button onClick={showForm} color={changeTextAndColor ? '#fe6c6c' : '#7EAA92'} text={changeTextAndColor ? 'Close Menu' : 'Add Task'} />
        </header>
    )
}

export default Header;
