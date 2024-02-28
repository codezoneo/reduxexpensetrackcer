import Counter from './components/Counter';
import {useSelector} from  'react-redux'




function App() {
  useSelector(state=> state.auth.isAuthenticated)
  return (
   <>
   <Header />
   {! isAuth && <Auth />}
   {isAuth && <UserProfile />}
   <Counter/>
   </>
  );
}

export default App;
