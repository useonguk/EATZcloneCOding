import React from "react";
import Header from './Headers/index'
import Content from "./Main/contents";  
import Footer from './Footer/footer';
import Add from './Delivery/DeliverySlider';
import RightSide from './rightSide/rightsidecom';

const Main = () => {
    return(
        <div style={{display:"flex"}}>
            <div>
                <Header />
                <Content />       
                <Add />
            </div>
            <RightSide />
        </div>
    );
}

// function Main(){
//     return(
//         <p>lkasdjfl</p>
//     );
// }

export default Main;