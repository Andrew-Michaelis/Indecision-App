import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component { //My app lives here
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearModal =()=> {
        this.setState(() => ({selectedOption: undefined}));
    }
    handleDeleteOptions =()=> {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption =(optionToRemove)=> {
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
    handlePick =()=> {
        const rand = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[rand]
        this.setState(()=>({selectedOption: option}))
    }
    handleAddOption =(option)=> {
        //-------------------------Error Handling First
        if(!option) {
            return "Enter Valid Value";
        }else if(this.state.options.indexOf(option) > -1) {
            return "This Option Already Exists";
        }

        this.setState((prev)=>({ options: prev.options.concat([option]) }));
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
    
            if (options) this.setState(()=>({ options: options }))
        }catch (err){
            console.log(err);
        }
    }
    componentDidUpdate(prevProp, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log("saving data");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    componentWillUnmount() {
        console.log("unmounted");
    }
    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <div className="container">
                    <Header subtitle={subtitle}/>
                    <Action 
                        hasOptions={this.state.options.length >0}
                        handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption
                            handleAddOption={this.handleAddOption}/>
                    </div>
                    </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearModal={this.handleClearModal}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}