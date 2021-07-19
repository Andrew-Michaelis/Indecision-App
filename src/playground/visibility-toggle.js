class Visible extends React.Component {
    constructor(props){
        super(props);
        this.visiToggle = this.visiToggle.bind(this);
        this.state ={
            visibility: false
        };
    }
    visiToggle() {
        this.setState((prev)=>{
            return {
                visibility: !prev.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.visiToggle}>{this.state.visibility ? "Hide" : "Show"}</button>
                {this.state.visibility && <p>The Hidden Thing is Displayed</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visible />, document.getElementById("app"));

// const appRoot = document.getElementById("app");
// let visiToggle = "Show Details"
// let bool = false;

// const toggleMe = () => {
//     bool=!bool; 
//     bool ? visiToggle = "Hide Details" : visiToggle = "Show Details";
//     appRender()
// }
// const appRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleMe}>{visiToggle}</button>
//             {bool && <p>The Hidden Thing is Displayed</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// appRender();