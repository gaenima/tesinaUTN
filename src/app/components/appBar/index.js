import React, {Component} from 'react';
import {connect} from 'react-redux';
import Page from './page';
import findSuggestions from '../../store/actions/findSuggestions';
import findResults from '../../store/actions/findResults';


class IAppBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        
    }
    onChangeText(text){
        this.setState({ text });
        this.props.findSuggestions(text);     

    }
    onChangeSelection(text){
        this.setState({ text });
        this.props.findResults(text);
    }
    render(){
        const { text } = this.state;
        const { suggestions } = this.props;

        return (
            <Page 
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        suggestions: state.tasks,
       
    };
};
const mapDispatchToProps =  { 
    
    
        findSuggestions,
        findResults,  
 
};

export default connect(mapStateToProps,mapDispatchToProps)(IAppBar);