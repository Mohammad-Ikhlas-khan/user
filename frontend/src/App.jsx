import { useState } from 'react'
import { Routes,Route,useNavigate } from 'react-router-dom'
import Users from './pages/Users'
import Form from './components/Form'
import SingleUser from './pages/SingleUser'

function App() {
  const [users,setUsers] = useState([]);

  return (
    <div className='min-h-screen w-full bg-gray-900 relative p-6 overflow-hidden'>
      <Routes>
          <Route path='/' element={<Users users={users} setUsers={setUsers}/>}/>
          <Route path='/create' element={<Form/>}/>
          <Route path='/user/:id'  element={<SingleUser/>}/>
      </Routes>
    </div>
  )
}

export default App
