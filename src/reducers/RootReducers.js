import { combineReducers } from "redux";
import Asignador_data from './SetdataReducer';
import React from 'react'
import PerfilReducer from "./PerfilReducer";
import SearchReducer from "./SearchReducer";

 const RootReducers = combineReducers({
    Asignador_data, PerfilReducer, SearchReducer
 })
export default RootReducers