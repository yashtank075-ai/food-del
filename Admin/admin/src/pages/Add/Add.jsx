import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/asset';

const Add = () => {
    const [image,Setimage] = useState(false);
    const [data,Setdata]= useState({
      name:"",
      description:"",
      price:"",
      category:"Salad"
    });

    const onchangehandler = (event) =>{
       const name = event.target.name;
       const value = event.target.value;
       Setdata(data=>({...data,[name]:value}))
    }
 
    const onsubmithandler = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)
    }

  return (
    <div className="add">
     <form className="flex-col" onSubmit={onsubmithandler}>
        <div className="add-img-upload flex-col">
           <p>Upload Image</p>
           <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_image} alt="" />
           </label>
           <input onChange={(e)=>Setimage(e.target.files[0])} type="file"  id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onchangehandler}  type="text" name="name" value={data.name} placeholder='Enter Product Name' />
        </div>
        <div className="add-product-description">
            <p>Product Description</p>
            <textarea onChange={onchangehandler} name="description" rows="6" value={data.description} placeholder='write Description' required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select onChange={onchangehandler} value={data.category} name="category">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onchangehandler} type="Number" value={data.price} name="price" placeholder='₹50'/>
            </div>
            <button type='submit' className='add-button'>Add</button>
        </div>
     </form>
    </div>
  );
};

export default Add;
