import { render, screen } from "@testing-library/react";
import App from "./App";
import CandidateCard from "./components/CandidateCard";
import { BrowserRouter as Router } from "react-router-dom";

it("Renders <App /> component correctly", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText(/^Rule of Thumb.$/)).toBeInTheDocument();
});

it("Renders a candidate correctly", async () => {
  render(
    <CandidateCard
      candidateData={{
        id: 1,
        name: "Kanye West",
        imageUrl: "./kanye.png",
        category: "Entertaiment",
        startDate: "2021-02-10T08:02:17-05:00",
        description:
          "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
        upVotes: 2,
        downVotes: 1,
        theme: {},
      }}
    />
  );
  expect(screen.getByText(/Kanye West/i)).toBeInTheDocument();
});
