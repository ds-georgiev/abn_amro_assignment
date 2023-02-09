import { TVShowDetails } from "@types";

export default function mockDetailsComponent(): TVShowDetails {
  const data = {
    id: 66,
    title: "The Big Bang Theory",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/173/433868.jpg",
    url: "https://www.tvmaze.com/shows/66/the-big-bang-theory",
    genres: ["Comedy", "Action", "Drama"],
    language: "English",
    rating: 8,
    summary:
      '<p><b>The Big Bang Theory</b> is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of "beautiful minds" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard\'s roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>',
    cast: [
      {
        id: 8679,
        name: "Johnny Galecki",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/0/1078.jpg",
        character: "Leonard Leakey Hofstadter",
      },
      {
        id: 8680,
        name: "Jim Parsons",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/108/272380.jpg",
        character: "Sheldon Lee Cooper",
      },
      {
        id: 8682,
        name: "Simon Helberg",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/0/1081.jpg",
        character: "Howard Joel Wolowitz",
      },
      {
        id: 8683,
        name: "Kunal Nayyar",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/0/1082.jpg",
        character: "Rajesh Ramayan Koothrappali",
      },
      {
        id: 8681,
        name: "Kaley Cuoco",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/168/421311.jpg",
        character: "Penny",
      },
      {
        id: 8685,
        name: "Melissa Rauch",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/45/114860.jpg",
        character: "Bernadette Marianne Rostenkowski",
      },
      {
        id: 8684,
        name: "Mayim Bialik",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/410/1026312.jpg",
        character: "Amy Farrah Fowler",
      },
      {
        id: 8686,
        name: "Kevin Sussman",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/182/456933.jpg",
        character: "Stuart Bloom",
      },
      {
        id: 6656,
        name: "Laura Spencer",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/4/12252.jpg",
        character: "Emily Sweeney",
      },
      {
        id: 8687,
        name: "Sara Gilbert",
        image:
          "https://static.tvmaze.com/uploads/images/medium_portrait/0/1079.jpg",
        character: "Leslie Winkle",
      },
    ],
  };

  return data;
}
