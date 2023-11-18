import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import View from './components/View';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import Search from './components/Search';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {

      path: "/",
      element: <MainContainer />

    }, {
      path: "watch",
      element: <View />
    },{
      path: "search",
      element: <Search />
    }],
}]);

function App() {
  useEffect(() => { console.log('Inside app') }, [])
  const darkTheme = useSelector(state=>state.app.darkTheme)
  return (
    
      <div className={darkTheme?"App":"App-white"}>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
  );
}

export default App;
