import { Route, Routes } from "react-router-dom";
import HalamanUtama from "./layout/HalamanUtama";


export default function(){
  return (
    <>

      <Routes>
        <Route path="/" element={<HalamanUtama />} />
      </Routes>

    </>
  );
}