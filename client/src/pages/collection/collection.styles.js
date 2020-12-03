import styled from 'styled-components/macro';

export const CollectionPageContainer = styled.div`
	display: flex;
  	flex-direction: column;
`;

export const TitleContainer = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	
  		& > div {
    		margin-bottom: 30px;
		}
		  
	@media screen and (max-width: 800px) {
		display: grid;
		justify-content: center;
		align-items: center;
        width: 100%;
        grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
    }
`;