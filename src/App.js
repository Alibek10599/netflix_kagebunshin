
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {

  return (
    <div className="App">
          <h1>Hi niggaz</h1>
         
          <Row title="Trending" fetchURL = {requests.fetchTrending} isLargeRow={true}/>
          <Row title="Top Rated" fetchURL = {requests.fetchTopRated}/>
          <Row title="Western" fetchURL = {requests.fetchWestern}/>
          <Row title="Action" fetchURL = {requests.fetchAction}/>
          <Row title="Horror" fetchURL = {requests.fetchHorror}/>
          <Row title="History" fetchURL = {requests.fetchHistory}/>
          <Row title="Science Fiction" fetchURL = {requests.fetchSciFi}/>
          <Row title="War" fetchURL = {requests.fetchWar}/>
          <Row title="Comedy" fetchURL = {requests.fetchComedyMovies}/>
          <Row title="Fantasy" fetchURL = {requests.fetchFantasy}/>
    </div>
  );
}

export default App;
