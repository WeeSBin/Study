import React, {Component} from 'react';
import './App.css';
import PhoneFrom from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {

    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '김민준',
                phone: '010-1234-1234'
            },
            {
                id: 0,
                name: '홍길동',
                phone: '010-5678-5678'
            }
        ]
    }

    handleCreate = (data) => {
        const {information} = this.state
        this.setState({
            // state 의 불변성을 유지하기 위해 push, splice, unshift, pop 같이 내부의 값을 직접적으로 수정하는 것은 적합하지 않다.
            // 대신 concat, slice, map, filter 와 같은 함수를 이용하여 배열을 다루자
            information: information.concat({id: this.id++, ...data})
        })
    }

    render() {
        return (
            <div>
              <PhoneFrom onCreate={this.handleCreate} />
              <PhoneInfoList data={this.state.information}/>
            </div>
        )
    }
}

export default App;