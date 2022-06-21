import '../common/style.css';
import UserContext from '../context/user-context';

function Avatar({ clickHandlerLogout }) {
    return (
        <UserContext.Consumer>
            {(user) => {
                console.log(user);
                return (  
                    user.isLogin ?
                        <img src={user.avatar} className="nav-links img-option" onClick={clickHandlerLogout} alt="test" />
                        :
                        <button href="/#" id="sign_in">Sign Up</button>
                );
            }}
        </UserContext.Consumer>
    )
}

export default Avatar;