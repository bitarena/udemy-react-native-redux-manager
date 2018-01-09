import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button} from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  // state.auth.email; auth is defined in the reducers
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
