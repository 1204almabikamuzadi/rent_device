import React, { useState, useEffect,useContext } from 'react'
import ReportedReservations from '../admin/ReportedReservations'
import Users from '../admin/Users'
import Members from '../admin/Members'
import UserProfile from '../profile/UserProfile'
import { userContext } from '../Context';
import Reservations from '../device/Reservations'

function ProfileTabs() {
  const [state, setstate] = useState(1)
  const {user,logout,logUser,isAuth}=useContext(userContext);

  const printKey = (index) => {
    setstate(index)
    window.localStorage.setItem("selectedTab",index)
  }
  useEffect(() => {
    if (window.localStorage.getItem("selectedTab")) {

      const tab = window.localStorage.getItem("selectedTab")
      setstate(tab)
    }

    return () => {
      window.localStorage.removeItem("selectedTab")
    }
  }, []);




  return (
    <div>
    

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className={state ==1 ? "nav-link active" : "nav-link"} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" value="1" aria-selected="true" onClick={() => printKey(1)}>Home</a>
        </li>
      
        <li className="nav-item">
          <a className={state ==2 ? "nav-link active" : "nav-link"} id id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" value="2" aria-selected="false" onClick={() => printKey(2)}>Your reservations</a>
        </li>
            
      
      </ul>


      <div className="tab-content">
        <div className={state ==1 ? "tab-pane active" : "tab-pane"} id="home" role="tabpanel" aria-labelledby="home-tab" ><UserProfile /></div>
         <div className={state ==2 ? "tab-pane active" : "tab-pane"} id="profile" role="tabpanel" aria-labelledby="profile-tab" ><Reservations/></div>
      </div>
      

    </div>
  )
}

export default ProfileTabs
