import React from 'react'
import './Sidebar.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option">
            <AddCircleOutlineIcon />
            <p>Add Item</p>
          </NavLink>
           <NavLink to="/list" className="sidebar-option">
            <AddShoppingCartTwoToneIcon />
            <p>List Items</p>
          </NavLink>
           <NavLink to="/orders" className="sidebar-option">
           <AddShoppingCartTwoToneIcon />
            <p>Orders</p>
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar