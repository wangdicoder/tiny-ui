import React from 'react';
import './sidebar-menu.scss';
import { COMPONENT_MENU, GUIDE_MENU } from '../../menu';
import { NavLink } from 'react-router-dom';
import { Layout } from '../../../../components';

const { Sidebar } = Layout;

const SidebarMenu = () => (
	<Sidebar theme="light" width={250} className="sidebar-menu">
		<h4 className="sidebar-menu__title">Guide</h4>
		<ul className="sidebar-menu__menu">
			{GUIDE_MENU.map((menu, idx) => (
				<li key={idx} className="sidebar-menu__menu-item">
					<NavLink
						to={{
							pathname: `/components/${menu.route}`,
							state: {name: menu.title}
						}}
						activeClassName="sidebar-menu__menu-item_active">
						{menu.title}
					</NavLink>
				</li>
			))}
		</ul>

		<h4 className="sidebar-menu__title">Components</h4>
		<ul className="sidebar-menu__menu">
			{COMPONENT_MENU.map((mainMenu, idx) => (
				<React.Fragment key={idx}>
					<li className="sidebar-menu__group-title">{mainMenu.title}</li>
					<ul className="sidebar-menu__group-list">
						{mainMenu.children.map((menu, idx) => (
							<li key={idx} className="sidebar-menu__menu-item">
								<NavLink
									to={{
										pathname: `/components/${menu.route}`,
										state: {name: menu.title}
									}}
									activeClassName="sidebar-menu__menu-item_active">
									{menu.title}
								</NavLink>
							</li>
						))}
					</ul>
				</React.Fragment>
			))}
		</ul>
	</Sidebar>
);

export default SidebarMenu;
