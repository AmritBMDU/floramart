// import logo from './logo.svg';
import {Helmet} from "react-helmet";
import './App.css';
import Router from './routes';

function App() {
  return (
    <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>floramart</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
        

    <Router />
    </div>
  );
}

export default App;
