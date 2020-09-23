import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }
    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const {
            isOpen,
        } = this.state;

        return (
            <div >
                <div className="container-icon">     
                </div>   
     
                <input  className="form-control mr-sm-2" value={text}
                    placeholder="Buscar…"
                   
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                 {/* <button onClick={() => onChangeText()} class="btn btn-secondary my-2 my-sm-0">Buscar</button>  */}
                             
                {/* {isOpen &&
                <menu  >
                    <ul> 
                    { suggestions.map(suggestion =>
                    <li 
                        key={suggestion.id}
                        component="div"
                        onClick={() => {
                           
                            onChangeSelection(suggestion.name);
                            this.setState({ isOpen: false });
                        }}                        
                    >                      
                         {suggestion.name}

                    </li>
                    )}
                    </ul>
                    
                </menu>} */}
            </div>
        );
    }
}

export default Autocomplete;
