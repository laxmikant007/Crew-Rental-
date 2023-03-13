import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./styles/css/lform.css";


function ProductRegister() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [role, setRole] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [group, setGroup] = useState('');
    const [id,setId] = useState('');
    const [tell, setTell] = useState('');
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('name:', name);
        console.log('company:', company);
        console.log('Price:', price);
        console.log('category:', category);
        console.log('description:', description);
        console.log('group:', group);
        console.log('id:', id);
        navigate('/');


    };
    return (
        <div className="labour-form">
            <h1>Product Registration</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="photo">Product Photo:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        // handle file upload logic here
                    }}
                />


                <label htmlFor="name">Name of Product:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="company">Company :</label>
                <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                />

                <label htmlFor="price">Price per Day:</label>
                <input
                    type="text"
                    id="price-labour"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />


                <label htmlFor="category">Category (Product category ):</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <label htmlFor="pin">Description :</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <label htmlFor="age">Group Name  :</label>
                <input
                    type="text"
                    id="group"
                    value={group}
                    onChange={(event) => setGroup(event.target.value)}
                />



                <label htmlFor="role">Type of Product :</label>
                <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                    <option value="">--Please select--</option>
                    <option value="Labour">Construction </option>
                    <option value="Labour">Tiles | Marbel | Work Helper</option>
                    <option value="Labour">Loading </option>
                    <option value="Labour">Cleaing </option>
                    <option value="Labour">Shifting</option>
                    <option value="Labour">Godam | Warehouse</option>
                    <option value="Labour">Factory Labour</option>
                    <option value="Labour">Gardening Work</option>
                    <option value="Labour">Other Labour Works </option>
                </select>

                <label htmlFor="bussinessname">ID of Product  :</label>
                <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />

              



                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductRegister;