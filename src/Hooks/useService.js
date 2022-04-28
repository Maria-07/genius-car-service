import { useEffect, useState } from "react";

const useService = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://rocky-sierra-22125.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service, setService];
};

export default useService;
