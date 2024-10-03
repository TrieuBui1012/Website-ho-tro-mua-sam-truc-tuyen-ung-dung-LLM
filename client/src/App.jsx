import Web from './web/_id.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DienLanh from './web/content/DienLanh.jsx'
import TiviSound from './web/content/TiviSound.jsx'
import GiaDung from './web/content/GiaDung.jsx'
import PhoneTablet from './web/content/PhoneTablet.jsx'
import Health from './web/content/Health.jsx'
import Fashion from './web/content/Fashion.jsx'
import MeBe from './web/content/MeBe.jsx'
import Content from "./web/content/Content"

function App() {

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Web />}>
            <Route index element={<Content />} />
            <Route path="/DienLanh" element={<DienLanh />} />
            <Route path="/Tivi-Amthanh" element={<TiviSound />} />
            <Route path="/DienThoai-Maytinhbang" element={<PhoneTablet />} />
            <Route path="/Do-gia-dung" element={<GiaDung />} />
            <Route path="/Yte-suckhoe" element={<Health />} />
            <Route path="/Thoitrang-mypham" element={<Fashion />} />
            <Route path="/Me&Be" element={<MeBe />} />
          </Route>

        </Routes>
      </Router>

  )
}

export default App
