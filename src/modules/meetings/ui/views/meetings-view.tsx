"use client";

import { DataTable } from "@/components/data-table";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import DataPagination from "@/components/data-paginations";

const MeetingsView = () => {
  const trpc = useTRPC();
  const [filters, setFilters] = useMeetingsFilters();
  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({ ...filters })
  );
  const router = useRouter();

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4 ">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data?.items?.length === 0 && (
        <EmptyState
          title="Create your first meeting"
          description="Schedule a meeting to connect wih others. Each meeting lets you collaborate, share ideas, and interact with participants in real time."
        />
      )}
    </div>
  );
};

export default MeetingsView;
