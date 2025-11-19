
function Card(props) {
  return (
    <div style={{
      width: "250px",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#f1f1f1",
      margin: "10px"
    }}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
