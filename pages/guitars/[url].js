import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "@/components/layout"

export default function Guitar({guitar, addCart}) {

    const [amount, setAmount] = useState(0)
    const {name, description, image, price} = guitar[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(amount < 1) {
            alert('amount not validated')
            return
        }

        // COnstruir el objeto de la guitarra
        const guitarSelected = {
            id: guitar[0].id,
            image: image.data.attributes.url,
            name,
            price,
            amount
        }

        // Pasando la informacion a context
        addCart(guitarSelected)
    }
  return (
    <Layout
        title={`Guitar ${name}`}
    >
        <div className={styles.guitarra}>
        <Image src={image.data.attributes.url} alt={`Guitar Image ${name}`} width={600} height={400}/>

        <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>

        <form
            onSubmit={handleSubmit} 
            className={styles.formulario}>
            <label htmlFor="amount">Amount:</label>

            <select 
                onChange={e => setAmount(+e.target.value)}
                id="amount"
            >
                <option value='0'>-- Select --</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <input 
                type="submit"
                value='Add'
            />
        </form>

        </div>
    </div>
  </Layout>
  )
}

/* export async function getServerSideProps({query: {url}}) {
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const {data: guitar} = await response.json()

    return {
        props: {
            guitar
        }
    }
} */

//se usa getStaticPaths si el routing es dinamico
export async function getStaticPaths() {
    const response = await fetch(`${process.env.API_URL}/guitars`)
    const {data} = await response.json()

    const paths = data.map(guitar => ({
        params: {
            url: guitar.attributes.url
        }
    })) 

    return {
        paths,
        fallback: false //Genera pagina 404 al no encontrar lo que se busca
    }

}

export async function getStaticProps({params: {url}}) {
    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const {data: guitar} = await response.json()

    return {
        props: {
            guitar
        }
    }
}
