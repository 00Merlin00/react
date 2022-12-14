function Student(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2> E-Mail : {props.email}</h2>
      <h2> State : {props.other.state}</h2>
      <h2> Pincode : {props.other.pincode}</h2>
    </div>
  );
}

export default Student;
