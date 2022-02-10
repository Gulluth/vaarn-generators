import { sourceOfConflict } from "../shared";

const philosophers = [
  {
    name: "Guild Name (A)",
    options: [
      "Benevolent",
      "Hermetic",
      "Esoteric",
      "Philanthropic",
      "Learned",
      "Arcane",
      "Recondite",
      "Sagacious",
      "Orphic",
      "Wise",
      "Rational",
      "Gnostic",
      "Apt",
      "Astute",
      "Sophic",
      "Brilliant",
      "Watchful",
      "Judicious",
      "Cordial",
      "Auspicious",
    ],
  },
  {
    name: "Guild Name (B)",
    options: [
      "Order Of",
      "Brotherhood Of",
      "Sisterhood Of",
      "College Of",
      "Association Of",
      "Lyceum Of",
      "Institute Of",
      "Organisation Of",
      "School Of",
      "Guild Of",
      "League Of",
      "Federation Of",
      "Society Of",
      "Union Of",
      "Partnership Of",
      "Gathering Of",
      "Family Of",
      "Fraternity Of",
      "Fellowship Of",
      "Syndicate Of",
    ],
  },
  {
    name: "Guild Name (C)",
    options: [
      "The Golden Twins",
      "The Alabaster Hound",
      "Learned Masters",
      "Quiet Brethren",
      "The Auspicious Owl",
      "Somber Scholars",
      "Theoretical Harmony",
      "Star-Blessed Unity",
      "Revealed Wisdom",
      "The Purple Tower",
      "The Red Lectern",
      "The Black Stork",
      "Querulous Investigation",
      "Theoretical Surveyors",
      "Harmonious Students",
      "Humble Philosophers",
      "Solipsist Lectors",
      "Ceaseless Scrutiny",
      "Beneficent Inquiry",
      "Remorseless Discovery",
    ],
  },
  {
    name: "They Study",
    options: [
      "Biology",
      "Geology",
      "Poetry",
      "Hypergeometry",
      "Telepathy",
      "Cloning",
      "Gene-sculpting",
      "History of Vaarn",
      "Quantum Physics",
      "Fungus",
      "Xenolinguistics",
      "Rhetoric",
      "Astronomy",
      "Divination",
      "Mathematics",
      "Alchemy",
      "Synthetic Psychology",
      "Telekinesis",
      "Music",
      "Mind Control",
    ],
  },
  {
    name: "Guild Custom",
    options: [
      "Only Wear White",
      "Only Wear Crimson",
      "Only Men Allowed to Join",
      "Only Women Allowed to Join",
      "Only Synths Allowed to Join",
      "Only Mycomorphs Allowed to Join",
      "Must Remove Body-part to Join",
      "All Members Are ‘Married’",
      "Fast Between Dawn and Dusk",
      "Take Vow of Silence",
      "Renounce All Worldly Goods",
      "Revere an Unintelligible Text",
      "Members Wear Masks",
      "Members Renounce Their Birth Name",
      "Members Ritually Scarred",
      "Members Ritually Tattooed",
      "Members Never Speak to Outsiders",
      "Take Vow of Chastity",
      "Take Vow of Promiscuity",
      "Ritualised Feud With Rival Guild",
    ],
  },
  {
    name: "They Want To",
    options: [
      "Upend the Governing Powers of Gnomon",
      "Discredit a Rival Guild",
      "Obtain Item of Exotica; Currently Possessed By Rival Guild",
      "Obtain Item of Exotica; Believed Lost Somewhere in Vaarn",
      "Obtain Item of Exotica; Currently Possessed By a Noble House",
      "Send a Message to a Guildmember Elsewhere in Vaarn",
      "Obtain Live Specimen of a Rare Monster",
      "Find a Way of Paying Off the Guild’s Ruinous Debts",
      "Finance an Expedition to Some Remote and Dangerous Location in Vaarn",
      "Discover Who Is Leaking Guild Secrets to Rivals",
    ],
  },
  {
    name: "NPC A",
    options: [
      "Haughty, Proud Philosopher",
      "Kind and Naive Philosopher",
      "Accomplished, Respected Philosopher",
      "Loathed, Rude Philosopher",
      "Philosopher, Driven Mad By Their Research",
      "Talented, Arrogant Student",
      "Stupid, Wealthy Student",
      "Dull, but Cheerful Student",
      "Visiting Translator or Other Expert",
      "Synth, Who Assists With Experiments",
    ],
  },
  { name: "Source of Conflict", options: sourceOfConflict },
  {
    name: "NPC B",
    options: [
      "Former Student, Who Has Renounced the Guild",
      "Ageing Philosopher, Respected But Now Bereft of Their Wits",
      "The Head of a Rival Guild",
      "The Wealthy Parent of a Student",
      "Spouse of A Philosopher",
      "Former Student, Who Broke the Guild’s Code",
      "Former Student, Who Founded Rival Guild",
      "Rough Adventurer, Who Provides the Guild With Scavenged Technology",
      "Rich, Idle Noble, Who Fancies Themselves A Thinker",
      "Psychic, Who Channels Unearthly Powers for the Philosophers",
    ],
  },
];
export default philosophers;
