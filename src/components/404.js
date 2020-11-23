import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const F0F = () => {
    return (
        <div className="text-center" >
                <h1 className="py-5 w-100 text-center text-uppercase">данная страница не найдена</h1>
                <img src={require(`../img/news.jpg`).default} className="bg" alt=""/>
                <Button className="  bg-warning p-0 "><Link to='/' className='py-1 d-block px-4'>вернуться на главную</Link></Button>
        </div>
    );
}

export default F0F;
