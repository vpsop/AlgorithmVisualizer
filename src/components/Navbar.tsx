// Navbar.tsx
import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	return (
		<nav className="bg-white border-b border-slate-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<a
							href="#"
							className="flex items-center space-x-2"
						>
							<img
								src="/logo.png"
								alt="Logo"
								className="h-[50px] w-[150px] rounded-sm"
							/>
						</a>
					</div>

					<div className="hidden md:flex md:items-center md:space-x-6">
						<a
							href="#"
							className="text-sm hover:text-sky-600"
						>
							Home
						</a>
						<a
							href="#"
							className="text-sm hover:text-sky-600"
						>
							Features
						</a>
						<a
							href="#"
							className="text-sm hover:text-sky-600"
						>
							Pricing
						</a>
						<a
							href="#"
							className="text-sm hover:text-sky-600"
						>
							Contact
						</a>
						<a
							href="#"
							className="ml-4 inline-flex items-center px-3 py-1.5 border border-transparent text-sm rounded-md bg-sky-600 text-white hover:bg-sky-700"
						>
							Get started
						</a>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setOpen((s) => !s)}
							aria-controls="mobile-menu"
							aria-expanded={open}
							className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
						>
							<span className="sr-only">Open main menu</span>
							{open ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			<div
				id="mobile-menu"
				className={`${open ? "" : "hidden"} md:hidden`}
				role="menu"
				aria-label="Mobile menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<a
						href="#"
						className="block px-3 py-2 rounded-md text-base hover:bg-slate-100"
					>
						Home
					</a>
					<a
						href="#"
						className="block px-3 py-2 rounded-md text-base hover:bg-slate-100"
					>
						Features
					</a>
					<a
						href="#"
						className="block px-3 py-2 rounded-md text-base hover:bg-slate-100"
					>
						Pricing
					</a>
					<a
						href="#"
						className="block px-3 py-2 rounded-md text-base hover:bg-slate-100"
					>
						Contact
					</a>
					<a
						href="#"
						className="block px-3 py-2 rounded-md text-base bg-sky-600 text-white text-center"
					>
						Get started
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
