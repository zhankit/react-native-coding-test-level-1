import { clearPokedexAction, retrievePokedexAction, storePokedexAction, storePokemonDetailsAction } from './pokedexAction';
import { createReducer } from '@reduxjs/toolkit'
import * as PokedexType from '../typings';

const POKEDEX_INITIAL_STATE: PokedexType.PokedexState = {
    items: [],
	details: null,
	pokemonCache: []
}

const pokedexReducers = createReducer<PokedexType.PokedexState>(POKEDEX_INITIAL_STATE, (builder) => {
	builder
		.addCase(retrievePokedexAction, (state, action) => { POKEDEX_INITIAL_STATE })
		.addCase(storePokedexAction, (state, action) => {
			return Object.assign({}, state, {
				items: [...state.items, ...action.payload]
			})
		})
		.addCase(clearPokedexAction, (state, action) => {
			return Object.assign({}, state, {
				items: []
			})
		})
		.addCase(storePokemonDetailsAction, (state, action) => {
			return Object.assign({}, state, {
				details: action.payload
			})
		})
		.addDefaultCase((state, _) => { POKEDEX_INITIAL_STATE })
  })


export default pokedexReducers;
