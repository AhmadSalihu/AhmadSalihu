import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children, title}) => {
  return (
    <Container>
    <title>Ahmad Salihu</title>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
