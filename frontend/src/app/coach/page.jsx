import Avatar from '@/components/avatar/Avatar'
import MenuBar from '@/components/menuBar/MenuBar'
import StatusBar from '@/components/statusBar/StatusBar'
import { PiArrowFatRightLight } from "react-icons/pi";
import { AiOutlineCheck} from "react-icons/ai";
import React from 'react'


const Coach = () => {
  return (
   <main className='max-w-[390px] bg-black min-h-screen'>
    <StatusBar/>
    <MenuBar/>

    <div className='px-4'>

    <div>    
    <h2 className='py-[16px] text-[24px] font-medium text-Turquesa/600'>
        Verificación de perfil
        </h2>

        <p className='py-8 text-[18px] text-white font-light'>
        Validá tu experiencia completando los datos,
        <br />
         serás notificado una vez que seas aceptado.
        </p>
    </div>

    <div className='flex justify-center items-center gap-6 py-4'>
    <Avatar/>
    <PiArrowFatRightLight className="text-Turquesa/600 w-[52px] h-[36px]"/>
    <Avatar/>
    </div>

    <div>
    <p className='py-8 text-[18px] text-white font-light'>
    Una vez que tu perfil sea verificado tu avatar 
        <br />
         será distinguido como el de un coach.
        </p>
    </div>  

    <button className='w-[380px] h-[40px] text-black rounded-[8px]
     my-8 bg-Turquesa/700 flex items-center justify-center gap-[10px] text-[18px]'>
        <span><AiOutlineCheck/></span>Verificar perfil
    </button>

    </div>
    
    <div className='flex justify-center items-end mt-44'>
    <div className='border-[2px] border-white w-[105px]'></div>
    </div>

   </main>
  )
}

export default Coach