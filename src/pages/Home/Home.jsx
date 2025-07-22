import React from 'react'
import { useState } from 'react';
import Header from '../../componentes/Header/Header.jsx'
import ExploreMenu from '../../componentes/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../componentes/FoodDisplay/FoodDisplay.jsx';
import "./Home.jsx"



function Home() {
    const [category,setCategory] = useState("All");
    
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Home
