import REACT from "react";
import REACTDOM from "react-dom";
import "./styles.css";
var a = 10;
var b = "sandeep";
var a = [2, 3, 4];
let fLen = a.length;
function Sample() {
  return (
    <>
      <div Class="header">
        <div class="ls">
          <div class="title">
            <h2>POONJOLA E-Learning</h2>
          </div>
          <div class="cat">
            <h3>Categories</h3>
          </div>
          <div class="search">
            <input type="text" placeholder="🔍search for anything" id="srch" />
          </div>
        </div>
        <div class="rs">
          <div class="login">
            <button class="button-51" role="button" id="login">
              Login
            </button>
          </div>
          <div class="sign">
            <button class="button-52" role="button" id="signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="row">
          <div class="r1h">
            <h2>Expand your career opportunities with Python</h2>
            <p>
              Take one of POONJOLA range of Python courses and learn how to code
              using this incredibly useful language. Its simple syntax and
              readability makes Python perfect for Flask, Django, data science,
              and machine learning. You’ll learn how to build everything from
              games to sites to apps. Choose from a range of courses that will
              appeal to
            </p>
          </div>
          <div class="r1box">
            <div class="img">
              <img src="python.png" alt="python" width="200px" />
            </div>
            <div class="t1">
              Learn Python: The Complete Python Programming Course
            </div>
          </div>
          <div class="r1box">
            <div class="img">
              <img src="python.png" alt="python" width="200px" />
            </div>
            <div class="t1">
              Learning Python for Data Analysis and Visualization
            </div>
          </div>
          <div class="r1box">
            <div class="img">
              <img src="python.png" alt="python" width="200px" />
            </div>
            <div class="t1">
              Python for Beginners - Learn Programming from scratch
            </div>
          </div>
          <div class="r1box">
            <div class="img">
              <img src="python.png" alt="python" width="200px" />
            </div>
            <div class="t1">Learn Python: Python for Beginners</div>
          </div>
          <div class="r1box">
            <div class="img">
              <img src="python.png" alt="python" width="200px" />
            </div>
            <div class="t1">
              Python Beyond the Basics - Object-Oriented Programming
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="r2h">
            <h2>Students are viewing</h2>
            <div class="r1box">
              <div class="img">
                <img src="1.png" alt="python" width="200px" />
              </div>
              <div class="t1">The Complete 2022 Web Development Bootcamp</div>
            </div>
            <div class="r1box">
              <div class="img">
                <img src="2.png" alt="python" width="200px" />
              </div>
              <div class="t1">
                100 Days of Code: The Complete Python Pro Bootcamp for 2022
              </div>
            </div>
            <div class="r1box">
              <div class="img">
                <img src="3.png" alt="python" width="200px" />
              </div>
              <div class="t1">
                The Complete JavaScript Course 2022: From Zero to Expert!
              </div>
            </div>
            <div class="r1box">
              <div class="img">
                <img src="4.png" alt="python" width="200px" />
              </div>
              <div class="t1">
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </div>
            </div>
            <div class="r1box">
              <div class="img">
                <img src="5.png" alt="python" width="200px" />
              </div>
              <div class="t1">
                Ultimate AWS Certified Solutions Architect Associate 2022
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="r3h">
            <h2>Top categories</h2>
          </div>
          <div class="r3box">
            <div class="img">
              <img src="a.png" alt="python" width="300px" />
            </div>
            <div class="t1">Design</div>
          </div>
          <div class="r3box">
            <div class="img">
              <img src="b.png" alt="python" width="300px" />
            </div>
            <div class="t1">Development</div>
          </div>
          <div class="r3box">
            <div class="img">
              <img src="c.png" alt="python" width="300px" />
            </div>
            <div class="t1">Marketing</div>
          </div>
          <div class="r3box">
            <div class="img">
              <img src="d.png" alt="python" width="300px" />
            </div>
            <div class="t1">IT and Software</div>
          </div>
        </div>
      </div>
      <br />
      <div class="footer">
        <span id="fh">POONJOLA E-Learning</span>
        <span id="cont">Contact Us</span>
        <span id="about">About Us</span>
      </div>
    </>
  );
}
REACTDOM.render(
  <div>
    <Sample />
  </div>,

  document.getElementById("root")
);
