import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom"
import anon from "../../img/anon.png"

const UserProfileImage = ({ user }) => {
    const imgSrc = user.logo || anon
    const imgAlt = user.identity || user.firstName

    return (
        <img
            src={imgSrc}
            alt={imgAlt}
            width="50"
            height="50"
            className="rounded-circle me-2 user-profile-img"
        />
    )
}

export const HomeSidebar = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const [userData, setUserData] = useState(store.user)
    
    useEffect(() => {
        setUserData(store.user)
    }, [store.user])

    useEffect(() => {
        actions.getUserDetails();
    }, [store.user.firstName]);

    const handleLogout = () => {
        actions.logOut();
        navigate("/");
    };

    return (
        <aside className="home-sidebar">
            <div className="d-flex align-items-center text-white text-decoration-none">
                <UserProfileImage user={userData} />
                <h2 className="sidebar-username">
                    {userData.firstName ? userData.firstName : null}
                </h2>
            </div>

            <hr className="sidebar-hr" />

            <ul className="nav nav-pills flex-column">
                <li className="sidebar-nav-item">
                    <Link to="/home" className="nav-link sidebar-nav-link">
                        <i className="fa fa-home pe-3" aria-hidden="true"></i>
                        <span id="profile-link-home-sidebar">Escritorio</span>
                    </Link>
                </li>

                <li className="sidebar-nav-item">
                    <Link to="my-profile" className="nav-link sidebar-nav-link">
                        <i className="fa fa-user pe-3" aria-hidden="true"></i>
                        <span id="profile-link-home-sidebar">Mi perfil</span>
                    </Link>
                </li>

                <li className="sidebar-nav-item">
                    <Link to="/my-compositions" className="nav-link sidebar-nav-link">
                        <i className="fa fa-brush pe-3" aria-hidden="true"></i>
                        <span id="my-compositions-link-home-sidebar">Mis composiciones</span>
                    </Link>
                </li>

                <li className="sidebar-nav-item">
                    <a className="nav-link sidebar-nav-link" onClick={handleLogout}>
                        <i className="fa fa-sign-out pe-3" aria-hidden="true"></i>
                        Salir
                    </a>
                </li>
            </ul>

            <hr className="sidebar-hr" />

            <ul className="list-inline ms-0">
            {[
                { name: "Facebook", url: userData.facebookProfile },
                { name: "Instagram", url: userData.instagramProfile },
                { name: "TikTok", url: userData.twitterProfile },
            ].map((item, index) => (
                <li className="list-inline-item me-4" key={index}>
                {item.url ? (
                    <a href={item.url} className="link-light " target="_blank" rel="noopener noreferrer">
    <i className={`fs-3 fa-brands fa-${item.name.toLowerCase()}`} aria-hidden="true"></i>
    </a>
    ) : (
    <i className={`fs-3 fa-brands fa-${item.name.toLowerCase()}`} aria-hidden="true"></i>
    )}
    </li>
    ))}
    </ul>
    </aside>
    );
    };

