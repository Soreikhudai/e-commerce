import React from "react";
import "./Reviews.css";
function Reviews() {
  const form = document.querySelector("form");
  const reviewsContainer = document.getElementById("reviews-container");

  const submit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    const reviewElem = document.createElement("div");
    reviewElem.classList.add("review");

    const nameElem = document.createElement("h2");
    nameElem.textContent = name;
    reviewElem.appendChild(nameElem);

    const ratingElem = document.createElement("div");
    ratingElem.classList.add("rating");
    for (let i = 0; i < rating; i++) {
      const starElem = document.createElement("span");
      starElem.classList.add("star");
      switch (rating) {
        case "1":
          starElem.classList.add("one-star");
          break;
        case "2":
          starElem.classList.add("two-stars");
          break;
        case "3":
          starElem.classList.add("three-stars");
          break;
        case "4":
          starElem.classList.add("four-stars");
          break;
        case "5":
          starElem.classList.add("five-stars");
          break;
        default:
          starElem.classList.add("five-stars");
      }
      ratingElem.appendChild(starElem);
    }
    reviewElem.appendChild(ratingElem);

    const reviewTextElem = document.createElement("p");
    reviewTextElem.textContent = review;
    reviewElem.appendChild(reviewTextElem);

    reviewElem !== null && reviewsContainer.appendChild(reviewElem);

    form.reset();
  };

  return (
    <div>
      <h2>Write Reviews</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="rating">Rating:</label>
        <select id="rating" required>
          <option value="" defaultValue="5" disabled hidden>
            Choose rating
          </option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
        <label htmlFor="review">Review:</label>
        <textarea id="review" required></textarea>
        <button type="submit" id="submit-btn" onClick={submit}>
          Submit
        </button>
      </form>
      <div id="reviews-container"></div>
      <div id="display"></div>
    </div>
  );
}

export default Reviews;
