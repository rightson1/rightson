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
      scroll.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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
          x: 130,
          scaleY: 0.01,
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
              x: 100,
              scaleY: 0.1,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
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
              x: -140,
              scaleY: 0.2,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,
              opacity: 1,
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
              x: -150,
              scaleY: 0.1,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,
              opacity: 1,

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
              x: -150,
              opacity: 0,
              cursor: "pointer",
            }}
            whileInView={{
              x: 0,
              opacity: 1,
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
            x: -100,
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
    width: 100%;

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
        width: 90%;
      }
    }
    .send {
      font-family: "Handlee";
      padding: 0.6rem;
      width: 100%;
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
        min-width: 100%;
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
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;

      .image {
        display: none;
      }
    }
    form {
      width: 100%;

      gap: 3rem;
      .name,
      .email {
        input {
          padding: 1rem;
          width: 100%;
        }
      }
      .message {
        textarea {
          padding: 1rem;

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
