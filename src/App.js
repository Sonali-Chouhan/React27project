import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form";
import User from "./FormContainer/User";

function App() {
  return (
    <div>
      <User/>
    {/* <div className="App"> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;

// // import Home from "./Admin/Page/Home";
// import "./App.css";
// //import Form from "./components/Form";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Container/Home";
// import Profile from "./Container/Profile";
// import About from "./Container/About";
// import Contact from "./Container/Contact";
// import NoteState from "./Context/NoteState";

// // import ShowImage from "./components/showimage";

// import Header from "./Container/Header";
// function App() {
//   return (
//     <div>
//       {/* for Image unique code edit
//           <ShowImage/> */}
//       {/* for step form
//       <div className="App">
//         <Form />  */}
//       <NoteState>
//         <Header />
//         <div className="header">
//           <Link to="/">Home</Link>
//           <Link to="/profile">Profile</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </NoteState>
//     </div>
//   );
// }

// export default App;
