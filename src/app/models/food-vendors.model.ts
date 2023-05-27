interface foodVendor {
  vendorCategory: string
  vendorName: string
  link?: string
  description: string
  websiteURL?: string
  instagramURL?: string
  orderOnlineLink?: string
  images?: string[]
  mainImage?: string
}
// TO-DO => add data

export const foodHallVendors: foodVendor[] = [
  {
    vendorCategory: 'Khao Man Gai',
    vendorName: 'Betong',
    link: "ilili-box",
    description: "Khao Man Gai is a treasured Thai variation of Hainanese Chinese rice, a dish that is extremely popular through Southeast Asia. Betong's Khao Man Gai is a reflection of Chef Noon's childhood growing up in Betong, Thailand.",
    websiteURL: "https://www.instagram.com/betong.nyc/",
    orderOnlineLink: "https://www.seamless.com/menu/betong---khao-man-gai-265-canal-st-new-york/4452632",
    images: [
      'https://images.prismic.io/canalstreetmarket/f48ec466-919e-4eeb-bf0a-d861ed92d4bb_Betong.jpg?',
      'https://images.prismic.io/canalstreetmarket/8e87d276-7b06-4891-837a-81c3305058ac_Betong+2.jpg',
      'https://images.prismic.io/canalstreetmarket/b7288248-c622-4a32-a1bb-a85fce8c75f5_Betong+3.jpg',
      'https://images.prismic.io/canalstreetmarket/e5b39a88-8fd9-4dae-bc89-38fe88b46ff1_Betong+4.jpg'],
    mainImage: 'https://images.prismic.io/canalstreetmarket/056a1e39-af19-4901-9738-36ac5abbb0f9_Betong.png'
  },
  {
    vendorCategory: 'Coffee, Pastries & Smoothies',
    vendorName: 'Chinatown Deli',
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Artisanal Chocolates', vendorName: ' Daniel Corpuz Chocolatier',
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Napoli Style Pizza', vendorName: 'Enzo Bruni La Pizza Gourmet',
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Chinese Classics', vendorName: "Joe's Rice and Noodles",
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Cantonese Steamed Rice Rolls', vendorName: "Joe's Steam Rice Roll",
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Delicious Filipino Classics', vendorName: 'Kabisera',
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Bingsoo Sundaes & Bubble Tea', vendorName: 'Lazy Sundaes',
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Sushi, Handrolls & Chirashi', vendorName: 'Mastunori',
    link: "",
    description: "",
    websiteURL: "",
    instagramURL: ""
  },
  {
    vendorCategory: 'Filipino Inspired Taqueria',
    vendorName: 'Mucho Sarap',
    link: "mucho-sarap",
    description: "Here at So Sarap's first brick-and-mortar, chef/owner VJ Navarro melds street food of the Philippines along with Mexican flavors for offerings like Taco de Longaniza (sweet Filipino sausage) and Taco de Nilaga (beef short ribs, cheek, and tongue).",
    websiteURL: "https://www.sosarapnyc.com/",
    instagramURL: "https://www.instagram.com/sosarapnyc/",
    images: []
  },
]
