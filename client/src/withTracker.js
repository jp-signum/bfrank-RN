// import ReactGA from 'react-ga';
// import { PropTypes } from 'prop-types';
// import { BrowserRouter } from 'react-router-dom';

// ReactGA.initialize(GA_KEY);

// class GAListener extends React.Component {
//   static contextTypes = {
//     router: PropTypes.object
//   };

//   componentDidMount() {
//     this.sendPageView(this.context.router.history.location);
//     this.context.router.history.listen(this.sendPageView);
//   }

//   sendPageView(location) {
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname);
//   }

//   render() {
//     return this.props.children;
//   }
// }

// // then wrap GAListener one level inside BrowserRouter
// const App = ({ classes }) => (
//   <BrowserRouter>
//     <GAListener>
//       ...
//     </GAListener>
//   </BrowserRouter>
// );

