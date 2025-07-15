import { auth } from "@/lib/auth";
import { CallView } from "@/modules/call/ui/views/call-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    meetingId: string;
  }>;
}

const MeetingId = async ({ params }: Props) => {
  const { meetingId } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queriClient = getQueryClient();
  void queriClient.prefetchQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );
  return (
    <HydrationBoundary state={dehydrate(queriClient)}>
      {/* <Suspense
        fallback={
          <LoadingState
            title="Loading meeting"
            description="This may take a few seconds"
          />
        }
      >
        <ErrorBoundary
          fallback={
            <ErrorState
              title="Error loading Meeting"
              description="Please try again later."
            />
          }
        >
        </ErrorBoundary>
      </Suspense> */}
      <CallView meetingId={meetingId} />
    </HydrationBoundary>
  );
};

export default MeetingId;
