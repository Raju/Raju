import React, { memo } from 'react';

import './index.scss';

const LoaderPage = () => {
	console.log(`loader works!`);

	return (
		<div className="spinner">
			<div className="bounce1" />
			<div className="bounce2" />
			<div className="bounce3" />
		</div>
	);
};

export default memo(LoaderPage);
