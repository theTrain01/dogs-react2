import React from 'react';

const ImageDog = ({image,onAddToCart}) => {
  const [isAdd, setIsAdd] = React.useState(false);

  const [text, setText] = React.useState('Добавить в избранное')

  const addInFavorite = () => {
    setIsAdd(e => !e)
    onAddToCart(image)
    if(isAdd === true) {
      setText('Добавить в избранное')
    } else {
      setText('Добавлено в избранное!')
    }
  }
    return (
      <div className='card'>
        <img src = {image} alt="img"/>

        <button onClick = {() => addInFavorite(image)} className={isAdd ? 'addLike_green' : 'addLike'}>
          {text}
        </button>
      </div>
    );
  }

  
export default ImageDog;