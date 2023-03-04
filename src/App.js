import Music from './components/Main/Music'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import {Fragment} from 'react'
const App=()=>{
  return<Fragment>
    <NavBar/>
    <Banner/>
    <Music/>
  </Fragment>
}
export default App;