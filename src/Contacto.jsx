import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import DatePicker from "./components/datepicker/DatePicker";
import Input from "./components/input/Input";
import "./App.css";
import "./Contacto.css";
import Draw from "./assets/img/draw.svg";

export default function Contacto() {
  const [scheduled, setScheduled] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  function handleConfirm({ date, time }) {
    let ok = true;
    if (!name) {
      setNameError("Por favor completá el nombre.");
      ok = false;
    }
    if (!email || !(email.includes("@") && email.includes("."))) {
      setEmailError(!email ? "Por favor ingresá tu email." : "Email inválido.");
      ok = false;
    }
    if (!date) {
      setDateError("Elegí un día.");
      ok = false;
    }
    if (!time) {
      setTimeError("Elegí un horario.");
      ok = false;
    }

    if (!ok) return;
    setNameError("");
    setEmailError("");
    setDateError("");
    setTimeError("");
    setScheduled({ date, time });
  }

  return (
    <div className="contact-page">
      <header>
        <Navbar />
      </header>

      <main className="contact-main d-flex justify-content-space-between align-items-center">
        <div>
          <img src={Draw} alt=" "  />
          <h1>¿ Querés crecer ?</h1>
          <h2>Hablemos !</h2>
          <h3>
            Agendá un encuentro y veamos cómo llevar tu negocio para arriba
          </h3>
          <p>
            Elegí un día y un horario disponible para que coordinemos una
            llamada.
          </p>
        </div>

        <div className="contact-form">
          <Input
            label="Nombre"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            error={nameError}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            error={emailError}
          />

          <div>
            <DatePicker
              onConfirm={handleConfirm}
              onChange={() => {
                setDateError("");
                setTimeError("");
              }}
              start="09:00"
              end="17:00"
              step={30}
              minDays={1}
            />
          </div>

          {}
          {(dateError || timeError) && (
            <div style={{ color: "#b33", marginTop: 8 }}>
              {dateError && <div>{dateError}</div>}
              {timeError && <div>{timeError}</div>}
            </div>
          )}

          {scheduled && (
            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: "#f6f7ff",
                borderRadius: 8,
              }}
            >
              <strong>Reunión agendada:</strong>
              <div>
                {scheduled.date} a las {scheduled.time}
              </div>
              <div style={{ marginTop: 8 }}>
                Revisá tu casilla, te enviaremos un correo de confirmación.
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
