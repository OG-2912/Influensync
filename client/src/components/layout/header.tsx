import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";

export function Header() {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b px-6 flex items-center justify-between bg-white/50 backdrop-blur-sm">
      <div>
        <h2 className="text-lg font-semibold">Welcome back, {user?.displayName}</h2>
      </div>
      <Avatar>
        <AvatarFallback className="bg-primary/10 text-primary">
          {user?.displayName?.[0]?.toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </header>
  );
}