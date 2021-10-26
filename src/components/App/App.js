import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $ from "jquery";
import Popper from "popper.js";
import MenuDepartamentos from "../Departamentos/MenuDepartamentos";
import Router from "../Router";


function App() {
  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
