import React from 'react';
import axios from 'axios';

import FavoriteBlock from './component/Favorite/FavoriteBlock.jsx';
import ImageDog from './component/ImageDog.jsx';

import './index.css';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  const [favoriteItem, setFavoriteItem] = React.useState(false);

  const [textFavorite, setTextFavorite] = React.useState('Избранные')

  const openCart = () => {
    setFavoriteItem(!favoriteItem)

    if (favoriteItem === false) {
      setTextFavorite('Выйти')
    } else {
      setTextFavorite('Избранные')
    }
  }

  const onAddToCart = (item) => {
    if(!cartItems.includes(item)) {
      setCartItems([...cartItems, item])
    }
    axios.post('https://6447790c7bb84f5a3e3f8553.mockapi.io/cats', {'url': item});
  }

  const removeFavorites = (item) => {
    setCartItems(prev => prev.filter(el => el !== item))
  }

  const removeDogsMain = (item) => {
    setItems(prev => prev.filter(e => e.id !== item))
  }

  React.useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => setItems(res.data))

    axios.get('https://6447790c7bb84f5a3e3f8553.mockapi.io/cats')
    .then((res) => setCartItems(res.data.map((item) => item.url)))
  }, [])

  return (
    <div className="App">
      <div className="itemDog">
        <div className='card__inner'>
          <div className='cart-box' onClick={openCart}>
            <p className='cart__name'>{textFavorite}</p>
          </div>
        </div>
        {favoriteItem ? <FavoriteBlock setCartItems = {setCartItems} cartItems={cartItems} removeFavorites={removeFavorites} /> :
          (
            <div>
              <h1 className='title'>
                CATS API-react
              </h1>
              <div className="first__block">
                <div className="cart__item">
                  <div className='photo__dog'>
                    {
                      items.map((item) => (
                        <ImageDog
                          keyImg={item.id}
                          image={item.url}
                          onAddToCart={onAddToCart}
                          removeDogsMain={removeDogsMain}
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