import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>My Vite + React App</h1>
        <p style={styles.subtitle}>A self-contained modern front-end</p>
      </header>

      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Interactive Counter</h2>
          <p style={styles.counter}>{count}</p>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
            <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>
            <button style={{ ...styles.button, background: "#f44336" }} onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Info Card</h2>
          <p>This is a self-contained React component using inline styles. It looks clean and modern.</p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#f0f2f5",
  },
  header: {
    padding: "2rem",
    textAlign: "center",
    background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
    color: "white",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
  subtitle: {
    marginTop: "0.5rem",
    fontWeight: 300,
  },
  main: {
    flex: 1,
    display: "flex",
    gap: "2rem",
    padding: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  cardTitle: {
    margin: "0 0 1rem 0",
    fontSize: "1.5rem",
    color: "#182848",
  },
  counter: {
    fontSize: "2rem",
    margin: "1rem 0",
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.5rem 1.2rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    background: "#4b6cb7",
    color: "white",
    cursor: "pointer",
    transition: "0.2s",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
    background: "#182848",
    color: "white",
  },
};

