Check Both Js and CSS code, why the form-container not appearing over the image container.

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


@import "bootstrap/dist/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Livvic:wght@100&display=swap");

.font-livvic {
  font-family: "Livvic", sans-serif;
  font-weight: bold;
}

.job-portal-heading {
  font-family: "Courier New", Courier, monospace;
}

.intro-hire-image {
  width: 100%;
  height: 30.2rem;
}

.image-container {
  position: relative;
  overflow-x: hidden;
}

.intro-over-image-text {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.over-image-text-container {
  display: flex;
  flex-direction: column;
}

.over-image-text-container #over-image-text-1 {
  font-size: 1.8rem;
  font-family: "Courier New", Courier, monospace;
  color: #003d33;
  word-spacing: -0.4rem;
  width: max-content;
  line-height: 0.8;
}

.over-image-text-container #over-image-text-2 {
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
}

.form-card-container {
  background-color: #e0edec;
  border: none;
  margin: 2.8rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 1.8rem;
  padding-bottom: 2.4rem;
  position: relative;
}

.filter-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search-bar {
  position: relative;
}

.search-input {
  padding: 1.3rem;
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #555;
  cursor: pointer;
}

.select-category {
  appearance: none;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
}

.select-category option[disabled]:first-child {
  display: none;
}

.filter-form-btn {
  display: inline-flex;
  align-items: end;
}

.filter-form-btn Button {
  background-color: #1f2937;
  border: none;
  padding: 0.6rem;
}

.filter-form-overlay {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}
