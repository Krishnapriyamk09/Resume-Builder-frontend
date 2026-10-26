
import './App.css'
import Edit from './components/Edit'
import Footer from './components/Footer'
import Header from './components/Header'
import Preview from './components/Preview'
import Resumeinput from './components/Resumeinput'
import Download from './pages/Download'
import Home from './pages/Home'
import Info from './pages/Info'
import Resume from './pages/Resume'
import Saved from './pages/Saved'
import View from './pages/View'
import Pnf from './pages/Pnf'
import { Route,Routes } from 'react-router-dom'


function App() {
 

  return (
    <>
    <Header />

<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/resume-details' element={<Info />} />
    <Route path='/all-resumes' element={<Saved />} />
    <Route path='/resume/:id' element={<View />} />
    <Route path='/downloads' element={<Download />} />
    
    <Route path='/*' element={<Pnf />} />
</Routes>

<Footer />
    </>
  )
}

export default App
