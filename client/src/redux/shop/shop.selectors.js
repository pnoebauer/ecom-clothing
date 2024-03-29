import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

//curried function
export const selectCollection = collectionUrlParam =>
	createSelector([selectCollections], collections =>
		collections ? collections[collectionUrlParam] : null
	);

//convert collections object to array
export const selectCollectionsOverview = createSelector(
	[selectCollections],
	collections =>
		collections ? Object.entries(collections).map(([key, value]) => value) : []
);

export const selectIsCollectionLoaded = createSelector(
	[selectShop],
	shop => !!shop.collections
);
