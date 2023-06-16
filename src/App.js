import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <div>
        <h3>Your Form Data</h3>
        <p>First Name: {person.firstName}</p>
        <p>Last Name: {person.lastName}</p>
        <p>Email: {person.email}</p>
        <p>Password: {person.password}</p>
        <p>Confirm Password: {person.confirmPassword}</p>
    </div>
    </div>
  );
}

export default App;
