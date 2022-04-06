import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Myherds from './components/myherds/myherds';
import Addanimal from './components/addanimals/addanimal'
import Addmedication from './components/addmedication/addmedication'
import Alert  from './components/alerts/alerts';
import Finance from './components/finance/finance'
import Updateweight from './components/updateweight/updateweight'
// import { Component } from './components/components';
import Mainpage from './mainpage/mainpage'
import Navmain from './Nav/navmain'
// import Account from './components/account/account'

function App() {
  return (
    <>

    <BrowserRouter>
    <Navmain />
      <Routes>
        <Route path="/" element={< Mainpage/>}></Route>
        {/* <Route path="/account" element={<Account/>}/> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="/myherds" element={<Myherds/>}/>
          <Route path="/addanimals" element={<Addanimal />}/>
          <Route path="/addmedication" element={<Addmedication />} />
          <Route path="/alerts" element={<Alert/>} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/updateweight" element={<Updateweight/>} />

      </Routes>
    </BrowserRouter>









    
    </>
  );
}

export default App;
