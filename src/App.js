
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {

  return (
    <div className="App">
          <h1>Hi niggaz</h1>
         
          <Row title="Trending" fetchURL = {requests.fetchTrending}/>
          <Row title="Comedy" fetchURL = {requests.fetchTopRated}/>
    </div>
  );
}

export default App;
