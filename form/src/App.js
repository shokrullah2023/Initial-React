// import logo from "./logo.svg";
// import logo from "./logo.svg";
// import "./App.css";
// // import Btn from "./Btn";
// import ModeToggle from "./ModeToggle";
import { useEffect, useReducer, useState } from "react";
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


/*********GIVING FEEDBACK AND LEAVING COMMENT************/

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

/***************COUNTING RESTAURANT INCOME USING USEREDUCER*****************/

// const reducer = (state, action) => {
//   if (action.type === "buying_ingredient") return { money: state.money - 10 };
//   if (action.type === "sell_a_meal") return { money: state.money + 10 };
//   return state;
// };

// function App() {
//   const initialState = { money: 100 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Wallet: {state.money}</h1>
//       <div>
//         <button onClick={() => dispatch({ type: "buying_ingredient" })}>
//           Shopping for veggies!
//         </button>
//         <button onClick={() => dispatch({ type: "sell_a_meal" })}>
//           Serve a meal to the customer
//         </button>
//       </div>
//     </div>
//   );
// }

/***********FOCUS INPUT USING THE USEREF****************/

// function App() {
//   const formInputRef = React.useRef(null);

//   const focusInput = () => {
//     formInputRef.current.focus();
//   };

//   return (
//     <>
//       <h1>Using useRef to access underlying DOM</h1>
//       <input ref={formInputRef} type="text" />
//       <button onClick={focusInput}>Focus input</button>
//     </>
//   );
// }

export default App;
