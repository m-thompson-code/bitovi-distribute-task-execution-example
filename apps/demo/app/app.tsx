// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Link } from "react-router";

export function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link role="button" to={`/count/0`}>
        Let's start counting!
      </Link>
    </div>
  );
}

export default App;
