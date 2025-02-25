import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";

export function Header() {
  const { user } = useAuth();
  
  return (
    <header className="h-16 border-b px-6 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold">Welcome back, {user?.displayName}</h2>
      </div>
      <Avatar>
        <AvatarFallback>{user?.displayName?.[0]?.toUpperCase()}</AvatarFallback>
      </Avatar>
    </header>
  );
}
