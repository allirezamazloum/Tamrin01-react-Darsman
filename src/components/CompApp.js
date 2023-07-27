import React, { Component } from 'react';
import Comp2 from "./Comp2Tamrin01";
import {LoremIpsum} from "react-lorem-ipsum";
import h1 from "../images/f01.jpg"
import h2 from "../images/f02.jpg"
import h3 from "../images/f03.jpg"
import h4 from "../images/f04.jpg"


class CompApp extends Component {
    constructor(props){
        super(props);
        this.state={
            
            product:[
                {id: 1 , name:"Product_1" ,   img:h1, price:230,Lor: LoremIpsum({ random:true,avgWordsPerSentence:2 })},
                {id: 2 , name:"Product_2" ,   img:h2, price:410,Lor:LoremIpsum({ random:true,avgWordsPerSentence:2 })},
                {id: 3 , name:"Product_3" ,   img:h3, price:32,Lor:LoremIpsum({ random:true,avgWordsPerSentence:2 })},
                {id: 4 , name:"Product_4" ,   img:h4, price:75,Lor:LoremIpsum({ random:true,avgWordsPerSentence:2 })},

            ],
        };
    }
    render() { 
        return (
            <div>
                    <div style={{display:"flex"}}>
                        {this.state.product.map((product)=>(
                        <Comp2 key={product.id} name={product.name} img={product.img} price={product.price} Lor={product.Lor} />
                        ))}
                
                    </div>
               
            </div>
        );
    }
}
export default CompApp;
