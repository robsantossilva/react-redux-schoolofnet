import { connect } from 'react-redux';
import InitForm from '../components/InitForm';
import { getInitialFetch, sendServer } from '../store/actions';

function App(props) {

  const { createName } = props;

  function onClick(e, data) {
    e.preventDefault();
    createName(data);
  }

  function onChangeName(e) {
    const { target } = e;
    console.log(target.value);
  }

  return (
    <div className='col'>
      <div className="card">
        <div className="card-header">
          Redux Form
        </div>
        <div className="card-body">
          <div className="card-title">My form</div>
          <InitForm 
            onClick={onClick}  
            onChangeName={onChangeName}
            />
        </div>
        <div className="card-footer">
          Card Footer
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitial: () => dispatch(getInitialFetch()),
    createName: async (data) => dispatch(await sendServer(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
