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
        <div className="image-container">
          <Image src="./hiring.webp" className="intro-hire-image" fluid />
          <div className="intro-over-image-text mt-2">
            <div className="over-image-text-container">
              <span id="over-image-text-1">
                {"Let's Build the future of education together"}
              </span>
              <span id="over-image-text-2">
                {
                  "Come, join us and together we can transform the way India learns."
                }
              </span>
            </div>
          </div>
          {/* filter form */}
          <div className="filter-form-overlay">
            <Card className="form-card-container">
              <Form className="filter-form">
                <Row
                  md={8}
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Col sm={3} className="my-1">
                    <Form.Label
                      htmlFor="inlineFormInputJobTitle"
                      className="font-livvic"
                    >
                      Keywords / Job Title
                    </Form.Label>
                    <div className="search-bar">
                      <input
                        id="inlineFormInputName"
                        placeholder="Graphic Designer"
                        className="search-input"
                      />
                      <RiSearchLine className="search-icon" />
                    </div>
                  </Col>
                  <Col sm={3} className="my-1">
                    <Form.Label
                      htmlFor="inlineFormInputSelectCategory"
                      className="font-livvic"
                    >
                      Select City
                    </Form.Label>
                    <Form.Select
                      aria-label="Select Category"
                      className="select-category"
                    >
                      <option disabled selected hidden>
                        Select City
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                  <Col sm={3} className="my-1">
                    <Form.Label
                      htmlFor="inlineFormInputSelectCategory"
                      className="font-livvic"
                    >
                      Select Category
                    </Form.Label>
                    <Form.Select
                      aria-label="Select Category"
                      className="select-category"
                    >
                      <option disabled selected hidden>
                        Select Category
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                  <Col xs="auto" className="my-1 filter-form-btn">
                    <Button type="submit">Find Jobs</Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
