import React from 'react'
import Layout from 'common/Layout'
import JoinMeetForm from './joinMeetForm'

const Home = (props) => {
  return (
    <Layout>
      <JoinMeetForm {...props}/> 
    </Layout>
  )
}

Home.propTypes = {
}

export default Home
