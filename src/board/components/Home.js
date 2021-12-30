import React from 'react'
import CardList from './CardList'
import Container from '@mui/material/Container';
import { listMovieNames } from '../../constants'
import Header from "../../layout/comnponents/Header"

export default function Home() {
  const styles = {
    cardList: {
      marginTop: '50px',
      marginBottom: '50px'
    }
  };

  return (
    <>
      <Header />
      <Container style={styles.cardList}>
        {
          listMovieNames.map((type, index) => {
            return <CardList nameList={type} key={index} />
          })
        }
      </Container>
    </>
  )
}
