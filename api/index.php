<?php
function get_movie_list()
{
  //build JSON array
  $movie_list = array(
	array("id" => "1", "title" => "Iron Man", "description" => "Billionaire industrialist Tony Stark builds himself a suit of armor after he is taken captive by a terrorist organization.  Free from his captors, he decides to upgrade and don his armor as Iron Man in order to hunt down weapons that were sold under the table."),
	array("id" => "2", "title" => "The Incredible Hulk", "description" => "After being exposed to gamma radiation that causes him to transform into the monstrous Hulk, scientist Bruce Banner goes on the run and isolates himself from his love, Betty Ross. Hunted by the military, Banner seeks to cure himself and prevent his condition from being weaponized."),
	array("id" => "3", "title" => "Iron Man 2", "description" => "After Tony Stark reveals himself to be Iron Man, the U.S. government demands he hand over his technology. Meanwhile, a rival industrialist and a Russian scientist conspire to use his own technology against him."),
	array("id" => "4", "title" => "Thor", "description" => "Thor, crown prince of Asgard, is banished to Earth and stripped of his powers after he reignites a dormant war. As his brother, Loki, plots to take the throne for himself, Thor must prove himself worthy and reclaim his hammer Mjolnir."),
	array("id" => "5", "title" => "Captain America The first Avenger", "description" => "In 1942, Steve Rogers is deemed physically unfit to enlist in the U.S. Army and fight the Nazis in World War II. Recruited for a secret military operation, he is physically transformed into a super-soldier dubbed Captain America and must battle the Red Skull, head of a Nazi weaponry division known as Hydra."),
	array("id" => "6", "title" => "Marvel's The Avengers", "description" => "Nick Fury, the director of S.H.I.E.L.D., gathers the superheroes Iron Man, Thor, Captain America, the Hulk, Black Widow and Hawkeye to fight Thor's brother Loki, who plots to subjugate the Earth.")
  ); 

  return $movie_list;
}

//return JSON array
exit(json_encode(get_movie_list()));
?>