interface retailVendor {
  vendorCategory: string
  vendorName: string
  link?: string
  description?: string
  websiteURL?: string
  instagramURL?: string
  orderOnlineLink?: string
  images?: string[]
  mainImage?: string
}
// TO-DO => add retail vendor link
export const retailVendors: retailVendor[] = [
  { vendorCategory: 'Design Objects', vendorName: 'American Design Club' },
  { vendorCategory: 'Jewelry', vendorName: 'Beeshaus & Raum NYC' },
  { vendorCategory: 'Jewelry', vendorName: 'Dandy Farmer Bonsai Shop' },
  { vendorCategory: 'Fashion Apparel', vendorName: 'Friend Of A Friend Studio' },
  { vendorCategory: 'Design Objects', vendorName: "Leibal" },
  { vendorCategory: 'K Pop Apparel and Merchandise', vendorName: "Mandu Apparel" },
  { vendorCategory: 'Home Goods', vendorName: 'Mogutable' },
  { vendorCategory: 'Jewelry', vendorName: 'Mottive' },
  { vendorCategory: 'Newstand and Magazines', vendorName: 'Office Magazine Newstand' },
  { vendorCategory: 'Fashion Apparel', vendorName: 'Preppy Trendy' },
  { vendorCategory: 'Sunglasses', vendorName: 'Savage Anchor' },
  { vendorCategory: 'Jewelry', vendorName: 'Seven 50' },
  { vendorCategory: 'Sustainable lifestyle store', vendorName: 'Siizu' },
  { vendorCategory: 'Jewelry', vendorName: 'Swagychic' }]
