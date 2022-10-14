import React, { useState } from "react";
import { useDispatch } from "react-redux"
import swal from "sweetalert";
import { AiOutlineArrowRight } from "react-icons/ai";
import { newsLetterSubscription } from '../redux/actions'

const NewsLetterSection = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "" })
  const [error, setError] = useState(null)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


  function handleOnChange(e){
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setInput({[e.target.name]:e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(newsLetterSubscription(input))
    swal("Usted se ha registrado correctamente", "Muchas gracias!", "success");
  }
  console.log(input)
  return (
    <div className="newsLetterContainer">
      <div className="newsLetterText">
        <p>NEWSLETTER</p>
        <h4>Subscribite</h4>
        <h6>Y enterate de todas las novedades</h6>
      </div>
      {/* Formulario */}
      <div className="formNLS">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            value={input.email}
            className="inputForm"
            onChange={handleOnChange}
          />

          <button type="submit" disabled={error ? true : false}>
            <AiOutlineArrowRight />
          </button>
        </form>

        <div> {error && <p style={{color: 'red'}}>{error}</p>}</div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
