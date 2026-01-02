1. Project Overview

The Weekend Getaway Ranker is a Python-based data engineering project designed to recommend suitable weekend travel destinations in India.
The system takes a source city as input and ranks tourist destinations using structured data from a travel dataset.
The ranking is performed using three key factors:
Time needed to visit (used as a proxy for distance)
Google review rating
Popularity based on number of Google reviews
The project demonstrates practical data processing, feature normalization, and ranking techniques using Python and Pandas.

-------------------------------------------------------------------------------------------------------------------------------
2. Problem Statement

Design and implement a recommendation engine that:
Accepts a source city as input
Identifies weekend-appropriate destinations
Ranks destinations based on distance (proxy), rating, and popularity

---------------------------------------------------------------------------------------------------------------------------------

3. Dataset Description

The project uses a dataset titled “Top Indian Places to Visit”, which contains information about tourist destinations across India.
Key Attributes:

Zone
State
City
Place Name
Place Type
Time needed to visit (in hours)
Google review rating
Number of Google reviews (in lakhs)

Since geographic distance is not available in the dataset, time needed to visit is used as a logical substitute.
Destinations with shorter visit durations are considered more suitable for weekend trips.

---------------------------------------------------------------------------------------------------------------------------------------

4. Methodology

The ranking process follows these steps:
Accept the source city as user input
Remove destinations belonging to the same city
Filter destinations requiring 8 hours or less to visit
Normalize the following features:

Visit Time (shorter time → higher score)
Rating (higher rating → higher score)
Popularity (more reviews → higher score)
Compute a final weighted score
Rank destinations based on the final score

Weight Assignment
Feature	Weight
Visit Time	50%
Rating	30%
Popularity	20%

---------------------------------------------------------------------------------------------------------------------------------------

5. Project Structure
Weekend-Getaway-Ranker/
│
├── Top Indian Places to Visit.csv
├── main.py
├── requirements.txt
├── README.md
└── sample_output.txt

---------------------------------------------------------------------------------------------------------------------------------------

6. Execution Instructions
Step 1: Install Dependencies

Ensure Python is installed, then run:

pip install -r requirements.txt

Step 2: Run the Program
python main.py

Step 3: Provide Input
Enter Source City: Delhi
The system will display the top-ranked weekend destinations.

---------------------------------------------------------------------------------------------------------------------------------------

7. Technologies Used

Python
Pandas

---------------------------------------------------------------------------------------------------------------------------------------

8. Assumptions

Destinations from the source city are excluded
Time required to visit is treated as a distance proxy
Higher ratings and popularity indicate better destinations

---------------------------------------------------------------------------------------------------------------------------------------

9. Results

The program produces ranked weekend travel recommendations.
Sample results for multiple cities are available in sample_output.txt.

---------------------------------------------------------------------------------------------------------------------------------------

10. Conclusion

This project demonstrates how data engineering techniques can be applied to build a travel recommendation system using real-world data.
The solution is scalable and can be enhanced further.

---------------------------------------------------------------------------------------------------------------------------------------

11. Future Enhancements

Incorporate real geographic distance using map APIs

Add budget and seasonal constraints

Scale the solution using Big Data frameworks (PySpark)

Deploy as a web-based application

--------------------------------------------------------------------------------------------------------------------------------------

12. Author

Mili Parua
B.Tech – Computer Science & Engineering (AI & ML)
