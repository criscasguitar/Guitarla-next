import { useEffect, useState, uses } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/cart.module.css'


export default function ShoppingCart({cart, actualizarCantidad, eliminarProducto}) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = cart.reduce((total, product) => total + (product.amount * product.price), 0)
        setTotal(calculoTotal)
    }, [cart])
  return (
    <Layout
        title="Shopping Cart"
    >
        <main className="contenedor">
            <h1 className="heading">Shopping Cart</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articles</h2>

                    {cart.length === 0 ? 'Empty Cart' :  (
                        cart.map(product => (
                            <div key={product.id} className={styles.producto}>
                                <div>
                                    <Image width={250} height={480} src={product.image} alt={product.name} />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{product.name}</p>

                                    <div className={styles.cantidad}>
                                        <p>Amount:</p>

                                        <select 
                                            className={styles.select}
                                            onChange={e => actualizarCantidad({
                                                id: product.id,
                                                amount: e.target.value
                                            })}
                                            value={product.amount}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </select>

                                    </div>
                                    <p className={styles.precio}>$<span>{product.price}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{product.amount * 
                                    product.price}</span></p>
                                </div>

                                <button
                                    className={styles.eliminar}
                                    type="button"
                                    onClick={() => eliminarProducto(product.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <aside className={styles.resumen}>
                    <h3>Order Summary</h3>
                    <p>Total: ${total}</p>
                </aside>
                
            </div>
        </main>
    </Layout>
  )
}
