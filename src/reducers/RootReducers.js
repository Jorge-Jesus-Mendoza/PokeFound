import { combineReducers } from "redux";
import Asignador_data from './SetdataReducer';
import React from 'react'
import PerfilReducer from "./PerfilReducer";
import SearchReducer from "./SearchReducer";
import NewReduser from "./NewReduser";

 const RootReducers = combineReducers({
    Asignador_data, PerfilReducer, SearchReducer,NewReduser
 })
export default RootReducers