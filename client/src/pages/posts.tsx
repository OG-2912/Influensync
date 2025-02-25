import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentPosts, platformIcons } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function PostStatus({ status }: { status: string }) {
  const colors = {
    draft: "bg-muted text-muted-foreground",
    scheduled: "bg-blue-100 text-blue-800",
    published: "bg-green-100 text-green-800",
  };

  return (
    <Badge variant="outline" className={colors[status as keyof typeof colors]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

export default function Posts() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Posts</h1>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map(post => {
                  const Icon = platformIcons[post.platform];
                  return (
                    <div key={post.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Icon className="h-5 w-5" />
                      <div className="flex-1">
                        <p className="line-clamp-2">{post.content}</p>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{post.likes} likes</span>
                          <span>{post.comments} comments</span>
                          <span>{post.shares} shares</span>
                        </div>
                      </div>
                      <PostStatus status={post.status} />
                      {post.scheduledFor && (
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.scheduledFor).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
