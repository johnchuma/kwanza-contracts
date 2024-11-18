import Image from "next/image";
import { getContract } from "../../controllers/contractControllers";

const Page = async ({ params }) => {
  const response = await getContract(params.uuid);
  const data = response.data.body;
  return (
    <div className="bg-white  max-w-4xl mx-auto  text-black">
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
      <p className="text-center font-bold mt-4">
        Smart Foundry Limited Influencer’s Terms of Use Agreement
      </p>
      <p className="mt-4">
        This document spells out specific terms for the engagement between{" "}
        <span className="font-bold">Smart Foundry Limited</span> as an agency
        with{" "}
        <span className="font-bold border-b-2 border-black ">
          {data.recipient}
        </span>{" "}
        as an influencer for the purpose of being an influencer for different
        campaigns that will be done through Kwanza Media Trading Desk and
        annexed to this agreement accordingly as and when they happen.
      </p>
      <p className="my-4 ">Influencers social media handle and/or profiles:</p>
      <ul className=" w-3/12 space-y-1 list-decimal list-inside">
        {data.recipientSignature.handles.map((item) => {
          return (
            <li className="" key={item}>
              <span className="border-b border-dashed pb-1 border-black px-2">
                {item}
              </span>
            </li>
          );
        })}
      </ul>
      <ol className=" list-decimal  space-y-4 pl-5 mt-6">
        <li className="">Smart Foundry Influencer Terms of Use Agreement:</li>
        <div className="space-y-3">
          <p className="">
            Welcome to the Smart Foundry Limited Influencer Program. The term
            “Smart Foundry” or “Kwanza” or “us” or “we” or “our” refers to Smart
            Foundry Limited. The term “you” or “Influencer” or “content creator”
            or “manager” or “representative” refers to the individual who is
            hired to be influencer and/or officially representing influencer(s).
          </p>
          <p className="">
            Smart Foundry Limited provides creators management services to its
            clients (“Clients”) by engaging Influencers to post client-related
            content on Influencers’ personal social media accounts. Each
            marketing campaign for a client is called a “Campaign.”
          </p>
          <p className="">
            Each campaign that influencer will be engaged will have separate
            terms annexed to this agreement as in number of posts, frequency of
            posting, type of posts, period of engagement and amount to be paid.
          </p>
        </div>
        <li className="">Acceptance of Agreement.</li>
        <div className="space-y-3">
          <p className="">
            2.1 By accepting to be an Influencer and/or accepting advertising
            assignment from Smart Foundry Limited, you agree to comply with and
            be bound by the terms and conditions outlined in this Smart Foundry
            Limited Influencer Terms of Use Agreement (“Agreement”) as well as
            the general Terms of Use governing the campaign.
          </p>
          <p className="">
            2.2 You agree that we may make changes to this Agreement and/or its
            annexes at any time and that any amendment to the Agreement will
            take effect upon your notice of such amendment. If we notify you of
            any change to this Agreement that you do not accept, this contract
            shall immediately be terminated, along with any other engagement you
            have with Smart Foundry Limited as an influencer
          </p>
        </div>
        <li className="">Influencer-Created Intellectual Property.</li>

        <div className="space-y-3">
          <p className="">
            3.1 In your performance of a Job as an influencer, you will create
            and post content related to the Job on your personal social media
            accounts. Such content is known as “Influencer Content” and may
            include photographs, video, original artwork, text, intellectual
            property, and any other type of content or media that influencer
            will create or be posted on your social media accounts.
          </p>
          <p className="">
            3.2 You hereby acknowledge and agrees that Smart Foundry Limited and
            their clients is and shall be the sole owner of all right, title and
            interest to any and all Influencer Content perpetually (such
            assigned Influencer Content is referred to as the “Work Product”),
            of which Work Product shall be treated as a work made for hire under
            the Copyright Act.
          </p>
        </div>
        <li className="">Rules of Engagement.</li>
        <div className="space-y-3">
          <p className="">
            4.1 As an Influencer and in the performance of any activity(s),
            influencer represent and warrant that, in addition to the
            Restrictions and Prohibitions on Use in Smart Foundry General Terms
            of Use which will be on (kwanza.co.tz), influencer will comply with
            all of the following rules of conduct:
          </p>
          <ol className="">4.1.1 Postings</ol>
          <p className="">
            Influencer’s social media posts related to this contract will comply
            with the specifications set forth in the contract duties and its
            annexes and any subsequent directions from Smart Foundry regarding
            the contact.
          </p>
          <p className="">
            Influencer will not post anything on any social media account or on
            any other platform or media to disparage either Smart Foundry or any
            Client you are currently working for or you have performed any
            activity for.
          </p>
          <p className="">
            Any post influencer makes on a social media account will not contain
            any content that contains any misstatements of law, falsehood,
            obscenity, severe profanity, or is unlawful, obscene, defamatory,
            libellous, threatening, pornographic, bullying, harassing, hateful,
            racially or ethnically offensive, or encourages conduct that would
            be considered a criminal offense, give rise to civil liability,
            violate any law, or is otherwise inappropriate.
          </p>
          <ol className="">
            <li className="">4.1.2 Disclaimer of Warranty</li>
          </ol>
          <p className="">
            Smart Foundry Limited provides the influencer program and duties to
            you “as-is” without any warranties or representations of any kind,
            whether statutory, express or implied, including but not limited to,
            warranties of title, no infringement, merchantability, fitness for a
            particular purpose, accuracy, completeness or any results to be
            achieved here from.
          </p>
          <ol className="">
            <li className="">4.1.3 Limitation of Liability</li>
          </ol>
          <p className="">
            Smart Foundry Limited and any affiliated party shall not be liable
            for any loss, injury, claim, liability, or damage of any kind
            resulting in any way from influencer’s performing her/his duties or
            any violation by a client in the course of performing your job.
          </p>
          <ol className="">
            <li className="">4.1.4 Independent Contractor</li>
          </ol>
          <p className="">
            In the performance of the parties’ duties and obligations under this
            Agreement, it is mutually understood and agreed that Influencer is
            and will be an independent contractor of Smart Foundry Limited
            and/or the Client. Nothing in this Agreement shall be construed as
            creating a partnership or joint venture between you and Smart
            Foundry, you and a Client, or Smart Foundry Limited and a Client.
            This is a contract for the purpose of amplifying the campaign
            messages and at no point should the influencer portray themselves as
            a Representative of Smart Foundry Limited or its clients.
          </p>
          <ol className="">
            <li className="">4.1.5 Termination of Contract</li>
          </ol>
          <p className="">
            In the event the influencer breaches any terms stipulated in this
            agreement and fail to correct within a period of 5 days to Smart
            Foundry Limited and its client’s satisfaction, Smart Foundry Limited
            will terminate the agreement by giving the influencer written
            notice. The influencer will incur the value of revenue loss for the
            remaining period of the assignment.
          </p>
        </div>
        <li className="">Confidentiality clause:</li>
        <p className="">
          You must not, without the prior written permission of Smart Foundry
          Limited, at any time during your appointment, or after it has ended,
          make or permit any unauthorized use or unauthorized disclosure or any
          information which concerns the work, affairs or objects of the
          Company, or has or which may come to your knowledge during the course
          of your employment, save for that information which is properly in the
          public domain. The terms of this Clause are timeless even after the
          expiry or termination of this Agreement, unless the Company releases
          your obligations in writing.
        </p>
        <li className="">Parties Duties.</li>
        <div>
          <p className="">6.1 Smart Foundry Limited:</p>
          <ol className=" list-item list-inside space-y-3 pl-4">
            <li className="">
              i. Prepare final reports which shall be sent to respective
              client’s according to client’s standards.
            </li>
            <li className="">
              ii. Guide the influencer in sharing content which represent well
              the client on influencer’s tone.
            </li>
            <li className="">
              iii. Prepare proposals and pitch for different campaigns and
              present the same to the client.
            </li>
            <li className="">
              iv. Represent influencer’s interest to the client accordingly.
            </li>
            <li className="">
              v. Whenever need arises train influencer on different marketing
              tactics.
            </li>
            <li className="">
              vi. Onboard influencer for any new campaign and ensure that
              influencer understand the campaign to achieve client’s
              expectations.
            </li>
            <li className="">
              vii. Upgrade and maintain Kwanza digital platform.
            </li>
          </ol>
        </div>
        <div>
          <p className="">6.2 Influencer’s Duties</p>
          <ol className=" list-item list-inside space-y-3 pl-4">
            <li className="">
              i. Create content (video, photo and text) which shall align with
              the client’s campaign according to annex A
            </li>
            <li className="">
              ii. Post content on his/her social media accordingly to annex A.
            </li>
            <li className="">
              iii. Engage accordingly to ensure that the post gets highest level
              of engagement.
            </li>
            <li className="">
              iv. Share high level report to Smart Foundry accordingly.
            </li>
          </ol>
        </div>
        <li className="">Consideration and Terms of Payment</li>
        <div>
          {" "}
          <p className="">
            Subject to clause 6 and Annex A of this agreement, Smart Foundry
            Limited and the Influencer will receive a revenue share of 60:40 in
            favor of the Influencer on client’s budget. Payment will be made in
            arrears after the work is completed, the report is approved by the
            client, and the relevant invoice is submitted to Smart Foundry
            Limited
          </p>
        </div>
      </ol>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {[
          { label: "Signed By", value: data.recipient, isSignature: false },
          { label: "Signed By", value: "Kwanza HOS", isSignature: false },
          {
            label: "Sign",
            value: data.recipientSignature.signature,
            isSignature: true,
          },
          { label: "Sign", value: "hjames", isSignature: true },
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
