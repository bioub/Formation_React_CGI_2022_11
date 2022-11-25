import CounterContainer from "./CounterContainer";

function Home() {
  console.log('Home');

  return (
    <div className="Home">
      Demo Counter :
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
    </div>
  );
}

export default Home;
