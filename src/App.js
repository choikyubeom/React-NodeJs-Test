import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './Com/Customer';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> 
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
          </TableBody>
        </Table>

      </div>
    )
  }
}

export default App;

