import { connect } from 'react-redux';
import LiveMeet from 'components/LiveMeet';

const mapStateToProps = state => ({
  //auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  //getList: () => dispatch(getList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveMeet)
