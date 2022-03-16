import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 p-4">
        <div className='container mx-auto text-center font-bold text-white'>
          Projeto desenvolvido por: Daniel Zini

          <div className='mt-4'>
            <img className='inline p-4' src="/logo_semana_fsm.png" alt="" width={250} />
            <img className='inline p-4' src="/logo_devpleno.png" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}
export default Footer