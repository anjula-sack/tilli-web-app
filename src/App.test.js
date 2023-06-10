import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders login screen", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const loginElement = screen.getByText(/Login/i);
    expect(loginElement).toBeInTheDocument();
  });

  test("renders dashboard screen", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Mock the route change to '/Dashbord'
    // You can modify the test to match the actual route
    // or use a different method to simulate navigation
    window.history.pushState({}, "Test page", "/Dashbord");

    const dashboardElement = screen.getByText(/Dashboard/i);
    expect(dashboardElement).toBeInTheDocument();
  });

  // Add more tests for other routes and components...
});
