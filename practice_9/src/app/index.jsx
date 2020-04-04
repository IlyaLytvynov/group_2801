import React from 'react';
import ReactDOM from 'react-dom';
import { SignInForm } from './components/SignInForm.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <SignInForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.hello-example'));
