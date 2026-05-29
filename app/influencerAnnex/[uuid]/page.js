import Image from "next/image";
import { getAnnex } from "../../controllers/contractControllers";

const Page = async ({ params }) => {
  const resolvedParams = await params;
  const uuid = resolvedParams?.uuid ?? "";
  const isValidUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      uuid,
    );

  if (!isValidUuid) {
    return (
      <div className="bg-white max-w-4xl mx-auto min-h-screen flex items-center justify-center text-black p-6">
        <p className="text-center text-lg font-semibold">
          Invalid annex link. Please check the UUID and try again.
        </p>
      </div>
    );
  }

  const response = await getAnnex(uuid);
  const data = response?.data?.body ?? null;

  if (!data) {
    return (
      <div className="bg-white max-w-4xl mx-auto min-h-screen flex items-center justify-center text-black p-6">
        <p className="text-center text-lg font-semibold">
          Annex not found for this link.
        </p>
      </div>
    );
  }

  const recipient = data.Contract?.recipient ?? data.recipient ?? "N/A";
  const campaign = data.campaign ?? "N/A";
  const handles = data.recipientSignature?.handles ?? [];
  const scopeItems = Object.values(data.scope ?? {});
  const budget =
    typeof data.budget === "number" ? data.budget.toLocaleString() : "N/A";
  const signature = data.recipientSignature?.signature ?? "";
  const signatureDate = data.recipientSignature?.date ?? "";

  return (
    <div className="bg-white  max-w-4xl mx-auto min-h-screen flex flex-col justify-start pt-4 text-black">
      <div className="flex justify-between">
        <div className="inline-block border-16 border-white transform rotate-0 translate-z-0">
          <Image
            src="/logo.svg"
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
          <p>{recipient}</p>
        </div>
      </div>
      <div className="border border-t-transparent border-gray-400 flex">
        <div className="w-4/12 border-t-transparent border-r border-1 border-gray-400 p-2 font-bold">
          <h1>Name of the Campaign</h1>
        </div>
        <div className="w-8/12 border-t-transparent border-1 border-r  border-gray-400 p-2">
          {campaign}
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
        <div className="w-4/12 border-t-transparent border-1 border-r border-gray-400 p-2 overflow-hidden">
          <ol className="flex flex-col max-w-auto list-decimal list list-inside ">
            {handles.map((item, index) => {
              return (
                <li key={index} className="flex items-center space-x-2">
                  <p className="text-sm text-muted break-all">{item}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="w-6/12 border-t-transparent border-1 border-r border-gray-400 p-2">
          {scopeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
        <div className="w-2/12 border-t-transparent border-1 border-r  border-gray-400 p-2">
          TZS {budget}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {[
          {
            label: "Signed By",
            value: recipient,
            isSignature: false,
          },
          { label: "Signed By", value: "Herman Mkamba", isSignature: false },
          {
            label: "Sign",
            value: signature,
            isSignature: true,
          },
          { label: "Sign", value: "hmkamba", isSignature: true },
          {
            label: "Date",
            value: signatureDate,
            isSignature: false,
          },
          {
            label: "Date",
            value: signatureDate,
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
        <p className="text-[#00b86b]">
          AdFlow Africa Limited I P.O. Box 79375 I Dar es Salaam I Tanzania I
          +255 22 277 5801 I
        </p>
        <p className="text-[#00b86b]">info@adflow.africa</p>
        <p className="text-[#00b86b]">www.adflow.africa</p>
        <div className="inline-block border-0 transform rotate-0 translate-z-0"></div>
      </div>
    </div>
  );
};

export default Page;
