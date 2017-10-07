import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Counter from '../../components/Counter';
import { increase, decrease } from './actions';
import { selectCounter } from './selectors';
import './styles.css';

export class App extends Component {
  render() {
    const { count, onIncrease, onDecrease } = this.props;
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to Simple React Redux</h1>
        </header>
        <Counter
          value={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
    );
  }
}

// PROPTYPES...

const mapStateToProps = createStructuredSelector({
  count: selectCounter()
});

const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
