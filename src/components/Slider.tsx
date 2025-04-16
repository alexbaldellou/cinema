import { useEffect, useState } from "react";
import { Contador } from "./contador/Contador";
import imgParalax from "../assets/paralax_fondo.jpg";
import imgParalaxPareja from "../assets/paralax_pareja.png";
import eucaliptoParalax from "../assets/fondoeucalipto.png";
import casamosParalax from "../assets/noscasamos.png";
export const Slider = () => {
  const targetDate = "2025-08-23T00:00:00";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Captura el desplazamiento del scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Estilo para la imagen de fondo, se mueve más lentamente
  const parallaxBgStyle = {
    transform: `translateY(${scrollY * 0.6}px)`, // Fondo se mueve más lentamente
  };
  const parallaxBgStylePareja = {
    transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0003})`, // Fondo se mueve más lentamente
  };
  const parallaxBgStyle3 = {
    transform: `translateY(${scrollY * 0.25}px)`, // Fondo se mueve más lentamente
  };
  // Estilo para la imagen de fondo en el segundo bloque (puedes usar otro factor)
  const parallaxBgStyle2 = {
    transform: `translateY(${Math.min(Math.max(scrollY * 0.15, -50), 150)}px)`,
  };

  // Estilo para el texto, se mueve a una velocidad diferente
  const parallaxTextStyle = {
    transform: `translateY(${scrollY * 0.4}px)`, // Texto se mueve más rápido
  };

  // Estilo para un elemento adicional, se mueve más rápido que el fondo
  const parallaxElementStyle = {
    transform: `translateY(${scrollY * 0.6}px)`, // Este elemento se mueve aún más rápido
  };

  return (
    <div>
      {/* Primera sección con fondo parallax */}
      <div className="flex justify-left items-center relative h-screen">
        <div className="absolute inset-0" style={parallaxBgStyle}>
          <img
            src={imgParalax}
            alt="Fondo Parallax"
            className="object-cover"
            style={{ marginTop: "-35%" }}
          />
        </div>

        <div
          className="relative w-6/12 z-10 text-white p-20"
          style={parallaxElementStyle}
        >
          <Contador targetDate={targetDate} />
        </div>

        <div className="absolute inset-0" style={parallaxBgStylePareja}>
          <img
            src={imgParalaxPareja}
            alt="Fondo Parallax"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="relative z-50 h-50 bg-white items-center justify-center flex text-2xl"
        style={parallaxBgStyle3}
      >
        <img
          src={casamosParalax}
          alt="Fondo Parallax"
          className="relative w-md object-cover z-50"
        />
      </div>

      {/* Segunda sección con elementos adicionales */}
      <div className="relative h-screen">
        {/* Este es un elemento adicional que se mueve más rápido que el fondo */}
        <div className="absolute inset-0" style={parallaxBgStyle2}>
          <img
            src={eucaliptoParalax}
            alt="Fondo Parallax"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="relative z-10 text-center text-black p-20"
          style={parallaxTextStyle}
        >
          <h2 className="text-3xl">Elemento en Movimiento</h2>
          <p className="text-xl">
            Este elemento se mueve más rápido que la imagen de fondo.
          </p>
        </div>
      </div>

      {/* Tercera sección con más contenido */}
      <div className="relative h-screen bg-gray-200">
        <h2 className="text-4xl text-center p-20">
          Más contenido en la página
        </h2>
      </div>
    </div>
  );
};
