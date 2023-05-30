import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore";
import React, { useEffect } from "react";
import { useObjectPoolData } from "../hooks/useObjectPoolData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card";
import { cn, formatDate } from "../utils";
import { User } from "../models/User";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";
import { update } from "../stores/ObjectPoolStore";

export const Users = observer(() => {
  const { usersStore } = useRootStore();
  useEffect(() => {
    usersStore.fetchUsers();
  }, []);
  const users = useObjectPoolData((r) => r.usersStore.users);
  const issues = useObjectPoolData((r) => r.issuesStore.issues);
  console.log("[RENDERING] users", users);
  return (
    <div className={cn("grid grid-cols-5 gap-3")}>
      <button
        onClick={() => {
          update(users[0], (user) => {
            user.last_name = new Date().getMilliseconds().toString();
            return user;
          });
        }}
      >
        mutate first user
      </button>
      <button
        onClick={() => {
          update(issues[0], (issue) => {
            issue.title = new Date().getMilliseconds().toString();
            return issue;
          });
        }}
      >
        mutate first issue
      </button>
      {users.map((u) => (
        <UserCard user={u} />
      ))}
    </div>
  );
});

type CardProps = { user: User } & React.ComponentProps<typeof Card>;

export function UserCard({ className, user, ...props }: CardProps) {
  return (
    <Card className={cn("justify-center", className)} {...props}>
      <CardHeader className="justify-center items-center">
        <Avatar>
          {user.avatar_url ? (
            <AvatarImage src={user.avatar_url} alt="@shadcn" />
          ) : null}
          <AvatarFallback>CN</AvatarFallback>{" "}
        </Avatar>
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
