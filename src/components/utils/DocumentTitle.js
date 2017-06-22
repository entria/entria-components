import { Component } from 'react';
import PropTypes from 'prop-types';

class DocumentTitle extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    title: [],
  };

  componentDidMount() {
    this.update(this.props.title);
  }

  componentWillReceiveProps({ title }) {
    this.update(title);
  }

  shouldComponentUpdate() {
    return false;
  }

  update(title) {
    let documentTitle = [];

    if (typeof title !== typeof undefined) {
      if (Array.isArray(title)) {
        documentTitle = documentTitle.concat(title);
      } else {
        documentTitle.push(title);
      }
    }

    document.title = documentTitle.join(' - ');
  }

  render() {
    return null;
  }
}

export default DocumentTitle;
