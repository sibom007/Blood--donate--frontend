import SingleRequest from "@/feature/blood-request/components/single-request";

type Props = {
  params: {
    requestId: string;
  };
};

export default function Page({ params }: Props) {
  const { requestId } = params;

  return <SingleRequest requestId={requestId} />;
}
