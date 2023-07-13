import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";

function App() {
  return (
    <>
      <div>
        {/* Hiring Heading */}
        <div>
          <h1 className="job-portal-heading text-center mt-3">
            Major Kalshi Classes Job Portal
          </h1>
        </div>
        {/* introduction image */}
        <div className="image-container">
          <Image src="./hiring.webp" className="intro-hire-image" fluid />
          <div className="intro-over-image-text mt-2">
            <div className="over-image-text-container ">
              <span id="over-image-text-1">
                {"Let's Build the future of education together"}
              </span>
              <span id="over-image-text-2">
                {
                  "Come,join us and together we can trasnform the way the india learns."
                }
              </span>
            </div>
          </div>
        </div>
        {/* filter form */}
        <div>
          <Card className="form-card-container">
            <Form className="filter-form">
              <Row
                md={8}
                style={{
                  display:"flex",justifyContent:"space-around"
                }}
              >
    
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
