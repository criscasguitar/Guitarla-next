import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {

    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : [] //parse convierte de string a arreglo
    
    const [cart, setCart] = useState(cartLS)
    const [paginaLista, setPaginaLista] = useState(false)

    useEffect (() => {
        setPaginaLista(true)
    }, [])

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart)) // stringify convierte de arreglo a string
    }, [cart])
    
    
  const addCart = guitar => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(cart.some( guitarState =>  guitarState.id === guitar.id )) {
        // Iterar para actualizar la cantidad
        const cartUpdated = cart.map( guitarState => {
            if( guitarState.id === guitar.id ) {
                guitarState.amount = guitar.amount;
            } 
            return guitarState;
        });
        // Se asigna al array
        setCart([...cartUpdated]);
        localStorage.setItem('cart', JSON.stringify( cart ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCart([...cart, guitar]);
        localStorage.setItem('cart', JSON.stringify( cart ));
    }
}

const eliminarProducto = id => {
    const cartUpdated = cart.filter( product => product.id != id)
    setCart(cartUpdated)
    window.localStorage.setItem('cart', JSON.stringify( cart ));
}

const actualizarCantidad = guitar => {
  const cartUpdated = cart.map( guitarState => {
    if(guitarState.id === guitar.id ) {
      guitarState.amount = parseInt( guitar.amount )
    } 
    return guitarState
  })
  setCart(cartUpdated)
  window.localStorage.setItem('cart', JSON.stringify( cart ));
}
    return paginaLista ?  <Component {...pageProps} 
        cart={cart}
        addCart={addCart}
        eliminarProducto={eliminarProducto}
        actualizarCantidad={actualizarCantidad}
    /> : null
}

export default MyApp