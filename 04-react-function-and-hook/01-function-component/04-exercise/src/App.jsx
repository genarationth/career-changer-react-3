import React from 'react';

function App() {
    return (
      <div id="app">
        <Text />
        <Form />
        <Table />
      </div>
    );
}
  
function Text() {
    return (
        <div>
        <h1>Table Example</h1>
        </div>
    );
}

function Form() {
    return (
        <form> 
            <input type="text"  placeholder='type new name here' />
            <input type="text"  placeholder='type new organization here'/>
            <input type="text"  placeholder='type new position here' />
            <button type="button">save</button>
        </form>
    );
}

function Table() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Organization</th>
        <th>Position</th>
      </tr>
      <tr>
        <td>John</td>
        <td>ABC inc.</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>XYZ Corp.</td>
        <td>Designer</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>123 LLC</td>
        <td>Manager</td>
      </tr>
    </table>
  );
}


export default App;