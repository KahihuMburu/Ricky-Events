import mountain from "@/assets/hero-mountain.jpg";
import cycling from "@/assets/adv-cycling.jpg";
import camping from "@/assets/adv-camping.jpg";
import mtkenya from "@/assets/adv-mtkenya.jpg";
import suswa from "@/assets/adv-suswa.jpg";
import karura from "@/assets/adv-karura.jpg";
import elephant from "@/assets/adv-elephant.jpg";
import sevenponds from "@/assets/adv-sevenponds.jpg";

export type ItineraryStop = { t: string; e: string };

export type Adventure = {
  slug: string;
  name: string;
  category: "Hiking" | "Cycling" | "Camping" | "Nature" | "Road Trip";
  image: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme";
  price: number;
  rating: number;
  slots: number;
  totalSlots: number;
  date: string;
  blurb: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryStop[];
  included: string[];
  excluded: string[];
  packing: string[];
  meetingPoint: string;
  pickupTime: string;
};

const defaultIncluded = [
  "Return transport from Nairobi",
  "Certified, friendly trip guide",
  "Park / conservancy fees",
  "Bottled water & light snacks",
  "First-aid support on the trail",
  "Group photos & trip recap",
];
const defaultExcluded = [
  "Personal hiking / cycling gear",
  "Lunch (recommended budget: KSh 800 – 1,200)",
  "Travel & accident insurance",
  "Personal expenses & tips",
];
const defaultPacking = [
  "Sturdy hiking shoes or trainers",
  "Light rain jacket / windbreaker",
  "Sun hat, sunglasses & sunscreen",
  "2L water bottle (refillable)",
  "Snacks & energy bars",
  "Power bank & phone for photos",
  "Small daypack",
  "Cash for lunch & souvenirs",
];

