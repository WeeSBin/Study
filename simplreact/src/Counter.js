import React, {Component} from 'react';
// https://velopert.com/3629


class Counter extends Component {

    // state 를 설정하는 두 가지의 방법, constructor / class fields
    // ==> class fields 가 먼저 생성되고 그 이휴에 constructor 가 설정된다

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         number: 0
    //     }
    //     this.increase = this.increase.bind(this);
    //     this.decrease = this.decrease.bind(this);
    // }

    state = {
        number: 0,
        foo: {
            bar: 0,
            car: 1
        }
    };

    // 함수형 컴포넌트, 화살표 함수의 작성으로 인해 this 가 바라보는 객체가 달라진다

    increase = () => {

        // setState 함수는 호출될때 해당 컴포넌트가 리렌더링 되도록 설계되어 있다.
        // 또한 setState 는 객체의 깊숙한 곳(depth 2 이상)을 확인하지 못한다.

        // this.setState({
        //     number: this.state.number + 1
            // 아래와 같이 setState 를 한다면 state 의 foo: { car: 2 } 가 되어 버린다. car 값이 사라져버린다.
            // ,foo: {
            //     car: 2
            // }
        // })

        // 아래와 같이 코드를 작성한다면 this 를 다시 참조하지 않아도 state 를 가져올 수 있따.
        // setState 의 첫 번째 인자로 state 가 들어온다.
        // this.setState(
        //     (state) => ({
        //         number: state.number
        //     })
        // )

        // 더 나아가 '비구조화 할당' 문법을 사용하요 아래와 같이 작성 할 수 있다.
        this.setState(
            ({number}) => ({
                number: number + 1
            })
        )

        // 위의 비구조화 할당을 이용한다면 아래와 같이 작성도 가능하다.
        // const { number } = this.state;
        // this.setState({
        //     number: number + 1
        // })

    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
            // 그래서 아래와 같이 전개연산자(...) 를 사용하여 기존의 객체를 뿌려주고 덮어씌우는 식으로 작성해야 한다.
            // ==> 나중에는 immutable.js 사용하여 간단하게 해보자
            // , foo {
            //     ...this.state.foo,
            //     car: 2
            // }
        })
    };

    // 아래와 같이 화살표 함수로 작성하지 않는다면 constructor 에서 this 를 바인딩해야 한다.

    // increase() {
    //     this.setState({
    //         number: this.state.number + 1
    //     })
    // }

    // decrease() {
    //     this.setState({
    //         number: this.state.number - 1
    //     })
    // }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter;