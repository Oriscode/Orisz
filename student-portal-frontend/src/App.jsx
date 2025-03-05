import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/auth/test")
        .then((res) => res.text())
        .then((data) => setMessage(data));
    }, []);
    return (
        <div>
          <h1>Frontend</h1>
          <p>Backend says: {message}</p>
        </div>
    );
}

export default App;