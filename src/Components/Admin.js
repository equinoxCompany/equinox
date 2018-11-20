import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

export default class extends Component {
  state = {

  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then()
  }
  render(){
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing.unit,
      },
    });
    return(
      <div>
      <Input
        defaultValue="Hello world"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      </div>
    )
  }
}