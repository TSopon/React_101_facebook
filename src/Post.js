import React from 'react';
import PropTypes from 'prop-types';

function Post({id, title}) {
    return (
        <div className='Post'>
            <div className='Post__title'>{title}</div>
            <img className='Post__image' 
            src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    )
}

export default Post;