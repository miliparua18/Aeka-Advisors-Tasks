import pandas as pd
df = pd.read_csv("D:\Technical Assessment (Aeka Advisors)\Task4\Weekend Getaway Ranker\Top Indian Places to Visit.csv")
def rank_weekend_destinations(source_city, top_n=5):
    
    destinations = df[df["City"].str.lower() != source_city.lower()].copy()

    destinations = destinations[destinations['time needed to visit in hrs'] <= 8]

    destinations = destinations.dropna(subset=[
        'time needed to visit in hrs',
        'Google review rating',
        'Number of google review in lakhs'
    ])

    max_time = destinations['time needed to visit in hrs'].max()
    max_rating = destinations['Google review rating'].max()
    max_popularity = destinations['Number of google review in lakhs'].max()

    destinations['Time_score'] = 1 - (destinations['time needed to visit in hrs'] / max_time)
    destinations['Rating_score'] = destinations['Google review rating'] / max_rating
    destinations['Popularity_score'] = destinations['Number of google review in lakhs'] / max_popularity

    destinations['Final_score'] = (
        0.5 * destinations['Time_score'] +
        0.3 * destinations['Rating_score'] +
        0.2 * destinations['Popularity_score']
    )

    destinations = destinations.sort_values(by='Final_score', ascending=False)

    return destinations[
        ['Name', 'State', 'City',
         'time needed to visit in hrs',
         'Google review rating',
         'Number of google review in lakhs']
    ].head(top_n)


source_city = input("Enter Source City: ")

print(f"\nTop Weekend Destinations from {source_city}:\n")
print(rank_weekend_destinations(source_city))