import { all, call, take, put, select } from 'redux-saga/effects'
import axios from 'axios';
import { clearPokedexAction, retrievePokedexAction, retrievePokemonAction, storePokemonDetailsAction, storePokedexAction } from './pokedexAction';
import { PokedexSelector } from './pokedexSelectors';
import * as PokedexType from '../typings';

export default function* pokedexRuntime() {
	yield all([
		retrievePokedex(),
		retrievePokedexDetail()
	]);
}

/**
 * Retrieve pokedex with pagination of 10
 * Store the list and append to the state, only reload will clear the cache
 */
function* retrievePokedex() {
	while (true) {
		try {

			// Refresh Action
			const action = yield take(retrievePokedexAction.toString());
			const actionPayload: PokedexType.PokedexConfig = action.payload;
			const isRefresh: boolean = actionPayload.isRefresh;

			if (isRefresh) {
				yield put(clearPokedexAction())
			}

			const Pokedex: PokedexType.Pokedex[] = yield select(PokedexSelector);

			const offsetValue = Pokedex.length

			const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offsetValue}`);
			const result: PokedexType.Pokedex[] = response.data.results
			yield put(storePokedexAction(result))


		} catch(err) {
			console.log('err', err)
		}

	}
}

/**
 * Retrieve pokedexDetails by name
 * Store the details
 */
function* retrievePokedexDetail() {
	while (true) {
		try {

			// Refresh Action
			const action = yield take(retrievePokemonAction.toString());
			const pokemonName: string = action.payload;

			const response = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
			const result: PokedexType.Pokemon = response.data
			yield put(storePokemonDetailsAction(result))

		} catch(err) {
			console.log('err', err)
		}

	}
}
