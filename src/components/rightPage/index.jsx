import React, { PureComponent } from 'react';
import { BorderBox12 } from '@jiaminghi/data-view-react';
import BrowseCategories from './charts/BrowseCategories';
import UserIdentityCategory from './charts/UserIdentityCategory';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { ModuleTitle } from '../../style/globalStyledSet';
import { connect } from 'dva';
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from './style';
import { TitleColor, color1, color2, color3, borderColor, colorbackground } from '../../style/color';


class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { offline, browseCategories, userIdentityCategory } = this.props;
    return (
      <  RightPage >
        <RightTopBox>
        <BorderBox12  color={[ colorbackground,color1,]}  className='left-top-borderBox12' style={{padding:12}}>
          <div className='right-top'>

            <div className='right-top-content'>
              <BrowseCategories
                browseCategories={browseCategories}></BrowseCategories>
              <img
                alt='地球'
                className='earth-gif'
                src={require('../../assets/images/earth-rotate.gif')}
              />
            </div>
          </div>
          </BorderBox12>
        </RightTopBox>

        <RightCenterBox>
        <BorderBox12  color={[ colorbackground,color1,]}  className='left-top-borderBox12' style={{padding:12}}>
          {/* <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>平均用户类别排布</span>
          </ModuleTitle> */}
          <UserIdentityCategory
            userIdentityCategory={userIdentityCategory}></UserIdentityCategory>
       </BorderBox12>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox12 className='right-bottom-borderBox13' color={[colorbackground, color1]} >
            <div className='right-bottom'>
              {/* <ModuleTitle>
                <i className='iconfont'>&#xe790;</i>
                <span>今日线下门户流量</span>
              </ModuleTitle> */}
              {/* 反馈 */}
              {/* <div className='feedback-box'>
                {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}
              </div> */}
              {/* 门店 */}
              <div className='offline-portal-box'>
                {offline ? (
                  <OfflinePortal
                    offlinePortalData={offline.offlinePortalData}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </BorderBox12>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    browseCategories: state.rightPage.browseCategories,
    userIdentityCategory: state.rightPage.userIdentityCategory,
    offline: state.rightPage.offline,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
