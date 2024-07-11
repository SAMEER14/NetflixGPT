import Body from './components/Body';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import PopupMessage from './components/PopupMessage';
// import { ToastContainer, toast } from 'react-toastify';
// import'react-toastify/dist/ReactToastify.css';

function App() {

  // const notify = () => toast("Wow so easy!");

  return (
    
   <Provider store={appStore}>
    <div className='App'>
      <PopupMessage message="⚠️ Oops! We're may experience issues in loading website if current network is Jio. For the best experience, please switch to a different network. 🍿📡"/>
      {/* <button onClick={notify}>Notify !</button>
      <ToastContainer /> */}

      <Body />
      </div>
   </Provider>
   
  );
}

export default App;
