import { ColumnDef } from "@tanstack/react-table";
import { Issues } from "@taranek/gql-client";
import { formatDate } from "../utils";

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
  },
];
