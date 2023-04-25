import React from 'react';

import FavoriteItemDog from './FavoriteItemDog'

const FavoriteBlock = ({cartItems, removeFavorites}) => {
    return (
        <div className='favorite__block'>
            <h3 className='favorite__title'>Избранные</h3>
            <div className='photo__dog'>
                {cartItems.map((item) => 
                    <FavoriteItemDog key = {item} item = {item} removeFavorites = {removeFavorites}/>
                )}
            </div>
        </div>
    )
    
}

export default FavoriteBlock;

