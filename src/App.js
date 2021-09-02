import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'
import './App.scss';

import { CombineComponents } from './Components';
 
function App() {

  useEffect(() => {
    Aos.init({ 
      duration: 2000,
     })
  },[])

  return (
    <div className="TMcv container-fluid _light_ver">
      <CombineComponents />
    </div>
  );
}

export default App;
