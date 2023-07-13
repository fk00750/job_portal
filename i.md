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
  border: 2px solid black;
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
  background-color: #1F2937;
  border: none;
  padding: 0.6rem;
}