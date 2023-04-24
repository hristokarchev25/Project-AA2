import ClockLoader from "react-spinners/ClockLoader";

function LoadingPage() {
    return (
        <div style={{  marginTop: "15rem", display: "flex", justifyContent: "space-evenly" }}>
            <ClockLoader
                color={"#01bf71"}
                size={200}
            />
        </div>
    );
};

export default LoadingPage;