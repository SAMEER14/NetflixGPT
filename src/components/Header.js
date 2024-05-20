import React from 'react';
import { signOut } from "firebase/auth"; 
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      // navigate("/error");
    });
  }


     //dispatch hook
     const dispatch = useDispatch();
     

  // we added our navigate here in header where it is central for whole code so here navigate will not give error
      //onAuthStateChange Api call (we can call this in body or app doesnt matter)
      useEffect(() => {
        // const auth = getAuth();
       const unsubscribe = onAuthStateChanged(auth, (user) => {
  
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // const uid = user.uid;
            // ...
            //WE CAN GET MANY THINGS FROM USER OBJECT
            const { 
              uid,
              email, 
              displayName,
              photoURL } = user;
            // dispatch an action
            dispatch(
              addUser({ 
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL 
            }));
          
            //when signin/signup how to navigate to browse page
            //use Navigate hook
            navigate("/browse");
          } 
           
          else {
            // User is signed out
            // ...
            dispatch(removeUser());
  
            navigate("/");
          }
  
        });

        // unmount component
        // unsubcribe when component unmount 
        return () => unsubscribe();
  
      },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen z-10 flex justify-between'>
      <img
      className='w-44' 
      src= {LOGO_URL}
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
