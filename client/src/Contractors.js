import React from 'react';
import "./styles/css/WorkersPage.css";

const workers = [
  {
    id: 1,
    name: 'Sunil',
    age: 40,
    location: 'Delhi, India',
    available: false,
    pricePerDay: 5,
    experience: '10 years',
    imageUrl: 'https://thumbs.dreamstime.com/b/factory-worker-clipboard-hand-31301133.jpg',
    category : "Building Contractor",

  },
  {
    id: 2,
    name: 'Raman',
    age: 35,
    location: 'Mumbai, India',
    available: true,
    pricePerDay: 500,
    experience: '3 years',
    imageUrl: 'https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA=',
    category : "Cleaning Contractor",

  },
  {
    id: 1,
    name: 'Anil ',
    age: 28,
    location: 'Delhi, India',
    available: false,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105420523-1535475566932civilengineer.jpg?v=1535475620',
    category : "Marbel Contractor",

  },
  {
    id: 1,
    name: 'Karan',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://media.istockphoto.com/id/1326870605/photo/portrait-of-a-confident-young-man-working-a-construction-site.jpg?b=1&s=170667a&w=0&k=20&c=t070c9avYpnrw5Oq-ImZBtnX0fiKSj2qgAYv7KadQHg=',
    category : "Construction Contractor",

  },
  {
    id: 1,
    name: 'Mahima',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://media.istockphoto.com/id/1298550035/photo/putting-in-the-dedication-to-build-her-dreams.jpg?s=612x612&w=0&k=20&c=g9-gKgAno_DWwCS4U5FfLf1S7sypm4zFZE1xyusXlEM=',
    category : "Iron Contractor",

  },
  {
    id: 1,
    name: 'Vikas',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?cs=srgb&dl=pexels-yury-kim-585419.jpg&fm=jpg',
    category : "Decoration Contractor",

  },
  {
    id: 1,
    name: 'Dinesh',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://image.cnbcfm.com/api/v1/image/105323669-1531324756600sinadecaroll.jpg?v=1539725575&w=1920&h=1080',
    category : "Roofer Contractor",

  },
  {
    id: 1,
    name: 'Farahan',
    age: 28,
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://thewire.in/wp-content/uploads/2017/06/chinese-factory-workers.jpg',
    category : "Plumbing Contractor",

  },
  {
    id: 1,
    name: 'Ram Piyari',
    age: 28,
    category : "Electrical Contractor",
    location: 'Delhi, India',
    available: true,
    pricePerDay: 500,
    experience: '2 years',
    imageUrl: 'https://media.istockphoto.com/id/475144426/photo/african-american-woman-wearing-hardhat-and-safety-vest.jpg?s=612x612&w=0&k=20&c=URJ0M-xZ1dL5wOgpiN63VFSbfBy0mxf6Pq11oF4X5hw=',
  },
  // add more workers here...
];

const parastyle = {
  
   
    marginTop : "15px", 
    fontWeight: 'bold',
    // fontSize: '15px',
    fontFamily: 'Arial',
    // textAlign: 'center',
    
    // textShadow: '2px 2px 4px #000000',

}

const nameWorker = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '35px',
    textAlign: 'center',
    color: 'black',
}

const variableFields = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
}

const variableFieldsYes = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'green'
    // textColor: 'green'
}

const WorkerCard = ({ worker }) => {
  return (
    <div className="card-workers">
      <div className="image-container-workers">
        <img src={worker.imageUrl} alt={worker.name} />
      </div>
      <div className="details-workers">
        <h2 style={nameWorker}>{worker.name}</h2>
        <p style={parastyle}>Age: <span style ={variableFields}>{worker.age}</span></p>
        <p style={parastyle}>Category: <span style ={variableFields}>{worker.category}</span></p>
        <p style={parastyle}>Location: <span style ={variableFields}>{worker.location}</span></p>
        <p style={parastyle}>Available: <span style ={variableFieldsYes}>{worker.available ? 'Yes' : 'No'}</span></p>
        <p style={parastyle}>Price per day: <span style ={variableFields}>{worker.pricePerDay}</span></p>
        <p style={parastyle}>Experience: <span style ={variableFields} >{worker.experience}</span></p>
      </div>
    </div>
  );
};

const Contractors = () => {
  return (
    <div className="workers-page-workers">
      <h1 style={{margin:"40px"}}>Contractor Page</h1>
      <div className="container">
      <div className="workers-container-workers">
        {workers.map((worker, index) => {
          return <WorkerCard key={worker.id} worker={worker} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default Contractors;
