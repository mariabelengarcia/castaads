import React from "react";
import "./Input.css";

export default function Input({
	label,
	type = "text",
	name,
	value,
	onChange,
	placeholder,
	textarea = false,
	rows = 3,
	className = "",
	error = "",
	...props
}) {
	const fieldClass = `input-field ${className} ${error ? "error" : ""}`.trim();

	return (
		<div className="input">
			{label && (
				<label className="input-label" htmlFor={name}>
					{label}
				</label>
			)}

			{textarea ? (
				<textarea
					id={name}
					name={name}
					className={fieldClass}
					rows={rows}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					{...props}
				/>
			) : (
				<input
					id={name}
					name={name}
					className={fieldClass}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					{...props}
				/>
			)}

			{error && <div className="input-error">{error}</div>}
		</div>
	);
}
