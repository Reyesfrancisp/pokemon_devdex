function MoveInfo(props) {
    return (
      <section>
        <p>This is the move: {props.move}</p>
        <p>This is the type: {props.type}</p>
        <p>This is the description: {props.description}</p>
        <button>Button to add a move</button>
      </section>
    );
  }
  
  export default MoveInfo;  