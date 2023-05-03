import Layout from "@/components/layout"
import Image from "next/image"
import { dateFormat } from "@/utils/helpers"
import styles from '../../styles/blog.module.css'

export default function Post({post}) {
    const {title, content, image, publishedAt} = post[0].attributes
  return (
    <Layout
        title={`${title}`}
    >
       { <article className={`${styles.post} ${styles['mt-3']}`}>

            <Image src={image.data.attributes.url} width={1000} height={400} alt={`Blog image ${title}`}/>
   
                <div className={styles.contenido}>
                    <h3>{title}</h3>
                    <p className={styles.fecha}>{dateFormat(publishedAt)}</p>
                    <p className={styles.texto}>{content}</p>
                    
                </div>
        </article>}
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
    // Cuando se cambie algo  se va a cargar, se utiliza cpor ejemplo con nuevas ordenes || Se pueden utilizar dos en el mismo proyecto pero no en el mismo componente
    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const {data: post} = await response.json()
    
    return {
      props: {
        post
      }
    }
  }
  