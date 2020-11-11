import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9bS3l5KOcESkYjR3sx6LwENqRuDAHN7A",
    authDomain: "ecom-clothing-db-19b5d.firebaseapp.com",
    databaseURL: "https://ecom-clothing-db-19b5d.firebaseio.com",
    projectId: "ecom-clothing-db-19b5d",
    storageBucket: "ecom-clothing-db-19b5d.appspot.com",
    messagingSenderId: "1091061480265",
    appId: "1:1091061480265:web:e4b32aa06ce16c21c27898",
    measurementId: "G-BJTCES07KT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	// console.log('auth',userAuth.uid, 'userRef', userRef);

	const snapShot = await userRef.get();
	// console.log('snapShot',snapShot);

	//if no snapShot exists at this location, create one
	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		// console.log(displayName, email, additionalData);

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		}
		catch (error) {
			console.log('error creating user', error);
		}
	}

	return userRef;
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	// console.log('Ref',collectionRef);

	//batch so all calls to firebase are sent together
	//through batch either all calls succeed or all of them are cancelled if an error occurs
	//prevents the process passing only halfway through
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc(); //doc call at empty ref; firebase will create the ref and create an unique id
		// console.log('newDocRef', newDocRef);
		batch.set(newDocRef, obj);
	});

	return await batch.commit(); //commit the batch call; returns a promise;
}

export const convertCollectionsSnapshotToMap = collections => {
	//loops through the collections snapshot array, and returns a new array with objects having the required properties
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data(); //get actual data from snapshot

		//return object with new props
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	// console.log('transformedCollection', transformedCollection);

	//convert array to object
	return transformedCollection.reduce((accumulator, collection) => {
					accumulator[collection.title.toLowerCase()] = collection;
					return accumulator;
				}, {});
}

export const getCurrentUser = () =>{
	return new Promise((resolve,reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe(); //immediately unsubscribe once userAuth object is returned
			resolve(userAuth);
		}, reject)
	})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;