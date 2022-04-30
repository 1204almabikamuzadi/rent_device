import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import Api from '../helpers/Api';
import { userContext } from '../Context';
import DevicesItems from '../device/DeviceItem'
import product_card from "../../../views/About";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReportedReservations from '../admin/ReportedReservations';
import ReactPaginate from 'react-paginate';
import Pagination from '../helpers/Pagination';
import Navbar from '../navbar/Navbar';


function UserProfile(props) {
    const { user, logout, logUser, isAuth } = useContext(userContext);

    const [devices, setDevices] = useState([])
    const [loading, setloading] = useState(true)
    const [currentPage, setcurrentPage] = useState(0)
    const [totalPage, settotalPage] = useState()
    const [totalItemPerPage, settotalItemPerPage] = useState()
    const [totalItems, settotalItems] = useState()
    const [key, setkey] = useState("")

    let history = useHistory();
    const handleCreate = (e) => {
        e.preventDefault();
        history.push('/create');
    }
    const handleDetails = (e) => {
        e.preventDefault();
        history.push('/device/' + e.target.value);
    }
    useEffect(() => {
        Api().get("/device").then(res => {
            
            setDevices(res.data.data) 
            settotalItems(res.data.total)
            settotalPage(res.data.last_page)
            settotalItemPerPage(res.data.per_page)
            setloading(false)
        }).catch(error => {
            console.log(error.data)
        })
    }, []);
    const handleDefault = (e) => {
        e.target.src = "http://127.0.0.1:8000/avatar/default.jpg"
        console.log("error")
    }
    const displayReservations = (e) => {
        e.preventDefault()
        history.push('/reservations')
    }
    const handleAdd = (e) => {
        e.preventDefault()
    }
    const mystyle = {
        width: "100%",
        height: "100%",

    };
    const handleSearch=(e)=>{
        e.preventDefault()
    

        Api().get('/device/search/'+key).then(res=>{
            setDevices(res.data.data) 
            settotalItems(res.data.total)
            settotalPage(res.data.last_page)
            settotalItemPerPage(res.data.per_page)
            

        }
        )
        .catch(

        )
    }
    const handleChange=(e)=>{
        e.preventDefault()
        setkey(e.target.value)
    
    }
    const listItems = devices.map(item =>
        <div className="item" key={item.id}>
            <div className="card" style={{ mystyle }}>
                <img className="card-img-top" src={"http://127.0.0.1:8000/" + item.image_path} onError={handleDefault} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{item.description.substr(0, 25) + "..."}</h5>
                    <p className="card-text">{item.price} Euro/mois</p>
                    <Link to={"/device/" + item.id}>add to cart</Link>
                    <button className="btn  btn-primary" value={item.id} onClick={handleDetails}> show details</button>
                </div>
            </div>
        </div>


    );
    const handleDevice = (e) => {
        e.preventDefault();
        Api().get("/device/2").then(res =>
            console.log(res.data)
        ).catch(error =>
            console.log("une erreur hoops"));
    }
    const pageClicked=(data)=>{
        let page=data.selected+1
        Api().get("/device?page="+page).then(res=>{
            setDevices(res.data.data)
            settotalItems(res.data.total)
            settotalPage(res.data.last_page)
            settotalItemPerPage(res.data.per_page)
        }).catch()
    }

    if (loading) {
        return <h4>Loading data...</h4>
    }
    else {
        return (
            <ErrorBoundary>

            <ProfileContainer>
                <div className="main-content container-fluid">
                   

                    <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='#'>Product List</a>
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search" name="search"></input>
                        <button className="btn btn-outline-primary" onClick={handleSearch} type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
                    <div className="items">{listItems}</div>
                    {user&&user.role=="admin"&&<button className="btn btn-lg btn-primary" onClick={handleCreate}> Create new Device</button>}

                    <div>
                  
                   <Pagination
                    initialPage={currentPage}
                    pageRangeDisplayed={5}
                    pageCount={totalPage}
                    onPageChange={pageClicked}
                   />
                    </div>


                </div>

            </ProfileContainer>
            </ErrorBoundary>

        );
    }


}

export default withRouter(UserProfile);
const ProfileContainer = styled.div`
.items{
    margin: 20px auto;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;
    background:var(--mainGrey);
    border-radius: 5px;
    
    }
    .item{
        width: 300px;
        height: 400px;
        border: 1px solid black;
        border-radius: 5px;
        overflow: hidden;
        margin: 40px 20px;
        padding:1px ;
        background-color: whitesmoke;
    
    }
    .item-img{
        width: 100%;
        max-width: 300px;
        min-height: 200px;
        display: block;
        object-fit: cover;
    }
    .item-name{
        width: 100%;
        min-height: 50px;
        text-transform: uppercase;
        margin: 10px 0px;
        color:black
        display:block
    }
    .item-price{
        margin:10px 0px;
        padding-bottom: 20px;
        line-height: 30px;
        font-size: 18px;
    }
    .item-add{
        font-weight: 700;
        font-size: 18px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: red;
        color: white;
        width: 100%;
        height: 40px;
        display: block;
        cursor: pointer;
        text-transform: uppercase;
        margin: 15px auto;
        display:block
    }
    .main-content{
        justify-content: center;
    }

`;