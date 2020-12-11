import React from 'react';
import conflogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {

  render() {

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conflogo} alt="Logo conferencia"/>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
          <h1> {this.props.FirstName} <br/> {this.props.LastName} </h1>
        </div>

        <div className="Badge__section-info">
          <h3> {this.props.JobTitle} </h3>
          <div> @{this.props.Twitter} </div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>

      </div>
    )
  }

}

export default Badge;