import { connect } from "react-redux";
import * as actions from './redux/actions';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Scene } from '@antv/l7';
import { GaodeMap, AMap } from '@antv/l7-maps';
// import { Mapbox } from '@antv/l7-maps';
import { LineLayer, AMapScene, MapboxScene } from '@antv/l7-react';

export class MapPage extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    // const scene = new Scene({
    //   id: 'map',
    //   map: new GaodeMap({
    //     pitch: 35.210526315789465,
    //     style: 'dark',
    //     center: [104.288144, 31.239692],
    //     zoom: 4.4,
    //     token: '93a2af675429c2f8f8303c3f1f83e2cc',
    //     plugin: [], // 可以不设置
    //   }),
    // });
    // const [data, setData] = React.useState();
    // React.useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch(
    //       'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
    //     );
    //     const raw = await response.json();
    //     setData(raw);
    //   };
    //   fetchData();
    // }, []);
    return (
      <div>
        {/* <p> map page</p> */}
        <AMapScene
          option={{}}
          map={{
            style: 'light',
            center: [112, 20],
            token: '93a2af675429c2f8f8303c3f1f83e2cc',
          }}
        />
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);