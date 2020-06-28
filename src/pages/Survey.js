import React from 'react'

import Survey from '../components/Survey'
import Layout from "../components/layout"
import LikertScale from "../components/LikertScale"


const SurveyPage = () => {
    return (
        <Layout>
            <Survey />
            {/* <LikertScale /> */}
        </Layout>
    )
}

export default SurveyPage
