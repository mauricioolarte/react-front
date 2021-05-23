import './App.css';
import React, { useState } from 'react'



import { Carousel } from '../src/Components/Carrousel'
import { Header } from '../src/Components/Header'
import { SearchBar } from '../src/Components/searchBar'
import { Footer } from '../src/Components/Footer'



function App() {

  const data = {
    isData: false,
    values: [{
      url: "https://cdn.myanimelist.net/images/anime/11/78311.jpg?s=f844b0a0eb565be6f052105c320dbc60",
      message: "prueba",
      title: "pruebatitle"
    }]
  }
  const [dataApp, setData] = useState(data)



  return (
    <div className="App">
      <Header />
      <div>
        <SearchBar getData={setData} />
      </div>
      <Carousel showCarrusel={dataApp.isData} datos={data} />
      <Footer />
    </div>
  );
}

export { App };
