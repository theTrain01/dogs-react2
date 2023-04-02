import React from 'react';

const FavoriteBlock = ({dogItems, removeFavorites}) => {
    console.log(dogItems);
    return (
        <div className='favorite__block'>
            <div className='photo__dog'>
                {dogItems.map((item, index) => <div key = {console.log(index)} className='dog-box_fav'>
                    <img  
                        className='dogsCart' 
                        src={item} alt="img"
                    />
                    
                    <button onClick = {removeFavorites} className='delete'>
                        Удалить из избранного
                    </button>
                </div> )}

                
            </div>
        </div>
    )
    
}

export default FavoriteBlock;

