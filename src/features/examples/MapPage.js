import { connect } from "react-redux";
import * as actions from './redux/actions';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//eslint-disable-next-line
import { Scene } from '@antv/l7';
//eslint-disable-next-line
import { GaodeMap, AMap } from '@antv/l7-maps';
// import { Mapbox } from '@antv/l7-maps';
import {
  //eslint-disable-next-line
  AMapScene, MapboxScene, LoadImage,
  //eslint-disable-next-line
  SceneEvent, SceneContext,
  //eslint-disable-next-line
  LayerContext, LayerEvent,
  //eslint-disable-next-line
  PointLayer, PolygonLayer, LineLayer, HeatmapLayer, RasterLayer, ImageLayer, CityBuildingLayer
} from '@antv/l7-react';

export class MapPage extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.fetchData();
  }
  async fetchData() {
    const response = await fetch(
      // 'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
      'https://gw.alipayobjects.com/os/basement_prod/337ddbb7-aa3f-4679-ab60-d64359241955.json',
    );
    const raw = await response.json();
    console.info("cjf", "fetchData response ", raw)
    this.setState({ data: raw });
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
    console.log("cjf", "render", this.state.data)
    return (
      <div>
        <AMapScene
          option={{}}
          map={{
            style: 'light',
            center: [104.995156, 31.450658],
            zoom: 3.79,
            pitch: 0,
            token: '93a2af675429c2f8f8303c3f1f83e2cc',
          }}
        // onSceneLoaded={}
        >
          {/* <LoadImage name="marker" url="../../../src/favicon.png" />; */}
          <HeatmapLayer
            key={'2'}
            source={{
              data: this.state.data,
              transforms: [
                {
                  type: 'hexagon',
                  size: 90000,
                  field: 'capacity',
                  method: 'sum'
                }
              ]
            }}
            color={{
              field: 'sum',
              values: [
                '#3F4BBA',
                '#3F4BBA',
                '#3F4BBA',
                '#3F4BBA',
                '#3C73DA',
                '#3C73DA',
                '#3C73DA',
                '#0F62FF',
                '#0F62FF',
                '#30B2E9',
                '#30B2E9',
                '#40C4CE'
              ].reverse(),
            }}
            shape={{
              values: 'hexagon',
            }}
            style={{
              coverage: 0.9,
              angle: 0,
              opacity: 1.0
            }}
            active={{
              option: {
                color: 'red',
              },
            }}
          />;
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
