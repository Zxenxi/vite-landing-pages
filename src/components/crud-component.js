import React, { useState, useEffect } from "react";
import axios from "axios";

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newData, setNewData] = useState({ name: "", age: 0 });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
  }, []);

  const handleDelete = (index) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
      .then(() => setData(data.filter((item) => item.id !== index)));
  };

  const handleCreate = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newData)
      .then(() => {
        setData([...data, newData]);
        setNewData({ name: "", age: 0 });
      });
  };

  const handleUpdate = (index) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${index}`, newData)
      .then(() =>
        setData(data.map((item) => (item.id === index ? newData : item)))
      );
  };

  const columns = [
    { header: "Name", dataIndex: "name" },
    { header: "Age", dataIndex: "age" },
  ];

  return (
    <div>
      <h1>CRUD App</h1>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{item[column.dataIndex]}</td>
              ))}
              <td>
                <button onClick={() => handleUpdate(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={newData.name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={newData.age}
            onChange={(e) =>
              setNewData({ ...newData, age: parseInt(e.target.value, 10) })
            }
          />
        </label>
        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
};

export default CrudComponent;
