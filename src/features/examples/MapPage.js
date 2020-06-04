import { connect } from "react-redux";
import * as actions from './redux/actions';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Scene } from '@antv/l7';
import { GaodeMap, AMap } from '@antv/l7-maps';
// import { Mapbox } from '@antv/l7-maps';
import {
  AMapScene, MapboxScene, LoadImage,
  SceneEvent, SceneContext,
  LayerContext, LayerEvent,
  PointLayer, PolygonLayer, LineLayer, HeatmapLayer, RasterLayer, ImageLayer, CityBuildingLayer
} from '@antv/l7-react';

export class MapPage extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  async fetchData() {
    const response = await fetch(
      'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
    );
    const raw = await response.json();
    console.info("cjf", raw)
  }
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

    this.fetchData();
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
        // onSceneLoaded={}
        >
          {/* <LoadImage name="marker" url="../../../src/favicon.png" />; */}
          {/* <PolygonLayer
            key={'2'}
            source={{
              data,
            }}
            color={{
              field: 'name',
              values: ['#2E8AE6', '#69D1AB', '#DAF291', '#FFD591', '#FF7A45', '#CF1D49'],
            }}
            shape={{
              values: 'fill',
            }}
            style={{
              opacity: 1,
            }}
            active={{
              option: {
                color: 'red',
              },
            }}
          />; */}
        </AMapScene>
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

const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

async function async_send0() {
  await sleep(1);
  console.log("async_send0");
}


async function await0() {
  console.log("await0")
}


async function await1() {

  console.log("await1")
}


async function await2() {

  console.log("await2")
}


async function async_send1() {

  // await async_send0()
  await await0()
  await await1()
  await sleep(4)
  await await2()
  console.log("async_send1")
}
async_send0()
async_send1()