import React from "react";
import "../../styles/styles.css";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="content">
      <div className="contactForm">
        <form
          id="fs-frm"
          name="registration-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/mjvqjzld"
          method="post"
        >
          <h1>Lets Work Together</h1>
          <h3 className="contact-description">
            To find the best solution for you. <br></br>
            <br></br>
            Fill out and submit the form below or contact us at: <br></br>☎
            (516)-663-0968 <br></br>✉ longwavetechinfo@gmail.com
          </h3>
          <div class="form_row_with_grid">
            <div class="form-field">
              <div class="input-data">
                <input type="text" name="name" id="firstname-input" required />
                <div class="underline" id="firstname-underline"></div>
                <label id="firstname-label" for="first-name">
                  First Name
                </label>
              </div>
            </div>
            <div class="form-field">
              <div class="input-data">
                <input type="text" name="name" id="lastname-input" required />
                <div class="underline" id="lastname-underline"></div>
                <label id="lastname-label" for="last-name">
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <div class="form-field">
            <div class="input-data">
              <input type="email" name="_replyto" id="email-address" required />
              <div class="underline"></div>
              <label for="">Email</label>
            </div>
          </div>
          <div class="form_row_with_grid">
            <div class="form-field">
              <div class="input-data">
                <input type="text" name="street" id="address-input" required />
                <div class="underline" id="address-underline"></div>
                <label id="address-label" for="">
                  Address
                </label>
              </div>
            </div>
            <div class="form-field">
              <div class="input-data">
                <input type="text" name="city" id="city-input" required />
                <div class="underline" id="city-underline"></div>
                <label id="city-label" for="">
                  City
                </label>
              </div>
            </div>
          </div>
          <div class="form_row_with_grid">
            <div class="form-field" id="state-select-div">
              <select
                class="input-date"
                id="state-selection"
                name="state"
                required=""
              >
                <option value="" selected="" disabled="">
                  State
                </option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <div class="underline" id="state-underline"></div>
            </div>
            <div class="form-field">
              <div class="input-data">
                <input
                  type="text"
                  name="postal-code"
                  id="zipcode-input"
                  required
                />
                <div class="underline" id="zipcode-underline"></div>
                <label id="zipcode-label" for="">
                  Zipcode
                </label>
              </div>
            </div>
          </div>
          <div class="form-field">
            <div class="input-data">
              <input type="text" name="note" id="note" required />
              <div class="underline"></div>
              <label for="">Message</label>
            </div>
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Longwave Contact Form Submission"
          />
          <input class="submitbtn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default ContactPage;
