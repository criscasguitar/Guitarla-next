import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

export default function Header() {

    const router = useRouter()
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link legacyBehavior href='/'>
                <a>
                    <Image src='/img/logo.svg' width={300} height={40} alt='Logo image'/>
                </a>
            </Link>

            <nav className={styles.navegacion}>
                <Link legacyBehavior href="/"> 
                    <a className={router.pathname === '/' ? styles.active : ''} > 
                        Home
                    </a>
                 </Link>
                <Link legacyBehavior href="/aboutUs">
                    <a className={router.pathname === '/aboutUs' ? styles.active : ''} > 
                        About Us
                    </a>    
                 </Link>
                 <Link legacyBehavior href="/store"> 
                    <a className={router.pathname === '/store' ? styles.active : ''} > 
                        Store
                    </a>
                </Link>
                <Link legacyBehavior href="/blog">  
                    <a className={router.pathname === '/blog' ? styles.active : ''} > 
                        Blog
                    </a>
                </Link>

                <Link legacyBehavior href='/shoppingCart'>
                    <a>
                        <Image width={30} height={25} src='/img/carrito.png' alt='Cart image'/>
                    </a>
                </Link>

            </nav>
        </div>
    </header>
  )
}
