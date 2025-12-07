import React, { useEffect, useMemo, useState } from "react";
import "./DatePicker.css";
import "../button/primario.css";

function parseTimeToMinutes(t) {
  const [hh, mm] = t.split(":");
  return parseInt(hh, 10) * 60 + parseInt(mm || "0", 10);
}

function minutesToTime(min) {
  const hh = Math.floor(min / 60).toString().padStart(2, "0");
  const mm = (min % 60).toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

function generateTimeSlots(start = "09:00", end = "17:00", step = 30) {
  const startMin = parseTimeToMinutes(start);
  const endMin = parseTimeToMinutes(end);
  const slots = [];
  for (let m = startMin; m <= endMin; m += step) {
    slots.push(minutesToTime(m));
  }
  return slots;
}

export default function DatePicker({
  start = "09:00",
  end = "17:00",
  step = 30,
  onConfirm,
  onChange,
  externalConfirm = false,
  initialDate = null,
  availableTimes = null,
  minDays = 0,
}) {
  const today = new Date();
  const minDate = new Date(today.getTime() + minDays * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const [date, setDate] = useState(initialDate || minDate);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    setSelectedTime(null);
  }, [date]);

  useEffect(() => {
    if (onChange) {
      onChange({ date, time: selectedTime });
    }
  }, [date, selectedTime, onChange]);

  const slots = useMemo(() => generateTimeSlots(start, end, step), [start, end, step]);

  const disabledForDate = (availableTimes && availableTimes[date]) || [];

  function handleConfirm() {
    if (!date || !selectedTime) return;
    onConfirm && onConfirm({ date, time: selectedTime });
  }

  return (
    <div className="datepicker">
      <div className="datepicker-row">
        <label className="datepicker-label" htmlFor="dp-date">
          Seleccioná un día
        </label>
        <input
          id="dp-date"
          className="datepicker-date"
          type="date"
          value={date}
          min={minDate}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="datepicker-row">
        <label className="datepicker-label">Horario</label>
        <div className="datepicker-times" role="list">
          {slots.map((t) => {
            const disabled = disabledForDate.includes(t);
            const selected = selectedTime === t;
            return (
              <button
                key={t}
                type="button"
                className={`time-slot ${selected ? "selected" : ""}`}
                onClick={() => !disabled && setSelectedTime(t)}
                disabled={disabled}
                aria-pressed={selected}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {!externalConfirm && (
        <div className="datepicker-actions">
          <button
            type="button"
            className="datepicker-confirm boton-primario"
            onClick={handleConfirm}
            disabled={!date || !selectedTime}
          >
            Agendar reunión
          </button>
        </div>
      )}
    </div>
  );
}
