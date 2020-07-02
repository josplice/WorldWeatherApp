import React, { Component, Fragment } from 'react';

import GetWeather from './components/GetWeather';

class App extends Component {
	render() {
		return (
			<Fragment>
				<div className='App'>
					<div className='container'>
						<GetWeather />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
