import React, { Component } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './menu.css';
export default class Our_menu extends Component {
  render() {
    return (
      <div>

        {/* <table class="table"  >
        <thead>
            <tr>
            <th scope="col">Here's what you get(VEG)</th>
            <th scope="col">ECO</th>
            <th scope="col">EXECUTIVE</th>
            <th scope="col">PREMIUM</th>
         
           
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Dal</th>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            </tr>
            <tr>
            <th scope="row">Rice</th>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            </tr>
            <tr>
            <th scope="row">Chapati (3 Nos.)</th>
            <td ><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            </tr>
            <tr>
            <th scope="row">1st Regular Vegetable</th>
            <td><CloseIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            </tr>
            <tr>
            <th scope="row">2nd Regular Veg & Special Veg</th>
            <td>6 Days & 1 Day</td>
            <td>5 Days & 2 Days</td>
            <td>4 Days & 3 Days</td>
            </tr>
            <tr>
            <th scope="row">Salad & Pickle</th>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            <td><CheckIcon/></td>
            </tr>
            <tr>
            <th scope="row">Sweet Dish</th>
            <td>Once a week</td>
            <td>Twice a week</td>
            <td>Thrice a week</td>
            </tr>
            <tr>
            <th scope="row">PRICE</th>
            <td>100*</td>
            <td>130*</td>
            <td>160*</td>
            </tr>
        </tbody>
        </table> */}

         
          <table class="table">
          <div className='menumaintabluardiv'>
      
            <div className='menucolm1'>
            <ul class="menulisttable1" >
          
            <li className='headerli' >Tifinco Subscription Plans</li>
            <span className='spanheight1' ></span>
            
            <li class="menuliheadtable1">Here's what you get(VEG)</li>
             
            <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Dal</li>
             <span style={{height:"10px"}}></span>
           
            <li class="menulitable12" >Rice</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Chapati (3 Nos.)</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >1st Regular Vegetable</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >2nd Regular Veg & Special Veg</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Salad & Pickle</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Sweet Dish</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable1"  >PRICE</li>
             <span style={{height:"10px"}}></span>


             {/* for nonveg */}

             <span className="setspanhieght" ></span>
             
            <li class="menuliheadtable1">Here's what you get(Non-VEG)</li>
             
            <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Dal</li>
             <span style={{height:"10px"}}></span>
           
            <li class="menulitable12" >Rice</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Chapati (3 Nos.)</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >1st Regular Vegetable</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >2nd Regular Veg & Non-Veg</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Salad & Pickle</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable12" >Sweet Dish</li>
             <span style={{height:"10px"}}></span>
            <li class="menulitable1"  >PRICE</li>
             <span style={{height:"10px"}}></span>
          </ul>

            </div>
            <div className='menucolm2' style={{textAlign:"center"}}>
            <ul class="menulisttable2">
            <span style={{height:"50px"}}></span>
            <span className='listspan' ></span>
            <li class="menulitable2" style={{backgroundColor:"#e3efe8"}}>Eco</li>
             <span className='listspan'></span>
            <li class="menulitable" style={{backgroundColor:"#e3efe8",color:"black"}}><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{backgroundColor:"#e3efe8",color:"black"}}><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{backgroundColor:"#e3efe8",color:"black"}}><CheckIcon /></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{backgroundColor:"#e3efe8",color:"black"}}><CloseIcon /></li>
             <span className='listspan'></span>
            <li class="menulitablelig" style={{backgroundColor:"#e3efe8",color:"black"}}>&nbsp; &nbsp;6 Days & 1 Day </li>
             <span className='listspan'></span>
            <li class="menulitable" style={{backgroundColor:"#e3efe8",color:"black"}}><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitablelig" style={{backgroundColor:"#e3efe8",color:"black"}}>Once a week</li>
             <span className='listspan'></span>
            <li class="menulitablefont" style={{backgroundColor:"#e3efe8",color:"black",color:"#bf1d42"}}>100*</li>
             <span className='listspan'></span>


             {/* for nonveg */}
             <span style={{height:"30px"}}></span>
             <span className='listspan1'></span>
            <li class="menulitable2" style={{backgroundColor:"#f3ccd59e"}}>Eco</li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{backgroundColor:"#f3ccd59e",color:"black"}}><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{backgroundColor:"#f3ccd59e",color:"black"}}><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{backgroundColor:"#f3ccd59e",color:"black"}}><CheckIcon /></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{backgroundColor:"#f3ccd59e",color:"black"}}><CloseIcon /></li>
             <span className='listspan1'></span>
            <li class="menulitablelig" style={{backgroundColor:"#f3ccd59e",color:"black"}}>&nbsp; &nbsp;6 Days & 1 Day </li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{backgroundColor:"#f3ccd59e",color:"black"}}><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitablelig" style={{backgroundColor:"#f3ccd59e",color:"black"}}>Once a week</li>
             <span className='listspan1'></span>
            <li class="menulitablefont" style={{backgroundColor:"#f3ccd59e",color:"#bf1d42"}}>110*</li>
             <span className='listspan1'></span>
          
          </ul>


            </div>
            <div className='menucolm3' style={{textAlign:"center"}}>
            <ul class="menulisttable3">
            <span style={{height:"50px"}}></span>
            <span className='listspan'></span>
            <li class="menulitable2" style={{backgroundColor:"#e3efe8"}} >Executive</li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon /></li>
             <span className='listspan'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} >5 Days & 2 Days</li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} >Twice a week</li>
             <span className='listspan'></span>
            <li class="menulitablefont" style={{backgroundColor:"#e3efe8",color:"#bf1d42"}}>130*</li>
             <span className='listspan'></span>
           {/* for nonveg */}

             <span style={{height:"30px"}}></span>
             <span className='listspan1'></span>
            <li class="menulitable2" style={{backgroundColor:"#f3ccd59e"}} >Executive</li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon /></li>
             <span className='listspan1'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} >5 Days & 2 Days</li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} >Twice a week</li>
             <span className='listspan1'></span>
            <li class="menulitablefont" style={{backgroundColor:"#f3ccd59e",color:"#bf1d42"}}>150*</li>
             <span className='listspan1'></span>
           
            
          </ul>

        

            </div>
            <div className='menucolm4' style={{textAlign:"center"}}>

            <ul class="menulisttable4">
            <span style={{height:"50px"}}></span>
            <span className='listspan'></span>
          <li class="menulitable2" style={{backgroundColor:"#e3efe8"}}>Premium</li>
           <span className='listspan'></span>
          <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
           <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} >4 Days & 3 Days</li>
             <span className='listspan'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} ><CheckIcon/></li>
             <span className='listspan'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#e3efe8",color:"black"}} >Thrice a week</li>
             <span className='listspan'></span>
            <li class="menulitablefont" style={{backgroundColor:"#e3efe8",color:"black",color:"#bf1d42"}}>160*</li>
             <span className='listspan'></span>




             {/* for nonveg */}
             <span style={{height:"30px"}}></span>
             <span className='listspan1'></span>
          <li class="menulitable2" style={{backgroundColor:"#f3ccd59e"}}>Premium</li>
           <span className='listspan1'></span>
          <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
           <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} >4 Days & 3 Days</li>
             <span className='listspan1'></span>
            <li class="menulitable" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} ><CheckIcon/></li>
             <span className='listspan1'></span>
            <li class="menulitablelig" style={{textAlign:"center",backgroundColor:"#f3ccd59e",color:"black"}} >Thrice a week</li>
             <span className='listspan1'></span>
            <li class="menulitablefont" style={{backgroundColor:"#f3ccd59e",color:"#bf1d42"}}>180*</li>
             <span className='listspan1'></span>
           
        </ul>
       
        </div>

          </div>
          </table>


          {/* for nonveg */}

      </div>
    )
  }
}
