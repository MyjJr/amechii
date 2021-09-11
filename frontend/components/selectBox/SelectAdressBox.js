import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
];

const SelectAdressBox = ({ userInfo }) => {
  const [selected, setSelected] = useState(plans[0]);

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">お届け先住所</RadioGroup.Label>
      <div className="space-y-2">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ active, checked }) =>
              `${
                active
                  ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                  : ""
              }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-lg px-5 py-4 cursor-pointer flex focus:outline-none`
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Description
                        as="p"
                        className={`font-medium ${
                          checked ? "text-sky-100" : "text-gray-500"
                        }`}
                      >
                        000-0000
                      </RadioGroup.Description>

                      <RadioGroup.Label
                        as="p"
                        className={`font-medium ${
                          checked ? "text-white" : "text-gray-900"
                        }`}
                      >
                        神奈川県相模原市中央区淵野辺
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="p"
                        className={`font-medium mt-3 ${
                          checked ? "text-sky-100" : "text-gray-500"
                        }`}
                      >
                        <span>山本花子</span>{" "}
                        <span aria-hidden="true">&middot;</span>{" "}
                        <span>000-0000-0000</span>
                      </RadioGroup.Description>
                    </div>
                  </div>
                  {checked && (
                    <div className="flex-shrink-0 text-white">
                      <CheckIcon className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default SelectAdressBox;
