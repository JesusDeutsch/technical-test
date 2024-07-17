import { Mail, Phone } from 'lucide-react'
import React from 'react'



const UserCards = ({first_name, last_name, email, phone_number, id}) => { 


  return (
    <div
    className='
    flex flex-col items-center justify-center w-[300px]  h-[350px] rounded-[30px] bg-[#adb5bd]  shadow-md shadow-black p-2 gap-5]
'
    >
        <img src= {`https://robohash.org/${id}?set=set5`} alt={`${first_name}`} className='flex w-[250px] rounded-full max-h-[250px]	gap-4' />
        <div className='flex flex-col text-left'>
            <div>{`${first_name} ${last_name}`}</div>
            <div><Mail/> {`${email}`}</div>
            <div><Phone/>{` ${phone_number}`}</div>

        </div>
    </div>
  )
}

export default UserCards