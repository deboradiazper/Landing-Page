import React from "react";
import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Header
					title="A warm welcome!"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					button="Call to action!"
				/>
				<div className="container mt-3">
					<div className="row">
						<div className="col-md-4 col-lg-3 my-5">
							<Card
								title="Noticia muy importante"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
								imageUrl="https://www.nintenderos.com/wp-content/uploads/2021/07/Nintendo-Insider-Tease-entusiasma-a-los-fanaticos-de-The-Legend.jpeg"
							/>
						</div>
						<div className="col-md-4 col-lg-3 my-5">
							<Card
								title="Noticia muy importante"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
								imageUrl="https://sm.ign.com/t/ign_es/news/p/platformin/platforming-modern-classic-celeste-gets-a-surprise-semi-sequ_38vu.h720.jpg"
							/>
						</div>
						<div className="col-md-4 col-lg-3 my-5">
							<Card
								title="Noticia muy importante"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
								imageUrl="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2018/07/hollow-knight.jpg?itok=4mo6Z7BV"
							/>
						</div>
						<div className="col-md-4 col-lg-3 my-5">
							<Card
								title="Noticia muy importante"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
								imageUrl="https://areajugones.sport.es/wp-content/uploads/2019/09/blasphemous-artwork-780x440.png"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
