import React from "react";
import { Route } from "react-router-dom";

//Nav import start
import Nav from "./Nav";
import Forum from './Forums';
import HonorHub from "./HonorHub";
import AndroidPie from "./AndroidPie";
import OnePlus6T from "./OnePlus6T";
import Snapdragon855 from "./Snapdragon855";
import G5 from "./5G";
import Pixel3 from "./Pixel3";
import Samsung from "./Samsung";
import Root from "./root";
import PostCategory from "./PostCategory";
import Mata20Pro from "./Mate20Pro";
// Footer imports start
import Footer from './Footer/Footer';
import SecurityPolicy from './Footer/Secrity';
import Contact from './Footer/Contact';
import Advertise from './Footer/Advertise';
import PrivacyPolicy from './Footer/PrivacyPolicy';
import Rules from './Footer/Rules';
import SuggestContent from './Footer/SuggestContent';
import RootDevice from './Footer/RootDevice';
// Footer imoorts ends
import Tags from './tags';
import Practice from './practice';
import Lg from "./Lg";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>
          Heading One Team Work 
          </h1>
          <PostCategory/>
          <Forum /> */}
     {/* <Nav />
        <Route path="/HonorHub" component={HonorHub}/> 
        <Route path="/AndroidPie" component={AndroidPie}/>
        <Route path="/OnePlus6T" component={OnePlus6T}/>
        <Route path="/Snapdragon855" component={Snapdragon855}/>
        <Route path="/5G" component={G5}/>
        <Route path="/Pixel3" component={Pixel3}/>
        <Route path="/Samsung" component={Samsung}/>
        <Route path="/Root" component={Root}/>
        <Route path="/Mate20Pro" component={Mata20Pro}/>



        <Route path="/tags" component={Tags}/>
        <Route path="/practice" component={Practice}/>
{/* Footer starts here 
        <Footer/>
        <Route path="/rules" component={Rules}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/privacyPolicies" component={PrivacyPolicy}/>
        <Route path="/rootDevice" component={RootDevice}/>
        <Route path="/security" component={SecurityPolicy}/>
        <Route path="/SuggestContent" component={SuggestContent}/>
        <Route path="/advertise" component={Advertise}/>
        Footer ends Here */}
<Lg />
      </div>
    );
  }
}
export default App;
