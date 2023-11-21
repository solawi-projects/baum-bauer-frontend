import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TreesList = () => {
  const [trees, setTrees] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllTrees = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tree/get");

      console.log("Data:", response.data);

      if (response.status === 200) {
        setTrees(response.data);
      } else {
        setError("Data was not brought");
      }
    } catch (err) {
      console.error("Error fetching trees:", err.message);
      setError("Error fetching trees");
    }
  };

  useEffect(() => {
    fetchAllTrees();
  }, []);

  console.log("Trees:", trees);

  return (
    <div>
      <h2>All Trees</h2>

      {trees && trees.length > 0 ? (
        <ul>
          {trees.map((tree) => (
            <li key={tree._id}>
              <Link to={`/tree/${tree._id}`}>{tree.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No trees available</p>
      )}
    </div>
  );
};

export default TreesList;
