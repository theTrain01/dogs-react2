import React from 'react';

import FavoriteBlock from './component/Favorite/FavoriteBlock.jsx';
import ImageDog from './component/ImageDog.jsx';

import './index.css'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  const [favoriteItem, setFavoriteItem] = React.useState(false);

  const [textFavorite, setTextFavorite] = React.useState('Избранные')

  const openCart = () => {
    setFavoriteItem(!favoriteItem)

    if(favoriteItem === false) {
      setTextFavorite('Выйти')
    } else {
      setTextFavorite('Избранные')
    }
  }

  const onAddToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const removeFavorites = (item) => {
    setCartItems(prev => prev.filter(el => el !== item))
  }

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/30').then((res) => {
      return res.json()
    }).then((json) => {
      setItems(json.message)
    })
  }, [])
return (
    <div className="App">
        <div className="itemDog">
        <div className='card__inner'>
            <div className='cart-box' onClick = {openCart}>
            <p className='cart__name'>{textFavorite}</p>     
            </div>
        </div>
        {favoriteItem ? <FavoriteBlock dogItems = {cartItems} removeFavorites = {removeFavorites}/> : 
            (
            <div>
                <h1 className='title'>
                  DOGS API-react
                </h1>
                <div className="first__block">
                <div className="cart__item">
                    <div className='photo__dog'>
                        {
                            items.map((item) => (
                            <ImageDog 
                                key={item}
                                image = {item}
                                onAddToCart = {onAddToCart}
                            />
                            ))
                        }
                    </div>
                </div>
                </div>
            </div>
            )
        }
        </div>
    </div>
  );
}

export default App;