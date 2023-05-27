interface marketFeature {
  feature: string
  img: string
  info: string[]
}

export const marketFeatures: marketFeature[] = [
  {
    feature: 'all',
    img: '/assets/images/home_page_one.avif',
    info: ['Merging retail, food, art, and culture, Grand Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.']
  },

  {
    feature: 'retail',
    img: '/assets/images/home_page_two.avif',
    info: ['Retail Market Hours:', 'Fri–Sun: 11:00AM - 7:00PM']
  },
  {
    feature: 'food',
    img: '/assets/images/home_page_three.avif',
    info: ['Food Hall Hours:', 'Mon–Sun: 11:00AM - 8:00PM']
  }
]
