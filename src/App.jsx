import React from 'react'
import UserCards from './Components/UserCards'
import UserList from './Components/UserList'

const App = () => {

    <UserCards/>
  return (
    <div className='flex flex-col grid-cols-3 bg-[#343a40]'>

        <div></div>

        <h4 className='flex items-center justify-center mb-6 bg-[#adb5bd]  text-center p-6'>List Users</h4>
        
        <div className='flex flex-col justify-center items-center'>
            
            
            <UserList/>
            

        </div>
    </div>
  )
}

export default App