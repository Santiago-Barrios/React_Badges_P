import React from 'react';


import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Api from '../api' 

class BadgeNew extends React.Component {

  state={ form: {
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    twitter:'',
  } };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null })
    try{
      await Api.badges.create(this.state.form)
      this.setState({ loading: false})
    }catch(error){
      this.setState({ loading: false, error: error })
    }
  }


  render(){

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image" src={header} alt=""/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                  firstName={this.state.form.firstName || 'FIRST_NAME' } 
                  lastName={this.state.form.lastName || 'LAST_NAME'}
                  jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}  
                  twitter={this.state.form.twitter || 'twitter'}
                  email={this.state.form.email || 'EMAIL'}
                  avatarUrl= "https://s.gravatar.com/avatar/a14e774878e7a8c6e389f7ea8e4bed8a?s=80"
                  >
              </Badge>
              
            </div>

            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                >
              </BadgeForm>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;