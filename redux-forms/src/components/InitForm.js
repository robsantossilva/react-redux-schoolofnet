import { Field, reduxForm } from 'redux-form';

const InitForm = (props) => {

  const { onClick, onChangeName } = props;

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

export default reduxForm({
  form: 'initForm'
})(InitForm);