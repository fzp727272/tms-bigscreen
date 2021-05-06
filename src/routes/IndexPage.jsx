import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../components/topPage';
import LeftPage from '../components/leftPage';
import CenterPage from '../components/centerPage';
import RightPage from '../components/rightPage';
import $ from 'jquery';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {containerStyle:{}};
  }

componentDidMount(){
  // let containerStyle;
  // let contentStyle;
  const screenHeight = $(window).height();
  const screenWidth = $(window).width();
  if (screenWidth < 1280 ) {
    const scaleSize = 'scale(' + screenWidth / 1440 + ' ,' + screenWidth / 1440 + ')';
    this.setState({containerStyle:{
      fontSize:18,
      width: 1440,
      height: (1440 * screenHeight) / screenWidth,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      transform: scaleSize,
      'transform-origin': 'left top',
      'justify-content': ' center',
    }});

      window.addEventListener( 'resize', this.resizeReload.bind(this) );
  }
}
resizeReload(){
  window.location.reload()
}
  
  render() {
    return (
      <IndexPageStyle className='index-page-container' style={this.state.containerStyle}>
        <TopPage />
        <IndexPageContent>
          {/* 左侧内容 */}
          <LeftPage />
          {/* 中间内容 */}
          <CenterPage className='center-page' />
          {/* 右侧内容 */}
          <RightPage />
        </IndexPageContent>
      </IndexPageStyle>
    );
  }
}

export default connect()(IndexPage);
