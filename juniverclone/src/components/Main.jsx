import React from "react";
import Header from './Headers/index'
import Content from "./Main/contents";  
import Footer from './Footer/footer';
import Add from './Delivery/DeliverySlider';

const Main = () => {
    return(
        <div>
            <Header />
            <Content />       
            <Add />
        </div>
    );
}

// function Main(){
//     return(
//         <p>lkasdjfl</p>
//     );
// }

export default Main;