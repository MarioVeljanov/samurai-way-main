import axios from "axios";
import React from "react";
import userPhoto from "../../assets/img/user.jpg";
import { intitialStateType } from "../../redux/user-reducer";
import s from "./Users.module.css";

type PropsType = {
    users: intitialStateType;
    changeFollowClick: (userId: number) => void;
    setUsers: (users: any) => void;
};

class UsersC extends React.Component<PropsType, {}> {
    constructor(props: PropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return (
            <div>
               
                {this.props.users.items.map(u => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    className={s.userPhoto}
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : userPhoto
                                    }
                                />
                            </div>
                            <button
                                onClick={() => this.props.changeFollowClick(u.id)}
                            >
                                <span>
                                    {u.followed ? "Unfollow" : "Follow"}
                                </span>
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
    }
}

export default UsersC