const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Magic",
      animal: "cat",
      breed: "moggie"
    }),
    React.createElement(Pet, {
      name: "Garfield",
      animal: "cat",
      breed: "ginger"
    }),
    React.createElement(Pet, {
      name: "Ollie",
      animal: "cat",
      breed: "polite"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
