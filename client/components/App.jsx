import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CreateSheet from '/client/components/CreateSheet.jsx';
import LogSheet from '/client/components/LogSheet.jsx'
import '../src/style.css'

class App extends Component {
    render() {
        return (
            <div>
              <CreateSheet />  
            </div>
        )
    }
}


// class App extends Component {
//     render() {
//         return (
//             <div className="router">
//               <main>
//                 <BrowserRouter>
//                   { CreateSheet }
//                 </BrowserRouter>
//               </main>
//             </div>
//         )
//     }
// }

// const App = props => {
//   return (
//     <div className="router">
//       <main>
//       </main>    
//     </div>
//   )
// }

export default App;