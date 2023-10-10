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
