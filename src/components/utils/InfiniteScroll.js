import { Component } from 'react';
import PropTypes from 'prop-types';

let scrollTimeout;

class InfiniteScroll extends Component {
  static defaultProps = {
    offset: 25,
    children: null,
  };

  static propTypes = {
    onScroll: PropTypes.func.isRequired,
    offset: PropTypes.number,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      const visibleArea = window.scrollY + window.innerHeight;
      const toReach = document.body.scrollHeight - this.props.offset;

      if (visibleArea >= toReach) {
        this.props.onScroll();
      }
    }, 100);
  }

  render() {
    return this.props.children;
  }
}

export default InfiniteScroll;
