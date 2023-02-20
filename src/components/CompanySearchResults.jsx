import { useEffect, useState } from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Job from './Job'
import { useParams,Link } from 'react-router-dom'
import { getJobs } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.jobs.availablejobs)
  const params = useParams()
  const dispatch = useDispatch()

  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    dispatch(getJobs(baseEndpoint,params.companyName))
  }, [])

  

  return (
    <Container>
      <Row>
        <Col>
        {jobs.map((e) => (
            e.map((jobData)=>(
              <Job key={jobData._id} data={jobData} />
            ))
          ))}
          <Link to="/"><Button></Button></Link>
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
