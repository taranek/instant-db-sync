import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";
import React, { useEffect } from "react";
import { useObjectPoolData } from "../hooks/useObjectPoolData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";
import { cn, formatDate } from "../utils";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Check } from "lucide-react";
import { User } from "../models/User";

export const Users = observer(() => {
  const { usersStore } = useRootStore();
  useEffect(() => {
    usersStore.fetchUsers();
  }, []);
  const users = useObjectPoolData((r) => r.usersStore.users);
  console.log("[RENDERING] users", users);
  return (
    <div className={cn("grid grid-cols-5 gap-3")}>
      {users.map((u) => (
        <UserCard user={u} />
      ))}
    </div>
  );
});

type CardProps = { user: User } & React.ComponentProps<typeof Card>;

export function UserCard({ className, user, ...props }: CardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>
          {user.first_name} {user.last_name}
        </CardTitle>
        {user.created_at ? (
          <CardDescription>
            Joined {formatDate(user.created_at)}.
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Issues assigned</p>
            <p className="text-sm text-muted-foreground">1</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
