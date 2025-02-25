import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, BarChart2, FileText, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Logo } from "@/components/ui/logo";

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Posts", href: "/posts", icon: FileText },
];

export function Sidebar() {
  const [location] = useLocation();
  const { logoutMutation } = useAuth();

  return (
    <div className="h-screen border-r bg-white/50 backdrop-blur-sm flex flex-col">
      <div className="p-6">
        <Logo />
      </div>
      <ScrollArea className="flex-1 px-4">
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2",
                    location === item.href && "bg-primary/10 text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <div className="p-6 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-destructive"
          onClick={() => logoutMutation.mutate()}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}