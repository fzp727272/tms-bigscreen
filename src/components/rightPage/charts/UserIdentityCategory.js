import React, { PureComponent } from 'react';
import { CapsuleChart } from '@jiaminghi/data-view-react';
import {TitleColor,color1,color2,color3,blueColor,greenColor,redColor,borderColor,colorbackground} from '../../../style/color';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 单位
        unit: '（人）',
        showValue: false,
        colors:[color1, blueColor,greenColor,redColor],
        data: [],
      },
    };
  }
  render() {
    const { userIdentityCategory } = this.props;
    const config = {
      ...this.state.config,
      ...userIdentityCategory,
    };
    return (
      <div>
        {userIdentityCategory ? (
          <CapsuleChart
        
            config={config}
            style={{
              width: '100%',
              height: '2.625rem',
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
