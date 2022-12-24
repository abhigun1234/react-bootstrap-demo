import React, { Component } from 'react'

export default class ProductDetails extends Component {

    constructor(){

        super()
        this.state={flag:false}
    }
  render() {
   let  msg=''
    // if(this.state.flag){
    //     return (

        
    //         <div>ProductDetails</div>
    //       )
    // }
    // else {
    //     return (

        
    //         <div>

    //             <ul class="list-group">
    //             <li class="list-group-item">prod1</li>
    //             <li class="list-group-item">prod2</li>
    //             <li class="list-group-item">prod3</li>
    //             <li class="list-group-item">prod4</li>
    //             <li class="list-group-item">prod5</li>
    //             </ul>
    //         </div>
    //       )
        
    // }
    return this.state.flag && <div>Welcome Students</div>
  }
}
