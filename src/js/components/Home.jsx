import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTasks([...tasks, inputValue]);
			setInputValue("");
		}
	};

	const deleteTask = (index) => {
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
	};

	return (
		<div className="container mt-5" style={{ maxWidth: "600px" }}>
			<h1 className="text-center display-1 text-danger opacity-25">Todo-List</h1>

			<div className="shadow-lg bg-white border">
				<ul className="list-group list-group-flush">
					<li className="list-group-item p-3">
						<input
							type="text"
							className="form-control border-0 fs-4"
							placeholder="What needs to be done?"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</li>

					{tasks.length === 0 ? (
						<li className="list-group-item text-muted p-3 fs-5">
							There is no homework.
						</li>
					) : (
						tasks.map((task, index) => (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between align-items-center task-item p-3 fs-5 text-secondary"
							>
								{task}
								<span
									className="delete-icon text-danger"
									onClick={() => deleteTask(index)}
									style={{ cursor: "pointer" }}
								>
									<i className="fas fa-times"></i>
								</span>
							</li>
						))
					)}
				</ul>

				<div className="p-2 border-top text-muted" style={{ fontSize: "14px" }}>
					{tasks.length} {tasks.length === 1 ? "item" : "items"} left
				</div>
			</div>

			<div className="mx-auto border bg-white shadow-sm" style={{ height: "5px", width: "98%" }}></div>
			<div className="mx-auto border bg-white shadow-sm" style={{ height: "5px", width: "96%" }}></div>
		</div>
	);
};

export default Home;