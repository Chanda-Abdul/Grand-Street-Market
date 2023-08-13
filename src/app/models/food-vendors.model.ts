import { featureDetail } from "./features.model"

export interface foodVendor {
  id?: number,
  vendorCategory: string
  vendorName: string
  link?: string
  description: string
  websiteURL?: string
  instagramURL?: string
  orderOnlineLink?: string
  images?: string[]
  mainImage?: string
  featureInfo?: featureDetail
}
