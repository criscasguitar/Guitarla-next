import Layout from '@/components/layout'
import Post from '@/components/post'
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {
  return (
    <Layout
        title={'Blog'}
        description={'Blog, GuitarLA, musics blogs, tips, guitars sales'}
        > 
        <main className='contenedor'>
          <h1 className='heading'>Blog</h1>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>

        </main>
    </Layout>
  )
}

export async function getStaticProps() {
  // Cuando se cambie algo, no se va a cargar, se debera de hacer otro build, se puede hacer con un catalago para que no s econsulte el servidor con cada visita || Se puede usar para el portfolio
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
  const {data: posts} = await response.json()
  return {
    props: {
      posts
    }
  }
}