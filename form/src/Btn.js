// function Btn() {
//   const clickHandler = () => {
//     return console.log("Button Clicked");
//   };
//   <button onClick={clickHandler}>Click Me</button>;
// }

// export default Btn;

function Btn() {
  const clickHandler = () => console.log("mouse over");
  return <button onMouseOver={clickHandler}>Click me</button>;
}

export default Btn;
