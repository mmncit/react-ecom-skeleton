import { useState, useEffect } from "react";

export default function EffectBlog() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // use effect happens after rendering
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // subscribes to array

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
