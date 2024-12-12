function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-biege-200">
      <div className="flex flex-row">
        <div>
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </div>
      <div className="">
        <h1>Spending - Last 7 days</h1>
        <div className="flex flex-row">
          <div>
            <div></div>
            <p>mon</p>
          </div>
          <div>
            <div></div>
            <p>tue</p>
          </div>
          <div>
            <div></div>
            <p>wed</p>
          </div>
          <div>
            <div></div>
            <p>thu</p>
          </div>
          <div>
            <div></div>
            <p>fri</p>
          </div>
          <div>
            <div></div>
            <p>sat</p>
          </div>
          <div>
            <div></div>
            <p>sun</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <p>Total this month</p>
          <p>@478.33</p>
        </div>
        <div>
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default App;
