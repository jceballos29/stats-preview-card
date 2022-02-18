import "./App.css";

const stats = [
    { id:0,title: "10k+", description: "companies" },
    { id:1,title: "314+", description: "templates" },
    { id:2,title: "12M+", description: "queries" },
];

function App() {
    return (
        <div className="App">
            <div className="card">
                <div className="card__header">
                    <div className="card__header__filter"></div>
                </div>
                <div className="card__body">
                    <div className="card__body__information">
                        <h1>
                            Get <span>insights</span> that help your business
                            grow.
                        </h1>
                        <p>
                            Discover the benefits of data analytics and make
                            better decisions regarding revenue, customer
                            experience, and overall efficiency.
                        </p>
                    </div>
                    <div className="card__body__stats">
                        {stats.map(({ id, title, description }) => (
                            <div key={id} className="card__stat">
                                <h2>{title}</h2>
                                <h4>{description}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
