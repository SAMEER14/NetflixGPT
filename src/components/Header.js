import React from 'react';
import { signOut } from "firebase/auth"; 
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen z-10 flex justify-between'>
      <img
      className='w-44' 
      src="
      https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
      />

    {/* if user is null then dont load this  */}
      {/* build signout option */}
      {user && ( 
        <div className='flex p-2'>
          <img className='w-10 h-10 rounded-md '
          alt = "usericon"
          // src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABelYeQhdDSleXnwq1Y7EyxtTDiSw3ZgK2EnBQR5Y-Yav3LC10tCzbIcvsA34KEM-SgBfopzYVOVyKm80bahrQiAqpBqGf2w.png?r=15e"
          // using useSelector to display image in header
          src={user?.photoURL}
          />
          <button onClick={handleSignOut}  className='font-bold text-white'>
            (Sign out)
          </button>
        {/* to make button in drop down liek netflix make a component and align there  */}
        </div>
    )}


    </div>
  )
}

export default Header
