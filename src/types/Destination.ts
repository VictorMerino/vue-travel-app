import { Experience } from "./Experience"

export interface Destination {
  id: number
  name: string
  image: string
  description: string
  slug: string
  experiences: Experience[]
}