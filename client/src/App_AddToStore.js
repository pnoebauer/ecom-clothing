import React from 'react';

import SHOP_DATA from './assets/shop.data';

import {addCollectionsAndDocuments} from './firebase/firebase.utils';

class App extends React.Component {
	state = {
		collections: SHOP_DATA,
	};

	componentDidMount() {
		const {collections} = this.state;
		const collectionsArray = Object.entries(collections).map(([key, value]) => value);

		//adds collection with whole SHOP_DATA array
		// addCollectionsAndDocuments('collections', collectionsArray);
		//destructure to only return the array's objects with title and items
		addCollectionsAndDocuments(
			'collectionsTest',
			collectionsArray.map(({title, items}) => {
				return {title, items};
			})
		);
	}

	render() {
		return <div>Loaded into firestore</div>;
	}
}

export default App;
