import React from 'react'
import './ExploreMenu.css'
import { menu_item } from '../../assets/asset';
const ExploreMenu = ({category,setCategory}) => {
  return (
    <>
     <div className="explore-menu" id="explore-menu">
        <h3>Explore Our Menu</h3>
        <p className="explore-menu-p">Choose from a wide range of delicious categories...</p>
        <div className="explore-menu-list">
            {

                menu_item.map((item,index)=>{
                    return(
                      <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item' key={index}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="images" />
                        <p>{item.menu_name}</p>
                     </div>
                    );
                })
            }
        </div>
        <hr />
     </div>
    </>
  );
}

export default ExploreMenu