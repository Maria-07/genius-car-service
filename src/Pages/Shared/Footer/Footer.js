import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer className="container text-center my-20">
      <>&copy; Rogerio Orioli - {date}</>
    </footer>
  );
};

export default Footer;
