import React from "react";
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <ul className={classes.sidebar__list}>
                <li className={classes.sidebar__list_item}>
                    <NavLink to="/profile" className={classes.sidebar__link} activeClassName={classes.activeLink}>Profile</NavLink>
                </li>
                <li className="app-sidebar__list-item">
                    <NavLink to="/dialogs" className={classes.sidebar__link} activeClassName={classes.activeLink}>Messages</NavLink>
                </li>
                <li className="app-sidebar__list-item">
                    <NavLink to="/news" className={classes.sidebar__link} activeClassName={classes.activeLink}>News</NavLink>
                </li>
                <li className="app-sidebar__list-item">
                    <NavLink to="/music" className={classes.sidebar__link} activeClassName={classes.activeLink}>Music</NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;