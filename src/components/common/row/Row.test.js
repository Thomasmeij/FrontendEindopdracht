// import React from "react";
// import Row from "./Row";
// import {cleanup, render} from "@testing-library/react";
// import axios from "axios";
//
// afterEach(cleanup);
//
// it("fetches and displays data", async () => {
//     axios.get.mockResolvedValue({ data: { movies: "movies are being loaded"} });
//
//     const urlTest = "https://api.themoviedb.org/3"
//     const {getByTestId} = render(<Row fetchUrl={urlTest}/> )
//
//     expect(getByTestId("resolved")).toHaveTextContent()
// });
