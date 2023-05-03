import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "@/components/layout"

export default function Guitar({guitar}) {
    const {name, description, image, price} = guitar[0].attributes
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
