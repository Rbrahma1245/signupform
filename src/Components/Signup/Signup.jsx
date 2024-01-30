import { Component } from "react";
import "./Signup.css";

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        userName: "",
        email: "",
        phoneNo: null,
        gender: "",
        password: "",
        check: false,
      },
      formList: [],
    };
  }
  handleSubmit(event) {
    event.preventDefault();

    let { userName, email, password, check, phoneNo, gender } = this.state.form;

    if (
      userName == "" ||
      email == "" ||
      password == "" ||
      check == "" ||
      phoneNo == "" ||
      gender == ""
    ) {
      alert("Please fill the details");
    } else {
      //   this.setState({ formList: [...this.state.formList, this.state.form] });
      //   this.setState({
      //     form: { userName: "", email: "", password: "", check: false },
      //   });

      this.setState((prev) => ({
        formList: [...prev.formList, prev.form],
        form: {
          userName: "",
          email: "",
          phoneNo: "",
          password: "",
          check: false,
          gender: "",
        },
      }));
    }
  }

  handleChange(event) {
    let { name, value, type, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }
  render() {
    console.log(this.state.formList);
    return (
      <>
        <form className="container" onSubmit={this.handleSubmit.bind(this)}>
          <h3 style={{ textAlign: "center" }}>SIGN UP FORM</h3>
          <div>
            <label>User Name</label>
            <br />
            <input
              type="text"
              name="userName"
              value={this.state.form.userName}
              onChange={this.handleChange.bind(this)}
              placeholder="Enter your User Name"
            />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={this.state.form.email}
              onChange={this.handleChange.bind(this)}
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <label>Phone No.</label>
            <br />
            <input
              type="number"
              name="phoneNo"
              value={this.state.form.phoneNo}
              onChange={this.handleChange.bind(this)}
              placeholder="Enter your Phone No."
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Gender : </label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.form.gender === "Male"}
              onChange={this.handleChange.bind(this)}
            />
            <label style={{ marginLeft: "3px" }}>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.form.gender === "Female"}
              onChange={this.handleChange.bind(this)}
            />
            <label style={{ marginLeft: "3px" }}>Female</label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={this.state.form.gender === "Other"}
              onChange={this.handleChange.bind(this)}
            />
            <label style={{ marginLeft: "3px" }}>Other</label>
          </div>

          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.form.password}
              onChange={this.handleChange.bind(this)}
              placeholder="Enter your Password"
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <input
              type="checkbox"
              name="check"
              checked={this.state.form.check}
              onChange={this.handleChange.bind(this)}
            />
            <label style={{ marginLeft: "8px" }}>
              I agree that the form above is valid.
            </label>
          </div>

          <button style={{ margin: "1rem" }}>SUBMIT</button>
        </form>
      </>
    );
  }
}

export default Signup;
