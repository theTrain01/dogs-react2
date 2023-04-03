import React from 'react';

import FavoriteItemDog from './FavoriteItemDog'

const FavoriteBlock = ({dogItems, removeFavorites}) => {
    return (
        <div className='favorite__block'>
            <h3 className='favorite__title'>Избранные</h3>
            <div className='photo__dog'>
                {dogItems.map((item) => 
                    <FavoriteItemDog item = {item} removeFavorites = {removeFavorites}/>
                )}
            </div>
        </div>
    )
    
}

export default FavoriteBlock;

