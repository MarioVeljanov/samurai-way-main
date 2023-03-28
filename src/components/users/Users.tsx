import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { intitialStateType } from '../../redux/user-reducer';
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'

type UsersType = {
    users: intitialStateType;
    changeFollowClick: (userId: number) => void;
    setUsers: (users: any) => void;
};

const Users: FC<UsersType> = (props) => {
    let getUsers = () => {
        if (props.users.items.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((res) => {
                    props.setUsers(res.data.items);
                });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.items.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} />
                        </div>
                        <button onClick={() => props.changeFollowClick(u.id)}><span>{u.followed ? 'Unfollow' : 'Follow'}</span></button>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;