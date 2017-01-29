import React, { Component } from 'react';

// Screen Container Components
import HeaderBar from './1_ScreenContainers/HeaderBar/HeaderBar';

// Components
import StatusContainer from './2_Status/StatusContainer/StatusContainer';

// SCSS
import './0_Global/base.scss';

class AppContainer extends Component {

  constructor() {
    super();
    this.handlerKeyUp = this.handlerKeyUp.bind(this);
  }

  handlerKeyUp(event) {
    console.log('yolo');
  }

  render() {

    const { children, location } = this.props;

    return (
      <main onKeyUp={this.handlerKeyUp}>

        <HeaderBar>
            <StatusContainer />
        </HeaderBar>

        {children && React.cloneElement(children, {
          key: location.pathname
        })}


      </main>
    );
  }
}

export default AppContainer;
