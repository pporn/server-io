import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { date } = this.state;

    return (
      <footer className="footer">
        <div className="content has-text-centered">

          <p>
            &copy;
            {' 2018 '}
            <a href="http://server.io">server.io</a>
            {' Powered by '}
            <a href="https://bulma.io">Bulma</a>
            {', '}
            <a href="http://reactjs.io">React</a>
            {' and '}
            <a href="http://nodejs.io">Node.js</a>
            {'.'}
          </p>

          <time>
            {date.toLocaleTimeString()}
          </time>

        </div>
      </footer>
    );
  }
}

export default Footer;
