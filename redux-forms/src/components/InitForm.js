import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getInitialFetch } from '../store/actions';

const InitForm = (props) => {

  const { onClick, onChangeName, fetchInitial } = props;

  useEffect(() => {
    fetchInitial();
  });

  return (
    <form>
        <div className="mb-3">
            <label htmlFor="name">Enter your name:</label>
            <Field
                name="name"
                placeholder="Enter your name"
                type="text"
                component="input"
                //component={renderField}
                className="form-control"
                onChange={onChangeName}
            />
        </div>
        <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={onClick}>Send</button>
        </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitial: () => dispatch(getInitialFetch())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(
  reduxForm({
    form: 'InitForm',
    enableReinitialize: true
  })(InitForm)
);