import React from "react";
import ProductList from "./Products/ProducList";
const Main = ({
	cartDataProops
}) => {
    return (
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					Filter
				</div>
				<div className="col-lg-9">
						<ProductList
							cartDataProopsTwo={cartDataProops} />
				</div>
			</div>
		</div>
	</main>
    )
}

export default Main