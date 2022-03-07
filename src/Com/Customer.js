import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell>{this.props.test1}</TableCell>
                    <TableCell>   <img src={this.props.test1} alt="image" /></TableCell>
                   
                    <TableCell>{this.props.test2}</TableCell>
                </TableRow>
                <Customer1 id={this.props.id}></Customer1><Customer2 test1={this.props.test1} test2={this.props.test2}           ></Customer2>
            </div>
        )
    }

}

class Customer1 extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.id}</h2>
            </div>
        )
    }

}

class Customer2 extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.test1}</h2>
                <img src={this.props.test1} alt="image" />
                <p>{this.props.test2}</p>
            </div>
        )
    }

}

export default Customer;
