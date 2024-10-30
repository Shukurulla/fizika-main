import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { url } from '../utils/Url';
import { hex_to_ascii } from '../utils/hexToAscii';

const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const EMAIL="61646d696e406578616d706c652e636f6d"
  const PASSWORD="3132333435363738"

  const clearMinute = 5;

  const onSubmit = (data) => {
    // toast('Iltimas kútiń...')
    // const res = await fetch(`${url}/api/login`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           'email': data.email,
    //           'password': data.password
    //         })
    //     });
      
    //     const response = await res.json();

    //     if (response.success) {
    //       window.localStorage.setItem('token', response.token)
    //       navigate('/')
    //     } else {
    //       toast.error("E-Pochta yamasa parol qáte kiritildi!")
    //     }
    

    if (data.email === hex_to_ascii(EMAIL) && data.password === hex_to_ascii(PASSWORD)) {
      window.localStorage.setItem('token', Date.now())

      setTimeout(() => {
        window.localStorage.clear()
        navigate('/login')
      }, clearMinute * 60 * 1000);

      navigate('/')
    } else {
      toast.error("E-Pochta yamasa parol qáte kiritildi!")
    }
  }

  return (
    <>
      <form className='flex flex-col p-4 lg:p-0 max-w-sm mx-auto my-20 gap-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mb-2 gap-2'>
              <label htmlFor="email">E-Pochta</label>
              <input {...register("email")} className='ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-indigo-600 shadow-sm py-1.5 px-2 outline-none' type="email" id='email' required />
          </div>
          <div className='flex flex-col mb-2 gap-2'>
              <label htmlFor="password">Parol</label>
              <input {...register("password")} className='ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-indigo-600 shadow-sm py-1.5 px-2 outline-none' type="password" id='password' required />
          </div>
          <button className='bg-indigo-600 rounded-md text-white p-1.5 font-semibold'>Kiriw</button>
      </form>

      <Toaster />
    </>
  )
}

export default Login