import React,{useState} from 'react';
import ReactDom from 'react-dom';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [searchField, setSearchField] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  var search = {searchField, setSearchField}
  var location = {searchLocation, setSearchLocation}
  return (
    <div>
      <Title title="Yelp Restaurant List"/>
      <Form search={search} location ={location}/>
      <Result search={search} location={location}/>
    </div>
  );
}

export default App;
