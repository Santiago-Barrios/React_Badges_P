import React from 'react'

class BadgeForm extends React.Component {

  // state={};

  // handleChange = (e) => {
  
  //   this.setState({
  //     [e.target.name]: e.target.value, 
  //   })
  // }

  handleCick = (e) => {
    console.log('Button was clicked');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form was submitted');
    console.log(this.props.formValues);
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >First Name</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="FirstName"
              value={this.props.formValues.FirstName}
            />
          </div>

          <div className="form-group">
            <label >Last Name</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="LastName"
              value={this.props.formValues.LastName}
            />
          </div>

          <div className="form-group">
            <label >Email</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="Email"
              value={this.props.formValues.Email}
            />
          </div>

          <div className="form-group">
            <label >Job Title</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="JobTitle"
              value={this.props.formValues.JobTitle}
            />
          </div>

          <div className="form-group">
            <label >Twitter</label>
            <input 
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="Twitter"
              value={this.props.formValues.Twitter}
            />
          </div>

          <button  onClick={this.handleCick} className="btn btn-primary">Save</button>

        </form>

      </div>
    )
  }
}

export default BadgeForm;