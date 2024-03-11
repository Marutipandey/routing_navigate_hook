import React from 'react';
import { useSearchParams,useNavigate } from 'react-router-dom';

const Filter = () => {
  const navigateee = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get('age');
  const city = searchParams.get('city');

const navToPage=()=>{
    let x=true;
    if (x){
        navigateee('/about')
    }
    else{
        navigateee('/Filter')
    }
}
  return (
    <div>

<h2>age is:{age}</h2>

      <input
        type="text"
        onChange={(e) => setSearchParams({  address: e.target.value ,age,city})}
        placeholder="Set Text in query params"
      />

      <button onClick={() => setSearchParams({ age: 40 ,city:'noida'})}>Set age in query params</button>
      <br /><br />
      <button onClick={()=>navigateee('/about')}  >go to about page</button>

      <button onClick={()=>navigateee('/about')}  >go to about page</button>

      <button onClick={()=>navToPage()}  >go to about or filter page accordind condition</button>

    </div>
  );
};

export default Filter;
