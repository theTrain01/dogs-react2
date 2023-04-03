import React from 'react';

const FavoriteItemDog = ({item, removeFavorites}) => {
    return (
        <div key = {item} className='dog-box_fav'>
            <img  
                className='dogsCart' 
                src={item} alt="img"
            />
                        
            <button onClick = {() => removeFavorites(item)} className='delete'>
                Удалить из избранного
            </button>
        </div> 
    )
}

export default FavoriteItemDog;