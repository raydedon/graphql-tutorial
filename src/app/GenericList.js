import React from 'react';

const GenericList = ({className = '', list = [], itemRenderer: ItemRenderer, ...rest}) => {
	return (
		<div className={`generic-list ${className}`}>
			{list.map(i => (
				<div className="list-item" key={i.id}>
					<ItemRenderer {...i} {...rest} />
				</div>
			))}
		</div>
	);
};

export default GenericList;
