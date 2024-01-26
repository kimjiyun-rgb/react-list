import { useEffect, useState } from "react";
import Threats from "./Threats";

function App()
{
  const [threatsList, setThreatsList] = useState([]);
  useEffect(() =>
  {
    async function get()
    {
      const data = await fetch('https://api.terrorless.01ab.net/trpc/threat.list?batch=1&input=%7B%220%22%3A%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D%7D');
      const res = await data.json();
      const obj = res[0]; // 하드코딩.. 위험..
      const result = obj.result;
      const data2 = result.data;
      const json = data2.json;
      const threats = json.threats;
      threats.map((v) =>
      {
        const locationName = v.locationName;
        const description = v.description;
        const id = v.id;
        threatsList.push({ id, locationName, description });
      });
      console.log(threats);
      const new_threatsList = [...threatsList];
      setThreatsList(new_threatsList);
    }
    get();
  }, []);

  return (
    <div>
      {
        threatsList.map((v) =>
        {
          return (
            <Threats key={v.id} data={v} />
          )
        })
      }
    </div>
  );
}
export default App;

