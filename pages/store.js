import Layout from '@/components/layout'
import Guitar from '@/components/guitar'

export default function Store({guitars}) {
  
  return (
    <Layout
        title={'Virtual Store'}
        description={'Music Store'}
        > 
          <main className='contenedor'>
            <h1 className='heading'> Our Colection</h1>

            {guitars?.map(guitar => (
               <Guitar
                key={guitar.id}
                guitar={guitar.attributes}   
              />
            ))}
          </main>
    </Layout>
  )
}

/* export async function getStaticProps() {
  // Cuando se cambie algo, no se va a cargar, se debera de hacer otro build, se puede hacer con un catalago para que no s econsulte el servidor con cada visita || Se puede usar para el portfolio
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const {data: guitars} = await response.json()
  return {
    props: {
      guitars
    }
  }
} */

export async function getServerSideProps() {
  // Cuando se cambie algo  se va a cargar, se utiliza cpor ejemplo con nuevas ordenes || Se pueden utilizar dos en el mismo proyecto pero no en el mismo componente
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const {data: guitars} = await response.json()
  return {
    props: {
      guitars
    }
  }
}
