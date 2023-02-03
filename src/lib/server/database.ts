type Fact = {
	text: string;
	id: string;
};

const favorites: Fact[] = [];

export const favorite = (fact: Fact) => {
	if (favorites.some((f) => f.id === fact.id)) return;
	favorites.unshift(fact);
};

export const getFavorites = () => {
	console.log('getFavorites', favorites);
	return favorites;
};
