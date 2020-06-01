import { connect } from "react-redux";
import * as actions from './redux/actions';
import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
export class MapPage extends Component{

}
/* istanbul ignore next */
function mapStateToProps(state) {
    return {
      examples: state.examples,
    };
  }
  
  /* istanbul ignore next */
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ ...actions }, dispatch),
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(MapPage);