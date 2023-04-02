import React from 'react';

import FavoriteBlock from './component/FavoriteBlock.jsx';
import ImageDog from './component/ImageDog.jsx'
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

    console.log(item)
  }

  const removeFavorites = (index) => {
    setCartItems((prev) => prev.filter()) 
  }

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/3').then((res) => {
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
                            items.map((item, i) => (
                              <ImageDog 
                                key={i}
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