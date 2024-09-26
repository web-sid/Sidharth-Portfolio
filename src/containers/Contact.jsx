import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import Alert from "../containers/Alert";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      // throw an alert

      setAlert({
        isAlert: true,
        message: "Required Fields cannot be empty",
        status: "warning",
      });

      setTimeout(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      }, 3000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          // throw an alert
          setData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          setAlert({
            isAlert: true,
            message: "Thanks for contacting me",
            status: "success",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        })
        .catch((err) => {
          // throw an alert
          setAlert({
            isAlert: true,
            message: `Error :${err.message}`,
            status: "danger",
          });

          setTimeout(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        });
    }
  };
  return (
    <section
      id="contact"
      className="flex items-center  justify-center flex-col gap-12 my-12"
    >
      {/* // toast alert */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>
      {/* title */}

      <div className="w-full flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{
            delay: 0.4,
          }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
            Contact
          </p>

          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      {/* main content */}
      <div className=" w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-md border text-teal-50 border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-purple-600"
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border text-teal-50 border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-purple-600"
            />
          </div>

          {/* email */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md border text-teal-50 border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-purple-600"
          />
          <textarea
            name="message"
            id=""
            cols="0"
            rows="10"
            value={data.message}
            onChange={handleChange}
            placeholder="Message here"
            className="w-full px-4 py-3 rounded-md border text-teal-50 border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-purple-600"
          ></textarea>

          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              onClick={sendMessage}
              className="px-12 py-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border-purple-500 hover:text-purple-500 duration-200 "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
