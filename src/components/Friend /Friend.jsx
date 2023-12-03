import React from 'react';
import './Friend.css';

const Friend = ({friend}) => {
    const {email,id,name,phone} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email:{email}</p>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default Friend;