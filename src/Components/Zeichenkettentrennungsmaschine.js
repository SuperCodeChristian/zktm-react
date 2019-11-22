import React from 'react';

class Zeichenkettentrennungsmaschine extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            status: 'constructed',
            name: props.name,
            geschlecht: props.geschlecht
         }
        console.log(this.state.name + ' ist ' + this.state.geschlecht)
    }
    render() { 
        return ( <div>:p</div> );
    }
}

export default Zeichenkettentrennungsmaschine;