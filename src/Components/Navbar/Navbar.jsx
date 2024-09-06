import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// icons for categories
import scamstars_icon from '../Assets/scamstars.png'
import localscammers_icon from '../Assets/localscammers.png'
import reportscam_icon from '../Assets/reportscam.png'
import enquirescam_icon from '../Assets/enquire-scam.png'
import provescam_icon from '../Assets/prove-scam.png'
import needhelp_icon from '../Assets/need-help.png'
import wanted_icon from '../Assets/wanted.png'
// import searchIcon from '../Assets/search-icon.png'; // Optional search icon

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="main-nav">
        <div className="nav-title">
          <NavLink to='/' style={{ textDecoration: 'none' }}><h2>Scamsters</h2></NavLink>
        </div>
        <div className="nav-search">
          <input type='text' placeholder='Search...'/>
          <button type="submit"></button>
        </div>
        <div className="nav-corruption">
          <NavLink to='/corruptionreport' style={{ textDecoration: 'none' }}><h3>CorruptionReport</h3></NavLink>
        </div>
        <div className="nav-helplines">
          <NavLink to='/helplines' style={{ textDecoration: 'none' }}><h3>HelpLines</h3></NavLink>
        </div>
        <div className="nav-login">
          <NavLink to='/hire' style={{ textDecoration: 'none' }}>Hire Us</NavLink>
        </div>
        <div className="nav-contact">
          <NavLink to='/supportus' style={{ textDecoration: 'none' }}><h3>SupportUs</h3></NavLink>
        </div>
      </div>
      <hr /> {/* Horizontal rule for separation */}
      <div className="subnav">
        <ul className='sub-navbar'>
          <NavLink to='/scamstars' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={scamstars_icon} alt="ScamStars" className='subnav-icon'/><h4>ScamStars</h4></li>
          </NavLink>
          <NavLink to='/localscammers' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={localscammers_icon} alt="Local Scammers" className='subnav-icon'/><h4>LocalScammers</h4></li>
          </NavLink>
          <NavLink to='/reportscam' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={reportscam_icon} alt="Report Scam" className='subnav-icon'/><h4>ReportScam</h4></li>
          </NavLink>
          <NavLink to='/enquire' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={enquirescam_icon} alt="Enquire" className='subnav-icon'/><h4>Enquire</h4></li>
          </NavLink>
          <NavLink to='/provescam' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={provescam_icon} alt="Prove Scam" className='subnav-icon'/><h4>ProveScam</h4></li>
          </NavLink>
          <NavLink to='/needhelp' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={needhelp_icon} alt="Need Help" className='subnav-icon'/><h4>NeedHelp</h4></li>
          </NavLink>
          <NavLink to='/wanted' activeClassName="active" style={{ textDecoration: 'none' }}>
            <li><img src={wanted_icon} alt="Wanted" className='subnav-icon'/><h4>Wanted</h4></li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
