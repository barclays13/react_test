import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years:26
        }
        this.nextYear = this.nextYear.bind(this); //или nextYear = () =>{}
    }

    nextYear() {
        this.setState(state => ({
            years: ++state.years
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return(
            <>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <button onClick={this.nextYear}>+1 years</button>
                <a href={link}>My profile</a>
            </>

        )
    }
}

const All = () => {
    return (
        <>
        <WhoAmI name='Sergey' surname='Zubarev' link='vk.com'/>
        <WhoAmI name='1' surname='3' link='vk.com'/>
        <WhoAmI name='2' surname='4' link='vk.com'/>
        </>
    )
}

ReactDOM.render(<All />, document.getElementById('root'));


