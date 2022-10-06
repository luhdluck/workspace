import React from "react";
import {  formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale'

import './Comment.css';
import imageUser from './user.png'

const Comment = props => {
    // const style = {
    //     color: 'red',
    //     padding: '10px',
    //     fontSize: '30px'
    // }
    
    return <div className="Comment">
        <img className="avatar" src={imageUser} alt={props.name}/>
        <div className="content">
            <h2 className="name">{props.name}</h2> 
            <p className="mail">{props.mail}</p>
            <p className="message">{props.children}</p>
            <p className="date">{formatRelative(props.date.toString(), new Date(), {locale: ptBR})}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
   </div>
};

export default Comment;