export const adventures: Adventure[] = [
  {
    slug: "mt-longonot",
    name: "Mt. Longonot Crater Hike",
    category: "Hiking",
    image: mountain,
    duration: "1 day",
    difficulty: "Moderate",
    price: 3500,
    rating: 4.9,
    slots: 6,
    totalSlots: 30,
    date: "Sat, Jun 14",
    blurb: "Walk the rim of a sleeping volcano above the Rift Valley.",
    description:
      "Mt. Longonot is a dormant stratovolcano towering above the Great Rift Valley. We hike up to the crater rim, then loop the full 7.2 km circuit for jaw-dropping views into the forested caldera and out across Lake Naivasha. Expect steep, dusty switchbacks, a rewarding summit moment and one of the most iconic group photos in Kenya.",
    highlights: [
      "360° crater rim loop with Rift Valley views",
      "Summit at 2,776 m above sea level",
      "Group photos at the iconic crater edge",
      "Beginner-friendly with experienced lead guides",
    ],
    itinerary: [
      { t: "5:30 AM", e: "Pickup from Nairobi CBD (Afya Centre)" },
      { t: "8:00 AM", e: "Arrive at the gate, briefing & warm-up" },
      { t: "8:30 AM", e: "Begin ascent to the crater rim" },
      { t: "11:00 AM", e: "Crater rim loop & summit photos" },
      { t: "1:30 PM", e: "Descent and well-earned lunch" },
      { t: "6:30 PM", e: "Back in Nairobi — full of stories" },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
    packing: defaultPacking,
    meetingPoint: "Afya Centre, Tom Mboya Street, Nairobi CBD",
    pickupTime: "5:30 AM sharp (bus departs 5:45 AM)",
  },
  {
    slug: "elephant-hill",
    name: "Elephant Hill Sunrise",
    category: "Hiking",
    image: elephant,
    duration: "1 day",
    difficulty: "Challenging",
    price: 4500,
    rating: 4.8,
    slots: 12,
    totalSlots: 25,
    date: "Sun, Jun 22",
    blurb: "Climb above the clouds in the Aberdares for an unforgettable sunrise.",
    description:
      "Elephant Hill is a steep, lung-burning ridge in the Aberdare Range that rewards every step with cloud-forest, bamboo tunnels and an above-the-clouds summit at 3,590 m. This is one of the most respected day-hikes in Kenya — bring fitness and the views will take care of the rest.",
    highlights: [
      "Above-the-clouds summit at 3,590 m",
      "Bamboo and moss-forest sections",
      "Sunrise / early-light photography",
      "Strong sense of achievement and community",
    ],
    itinerary: [
      { t: "3:30 AM", e: "Pickup from Nairobi CBD" },
      { t: "6:30 AM", e: "Arrive Njabini, briefing & warm-up" },
      { t: "7:00 AM", e: "Begin ascent through the forest" },
      { t: "11:30 AM", e: "Summit & group photos" },
      { t: "3:00 PM", e: "Descent and hot lunch" },
      { t: "8:00 PM", e: "Back in Nairobi" },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
    packing: [...defaultPacking, "Warm layer for the summit", "Hiking poles (recommended)"],
    meetingPoint: "Afya Centre, Tom Mboya Street, Nairobi CBD",
    pickupTime: "3:30 AM sharp (bus departs 3:45 AM)",
  },
  {
    slug: "karura-adventure",
    name: "Karura Forest Escape",
    category: "Nature",
    image: karura,
    duration: "Half day",
    difficulty: "Easy",
    price: 1500,
    rating: 4.7,
    slots: 18,
    totalSlots: 40,
    date: "Sat, Jun 7",
    blurb: "Waterfalls, caves and forest trails minutes from the city.",
    description:
      "An easy, beautiful escape inside Nairobi. We walk the shaded forest trails to the Mau Mau caves, the Karura waterfall and the bamboo grove, then refuel at the River Café. Perfect for first-timers, families, and friends who want nature without leaving the city.",
    highlights: [
      "Karura waterfall & Mau Mau caves",
      "Bamboo grove and shaded forest trails",
      "Beginner-friendly, family-safe pace",
      "Optional brunch at River Café",
    ],
    itinerary: [
      { t: "8:00 AM", e: "Meet at Karura main gate (Limuru Rd)" },
      { t: "8:30 AM", e: "Briefing & guided walk begins" },
      { t: "10:00 AM", e: "Waterfall & Mau Mau caves" },
      { t: "11:30 AM", e: "Bamboo grove & loop back" },
      { t: "12:30 PM", e: "Optional brunch at River Café" },
    ],
    included: ["Park entry fees", "Trip guide", "Group photos", "Bottled water"],
    excluded: ["Transport to/from Karura", "Brunch at River Café", "Personal expenses"],
    packing: ["Comfortable walking shoes", "Water bottle", "Light jacket", "Camera"],
    meetingPoint: "Karura Forest Main Gate, Limuru Road",
    pickupTime: "Self drive / Uber — meet at gate by 8:00 AM",
  },
  {
    slug: "limuru-cycling",
    name: "Limuru Cycling & Brunch",
    category: "Cycling",
    image: cycling,
    duration: "1 day",
    difficulty: "Moderate",
    price: 3800,
    rating: 4.9,
    slots: 4,
    totalSlots: 20,
    date: "Sat, Jun 14",
    blurb: "Misty tea farms, country roads and a long boozy brunch.",
    description:
      "A scenic 25 km cycling loop through Limuru's misty tea estates and quiet country roads, capped with a long, leisurely brunch. Bikes and helmets are provided — all you need is the energy to pedal and the appetite to brunch.",
    highlights: [
      "25 km guided ride through tea country",
      "Bikes, helmets & support van included",
      "Group brunch at a Limuru garden café",
      "Pace set for intermediate riders",
    ],
    itinerary: [
      { t: "6:30 AM", e: "Pickup from Nairobi CBD" },
      { t: "8:30 AM", e: "Bike fitting & safety briefing" },
      { t: "9:00 AM", e: "Ride begins through tea estates" },
      { t: "12:30 PM", e: "Brunch stop at garden café" },
      { t: "3:00 PM", e: "Easy roll back to base" },
      { t: "6:00 PM", e: "Back in Nairobi" },
    ],
    included: [...defaultIncluded, "Bike, helmet & support van"],
    excluded: ["Brunch (~ KSh 1,500)", "Personal cycling kit", "Travel insurance"],
    packing: ["Padded shorts (recommended)", "Closed shoes", "Sunglasses", "Light jacket", "Water bottle", "Cash for brunch"],
    meetingPoint: "Afya Centre, Tom Mboya Street, Nairobi CBD",
    pickupTime: "6:30 AM (bus departs 6:45 AM)",
  },
  {
    slug: "mt-suswa",
    name: "Mt. Suswa Caves & Crater",
    category: "Hiking",
    image: suswa,
    duration: "1 day",
    difficulty: "Moderate",
    price: 4200,
    rating: 4.8,
    slots: 9,
    totalSlots: 28,
    date: "Sat, Jul 5",
    blurb: "Lava caves, baboon parliaments and a crater-within-a-crater.",
    description:
      "Mt. Suswa is one of Kenya's most underrated hikes — a shield volcano with lava caves, a unique crater-within-a-crater, and resident baboon troops. We explore the caves, summit the outer rim and take in views of the Rift Valley floor.",
    highlights: [
      "Guided lava cave exploration",
      "Crater-within-a-crater viewpoint",
      "Baboon troops & Rift Valley scenery",
      "Maasai community visit",
    ],
    itinerary: [
      { t: "5:00 AM", e: "Pickup from Nairobi CBD" },
      { t: "8:00 AM", e: "Arrive Suswa, briefing" },
      { t: "8:30 AM", e: "Lava cave exploration" },
      { t: "11:00 AM", e: "Hike to outer crater rim" },
      { t: "2:00 PM", e: "Lunch & community visit" },
      { t: "7:00 PM", e: "Back in Nairobi" },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
    packing: [...defaultPacking, "Headlamp / torch (for caves)"],
    meetingPoint: "Afya Centre, Tom Mboya Street, Nairobi CBD",
    pickupTime: "5:00 AM (bus departs 5:15 AM)",
  },
  {
    slug: "seven-ponds",
    name: "Seven Ponds Waterfalls",
    category: "Nature",
    image: sevenponds,
    duration: "1 day",
    difficulty: "Moderate",
    price: 4500,
    rating: 4.9,
    slots: 7,
    totalSlots: 22,
    date: "Sun, Jul 13",
    blurb: "Turquoise pools, forest swims and a guided gorge descent.",
    description:
      "A guided descent into a forested gorge in Murang'a with seven stacked turquoise pools and waterfalls. Expect short scrambles, refreshing swims and one of the most photogenic days you'll ever spend outside Nairobi.",
    highlights: [
      "Seven stacked waterfalls and pools",
      "Guided gorge descent with ropes where needed",
      "Forest swim stops",
      "Local lunch with the community",
    ],
    itinerary: [
      { t: "5:30 AM", e: "Pickup from Nairobi CBD" },
      { t: "9:00 AM", e: "Briefing at the trailhead" },
      { t: "9:30 AM", e: "Gorge descent begins" },
      { t: "12:30 PM", e: "Swim stops at the upper pools" },
      { t: "2:30 PM", e: "Local lunch with community" },
      { t: "7:30 PM", e: "Back in Nairobi" },
    ],
    included: defaultIncluded,
    excluded: defaultExcluded,
    packing: [...defaultPacking, "Swimwear & quick-dry towel", "Dry bag for phone"],
    meetingPoint: "Afya Centre, Tom Mboya Street, Nairobi CBD",
    pickupTime: "5:30 AM (bus departs 5:45 AM)",
  },
  {
    slug: "mt-kenya",
    name: "Mt. Kenya Sirimon Route",
    category: "Hiking",
    image: mtkenya,
    duration: "4 days",
    difficulty: "Extreme",
    price: 38500,
    rating: 5.0,
    slots: 8,
    totalSlots: 16,
    date: "Fri, Aug 1",
    blurb: "Summit Africa's second-highest peak with seasoned guides.",
    description:
      "A 4-day expedition up the Sirimon route to Point Lenana (4,985 m) — Mt. Kenya's trekking summit. Includes mountain huts, all meals, porters and certified mountain guides. A serious adventure for fit hikers ready for altitude.",
    highlights: [
      "Summit Point Lenana (4,985 m)",
      "Sleep in mountain huts (Old Moses, Shipton)",
      "Certified mountain guides + porters",
      "All meals on the mountain included",
    ],
    itinerary: [
      { t: "Day 1", e: "Nairobi → Sirimon Gate → Old Moses Camp (3,300 m)" },
      { t: "Day 2", e: "Old Moses → Shipton's Camp (4,200 m)" },
      { t: "Day 3", e: "Summit Point Lenana → descend to Mintos" },
      { t: "Day 4", e: "Mintos → Chogoria Gate → Nairobi" },
    ],
    included: ["Park & camping fees", "Certified mountain guide & porters", "All meals on the mountain", "Hut accommodation", "Return transport from Nairobi"],
    excluded: ["Personal mountain gear (rentals available)", "Travel insurance", "Tips for guides & porters", "Drinks beyond meals"],
    packing: ["4-season sleeping bag", "Insulated jacket & thermals", "Waterproof shell", "Hiking boots (broken in)", "Headlamp + spare batteries", "Hiking poles", "Sun protection", "Personal medication"],
    meetingPoint: "Ricky Events Office, Nairobi (full briefing the night before)",
    pickupTime: "6:00 AM, Day 1",
  },
  {
    slug: "magadi-roadtrip",
    name: "Lake Magadi Road Trip",
    category: "Road Trip",
    image: camping,
    duration: "2 days",
    difficulty: "Easy",
    price: 6800,
    rating: 4.7,
    slots: 14,
    totalSlots: 30,
    date: "Sat, Jul 19",
    blurb: "Hot springs, flamingoes and a campfire under desert stars.",
    description:
      "A 2-day overland road trip to Lake Magadi — Kenya's pink soda lake. Soak in natural hot springs, walk the salt flats with flamingoes, and camp under one of the clearest night skies in the country.",
    highlights: [
      "Soak in natural hot springs",
      "Pink soda lake & flamingo flats",
      "Bonfire & stargazing camp night",
      "Maasai-guided sunrise walk",
    ],
    itinerary: [
      { t: "Day 1 · 6:00 AM", e: "Depart Nairobi via Magadi Road" },
      { t: "Day 1 · 11:00 AM", e: "Arrive Magadi, hot springs swim" },
      { t: "Day 1 · 4:00 PM", e: "Set up camp, sundowners & bonfire" },
      { t: "Day 2 · 6:00 AM", e: "Sunrise walk on the salt flats" },
      { t: "Day 2 · 10:00 AM", e: "Breakfast & break camp" },
      { t: "Day 2 · 4:00 PM", e: "Back in Nairobi" },
    ],
    included: [...defaultIncluded, "Camping gear (tents, mats)", "All meals on the trip"],
    excluded: ["Sleeping bag (rentals available)", "Drinks at the bonfire", "Travel insurance"],
    packing: [...defaultPacking, "Swimwear & towel", "Warm layer for the night", "Sleeping bag (or rent from us)"],
    meetingPoint: "Junction Mall, Ngong Road",
    pickupTime: "6:00 AM (convoy departs 6:15 AM)",
  },
];

export const categories = ["All", "Hiking", "Cycling", "Camping", "Nature", "Road Trip"] as const;
