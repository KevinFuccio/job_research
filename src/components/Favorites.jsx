import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeToFavoriteAction } from "../redux/actions";

const Favorites = () => {
  const JobsContent = useSelector((state) => state.Favjobs.favouriteJobs);
  const dispatch = useDispatch();
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3 d-flex flex-column"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col className="mb-5">
            <Link to={'/'} className="text-decoration-none text-black " style={{color: 'black', border: "1px solid #00000033", borderRadius: 4}}>Go back to search</Link>
        </Col>
        <Col xs={6}>
          {JobsContent.map((jobs, index) => {
            return (
              <div  key={index} className="d-flex justify-content-between">
                <div>{jobs.title} </div>
                <div>
                  <Button
                    onClick={() => {
                      dispatch(removeToFavoriteAction(index));
                    }}
                  >
                    X
                  </Button>
                  ;
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
export default Favorites;
