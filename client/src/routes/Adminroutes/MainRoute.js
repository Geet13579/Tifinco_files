import React from 'react';

import {BrowserRouter as Router, Switch, Route,useHistory } from 'react-router-dom';

// Components
import page404 from '../../Components/Pageerror';
import signauth from '../../Components/signauth';
import LoginPage from  '../../Components/Loginpage';
import Onepage from  '../../Components/Onepage';
import Onepage2 from  '../../Components/Onepage2.0';

import ourmenu from '../../Components//Onepage/Our_menu'

import demoOnepage from  '../../Components/demoOnepage';
                             
import websiteImage from '../../Components/admincomponent/websiteImage/Website_routes'
// import googlemap from  '../../Components/admincomponent/googlemap';
import dashboardindex from  '../../Components/admincomponent/dashboard/dashboardroute';
import appsliderindex from  '../../Components/admincomponent/appsliders/appslider_routes';
import categoryindex from  '../../Components/admincomponent/ProductCategories/category_routes';
import productindex from  '../../Components/admincomponent/foodproduct/product_routes';
import planroutesindex from  '../../Components/admincomponent/plandetail/planroutes';
import customerindex from  '../../Components/admincomponent/Customer/userroutesfrontend';
import HomePage  from  '../../Components/admincomponent/HomePage';
import Privacy_Policy from  '../../Components/admincomponent/Privacy_Policy';
import tifinco_privacy_policy from  '../../Components/admincomponent/TifincoPrivacyPolicy/privacy_policyRoutes.js';
import KitchenRoutes from './kitchen/KitchenRoutes';
import K_Home from '../../Components/kitchenpannel/K_Home';
import Createuserroutes from  '../../Components/admincomponent/createuser/Createuserroutes';
import comboproduct_indexroutes from  '../../Components/admincomponent/comboproduct/comboproduct_indexroutes.js';

import C_Home from '../../Components/admincomponent/cust_support/C_Home';
import sendemail from '../../Components/SendEmail';

import  forgotPassword from '../../Components/ForgotPassword';

import  sendpage from '../../Components/SendPage';

import  ExpirePage from '../../Components/ExpirePage';

import UnsubscribePage from '../../Components/Onepage/UnsubscribePage.js';

import  Gobackpage from '../../Components/Gobackpage.js';
import StaySubscribed from '../../Components/StaySubscribed.js';

import SuccessfulPayment from '../../Components/SuccessfulPayment.js';
import failedPayment from '../../Components/UnsuccessfulPayment.js';

import Custroutes_index from './cust_routes/Custroutes_index'
       

import DeliveryHomePage  from  '../../Components/admincomponent/deliverypanelcomponent/DeliveryHomePage';

import AddTiffinindex from '../../Components/admincomponent/deliverypanelcomponent/addtiffins/AddTiffin_routes';

const Routes = () => {
  var auth_info = sessionStorage.getItem('userid');
  console.log(auth_info);
  return (
    

    <Router>
     { auth_info?(
         <Switch>  
             <Route path="/"  component={Onepage2} exact />    
             <Route path="/Onepage2"  component={Onepage2} exact />
             <Route path="/demo" component  ={LoginPage} />
             <Route path="/ourmenu" component  ={ourmenu} />
         <Route path="/login"  component={ LoginPage} exact />    
         <Route path="/demo" component  ={demoOnepage} />
         <Route path="/dashboard" component={ dashboardindex}  />  
         <Route path="/Createuserlogin" component={ Createuserroutes}  />  
         <Route path="/homepage" component={ HomePage }  />  
         <Route path="/Privacy_Policy" component={ Privacy_Policy }  />  
         <Route path="/Tifincoprivacypolicy" component={tifinco_privacy_policy}  /> 
         <Route path="/slider" component={ appsliderindex }  />  
         <Route path="/category" component={ categoryindex }  />  
         <Route path="/product" component={ productindex }  /> 
         <Route path="/foodplan" component={ planroutesindex }  /> 
         <Route path="/customer" component={ customerindex }  /> 
         <Route path="/comboproduct" component={ comboproduct_indexroutes }  /> 
        {/* <Route path="/gmap" component={ googlemap }  />  */}

        <Route path="/Kitchepannel" component={ K_Home }  />  
        <Route path="/Customerpannel" component={ C_Home }  /> 

        <Route path="/CustmerRoutes" component={ Custroutes_index }  /> 
        <Route path="/KitchenRoutes" component={ KitchenRoutes }  /> 

        <Route path="/DeliveryHomePage" component={ DeliveryHomePage }  />  
        <Route path ="/websiteImage" component={websiteImage}/>

        <Route path="/Delivery"component={ AddTiffinindex }  /> 

        {/* <Route path={`/success/:paymentmode/:txmgs/:txTime/:signature/:orderId/:orderAmount/:referenceId/:txStatus`} component={SuccessfulPayment} /> */}

        <Route path={`/success/:referenceId/:txStatus/:paymentMode/:txMsg/:txTime/:orderId/:orderAmount`} component={SuccessfulPayment} />

        {/* return res.redirect(`https://tifinco.com/success/${data.referenceId}/${data.txStatus}/${data.paymentMode}/${data.txMsg}/${data.txTime}/${data.signature}/${data.orderId}/${data.orderAmount}`); */}

        
        <Route path={`/unsuccess/:paymentmode/:txmgs/:txTime/:signature/:orderId/:orderAmount/:referenceId/:txStatus`} component={failedPayment} />
         <Route path="/*" component={ page404} exact />    
       </Switch>
     ):(

        <Switch>
          
        <Route path="/"  component={Onepage2} exact />   
        <Route path="/Onepage2"  component={Onepage2} exact />  
        <Route path="/ourmenu" component  ={ourmenu} />
        <Route path="/demo" component  ={demoOnepage} />

        <Route path="/login"  component={ LoginPage} exact />  

        <Route path="/sendemail" component={sendemail} />

        <Route path="/forgotPassword" component={forgotPassword} />

        <Route path="/sendpage" component={sendpage} /> 
        
        <Route path="/ExpirePage" component={ExpirePage} />
        <Route path="/Privacy_Policy" component={ Privacy_Policy }  /> 
        <Route path="/Tifincoprivacypolicy" component={tifinco_privacy_policy}  />  


        <Route path={`/UnsubscribePage/:id`} component={UnsubscribePage} />
        <Route path={`/Gobackpage/:id`} component={Gobackpage} />
        <Route path = {`/StaySubscribed/:id`} component = {StaySubscribed} />
        {/* <Route path={`/success/:paymentmode/:txmgs/:txTime/:signature/:orderId/:orderAmount/:referenceId/:txStatus`} component={SuccessfulPayment} /> */}
        <Route path={`/success/:referenceId/:txStatus/:paymentMode/:txMsg/:txTime/:orderId/:orderAmount`} component={SuccessfulPayment} />

        <Route path={`/unsuccess/:paymentmode/:txmgs/:txTime/:signature/:orderId/:orderAmount/:referenceId/:txStatus`} component={failedPayment} />
    
      {/* for payment page */}
     



        <Route path="/*" component={ signauth} exact />    
      </Switch>
     )}
   
  </Router>
  );
};

export default Routes;