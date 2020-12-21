// import React, { Profiler } from 'react';
import React from 'react';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
	<HomePageContainer>
		{/* <Profiler id='Directory' onRender={(id, phase, actualDuration) => {
			//phase: either updating or mounting
			console.log({
				id,
				phase,
				actualDuration
			});
		}}>
			<Directory />
		</Profiler> */}
		<Directory />
	</HomePageContainer>
);

export default HomePage;