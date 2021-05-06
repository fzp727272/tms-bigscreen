import React, { PureComponent } from 'react';
import { CenterPage, CenterBottom } from './style';
import Map from './charts/Map';
import { connect } from 'dva';
import { BorderBox12 } from '@jiaminghi/data-view-react';
import {color1,color2,color3,borderColor,colorbackground,redColor,greenColor,blueColor} from '../../style/color';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detailsList, mapData } = this.props;
    return (
      <CenterPage>
        <Map mapData={mapData}></Map>
        <CenterBottom>
        <BorderBox12 color={[color3,greenColor]} style={{background:colorbackground}}>
          

        </BorderBox12>
          {/* <div className='detail-list'>
            {detailsList
              ? detailsList.map((item, index) => {
                  return (
                    <div className='detail-list-item' key={index}>
                      <img
                        src={require(`../../assets/images/center-details-data${
                          index + 1
                        }.png`)}
                        alt={item.title}
                      />
                      <div className='detail-item-text'>
                        <h3>{item.title}</h3>
                        <span>{item.number}</span>
                        <span className='unit'>{item.unit}</span>
                      </div>
                    </div>
                  );
                })
              : ''}
          </div> */}
        </CenterBottom>
      </CenterPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailsList: state.centerPage.detailsList,
    mapData: state.centerPage.mapData,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
