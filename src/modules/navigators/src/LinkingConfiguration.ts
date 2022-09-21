import * as Linking from 'expo-linking';

const LinkingConfiguration = {
	prefixes: [Linking.createURL('/')],
	config: {
	screens: {
		// This is the Root Directory
		Root: {
			screens: {
				Home: {
					screens: {
						HomeScreen: 'Home'
					}
				},
				ContactUs: {
					screens: {
						ContactUsScreen: 'Contact Us',
					},
				},
				Pokedex: {
					screens: {
						PokedexScreen: 'Pokedex',
					},
				},
				Pokemon: {
					screens: {
						PokemonScreen: 'Pokemon',
					},
				},
			},
		},
		NotFound: '*',
	},
	},
};

export default LinkingConfiguration;
