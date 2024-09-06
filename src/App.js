import React from 'react'
import './App.css'
import LandingPage from './Components/Project/LandingPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HelpLines from './Components/HelpLines/HelpLines';
import ScamStars from './Pages/ScamStars/ScamStars';
import LocalScamers from './Pages/LocalScamers/LocalScamers';
import RegisterScamers from './Pages/LocalScamers/Register';
import ReportScam from './Pages/ReportScam/ReportScam';
import Enquire from './Pages/Enquire/Enquire';
import ProveScam from './Pages/ProveScam/ProveScam';
import NeedHelp from './Pages/NeedHelp/NeedHelp';
import Wanted from './Pages/Wanted/Wanted';
import PostWanted from './Pages/Wanted/PostWanted';
import CorruptionReport from './Components/Corrupation/CorruptionReport';
import Hire from './Components/Hire/Hire';
import SupportUs from './Components/SupportUs/SupportUs';
import RegisterAndHire from './Components/Hire/RegisterAndHire';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/corruptionreport' element={<CorruptionReport/>}/>
      <Route path='/hire' element={<Hire/>}/>
          <Route path='/register' element={<RegisterAndHire/>}/>
      <Route path='/helplines' element={<HelpLines/>}/>
      <Route path='/supportus' element={<SupportUs/>}/>

      <Route path='/scamstars' element={<ScamStars/>}/>
      <Route path='/localscammers' element={<LocalScamers/>}/>
         <Route path='/registerscam' element={<RegisterScamers/>}/>
      <Route path='/reportscam' element={<ReportScam/>}/>
      <Route path='/enquire' element={<Enquire/>}/>
      <Route path='/provescam' element={<ProveScam/>}/>
      <Route path='/needhelp' element={<NeedHelp/>}/>
      <Route path='/wanted' element={<Wanted/>}/>
         <Route path='/postwanted' element={<PostWanted/>}/>
    </Routes>
   </Router>
  )
}

export default App
