import React, { FC } from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.jpg";
import { userType } from '../../redux/user-reducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { userAPI } from '../../api/api';

type UsersPropsType = {
    totalCount: number;
    pageSize: number;
    items: userType[];
    currentPage: number;
    followingIsProgres: number[]
    changeFollowClick: (userId: number) => void;
    onPageChanged: (pageNumber: number) => void;
    toogleFollowingProgres: (isFetching: boolean, userId: number) => void;
};

export const Users: FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 0; i < 20; i++) {
        pages.push(
            <span
                key={i}
                onClick={() => props.onPageChanged(i + 1)}
                className={
                    props.currentPage === i + 1 ? s.selectedPage : ""
                }
            >
                {i + 1}/
            </span>
        );
    }
    
    return (
        <div>
            <div>
                {pages}...{pagesCount}
            </div>
            {props.items.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    className={s.userPhoto}
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : userPhoto
                                    }
                                />
                            </NavLink>
                        </div>

                        {u.followed ? (
                            <button
                                disabled={props.followingIsProgres.includes(u.id)}
                                onClick={() => {
                                    props.toogleFollowingProgres(true, u.id);
                                    userAPI.unfollowUsers(u.id).then((data) => {
                                        if (data.resultCode === 0) {
                                            props.changeFollowClick(u.id);
                                        }
                                        props.toogleFollowingProgres(false, u.id);
                                    });
                                }}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                disabled={props.followingIsProgres.includes(u.id)}
                                onClick={() => {
                                    props.toogleFollowingProgres(true, u.id);
                                    userAPI.followUsers(u.id).then((data) => {
                                        if (data.resultCode === 0) {
                                            props.changeFollowClick(u.id);
                                        }
                                        props.toogleFollowingProgres(false, u.id);
                                    });
                                }}
                            >
                                Follow
                            </button>
                        )}
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