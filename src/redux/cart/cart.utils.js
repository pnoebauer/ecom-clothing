export const addItemAndSetQuantity = (items, addItem) => {
	const itemExists = items.find(item => item.id === addItem.id); //check if the added item is already in the cart

	//if it is not in the cart yet add it with quantity 1
	if(!itemExists) {
		return [...items, { ...addItem, quantity: 1 }];
	}

	//if it exists, find it in the array and increase quantity by 1
	else {
		return items.map(item => {
			if(item.id === addItem.id) {
				return {
							...item,
							quantity: item.quantity + 1
						}
			}
			else {
				return item;
			}
		});
	}
};

export const clearItemFromCart = (items, removeItem) => {
	return items.filter(item => item.id !== removeItem.id);
}