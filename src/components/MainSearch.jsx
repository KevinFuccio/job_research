import { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { jobSearch } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const jobs = useSelector((state) => state.jobs.availablejobs)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(jobSearch(baseEndpoint,query,'&limit=20'))
  }
 


  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search <Button onClick={()=> navigate('/favorites')}>Preferiti</Button></h1>
          
        <Col>
        </Col>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
           
              <Job key={jobData._id} data={jobData} />
            )
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
