import React, { useState } from "react";
import "./home.css"; // Asegúrate de importar tu archivo CSS para los estilos

const Home = () => {
	const [color, setColor] = useState("red");
  
	return (
	  <div className="traffic-light-container">
		<div className="traffic-light-box">
		  <div
			className={`light red ${color === "red" ? "active" : ""}`}
			onClick={() => setColor("red")}
		  ></div>
		  <div
			className={`light yellow ${color === "yellow" ? "active" : ""}`}
			onClick={() => setColor("yellow")}
		  ></div>
		  <div
			className={`light green ${color === "green" ? "active" : ""}`}
			onClick={() => setColor("green")}
		  ></div>
		</div>
	  </div>
	);
  };
  
  export default Home;
//   En este código, los tres focos (div.light) están contenidos dentro de un contenedor rectangular negro (div.traffic-light-box). Puedes ajustar las dimensiones y los estilos según tus necesidades específicas.
  
  
  
  
  
  