import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)

    } catch (error) {
    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='py-10'>
      <PageTitle title="Pesquisa" />

      <h1 className='text-center font-bold mb-4 text-2xl'>Críticas ou sugestões</h1>
      <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes. <br /> Por isso, estamos sempre abertos a ouvir a sua opinião.</p>

      {
        !success &&
        <div className='w-96 max-w-full mx-auto py-10'>
          <label className='font-bold'>Seu nome:</label>
          <input type="text" className='p-4 block shadow bg-blue-100 my-2 w-full' placeholder='Nome' onChange={onChange} name="Nome" value={form.Nome} />
          <label className='font-bold'>E-mail:</label>
          <input type="text" className='p-4 block shadow bg-blue-100 my-2 w-full' placeholder='E-mail' onChange={onChange} name="Email" value={form.Email} />
          <label className='font-bold'>Whatsapp:</label>
          <input type="text" className='p-4 block shadow bg-blue-100 my-2 w-full' placeholder='Whatsapp' onChange={onChange} name="Whatsapp" value={form.Whatsapp} />

          <label className='font-bold block mt-5 text-center'>Atribua uma nota:</label>
          <div className='flex mb-5 justify-center'>
            {
              notas.map((nota, index) => {
                return (
                  <label key={index} className='mx-3 font-bold text-center'>{nota} <br />
                    <input type="radio" name="Nota" value={nota} onChange={onChange} />
                  </label>
                )
              })
            }
          </div>

          <button className='inline-block bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
        </div>
      }
      {
        success &&
        <div className='w-96 max-w-full mx-auto text-center'>
          <p className='text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-4'>Obrigado por contribuir!</p>

          {
            retorno.showCupom &&
            <>
              <div className='border p-4'>
                <p className='text-center mb-1 font-bold text-sm'>Você ganhou um cupom!</p>
                <div className='inline-block bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg text-white text-2xl'>
                  {retorno.Cupom}
                </div>
                <p className='text-center mt-3 text-gray-600 text-sm'>{retorno.Promo}</p>
              </div>
              <p className='text-center mt-4 text-gray-700'>Tire um print/foto desta tela e apresente ao garçom.</p>
            </>
          }
        </div>
      }
    </div >
  )
}
export default Pesquisa