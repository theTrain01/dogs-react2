import React from 'react';

const FavoriteBlock = ({dogItems}) => {
    console.log(dogItems);
    return (
        <div className='favorite__block'>
            <div className='photo__dog'>
                {dogItems.map((item) => `<img src=${item} alt="img"/>`)}
            </div>
        </div>
    )
    
}

export default FavoriteBlock;