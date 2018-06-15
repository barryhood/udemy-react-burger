import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} /> {/* this.props.ctr is now a property populated from our redux state */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => { // "state" is populated from our redux state
    return {
        ctr: state.ctr.counter, // which allows us to retrieve state values and attribute them to props
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, payload: {value: 5}}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: {value: 5}}),
        onStoreResult: (counter) => dispatch({type: actionTypes.STORE_RESULT, counter}), // we expect to get counter from the onStoreResult click event and pass it along as action.counter to our reducer
        onDeleteResult: (resultId) => dispatch({type: actionTypes.DELETE_RESULT, resultId}) // ^^ same for resultId, this is how we pass state to our reducers
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);