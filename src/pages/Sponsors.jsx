// Material Kit 2 React components
import MKBox from "components/MKBox";

const Sponsors = () => {
	return (
		<MKBox
			alignItems="center"
			minHeight="100vh"
			sx={{
				backgroundImage: ({
					palette: { gradients },
					functions: { linearGradient, rgba },
				}) =>
					`${linearGradient(
						rgba(gradients.dark.main, 0.5),
						rgba(gradients.dark.state, 0.5)
					)}`,
				top: "50px",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div style={{ position: "absolute", top: "200px", width: "100%" }}>
				<div
					style={{
						position: "relative",
						left: "50%",
						width: "100px",
					}}
				>
					Sponsors
				</div>
			</div>
		</MKBox>
	);
};

export default Sponsors;
