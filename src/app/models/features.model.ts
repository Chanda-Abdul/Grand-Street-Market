export interface featureDetail {
  featureLink:string;
  featureName: string;
  feature: string;
  featureOwner: string[]
  retailCategory: string
  retailName: string;
  retailLink: string;
  featureImg: string;
  featureSubImg: string;
  featureQandA: { q: string, a: string[] }[]
}