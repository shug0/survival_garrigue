// CORE
import React, { Component } from 'react';
// Components
import StatusData from '../StatusData/StatusData';
// LIBS
import Chance from 'chance';
// SCSS
import './StatusContainer.scss';

const chance = new Chance();

class StatusContainer extends Component {

    render() {

        return (
          <section className='StatusContainer'>
              <StatusData icon="tint" data={`${chance.d100()}%`}/>
              <StatusData icon="cutlery" data={`${chance.d100()}%`}/>
              <StatusData icon="key" data={chance.d20()} disabled />
          </section>
        );
    }
}

export default StatusContainer;
