import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getInitialFetch } from '../store/actions';

const globalWarn = (values) => {
  const warnings = {};
  const { name } = values;

  if (name && name.toString().length <= 2) {
    warnings.name = 'To Short';
  }

  return warnings;
}

const globalValidate = (values) => {
  const errors = {};
  const { name } = values;

  if(!name) {
    errors.name = 'Required';
  }

  return errors;
}

const renderField = (params) => {

  const {
    input,
    placeholder,
    type,
    meta: {touched, error, warning}
  } = params;

  return (<div className="form-group">
    <label htmlFor="">{placeholder}</label>
    <input {...input} type={type} placeholder={placeholder} className="form-control"/>
    {touched 
      && (
        (error && <span className='text-danger'>{error}</span>) 
        || (warning && <span className='text-warning'>{warning}</span>) 
      )}
  </div>);
};

const InitForm = (props) => {

  const { onClick, onChangeName, fetchInitial, initialValues } = props;

  useEffect(() => {
    fetchInitial();
  },[]);

  function required(params){
    console.log('required', params);
  }

  function toShort(params){
    console.log('toShort', params);
  }

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
                //validate={[ required, toShort ]}
            />
        </div>
        <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={(e) => onClick(e, initialValues)}>Send</button>
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
    validate:globalValidate,
    warn: globalWarn
  })(InitForm)
);