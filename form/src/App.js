// import logo from "./logo.svg";
// import logo from "./logo.svg";
// import "./App.css";
// // import Btn from "./Btn";
// import ModeToggle from "./ModeToggle";
import { useEffect, useState } from "react";
import "./App.css";
// import { useState } from "react";
import UserContext from "./UserContext";
import { UserProvider, useUser } from "./UserContext";
import React from "react";

/*        TODO APPLICATION         */

// const Todo = (props) => (
//   <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>
//     <td>
//       <input />
//     </td>
//     <td>
//       <label>{props.createdAt}</label>
//     </td>
//   </tr>
// );

// function App() {
//   const [todos, setTodo] = useState([
//     {
//       id: "todo1",
//       createdAt: "18:00",
//     },
//     {
//       id: "todo2",
//       createdAt: "20:30",
//     },
//   ]);

//   const reverseOrder = () =>
//     // Reverse is a mutative operation, so we need to create a new array first
//     setTodo([...todos].reverse());

//   // First example with keys, show browser console to see the warning.
//   return (
//     <div>
//       <button onClick={reverseOrder}>Reverse</button>
//       <table>
//         <tbody>
//           {todos.map((todo, index) => (
//             <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

/************ FORM *****************/

// function App() {
//   const [name, setName] = useState("");

//   const handleClick = (e) => {
//     e.preventDefault();
//     setName("");
//     console.log("Welcome to Key stroke");
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleClick}>
//         <fieldset>
//           <div className="Field">
//             <label htmlFor="name">Name: </label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <button disabled={!name} type="submit">
//             Submit
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// function App() {
//   const [score, setScore] = useState("4");
//   const [comment, setComment] = useState("");

//   const handleClick = (e) => {
//     e.preventDefault();
//     setScore("4");

//     if (Number(score) <= 5 && comment.length <= 5) {
//       alert("Please provide a comment explaining why the experience was poor.");
//       return;
//     }

//     console.log("Form Submitted");
//     setComment("");
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleClick}>
//         <fieldset>
//           <h2>Feedback form</h2>
//           <div className="Field">
//             <label>Score: {score} </label>
//             <input
//               type="range"
//               min="0"
//               max="10"
//               value={score}
//               onChange={(e) => setScore(e.target.value)}
//             />
//           </div>
//           <div className="Field">
//             <label>Comment: </label>
//             <textarea
//               // id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// const LoggedInUser = () => {
//   const { user } = useUser();

//   return (
//     <p>
//       Hello <span className="Username">{user.name}</span>
//     </p>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <h2>Blog App</h2>
//       <LoggedInUser />
//     </header>
//   );
// };

// const Page = () => {
//   const { user } = useUser();
//   return (
//     <div>
//       <h2>What is Lorem ipsum?</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//         occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//         mollit anim id est laborum
//       </p>
//       <p>Written by {user.name}</p>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Page />
//     </div>
//   );
// }

// function Root() {
//   return (
//     <UserProvider>
//       <App />
//     </UserProvider>
//   );
// }

/**************SET GOAL USING HOOK STATE*****************/

// function GoalForm(props) {
//   const [formData, setFormData] = useState({ goal: "", by: "" });

//   function ChangeHandler(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   function SubmitHandler(e) {
//     e.preventDefault();
//     props.onAdd(formData);
//     setFormData({ goal: "", by: "" });
//   }

//   return (
//     <>
//       <h1>My little Lemon Goals</h1>
//       <form onSubmit={SubmitHandler}>
//         <input
//           type="text"
//           name="goal"
//           placeholder="Goal"
//           value={formData.goal}
//           onChange={ChangeHandler}
//         />
//         <input
//           type="text"
//           name="by"
//           placeholder="by"
//           value={formData.by}
//           onChange={ChangeHandler}
//         />
//         <button>Submit Goal</button>
//       </form>
//     </>
//   );
// }

// function ListOfGoals(props) {
//   return (
//     <ul>
//       {props.allGoals.map((g) => (
//         <li key={g.goal}>
//           <span>
//             My goal is to {g.goal}, by {g.by}
//           </span>
//         </li>
//       ))}
//     </ul>
//   );
// }
// function App() {
//   const [allGoals, updateAllGoals] = useState([]);

//   function addGoal(goal) {
//     updateAllGoals([...allGoals, goal]);
//   }

