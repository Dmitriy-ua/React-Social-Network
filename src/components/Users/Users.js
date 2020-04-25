import React from "react";
import styles from './Users.module.css';

let Users = (props) => {

    if(props.users.length == 0 ) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://loremflickr.com/70/70/face"',
                    followed: true,
                    fullName: 'Dmitriy',
                    status: 'Wp dev',
                    location: {city: 'Poltava', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://loremflickr.com/70/70/face2"',
                    followed: true,
                    fullName: 'Deniel',
                    status: 'Wp dev',
                    location: {city: 'New Yourk', country: 'USA'}
                },
                {
                    id: 3,
                    photoUrl: 'https://loremflickr.com/70/70/face3"',
                    followed: false,
                    fullName: 'Kendra',
                    status: 'Wp dev',
                    location: {city: 'Otava', country: 'Canada'}
                },
            ]
        )
    }
    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span className='avo-follow'>
                        <div>
                            <img src={u.photoUrl} alt="" className={styles.usersPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)} } > Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} } > Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.fullName } </div>
                            <div> {u.status } </div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div></div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;