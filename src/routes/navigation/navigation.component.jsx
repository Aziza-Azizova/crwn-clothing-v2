import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom"

import { ReactComponent as CrownLogo} from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";

import "./navigation.styles.scss";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrownLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span> 
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )
                }
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;