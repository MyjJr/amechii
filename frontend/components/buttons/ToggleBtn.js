import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleBtn({ isPayBack }) {
  const [enabled, setEnabled] = useState(isPayBack);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-green-500" : "bg-gray-200"
      } relative inline-flex items-center h-8 rounded-full w-16 duration-200`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-9" : "translate-x-1"
        } inline-block w-6 h-6 transform bg-white rounded-full duration-200`}
      />
    </Switch>
  );
}
