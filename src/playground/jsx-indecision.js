const app = {
    title: "Indecision App",
    subtitle: "For the Indecisive",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        appRender();
    }
}
const emptyOptions = () => {
    app.options = [];
    appRender();
}
const makeDecision = () => {
    const randNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randNum];
    alert(option);
}
const appRoot = document.getElementById("app");

const numbers = [55, 101, 531];

//JSX - JavaScript XML
const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>Pick Rando</button>
            <button disabled={app.options.length === 0} onClick={emptyOptions}>Remove All</button>
            <ol>
                {app.options.map((data)=>{return <li key={app.options.indexOf(data)}>{data}</li>})}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>+</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

appRender();