import React, {Component} from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('value', this.state.inputValue)
    this.props.handleSearch(this.state.inputValue)

  }

  render() {

    const styles = {
      form: {
        display: 'flex',
        flexDirection: 'row'
      },
      input: {
        height: '40px',
        fontSize: '20px',
        paddingLeft: '10px',
        borderRadius: '25px',
        width: '100%',
        outline: 'none'
  }
    };

    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} style={styles.form} >
          <input type="text"
                 placeholder="City name"
                 value={this.state.inputValue}
                 onChange={this.handleChange}
                 style={styles.input} />
        </form>
      </div>
    );
  }
}

export default Search







