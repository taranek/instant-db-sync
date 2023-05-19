import { ColumnDef } from "@tanstack/react-table";
import { Issues } from "@taranek/gql-client";
import { formatDate } from "../utils";
import { Button } from "../components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/select";
import { update } from "../stores/ObjectPoolStore";
import { runInAction } from "mobx";

export const columns: ColumnDef<Issues>[] = [
  {
    accessorKey: "created_at",
    header: "Created",
    accessorFn: (originalRow, index) => {
      return formatDate(originalRow.created_at);
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: (ctx) => {
      const rowData = ctx.row.original;
      return (
        <>
          <Select
            value={`${rowData.priority}`}
            onValueChange={(value) => {
              const prio = parseInt(value, 10);
              update<Issues>(rowData, (r) => {
                r.priority = prio;
                return r;
              });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Lowest</SelectItem>
              <SelectItem value="1">Low</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="3">High</SelectItem>
              <SelectItem value="4">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </>
      );
    },
  },
];
