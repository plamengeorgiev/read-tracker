// Based on https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker

import React, { Component } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize("UA-26873966-2");

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const { page } = this.props;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const { currentPage } = this.props;
      const { nextPage } = nextProps;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  HOC.propTypes = Component.propTypes;
  return HOC;
};

export default withTracker;
