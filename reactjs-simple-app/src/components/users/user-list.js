import Card from '../ui/card';
import classes from './user-list.module.css';
const UsersList = props => {
    return <Card className={classes.users}>
        <ul>
            {props.users.map(user => <li>{user.name} ({user.age} years old)</li>)}
        </ul>
    </Card>
};

export default UsersList;