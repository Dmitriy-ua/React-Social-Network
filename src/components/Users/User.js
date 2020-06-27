import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user-icon.png';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let User = ({user, followingInProgress, follow, unfollow, ...props}) => {

    return (
        <div>
            <span className='avo-follow'>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                             className={styles.usersPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id=> id === user.id)}
                                  onClick={() => {
                            unfollow( user.id );
                        }}> Unfollow</button>
                        : <button disabled={followingInProgress.some(id=> id === user.id)}
                                  onClick={() => {
                            follow( user.id );
                        }}> Follow</button>}

                </div>
            </span>

            <span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                    <br/>
                </span>
            </span>
        </div>
    )

}

export default User;