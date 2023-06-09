import { Route, Routes } from "react-router-dom";
import { Search } from "./components/Search/index"
import { Home } from "./views/Home";
import { Products } from "./views/Products";
import { Detail } from "./views/Detail";

function App() {
  
  return (
    <>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Products/>}/>
        <Route path='/items/:id' element={<Detail/>}/>
      </Routes> 
    </>
  )
}

export default App
