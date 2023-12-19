import { Alert } from "react-bootstrap";

const Welcome = (props) => (
  <Alert variant="warning" className={props.className}>
    {" "}
    Benvenuti alla nostra libreria online, dove troverete una vasta selezione di libri per tutti i gusti.
  </Alert>
);
export default Welcome;
