import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../store/actions/findCurrentItem';

class Details extends Component {


componentDidMount() {
    this.props.findCurrentItem(parseInt
        (this.props.match.params.item.Id));
        const {
                    match: { params: { itemId } },
                    findCurrentItem,
                } = this.props;
        
                findCurrentItem(itemId);
            }
        
            goTo(path) {
                this.props.history.push(path);
            }


    render() {
        const {
            currentItem,
        } = this.props;

        return (
            <Page 
            currentItem={currentItem}
            goTo={(path) => {
                this.props.history.push(path);
              
            }}
            />
          
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks,
    results: state.results,
    currentItem: state.currentItem,
});

const mapDispatchToProps = {
    findCurrentItem,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);