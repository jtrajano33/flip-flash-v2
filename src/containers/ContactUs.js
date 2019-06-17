import React from 'react';

const ContactUs = () => {

    return (
        <div class="container" id="pad">
            <div className="row" id="row-below">

                <div className=" col-12 col-md-6 contactText">
                    <p className="font">Please help us to continually improve and develop our services by giving us feedback. </p>
                </div>

                <div className="col-12 col-md-6">
                    <div className="comment">
                        <form>

                            <label for="fname">First Name:</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                            <label for="lname">Last Name:</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                            <label for="email"> Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email Address.." />

                            <label for="country">Country</label>
                            <select id="country" name="country">
                                <option>Philippines</option>
                                <option>Canada</option>
                                <option>USA</option>
                            </select>

                            <label for="subject">Your comment and suggestions</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                            <input type="submit" value="Submit" />

					</form>
				</div>
                    </div>
                </div>
            </div>
            )
        
        }
        
export default ContactUs;