import React from 'react';
import './Zktm.css';

class Zktm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            string:'',
            cutby: '',
            front: '',
            back: '',
            isBefore: true,
            msg: ''
         }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.cut();
        });
    }

    handleRadio = (event) => {
        this.setState({isBefore: !this.state.isBefore},() => {
            this.cut();
        });
    }
    cut = () => {

        let pos = this.state.string.search(this.state.cutby);
        if (pos === -1) {
            this.setState({msg: 'Zeichenkette nicht gefunden!'})
            return;
        } else {
            this.setState({msg: ''})
        }
        if (this.state.isBefore) {
            this.setState({front: this.state.string.substring(0, pos)})
            this.setState({back: this.state.string.substring(pos, this.state.string.length)})
        } else {
            this.setState({front: this.state.string.substring(0, pos + this.state.cutby.length)})
            this.setState({back: this.state.string.substring(pos + this.state.cutby.length, this.state.string.length)})
        }

    }
    render() { 
        return ( 
            <div>
                <h1>Zeichenkettentrennungsmaschine</h1>
                <form>
                    <p><label>Zu trennende Zeichenkette:</label></p>
                    <input type="text" name="string" id="string" required
                        value={this.state.string}
                        onChange={this.handleChange}>
                    </input>
                    <p><label>Zeichenkette für die Trennung:</label></p>
                    <input type="text" name="cutby" id="cutby" required
                        value={this.state.cutby}
                        onChange={this.handleChange}>
                    </input>
                </form>
                <section className="radios">
                    <p><span>Trennung davor</span>
                        <input type="radio" name="radio" checked={this.state.isBefore} id="buttonOne" value="buttonOne" onChange={this.handleRadio} />
                    </p>
                    <p><span>Trennung danach</span>
                        <input type="radio" name="radio" id="bTwo" checked={!this.state.isBefore} value="buttonTwo" onChange={this.handleRadio} />
                    </p>
                </section>
                <p className="msg">{this.state.msg}</p>
                <section className="output">
                    <h3>Vorderer Teil</h3>
                    <p><strong>{this.state.front}</strong></p>
                    <h3>Hinterer Teil</h3>
                    <p><strong>{this.state.back}</strong></p>
                </section>
            </div>
        );
    }
}

export default Zktm;
