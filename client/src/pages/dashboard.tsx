import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { EngagementChart } from "@/components/analytics/engagement-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { platforms, recentPosts, platformIcons } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <StatsCards />
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <EngagementChart />
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map(post => {
                    const Icon = platformIcons[post.platform];
                    return (
                      <div key={post.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <Icon className="h-5 w-5" />
                        <div className="flex-1">
                          <p className="line-clamp-1">{post.content}</p>
                          <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                            <span>{post.likes} likes</span>
                            <span>{post.comments} comments</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platforms.map(platform => {
                    const Icon = platformIcons[platform.id];
                    return (
                      <div key={platform.id} className="flex items-center gap-4">
                        <Icon className="h-5 w-5" />
                        <span className="flex-1">{platform.name}</span>
                        <span className={platform.connected ? "text-emerald-600" : "text-destructive"}>
                          {platform.connected ? "Connected" : "Not Connected"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
