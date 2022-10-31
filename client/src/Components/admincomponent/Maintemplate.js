
import React from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { Loader } from "react-full-page-loader-overlay";
import Header from './Header'
import Footer from './Footer'
import MainPage from  './MainPage'
export default class Maintemplate extends React.Component {
 
  

  render() {
    return (
        <>
      <Header/>

      <Footer/>
    </>


    )
  }
}

