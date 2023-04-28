import Image from 'next/image'
import Link from 'next/link'

export default function Guitar({guitar}) {
  const { description, image, name, price, url } = guitar
  return (
    <div>
      <Image src={image.data.attributes.formats.medium.url} alt={`Guitar Image ${name}`} width={600} height={400}/>

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <Link legacyBehavior href={`/guitars/${url}`}>
          <a>
            See more
          </a>
        </Link>
      </div>
    </div>
  )
}
