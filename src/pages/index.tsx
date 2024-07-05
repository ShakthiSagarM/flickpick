import Head from "next/head";
import SelectRoomOptions from "@/components/Room/SelectRoomOptions";


export default function Home() {
  return (
    <>
      <Head>
        <title>FlickPick</title>
      </Head>
        <SelectRoomOptions/>
    </>
  );
}
