import { AiOutlineArrowRight } from "react-icons/ai";

const OverviewItem = ({
  icon,
  value,
  label,
  action,
  actionTitle,
  showAction = true,
}) => {
  return (
    <div>
      <div className="bg-white dark:bg-darkLight w-full  rounded-xl  ">
        <div className="flex space-x-2 px-5 py-3 items-center">
          <div className="w-4/12">
            <div className="size-12 rounded-full bg-primary bg-opacity-10 flex justify-center items-center text-lg text-primary">
              {icon}
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-lg 2xl:text-lg font-semibold">{value}</h1>
            <p className="text-muted line-clamp-1 dark:text-white dark:text-opacity-50 text-sm 2xl:text-sm">
              {label}
            </p>
          </div>
        </div>
        {showAction && (
          <div className="border-t border-muted border-opacity-30 py-2 px-5 text-sm 2xl:text-sm  ">
            <div
              onClick={() => {
                action();
              }}
              className="flex items-center translate-all duration-200 space-x-3 cursor-pointer text-muted dark:text-white dark:text-opacity-50 hover:text-primary"
            >
              <h1 className="">{actionTitle} </h1>
              <AiOutlineArrowRight />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewItem;
