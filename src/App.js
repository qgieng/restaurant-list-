import React,{useState} from 'react';
import ReactDom from 'react-dom';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [searchField, setSearchField] = useState('');
  return (
    <div>
      <Title title="Yelp Restaurant List"/>
      <Form state ={searchField} setState = {setSearchField}/>
      <Result state={searchField} setState={setSearchField}/>
    </div>
  );
}

export default App;
