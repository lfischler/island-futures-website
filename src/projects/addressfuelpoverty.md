---
title: "Address Fuel Poverty data activist webapp"
summary: "An interactive and collaborative data visualisation project for activist and community groups fighting fuel poverty in Scotland."
image: /images/address-fuel-poverty-image.jpg
imageAlt: "_"
tech:
  - "Academic Research"
  - "Web Development"
  - "Data Activism"
siteUrl: "#"
repoUrl: "https://github.com/lfischler/Address-Fuel-Poverty"
year: "2023"
client: "University work"
skills: "Design, Research, Web Development, Data Analysis"
---

## Motivation
Just under one quarter of all homes in Scotland were estimated to be in fuel poverty in 2019 (Scottish Government, 2019). With the cost of living increasing rapidly, many more households will be at risk across Scotland (Brooks, 2022) if action isn’t taken now.

The main cause of fuel poverty is poor building condition and inadequate insulation. When this is combined with low household income, a property becomes at risk (Energy Action Scotland, no date). Due to the complexity of these overlapping factors, fuel poverty must be examined as a temporal and spatial issue that exists due to historic lack of funding (Dowson et al., 2012) and structural inequalities. This project makes use of a new medium for such activism: mapping and data.

## Project Description

Data has what Renzi and Langolis describe as "transformative and affective potential". It offers the possibility to shape how we see things and, when in the hands of activists, can be used to trigger societal change (2020).

The Address Fuel Poverty webapp builds on Energy Action Scotland’s work creating a National Fuel Poverty Map (2021) by adding the ability to zoom beyond just regional level down to individual postcode level making the data tangible, relatable, and specific. This mapping process aims to highlight key spatial inequalities with regards to fuel poverty such as a risk to households in rural and exposed areas (who often have less capacity and ability to participate in development conversations (Mansuri, 2013)) and the impact of local issues and contexts.

Each postcode has been assigned a fuel poverty risk score by combining data from two publicly available datasets: the mean score of all Energy Performance Certificates (Scottish Government, 2022) since 2012 at that postcode; and its Scottish Index of Multiple Deprivation score (Scottish Government, 2020). This data is accessed through an interactive postcode lookup page (as inspired by the Central Office of Public Interest’s project _addresspollution.org_ (2022)) and an interactive map.

The creation of data activist work of this kind can elevate activist practices in a medium that is “credible and legible" to policymakers (Blacker, 2021) whilst also offering the opportunity to inform grassroots groups in targeting their work in communities to those most at risk.
Choice of Technologies

Address Fuel Poverty depends on a series of open-source technologies:

    The Python programming language an packages numpy and pandas;
    The Streamlit platform;
    The Folium geospatial maps based on leaflet.js.

We have decided to use the Streamlit platform due to its ease of use and simple integration with the popular python language, removing the requirement for high levels of data literacy. This, in turn, removes some of the labour associated with activist practices (Kidd, 2019) that can exclude individuals suffering from existing injustices from taking part (Mansuri, 2013).

The decision to create an interactive map was informed by Rubel et al.’s work teaching spatial justice to children. Their project aims to shift analysis of poverty to be understood within the context of place itself and how spatial relations produce and reproduce poverty. Rubel et al. explore injustices at different scales, and how they interact. In their work they begin at city level and end at the level of the individual (2016); we have instead created a Folium choropleth map which gives a birds-eye-view over a whole region; yet can be zoomed down to postcode level detail where individual neighbourhoods can be examined. This level of detail allows activists to understand the impacts different factors might be having on fuel poverty at different scales to generate specific responses. It also addresses the challenges of getting data about specific locations, in particular rural and isolated locations, to inform decisions about development projects (Gunderson, 2023).

Data activism brings the performativity of data out of the hands of the powerful and well-resourced and into the hands of non-powerful (Renzi and Langlois, 2020). The decision to make this project open source, with the code freely available on GitHub, allows anyone to see and assess how the results are calculated and visualised. It gives the option for experts, practitioners, and people with lived experience to contribute towards it or remix it into new work. We hope that, by bringing open source practices to fuel poverty work, we can engage and re-engage communities in a space for participation that is novel and comprised of “unlikely networks” (Erasmus, 2023).

This decision was informed by Kidd’s work studying data activism and documenting the way it creates connection, identity and a sense of possibility to enact change on their situation (2019). Such data activist projects allow for the shaping of data as a medium that has agency in itself (Blacker, 2021) and can help to not only inform, but build new realities (Renzi and Langlois, 2020).