import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { app } from "../../firebase";
import { setUser, setSignOut } from "../Store/Features/userSlice";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const Header = () => {
  const userData = useSelector((state) => state.user.user);
  const userImage = userData?.photoURL;
  const userName = userData?.displayName;
  const userEmail = userData?.email;

  const [drop, setDrop] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //This function handles login with googgle mail
  const authHandler = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user.providerData[0];
        dispatch(setUser(user));
      })
      .catch((error) => alert(error.message));
  };

  //this function will handle the signout
  const signOutHandler = async () => {
    await signOut(auth)
      .then(() => {
        dispatch(setSignOut());
        setDrop(!drop);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  //this will observe the authentication state and always redirect to home section if there is a logged in user
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user.providerData[0]));
        navigate("/home");
      }
    });
  }, [userName]);

  return (
    <>
      <Nav>
        <Link to={"/home"}>
          <Logo>
            <img src="/images/logo.svg" alt="Logo" />
          </Logo>
        </Link>

        {userData ? (
          <NAvMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="Home" />
              <span>HOME</span>
            </Link>

            <a href="/search">
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>

            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>

            <a href="/originals">
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>

            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>

            <a href="/series">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NAvMenu>
        ) : (
          ""
        )}

        {userImage ? (
          <SIGNOUT>
            <UserImg onClick={() => setDrop(!drop)}>
              <img src={userImage} alt={userName} />
            </UserImg>
            {drop && (
              <DropDown onClick={signOutHandler}>
                <span>Log out</span>
              </DropDown>
            )}
          </SIGNOUT>
        ) : (
          <LOGIN onClick={authHandler}>Login</LOGIN>
        )}
      </Nav>
      <Outlet />
    </>
  );
};

const Nav = styled.nav`
  width: 100%;
  letter-spacing: 16px;
  background: #090b13;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
  border-bottom: 1px solid white;
`;

const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 70px;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
  }
`;

const NAvMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row nowrap;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 0 12px;
    z-index: auto;

    img {
      height: 20px;
      min-width: 20px;
      display: block;
      margin-right: 4px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        background: rgb(249, 249, 249);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        border-radius: 0 0 4px 4px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: center;
        transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LOGIN = styled.a`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  letter-spacing: 1.5px;
  padding: 8px 16px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.2s ease-in 0s;

  &:hover {
    background: #f9f9f9;
    color: black;
    border: transparent;
  }
`;

const UserImg = styled.div`
  max-width: 40px;
  max-height: 40px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 100%;
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  cursor: pointer;
  width: 100px;
  letter-spacing: 2px;
  padding: 10px;
  text-align: center;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
`;

const SIGNOUT = styled.div`
  position: relative;
`;
export default Header;
