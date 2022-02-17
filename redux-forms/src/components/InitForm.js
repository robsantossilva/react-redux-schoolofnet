import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getInitialFetch } from '../store/actions';

const validate = (values) => {
  const errors = {};
  const { name } = values;

  if(!name) {
    errors.name = 'Required';
  }else if (name.toString().length <= 2) {
    errors.name = 'To Short';
  }

  return errors;
}

const renderField = (params) => {

  const {
    input,
    placeholder,
    type,
    meta: {touched, error}
  } = params;

  console.log(params);

  return (<div className="form-group">
    <label htmlFor="">{placeholder}</label>
    <input {...input} type={type} placeholder={placeholder} className="form-control"/>
    {touched && (error && <span className='text-danger'>{error}</span>)}
  </div>);
};

const InitForm = (props) => {

  const { onClick, onChangeName, fetchInitial } = props;

  useEffect(() => {
    fetchInitial();
  });

  return (
    <form>
        <div className="mb-3">
            <Field
                name="name"
                placeholder="Enter your name:"
                type="text"
                component={renderField}
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
    enableReinitialize: true,
    validate
  })(InitForm)
);