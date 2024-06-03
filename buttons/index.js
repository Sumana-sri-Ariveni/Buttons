 



const Button = (props) => {
    const {buttonname,className} = props;
    return(<button className={`btn ${className}}>{buttonname}</button>);
};

const element = (
    <div className="container">
        <div className="middlecontainer">
            <h1 className="heading">Social Buttons</h1>
            <Button buttonname="Like" />

        </div>
    
    </div>
)

ReactDOM.render(element,document.getElementById("root"))