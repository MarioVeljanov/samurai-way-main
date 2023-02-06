import React from 'react';
import { SideType } from '../../../redux/state';
import s from './../Nav.module.css'

type FriendsType = {
    friends: SideType[];
};

const Friends: React.FC<FriendsType> = (props) => {
    const friends = props.friends.map(f => {
        
        return (
            <div className={s.friend_wrapper} key={f.id}>
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                {f.name}
            </div>
        );
    })
    return (
        <div>
            <div className={s.friend}>Friends</div>
            <div className={s.friends_container}>{friends}</div>
        </div>
    );
};

export default Friends;