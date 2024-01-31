import Form from "./components/Form";
import Layout from "./components/Layout";
import List from "./components/List";
import TopCard from "./components/TopCard";

function App() {
    return (
        <>
            <Layout>
                <div className="main">
                    <div className="container">
                        <TopCard />
                        <Form />
                        <List />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default App;
