import React, {Component} from 'react';
import './App.css';
import PhoneFrom from './components/PhoneForm'

class App extends Component {

    handleCreate = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div>
              <PhoneFrom onCreate={this.handleCreate} />
            </div>
        )
    }
}

export default App;
