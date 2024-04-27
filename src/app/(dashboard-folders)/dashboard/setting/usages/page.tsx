"use client";
import CircleProgress from "@/components/dashboard/settingPage/CircleProgress";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UsagePage = () => {
  const creditsTotal = 500;
  const creditsUse = 334;
  return (
    <div>
      <div className="flex flex-col justify-center items-start space-y-2 mb-2">
        <h2 className="text-2xl-600 text-primary">Credit Uage</h2>
        <p className="text-xl-400 text-black">
          Credits are used for each message generated by sorayia
        </p>
      </div>
      <div className="h-80 grid grid-cols-2">
        <span className="inline-flex mt-4 gap-2">
          <h3>Stats of :</h3>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="august-2023">AUGUST 2023</SelectItem>
                <SelectItem value="september-2023">SEPTEMBER 2023</SelectItem>
                <SelectItem value="october-2023">OCTOBER 2023</SelectItem>
                <SelectItem value="november-2023">NOVEMBER 2023</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
        <div className="flex flex-col justify-center">
          <span className="flex gap-5">
            <CircleProgress
              creditsUtilises={creditsUse}
              creditsTotaux={creditsTotal}
            />
            <span>
              {creditsUse} / {creditsTotal} credits
            </span>
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-primary text-2xl-500 mb-2">Document</h3>
        <p>Documents you have currently stored out of your allowed quota.</p>
        <Progress
          className="h-8 bg-[#D9D9D9] mt-7"
          creditsTotaux={creditsTotal}
          creditsUtilises={creditsUse}
        />
        <span className="w-full flex justify-end pt-4">
          <span>
            {creditsUse} / {creditsTotal} credits
          </span>
        </span>
      </div>
    </div>
  );
};

export default UsagePage;
