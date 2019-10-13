import React from 'react';

import './Layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar />

        <Footer />
      </div>
    );
  }
}
export default Layout;
