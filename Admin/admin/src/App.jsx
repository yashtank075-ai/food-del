import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Order/Orders'
function App() {
  return (
    <>
    <Navbar />
    <hr />
    <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
