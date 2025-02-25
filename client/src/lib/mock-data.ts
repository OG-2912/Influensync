import { SocialPlatform, Post, AnalyticsData } from "@shared/schema";
import { 
  RiTwitterXFill,
  RiInstagramLine,
  RiYoutubeLine,
  RiFacebookBoxLine,
  RiTiktokLine 
} from "react-icons/ri";

export const platforms: SocialPlatform[] = [
  {
    id: "twitter",
    name: "Twitter",
    connected: true,
    followers: 12500,
    engagement: 3.2,
  },
  {
    id: "instagram",
    name: "Instagram",
    connected: true,
    followers: 25000,
    engagement: 4.5,
  },
  {
    id: "youtube",
    name: "YouTube",
    connected: false,
    followers: 0,
    engagement: 0,
  },
  {
    id: "facebook",
    name: "Facebook",
    connected: true,
    followers: 15000,
    engagement: 2.8,
  },
  {
    id: "tiktok",
    name: "TikTok",
    connected: false,
    followers: 0,
    engagement: 0,
  },
];

export const platformIcons: Record<string, any> = {
  twitter: RiTwitterXFill,
  instagram: RiInstagramLine,
  youtube: RiYoutubeLine,
  facebook: RiFacebookBoxLine,
  tiktok: RiTiktokLine,
};

export const recentPosts: Post[] = [
  {
    id: "1",
    platform: "twitter",
    content: "Just launched our new product! Check it out! #launch #product",
    likes: 245,
    comments: 32,
    shares: 56,
    status: "published",
  },
  {
    id: "2",
    platform: "instagram",
    content: "Behind the scenes look at our creative process",
    likes: 1245,
    comments: 89,
    shares: 23,
    status: "published",
  },
  {
    id: "3",
    platform: "facebook",
    content: "Join us for our upcoming live event!",
    likes: 567,
    comments: 45,
    shares: 78,
    status: "scheduled",
    scheduledFor: "2024-04-15T15:00:00Z",
  },
];

export const analyticsData: AnalyticsData[] = [
  { date: "2024-03-01", engagement: 2.5, followers: 50000, posts: 15 },
  { date: "2024-03-02", engagement: 2.8, followers: 50200, posts: 18 },
  { date: "2024-03-03", engagement: 3.2, followers: 50500, posts: 20 },
  { date: "2024-03-04", engagement: 2.9, followers: 51000, posts: 16 },
  { date: "2024-03-05", engagement: 3.5, followers: 51200, posts: 22 },
  { date: "2024-03-06", engagement: 3.8, followers: 51500, posts: 25 },
  { date: "2024-03-07", engagement: 3.6, followers: 52000, posts: 21 },
];