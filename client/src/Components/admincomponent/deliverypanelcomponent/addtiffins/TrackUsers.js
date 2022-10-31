
// import React from "react";
// import "./styles.css";

// import GoogleMapReact from "google-map-react";
// import MyMarker from "./MyMarker";

// const distanceToMouse = (pt, mp) => {
//   if (pt && mp) {
 
//     return Math.sqrt(
//       (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
//     );
//   }
// };

// const points = [
  // { id: 1, title: "Round Pond", lat: 21.1913, lng: 81.828202  },
  // { id: 2, title: "The Long Water", lat: 21.1957, lng: 81.82822  },
  // { id: 3, title: "The Serpentine", lat: 21.15140, lng: 81.822  },
  // { id: 4, title: "Khapari", lat: 21.247075, lng: 	81.524853  },
  // { id: 5, title: "banbarad", lat: 20.94526, lng: 		82.31987  },
  
// ];

// export default function App() {
//   return (
    // <div className="App">
    //    {/* <Header/> */}
    //   <GoogleMapReact
    //     bootstrapURLKeys={{
    //       // remove the key if you want to fork
    //       key: "AIzaSyBoOLSQjK9gcTukruHJaIhFVCa0rkEHqqQ",
    //       language: "en",
    //       region: "IN"
    //     }}
    //     defaultCenter={{ lat: 21.164993, lng: 81.775307 }}
    //     defaultZoom={10}
    //     distanceToMouse={distanceToMouse}
       
    //   >
        // {points.map(({ lat, lng, id, title }) => {
        //   return (
        //     <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
        //   );
        // })}
    //   </GoogleMapReact>
    // </div>
//   );
// }

import React, { Component } from 'react'

import "./styles.css";
// import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";

import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import { geolocated } from "react-geolocated";
import MyMarker from "./MyMarker";
export class GoogleMaps extends Component {
    state = 
    {
         preTiffinPrice:[],
         Load:false,
         directions: null,
         error: null,
         origin:'',
         destination:'',
         waypoints:'',
  
         points:[  { id: 1, title: "origin", lat:28.679079 , lng: 77.069710  }
         ,{ id: 1, title: "Round Pond", lat:  21.1957 , lng: 81.828202  },
         { id: 2, title: "The Long Water", lat:21.19, lng: 81.82822  },
         { id: 3, title: "The Serpentine", lat: 21.15140, lng: 81.822  },
         { id: 4, title: "Khapari", lat: 21.247075, lng: 	81.524853  },
         { id: 5, title: "banbarad", lat: 20.94526, lng: 		82.31987  },
         { id: 5, title: "banbarad", lat: 20.14526, lng: 		82.31987  },
         { id: 5, title: "banbarad", lat: 20.64526, lng: 		82.31987  },
         ]
    }
     distanceToMouse = (pt, mp) => {
      if (pt && mp) {
     
        return Math.sqrt(
          (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
        );
      }
    };
    componentDidMount() {
    
const waypoints = this.state.points.map(p =>({
  location: {lat: p.lat, lng:p.lng},
  stopover: true
}))



// console.log(waypoints[0].location.lat<waypoints[1].location.lat);

// for(var i=0;i<=waypoints.length;i++){
// for(var j=1;j<waypoints.length;j++){

//   if(waypoints[i].location.lat>waypoints[j].location.lat){


//     var temp=waypoints[j];
//     waypoints[j]=waypoints[j+1];
//     waypoints[j+1]=temp;
// // p.push(waypoints[i]);
// console.log(waypoints[j])

//   }
// }



// }
// for(j=0;j<10;j++)
// {
// console.log(waypoints[j])
// }




this.setState({waypoints:waypoints})

// console.log(waypoints)

const orig = waypoints.shift().location;

this.setState({origin:orig});


console.log(origin)

const destination = waypoints.pop().location;
this.setState({destination:destination});

console.log(destination)


      }
      
     
  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 21.247075, lng: 81.524853 };
      // const destination = { lat: 41.756795, lng: -78.954298 };

