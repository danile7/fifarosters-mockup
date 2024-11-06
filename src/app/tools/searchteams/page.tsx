import AppInput from "@/lib/components/core/AppInput";
import HomeAd from "@/lib/layouts/home/HomeAd";
import PageContainer from "@/lib/layouts/PageContainer";

export default function SearchTeams() {
  return (
    <div className="flex flex-col">
      <HomeAd />
      <div className="flex justify-center bg-gray-100 ">
        <PageContainer>
          <div className="rounded-ms flex flex-col border border-black border-opacity-20 bg-white p-4">
            <h1 className="text-page-title font-semibold">Search Teams</h1>

            <div className="w-full flex py-4 justify-center">
                <div className = 'flex flex-col gap-2 w-full xl:w-1/2'>
                    <div>Star typing a team name:</div>
                    <div className="w-full flex">
                        <AppInput />
                    </div>
                </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
