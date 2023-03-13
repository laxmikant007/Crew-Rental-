import styled from "styled-components";
import { Button } from "./styles/Button"
import { NavLink } from "react-router-dom";



const Contact = () => {
  const Wrapper = styled.section`

#contact-form {


background-color: #4CAF50; /* Green */
color: white;
padding: 14px 25px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 20px;

background-color: red;
border-radius: 30px;
}
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
      

    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27257.61673746354!2d75.458734!3d31.353402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b3c542e9bfa7c03!2sIK%20Gujral%20Punjab%20Technical%20University!5e0!3m2!1sen!2sin!4v1677095779925!5m2!1sen!2sin" 
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formsubmit.co/el/papobu"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

                <Button className="btn hireme-btn">
                <a href="https://formsubmit.co/el/papobu" target="_blank">Checkout Here! </a> 
              </Button>

          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
