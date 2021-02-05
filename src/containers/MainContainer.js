import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from '../components/main/Header';
import CommonHeader from '../components/common/CommonHeader';
import Main from '../components/main/Main';
import Footer from '../components/main/Footer';
import Modal from '../components/common/Modal';
import UserMenu from '../components/main/UserMenu';

const MainContainer = () => {
  const [visible, setVisible] = useState(false);
  const modalElement = useRef(null);
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = modalElement => {
    if (modalElement.target.id !== '1') return;
    setVisible(false);
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function logit() {
      setScrollY(window.pageYOffset);
      // scrollY === 30 ?
    }
    (function watchScroll() {
      window.addEventListener('scroll', logit);
    })();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, [scrollY]);

  return (
    <div className="flex-column flex-nowrap relative">
      {visible && (
        <Modal>
          <UserMenu hideModal={hideModal} />
        </Modal>
      )}
      <Header
        showModal={showModal}
        modalElement={modalElement}
        visible={visible}
      />
      <CommonHeader
        showModal={showModal}
        modalElement={modalElement}
        visible={visible}
      />
      <Main />
      <Footer />
    </div>
  );
};

export default MainContainer;
