import { useState } from "react";
import "./Reserve.css";

export const Reserve = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    datetime: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit} className="reserve-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Introduce tu nombre"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Introduce tu apellido"
        value={data.username}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="datetime"
        id="datetime"
        placeholder="Introduce fecha y hora"
        value={data.datetime}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Introduce tu email"
        value={data.email}
        onChange={handleChange}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Reserve;
