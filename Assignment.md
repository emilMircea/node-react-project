This is an assignment that requires performing a set of mathematical average calculations and a web UI for visualisation.
A JSON file that contains a collection of reviews for one single accommodation is provided.
**It is expected that the calculations be performed on the server side using Node.js.**
Use those reviews to perform the following tasks:

1) Calculations :
  - calculate the **average of the general rating of the accommodation**.
  - calculate the **average of each of the rating aspects** of the accommodation.
  - calculate the **average or each traveledWith value** of the accommodation.

Keep in mind that **each review has to have a weight value** in the calculations.
The weight value can be calculated as follows:
when the review is older than 5 years its weight value defaults to 0.5. Otherwise it equals: 1 - (current_year - year_of_review)*0.1

```js

year_of_review = (val) => new Date(val).getFullYear()
current_year = new Date().getFullYear()
weight = 0
arr.map((i) => current_year - year_of_review(i.entryDate) > 5 ? [i.ratings.general.general, weight=0.5 ] )

```

2) Build a UI to visualise  **the calculated rating values** of the accommodation **along** with the **list of reviews**.
It is up to you to choose how to serve reviews from the server; the choice will influence the assessment though.

The following functionality is required:
  - filter by traveledWith value.
  - sort by travel date or review submission date.

3) (Nice to implement but not required) implement a **pagination functionality**.
