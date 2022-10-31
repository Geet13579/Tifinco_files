

import React, { Component } from 'react'

import MobileOnePage from './Onepage/MobileOnePage.js'

import TabletOnepage from './Onepage/TabletOnepage.js';
import DesktopOnepage from './Onepage/DesktopOnepage.js';



export default class Onepage2 extends Component {



  state = {
    width: window.innerWidth,
  
   }
componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
   window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
  window.addEventListener('scroll', this.handleScroll);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};



 
render() {
  const { width } = this.state;
  const isMobile = width <= 640;
  const isTablet = width<=860;
  // the rest is the same...

 if (width<=640) {
   return (
    <MobileOnePage/>
   
   
   
   );
 }
   else if(width>=641 && width<=1007)
{
  return(

    <TabletOnepage/>
  );

} 
else{
  return(

    <DesktopOnepage/>
  )
  
}
 
    
 
 }
}

