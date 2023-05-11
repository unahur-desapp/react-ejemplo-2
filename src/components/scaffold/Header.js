import { Link } from "react-router-dom";

export const Header = HeaderTwoOptions;

function HeaderFixedTexts() {
    const optionStyle = { paddingLeft: "2rem", paddingRight: "2rem", color: "white", fontSize: "1.25rem" };
    return <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "steelblue" }}>
        <div style={optionStyle}>Autores y frases</div>
        <div style={optionStyle}>Lista de frases</div>
    </div>
}

function HeaderTwoOptions() {
    const optionStyle = { paddingLeft: "2rem", paddingRight: "2rem", color: "white", fontSize: "1.25rem" };
    return <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "steelblue" }}>
        <Link style={optionStyle} to="/autores-y-frases">Autores y frases</Link>
        <Link style={optionStyle} to="/frases">Lista de frases</Link>
        <Link style={optionStyle} to="/frasesMui">Lista de frases - MUI</Link>
    </div>
}
