import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
            <a>
              <img src="/logo_paplpitebox.png" alt="PalpiteBox" className={styles.logo} />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-gray-200 p-4 shadow-md text-center">
        <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </>
  )
}
export default Header