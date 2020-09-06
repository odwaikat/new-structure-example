import React from 'react';

const SideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<h3 className="side-drawer__header">
				Menu
			</h3>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/">Books</a></li>
				<li><a href="/">Reviews</a></li>
				<li><a href="/">News</a></li>
				<li><a href="/">Contacts</a></li>
			</ul>
		</nav>
	);
};

export default SideDrawer;
