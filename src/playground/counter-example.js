class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAdd(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinus(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
        // this.setState({count: 0}) //outdated method
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleReset}>0</button>
                <button onClick={this.handleMinus}>-1</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));



// let count = 0;

// const appRoot = document.getElementById("app");

// const addOne = () => {count++; renderCounterApp();}
// const subOne = () => {count--; renderCounterApp();}
// const setZero = () => {count = 0; renderCounterApp();}

// const renderCounterApp = () => {
//     const myTemp = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={setZero}>0</button>
//             <button onClick={subOne}>-1</button>
//         </div>
//     );
//     ReactDOM.render(myTemp, appRoot);
// }

// renderCounterApp();