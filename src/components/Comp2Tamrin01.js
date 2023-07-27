import React, { Component } from 'react';
import '../styles/style.css';
import CompHO from "./CompHeartOTamrin01"
import CompH from "./CompHeartTamrin01"



class Comp2Tamrin01 extends Component {   
    constructor(props){
      super(props);
      this.state={
        likeFlag:false,
      }  
    }

    likeHandler=(event)=>{
        var flag=this.state.likeFlag;
        flag=!flag;
        this.setState({likeFlag:flag});
    };

 
    render() {
        
        const{name,img,price,Lor} = this.props;
        const fl=this.state.likeFlag;

        return (
            
            <div className="product-box">
                <img src={img} className="img" alt=''/>
                <h2>{name}</h2>
                <h3><mark>{price}$</mark></h3>
                <p>{Lor}</p>
                <button type="button" onClick={(event)=>this.likeHandler(event)}>{fl ? <CompH/> : <CompHO/>}</button>


                
            </div>
        );
    }
} 
export default Comp2Tamrin01;