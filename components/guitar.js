import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'

export default function Guitar({guitar}) {
  const { description, image, name, price, url } = guitar
  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} alt={`Guitar Image ${name}`} width={600} height={400}/>

      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link legacyBehavior href={`/guitars/${url}`}>
          <a className={styles.enlace}>
            See more
          </a>
        </Link>
      </div>
    </div>
  )
}
