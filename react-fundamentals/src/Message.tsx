//? PascalCasing
function Message() {
  //? JSX: JavaScript XML
  const name = "Maria";
  if (name) return <h1>Hello {name}!</h1>;
  return <h1>Hello World!</h1>;
  //   return name == "aas" ? <h1>Hello {name}!</h1> : <h1>Hello World!</h1>;
}

export default Message;
