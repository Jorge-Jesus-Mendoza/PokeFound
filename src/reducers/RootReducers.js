import { combineReducers } from "redux";
import Asignador_data from './SetdataReducer';
import React from 'react'
import PerfilReducer from "./PerfilReducer";
import SearchReducer from "./SearchReducer";
import PokemonListReducer from "./PokemonListReducer";


 const RootReducers = combineReducers({
    Asignador_data, PerfilReducer, SearchReducer, PokemonListReducer
 })
export default RootReducers