      directionsService.route(
        {
          origin: this.state.origin,
          destination: this.state.destination,
          travelMode: window.google.maps.TravelMode.DRIVING,   
          waypoints: this.state.waypoints
        },

      
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
    return (
      <>
    

      <div className="App">
       {/* <Header/> */}
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyBoOLSQjK9gcTukruHJaIhFVCa0rkEHqqQ",
          language: "en",
          region: "IN"
        }}
        defaultCenter={{ lat: 21.1993, lng: 81.7307 }}
        defaultZoom={10}
        distanceToMouse={this.distanceToMouse}
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
       
      >
        {/* {this.state.points.map(({ lat, lng, title }) => {
          return (
            <MyMarker  lat={lat} lng={lng}  tooltip={title} />
            
          );
        })} */}
          {this.state.points.map((marker, index) => {
        const position = { lat: marker.lat, lng: marker.lgn };
        // return <MyMarker key={index} position={position} />;
      })}
    
      </GoogleMapReact>
    </div>
      
      </>
    )
  }
}
// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import "./styles.css";

// class GoogleMaps extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentLocation: { lat: 40.756795, lng: -73.954298 }
//     };
//   }

//   render() {
    // const apiIsLoaded = (map, maps) => {
    //   const directionsService = new window.google.maps.DirectionsService();
    //   const directionsRenderer = new window.google.maps.DirectionsRenderer();
    //   directionsRenderer.setMap(map);
    //   const origin = { lat: 21.247075, lng: 81.524853 };
    //   const destination = { lat: 41.756795, lng: -78.954298 };

    //   directionsService.route(
    //     {
    //       origin: origin,
    //       destination: destination,
    //       travelMode: window.google.maps.TravelMode.DRIVING
    //     },
    //     (result, status) => {
    //       if (status === window.google.maps.DirectionsStatus.OK) {
    //         directionsRenderer.setDirections(result);
    //       } else {
    //         console.error(`error fetching directions ${result}`);
    //       }
    //     }
    //   );
    // };
    // return (
    //   <div>
    //     <div style={{ height: "400px", width: "100%" }}>
    //       <GoogleMapReact
    //         bootstrapURLKeys={{
    //           key: "AIzaSyBoOLSQjK9gcTukruHJaIhFVCa0rkEHqqQ"
    //         }}
    //         defaultCenter={{ lat:21.247075, lng: 81.524853 }}
    //         defaultZoom={10}
    //         center={this.state.currentLocation}
    //         yesIWantToUseGoogleMapApiInternals
    //         onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
    //       />
    //     </div>
    //   </div>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';
// import MyMarker from "./MyMarker";
// import "./styles.css";

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   state = 
//   {
//        preTiffinPrice:[],
//        Load:false,
//        directions: null,
//   error: null,
      //  points:[  { id: 1, title: "Round Pond", lat: 21.1913, lng: 81.828202  },
      //  { id: 2, title: "The Long Water", lat: 21.1957, lng: 81.82822  },
      //  { id: 3, title: "The Serpentine", lat: 21.15140, lng: 81.822  },
      //  { id: 4, title: "Khapari", lat: 21.247075, lng: 	81.524853  },
      //  { id: 5, title: "banbarad", lat: 20.94526, lng: 		82.31987  },
      //  ]
//   }
//    distanceToMouse = (pt, mp) => {
//     if (pt && mp) {
   
//       return Math.sqrt(
//         (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
//       );
//     }
//   };
//   render() {
   


//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 21.247075,
//             lng: 	81.524853
//           }
//         }>
//               {this.state.points.map(({ lat, lng, id, title }) => {
//           return (
//             <Marker
//           onClick={this.onMarkerClick}
//           key={id} lat={lat} lng={lng} text={id} tooltip={title} 
//         />
//           );
//         })}
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBoOLSQjK9gcTukruHJaIhFVCa0rkEHqqQ'
// })(MapContainer);

export default GoogleMaps;


