import { createAction } from '@reduxjs/toolkit'
import * as PokedexType from '../typings';

export const retrievePokedexAction = createAction<PokedexType.PokedexConfig>('POKEDEX/RETRIEVE_LIST');
export const storePokedexAction = createAction<PokedexType.Pokedex[]>('POKEDEX/STORE_POKEDEX_LIST');

export const retrievePokemonAction = createAction<string>('POKEDEX/RETRIEVE_POKEMON');
export const storePokemonDetailsAction = createAction<PokedexType.Pokemon>('POKEDEX/STORE_POKEMON');
export const clearPokedexAction = createAction('POKEDEX/CLEAR_LIST');


