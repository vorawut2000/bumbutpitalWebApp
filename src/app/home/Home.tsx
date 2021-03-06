import React from 'react'
import OverviewInfo from '../../components/overviewInfo/OverviewInfo'
import classes from './Home.module.css'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className={classes.home}>
            <h1>Overview</h1>
            <OverviewInfo />
        </div>
    )
}

export default Home
