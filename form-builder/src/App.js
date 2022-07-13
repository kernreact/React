import React, {useState} from 'react';

//components
import Form from './components/Form';

//data
import data from './data/formFields.json';

//import styles
import './App.css';

function App() {
  const [submittedFormValues, setSubmittedFormValues] = useState([]);

  return (
    <div className='section'>
      <div className='container'>
        <h1 className='title is-size-2'>Form Builder</h1>
        <hr />
        <div className='columns'>
          <div className='column'>
            <h2 className='title is-size-4'>Sign up for an account</h2>
            <div className='box'>
              <Form
                handleFormSubmit={(values) => setSubmittedFormValues(values)}
                formFields={data.fields}
              />
            </div>
          </div>
          <div className='column is-offset-1'>
            <div className='content'>
              <h2 className='title is-size-4'>Form results</h2>
              <p>
                Form results will be submitted here each time you click the 'sign up' button
              </p>
              <div className='notification'>
                {Object.values(submittedFormValues).length <= 0 && (
                    <p>Submit a form to see the results</p>
                )}
                <ul>
                  {Object.entries(submittedFormValues).map(([key, value]) => 
                    <li key={key}>{value}</li>
                  )}
                </ul>
              </div>
              <button
                className='button is-ligth'
                onClick={() => setSubmittedFormValues({})}
              >
                clear results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
