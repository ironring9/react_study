import React, { useState } from 'react';
import Counter from './Counter';
import Average from './Average';
// import Info from './Info';

const App = () => {
  return <Average />
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       { visible ? "숨기기" : "보이기" }
  //     </button>
  //     <hr />
  //     { visible && <Info />}
  //   </div>
  // )
}

export default App;
