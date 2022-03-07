import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './Com/Customer';

const Cus = [{
  'id': 1,
  'test1': 'https://placeimg.com/64/64/1',
  'test2': 'test2'

},
{
  'id': 2,
  'test1': 'https://placeimg.com/64/64/1',
  'test2': 'test22'
}
]

class App extends Component {

  render() {
    return (
    <div>
      {
        Cus.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}              
              test1={c.test1}
              test2={c.test2}
            />
          );
        })
      }
    </div>
    )
  }
}

export default App;

