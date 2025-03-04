import Image from "next/image";
import { getAnnex } from "../../controllers/contractControllers";

const Page = async ({ params }) => {
  const response = await getAnnex(params.uuid);
  const data = response.data.body;
  console.log(data);
  return (
    <div className="bg-white  max-w-4xl mx-auto min-h-screen flex flex-col justify-start pt-4 text-black">
      <div className="flex justify-between">
        <div className="inline-block border-0 transform rotate-0 translate-z-0">
          <Image
            src="/image2.png"
            width={148.83}
            alt="logo1"
            height={56.54}
            className="inline-block"
          />
        </div>
        <div className="inline-block border-16 border-white transform rotate-0 translate-z-0">
          <Image
            src="/image1.png"
            width={131}
            height={36}
            alt="logo 2"
            className="inline-block"
          />
        </div>
      </div>
      <h1 className="font-bold text-xl mb-2 mt-6">Annex</h1>
      <div className="border border-gray-400 flex">
        <div className="w-4/12  border-1 border-r border-gray-400 p-2 font-bold ">
          <h1>Name of the Client</h1>
        </div>
        <div className="w-8/12 border-1 border-gray-400 border-r  p-2 ">
          <p>{data.Contract.recipient}</p>
        </div>
      </div>
      <div className="border border-t-transparent border-gray-400 flex">
        <div className="w-4/12 border-t-transparent border-r border-1 border-gray-400 p-2 font-bold">
          <h1>Name of the Campaign</h1>
        </div>
        <div className="w-8/12 border-t-transparent border-1 border-r  border-gray-400 p-2">
          {data.campaign}
        </div>
      </div>
      <div className="border border-t-transparent border-gray-400 flex">
        <div className="w-4/12 border-t-transparent border-r border-1 border-gray-400 p-2 font-bold">
          <h1>Influencer pages/channels</h1>
        </div>
        <div className="w-6/12 border-t-transparent border-r border-1 border-gray-400 p-2 font-bold">
          <h1>Influencer spacific dutes</h1>
        </div>
        <div className="w-2/12 border-t-transparent border-1 border-r  border-gray-400 p-2  font-bold">
          <h1>Client Budget</h1>
        </div>
      </div>
      <div className="border border-t-transparent border-r border-gray-400 flex">
        <div className="w-4/12 border-t-transparent border-1 border-r border-gray-400 p-2">
          <ol className="flex flex-col max-w-auto list-decimal list list-inside ">
            {data.recipientSignature.handles.map((item, index) => {
              return (
                <li key={index} className="flex items-center space-x-2">
                  <p className="text-sm text-muted">{item}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="w-6/12 border-t-transparent border-1 border-r border-gray-400 p-2">
          {Object.values(data.scope).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
        <div className="w-2/12 border-t-transparent border-1 border-r  border-gray-400 p-2">
          TZS {data.budget.toLocaleString()}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {[
          {
            label: "Signed By",
            value: data.Contract.recipient,
            isSignature: false,
          },
          { label: "Signed By", value: "Herman Mkamba", isSignature: false },
          {
            label: "Sign",
            value: data.recipientSignature.signature,
            isSignature: true,
          },
          { label: "Sign", value: "hmkamba", isSignature: true },
          {
            label: "Date",
            value: data.recipientSignature.date,
            isSignature: false,
          },
          {
            label: "Date",
            value: data.recipientSignature.date,
            isSignature: false,
          },
        ].map((item, index) => {
          return (
            <div className="flex items-center space-x-2" key={`key${index}`}>
              <div className="">{item.label}:</div>
              <div
                style={{
                  fontFamily: item.isSignature
                    ? "'Bonheur Royale', cursive"
                    : "",
                }}
                className={`border-b grow px-3 border-black border-dashed ${
                  item.isSignature
                    ? "text-4xl font-medium text-blue-600"
                    : "font-semibold"
                } `}
              >
                {item.value}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <p className="text-yellow-500">
          Smart Foundry Limited I P.O. Box 79375 I Dar es Salaam I Tanzania I
          +255 22 277 5801 I
        </p>
        <p className="text-yellow-500">info@smartfoundry.co</p>
        <p className="text-yellow-500">www.smartfoundry.co</p>
        <div className="inline-block border-0 transform rotate-0 translate-z-0"></div>
      </div>
    </div>
  );
};

export default Page;
