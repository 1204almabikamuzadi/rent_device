import React, { useState, useEffect,useContext } from 'react'
import ReportedReservations from './ReportedReservations'
import Members from './Members'
import Users from './Users'
import DataTable from'./DataTable'
import { userContext } from '../Context';
import Reservations from '../device/Reservations'
import UserProfile from '../profile/UserProfile'



function AdminPannel() {
  const [state, setstate] = useState(1)
  const {user,logout,logUser,isAuth}=useContext(userContext);

  const printKey = (index) => {
    setstate(index)
    window.localStorage.setItem("selectedPannel",index)
  }
  useEffect(() => {
    if (window.localStorage.getItem("selectedPannel")) {

      const tab = window.localStorage.getItem("selectedPannel")
      setstate(tab)
    }

    return () => {
      window.localStorage.removeItem("selectedPannel")
    }
  }, []);




  return (
    <div>
    

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className={state ==1 ? "nav-link active" : "nav-link"} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" value="1" aria-selected="true" onClick={() => printKey(1)}>Devices</a>
        </li>
        {user&&user.role=="admin"&&
        <li className="nav-item">
          <a className={state ==2 ? "nav-link active" : "nav-link"} id id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" value="2" aria-selected="false" onClick={() => printKey(2)}>Users</a>
        </li>}
            
        <li className="nav-item">
          <a className={state ==3 ? "nav-link active" : "nav-link"} id id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false" onClick={() => printKey(3)}>Actives Reservations</a>
        </li>
        <li className="nav-item">
          <a className={state ==4 ? "nav-link active" : "nav-link"} id id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false" onClick={() => printKey(4)}>Reported reservations</a>

        </li>
        <li className="nav-item">
          <a className={state ==5 ? "nav-link active" : "nav-link"} id id="members-tab" data-toggle="tab" href="#members" role="tab" aria-controls="members" aria-selected="false" onClick={() => printKey(5)}>Members</a>
        </li>
      </ul>


      <div className="tab-content">
        <div className={state ==1 ? "tab-pane active" : "tab-pane"} id="home" role="tabpanel" aria-labelledby="home-tab" ><UserProfile/></div>
         <div className={state ==2 ? "tab-pane active" : "tab-pane"} id="profile" role="tabpanel" aria-labelledby="profile-tab" ><Members /></div>
        <div className={state ==3 ? "tab-pane active" : "tab-pane"} id="messages" role="tabpanel" aria-labelledby="messages-tab"  ><Reservations/></div>
        <div className={state ==4 ? "tab-pane active" : "tab-pane"} id="settings" role="tabpanel" aria-labelledby="settings-tab"  ><ReportedReservations /></div>
        <div className={state ==5 ? "tab-pane active" : "tab-pane"} id="members" role="tabpanel" aria-labelledby="members-tab"  ><DataTable /></div>

      </div>
      

    </div>
  )
}

export default AdminPannel
