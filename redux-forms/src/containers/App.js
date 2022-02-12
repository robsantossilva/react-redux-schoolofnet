import InitForm from '../components/InitForm';

function App() {

  function onClick(e) {
    e.preventDefault();
    console.log('Clicked in Redux Form');
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

export default App;
