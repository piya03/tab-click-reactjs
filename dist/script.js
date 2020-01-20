function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Test extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleTab",





    value => {
      this.setState({
        active: value });

    });this.state = { active: "home" };}

  render() {
    const { active } = this.state;
    return (
      React.createElement("div", { className: "container" },
      React.createElement("ul", { className: "myul" },
      React.createElement("li", {
        onClick: () => {
          this.handleTab("home");
        } }, "HOME"),



      React.createElement("li", {
        onClick: () => {
          this.handleTab("about");
        } }, "ABOUT"),




      React.createElement("li", {
        onClick: () => {
          this.handleTab("blogs");
        } }, "BLOGS"),



      React.createElement("li", {
        onClick: () => {
          this.handleTab("feature");
        } }, "FEATURES"),



      React.createElement("li", {
        onClick: () => {
          this.handleTab("location");
        } }, "LOCATION"),



      React.createElement("li", {
        onClick: () => {
          this.handleTab("contacts");
        } }, "CONTACTS")),




      React.createElement("div", { className: "discription" },
      active == "home" && React.createElement("div", { className: "home" }, "I am Home page."),
      active == "about" && React.createElement("div", { className: "about" }, "I am About page."),
      active == "blogs" && React.createElement("div", { className: "blogs" }, "I am Blogs page."),
      active == "feature" &&
      React.createElement("div", { className: "feature" }, "I am Features page."),


      active == "location" &&
      React.createElement("div", { className: "location" }, "I am Location page."),


      active == "contacts" &&
      React.createElement("div", { className: "contacts" }, "I am Contacts page."))));




  }}


ReactDOM.render(React.createElement(Test, null), document.getElementById("root"));