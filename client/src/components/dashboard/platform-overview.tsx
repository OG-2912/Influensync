import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { platforms, platformIcons } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";

export function PlatformOverview() {
  const connectedPlatforms = platforms.filter(p => p.connected);
  const totalFollowers = connectedPlatforms.reduce((acc, p) => acc + p.followers, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {connectedPlatforms.map(platform => {
            const Icon = platformIcons[platform.id];
            const followerPercentage = (platform.followers / totalFollowers) * 100;
            
            return (
              <div key={platform.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {platform.followers.toLocaleString()} followers
                  </span>
                </div>
                <Progress value={followerPercentage} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Engagement Rate: {platform.engagement}%</span>
                  <span>{followerPercentage.toFixed(1)}% of total</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
