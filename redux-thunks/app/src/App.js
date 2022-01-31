import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { thunkFetchData } from './store/actions/appAction';

function App({fetchData, data}) {

  useEffect(() => {
    console.log('Mounted');

    (async () => {
      await fetchData();
    })();
    
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map(i => <li key={i.id}>{i.joke}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.fetched,
    isFetching: state.isFetching,
    error: state.fetchedError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(thunkFetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
