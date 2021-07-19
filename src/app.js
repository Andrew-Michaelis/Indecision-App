class IndecisionApp extends React.Component { //My app lives here
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        console.log("fetching data");
    }
    componentDidUpdate(prevProp, prevState) {
        console.log("saving data");
    }
    componentWillUnmount() {
        console.log("unmounted");
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState(
            (prev)=>({
                options: prev.options.filter(
                    (option)=>{
                        return optionToRemove !== option;
                    }
                )
            })
        )
    }
    handlePick() {
        const rand = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[rand]
        console.log(option);
    }
    handleAddOption(option) {
        //-------------------------Error Handling First
        if(!option) {
            return "Enter Valid Value";
        }else if(this.state.options.indexOf(option) > -1) {
            return "This Option Already Exists";
        }

        this.setState((prev)=>({ options: prev.options.concat([option]) }));
    }
    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length >0}
                    handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOption
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps = {
    title: "Indecision"
};
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                    What should I do?
            </button>
        </div>
    );
};
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option)=>(
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}/>)
            )}
        </div>
    );
};
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e)=>{props.handleDeleteOption(props.optionText)}}>remove</button>
        </div>
    );
};
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        this.setState(()=>({ error: error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app")); //Initial render