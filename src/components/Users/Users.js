import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user-icon.png';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        console.log("I know I'm inside DOM");
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render () {
        return (
            <div>
                {
                    this.props.users.map( u => <div key={u.id}>
                    <span className='avo-follow'>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.usersPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { this.props.unfollow(u.id)} } > Unfollow</button>
                                : <button onClick={ () => { this.props.follow(u.id)} } > Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div> {u.name } </div>
                            <div> {u.status } </div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div></div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;