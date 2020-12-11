import React from 'react';


import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm' 

class BadgeNew extends React.Component {

  state={ form: {
    FirstName:'',
    LastName:'',
    Email:'',
    JobTitle:'',
    Twitter:'',
  } };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }


  render(){

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} alt=""/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                  FirstName={this.state.form.FirstName} 
                  LastName={this.state.form.LastName}
                  JobTitle={this.state.form.JobTitle} 
                  Twitter={this.state.form.Twitter}
                  Email={this.state.form.Email}
                  avatarUrl= "https://s.gravatar.com/avatar/a14e774878e7a8c6e389f7ea8e4bed8a?s=80"
                  >
              </Badge>
              
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} ></BadgeForm>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;