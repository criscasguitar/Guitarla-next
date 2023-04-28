import Image from 'next/image'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'

export default function AboutUs() {
  return (
    <Layout
        title={'About Us'}
        description='About us, GuitarLA, music sales'
        > 
        <main className='contenedor'>
          <h2 className='heading'>About Us</h2>
          
          <div className={styles.contenido}> 
            <Image src='/img/nosotros.jpg' width={1000} height={800} alt='About US'/>
              <div className={styles.description}>
                <p>
                  Proin iaculis, arcu sit amet fermentum volutpat, nulla lacus rutrum lectus, id porttitor erat enim a enim. In vestibulum, purus eu cursus ultricies, odio quam mollis ipsum, non mollis est mauris ut dui. Praesent orci ex, tincidunt sit amet porttitor at, molestie vel nisi. Maecenas sodales est eu leo rhoncus fermentum.  </p>

                <p>
                  Ut imperdiet mauris at massa vehicula interdum. Duis nec pharetra nibh. Morbi efficitur a mi ut rutrum. Praesent porta metus a gravida fermentum. Vivamus auctor iaculis diam. Sed aliquet nibh lacus, non fringilla metus pulvinar sit amet.
                </p>
              </div>
          </div>
        </main>
    </Layout>
  )
}