//   return (
//     <div className="App">
//       <GoalForm onAdd={addGoal} />
//       <ListOfGoals allGoals={allGoals} />
//     </div>
//   );
// }

/************* MODE TOGGLE****************/
// function App() {
//   return <ModeToggle />;
// }

/********MODE TOGGLE GETTING LEVERAGE OF USEEFFECT**********/

// function App() {
//   const [toggle, setToggle] = useState(false);

//   const ClickHandler = () => {
//     setToggle(!toggle);
//   };

//   React.useEffect(() => {
//     document.title = toggle
//       ? "Welcome to Little Lemon"
//       : "Using the useEffect hook";
//   }, []);

//   return (
//     <div>
//       <h1>Using the useEffect hook</h1>
//       <button onClick={ClickHandler}>Toggle Message</button>
//       {toggle && <h2>Welcome to Little Lemon</h2>}
//     </div>
//   );
// }

/************FETCHING DATA THROUGH API**************/

// function App() {
//   const [user, setUser] = useState([]);

//   const fechData = () => {
//     fetch("https://randomuser.me/api/?results=1")
//       .then((respone) => respone.json())
//       .then((data) => setUser(data));
//   };

//   useEffect(() => {
//     fechData();
//   }, []);

//   return Object.keys(user).length > 0 ? (
//     <div>
//       <h1>Data Returned</h1>
//       <h2>FirstName: {user.results[0].name.first}</h2>
//       <h2>FirstName: {user.results[0].name.last}</h2>
//     </div>
//   ) : (
//     <h2>Data pending...</h2>
//   );
// }

/*************MODYFING THE CHILDREN USING REACT.CHILDREN AND CLONE***************/

// const Row = ({ children, spacing }) => {
//   const childStyle = {
//     marginLeft: `${spacing}px`,
//   };

//   return (
//     <div className="Row">
//       {React.Children.map(children, (child, index) => {
//         return React.cloneElement(child, {
//           style: {
//             ...child.props.style,
//             ...(index > 0 ? childStyle : {}),
//           },
//         });
//       })}
//     </div>
//   );
// };

// function LiveOrders() {
//   return (
//     <div>
//       <Row spacing={32}>
//         <p>Pizza Margarita</p>
//         <p>2</p>
//         <p>30$</p>
//         <p>18:30</p>
//         <p>Shokrullah</p>
//       </Row>
//     </div>
//   );
// }

/************MOUSE EVENT USING CUTTING-CROSS******************/

// const withMousePosition = (WrappedComponent) => {
//   return (props) => {
//     const [mousePosition, setMousePosition] = useState({
//       x: 0,
//       y: 0,
//     });

//     useEffect(() => {
//       const handleMousePositionChange = (e) => {
//         setMousePosition({
//           x: e.clientX,
//           y: e.clientY,
//         });
//       };

//       window.addEventListener("mousemove", handleMousePositionChange);
//       return () => {
//         window.removeEventListener("mousemove", handleMousePositionChange);
//       };
//     }, []);

//     return <WrappedComponent {...props} mousePosition={mousePosition} />;
//   };
// };

// const PanelMouseLogger = ({ mousePosition }) => {
//   if (!mousePosition) {
//     return null;
//   }
//   return (
//     <div className="BasicTracker">
//       <p>Mouse Position</p>
//       <div className="Row">
//         <span>x: {mousePosition.x}</span>
//         <span>y: {mousePosition.y}</span>
//       </div>
//     </div>
//   );
// };

// const PointMouseLogger = ({ mousePosition }) => {
//   if (!mousePosition) {
//     return null;
//   }
//   return (
//     <p>
//       ({mousePosition.x}, {mousePosition.y})
//     </p>
//   );
// };

// const PanelMouseTracker = withMousePosition(PanelMouseLogger);
// const PointMouseTracker = withMousePosition(PointMouseLogger);

// function App() {
//   return (
//     <div className="App">
//       <header className="Header">Little Lemon Restaurant 🍕</header>
//       <PanelMouseTracker />
//       <PointMouseTracker />
//     </div>
//   );
// }

/********************************/

const DesertCount = () => {
  return (
    <DateFetcher
      url="https://littlelemon/desserts"
      render={(data) => {
        <p>{data.length} desserts</p>;
      }}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => {
        <h3>{data.length} drinks</h3>;
      }}
    />
  );
};

function App() {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕</header>
      <DesertCount />
      <DrinksCount />
    </div>
  );
}

export default App;
