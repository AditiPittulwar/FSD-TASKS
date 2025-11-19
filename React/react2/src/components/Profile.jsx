
function Profile() {
  const user = {
    name: "Aditi",
    age: 21,
    phone: 8468953713,
    address: Rukhmini,
    country: "India"
  };

  return (
    <div style={{  border: "1px solid black", padding: "15px", borderRadius: "10px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>phone:</strong> {user.phone}</p>
      <p><strong>address:</strong> {user.address}</p>
      <p><strong>Country:</strong> {user.country}</p>
    </div>
  );
}

export default Profile;
