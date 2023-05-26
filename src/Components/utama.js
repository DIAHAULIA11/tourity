import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from "./home";
import History from "./history";
import Services from "./services";
import Kontak from "./kontak";
import Tour from "./tour";
import Edukasi from "./edukasi";
import Koleksi from "./koleksi";
import Edupk from "./edupk";
import Edupg from "./edupg";
import Edutugu from "./edutugu";


const Utama = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/history' component={History}/>
        <Route path='/services' component={Services}/>
        <Route path='/kontak' component={Kontak}/>
        <Route path='/tour' component={Tour}/>
        <Route path='/edukasi' component={Edukasi}/>
        <Route path='/koleksi' component={Koleksi}/>
        <Route path='/edupk' component={Edupk}/>
        <Route path='/edupg' component={Edupg}/>
        <Route path='/edutugu' component={Edutugu}/>

    </Switch>
)

export default Utama;