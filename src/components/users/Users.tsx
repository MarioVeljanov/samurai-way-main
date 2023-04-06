import React, { FC } from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.jpg";
import { userType } from '../../redux/user-reducer';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
    totalCount: number;
    pageSize: number;
    items: userType[];
    currentPage: number;
    changeFollowClick: (userId: number) => void;
    onPageChanged: (pageNumber: number) => void
};

export const Users: FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(
            <span
                onClick={() => props.onPageChanged(i + 1)}
                className={
                    props.currentPage === i + 1 ? s.selectedPage : ""
                }
            >
                {i + 1}
            </span>
        );
    }
    return (
        <div>
            <div>{pages}</div>
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
                        <button onClick={() => props.changeFollowClick(u.id)}>
                            <span>{u.followed ? "Unfollow" : "Follow"}</span>
                        </button>
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