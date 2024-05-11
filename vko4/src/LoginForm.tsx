import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log("Tunnistautuminen onnistui! Kirjautunut käyttäjä: " + user.email);
      });
      // Kirjautuminen onnistui
    } catch (error) {
      console.log(error);
      // Kirjautuminen epäonnistui, näytä virheilmoitus käyttäjälle
    }
  };

  return (
    <div>
      <h2>Kirjaudu sisään</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Sähköposti:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Salasana:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kirjaudu sisään</button>
      </form>
    </div>
  );
}

export default LoginForm;
