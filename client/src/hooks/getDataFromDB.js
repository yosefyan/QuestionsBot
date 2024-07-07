import axios from "axios";
import { useEffect, useState } from "react";

const getDataFromServer = ({endpoint}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataServer = async () => {
      const res = await axios.get(`http://localhost:5174/${endpoint}`);
      setData(res.data);
    };
    getDataServer();
  }, []);

  return data;
};

export default getDataFromServer;
