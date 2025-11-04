import { useState, useEffect } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  __v?: number;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://railwaybackend-production-ea2e.up.railway.app/api/users");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const json = await response.json();
        setUsers(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>My Vite + React App</h1>
        <p style={styles.subtitle}>Connected to Railway API</p>
      </header>

      <main style={styles.main}>
        {/* Counter Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Interactive Counter</h2>
          <p style={styles.counter}>{count}</p>
          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => setCount(count + 1)}>+</button>
            <button style={styles.button} onClick={() => setCount(count - 1)}>-</button>
            <button style={{ ...styles.button, background: "#f44336" }} onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        {/* Info Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Info Card</h2>
          <p>This React component uses inline styles and connects to a live backend API.</p>
        </div>

        {/* API Data Card */}
        <div style={{ ...styles.card, width: "100%", maxWidth: "900px" }}>
          <h2 style={styles.cardTitle}>Users from API</h2>

          {loading && <p>Loading data...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}

          {!loading && !error && users && users.length > 0 && (
            <div style={styles.grid}>
              {users.map((user) => (
                <div key={user._id} style={styles.userCard}>
                  <div style={styles.avatar}>{user.name[0].toUpperCase()}</div>
                  <p style={styles.userName}>{user.name}</p>
                  <p style={styles.userEmail}>{user.email}</p>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && users.length === 0 && <p>No users found.</p>}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  userCard: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "1rem",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #4b6cb7, #182848)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 auto 0.75rem",
  },
  userName: {
    fontWeight: "bold",
    margin: "0.25rem 0",
    color: "#182848",
  },
  userEmail: {
    margin: 0,
    color: "#555",
    fontSize: "0.9rem",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
    background: "#182848",
    color: "white",
  },
};
