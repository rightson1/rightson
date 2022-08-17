import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import avatar from "../img/avatar.png";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const Contact = ({ section, setSection }) => {
  const scroll = useRef();
  useEffect(() => {
    if (section === "contact") {
      scroll.current?.scrollIntoView({ behavior: "smooth" });
      setSection("");
    }
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const drag = { top: 5, left: 5, bottom: 5, right: 5 };
  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0ady6pa",
        "template_ver6v3e",
        e.target,
        "5kOjUoERLzqz_vj0O"
      )
      .then((res) => {
        toast.success("email sent sucessfully", toastOptions);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        toast.error("There was an error", toastOptions);
      });
    e.target.reset();
  };

  return (
    <Container ref={scroll}>
      <motion.div
        className="head"
        style={{
          y: 100,
          scaleX: 0,
        }}
        whileInView={{
          y: 0,
          scaleX: 1,

          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
      >
        <motion.div className="line"> </motion.div>
        <h1>
          {" "}
          <span className="number">3.</span>
          Lets'<span>talk</span>
        </h1>
      </motion.div>
      <motion.div
        className="header"
        style={{
          x: 200,
          scaleY: 0,
        }}
        whileInView={{
          x: 0,
          scaleY: 1,

          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
      >
        If i what to reach me for some reason fill the form below and i will
        make sure i get back to you as soon a possible
      </motion.div>
      <motion.div className="bottom">
        <form onSubmit={handleSubmit}>
          <motion.div
            className="name inputs"
            style={{
              x: 200,
              scaleY: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,

              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              name="name"
            />
          </motion.div>
          <motion.div
            className="email inputs"
            style={{
              x: -200,
              scaleY: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,

              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            <label htmlFor=""> Your Email</label>
            <input type="email" placeholder="email" required name="email" />
          </motion.div>
          <motion.div
            className="message inputs"
            style={{
              x: -200,
              scaleY: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,

              transition: {
                duration: 0.5,
                delay: 0,
              },
            }}
          >
            <label htmlFor="">Your Message</label>
            <textarea
              type="text"
              placeholder="message"
              required
              name="message"
            />
          </motion.div>
          <motion.button
            className="send"
            style={{
              y: 50,
              scaleX: 0,
              cursor: "pointer",
            }}
            whileInView={{
              y: 0,
              scaleX: 1,

              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
            drag
            dragConstraints={drag}
            type="submit"
          >
            Send
          </motion.button>
        </form>
        <motion.div
          className="image"
          drag
          dragConstraints={drag}
          style={{
            x: -200,
            scaleY: 0,
          }}
          whileInView={{
            x: 0,
            scaleY: 1,

            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
          whileTap={{
            scale: 1.2,
          }}
        >
          <img src={avatar} alt="" />
        </motion.div>
      </motion.div>
      <ToastContainer />
    </Container>
  );
};
const Container = styled(motion.div)`
  margin: 5rem 4rem;
  margin: 6rem;
  padding: 1rem;
  opacity: 0.9;
  .Toastify__toast-body {
    color: black;
    div:nth-child(2) {
      color: black;
    }
  }
  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .image {
      justify-self: center;
      img {
        pointer-events: none;
      }
    }
  }
  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    .line {
      width: 5rem;
      height: 1px;
      background-color: white;
    }
    h1 {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: "Handlee";
      span {
        color: fuchsia;
        margin-right: 0.3rem;
      }
    }
  }
  .header {
    opacity: 0.8;
    font-family: "Handlee";
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    opacity: 0.9;

    gap: 2rem;

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    input {
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 1.5rem;
      &:focus {
        outline: none;
      }
    }
    .name,
    .email {
      input {
        padding: 0.7rem;
        min-width: 300px;
      }
    }
    .send {
      font-family: "Handlee";
      padding: 0.6rem;
      min-width: 350px;
      border: none;
      outline: none;

      color: fuchsia;
      font-family: "Handlee";
      border-radius: 2px;
      font-size: 1.5rem;
      &:focus {
        outline: none;
      }
    }
    .message {
      textarea {
        padding: 1rem;
        min-width: 350px;
        min-height: 200px;
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, 0.4);
        color: fuchsia;
        font-family: "Handlee";
        border-radius: 1.5rem;
        &:focus {
          outline: none;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .bottom {
      grid-template-columns: 1;
      .image {
        display: none;
      }
    }
    form {
      width: 70%;
      margin-left: 3rem;
      gap: 3rem;
      .name,
      .email {
        input {
          padding: 0.7rem;
          min-width: 350px;
        }
      }
      .message {
        input {
          padding: 1rem;
          min-width: 350px;
          min-height: 200px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin: 3rem 1rem;

    .head {
      h1 {
        font-size: 1.3rem;
      }
    }
    .bottom {
      margin: 0;

      gap: 0;
    }
    form {
      margin: 0;
    }
  }
`;
export default Contact;
