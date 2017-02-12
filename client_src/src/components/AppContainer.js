import React, { Component } from 'react';
import { browserHistory  }  from 'react-router';

// Screen Container Components
import HeaderBar from './1_ScreenContainers/HeaderBar/HeaderBar';

// Components
import StatusContainer from './2_Status/StatusContainer/StatusContainer';

// SCSS
import './0_Global/base.scss';

class AppContainer extends Component {

  constructor() {
    super();
  }

  handleKeydown(event) {
    if (event.key === 'i') {
      // Load inventory
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  render() {

    return (
      <main>

        <HeaderBar>
            <StatusContainer />
        </HeaderBar>

        {this.props.children}

      </main>
    );
  }
}

export default AppContainer;
