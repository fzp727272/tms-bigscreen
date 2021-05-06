import React, { PureComponent, Fragment } from 'react';
import { formatTime } from '../../utils';
import {
  Decoration4,
  Decoration8,
  Decoration5,
} from '@jiaminghi/data-view-react';

import { TopBox, TimeBox } from './style';
import {TitleColor,color1,color2,color3,borderColor,colorbackground,greenColor} from '../../style/color';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '大数据可视化平台',
      timeStr: '',
      weekday: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
    };
  }

  // 设置时间
  componentDidMount() {
    this.setTimingFn();
  }

  setTimingFn() {
    this.timing = setInterval(() => {
      let dateYear = formatTime(new Date(), 'yyyy-MM-dd');
      let dateDay = formatTime(new Date(), 'HH: mm: ss');
      let dateWeek = this.state.weekday[new Date().getDay()];
      this.setState({
        timeStr: `${dateYear} | ${dateDay} ${dateWeek}`,
      });
    }, 1000);
  }

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
            <Decoration4 reverse={true} className='top_decoration10'  color={[color1, greenColor]}/>
            <div className='title-box'>
              <Decoration8
                className='top_decoration8'
                color={[color1, greenColor]}
              />
              <div className='title'>
                <span className='title-text'>{title}</span>
                <Decoration5
                  className='title-bototm top_decoration6'
                  reverse={true}
                  color={[color1, greenColor]}
                />
              </div>

              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={[color1, greenColor]}
              />
            </div>
            <Decoration4 reverse={true} className='top_decoration10 top_decoration10_reverse' color={[color1, greenColor]} />
            <TimeBox>
              <h3>{this.state.timeStr}</h3>
            </TimeBox>
          </div>
        </TopBox>
      </Fragment>
    );
  }
}

export default index;
