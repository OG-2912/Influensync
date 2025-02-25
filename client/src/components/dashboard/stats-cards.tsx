import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { platformIcons, platforms } from "@/lib/mock-data";

export function StatsCards() {
  const totalFollowers = platforms
    .filter(p => p.connected)
    .reduce((acc, p) => acc + p.followers, 0);

  const avgEngagement = platforms
    .filter(p => p.connected)
    .reduce((acc, p) => acc + p.engagement, 0) / platforms.filter(p => p.connected).length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalFollowers.toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Engagement Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgEngagement.toFixed(1)}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Connected Platforms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {platforms.filter(p => p.connected).map(platform => {
              const Icon = platformIcons[platform.id];
              return (
                <Icon key={platform.id} className="h-6 w-6 text-muted-foreground" />
              );
            })}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-600">+5.2%</div>
        </CardContent>
      </Card>
    </div>
  );
}
