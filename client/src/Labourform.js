import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./styles/css/lform.css";


function Labourform() {
    const [aadhar, setAadhar] = useState('');
    const [experience, setExperience] = useState('');
    const [price, setPrice] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('aadhar:', aadhar);
        console.log('experience:', experience);
        console.log('Price:', price);
        console.log('address:', address);
        console.log('pin:', pin);
        console.log('age:', age);
        navigate('/adminLabour')

    };
    return (
        <div className="labour-form">
            <h1>Labour Registration</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="photo">Profile Photo:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        // handle file upload logic here
                    }}
                />


                <label htmlFor="aadhar">Aadhar No.:</label>
                <input
                    type="text"
                    id="aadhar"
                    value={aadhar}
                    onChange={(event) => setAadhar(event.target.value)}
                />

                <label htmlFor="photo">Aadhar Photo(for Verification):</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        // handle file upload logic here
                    }}
                />

                <label htmlFor="experience">Experience (in Years):</label>
                <input
                    type="text"
                    id="experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                />

                <label htmlFor="price">Price (per day):</label>
                <input
                    type="text"
                    id="price-labour"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />


                <label htmlFor="address">Address (City Name ):</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />

                <label htmlFor="pin">Pin Code :</label>
                <input
                    type="text"
                    id="pin"
                    value={pin}
                    onChange={(event) => setPin(event.target.value)}
                />

                <label htmlFor="age">Age (only 18+) :</label>
                <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />



                <label htmlFor="role">Type of Labour :</label>
                <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                    <option value="">--Please select--</option>
                    <option value="Labour">Construction Labour</option>
                    <option value="Labour">Tiles | Marbel | Work Helper</option>
                    <option value="Labour">Loading | Unloading</option>
                    <option value="Labour">Cleaing Workers</option>
                    <option value="Labour">Home Shifting</option>
                    <option value="Labour">Godam | Warehouse</option>
                    <option value="Labour">Factory Labour</option>
                    <option value="Labour">Gardening Work</option>
                    <option value="Labour">Other Labour Works </option>
                </select>



                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Labourform