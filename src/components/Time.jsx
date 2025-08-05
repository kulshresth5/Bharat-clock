function Time() {
  let Time = new Date();
  return (
    <div className="t">
      This is the current Time:{Time.toLocaleDateString()}-{" "}
      {Time.toLocaleTimeString()}
    </div>
  );
}
export default Time;
