import React, { Component } from 'react';
// import axios from 'axios';
import Peep from './Peep';
import NewPeepForm from './NewPeepForm';
import NewUserForm from './NewUserForm'
import SignInForm from './SignInForm';


const GET_PEEPS_URL = "https://chitter-backend-api.herokuapp.com/peeps"
const CREATE_USER_URL = 'https://chitter-backend-api.herokuapp.com/users';
const CREATE_PEEPS_URL = 'https://chitter-backend-api.herokuapp.com/peeps';
const CREATE_SESSION_URL = 'https://chitter-backend-api.herokuapp.com/sessions';
const DELETE_PEEP_URL = 'https://chitter-backend-api.herokuapp.com/peeps/'
let sessionKey = ''
let userID = '';

class PeepsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      peeps: [],
    }
    this.addNewPeep = this.addNewPeep.bind(this)
    this.removePeep = this.onRemovePeep.bind(this)
    this.addNewUser = this.addNewUser.bind(this)
    this.userSignIn = this.userSignIn.bind(this)
  }

  componentDidMount() {
    this.getPeeps();
  }

  async getPeeps() {
    fetch(GET_PEEPS_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      this.setState({
        peeps: data
      })
      console.log(this.state.peeps)
    })
    .catch(error => console.log(error))
  }

  async addNewPeep(body) {
    let data = { peep: { user_id: userID, body: body } };
    let response = await fetch(CREATE_PEEPS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token token=${sessionKey}`
      },
      body: JSON.stringify(data)
    });
    console.log(JSON.stringify(response))
    this.getPeeps();
  }

  async onRemovePeep(id) {
    let response = await fetch(DELETE_PEEP_URL + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token token=${sessionKey}`
      }
    });
    console.log(JSON.stringify(response))
    this.getPeeps();
  }

  async addNewUser(handle, password) {
      let data = { user: { handle: handle, password: password } };
      let response = await fetch(CREATE_USER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    }

  async userSignIn(handle, password) {
      let data = {"session": {"handle":handle, "password":password}};
      let response = await fetch(CREATE_SESSION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      let sessionData = await response.json();
      console.log(JSON.stringify(response))
          sessionKey = sessionData.session_key;
          userID = sessionData.user_id;
          console.log(userID)
          console.log(sessionKey)
          console.log(sessionData)
          return sessionData;
    }

render() {
  return (
    <div className="forms">
          <NewUserForm onNewUser={this.addNewUser}/>
          <SignInForm userSignIn={this.userSignIn}/>
          <NewPeepForm onNewPeep={this.addNewPeep}/>

        <div className="Peeps-container">
        {this.state.peeps.map( peep => {
          return (<Peep
              peep={peep}
              key={peep.id}
              onRemovePeep={this.removePeep}
            />)
            }
          )}
        </div>
      </div>
    )
  }
}

export default PeepsContainer;
