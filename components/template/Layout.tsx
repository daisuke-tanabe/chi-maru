import React from 'react';
import Container from '@mui/material/Container';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header/>
      <main>
        <div css={{paddingBottom: '144px'}}>
          <Container maxWidth="md">
            {children}
          </Container>
        </div>
      </main>
      <Footer/>
    </>
  );
}
export default Layout;
