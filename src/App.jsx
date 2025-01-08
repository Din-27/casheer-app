import './App.css'
import pageInitialize from '../src/page'
import { BrowserRouter, Route, Routes } from 'react-router'
import getPath from './helper/getPath'
import NotFound from './page/NotFound'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {pageInitialize() && pageInitialize().map((x, y) => {
          const path = getPath()
          if (x.path === path) {
            return <Route key={y} path={x.path} index={x.index} element={<x.component />} />
          }
          return <Route key={y} path={x.path} index={x.index} element={<NotFound />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App