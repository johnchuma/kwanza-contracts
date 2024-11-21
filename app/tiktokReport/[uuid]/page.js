import { AiOutlineLike, AiOutlineMessage, AiOutlineShareAlt, AiOutlineUser } from "react-icons/ai";
import BarChart from "../../components/charts/barChart";
import DonutChart from "../../components/charts/donutChart";
import HorizontalBarChart from "../../components/charts/horizontalBarChart";
import OverviewItem from "../../components/overviewItem";
import { getTiktokCampaign } from "../../controllers/reportControllers";
import Image from "next/image";

const Page = async ({params}) => {
const res = await getTiktokCampaign(params.uuid)
const data = res.data.body
 
  return <div className="bg-slate-100">
<div className="  max-w-4xl mx-auto text-slate-800">
<div className="flex justify-between">
        <div className="inline-block border-0 transform rotate-0 translate-z-0">
          <Image
            src="/image2.png"
            alt=""
            width={148.83}
            height={56.54}
            className="inline-block"
          />
        </div>
        <div className="inline-block border-16 border-white transform rotate-0 translate-z-0">
          <Image
            src="/image1.png"
            alt=""
            width={131}
            height={36}
            className="inline-block"
          />
        </div>
      </div>
        <div className="flex justify-between items-start mt-4 mb-6">
          <div className="space-y-2">
            <h1 className="text-2xl 2xl:text-xl font-bold">{data.name}</h1>
            <p className="text-sm text-muted dark:text-white dark:text-opacity-50">
              {data.name} stats and charts
            </p>
          </div>
       
        </div>
          <div>
            <div className="mt-2">
              <div className="grid grid-cols-4 gap-4">
                <OverviewItem
                  icon={<AiOutlineLike />}
                  showAction={false}
                  label={"Likes"}
                  value={data.TiktokCampaignReport.likes}
                />
                <OverviewItem
                  icon={<AiOutlineShareAlt />}
                  showAction={false}
                  label={"Shares"}
                  value={data.TiktokCampaignReport.shares}
                />
                <OverviewItem
                  icon={<AiOutlineMessage />}
                  showAction={false}
                  label={"comments"}
                  value={data.TiktokCampaignReport.comments}
                />
                <OverviewItem
                  icon={<AiOutlineUser />}
                  showAction={false}
                  label={"New Followers"}
                  value={data.TiktokCampaignReport.newFollowers}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="w-full md:w-8/12 bg-white py-8 rounded-xl  p-5">
                <div className="">
                  <h1 className="font-bold text-2xl">Audience Age</h1>
                  <p className="text-sm text-muted dark:text-white dark:text-opacity-50">
                    Audience age distributions
                  </p>
                  <HorizontalBarChart
                    chartType={"bar"}
                    data1={Object.values(
                      data.TiktokCampaignReport.audienceAgePercent
                    ).map((item) => parseInt(item))}
                    categories={Object.keys(
                      data.TiktokCampaignReport.audienceAgePercent
                    )}
                    label1={"Age"}
                  />
                </div>
              </div>
              <div className=" w-full md:w-4/12 bg-white py-8 rounded-xl  p-5">
                <h1 className="font-bold text-2xl">Audience Gender</h1>
                <p className="text-sm text-muted dark:text-white dark:text-opacity-50">
                  Audience Gender distribution
                </p>
                <div className="mt-2">
                  <DonutChart
                    data={Object.values(
                      data.TiktokCampaignReport.audienceGenderPercent
                    ).map((item) => parseInt(item))}
                    labels={Object.keys(
                      data.TiktokCampaignReport.audienceGenderPercent
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="w-full md:w-8/12 bg-white py-8 rounded-xl  p-5">
                <div className="">
                  <h1 className="font-bold text-2xl">Audience Region</h1>
                  <p className="text-sm text-muted dark:text-white dark:text-opacity-50">
                    Audience region distributions
                  </p>
                  <BarChart
                    chartType={"bar"}
                    data1={Object.values(
                      data.TiktokCampaignReport.audienceRegionPercent
                    ).map((item) => parseInt(item))}
                    categories={Object.keys(
                      data.TiktokCampaignReport.audienceRegionPercent
                    )}
                    label1={"Audience"}
                  />
                </div>
              </div>
              <div className=" w-full md:w-4/12 bg-white  py-8 rounded-xl  p-5">
                <h1 className="font-bold text-2xl">Other information</h1>
                <p className="text-sm text-muted dark:text-white dark:text-opacity-50 border-b border-muted border-opacity-40 pb-1">
                  Other collected information from your campaign
                </p>

                <div className="mt-4">
                  {[
                    {
                      title: "Profile Views",
                      value: data.TiktokCampaignReport.profileViews,
                    },
                    {
                      title: "Watched full video",
                      value: `${data.TiktokCampaignReport.watchedFullVideo}%`,
                    },
                    {
                      title: "Button clicks",
                      value: data.TiktokCampaignReport.buttonClicks,
                    },
                    {
                      title: "Video views",
                      value: `${data.TiktokCampaignReport.avarageWatchTime}`,
                    },
                  ].map((item) => {
                    return (
                      <div key={item.title} className="grid grid-cols-12">
                        <div className=" col-span-6 text-sm text-muted">
                          {item.title}:
                        </div>

                        <div className=" col-span-6">{item.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  
    
  
};

export default Page;
