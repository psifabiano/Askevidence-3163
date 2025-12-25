import { Route, Switch } from "wouter";
import Index from "./pages/index";
import { Provider } from "./components/provider";

function App() {
	return (
		<Provider>
			<Switch>
				<Route path="/" component={Index} />
			</Switch>
		</Provider>
	);
}

export default App;
