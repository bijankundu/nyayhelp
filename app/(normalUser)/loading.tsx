import React from "react";

import Spinner from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="h-[90vh] w-screen flex items-center justify-center">
      <Spinner className="h-16 w-16" />
    </div>
  );
};

export default Loading;
