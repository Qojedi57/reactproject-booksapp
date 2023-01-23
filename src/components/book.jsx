export default function Book(props) {
  return (
    <>
      <div>
        <h4>{props.title}</h4>
      </div>
      <div>
        <img
          src={props.image}
          alt="#"
        onClick={() => props.goto()}
        />
      </div>
    </>
  );
}
