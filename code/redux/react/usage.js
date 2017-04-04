import { connect } from 'react-redux';

const mapStateToProps = counter => ({ counter });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onIncrement: increment,
    onDecrement: decrement,
  }, dispatch);
}

const MyAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp);
