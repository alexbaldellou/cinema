import React, { useEffect, useState } from "react";

interface ContadorProps {
  targetDate: string;
}
export const Contador = (props: ContadorProps) => {
  const { targetDate } = props;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Función que actualiza el tiempo restante
    const intervalId = setInterval(() => {
      const now: Date = new Date();
      const target: Date = new Date(targetDate);

      const difference: number = target.getTime() - now.getTime();

      if (difference <= 0) {
        // Cuando la fecha ha pasado
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Calculando el tiempo restante
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000); // Actualiza cada segundo

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [targetDate]); // Dependencia en la fecha objetivo

  return (
    <div className="flex flex-col justify-center ">
      {/* <div className="text-3xl font-bold mb-4">
         Contador regresivo hacia: {new Date(targetDate).toLocaleString()}
       </div> */}
      <div className="the-nautigal-bold tituloJesusCris text-center">
        Jesús y Cris
      </div>
      <div className="flex justify-between items-center  w-6/12 text-center font-bold">
        <div className="flex flex-col justify-center">
          <span className="text-3xl">{timeLeft.days}</span>
          <span className="text-md">días</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-3xl">:</span>
          <span className="text-3xl">&nbsp;</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-3xl">{timeLeft.hours}</span>
          <span className="text-md">horas</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-3xl">:</span>
          <span className="text-3xl">&nbsp;</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-3xl">{timeLeft.minutes}</span>
          <span className="text-md">minutos</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-3xl">:</span>
          <span className="text-3xl">&nbsp;</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-3xl">{timeLeft.seconds}</span>
          <span className="text-md">segundos</span>
        </div>
      </div>
    </div>
  );
};
